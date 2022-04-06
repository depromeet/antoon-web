import { SVG } from "@constants/icon-constants";

const getChartToolTip = (params: any) => {
    return (params instanceof Array && params.length)?(
        params.reduce((acc, param) => 
            acc+= `${ SVG.STAR } <b>${ param.value }</b>${ param.data.unit || '' } point`,
            `<b><span>${ params[0].axisValueLabel } - </span></b>`
        )
    ):null;
}

const getChartToolBoxTooltip = (params: any) => {
    return `<span>
                ${SVG.LABEL}
                ${params.name == 'line'? 'Line': 'Bar'} 차트
            </span>
    `;
}

export {
    getChartToolTip,
    getChartToolBoxTooltip,
}

