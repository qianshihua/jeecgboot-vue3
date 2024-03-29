import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
   },
   {
    title: '任务状态',
    align:"center",
    dataIndex: 'taskStatus_dictText'
   },
   {
    title: '任务类型',
    align:"center",
    dataIndex: 'taskType_dictText'
   },
   {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
   },
  {
    title: '开始时间',
    align:"center",
    dataIndex: 'startTime'
  },
  {
    title: '结束时间',
    align:"center",
    dataIndex: 'endTime'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "任务状态",
      field: 'taskStatus',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"task_status"
      },
      //colProps: {span: 6},
 	},
	{
      label: "任务类型",
      field: 'taskType',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"task_type"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'createTime',
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '任务状态',
    field: 'taskStatus',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"task_status"
     },
  },
  {
    label: '任务类型',
    field: 'taskType',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"task_type"
     },
  },
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  createTime: {title: 'createTime',order: 0,view: 'datetime', type: 'string',},
  taskStatus: {title: '任务状态',order: 1,view: 'list', type: 'string',dictCode: 'task_status',},
  taskType: {title: '任务类型',order: 2,view: 'list', type: 'string',dictCode: 'task_type',},
  batchNo: {title: '批次号',order: 3,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
