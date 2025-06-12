---
title: 'resize logic volume on Ubuntu OS'
date: '2021-07-15'
---

- 查看并记下LV的Path
- 查看PV的实际大小
- 根据前两步的LVPath和PV大小，扩容LV（比PV最大值略小1G左右才够分配）
- 让OS识别新的LV

```bash
$ sudo lvdisplay  
LV Path                /dev/ubuntu-vg/ubuntu-lv

$ sudo pvdisplay
PV Size               <63.00 GiB / not usable 0

$ sudo lvextend -L 62G /dev/ubuntu-vg/ubuntu-lv

$ sudo resize2fs /dev/ubuntu-vg/ubuntu-lv
```
