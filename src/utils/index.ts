export const getEnv = (varName:string) => process.env[varName];

export const formatDate = (unDate:Date) :string=> {
    var d = new Date(unDate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}