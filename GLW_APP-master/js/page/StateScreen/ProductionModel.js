/**
 *
 属性说明
 *
 @property {属性类型} 属性名
 @property {Int} ProductionID生产线id
 @property {String} ProductionName 生产线名称
 @property {object} OfflineEquipmentStatus 线下设备状态

 @property {object} EquipmentID 线下设备状态
 @property {String} Status 设备状态
 @property {num} cost 费用
 @property {String} BootTime 开机时间
 @property {String} ImagePath 图片路径

 */
export const itemInfos = [
    {
        ProductionID:1,
        ProductionName:'生产线1',
        OfflineEquipmentStatus:[{
            EquipmentID:'1-1',
            Equipment:'检测台',
            name:"检测台状态",
            Status:"正在加工",
            cost:1654,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/jct.png')
        }, {
            EquipmentID:'1-2',
            name:"磨边机1状态",
            Equipment:'磨边机1',
            Status:"正在加工",
            cost:1666,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'1-3',
            Equipment:'磨边机2',
            name:"磨边机2状态",
            Status:"正在加工",
            cost:1254,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'1-4',
            Equipment:'清洗机',
            name:"清洗机状态",
            Status:"正在加工",
            cost:1554,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/qxj.png')
        }]
    },{
        ProductionID:2,
        ProductionName:'生产线2',
        OfflineEquipmentStatus:[{
            EquipmentID:'2-1',
            name:"检测台状态",
            Equipment:'检测台',
            Status:"正在加工",
            cost:1644,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/jct.png')
        }, {
            EquipmentID:'2-2',
            name:"磨边机1状态",
            Equipment:'磨边机1',
            Status:"正在加工",
            cost:1754,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'2-3',
            name:"磨边机2状态",
            Equipment:'磨边机2',
            Status:"正在加工",
            cost:1454,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'2-4',
            name:"清洗机状态",
            Equipment:'清洗机',
            Status:"正在加工",
            cost:1555,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/qxj.png')
        }]
    },{
        ProductionID:3,
        ProductionName:'生产线3',
        OfflineEquipmentStatus:[{
            EquipmentID:'3-1',
            name:"检测台状态",
            Status:"正在加工",
            Equipment:'检测台',
            cost:1423,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/jct.png')
        }, {
            EquipmentID:'3-2',
            name:"磨边机1状态",
            Equipment:'磨边机1',
            Status:"正在加工",
            cost:1235,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'3-3',
            name:"磨边机2状态",
            Equipment:'磨边机2',
            Status:"正在加工",
            cost:1632,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/mbj.png')
        },{
            EquipmentID:'3-4',
            name:"清洗机状态",
            Equipment:'清洗机',
            Status:"正在加工",
            cost:1754,
            BootTime:'1小时20分',
            ImagePath:require('../../../res/images/qxj.png')
        }]
    }
];
