import MaskGuide from './node_modules/mk-guide/src/MaskClass.js'
// import MaskGuide from 'mk-guide'
// import 'mk-guide/style.css'

let mask = new MaskGuide({
    // buttonColor: '#348b86',
    // skipButtonColor: 'black'
})

mask.guides = [
    {
        element: ".budget__title",
        description: "Step1: You can control with <br> '→ ← ESC' <br> <br>第一步：你可以通过 '→ ← ESC' 这三个键来控制"
    },
    {
        element: ".budget__income.clearfix",
        description: "Step2: This is income part <br> <br> 第二步：这是收入部分"
    },
    {
        shouldFocus: true,
        element: ".add__description",
        description: "Step3: Tap in here, and focus it (shouldFocus: true)<br> <br> 第三步：在此处输入，已focus此元素 (shouldFocus: true)"
    },
    {
        element: ".budget",
        description: "Step4: That's all, click 'Done'<br> <br> 第四步：结束，请按‘Done’"
    },
]

mask.start()