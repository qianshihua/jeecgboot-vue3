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
  {
    label: "排除城市",
    field: 'provinceCode',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "创建时间",
    field: 'createTime',
    component: 'RangePicker',
    componentProps: {
      valueType: 'Date',
      showTime:true
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
  {
    field: 'tqsx',
    component: 'RadioGroup',
    label: '提取先混序',
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '随机',
          value: '1',
        },
        {
          label: '入库时间(先近后远)',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'xydsc',
    component: 'Slider',
    label: '接通次数介于',
    componentProps: {
      min: 0,
      max: 100,
      range: true,
      marks: {
        20: '20次',
        60: '60次',
      },
    },
    colProps: {
      span: 8,
    },
  },
  {
    field: 'xydsc111',
    component: 'Slider',
    label: '接通率介于',
    componentProps: {
      min: 0,
      max: 100,
      range: true,
      marks: {
        20: '20%',
        60: '60%',
      },
    },
    colProps: {
      span: 8,
    },
  },

  {
    label: "近*天无接通",
    field: "jsdc",
    component: 'Input',
    //colProps: {span: 6},
  },

  {
    label: "近*天接通",
    field: "jsdc11",
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
