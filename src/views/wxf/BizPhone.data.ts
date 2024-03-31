import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '客户号码',
    align:"center",
    dataIndex: 'phone'
  },
  {
    title: '客户姓名',
    align:"center",
    dataIndex: 'clientName'
  },
  {
    title: '省',
    align:"center",
    dataIndex: 'provinceCode_dictText'
  },
  {
    title: '市',
    align:"center",
    dataIndex: 'cityCode_dictText'
  },
  {
    title: '地址',
    align:"center",
    dataIndex: 'address'
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
    title: '总拨打次数',
    align:"center",
    dataIndex: 'totalCount'
  },
  {
    title: '接通次数',
    align:"center",
    dataIndex: 'onCount'
  },
  {
    title: '最近接通时间',
    align:"center",
    dataIndex: 'recentOnTime'
  },
  {
    title: '接通率',
    align:"center",
    dataIndex: 'onRate'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'price'
  },
  {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  // {
  //   label: "省",
  //   field: 'provinceCode',
  //   component: 'JDictSelectTag',
  //   componentProps:{
  //     dictCode:"province"
  //   },
  //   //colProps: {span: 6},
  // },
  // {
  //   label: "市",
  //   field: 'cityCode',
  //   component: 'JDictSelectTag',
  //   componentProps:{
  //     dictCode:"city"
  //   },
  //   //colProps: {span: 6},
  // },
  // {
  //   label: "城市",
  //   field: 'citys',
  //   component: 'JSelectMultiple',
  //   componentProps:{
  //     dictCode:"city"
  //   },
  //   //colProps: {span: 6},
  // },
  {
    label: "号码",
    field: 'phone',
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
    label: "是否黑名单",
    field: 'black',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"yn"
    },
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
    label: '客户号码',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '客户姓名',
    field: 'clientName',
    component: 'Input',
  },
  {
    label: '省',
    field: 'provinceCode',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"province"
    },
  },
  {
    label: '市',
    field: 'cityCode',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"city"
    },
  },
  {
    label: '地址',
    field: 'address',
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
    label: '总拨打次数',
    field: 'totalCount',
    component: 'InputNumber',
  },

  {
    label: '接通次数',
    field: 'onCount',
    component: 'InputNumber',
  },
  {
    label: '最近接通时间',
    field: 'recentOnTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '接通率',
    field: 'onRate',
    component: 'InputNumber',
  },
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'price',
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
  phone: {title: '客户号码',order: 0,view: 'text', type: 'string',},
  clientName: {title: '客户姓名',order: 1,view: 'text', type: 'string',},
  provinceCode: {title: '省',order: 2,view: 'list', type: 'string',dictCode: 'province',},
  cityCode: {title: '市',order: 3,view: 'list', type: 'string',dictCode: 'city',},
  address: {title: '地址',order: 4,view: 'text', type: 'string',},
  gender: {title: '性别',order: 5,view: 'list', type: 'string',dictCode: 'sex',},
  black: {title: '是否黑名单',order: 6,view: 'list', type: 'string',dictCode: 'yn',},
  clientStatus: {title: '客户状态',order: 7,view: 'list', type: 'string',dictCode: 'client_status',},
  lastExportTime: {title: '最近提取时间',order: 8,view: 'datetime', type: 'string',},
  totalCount: {title: '总拨打次数',order: 9,view: 'number', type: 'number',},
  onCount: {title: '接通次数',order: 10,view: 'number', type: 'number',},
  recentOnTime: {title: '最近接通时间',order: 12,view: 'datetime', type: 'string',},
  onRate: {title: '接通率',order: 13,view: 'number', type: 'number',},
  price: {title: '备注',order: 15,view: 'text', type: 'string',},
  batchNo: {title: '批次号',order: 16,view: 'text', type: 'string',},
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
