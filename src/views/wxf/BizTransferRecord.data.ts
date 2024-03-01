import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '客户号码',
    align:"center",
    dataIndex: 'phoneNum'
   },
   {
    title: '运单号',
    align:"center",
    dataIndex: 'transferNum'
   },
   {
    title: '生成运单时间',
    align:"center",
    dataIndex: 'transferCreateTime'
   },
   {
    title: '签收时间',
    align:"center",
    dataIndex: 'signTime'
   },
   {
    title: '运单状态',
    align:"center",
    dataIndex: 'transferStatus'
   },
   {
    title: '实收金额',
    align:"center",
    dataIndex: 'price'
   },
   {
    title: '快递公司-字典项',
    align:"center",
    dataIndex: 'transferComp'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '客户号码',
    field: 'phoneNum',
    component: 'Input',
  },
  {
    label: '运单号',
    field: 'transferNum',
    component: 'Input',
  },
  {
    label: '生成运单时间',
    field: 'transferCreateTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '签收时间',
    field: 'signTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '运单状态',
    field: 'transferStatus',
    component: 'Input',
  },
  {
    label: '实收金额',
    field: 'price',
    component: 'InputNumber',
  },
  {
    label: '快递公司-字典项',
    field: 'transferComp',
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
  phoneNum: {title: '客户号码',order: 0,view: 'text', type: 'string',},
  transferNum: {title: '运单号',order: 1,view: 'text', type: 'string',},
  transferCreateTime: {title: '生成运单时间',order: 2,view: 'datetime', type: 'string',},
  signTime: {title: '签收时间',order: 3,view: 'datetime', type: 'string',},
  transferStatus: {title: '运单状态',order: 4,view: 'text', type: 'string',},
  price: {title: '实收金额',order: 5,view: 'number', type: 'number',},
  transferComp: {title: '快递公司-字典项',order: 6,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}