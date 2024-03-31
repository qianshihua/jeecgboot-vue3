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
  {
    title: '入库时间',
    align:"center",
    dataIndex: 'createTime'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    field: 'rwlx',
    component: 'RadioGroup',
    label: '任务类型',
    componentProps: {
      options: [
        {
          label: '查询',
          value: 'cx',
        },
        {
          label: '提交取数任务',
          value: 'tj',
        },
      ],
    },
  },
  {
    label: "指定批次",
    field: 'batchNo',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "入库时间",
    field: 'createTime',
    component: 'RangePicker',
    componentProps: {
      valueType: 'Date',
      showTime:true
    },
    //colProps: {span: 6},
  },

  {
    label: "排除省份",
    field: 'excludeProvince',
    defaultValue: '650000,540000,630000,230000,220000,210000,460000,530000,150000,620000',
    component: 'JSelectMultiple',
    componentProps:{
      dictCode:"province"
    },
    //colProps: {span: 6},
  },
  {
    label: "排除城市",
    field: 'excludeCity',
    defaultValue: '210300,210100,211000',
    component: 'JSelectMultiple',
    componentProps:{
      dictCode:"city"
    },
    //colProps: {span: 6},
  },
  {
    field: 'tqsx',
    component: 'RadioGroup',
    label: '提取顺序',
    componentProps: {
      options: [
        {
          label: '随机',
          value: 'sj',
        },
        {
          label: '入库时间(先近后远)',
          value: 'rksj',
        },
      ],
    },
  },
  {
    field: 'jtcs',
    component: 'Input',
    label: '接通次数不大于(N)次',
    defaultValue: '10',
    componentProps: {
      component: 'Input',
    },
  },
  {
    field: 'wjt',
    component: 'Input',
    label: '近(N)天无接通',
    defaultValue: '14',
    componentProps: {
      component: 'Input',
    },
  },

  {
    label: "近（N）天不取",
    field: "tqsj",
    defaultValue: '7',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "性别",
    field: "gender",
    component: 'JDictSelectTag',
    componentProps:{
      options: [
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '2',
        },
        {
          label: '非女',
          value: '99',
        },
      ],
    },
  },

  {
    label: "提取数量",
    field: "tqsl",
    component: 'Input',
    //colProps: {span: 6},
  },
];
//表单数据
export const formSchema: FormSchema[] = [

];

// 高级查询数据
export const superQuerySchema = {
  phone: {title: '客户号码',order: 0,view: 'text', type: 'string',},
  clientName: {title: '客户姓名',order: 1,view: 'text', type: 'string',},
  provinceCode: {title: '省',order: 2,view: 'list', type: 'string',dictCode: 'province',},
  cityCode: {title: '市111',order: 3,view: 'list', type: 'string',dictCode: 'city',},
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
