/**
 *
 属性说明
 *
 @property {属性类型} 属性名
 @property {String} AlarmName报警名称
 @property {String} AlarmOccurrenceTime报警发生时间
 @property {String} AlarmState报警状态
 @property {String} AlarmRecoveryTime报警恢复时间
 @property {String} AlarmDescribe报警描述
 @property {String} AlarmType报警类型
 @property {String} AlarmSetTime报警确认时间
 @property {String} AlarmSetTime报警确认时间
 @property {String} MaintenanceRecord维修录入记录
 @property {String} AlarmAddress报警源
 @property {Int} AlarmID报警id
 */
export const itemInfos = [
    {
        AlarmID:1,
        AlarmName:'磨边机1设备报警',
        AlarmOccurrenceTime:'2017年8月11月 9:30',
        AlarmState:'已确认已恢复',
        AlarmRecoveryTime:'2017年8月11月 10:30',
        AlarmDescribe:'',
        AlarmType:'',
        AlarmSetTime:'',
        AlarmAddress:'',
        MaintenanceRecord:''
    },{
        AlarmID:2,
        AlarmName:'磨边机2设备报警',
        AlarmOccurrenceTime:'2017年8月11月 9:30',
        AlarmState:'未确认未恢复',
        AlarmRecoveryTime:'2017年8月11月 10:30',
        AlarmDescribe:'',
        AlarmType:'',
        AlarmSetTime:'',
        AlarmAddress:'',
        MaintenanceRecord:''
    }
];
