"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[692],{2692:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var r=a(5043),n=a(7353),i=a(1596),s=a(1906),o=a(1402),l=a(6240),d=a(5442),m=a(6258),c=a(4496),p=a(8903),x=a(2008),h=a(6328),u=a(1787),b=a(1637),g=a(794),y=a(4194),j=a(8446),f=a(4535),A=a(3715),v=a(1580),k=a(8452),I=a(579);const w=(0,f.Ay)(n.A)((e=>{let{theme:t,delay:a,animation:r="fadeIn"}=e;return{opacity:0,animation:`${r} 0.6s ease-out ${a}s forwards`,[`@keyframes ${r}`]:{fadeIn:{from:{opacity:0},to:{opacity:1}},slideUp:{from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}},slideRight:{from:{opacity:0,transform:"translateX(-20px)"},to:{opacity:1,transform:"translateX(0)"}}}[r]}})),C=(0,f.Ay)(i.A)((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"24px",border:`1px solid ${t.palette.primary.main}`,borderRadius:"12px",padding:"28px",width:{xs:"100%",sm:"350px"},position:"relative",background:"dark"===t.palette.mode?"rgba(30, 30, 30, 0.7)":"rgba(240, 240, 240, 0.7)",backdropFilter:"blur(10px)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-8px)",boxShadow:"dark"===t.palette.mode?"0 15px 30px rgba(0, 0, 0, 0.4)":"0 15px 30px rgba(0, 0, 0, 0.1)"},"&::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",background:`radial-gradient(circle at center, ${t.palette.primary.main}20, transparent)`,opacity:0,transition:"opacity 0.3s ease",borderRadius:"12px",zIndex:-1},"&:hover::before":{opacity:1}}})),S=(0,f.Ay)(s.A)((e=>{let{theme:t}=e;return{color:t.palette.primary.main,backgroundColor:"dark"===t.palette.mode?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)",border:`1px solid ${t.palette.primary.main}30`,marginRight:t.spacing(1),transition:"all 0.3s ease",padding:"8px 16px","&:hover":{backgroundColor:t.palette.primary.main,color:"#fff",transform:"translateY(-3px)",boxShadow:"0 5px 10px rgba(0, 0, 0, 0.1)"}}})),M=(0,f.Ay)(o.A)((e=>{let{theme:t}=e;return{marginBottom:t.spacing(3),"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"dark"===t.palette.mode?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)",transition:"border-color 0.3s ease"},"&:hover fieldset":{borderColor:t.palette.primary.main},"&.Mui-focused fieldset":{borderColor:t.palette.primary.main}},"& label.Mui-focused":{color:t.palette.primary.main},"& .MuiInputBase-input":{background:"dark"===t.palette.mode?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.7)"}}})),E=(0,f.Ay)(n.A)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"rgba(199, 120, 221, 0.1)"}})),_=e=>{let{emoji:t,text:a,link:r}=e;return(0,I.jsxs)(n.A,{sx:{display:"flex",alignItems:"center",gap:"16px",transition:"transform 0.2s ease",width:"100%","&:hover":{transform:"translateX(5px)"}},children:[(0,I.jsx)(E,{children:(0,I.jsx)("span",{role:"img","aria-label":"contact",children:t})}),r?(0,I.jsx)(j.A,{href:r,color:"inherit",underline:"none",target:"_blank",rel:"noopener",sx:{transition:"color 0.2s ease","&:hover":{color:"primary.main"}},children:(0,I.jsx)(c.A,{variant:"body1",children:a})}):(0,I.jsx)(c.A,{variant:"body1",children:a})]})},D=()=>{const e=(0,l.A)(),[t,a]=((0,d.A)(e.breakpoints.down("md")),(0,r.useState)(!1)),[o,j]=(0,r.useState)(!1),[f,E]=(0,r.useState)(!1),[D,R]=(0,r.useState)(!1),[U,Y]=(0,r.useState)(""),L=(0,r.useRef)(null),W=(0,r.useRef)(null),{animationsEnabled:P}=(0,v.Us)(),[F,$]=(0,r.useState)({name:"",email:"",subject:"",message:""}),B=e=>{const{name:t,value:a}=e.target;$((e=>({...e,[t]:a})))},O="YOUR_EMAILJS_PUBLIC_KEY",z=()=>{j(!1)},H=()=>{E(!1)};(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{let[r]=t;r.isIntersecting&&(a(!0),e.disconnect())}),{threshold:.1});return L.current&&e.observe(L.current),()=>e.disconnect()}),[]),(0,r.useEffect)((()=>{k.Ay.init(O)}),[]);return(0,I.jsxs)(n.A,{id:"contact",ref:L,sx:(0,A.dc)(e),children:[(0,I.jsx)(m.A,{in:t,timeout:800,style:{transitionDelay:P?"200ms":"0ms"},children:(0,I.jsxs)(c.A,{variant:"h4",gutterBottom:!0,sx:A.LI,children:[(0,I.jsx)("span",{style:{color:e.palette.primary.main},children:"#"})," Contact Me"]})}),(0,I.jsxs)(p.Ay,{container:!0,spacing:4,children:[(0,I.jsx)(p.Ay,{item:!0,xs:12,md:5,children:(0,I.jsx)(m.A,{in:t,timeout:1e3,style:{transitionDelay:P?"300ms":"0ms"},children:(0,I.jsxs)(n.A,{children:[(0,I.jsx)(c.A,{variant:"h5",sx:{mb:3,fontWeight:600,position:"relative",display:"inline-block","&::after":{content:'""',position:"absolute",bottom:"-5px",left:0,width:"60%",height:"3px",background:e.palette.primary.main}},children:"Let's Get In Touch"}),(0,I.jsx)(c.A,{paragraph:!0,sx:{fontSize:"1.05rem",lineHeight:1.8,mb:4},children:"I'm interested in freelance opportunities and open to discussing potential collaborations. If you have a project in mind, a question, or just want to connect, don't hesitate to reach out!"}),(0,I.jsxs)(n.A,{sx:{mb:4},children:[(0,I.jsx)(c.A,{variant:"h6",sx:{mb:2,fontWeight:500},children:"Connect With Me"}),(0,I.jsx)(n.A,{sx:{display:"flex",mb:3},children:[{emoji:"\ud83d\udc68\u200d\ud83d\udcbb",text:"GitHub",url:"https://github.com/soumya-123-code",label:"GitHub"},{emoji:"\ud83d\udcbc",text:"LinkedIn",url:"https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a",label:"LinkedIn"},{emoji:"\ud83d\udc26",text:"Twitter",url:"#",label:"Twitter"}].map(((e,a)=>(0,I.jsx)(x.A,{in:t,timeout:500,style:{transitionDelay:P?400+100*a+"ms":"0ms"},children:(0,I.jsx)(S,{href:e.url,target:"_blank","aria-label":e.label,startIcon:(0,I.jsx)("span",{children:e.emoji}),children:e.text})},a)))})]}),(0,I.jsx)(h.A,{in:t,timeout:800,style:{transformOrigin:"0 0 0",transitionDelay:P?"600ms":"0ms"},children:(0,I.jsxs)(C,{elevation:4,children:[(0,I.jsx)(c.A,{variant:"h6",sx:{color:e.palette.primary.main,fontWeight:600,borderBottom:`2px solid ${e.palette.primary.main}20`,paddingBottom:"8px",width:"100%"},children:"Contact Information"}),(0,I.jsx)(_,{emoji:"\ud83d\udcf1",text:"+91 9438509060"}),(0,I.jsx)(_,{emoji:"\ud83d\udce7",text:"soumya050794@gmail.com"}),(0,I.jsx)(_,{emoji:"\ud83d\udcbc",text:"LinkedIn Profile",link:"https://www.linkedin.com/in/soumya-ranjan-nayak-50069a15a"})]})})]})})}),(0,I.jsx)(p.Ay,{item:!0,xs:12,md:7,children:(0,I.jsx)(m.A,{in:t,timeout:1e3,style:{transitionDelay:P?"500ms":"0ms"},children:(0,I.jsxs)(i.A,{elevation:4,sx:{p:{xs:3,md:4},borderRadius:"12px",background:"dark"===e.palette.mode?"rgba(30, 30, 30, 0.7)":"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)",border:"1px solid "+("dark"===e.palette.mode?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)")},children:[(0,I.jsx)(c.A,{variant:"h5",sx:{mb:3,fontWeight:600,color:e.palette.primary.main},children:"Send Me a Message"}),(0,I.jsx)("form",{ref:W,onSubmit:e=>{e.preventDefault(),R(!0);const t={from_name:F.name,reply_to:F.email,subject:F.subject||"Contact Form Submission",message:F.message};k.Ay.send("YOUR_EMAILJS_SERVICE_ID","YOUR_EMAILJS_TEMPLATE_ID",t,O).then((e=>{console.log("SUCCESS!",e.status,e.text),j(!0),R(!1),$({name:"",email:"",subject:"",message:""})})).catch((e=>{console.error("FAILED...",e),R(!1),Y("Failed to send message. Please try again later."),E(!0)}))},children:(0,I.jsxs)(p.Ay,{container:!0,spacing:2,children:[(0,I.jsx)(p.Ay,{item:!0,xs:12,sm:6,children:(0,I.jsx)(w,{delay:P?.6:0,animation:"slideUp",children:(0,I.jsx)(M,{fullWidth:!0,label:"Your Name",name:"name",value:F.name,onChange:B,required:!0,variant:"outlined",disabled:D,InputProps:{startAdornment:(0,I.jsx)(u.A,{position:"start",children:(0,I.jsx)("span",{role:"img","aria-label":"person",children:"\ud83d\udc64"})})}})})}),(0,I.jsx)(p.Ay,{item:!0,xs:12,sm:6,children:(0,I.jsx)(w,{delay:P?.7:0,animation:"slideUp",children:(0,I.jsx)(M,{fullWidth:!0,label:"Your Email",name:"email",type:"email",value:F.email,onChange:B,required:!0,variant:"outlined",disabled:D,InputProps:{startAdornment:(0,I.jsx)(u.A,{position:"start",children:(0,I.jsx)("span",{role:"img","aria-label":"email",children:"\ud83d\udce7"})})}})})}),(0,I.jsx)(p.Ay,{item:!0,xs:12,children:(0,I.jsx)(w,{delay:P?.8:0,animation:"slideUp",children:(0,I.jsx)(M,{fullWidth:!0,label:"Subject",name:"subject",value:F.subject,onChange:B,variant:"outlined",disabled:D,InputProps:{startAdornment:(0,I.jsx)(u.A,{position:"start",children:(0,I.jsx)("span",{role:"img","aria-label":"subject",children:"\ud83d\udcdd"})})}})})}),(0,I.jsx)(p.Ay,{item:!0,xs:12,children:(0,I.jsx)(w,{delay:P?.9:0,animation:"slideUp",children:(0,I.jsx)(M,{fullWidth:!0,label:"Your Message",name:"message",value:F.message,onChange:B,required:!0,multiline:!0,rows:5,variant:"outlined",disabled:D})})}),(0,I.jsx)(p.Ay,{item:!0,xs:12,children:(0,I.jsx)(w,{delay:P?1:0,animation:"slideUp",children:(0,I.jsx)(s.A,{type:"submit",variant:"contained",color:"primary",size:"large",disabled:D,endIcon:D?null:(0,I.jsx)("span",{role:"img","aria-label":"send",children:"\ud83d\udce4"}),sx:{minWidth:"180px",py:1.5,position:"relative",overflow:"hidden",transition:"all 0.3s ease","&::after":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,left:"-100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.7s ease"},"&:hover":{transform:"translateY(-5px)",boxShadow:"0 7px 14px rgba(0,0,0,0.2)"},"&:hover::after":{left:"100%"}},children:D?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b.A,{size:24,color:"inherit",sx:{mr:1}}),"Sending..."]}):"Send Message"})})})]})})]})})})]}),(0,I.jsx)(g.A,{open:o,autoHideDuration:6e3,onClose:z,children:(0,I.jsx)(y.A,{onClose:z,severity:"success",variant:"filled",children:"Message sent successfully! I'll get back to you soon."})}),(0,I.jsx)(g.A,{open:f,autoHideDuration:6e3,onClose:H,children:(0,I.jsx)(y.A,{onClose:H,severity:"error",variant:"filled",children:U||"Failed to send message. Please try again later."})})]})}}}]);
//# sourceMappingURL=692.a1588a7b.chunk.js.map