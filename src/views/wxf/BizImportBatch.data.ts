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
    title: '导入时间',
    align:"center",
    dataIndex: 'importTime'
  },
  {
    title: '原始数量',
    align:"center",
    dataIndex: 'orgNum'
  },
  {
    title: '有效数据',
    align:"center",
    dataIndex: 'validNum'
  },
  {
    title: '重复数据',
    align:"center",
    dataIndex: 'dupNum'
  },
  {
    title: '非法数据',
    align:"center",
    dataIndex: 'invalidNum'
  },
  {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '批次号',
    field: 'batchNo',
    component: 'Input',
  },
  {
    label: '导入时间',
    field: 'importTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '原始数量',
    field: 'orgNum',
    component: 'InputNumber',
  },
  {
    label: '有效数据',
    field: 'validNum',
    component: 'InputNumber',
  },
  {
    label: '重复数据',
    field: 'dupNum',
    component: 'InputNumber',
  },
  {
    label: '非法数据',
    field: 'invalidNum',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'bz',
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
  batchNo: {title: '批次号',order: 0,view: 'text', type: 'string',},
  importTime: {title: '导入时间',order: 1,view: 'datetime', type: 'string',},
  orgNum: {title: '原始数量',order: 2,view: 'number', type: 'number',},
  validNum: {title: '有效数据',order: 3,view: 'number', type: 'number',},
  dupNum: {title: '重复数据',order: 4,view: 'number', type: 'number',},
  invalidNum: {title: '非法数据',order: 5,view: 'number', type: 'number',},
};

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
