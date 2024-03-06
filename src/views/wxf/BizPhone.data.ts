import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '客户名称',
    align:"center",
    dataIndex: 'clientName'
   },
   {
    title: '地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '区域',
    align:"center",
    dataIndex: 'provinceCode',
   },
   {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'gender_dictText'
   },
   {
    title: '是否黑名单',
    align:"center",
    dataIndex: 'black_dictText'
   },
   {
    title: '客户状态',
    align:"center",
    dataIndex: 'clientStatus_dictText'
   },
   {
    title: '最近提取时间',
    align:"center",
    dataIndex: 'lastExportTime'
   },
   {
    title: '客户号码',
    align:"center",
    dataIndex: 'phone'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "区域",
      field: 'provinceCode',
      component: 'JAreaLinkage',
      //colProps: {span: 6},
 	},
	{
      label: "批次号",
      field: 'batchNo',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "客户状态",
      field: 'clientStatus',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"client_status"
      },
      //colProps: {span: 6},
 	},
     {
      label: "最近提取时间",
      field: "lastExportTime",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      //colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '客户名称',
    field: 'clientName',
    component: 'Input',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '区域',
    field: 'provinceCode',
    component: 'JAreaLinkage',
  },
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'gender',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '是否黑名单',
    field: 'black',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"yn"
     },
  },
  {
    label: '客户状态',
    field: 'clientStatus',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"client_status"
     },
  },
  {
    label: '最近提取时间',
    field: 'lastExportTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '客户号码',
    field: 'phone',
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
  clientName: {title: '客户名称',order: 0,view: 'text', type: 'string',},
  address: {title: '地址',order: 1,view: 'text', type: 'string',},
  provinceCode: {title: '区域',order: 2,view: 'pca', type: 'string',},
  batchNo: {title: '批次号',order: 3,view: 'text', type: 'string',},
  gender: {title: '性别',order: 4,view: 'list', type: 'string',dictCode: 'sex',},
  black: {title: '是否黑名单',order: 5,view: 'list', type: 'string',dictCode: 'yn',},
  clientStatus: {title: '客户状态',order: 6,view: 'list', type: 'string',dictCode: 'client_status',},
  lastExportTime: {title: '最近提取时间',order: 7,view: 'datetime', type: 'string',},
  phone: {title: '客户号码',order: 8,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}