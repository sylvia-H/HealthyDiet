"use strict";(self["webpackChunkhealthy_diet"]=self["webpackChunkhealthy_diet"]||[]).push([[525],{4739:function(e,t,l){l.d(t,{Z:function(){return u}});var a=l(6252);const s={class:"loadingio-spinner-spinner-r9nl8ighj1"},i=(0,a._)("div",{class:"ldio-7oudh8cl7et"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div")],-1),n=[i];function o(e,t,l,i,o,r){return(0,a.wg)(),(0,a.iD)("div",s,n)}var r={name:"VueLoader"},d=l(3744);const c=(0,d.Z)(r,[["render",o]]);var u=c},525:function(e,t,l){l.r(t),l.d(t,{default:function(){return Be}});var a=l(6252),s=l(3577);const i={class:"container"},n={class:"row py-3"},o={class:"col-12"},r={class:"d-flex justify-content-between mx-6 my-8"},d=(0,a._)("h2",null,"訂單列表",-1),c={class:"table-responsive"},u={class:"table table-hover mt-4 text-center"},p=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"買家姓名"),(0,a._)("th",null,"購買商品品項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否已結帳"),(0,a._)("th",null,"編輯")])],-1),m=["onClick"],_=["onClick"],h={class:"btn-group",role:"group"},g=["onClick"],b=(0,a._)("i",{class:"bi bi-pencil-square"},null,-1),f=[b],v=["onClick"],w=(0,a._)("i",{class:"bi bi-trash"},null,-1),y=[w],k=(0,a.Uk)(" 目前有 "),I=(0,a.Uk)(" 張訂單 "),x=(0,a._)("br",null,null,-1);function O(e,t,l,b,w,O){const C=(0,a.up)("VueLoader"),$=(0,a.up)("VLoading"),D=(0,a.up)("PaginationOrders"),z=(0,a.up)("ModalOrder");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)($,{active:w.isLoading,"z-index":1e3},{default:(0,a.w5)((()=>[(0,a.Wm)(C)])),_:1},8,["active"]),(0,a._)("div",i,[(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",r,[d,(0,a._)("button",{type:"button",class:"btn btn-outline-dark",onClick:t[0]||(t[0]=e=>O.delOrder())}," 刪除所有訂單 ")]),(0,a._)("div",c,[(0,a._)("table",u,[p,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.orders,(l=>((0,a.wg)(),(0,a.iD)("tr",{key:l.id},[(0,a._)("td",null,(0,s.zw)(e.$filters.transferTime(l.create_at)),1),(0,a._)("td",null,(0,s.zw)(l.user.name),1),(0,a._)("td",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(l.products),(e=>((0,a.wg)(),(0,a.iD)("p",{key:e},[(0,a.Uk)((0,s.zw)(l.products[e].product.title)+" － ",1),(0,a._)("span",null,[(0,a._)("b",null,"數量："+(0,s.zw)(l.products[e].qty),1)])])))),128))]),(0,a._)("td",null,(0,s.zw)(e.$filters.toCurrency(l.total)),1),(0,a._)("td",null,[l.is_paid?((0,a.wg)(),(0,a.iD)("span",{key:0,onClick:e=>O.changeStatus(l.id),onKeydown:t[1]||(t[1]=(...t)=>e.enter&&e.enter(...t)),class:"btn btn-success py-2 px-2 rounded"}," 已付款 ",40,m)):((0,a.wg)(),(0,a.iD)("span",{key:1,onClick:e=>O.changeStatus(l.id),onKeydown:t[2]||(t[2]=(...t)=>e.enter&&e.enter(...t)),class:"btn btn-dark py-2 px-2 rounded"}," 未付款 ",40,_))]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{type:"button",class:"btn btn-warning",onClick:e=>O.openOrderModal(l)},f,8,g),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:e=>O.delOrder(l)},y,8,v)])])])))),128))])])]),(0,a._)("p",null,[k,(0,a._)("span",null,(0,s.zw)(w.orders.length),1),I]),x,(0,a.Wm)(D,{pagination:w.pagination,class:"d-flex justify-content-center",onGetOrders:O.getOrders},null,8,["pagination","onGetOrders"]),(0,a.Wm)(z,{ref:"editOrderModal",onEditOrder:O.editOrder},null,8,["onEditOrder"])])])])],64)}var C=l(9963);const $={"aria-label":"Page navigation"},D={class:"pagination"},z=(0,a._)("span",{"aria-hidden":"true"},"«",-1),M=[z],L=["onClick"],U=(0,a._)("span",{"aria-hidden":"true"},"»",-1),V=[U];function N(e,t,l,i,n,o){return(0,a.wg)(),(0,a.iD)("nav",$,[(0,a._)("ul",D,[(0,a._)("li",{class:(0,s.C_)(["page-item",{disabled:!l.pagination.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,C.iM)((t=>e.$emit("get-orders",l.pagination.current_page-1)),["prevent"]))},M)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pagination.total_pages,((t,i)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,s.C_)(["page-item",{active:t===l.pagination.current_page}]),key:i},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,C.iM)((l=>e.$emit("get-orders",t)),["prevent"])},(0,s.zw)(t),9,L)],2)))),128)),(0,a._)("li",{class:(0,s.C_)(["page-item",{disabled:!l.pagination.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,C.iM)((t=>e.$emit("get-orders",l.pagination.current_page+1)),["prevent"]))},V)],2)])])}var E={name:"PaginationOrders",props:["pagination"]},P=l(3744);const S=(0,P.Z)(E,[["render",N]]);var B=S;const K={id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl modal-dialog-centered"},Z={class:"modal-content border-0"},H=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Y={class:"modal-body"},j={class:"row"},q={class:"col-12 col-md-4"},J={class:"bg-secondary text-light rounded p-4 mb-4"},W=(0,a._)("h4",{class:"mb-3"},"買家資料",-1),A={class:"mb-3 col-12"},G={for:"userName",class:"form-label w-100"},F=(0,a.Uk)(" 客戶姓名 "),Q={class:"mb-3 col-12"},R={for:"userEmail",class:"form-label w-100"},X=(0,a.Uk)(" Email "),ee={class:"mb-3 col-12"},te={for:"userTel",class:"form-label w-100"},le=(0,a.Uk)(" 電話 "),ae={class:"mb-3 col-12"},se={for:"userAddress",class:"form-label w-100"},ie=(0,a.Uk)(" 地址 "),ne={class:"col-12 col-md-8"},oe={class:"row p-4"},re=(0,a._)("h4",{class:"mb-3"},"訂單細節",-1),de={class:"mb-3 col-12"},ce={class:"table table-hover"},ue=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),pe=(0,a._)("th",null,"下單時間",-1),me=(0,a._)("th",null,"付款狀態",-1),_e={class:"form-check-label",for:"checkPaid"},he={key:0,class:"text-success"},ge=(0,a._)("b",null,"已付款",-1),be=[ge],fe={key:1,class:"text-danger"},ve=(0,a._)("th",null,"總金額",-1),we={class:"row p-4"},ye={class:"mb-3 col-12"},ke=(0,a._)("h4",{class:"mb-3"},"訂單品項細節",-1),Ie={class:"table table-hover"},xe=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"品名"),(0,a._)("th",{scope:"col"},"下單數量"),(0,a._)("th",{scope:"col"},"單品項總金額")])],-1),Oe={width:"30%"},Ce={for:"productNum",class:"form-label d-flex"},$e=["onUpdate:modelValue"],De={class:"modal-footer"},ze=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Me(e,t,l,i,n,o){return(0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",T,[(0,a._)("div",Z,[H,(0,a._)("div",Y,[(0,a._)("div",j,[(0,a._)("div",q,[(0,a._)("div",J,[W,(0,a._)("div",A,[(0,a._)("label",G,[F,(0,a.wy)((0,a._)("input",{id:"userName",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>n.tempItem.user.name=e)},null,512),[[C.nr,n.tempItem.user.name]])])]),(0,a._)("div",Q,[(0,a._)("label",R,[X,(0,a.wy)((0,a._)("input",{id:"userEmail",type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>n.tempItem.user.email=e)},null,512),[[C.nr,n.tempItem.user.email]])])]),(0,a._)("div",ee,[(0,a._)("label",te,[le,(0,a.wy)((0,a._)("input",{id:"userTel",type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>n.tempItem.user.tel=e)},null,512),[[C.nr,n.tempItem.user.tel]])])]),(0,a._)("div",ae,[(0,a._)("label",se,[ie,(0,a.wy)((0,a._)("input",{id:"userAddress",type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>n.tempItem.user.address=e)},null,512),[[C.nr,n.tempItem.user.address]])])])])]),(0,a._)("div",ne,[(0,a._)("div",oe,[re,(0,a._)("div",de,[(0,a._)("table",ce,[(0,a._)("tbody",null,[(0,a._)("tr",null,[ue,(0,a._)("td",null,(0,s.zw)(n.tempItem.id),1)]),(0,a._)("tr",null,[pe,(0,a._)("td",null,(0,s.zw)(e.$filters.transferTime(n.tempItem.create_at)),1)]),(0,a._)("tr",null,[me,(0,a._)("td",null,[(0,a._)("label",_e,[(0,a.wy)((0,a._)("input",{id:"checkPaid",type:"checkbox",class:"form-check-input me-2","onUpdate:modelValue":t[4]||(t[4]=e=>n.tempItem.is_paid=e)},null,512),[[C.e8,n.tempItem.is_paid]]),n.tempItem.is_paid?((0,a.wg)(),(0,a.iD)("span",he,be)):((0,a.wg)(),(0,a.iD)("span",fe,"未付款"))])])]),(0,a._)("tr",null,[ve,(0,a._)("td",null,(0,s.zw)(e.$filters.toCurrency(n.tempItem.total))+" 元 ",1)])])])])]),(0,a._)("div",we,[(0,a._)("div",ye,[ke,(0,a._)("table",Ie,[xe,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tempItem.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,s.zw)(t.product.title),1),(0,a._)("td",Oe,[(0,a._)("label",Ce,[(0,a.wy)((0,a._)("input",{id:"productNum",type:"number",class:"form-control","onUpdate:modelValue":e=>t.qty=e,disabled:""},null,8,$e),[[C.nr,t.qty]])])]),(0,a._)("td",null,(0,s.zw)(e.$filters.toCurrency(t.final_total))+" 元 ",1)])))),128))])])])])])])]),(0,a._)("div",De,[ze,(0,a._)("button",{type:"button",class:"btn btn-success",onClick:t[5]||(t[5]=t=>{o.closeModal(),e.$emit("editOrder",n.tempItem)})}," 更新訂單資訊 ")])])])])}var Le=l(7244),Ue={name:"ModalOrder",data(){return{modal:"",tempItem:{products:{},user:{}}}},methods:{openModal(e){this.organizeData(e),this.modal.show()},closeModal(){this.modal.hide()},organizeData(e){this.tempItem={products:{},user:{}},e&&(this.tempItem=JSON.parse(JSON.stringify(e)))}},mounted(){this.modal=new Le.u_(document.getElementById("orderModal"))}};const Ve=(0,P.Z)(Ue,[["render",Me]]);var Ne=Ve,Ee=l(4739),Pe={data(){return{isLoading:!1,orders:[],pagination:{},tempItemInfo:{products:{},user:{}}}},components:{ModalOrder:Ne,PaginationOrders:B,VueLoader:Ee.Z},methods:{getOrders(e=1){this.isLoading=!0,this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/sylviah/admin/orders?page=${e}`).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})).catch((()=>{this.isLoading=!1}))},changeStatus(e){this.orders.forEach((t=>{const l=t;l.id===e&&(l.is_paid?l.is_paid=!1:l.is_paid=!0,this.editOrder(l,e))}))},editOrder(e,t){this.isLoading=!0,e&&(this.tempItemInfo=e);const l={data:this.tempItemInfo},a=`https://vue3-course-api.hexschool.io/v2/api/sylviah/admin/order/${t||this.tempItemInfo.id}`;this.$http.put(a,l).then((()=>{this.isLoading=!1,this.$swal.fire({icon:"success",title:"成功！",text:`已更新 ${this.tempItemInfo.id} 訂單資訊`}),this.getOrders(this.pagination.current_page)})).catch((e=>{this.isLoading=!1;const t=e.response.data.message;let l="";t.forEach((e=>{l+=`${e}。\n`})),this.$swal.fire({icon:"error",title:"更新失敗！請重新操作。",text:l})}))},delOrder(e){let t,l,a;if(e){this.tempItemInfo=e;const s=this.tempItemInfo.id;t=`https://vue3-course-api.hexschool.io/v2/api/sylviah/admin/order/${s}`,l="訂單",a=`訂單刪除後將無法恢復。訂單編號：${this.tempItemInfo.id}。買家：${this.tempItemInfo.user.name}`}else t="https://vue3-course-api.hexschool.io/v2/api/sylviah/admin/orders/all",l="所有訂單",a="訂單刪除後將無法恢復。";this.$swal.fire({title:`確定要刪除 ${l} 嗎？`,text:a,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除！",cancelButtonText:"取消"}).then((e=>{e.isConfirmed&&(this.isLoading=!0,this.$http.delete(t).then((()=>{this.isLoading=!1,this.getOrders(this.pagination.current_page),this.$swal.fire({icon:"success",title:"成功！",text:`已刪除 ${l}`})})).catch((()=>{this.isLoading=!1,this.$swal.fire({icon:"error",title:"刪除失敗！",text:"請再試一次"})})))}))},organizeData(e){this.tempItemInfo={products:{},user:{}},e&&(this.tempItemInfo=JSON.parse(JSON.stringify(e)))},openOrderModal(e){this.organizeData(e),this.$refs.editOrderModal.openModal(e)}},mounted(){this.getOrders()}};const Se=(0,P.Z)(Pe,[["render",O]]);var Be=Se}}]);
//# sourceMappingURL=525.c14b3b99.js.map