import {BasicColumn} from '/@/components/Table';import {FormSchema} from '/@/components/Table';import { rules} from '/@/utils/helper/validator';import { render } from '/@/utils/common/renderUtils';import {wxfListTransferStatusApi} from "@/views/wxf/BizTransferRecord.api";// import {wxfListTransferStatusApi} from "@/views/wxf/BizTransferRecord.api";import { optionsListApi } from '/@/api/demo/select';//列表数据export const columns: BasicColumn[] = [  {    title: '收件人手机',    align:"center",    dataIndex: 'phone'  },  {    title: '姓名',    align:"center",    dataIndex: 'clientName'  },  {    title: '运单号',    align:"center",    dataIndex: 'transferNum'  },  {    title: '生成运单时间',    align:"center",    dataIndex: 'transferCreateTime'  },  {    title: '签收时间',    align:"center",    dataIndex: 'signTime'  },  {    title: '运单状态',    align:"center",    dataIndex: 'transferStatus'  },  {    title: '实收金额',    align:"center",    dataIndex: 'price'  },  {    title: '物流公司',    align:"center",    dataIndex: 'transferComp'  },  {    title: '收件人地址',    align:"center",    dataIndex: 'clientAddress'  },  {    title: '批次号',    align:"center",    dataIndex: 'batchNo'  },  {    title: '寄件人',    align:"center",    dataIndex: 'senderName'  },  {    title: '原始代收金额',    align:"center",    dataIndex: 'ysdsje'  },  {    title: '改价金额',    align:"center",    dataIndex: 'gjje'  },  {    title: '买家留言',    align:"center",    dataIndex: 'mjly'  },  {    title: '最新路由信息',    align:"center",    dataIndex: 'zxlyxz'  },  {    title: '备注',    align:"center",    dataIndex: 'bz'  },];//查询数据export const searchFormSchema: FormSchema[] = [  {    label: "收件人手机",    field: 'phone',    component: 'Input',    //colProps: {span: 6},  },  {    label: "寄件人",    field: 'senderName',    component: 'Input',    //colProps: {span: 6},  },  {    label: "原始代收金额",    field: 'ysdsje',    component: 'Input',    //colProps: {span: 6},  },  {    label: "改价金额",    field: 'gjje',    component: 'Input',    //colProps: {span: 6},  },  {    label: "买家留言",    field: 'mjly',    component: 'Input',    //colProps: {span: 6},  },  {    label: "运单号",    field: 'transferNum',    component: 'Input',    //colProps: {span: 6},  },  {    label: "运单状态",    field: 'transferStatus',    component: 'ApiSelect',    componentProps: {      // more details see /src/components/Form/src/components/ApiSelect.vue      // api: wxfListTransferStatusApi,      api: optionsListApi,      params: {        dictType: 'transferStatus',      },      resultField: 'list',      // use name as label      labelField: 'name',      // use id as value      valueField: 'id',      // not request untill to select      immediate: false,      onChange: (e) => {        console.log('selected:', e);      },      // atfer request callback      onOptionsChange: (options) => {        console.log('get options', options.length, options);      },    },    //colProps: {span: 6},  },  {    label: "实收金额",    field: 'price',    component: 'ApiSelect',    componentProps: {      // more details see /src/components/Form/src/components/ApiSelect.vue      // api: wxfListTransferStatusApi,      api: optionsListApi,      params: {        dictType: 'price',      },      resultField: 'list',      // use name as label      labelField: 'name',      // use id as value      valueField: 'id',      // not request untill to select      immediate: false,      onChange: (e) => {        console.log('selected:', e);      },      // atfer request callback      onOptionsChange: (options) => {        console.log('get options', options.length, options);      },    },    //colProps: {span: 6},  },  {    label: "物流公司",    field: 'transferComp',    component: 'ApiSelect',    componentProps: {      // more details see /src/components/Form/src/components/ApiSelect.vue      // api: wxfListTransferStatusApi,      api: optionsListApi,      params: {        dictType: 'transferComp',      },      resultField: 'list',      // use name as label      labelField: 'name',      // use id as value      valueField: 'id',      // not request untill to select      immediate: false,      onChange: (e) => {        console.log('selected:', e);      },      // atfer request callback      onOptionsChange: (options) => {        console.log('get options', options.length, options);      },    },    //colProps: {span: 6},  },  {    label: "生成运单时间",    field: "transferCreateTime",    component: 'RangePicker',    componentProps: {      valueType: 'Date',      showTime:true    },    //colProps: {span: 6},  },  {    label: "签收时间",    field: "signTime",    component: 'RangePicker',    componentProps: {      valueType: 'Date',      showTime:true    },    //colProps: {span: 6},  },];//表单数据export const formSchema: FormSchema[] = [  {    label: '收件人手机',    field: 'phone',    component: 'Input',  },  {    label: '运单号',    field: 'transferNum',    component: 'Input',  },  {    label: '生成运单时间',    field: 'transferCreateTime',    component: 'DatePicker',    componentProps: {      showTime: true,      valueFormat: 'YYYY-MM-DD HH:mm:ss'    },  },  {    label: '签收时间',    field: 'signTime',    component: 'DatePicker',    componentProps: {      showTime: true,      valueFormat: 'YYYY-MM-DD HH:mm:ss'    },  },  {    label: '运单状态',    field: 'transferStatus',    component: 'Input',  },  {    label: '实收金额',    field: 'price',    component: 'Input',  },  {    label: "物流公司",    field: 'transferComp',    component: 'Input',    //colProps: {span: 6},  },  {    label: '收件人地址',    field: 'clientAddress',    component: 'Input',  },  {    label: '批次号',    field: 'batchNo',    component: 'Input',  },  // TODO 主键隐藏字段，目前写死为ID  {    label: '',    field: 'id',    component: 'Input',    show: false  },  {    label: '寄件人',    field:"senderName",    component: 'Input'  },  {    label: '原始代收金额',    field:"ysdsje",    component: 'Input'  },  {    label: '改价金额',    field:"gjje",    component: 'Input'  },  {    label: '买家留言',    field:"mjly",    component: 'Input'  },  {    label: '最新路由信息',    field:"zxlyxz",    component: 'Input'  },  {    label: '备注',    field: 'bz',    component: 'Input',  },];// 高级查询数据export const superQuerySchema = {  phone: {title: '收件人手机',order: 0,view: 'text', type: 'string',},  transferNum: {title: '运单号',order: 1,view: 'text', type: 'string',},  transferCreateTime: {title: '生成运单时间',order: 2,view: 'datetime', type: 'string',},  signTime: {title: '签收时间',order: 3,view: 'datetime', type: 'string',},  transferStatus: {title: '运单状态',order: 4,view: 'text', type: 'string',},  price: {title: '实收金额',order: 5,view: 'text', type: 'string',},  transferComp: {title: '物流公司',order: 6,view: 'text', type: 'string',dictCode:"wuliu"},  clientAddress: {title: '收件人地址',order: 7,view: 'text', type: 'string',},  senderName: {title: '寄件人',order: 8,view: 'text', type: 'string',},  ysdsje: {title: '原始代收金额',order: 8,view: 'text', type: 'string',},  gjje: {title: '改价金额',order: 8,view: 'text', type: 'string',},  mjly: {title: '买家留言',order: 8,view: 'text', type: 'string',},  zxlyxz: {title: '最新路由信息',order: 8,view: 'text', type: 'string',},};/** * 流程表单调用这个方法获取formSchema * @param param */export function getBpmFormSchema(_formData): FormSchema[]{  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema  return formSchema;}