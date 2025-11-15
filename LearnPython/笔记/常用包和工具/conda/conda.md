# conda

<https://docs.conda.io/projects/conda/en/stable/index.html>

## conda update

`conda update [包名]`

更新指定的包。

## conda config

### --prepend, --add KEY VALUE

增加配置

### --get KEY

查看配置

## conda create

创建环境。

`conda create [包名=版本号]`

比较特殊的是，python 本身也被 conda 视为一个包。

### -n, --name

指定环境名称

## conda activate

退出环境。

## conda deactivate

进入环境。

`conda deactivate 环境名`

## conda install

安装包。

环境创建时是没有 pip，此时可通过 conda 安装：`conda install pip`。

## conda info

### -e, --envs

列出所有的环境。

## conda env

### list

与`conda info --envs` 相同。
