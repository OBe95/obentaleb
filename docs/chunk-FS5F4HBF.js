import{d as l}from"./chunk-TMC7WMLO.js";var n=class{constructor(){this.src="",this.gif=!1}load(e){e&&(e.gif!==void 0&&(this.gif=e.gif),e.height!==void 0&&(this.height=e.height),e.name!==void 0&&(this.name=e.name),e.replaceColor!==void 0&&(this.replaceColor=e.replaceColor),e.src!==void 0&&(this.src=e.src),e.width!==void 0&&(this.width=e.width))}};var t=class{constructor(e){this.id="imagePreloader",this._engine=e}getPlugin(){return l(this,null,function*(){return yield Promise.resolve(),{}})}loadOptions(e,s){if(!s?.preload)return;e.preload||(e.preload=[]);let o=e.preload;for(let r of s.preload){let f=o.find(i=>i.name===r.name||i.src===r.src);if(f)f.load(r);else{let i=new n;i.load(r),o.push(i)}}}needsPlugin(){return!0}};export{t as ImagePreloaderPlugin};