import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '批次号',
    align:"center",
    dataIndex: 'batchNo'
  },
  {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
  },
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
  // {
  //  title: '文件地址',
  //  align:"center",
  //  dataIndex: 'fileAddress'
  // },
  {
    title: '提取规则',
    align:"center",
    dataIndex: 'exportRule'
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
    defaultValue: '210300',
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
