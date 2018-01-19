/**
 *
 属性说明
 *
 @property {属性类型} 属性名
 @property {String} ReportName报表名称
 @property {Int} ReportID 报表ID
 @property {String} ProductionDate 生产日期
 @property {String} Class 班别
 @property {String} Operator 操作人员
 @property {int} ActualCapacity 实际产能
 @property {int} ActualWorkingHours 实际工时
 @property {int} TheoryWorkingHours 理论工时
 @property {int} Yield 达成率
 @property {int} Product 良品率
 @property {int} DeviceBootTime 设备开机时长
 @property {String} ProcessingTime 加工运行时间
 @property {String} Downtime 停机时间
 @property {String} FaultTime 故障时间


 */
export const detailMode = [
    {
        ReportID:1,
        ReportName:'生产班组产能统计表',
        ProductionDate:'2017/11/10',
        Class:"早",
        Operator:"刘义",
        ActualCapacity:260,
        ActualWorkingHours:805,
        TheoryWorkingHours:10,
        Yield:118,
        Product:""
    },{
        ReportID:1,
        ReportName:'生产班组产能统计表',
        ProductionDate:'设备的运行时间，故障时间，停机时间统计',
        ProductionDate:'2017/11/10',
        Class:"中",
        Operator:"刘漫",
        ActualCapacity:260,
        ActualWorkingHours:9.1,
        TheoryWorkingHours:10,
        Yield:110,
        Product:""
    },
    {
        ReportID:1,
        ReportName:'生产班组产能统计表',
        ProductionDate:'产过程中，玻璃损坏数量，原因等信息的统计',
        ProductionDate:'2017/11/10',
        Class:"晚",
        Operator:"刘禅",
        ActualCapacity:250,
        ActualWorkingHours:7.6,
        TheoryWorkingHours:10,
        Yield:132,
        Product:""
    },{
        ReportID:2,
        ReportName:'设备运行状态统计表',
        ProductionDate:'2017/11/10',
        Class:"早",
        Operator:"刘义",
        DeviceBootTime:8,
        ProcessingTime:7,
        Downtime:0.3,
        FaultTime:0.3,
    },{
        ReportID:2,
        ReportName:'设备运行状态统计表',
        ProductionDate:'2017/11/10',
        Class:"早",
        Operator:"刘漫",
        DeviceBootTime:8,
        ProcessingTime:7,
        Downtime:0.4,
        FaultTime:0.1,
    },
    {
        ReportID:2,
        ReportName:'设备运行状态统计表',
        ProductionDate:'2017/11/10',
        Class:"早",
        Operator:"刘禅",
        DeviceBootTime:8,
        ProcessingTime:7,
        Downtime:0.3,
        FaultTime:0.3,
    }
]
