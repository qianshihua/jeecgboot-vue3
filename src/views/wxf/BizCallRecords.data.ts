import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '开始时间',
    align:"center",
    dataIndex: 'callTime'
   },
   {
    title: '通话时长',
    align:"center",
    dataIndex: 'callDuration'
   },
   {
    title: '录音地址',
    align:"center",
    dataIndex: 'recordingAddress'
   },
   {
    title: '是否拉黑',
    align:"center",
    dataIndex: 'blackFlag_dictText'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'gender_dictText'
   },
   {
    title: '坐席工号',
    align:"center",
    dataIndex: 'seatsNum'
   },
   {
    title: '坐席姓名',
    align:"center",
    dataIndex: 'seatsName'
   },
   {
    title: '客户姓名',
    align:"center",
    dataIndex: 'clientName'
   },
   {
    title: '客户地址',
    align:"center",
    dataIndex: 'clientAddress'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'price'
   },
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'jobName'
   },
   {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
   },
   {
    title: '客户状态',
    align:"center",
    dataIndex: 'clientStatus_dictText'
   },
   {
    title: '客户号码',
    align:"center",
    dataIndex: 'phone'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '开始时间',
    field: 'callTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '通话时长',
    field: 'callDuration',
    component: 'InputNumber',
  },
  {
    label: '录音地址',
    field: 'recordingAddress',
    component: 'Input',
  },
  {
    label: '是否拉黑',
    field: 'blackFlag',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"yn"
     },
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
    label: '坐席工号',
    field: 'seatsNum',
    component: 'Input',
  },
  {
    label: '坐席姓名',
    field: 'seatsName',
    component: 'Input',
  },
  {
    label: '客户姓名',
    field: 'clientName',
    component: 'Input',
  },
  {
    label: '客户地址',
    field: 'clientAddress',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'price',
    component: 'Input',
  },
  {
    label: '任务名称',
    field: 'jobName',
    component: 'Input',
  },
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
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
  callTime: {title: '开始时间',order: 0,view: 'datetime', type: 'string',},
  callDuration: {title: '通话时长',order: 1,view: 'number', type: 'number',},
  recordingAddress: {title: '录音地址',order: 2,view: 'text', type: 'string',},
  blackFlag: {title: '是否拉黑',order: 3,view: 'list', type: 'string',dictCode: 'yn',},
  gender: {title: '性别',order: 4,view: 'list', type: 'string',dictCode: 'sex',},
  seatsNum: {title: '坐席工号',order: 5,view: 'text', type: 'string',},
  seatsName: {title: '坐席姓名',order: 6,view: 'text', type: 'string',},
  clientName: {title: '客户姓名',order: 7,view: 'text', type: 'string',},
  clientAddress: {title: '客户地址',order: 8,view: 'text', type: 'string',},
  price: {title: '备注',order: 9,view: 'text', type: 'string',},
  jobName: {title: '任务名称',order: 10,view: 'text', type: 'string',},
  batchNo: {title: '批次号',order: 11,view: 'text', type: 'string',},
  clientStatus: {title: '客户状态',order: 12,view: 'list', type: 'string',dictCode: 'client_status',},
  phone: {title: '客户号码',order: 13,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}