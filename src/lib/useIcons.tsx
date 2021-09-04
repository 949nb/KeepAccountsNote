export const useIcons = () => {
    const R = /^\.\/(\S+)\.svg$/
    let SvgNameList: string[] = []
    let SvgNameMap: any = {}
    const a = require.context('icons', false, /\.svg$/)
    a.keys().forEach(a)
    a.keys().forEach((n: string) => {
        n.match(R)
        SvgNameList.push(RegExp.$1)
        SvgNameMap[RegExp.$1] = a(n).default
    })

    return {SvgNameList, SvgNameMap, a }
}