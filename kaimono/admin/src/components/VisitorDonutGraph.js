const VisitorDonutGraph = () => {
  return (
      <>
          <div className="col-xxl-4 col-md-6">
              <div className="h-100">
                  <div className="card o-hidden card-hover">
                      <div className="card-header border-0">
                          <div className="d-flex align-items-center justify-content-between">
                              <div className="card-header-title">
                                  <h4>Visitors</h4>
                              </div>
                          </div>
                      </div>
                      <div className="card-body pt-0">
                          <div className="pie-chart" style="position: relative;">
                              <div id="pie-chart-visitors" style="min-height: 274.146px;"><div id="apexchartscpcnoad2k" className="apexcharts-canvas apexchartscpcnoad2k light" style="width: 503px; height: 274.146px;"><svg id="SvgjsSvg1535" width="503" height="274.1463414634146" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><foreignObject x="0" y="0" width="503" height="274.1463414634146"><div className="apexcharts-legend center position-bottom" xmlns="http://www.w3.org/1999/xhtml" style="inset: auto 0px 9px 21px; position: absolute;"><div className="apexcharts-legend-series" rel="1" data:collapsed="false" style="margin: 0px 2px;"><span className="apexcharts-legend-marker" rel="1" data:collapsed="false" style="background: rgb(40, 200, 112); color: rgb(40, 200, 112); height: 10px; width: 10px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="1" i="0" data:default-text="The%20Passersby" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-family: Helvetica, Arial, sans-serif;">The Passersby</span></div><div className="apexcharts-legend-series" rel="2" data:collapsed="false" style="margin: 0px 2px;"><span className="apexcharts-legend-marker" rel="2" data:collapsed="false" style="background: rgb(255, 160, 68); color: rgb(255, 160, 68); height: 10px; width: 10px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="2" i="1" data:default-text="The%20Occasionals" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-family: Helvetica, Arial, sans-serif;">The Occasionals</span></div><div className="apexcharts-legend-series" rel="3" data:collapsed="false" style="margin: 0px 2px;"><span className="apexcharts-legend-marker" rel="3" data:collapsed="false" style="background: rgb(158, 101, 194); color: rgb(158, 101, 194); height: 10px; width: 10px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="3" i="2" data:default-text="The%20Regulars" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-family: Helvetica, Arial, sans-serif;">The Regulars</span></div><div className="apexcharts-legend-series" rel="4" data:collapsed="false" style="margin: 0px 2px;"><span className="apexcharts-legend-marker" rel="4" data:collapsed="false" style="background: rgb(102, 112, 189); color: rgb(102, 112, 189); height: 10px; width: 10px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="4" i="3" data:default-text="The%20Superfans" data:collapsed="false" style="color: rgb(55, 61, 63); font-size: 12px; font-family: Helvetica, Arial, sans-serif;">The Superfans</span></div></div><style type="text/css">

                                  .apexcharts-legend {
                                  display: flex;
                                  overflow: auto;
                                  padding: 0 10px;
                              }
                                  .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {
                                  flex-wrap: wrap
                              }
                                  .apexcharts-legend.position-right, .apexcharts-legend.position-left {
                                  flex-direction: column;
                                  bottom: 0;
                              }
                                  .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {
                                  justify-content: flex-start;
                              }
                                  .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {
                                  justify-content: center;
                              }
                                  .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {
                                  justify-content: flex-end;
                              }
                                  .apexcharts-legend-series {
                                  cursor: pointer;
                                  line-height: normal;
                              }
                                  .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{
                                  display: flex;
                                  align-items: center;
                              }
                                  .apexcharts-legend-text {
                                  position: relative;
                                  font-size: 14px;
                              }
                                  .apexcharts-legend-text *, .apexcharts-legend-marker * {
                                  pointer-events: none;
                              }
                                  .apexcharts-legend-marker {
                                  position: relative;
                                  display: inline-block;
                                  cursor: pointer;
                                  margin-right: 3px;
                              }

                                  .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{
                                  display: inline-block;
                              }
                                  .apexcharts-legend-series.no-click {
                                  cursor: auto;
                              }
                                  .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
                                  display: none !important;
                              }
                                  .inactive-legend {
                                  opacity: 0.45;
                              }</style></foreignObject><g id="SvgjsG1537" className="apexcharts-inner apexcharts-graphical" transform="translate(154.5, 0)"><defs id="SvgjsDefs1536"><clipPath id="gridRectMaskcpcnoad2k"><rect id="SvgjsRect1538" width="198" height="210" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath><clipPath id="gridRectMarkerMaskcpcnoad2k"><rect id="SvgjsRect1539" width="198" height="210" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath></defs><g id="SvgjsG1541" className="apexcharts-pie" data:innerTranslateX="0" data:innerTranslateY="-25"><g id="SvgjsG1542" transform="translate(0, -5) scale(1)"><circle id="SvgjsCircle1543" r="72.19756097560976" cx="98" cy="120" fill="transparent"></circle><g id="SvgjsG1544" className="apexcharts-slices"><g id="SvgjsG1545" className="apexcharts-series apexcharts-pie-series" seriesName="ThexPassersby" rel="1" data:realIndex="0"><path id="SvgjsPath1546" d="M 98 8.926829268292678 A 111.07317073170732 111.07317073170732 0 0 1 207.0723019754742 140.98766776385537 L 168.89699628405822 133.641984046506 A 72.19756097560976 72.19756097560976 0 0 0 98 47.80243902439024 L 98 8.926829268292678 z" fill="rgba(40,200,112,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="100.89171974522293" data:startAngle="0" data:strokeWidth="2" data:value="44" data:pathOrig="M 98 8.926829268292678 A 111.07317073170732 111.07317073170732 0 0 1 207.0723019754742 140.98766776385537 L 168.89699628405822 133.641984046506 A 72.19756097560976 72.19756097560976 0 0 0 98 47.80243902439024 L 98 8.926829268292678 z"></path></g><g id="SvgjsG1547" className="apexcharts-series apexcharts-pie-series" seriesName="ThexOccasionals" rel="2" data:realIndex="1"><path id="SvgjsPath1548" d="M 207.0723019754742 140.98766776385537 A 111.07317073170732 111.07317073170732 0 0 1 16.757804809794933 195.74268926485001 L 45.1925731263667 169.23274802215252 A 72.19756097560976 72.19756097560976 0 0 0 168.89699628405822 133.641984046506 L 207.0723019754742 140.98766776385537 z" fill="rgba(255,160,68,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="126.11464968152865" data:startAngle="100.89171974522293" data:strokeWidth="2" data:value="55" data:pathOrig="M 207.0723019754742 140.98766776385537 A 111.07317073170732 111.07317073170732 0 0 1 16.757804809794933 195.74268926485001 L 45.1925731263667 169.23274802215252 A 72.19756097560976 72.19756097560976 0 0 0 168.89699628405822 133.641984046506 L 207.0723019754742 140.98766776385537 z"></path></g><g id="SvgjsG1549" className="apexcharts-series apexcharts-pie-series" seriesName="ThexRegulars" rel="3" data:realIndex="2"><path id="SvgjsPath1550" d="M 16.757804809794933 195.74268926485001 A 111.07317073170732 111.07317073170732 0 0 1 28.128180596367542 33.656626718542114 L 52.5833173876389 63.87680736705237 A 72.19756097560976 72.19756097560976 0 0 0 45.1925731263667 169.23274802215252 L 16.757804809794933 195.74268926485001 z" fill="rgba(158,101,194,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="94.01273885350315" data:startAngle="227.00636942675158" data:strokeWidth="2" data:value="41" data:pathOrig="M 16.757804809794933 195.74268926485001 A 111.07317073170732 111.07317073170732 0 0 1 28.128180596367542 33.656626718542114 L 52.5833173876389 63.87680736705237 A 72.19756097560976 72.19756097560976 0 0 0 45.1925731263667 169.23274802215252 L 16.757804809794933 195.74268926485001 z"></path></g><g id="SvgjsG1551" className="apexcharts-series apexcharts-pie-series" seriesName="ThexSuperfans" rel="4" data:realIndex="3"><path id="SvgjsPath1552" d="M 28.128180596367542 33.656626718542114 A 111.07317073170732 111.07317073170732 0 0 1 97.98061407469942 8.926830960033797 L 97.98739914855463 47.80244012402197 A 72.19756097560976 72.19756097560976 0 0 0 52.5833173876389 63.87680736705237 L 28.128180596367542 33.656626718542114 z" fill="rgba(102,112,189,1)" fill-opacity="1" stroke="#ffffff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-3" index="0" j="3" data:angle="38.980891719745216" data:startAngle="321.0191082802547" data:strokeWidth="2" data:value="17" data:pathOrig="M 28.128180596367542 33.656626718542114 A 111.07317073170732 111.07317073170732 0 0 1 97.98061407469942 8.926830960033797 L 97.98739914855463 47.80244012402197 A 72.19756097560976 72.19756097560976 0 0 0 52.5833173876389 63.87680736705237 L 28.128180596367542 33.656626718542114 z"></path></g></g></g></g><line id="SvgjsLine1553" x1="0" y1="0" x2="196" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1554" x1="0" y1="0" x2="196" y2="0" stroke-dasharray="0" stroke-width="0" className="apexcharts-ycrosshairs-hidden"></line></g></svg><div className="apexcharts-tooltip dark"><div className="apexcharts-tooltip-series-group"><span className="apexcharts-tooltip-marker" style="background-color: rgb(40, 200, 112);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group"><span className="apexcharts-tooltip-marker" style="background-color: rgb(255, 160, 68);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group"><span className="apexcharts-tooltip-marker" style="background-color: rgb(158, 101, 194);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group"><span className="apexcharts-tooltip-marker" style="background-color: rgb(102, 112, 189);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
                              <div className="resize-triggers"><div className="expand-trigger"><div style="width: 504px; height: 275px;"></div></div><div className="contract-trigger"></div></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default VisitorDonutGraph
