import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '提取时间',
    align:"center",
    dataIndex: 'exportTime'
   },
   {
    title: '数量',
    align:"center",
    dataIndex: 'size'
   },
   {
    title: '文件地址',
    align:"center",
    dataIndex: 'fileAddress'
   },
   {
    title: '提取规则描述',
    align:"center",
    dataIndex: 'exportRule'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '提取时间',
    field: 'exportTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '数量',
    field: 'size',
    component: 'InputNumber',
  },
  {
    label: '文件地址',
    field: 'fileAddress',
    component: 'Input',
  },
  {
    label: '提取规则描述',
    field: 'exportRule',
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
  exportTime: {title: '提取时间',order: 0,view: 'datetime', type: 'string',},
  size: {title: '数量',order: 1,view: 'number', type: 'number',},
  fileAddress: {title: '文件地址',order: 2,view: 'text', type: 'string',},
  exportRule: {title: '提取规则描述',order: 3,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}