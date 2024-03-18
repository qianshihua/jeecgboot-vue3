<template>
  <div>
    <!--引用表格-->
   <BasicTable @register="registerTable" :rowSelection="rowSelection">
     <!--插槽:table标题-->
      <template #tableTitle>
          <a-button  type="primary" preIcon="ant-design:export-outlined" @click="handleSubmit"> 提交取数任务</a-button>

        <!-- 高级查询 -->
<!--        <super-query :config="superQueryConfig" @search="handleSuperQuery" />-->
      </template>
       <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
      </template>
      <!--字段回显插槽-->
      <template v-slot:bodyCell="{ column, record, index, text }">
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <BizExportRecordModal @register="registerModal" @success="handleSuccess"></BizExportRecordModal>
  </div>
</template>

<script lang="ts" name="wxf-bizExportRecord" setup>
  import {ref, reactive, computed, unref} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import {useModal} from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage'
  import BizExportRecordModal from './components/BizExportRecordModal.vue'
  import {columns, searchFormSchema, superQuerySchema} from './BizExportRecord.data';
  import {
    list,
    deleteOne,
    batchDelete,
    getImportUrl,
    getExportUrl,
    downloadExcel,
    submitTask,
    downloadOne, submitFunc
  } from './BizExportRecord.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  import { useUserStore } from '/@/store/modules/user';
  import { useMethods } from '/@/hooks/system/useMethods';
  // import {Api} from "@/views/system/depart/depart.api";

  const queryParam = reactive<any>({});
  const checkedKeys = ref<Array<string | number>>([]);
  const userStore = useUserStore();
  //注册model
  const [registerModal, {openModal}] = useModal();






  const { handleImportXls, handleExportXls } = useMethods();




  //注册table数据
  const { prefixCls,tableContext,onExportXlsx,onExportXls,onImportXls,submitExportTask } = useListPage({
      tableProps:{
           title: '提取记录表',
           api: list,
           columns,
           canResize:false,
           formConfig: {
              //labelWidth: 120,
              schemas: searchFormSchema,
              autoSubmitOnEnter:true,
              showAdvancedButton:true,
              fieldMapToNumber: [
              ],
              fieldMapToTime: [
              ],
            },
           actionColumn: {
               width: 120,
               fixed:'right'
            },
            beforeFetch: (params) => {
             console.log(Object.assign(params, queryParam))
              return Object.assign(params, queryParam);
            },
      },
       exportConfig: {
            name:"提取记录表",
            url: getExportUrl,
            params: queryParam,
          },
          importConfig: {
            url: getImportUrl,
            success: handleSuccess
          },
  })

  const [registerTable, {reload},{ rowSelection, selectedRowKeys }] = tableContext

  // 高级查询配置
  const superQueryConfig = reactive(superQuerySchema);

  /**
   * 高级查询事件
   */
  function handleSuperQuery(params) {
    Object.keys(params).map((k) => {
      queryParam[k] = params[k];
    });
    reload();
  }
   /**
    * 新增事件
    */
  function handleAdd() {
     openModal(true, {
       isUpdate: false,
       showFooter: true,
     });
  }
   /**
    * 编辑事件
    */
   async function handleDownload(record: Recordable) {
     await downloadOne({id: record.id}, handleSuccess);
   }
   /**
    * 详情
   */
   async function handleSubmit() {
     await submitFunc(queryParam, handleSuccess);
   }
   /**
    * 删除事件
    */
  async function handleDelete(record) {
     await deleteOne({id: record.id}, handleSuccess);
   }
   /**
    * 批量删除事件
    */
  async function batchHandleDelete() {
     await batchDelete({ids: selectedRowKeys.value}, handleSuccess);
   }
   /**
    * 成功回调
    */
  function handleSuccess() {
      (selectedRowKeys.value = []) && reload();
   }
   /**
      * 操作栏
      */
  function getTableAction(record){
       return [
         {
           label: '下载文件',
           onClick:  handleExportXls.bind(null,"号码资源", downloadExcel,{id: record.id}),
           // onClick:  handleDownload.bind(null, record),
           // onClick: handleDownload.bind(null, record),
         }
       ]
   }
     /**
        * 下拉操作栏
        */
  function getDropDownAction(record){
       return [
         {
           label: '删除',
           popConfirm: {
             title: '是否确认删除',
             confirm: handleDelete.bind(null, record),
             placement: 'topLeft',
           }
         }
       ]
   }


</script>

<style scoped>

</style>
