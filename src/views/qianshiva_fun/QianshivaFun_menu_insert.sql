-- 注意：该页面对应的前台目录为views/qianshiva_fun文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2024022611195830500', NULL, '手工创建导入表单', '/qianshiva_fun/qianshivaFunList', 'qianshiva_fun/QianshivaFunList', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 1, 0, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840501', '2024022611195830500', '添加手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840502', '2024022611195830500', '编辑手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840503', '2024022611195830500', '删除手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840504', '2024022611195830500', '批量删除手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840505', '2024022611195830500', '导出excel_手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2024022611195840506', '2024022611195830500', '导入excel_手工创建导入表单', NULL, NULL, 0, NULL, NULL, 2, 'qianshiva_fun:qianshiva_fun:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2024-02-26 23:19:50', NULL, NULL, 0, 0, '1', 0);