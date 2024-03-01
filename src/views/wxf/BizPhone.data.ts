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
    title: '省编码',
    align:"center",
    dataIndex: 'provinceCode'
   },
   {
    title: '市编码',
    align:"center",
    dataIndex: 'cityCode'
   },
   {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'gender'
   },
   {
    title: '是否黑名单YN',
    align:"center",
    dataIndex: 'black'
   },
   {
    title: '客户状态-成功客户-失败客户',
    align:"center",
    dataIndex: 'clientStatus'
   },
   {
    title: '最近提取时间，最近导出时间',
    align:"center",
    dataIndex: 'lastExportTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "省编码",
      field: 'provinceCode',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "市编码",
      field: 'cityCode',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "批次号",
      field: 'batchNo',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "客户状态-成功客户-失败客户",
      field: 'clientStatus',
      component: 'Input',
      //colProps: {span: 6},
 	},
     {
      label: "最近提取时间，最近导出时间",
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
    label: '省编码',
    field: 'provinceCode',
    component: 'Input',
  },
  {
    label: '市编码',
    field: 'cityCode',
    component: 'Input',
  },
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'gender',
    component: 'Input',
  },
  {
    label: '是否黑名单YN',
    field: 'black',
    component: 'Input',
  },
  {
    label: '客户状态-成功客户-失败客户',
    field: 'clientStatus',
    component: 'Input',
  },
  {
    label: '最近提取时间，最近导出时间',
    field: 'lastExportTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
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
  provinceCode: {title: '省编码',order: 2,view: 'text', type: 'string',},
  cityCode: {title: '市编码',order: 3,view: 'text', type: 'string',},
  batchNo: {title: '批次号',order: 4,view: 'text', type: 'string',},
  gender: {title: '性别',order: 5,view: 'text', type: 'string',},
  black: {title: '是否黑名单YN',order: 6,view: 'text', type: 'string',},
  clientStatus: {title: '客户状态-成功客户-失败客户',order: 7,view: 'text', type: 'string',},
  lastExportTime: {title: '最近提取时间，最近导出时间',order: 8,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}