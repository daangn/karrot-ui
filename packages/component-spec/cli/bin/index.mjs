#!/usr/bin/env node
import{parse as f,stringifyTs as m}from"@seed-design/component-spec-core";import e from"fs-extra";import o from"node:path";import l from"yaml";import{createRequire as p}from"node:module";var d=p(import.meta.url),u=d.resolve("@seed-design/component-spec-artifacts"),i=o.dirname(u),[,,g="./"]=process.argv;async function w(){let s=(await e.readdir(i)).filter(t=>t.endsWith(".yaml"));return Promise.all(s.map(async t=>{let n=await e.readFile(o.join(i,t),"utf-8"),a=l.parse(n),c=m(f(a)),r=o.join(process.cwd(),g,`${t.split(".")[0]}.vars.ts`);console.log("Writing",t,"to",r),e.writeFileSync(r,c)}))}w().then(()=>{console.log("Done")});
