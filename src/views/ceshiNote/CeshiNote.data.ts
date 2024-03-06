import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '请假人',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '头像',
    align:"center",
    dataIndex: 'pic',
    customRender:render.renderImage,
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'sex_dictText'
   },
   {
    title: '请假天数',
    align:"center",
    dataIndex: 'days'
   },
   {
    title: '部门',
    align:"center",
    dataIndex: 'depId_dictText'
   },
   {
    title: '上级领导',
    align:"center",
    dataIndex: 'depLeader_dictText'
   },
   {
    title: '请假原因',
    align:"center",
    dataIndex: 'ccc1'
   },
   {
    title: 'aaa',
    align:"center",
    dataIndex: 'aaa'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '请假人',
    field: 'name',
    component: 'Input',
  },
  {
    label: '头像',
    field: 'pic',
     component: 'JImageUpload',
     componentProps:{
      },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '请假天数',
    field: 'days',
    component: 'InputNumber',
  },
  {
    label: '部门',
    field: 'depId',
     component: 'JSelectDept',
  },
  {
    label: '上级领导',
    field: 'depLeader',
    component: 'JSelectUser',
    componentProps:{
        labelKey:'realname',
     },
  },
  {
    label: '请假原因',
    field: 'ccc1',
    component: 'InputTextArea',
  },
  {
    label: 'aaa',
    field: 'aaa',
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
  name: {title: '请假人',order: 0,view: 'text', type: 'string',},
  pic: {title: '头像',order: 1,view: 'image', type: 'string',},
  sex: {title: '性别',order: 2,view: 'list', type: 'string',dictCode: 'sex',},
  days: {title: '请假天数',order: 3,view: 'number', type: 'number',},
  depId: {title: '部门',order: 4,view: 'sel_depart', type: 'string',},
  depLeader: {title: '上级领导',order: 5,view: 'sel_user', type: 'string',},
  ccc1: {title: '请假原因',order: 6,view: 'textarea', type: 'string',},
  aaa: {title: 'aaa',order: 7,view: 'text', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}