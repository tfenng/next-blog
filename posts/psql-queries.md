---
title: 'common queries in postgres sql'
date: '2021-08-03'
---

- 查看版本
- 查看服务启动时长
- 当前数据库的文件容量
- 会话列表

```sql
select version();

select date_trunc('second',current_timestamp - pg_postmaster_start_time()) as uptime;

select pg_size_pretty(pg_database_size(current_database()));

select datname, usezname, state, query from pg_stat_activity;
```

