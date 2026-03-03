// ==========================================
// Std 10 Maths - Premium Solutions Database (New Syllabus)
// ==========================================

 njMathsSolutions = {
    // ------------------------------------
    // પ્રકરણ 1: વાસ્તવિક સંખ્યાઓ
    // ------------------------------------
    1: {
        "theory": [
            {
                title: "થીયરી 1",
                question: "અંકગણિતનું મૂળભૂત પ્રમેય શું છે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>વ્યાખ્યા:</b> દરેક વિભાજ્ય સંખ્યાને અવિભાજ્ય સંખ્યાઓના ગુણાકાર તરીકે અનન્ય રીતે (ક્રમને અવગણીને) દર્શાવી શકાય છે.</p>
                        <p><b>ઉદાહરણ:</b> 12 = 2 × 2 × 3 = 2² × 3</p>
                    </div>`
            },
            {
                title: "થીયરી 2",
                question: "ગુ.સા.અ. અને લ.સા.અ. શોધવાની રીત",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <ul style="padding-left:20px;">
                            <li><b>ગુ.સા.અ. (HCF):</b> આપેલી સંખ્યાઓમાં રહેલા <i>સામાન્ય (Common)</i> અવિભાજ્ય અવયવોના <b>સૌથી નાના ઘાતાંક</b> વાળા પદોનો ગુણાકાર.</li>
                            <li><b>લ.સા.અ. (LCM):</b> આપેલી સંખ્યાઓમાં રહેલા <i>તમામ</i> અવિભાજ્ય અવયવોના <b>સૌથી મોટા ઘાતાંક</b> વાળા પદોનો ગુણાકાર.</li>
                        </ul>
                    </div>`
            },
            {
                title: "થીયરી 3",
                question: "અગત્યનું સૂત્ર (ફોર્મ્યુલા)",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p>કોઈપણ બે ધન પૂર્ણાંકો <b>a</b> અને <b>b</b> માટે:</p>
                        <p style="background:#fef3c7; padding:10px; text-align:center; font-weight:bold; border-radius:5px; color:#b45309; font-size:15px;">
                            ગુ.સા.અ. (a, b) × લ.સા.અ. (a, b) = a × b
                        </p>
                    </div>`
            }
        ],

        "examples": [
            {
                title: "ઉદાહરણ 1",
                question: "કોઈક ધન પૂર્ણાંક n માટે, 4ⁿ નો છેલ્લો અંક શૂન્ય હશે કે કેમ તે ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સમજૂતી (સ્ટેપ-બાય-સ્ટેપ):</b></p>
                        <ul style="padding-left:20px;">
                            <li>જો કોઈ સંખ્યાનો છેલ્લો અંક શૂન્ય (0) હોય, તો તે સંખ્યા 10 વડે વિભાજ્ય હોવી જોઈએ.</li>
                            <li>એટલે કે તેના અવિભાજ્ય અવયવોમાં <b>2 અને 5 બંને</b> હોવા જોઈએ. (કારણ કે 2 × 5 = 10 થાય)</li>
                            <li>હવે, આપણે 4ⁿ ના અવયવો પાડીએ:<br> 4ⁿ = (2 × 2)ⁿ = <b>2²ⁿ</b></li>
                            <li>અહી સ્પષ્ટ જોઈ શકાય છે કે 4ⁿ ના અવયવોમાં માત્ર '2' જ આવે છે, ક્યાંય '5' આવતો નથી.</li>
                        </ul>
                        <p style="background:#eff6ff; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold;">
                        નિષ્કર્ષ: તેમાં 5 નો સમાવેશ થતો નથી, તેથી કોઈપણ ધન પૂર્ણાંક n માટે 4ⁿ નો છેલ્લો અંક ક્યારેય શૂન્ય ન હોઈ શકે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 2",
                question: "6 અને 20 નો અવિભાજ્ય અવયવીકરણની રીતે ગુ.સા.અ. અને લ.સા.અ. શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સૌથી પહેલા આપણે 6 અને 20 ના અવિભાજ્ય અવયવો પાડીશું:</p>
                        <ul style="list-style-type:none; padding-left:10px; font-weight:bold;">
                            <li>👉 6 = 2 × 3</li>
                            <li>👉 20 = 2 × 2 × 5 = 2² × 5</li>
                        </ul>
                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:10px 0;">
                        <p><b>1. ગુ.સા.અ. શોધવા:</b><br>
                        બંનેમાં સામાન્ય હોય તેવો અને સૌથી નાની ઘાત વાળો અવયવ લેવાનો.<br>
                        બંનેમાં '2' સામાન્ય છે અને નાની ઘાત 2¹ છે.<br>
                        <b>ગુ.સા.અ. (6, 20) = 2</b></p>
    
                        <p><b>2. લ.સા.અ. શોધવા:</b><br>
                        બધા જ અવયવો લેવાના, અને તેમાં સૌથી મોટી ઘાત લેવાની.<br>
                        અહી અવયવો 2, 3 અને 5 છે. 2 ની મોટી ઘાત 2² છે.<br>
                        <b>લ.સા.અ. (6, 20) = 2² × 3 × 5 = 4 × 3 × 5 = 60</b></p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 3",
                question: "96 અને 404 નો ગુ.સા.અ. અવિભાજ્ય અવયવીકરણની રીતે મેળવો અને તે પરથી તેમનો લ.સા.અ. શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અવિભાજ્ય અવયવો નીચે મુજબ છે:</p>
                        <ul style="list-style-type:none; padding-left:10px; font-weight:bold;">
                            <li>👉 96 = 2⁵ × 3</li>
                            <li>👉 404 = 2² × 101</li>
                        </ul>
                        
                        <p><b>1. ગુ.સા.અ. (HCF):</b><br>
                        બંનેમાં સામાન્ય અવયવ '2' છે અને તેની નાની ઘાત 2² છે.<br>
                        ગુ.સા.અ. = 2² = <span style="color:#b45309; font-weight:bold; font-size:16px;">4</span></p>
    
                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:10px 0;">
                        
                        <p><b>2. લ.સા.અ. (LCM):</b><br>
                        અહી આપણે સૂત્રનો ઉપયોગ કરીશું: <i>ગુ.સા.અ. × લ.સા.અ. = a × b</i></p>
                        <p style="background:#fef3c7; padding:10px; border-radius:5px; text-align:center; font-weight:bold;">
                            4 × લ.સા.અ. = 96 × 404<br>
                            લ.સા.અ. = (96 × 404) / 4<br>
                            લ.સા.અ. = 96 × 101 = <span style="color:#b45309; font-size:18px;">9696</span>
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 4",
                question: "6, 72 અને 120 નો અવિભાજ્ય અવયવીકરણની રીતે ગુ.સા.અ. અને લ.સા.અ. શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ત્રણેય સંખ્યાઓના અવયવો પાડીએ:</p>
                        <ul style="list-style-type:none; padding-left:10px; font-weight:bold;">
                            <li>6 = 2 × 3</li>
                            <li>72 = 2³ × 3²</li>
                            <li>120 = 2³ × 3 × 5</li>
                        </ul>
                        
                        <p><b>ગુ.સા.અ.:</b><br>
                        ત્રણેયમાં સામાન્ય હોય અને <i>સૌથી નાની ઘાત</i> હોય તેવા અવયવો: 2¹ અને 3¹<br>
                        ગુ.સા.અ. = 2 × 3 = <b>6</b></p>
    
                        <p><b>લ.સા.અ.:</b><br>
                        બધા જ અવયવોની <i>સૌથી મોટી ઘાત</i>: 2³, 3² અને 5¹<br>
                        લ.સા.અ. = 2³ × 3² × 5 = 8 × 9 × 5 = <b>360</b></p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 5",
                question: "સાબિત કરો કે &radic;3 અસંમેય સંખ્યા છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી (વિરોધાભાસની રીત):</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>સ્ટેપ 1:</b> ધારો કે &radic;3 સંમેય સંખ્યા છે.<br>
                            તેથી તેને <b>&radic;3 = a/b</b> સ્વરૂપમાં લખી શકાય. (જ્યાં a અને b પરસ્પર અવિભાજ્ય પૂર્ણાંકો છે).</li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> બંને બાજુ વર્ગ કરતા:<br>
                            3 = a² / b²<br>
                            તેથી, <b>a² = 3b²</b> --- (પરિણામ 1)</li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> આનો અર્થ એ કે a² એ 3 વડે વિભાજ્ય છે. પ્રમેય મુજબ, <b>'a' પણ 3 વડે વિભાજ્ય થાય.</b></li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 4:</b> ધારો કે a = 3c. આ કિંમત પરિણામ 1 માં મૂકતા:<br>
                            (3c)² = 3b²<br>
                            9c² = 3b² &nbsp;&rarr;&nbsp; <b>b² = 3c²</b></li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 5:</b> આનો અર્થ એ કે b² એ 3 વડે વિભાજ્ય છે, એટલે કે <b>'b' પણ 3 વડે વિભાજ્ય થાય!</b></li>
                        </ul>
                        <p style="background:#fce7f3; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#be185d;">
                        વિરોધાભાસ: અહી સાબિત થયું કે a અને b બંનેનો સામાન્ય અવયવ 3 છે. આપણી ધારણા ખોટી છે. તેથી, &radic;3 એ અસંમેય સંખ્યા છે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 6",
                question: "સાબિત કરો કે 5 - &radic;3 અસંમેય છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>સ્ટેપ 1:</b> ધારો કે 5 - &radic;3 સંમેય છે.</li>
                            <li>તેથી, આપણે ધારી શકીએ કે <b>5 - &radic;3 = a/b</b> (જ્યાં a અને b પૂર્ણાંકો છે, b &ne; 0)</li>
                            <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> સમીકરણને ગોઠવતા (વર્ગમૂળ વાળા પદને કર્તા બનાવો):<br>
                            5 - (a/b) = &radic;3<br>
                            તેથી, <b>&radic;3 = (5b - a) / b</b></li>
                            <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> અહી a અને b પૂર્ણાંકો હોવાથી જમણી બાજુ સંમેય સંખ્યા બને.</li>
                            <li>તેથી ડાબી બાજુ (&radic;3) પણ સંમેય થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#ccfbf1; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#0f766e;">
                        વિરોધાભાસ: પરંતુ આપણે જાણીએ છીએ કે &radic;3 તો અસંમેય છે! આપણી ધારણા ખોટી છે. તેથી 5 - &radic;3 અસંમેય છે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 7",
                question: "દર્શાવો કે 3&radic;2 અસંમેય છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f43f5e; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>સ્ટેપ 1:</b> ધારો કે 3&radic;2 સંમેય છે.</li>
                            <li>તેથી, <b>3&radic;2 = a/b</b> (જ્યાં a અને b પૂર્ણાંકો છે, b &ne; 0)</li>
                            <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> સમીકરણમાં માત્ર &radic;2 ને જ સૂત્રનો કર્તા બનાવીએ:<br>
                            <b>&radic;2 = a / 3b</b></li>
                            <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> અહી 3, a અને b પૂર્ણાંકો હોવાથી, (a / 3b) એ સંમેય સંખ્યા બને.</li>
                            <li>તેથી સમીકરણ મુજબ ડાબી બાજુ રહેલ &radic;2 પણ સંમેય સંખ્યા થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#ffe4e6; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#be123c;">
                        વિરોધાભાસ: પરંતુ આ હકીકતનો વિરોધાભાસ છે, કારણ કે &radic;2 અસંમેય છે. આપણી ધારણા ખોટી છે. 3&radic;2 અસંમેય છે.
                        </p>
                    </div>`
            }
        ],

        // ------------------------------------
        // અહી ભાગ 1 પૂરો થાય છે
        // ------------------------------------
                "exercise": [
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 1",
                question: "નીચે આપેલી સંખ્યાઓને તેમના અવિભાજ્ય અવયવોના ગુણાકાર સ્વરૂપે દર્શાવો: (i) 140 (ii) 156 (iii) 3825 (iv) 5005 (v) 7429",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ (અવિભાજ્ય અવયવની રીત):</b></p>
                        <ul style="list-style-type:none; padding-left:5px;">
                            <li style="margin-bottom:8px;"><b>(i) 140</b> = 2 × 70 = 2 × 2 × 35 = 2 × 2 × 5 × 7 <br> <span style="background:#e0e7ff; padding:2px 8px; border-radius:5px; color:#4f46e5; font-weight:bold;">જવાબ: 2² × 5 × 7</span></li>
                            
                            <li style="margin-bottom:8px;"><b>(ii) 156</b> = 2 × 78 = 2 × 2 × 39 = 2 × 2 × 3 × 13 <br> <span style="background:#e0e7ff; padding:2px 8px; border-radius:5px; color:#4f46e5; font-weight:bold;">જવાબ: 2² × 3 × 13</span></li>
                            
                            <li style="margin-bottom:8px;"><b>(iii) 3825</b> = 3 × 1275 = 3 × 3 × 425 = 3 × 3 × 5 × 85 = 3 × 3 × 5 × 5 × 17 <br> <span style="background:#e0e7ff; padding:2px 8px; border-radius:5px; color:#4f46e5; font-weight:bold;">જવાબ: 3² × 5² × 17</span></li>
                            
                            <li style="margin-bottom:8px;"><b>(iv) 5005</b> = 5 × 1001 = 5 × 7 × 143 = 5 × 7 × 11 × 13 <br> <span style="background:#e0e7ff; padding:2px 8px; border-radius:5px; color:#4f46e5; font-weight:bold;">જવાબ: 5 × 7 × 11 × 13</span></li>
                            
                            <li style="margin-bottom:8px;"><b>(v) 7429</b> = 17 × 437 = 17 × 19 × 23 <br> <span style="background:#e0e7ff; padding:2px 8px; border-radius:5px; color:#4f46e5; font-weight:bold;">જવાબ: 17 × 19 × 23</span></li>
                        </ul>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 2",
                question: "નીચે આપેલ પૂર્ણાંકોની જોડીના ગુ.સા.અ. અને લ.સા.અ. શોધો અને ચકાસો કે ગુ.સા.અ. × લ.સા.અ. = બંને પૂર્ણાંકોનો ગુણાકાર. <br>(i) 26 અને 91 (ii) 510 અને 92 (iii) 336 અને 54",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>(i) 26 અને 91:</b><br>
                        26 = 2 × 13<br>91 = 7 × 13<br>
                        👉 <b>ગુ.સા.અ.</b> = 13<br>👉 <b>લ.સા.અ.</b> = 2 × 7 × 13 = 182<br>
                        <b>ચકાસણી:</b> ગુ.સા.અ. × લ.સા.અ. = 13 × 182 = 2366. <br> બંને સંખ્યાનો ગુણાકાર = 26 × 91 = 2366. (ચકાસણી સાચી છે)</p>
                        <hr style="border-top:1px dashed #cbd5e1;">

                        <p><b>(ii) 510 અને 92:</b><br>
                        510 = 2 × 3 × 5 × 17<br>92 = 2 × 2 × 23 = 2² × 23<br>
                        👉 <b>ગુ.સા.અ.</b> = 2<br>👉 <b>લ.સા.અ.</b> = 2² × 3 × 5 × 17 × 23 = 23460<br>
                        <b>ચકાસણી:</b> 2 × 23460 = 46920. <br> 510 × 92 = 46920. (ચકાસણી સાચી છે)</p>
                        <hr style="border-top:1px dashed #cbd5e1;">

                        <p><b>(iii) 336 અને 54:</b><br>
                        336 = 2⁴ × 3 × 7<br>54 = 2 × 3³<br>
                        👉 <b>ગુ.સા.અ.</b> = 2 × 3 = 6<br>👉 <b>લ.સા.અ.</b> = 2⁴ × 3³ × 7 = 16 × 27 × 7 = 3024<br>
                        <b>ચકાસણી:</b> 6 × 3024 = 18144. <br> 336 × 54 = 18144. (ચકાસણી સાચી છે)</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 3",
                question: "નીચે આપેલ પૂર્ણાંકોના અવિભાજ્ય અવયવની રીતે ગુ.સા.અ. અને લ.સા.અ. શોધો: <br>(i) 12, 15, 21 (ii) 17, 23, 29 (iii) 8, 9, 25",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>(i) 12, 15 અને 21:</b><br>
                        12 = 2² × 3<br>15 = 3 × 5<br>21 = 3 × 7<br>
                        <span style="color:#b45309; font-weight:bold;">ગુ.સા.અ.</span> = 3<br>
                        <span style="color:#b45309; font-weight:bold;">લ.સા.અ.</span> = 2² × 3 × 5 × 7 = 4 × 3 × 5 × 7 = 420</p>
                        <hr style="border-top:1px dashed #cbd5e1;">

                        <p><b>(ii) 17, 23 અને 29:</b><br>
                        (આ ત્રણેય અવિભાજ્ય સંખ્યાઓ છે, તેથી તેમનો 1 સિવાય કોઈ સામાન્ય અવયવ નથી)<br>
                        <span style="color:#b45309; font-weight:bold;">ગુ.સા.અ.</span> = 1<br>
                        <span style="color:#b45309; font-weight:bold;">લ.સા.અ.</span> = 17 × 23 × 29 = 11339</p>
                        <hr style="border-top:1px dashed #cbd5e1;">

                        <p><b>(iii) 8, 9 અને 25:</b><br>
                        8 = 2³<br>9 = 3²<br>25 = 5²<br>
                        (કોઈ સામાન્ય અવયવ નથી)<br>
                        <span style="color:#b45309; font-weight:bold;">ગુ.સા.અ.</span> = 1<br>
                        <span style="color:#b45309; font-weight:bold;">લ.સા.અ.</span> = 2³ × 3² × 5² = 8 × 9 × 25 = 1800</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 4",
                question: "જો ગુ.સા.અ. (306, 657) = 9 આપેલ હોય, તો લ.સા.અ. (306, 657) શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>આપણે જાણીએ છીએ કે: <br> <b>ગુ.સા.અ. × લ.સા.અ. = a × b (બંને સંખ્યાઓનો ગુણાકાર)</b></p>
                        <p>અહીં, a = 306, b = 657 અને ગુ.સા.અ. = 9 છે.</p>
                        <p style="background:#ede9fe; padding:10px; border-radius:5px; text-align:center; font-weight:bold;">
                            9 × લ.સા.અ. = 306 × 657<br>
                            લ.સા.અ. = (306 × 657) / 9<br>
                            લ.સા.અ. = 34 × 657 <br>
                            <span style="color:#5b21b6; font-size:18px;">લ.સા.અ. = 22,338</span>
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 5",
                question: "કોઈક ધન પૂર્ણાંક n માટે 6ⁿ નો છેલ્લો અંક શૂન્ય છે કે નહિ તે ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સમજૂતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li>જો કોઈપણ સંખ્યાનો છેલ્લો અંક શૂન્ય (0) હોય, તો તેના અવિભાજ્ય અવયવોમાં <b>2 અને 5 બંને</b> હોવા ફરજિયાત છે.</li>
                            <li>અહી 6ⁿ ના અવયવો પાડીએ:<br> 6ⁿ = (2 × 3)ⁿ = <b>2ⁿ × 3ⁿ</b></li>
                            <li>અહી અવયવોમાં 2 અને 3 છે, પરંતુ <b>5 નથી</b>.</li>
                        </ul>
                        <p style="background:#fce7f3; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#be185d;">
                        નિષ્કર્ષ: 6ⁿ ના અવયવીકરણમાં 5 આવતો નથી, તેથી કોઈપણ ધન પૂર્ણાંક n માટે 6ⁿ નો છેલ્લો અંક શૂન્ય ન હોઈ શકે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 6",
                question: "સમજાવો કે 7 × 11 × 13 + 13 અને 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 શા માટે વિભાજ્ય સંખ્યાઓ છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>પહેલી સંખ્યા: (7 × 11 × 13) + 13</b></p>
                        <p>બંને પદોમાંથી 13 સામાન્ય (Common) કાઢતા:<br>
                        = 13 (7 × 11 + 1)<br>
                        = 13 (77 + 1)<br>
                        = 13 × 78 <br>
                        અહી સંખ્યાને બે પૂર્ણાંકોના ગુણાકાર તરીકે દર્શાવી શકાય છે, તેથી તે <b>વિભાજ્ય સંખ્યા</b> છે.</p>
                        <hr style="border-top:1px dashed #cbd5e1;">

                        <p><b>બીજી સંખ્યા: (7 × 6 × 5 × 4 × 3 × 2 × 1) + 5</b></p>
                        <p>બંને પદોમાંથી 5 સામાન્ય કાઢતા:<br>
                        = 5 (7 × 6 × 4 × 3 × 2 × 1 + 1)<br>
                        = 5 (1008 + 1)<br>
                        = 5 × 1009<br>
                        અહી પણ સંખ્યાને 1 અને પોતાના સિવાયના અન્ય અવયવો (5 અને 1009) વડે દર્શાવી શકાય છે, તેથી તે <b>વિભાજ્ય સંખ્યા</b> છે.</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.1 - પ્રશ્ન 7",
                question: "એક રમતના મેદાનમાં વર્તુળાકાર માર્ગ છે. સોનિયાને એક પરિભ્રમણ પૂર્ણ કરતા 18 મિનિટ અને રવિને 12 મિનિટ લાગે છે. જો બંને એક જ સમયે અને એક જ દિશામાં ફરવાનું શરૂ કરે, તો કેટલી મિનિટ બાદ બંને ફરી પ્રારંભબિંદુ પર ભેગા થશે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f43f5e; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>બંને ફરી ક્યારે ભેગા થશે તે શોધવા માટે, આપણે 18 અને 12 નો <b>લ.સા.અ. (LCM)</b> શોધવો પડે.</p>
                        <p>અવયવો પાડીએ:<br>
                        18 = 2 × 3 × 3 = 2 × 3²<br>
                        12 = 2 × 2 × 3 = 2² × 3</p>
                        
                        <p>લ.સા.અ. શોધવા માટે મોટી ઘાત લેતા:<br>
                        લ.સા.અ. (18, 12) = 2² × 3² = 4 × 9 = <b>36</b></p>
                        
                        <p style="background:#ffe4e6; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#be123c;">
                        જવાબ: સોનિયા અને રવિ 36 મિનિટ પછી ફરીથી પ્રારંભબિંદુ પર ભેગા થશે.
                        </p>
                    </div>`
            },

        // ------------------------------------
        // અહી ભાગ 2 પૂરો થાય છે (અહી પણ કોઈ કૌંસ બંધ કરવાનો નથી)
        // ------------------------------------
                                 // અહી અલ્પવિરામ ખાસ મૂકવું (સ્વાધ્યાય 1.1 અને 1.2 ને જોડવા માટે)
            {
                title: "સ્વાધ્યાય 1.2 - પ્રશ્ન 1",
                question: "સાબિત કરો કે &radic;5 અસંમેય છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી (વિરોધાભાસની રીત):</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>સ્ટેપ 1:</b> ધારો કે &radic;5 સંમેય સંખ્યા છે.<br>
                            તેથી તેને <b>&radic;5 = a/b</b> સ્વરૂપમાં લખી શકાય. (જ્યાં a અને b નો 1 સિવાય કોઈ સામાન્ય અવયવ નથી).</li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> બંને બાજુ વર્ગ કરતા:<br>
                            5 = a² / b²<br>
                            તેથી, <b>a² = 5b²</b> --- (પરિણામ 1)</li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> આનો અર્થ એ કે a² એ 5 વડે વિભાજ્ય છે. પ્રમેય મુજબ, <b>'a' પણ 5 વડે વિભાજ્ય થાય.</b></li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 4:</b> ધારો કે a = 5c. આ કિંમત પરિણામ 1 માં મૂકતા:<br>
                            (5c)² = 5b²<br>
                            25c² = 5b² &nbsp;&rarr;&nbsp; <b>b² = 5c²</b></li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 5:</b> આનો અર્થ એ કે b² એ 5 વડે વિભાજ્ય છે, એટલે કે <b>'b' પણ 5 વડે વિભાજ્ય થાય!</b></li>
                        </ul>
                        <p style="background:#eff6ff; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#1e40af;">
                        વિરોધાભાસ: અહી સાબિત થયું કે a અને b બંને 5 વડે વિભાજ્ય છે (બંનેનો સામાન્ય અવયવ 5 છે). આપણી ધારણા ખોટી છે. તેથી, &radic;5 એ અસંમેય સંખ્યા છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.2 - પ્રશ્ન 2",
                question: "સાબિત કરો કે 3 + 2&radic;5 અસંમેય છે.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>સ્ટેપ 1:</b> ધારો કે 3 + 2&radic;5 સંમેય છે.</li>
                            <li>તેથી, આપણે ધારી શકીએ કે <b>3 + 2&radic;5 = a/b</b> (જ્યાં a અને b પૂર્ણાંકો છે, b &ne; 0)</li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> સમીકરણને ગોઠવતા (વર્ગમૂળ વાળા પદને એક બાજુ રાખો):<br>
                            2&radic;5 = (a/b) - 3<br>
                            2&radic;5 = (a - 3b) / b<br>
                            તેથી, <b>&radic;5 = (a - 3b) / 2b</b></li>
                            
                            <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> અહી 2, 3, a અને b પૂર્ણાંકો હોવાથી <b>(a - 3b) / 2b</b> એ સંમેય સંખ્યા બને.</li>
                            <li>જો જમણી બાજુ સંમેય હોય, તો ડાબી બાજુ (&radic;5) પણ સંમેય થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#ecfdf5; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#047857;">
                        વિરોધાભાસ: પરંતુ આપણે જાણીએ છીએ કે &radic;5 તો અસંમેય છે! આપણી ધારણા ખોટી છે. તેથી 3 + 2&radic;5 અસંમેય છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.2 - પ્રશ્ન 3 (i)",
                question: "નીચે દર્શાવેલ સંખ્યા અસંમેય છે તેમ સાબિત કરો: 1 / &radic;2",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li>ધારો કે 1 / &radic;2 સંમેય છે.</li>
                            <li>તેથી, <b>1 / &radic;2 = a/b</b></li>
                            <li>બંને બાજુ ઉલટાવતા (વ્યસ્ત કરતા):<br> <b>&radic;2 = b/a</b></li>
                            <li>અહી a અને b પૂર્ણાંકો હોવાથી <b>b/a</b> એ સંમેય સંખ્યા બને.</li>
                            <li>તેથી ડાબી બાજુ (&radic;2) પણ સંમેય થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#fef3c7; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#b45309;">
                        વિરોધાભાસ: પરંતુ &radic;2 અસંમેય છે. આપણી ધારણા ખોટી છે. 1 / &radic;2 અસંમેય છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.2 - પ્રશ્ન 3 (ii)",
                question: "નીચે દર્શાવેલ સંખ્યા અસંમેય છે તેમ સાબિત કરો: 7&radic;5",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li>ધારો કે 7&radic;5 સંમેય છે.</li>
                            <li>તેથી, <b>7&radic;5 = a/b</b></li>
                            <li>7 ને બરાબરની પેલી બાજુ લઈ જતાં:<br> <b>&radic;5 = a / 7b</b></li>
                            <li>અહી 7, a અને b પૂર્ણાંકો હોવાથી <b>a / 7b</b> એ સંમેય સંખ્યા બને.</li>
                            <li>તેથી &radic;5 પણ સંમેય થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#ede9fe; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#5b21b6;">
                        વિરોધાભાસ: પરંતુ &radic;5 અસંમેય છે. આપણી ધારણા ખોટી છે. 7&radic;5 અસંમેય છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 1.2 - પ્રશ્ન 3 (iii)",
                question: "નીચે દર્શાવેલ સંખ્યા અસંમેય છે તેમ સાબિત કરો: 6 + &radic;2",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સાબિતી:</b></p>
                        <ul style="padding-left:20px;">
                            <li>ધારો કે 6 + &radic;2 સંમેય છે.</li>
                            <li>તેથી, <b>6 + &radic;2 = a/b</b></li>
                            <li>6 ને બરાબરની પેલી બાજુ લઈ જતાં:<br> <b>&radic;2 = (a/b) - 6</b><br> <b>&radic;2 = (a - 6b) / b</b></li>
                            <li>અહી 6, a અને b પૂર્ણાંકો હોવાથી <b>(a - 6b) / b</b> એ સંમેય સંખ્યા બને.</li>
                            <li>તેથી &radic;2 પણ સંમેય થવી જોઈએ.</li>
                        </ul>
                        <p style="background:#fce7f3; padding:10px; border-radius:5px; margin-top:10px; font-weight:bold; color:#be185d;">
                        વિરોધાભાસ: પરંતુ &radic;2 અસંમેય છે. આપણી ધારણા ખોટી છે. 6 + &radic;2 અસંમેય છે.
                        </p>
                    </div>`
            }
        ] // અહી પ્રકરણ 1 ના સ્વાધ્યાયનો એરે (Array) પૂરો થાય છે
    }, // અહી પ્રકરણ 1 નો ડેટા પૂરો થાય છે
      // ------------------------------------
    // પ્રકરણ 2: બહુપદીઓ (Polynomials)
    // ------------------------------------
    2: {
        "theory": [
            {
                title: "થીયરી 1",
                question: "બહુપદીના શૂન્યોનો ભૌમિતિક અર્થ શું છે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ભૌમિતિક અર્થ:</b> કોઈપણ બહુપદી p(x) નો આલેખ <b>X-અક્ષને જેટલા બિંદુમાં છેદે</b>, તેટલા તે બહુપદીના શૂન્યો (Zeroes) હોય છે.</p>
                        <ul style="padding-left:20px;">
                            <li><b>સુરેખ બહુપદી (ax + b):</b> આલેખ સીધી રેખા મળે. X-અક્ષને 1 બિંદુમાં છેદે. (મહત્તમ શૂન્યો: 1)</li>
                            <li><b>દ્વિઘાત બહુપદી (ax² + bx + c):</b> આલેખ <b>પરવલય (Parabola - U આકાર)</b> મળે. X-અક્ષને મહત્તમ 2 બિંદુમાં છેદે. (મહત્તમ શૂન્યો: 2)</li>
                        </ul>
                        <div style="text-align:center; margin-top:15px;">
                            <b>આલેખની સમજૂતી:</b><br>
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px; margin:10px auto; display:block;">
                                <line x1="10" y1="80" x2="190" y2="80" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 40 10 Q 100 160 160 10" fill="none" stroke="#2563eb" stroke-width="2" />
                                <circle cx="63" cy="80" r="4" fill="#ef4444" />
                                <circle cx="137" cy="80" r="4" fill="#ef4444" />
                                <text x="180" y="95" font-size="10" fill="#334155" font-weight="bold">X</text>
                                <text x="105" y="20" font-size="10" fill="#334155" font-weight="bold">Y</text>
                            </svg>
                            <p style="font-size:12px; color:#64748b;">(લાલ ટપકાં બહુપદીના 2 શૂન્યો દર્શાવે છે)</p>
                        </div>
                    </div>`
            },
            {
                title: "થીયરી 2",
                question: "દ્વિઘાત બહુપદીના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p>જો દ્વિઘાત બહુપદી <b>p(x) = ax² + bx + c</b> ના શૂન્યો <b>&alpha;</b> (આલ્ફા) અને <b>&beta;</b> (બીટા) હોય, તો:</p>
                        
                        <div style="background:#ecfdf5; padding:10px; border-radius:5px; margin-top:10px; border:1px solid #a7f3d0;">
                            <p><b>1. શૂન્યોનો સરવાળો (&alpha; + &beta;):</b></p>
                            <p style="font-size:16px; font-weight:bold; color:#047857; text-align:center;">&alpha; + &beta; = -b / a</p>
                            <p style="text-align:center; font-size:12px;">= -(x નો સહગુણક) / (x² નો સહગુણક)</p>
                        </div>

                        <div style="background:#fef3c7; padding:10px; border-radius:5px; margin-top:10px; border:1px solid #fde68a;">
                            <p><b>2. શૂન્યોનો ગુણાકાર (&alpha; &times; &beta;):</b></p>
                            <p style="font-size:16px; font-weight:bold; color:#b45309; text-align:center;">&alpha; &beta; = c / a</p>
                            <p style="text-align:center; font-size:12px;">= (અચળ પદ) / (x² નો સહગુણક)</p>
                        </div>
                    </div>`
            }
        ],

        "examples": [
            {
                title: "ઉદાહરણ 1",
                question: "આપેલ આલેખ પરથી બહુપદી y = p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>સમજૂતી:</b></p>
                        <p>અહીં આપણે માત્ર એટલું જ જોવાનું છે કે <b>આલેખની રેખા X-અક્ષને કેટલી વાર કાપે છે (છેદે છે).</b></p>
                        
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#000" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#000" stroke-width="1.5" />
                                <path d="M 20 100 Q 60 20 100 60 T 180 20" fill="none" stroke="#8b5cf6" stroke-width="2" />
                                <circle cx="43" cy="60" r="4" fill="#ef4444" />
                                <circle cx="100" cy="60" r="4" fill="#ef4444" />
                                <circle cx="157" cy="60" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        
                        <p style="background:#ede9fe; padding:10px; border-radius:5px; font-weight:bold; color:#5b21b6; text-align:center;">
                        જવાબ: આપેલ આલેખ X-અક્ષને 3 બિંદુઓ (લાલ ટપકાં) માં છેદે છે, તેથી શૂન્યોની સંખ્યા = 3 છે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 2",
                question: "દ્વિઘાત બહુપદી x² + 7x + 10 ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ (Step 1: શૂન્યો શોધવા):</b></p>
                        <p>બહુપદી p(x) = x² + 7x + 10 = 0 લેતા,</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>મધ્યમ પદના ભાગ પાડવાની રીત: ગુણાકાર 10 અને સરવાળો 7 થાય તેવી બે સંખ્યાઓ વિચારો. (5 અને 2)</li>
                            <li>x² + 5x + 2x + 10 = 0</li>
                            <li>x(x + 5) + 2(x + 5) = 0</li>
                            <li>(x + 5) (x + 2) = 0</li>
                        </ul>
                        <p>તેથી, x = -5 અથવા x = -2. <b>(આપેલ બહુપદીના શૂન્યો -5 અને -2 છે.)</b></p>

                        <div style="background:#fce7f3; border:1px dashed #f43f5e; padding:10px; margin:10px 0; border-radius:5px;">
                            <p style="margin:0; font-weight:bold; color:#be123c;">💡 શોર્ટકટ ટ્રીક (MCQ માટે):</p>
                            <p style="margin:0; font-size:13px;">x² + 7x + 10 માં સીધું જ વિચારો: 10 ના એવા ભાગ જેનો સરવાળો 7 થાય &rarr; +5 અને +2. <br> હવે બંનેની નિશાની બદલી નાખો &rarr; જવાબ: <b>-5 અને -2</b>.</p>
                        </div>

                        <hr style="border:0; border-top:1px solid #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>અહીં a = 1, b = 7, c = 10 છે. શૂન્યો &alpha; = -5 અને &beta; = -2.</p>
                        
                        <p><b>1. શૂન્યોનો સરવાળો:</b><br>
                        &alpha; + &beta; = (-5) + (-2) = -7<br>
                        સૂત્ર મુજબ: -b/a = -7 / 1 = -7. (ચકાસણી સાચી છે)</p>

                        <p><b>2. શૂન્યોનો ગુણાકાર:</b><br>
                        &alpha; &times; &beta; = (-5) &times; (-2) = 10<br>
                        સૂત્ર મુજબ: c/a = 10 / 1 = 10. (ચકાસણી સાચી છે)</p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 3",
                question: "બહુપદી x² - 3 ના શૂન્યો શોધો અને શૂન્યો તથા સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>બહુપદી x² - 3 = 0. અહી આપણે a² - b² = (a - b)(a + b) નિત્યસમનો ઉપયોગ કરીશું.</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>(x)² - (&radic;3)² = 0</li>
                            <li>(x - &radic;3) (x + &radic;3) = 0</li>
                        </ul>
                        <p>તેથી, <b>x = &radic;3</b> અથવા <b>x = -&radic;3</b>.</p>

                        <hr style="border:0; border-top:1px solid #cbd5e1; margin:15px 0;">

                        <p><b>સંબંધ ચકાસણી:</b></p>
                        <p>બહુપદી x² - 3 ને પ્રમાણિત સ્વરૂપ x² + 0x - 3 સાથે સરખાવતા: <br> a = 1, b = 0, c = -3.</p>
                        
                        <p><b>1. શૂન્યોનો સરવાળો:</b><br>
                        &radic;3 + (-&radic;3) = 0<br>
                        સૂત્ર મુજબ: -b/a = -0 / 1 = 0. (ચકાસણી સાચી છે)</p>

                        <p><b>2. શૂન્યોનો ગુણાકાર:</b><br>
                        (&radic;3) &times; (-&radic;3) = -3<br>
                        સૂત્ર મુજબ: c/a = -3 / 1 = -3. (ચકાસણી સાચી છે)</p>
                    </div>`
            }
        ],
                     // ------------------------------------
        // અહીથી બહુપદીના સ્વાધ્યાય શરૂ થાય છે 
        // ------------------------------------
        "exercise": [
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (i)",
                question: "નીચે આકૃતિમાં કોઈ બહુપદી p(x) માટે y = p(x) નો આલેખ આપેલ છે. p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <text x="180" y="75" font-size="10" font-weight="bold">X</text>
                                <text x="105" y="20" font-size="10" font-weight="bold">Y</text>
                                <line x1="20" y1="30" x2="180" y2="30" stroke="#2563eb" stroke-width="2.5" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> અહીં આપેલ આલેખની રેખા X-અક્ષને સમાંતર છે. તે X-અક્ષને એક પણ બિંદુમાં છેદતી નથી.</p>
                        <p style="background:#eff6ff; padding:10px; border-radius:5px; font-weight:bold; color:#1e40af; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 0 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (ii)",
                question: "આપેલ y = p(x) ના આલેખ પરથી p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 40 80 Q 80 100 120 60 T 160 10" fill="none" stroke="#059669" stroke-width="2.5" />
                                <circle cx="120" cy="60" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> અહીં આપેલ આલેખ X-અક્ષને માત્ર 1 જ બિંદુમાં (લાલ ટપકું) છેદે છે.</p>
                        <p style="background:#ecfdf5; padding:10px; border-radius:5px; font-weight:bold; color:#047857; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 1 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (iii)",
                question: "આપેલ y = p(x) ના આલેખ પરથી p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 20 100 Q 50 -10 100 60 T 170 100" fill="none" stroke="#d97706" stroke-width="2.5" />
                                <circle cx="39" cy="60" r="4" fill="#ef4444" />
                                <circle cx="100" cy="60" r="4" fill="#ef4444" />
                                <circle cx="147" cy="60" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> અહીં આપેલ આલેખ X-અક્ષને 3 અલગ-અલગ બિંદુઓમાં કાપે છે.</p>
                        <p style="background:#fef3c7; padding:10px; border-radius:5px; font-weight:bold; color:#b45309; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 3 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (iv)",
                question: "આપેલ y = p(x) ના આલેખ પરથી p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 40 20 Q 70 100 100 20" fill="none" stroke="#6d28d9" stroke-width="2.5" />
                                <circle cx="53" cy="60" r="4" fill="#ef4444" />
                                <circle cx="87" cy="60" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> આ પરવલય (U-આકાર) નો આલેખ X-અક્ષને 2 બિંદુઓમાં છેદે છે.</p>
                        <p style="background:#ede9fe; padding:10px; border-radius:5px; font-weight:bold; color:#5b21b6; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 2 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (v)",
                question: "આપેલ y = p(x) ના આલેખ પરથી p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="60" x2="190" y2="60" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 30 100 Q 50 10 80 60 T 130 60 T 170 100" fill="none" stroke="#be185d" stroke-width="2.5" />
                                <circle cx="43" cy="60" r="4" fill="#ef4444" />
                                <circle cx="80" cy="60" r="4" fill="#ef4444" />
                                <circle cx="106" cy="60" r="4" fill="#ef4444" />
                                <circle cx="152" cy="60" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> આલેખની રેખા X-અક્ષને 4 અલગ-અલગ જગ્યાએ કાપે છે.</p>
                        <p style="background:#fce7f3; padding:10px; border-radius:5px; font-weight:bold; color:#be123c; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 4 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.1 - પ્રશ્ન 1 (vi)",
                question: "આપેલ y = p(x) ના આલેખ પરથી p(x) ના શૂન્યોની સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 120" style="width:100%; max-width:250px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="10" y1="80" x2="190" y2="80" stroke="#334155" stroke-width="1.5" />
                                <line x1="100" y1="10" x2="100" y2="110" stroke="#334155" stroke-width="1.5" />
                                <path d="M 20 110 Q 40 40 70 80 Q 90 20 120 80 Q 150 40 170 10" fill="none" stroke="#0f766e" stroke-width="2.5" />
                                <circle cx="33" cy="80" r="4" fill="#ef4444" />
                                <circle cx="70" cy="80" r="4" fill="#ef4444" />
                                <circle cx="120" cy="80" r="4" fill="#ef4444" />
                            </svg>
                        </div>
                        <p><b>સમજૂતી:</b> અહીં આલેખ X-અક્ષને એક બિંદુમાં છેદે છે અને અન્ય 2 બિંદુઓમાં માત્ર <b>સ્પર્શે</b> છે. (કુલ 3 જગ્યાએ X-અક્ષને અડે છે).</p>
                        <p style="background:#ccfbf1; padding:10px; border-radius:5px; font-weight:bold; color:#0f766e; text-align:center;">
                        જવાબ: શૂન્યોની સંખ્યા = 3 છે.
                        </p>
                    </div>`
            },
            
            // ------------------------------------
            // સ્વાધ્યાય 2.2 ની શરૂઆત
            // ------------------------------------
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (i)",
                question: "દ્વિઘાત બહુપદી x² - 2x - 8 ના શૂન્યો શોધો અને તેમના શૂન્યો તથા સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: શૂન્યો શોધવા:</b></p>
                        <p>p(x) = x² - 2x - 8 = 0 લેતા,</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>ગુણાકાર -8 અને બાદબાકી -2 થાય તેવા ભાગ: -4 અને +2</li>
                            <li>x² - 4x + 2x - 8 = 0</li>
                            <li>x(x - 4) + 2(x - 4) = 0</li>
                            <li>(x - 4) (x + 2) = 0</li>
                        </ul>
                        <p>તેથી, <b>x = 4</b> અથવા <b>x = -2</b> (શૂન્યો &alpha; = 4 અને &beta; = -2)</p>

                        <div style="background:#e0e7ff; padding:8px; margin:10px 0; border-radius:5px; font-size:13px;">
                            <b>💡 શોર્ટકટ ટ્રીક:</b> સીધું જ વિચારો કે ગુણાકાર -8 અને સરવાળો -2 કોનો થાય? જ: -4 અને 2. હવે બંનેની નિશાની બદલી નાખો &rarr; <b>4 અને -2</b>. (આ જ તમારો જવાબ!)
                        </div>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>બહુપદી x² - 2x - 8 ને ax² + bx + c સાથે સરખાવતા: <br>a = 1, b = -2, c = -8</p>
                        <p><b>1. શૂન્યોનો સરવાળો:</b><br>
                        &alpha; + &beta; = 4 + (-2) = 2<br>
                        સૂત્ર મુજબ: -b/a = -(-2) / 1 = 2 (ચકાસણી સાચી છે)</p>
                        
                        <p><b>2. શૂન્યોનો ગુણાકાર:</b><br>
                        &alpha; &beta; = 4 × (-2) = -8<br>
                        સૂત્ર મુજબ: c/a = -8 / 1 = -8 (ચકાસણી સાચી છે)</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (ii)",
                question: "દ્વિઘાત બહુપદી 4s² - 4s + 1 ના શૂન્યો શોધો અને સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: શૂન્યો શોધવા:</b></p>
                        <p>p(s) = 4s² - 4s + 1 = 0</p>
                        <p>અહીં આ પદાવલિ પૂર્ણવર્ગ છે: (2s - 1)² સ્વરૂપે પણ લખી શકાય, અથવા ભાગ પાડીએ:</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>ગુણાકાર (4×1 = 4) અને સરવાળો -4 થાય તેવા ભાગ: -2 અને -2</li>
                            <li>4s² - 2s - 2s + 1 = 0</li>
                            <li>2s(2s - 1) - 1(2s - 1) = 0</li>
                            <li>(2s - 1) (2s - 1) = 0</li>
                        </ul>
                        <p>તેથી, 2s = 1 &rarr; <b>s = 1/2</b> અને <b>s = 1/2</b> (બંને શૂન્યો સમાન છે)</p>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>અહીં a = 4, b = -4, c = 1</p>
                        <p><b>1. શૂન્યોનો સરવાળો:</b><br>
                        &alpha; + &beta; = (1/2) + (1/2) = 1<br>
                        સૂત્ર મુજબ: -b/a = -(-4) / 4 = 4/4 = 1</p>
                        
                        <p><b>2. શૂન્યોનો ગુણાકાર:</b><br>
                        &alpha; &beta; = (1/2) × (1/2) = 1/4<br>
                        સૂત્ર મુજબ: c/a = 1/4</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (iii)",
                question: "દ્વિઘાત બહુપદી 6x² - 3 - 7x ના શૂન્યો શોધો અને સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: બહુપદીને યોગ્ય ક્રમમાં ગોઠવી શૂન્યો શોધવા:</b></p>
                        <p>પ્રમાણિત સ્વરૂપ: p(x) = 6x² - 7x - 3 = 0</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>ગુણાકાર (6×-3 = -18) અને બાદબાકી -7 થાય તેવા ભાગ: -9 અને +2</li>
                            <li>6x² - 9x + 2x - 3 = 0</li>
                            <li>3x(2x - 3) + 1(2x - 3) = 0</li>
                            <li>(2x - 3) (3x + 1) = 0</li>
                        </ul>
                        <p>તેથી, 2x = 3 &rarr; <b>x = 3/2</b><br>અને 3x = -1 &rarr; <b>x = -1/3</b></p>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>અહીં a = 6, b = -7, c = -3</p>
                        <p><b>1. શૂન્યોનો સરવાળો:</b><br>
                        (3/2) + (-1/3) = (9 - 2) / 6 = 7/6<br>
                        સૂત્ર મુજબ: -b/a = -(-7) / 6 = 7/6</p>
                        
                        <p><b>2. શૂન્યોનો ગુણાકાર:</b><br>
                        (3/2) × (-1/3) = -3/6 = -1/2<br>
                        સૂત્ર મુજબ: c/a = -3 / 6 = -1/2</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (iv)",
                question: "દ્વિઘાત બહુપદી 4u² + 8u ના શૂન્યો શોધો અને સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: શૂન્યો શોધવા:</b></p>
                        <p>p(u) = 4u² + 8u = 0</p>
                        <p>અહીં અચળ પદ c નથી. તેથી સામાન્ય કાઢવાની રીત વાપરીશું.</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>4u સામાન્ય કાઢતા: 4u(u + 2) = 0</li>
                            <li>તેથી, 4u = 0 અથવા u + 2 = 0</li>
                        </ul>
                        <p>આથી <b>u = 0</b> અને <b>u = -2</b></p>

                        <div style="background:#ede9fe; padding:8px; margin:10px 0; border-radius:5px; font-size:13px;">
                            <b>💡 શોર્ટકટ નોંધ:</b> જ્યારે બહુપદીમાં અચળ પદ ન હોય (c=0), ત્યારે હંમેશા એક શૂન્ય <b>0 (શૂન્ય)</b> જ આવે છે!
                        </div>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>અહીં a = 4, b = 8, c = 0</p>
                        <p><b>1. સરવાળો:</b> 0 + (-2) = -2 <br> સૂત્ર: -b/a = -8/4 = -2</p>
                        <p><b>2. ગુણાકાર:</b> 0 × (-2) = 0 <br> સૂત્ર: c/a = 0/4 = 0</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (v)",
                question: "દ્વિઘાત બહુપદી t² - 15 ના શૂન્યો શોધો અને સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: શૂન્યો શોધવા:</b></p>
                        <p>p(t) = t² - 15 = 0</p>
                        <p>અહીં મધ્યમ પદ (t વાળું પદ) નથી. આપણે (a² - b²) ના નિત્યસમનો ઉપયોગ કરીશું.</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>(t)² - (&radic;15)² = 0</li>
                            <li>(t - &radic;15)(t + &radic;15) = 0</li>
                        </ul>
                        <p>તેથી, <b>t = &radic;15</b> અને <b>t = -&radic;15</b></p>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>પ્રમાણિત સ્વરૂપ t² + 0t - 15 સાથે સરખાવતા: <br>a = 1, b = 0, c = -15</p>
                        <p><b>1. સરવાળો:</b> &radic;15 + (-&radic;15) = 0 <br> સૂત્ર: -b/a = -0/1 = 0</p>
                        <p><b>2. ગુણાકાર:</b> (&radic;15) × (-&radic;15) = -15 <br> સૂત્ર: c/a = -15/1 = -15</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 1 (vi)",
                question: "દ્વિઘાત બહુપદી 3x² - x - 4 ના શૂન્યો શોધો અને સંબંધ ચકાસો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: શૂન્યો શોધવા:</b></p>
                        <p>p(x) = 3x² - x - 4 = 0</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>ગુણાકાર (3×-4 = -12) અને બાદબાકી -1 થાય તેવા ભાગ: -4 અને +3</li>
                            <li>3x² - 4x + 3x - 4 = 0</li>
                            <li>x(3x - 4) + 1(3x - 4) = 0</li>
                            <li>(3x - 4)(x + 1) = 0</li>
                        </ul>
                        <p>તેથી, 3x = 4 &rarr; <b>x = 4/3</b><br>અને <b>x = -1</b></p>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>Step 2: સંબંધ ચકાસણી:</b></p>
                        <p>અહીં a = 3, b = -1, c = -4</p>
                        <p><b>1. સરવાળો:</b> (4/3) + (-1) = (4 - 3)/3 = 1/3 <br> સૂત્ર: -b/a = -(-1)/3 = 1/3</p>
                        <p><b>2. ગુણાકાર:</b> (4/3) × (-1) = -4/3 <br> સૂત્ર: c/a = -4/3</p>
                    </div>`
            },
                     
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (i)",
                question: "નીચે દર્શાવેલ સંખ્યાઓ અનુક્રમે દ્વિઘાત બહુપદીના શૂન્યોનો સરવાળો અને શૂન્યોનો ગુણાકાર છે. તે પરથી દ્વિઘાત બહુપદી મેળવો: 1/4, -1",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>1/4</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>-1</b></p>
                        
                        <div style="background:#e0e7ff; padding:10px; margin:10px 0; border-radius:5px;">
                            <b>💡 અગત્યનું સૂત્ર:</b> માંગેલ દ્વિઘાત બહુપદી મેળવવાનું સીધું સૂત્ર:<br>
                            <span style="font-size:16px; font-weight:bold; color:#1d4ed8;">p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</span>
                        </div>

                        <p>સૂત્રમાં કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (1/4)x + (-1) ]<br>
                        p(x) = k [ x² - x/4 - 1 ]</p>
                        
                        <p>કૌંસમાં 4 નો લ.સા.અ. (LCM) લેતા:<br>
                        p(x) = k [ (4x² - x - 4) / 4 ]<br>
                        p(x) = (k/4) [ 4x² - x - 4 ]</p>
                        
                        <p style="background:#eff6ff; padding:8px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: 4x² - x - 4 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (ii)",
                question: "શૂન્યોનો સરવાળો અને ગુણાકાર પરથી બહુપદી મેળવો: &radic;2, 1/3",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>&radic;2</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1/3</b></p>
                        
                        <p><b>સૂત્ર:</b> p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</p>
                        
                        <p>કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (&radic;2)x + (1/3) ]</p>
                        
                        <p>છેદમાં રહેલા 3 નો લ.સા.અ. લેતા (બધા પદને 3 વડે ગુણતા):<br>
                        p(x) = k [ (3x² - 3&radic;2x + 1) / 3 ]<br>
                        p(x) = (k/3) [ 3x² - 3&radic;2x + 1 ]</p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; border:1px dashed #10b981;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: 3x² - 3&radic;2x + 1 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (iii)",
                question: "શૂન્યોનો સરવાળો અને ગુણાકાર પરથી બહુપદી મેળવો: 0, &radic;5",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>0</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>&radic;5</b></p>
                        
                        <p><b>સૂત્ર:</b> p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</p>
                        
                        <p>કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (0)x + (&radic;5) ]<br>
                        p(x) = k [ x² - 0 + &radic;5 ]<br>
                        p(x) = k [ x² + &radic;5 ]</p>
                        
                        <p style="background:#fef3c7; padding:8px; border-radius:5px; font-weight:bold; color:#b45309; border:1px dashed #f59e0b;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: x² + &radic;5 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (iv)",
                question: "શૂન્યોનો સરવાળો અને ગુણાકાર પરથી બહુપદી મેળવો: 1, 1",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>1</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1</b></p>
                        
                        <p><b>સૂત્ર:</b> p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</p>
                        
                        <p>કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (1)x + (1) ]<br>
                        p(x) = k [ x² - x + 1 ]</p>
                        
                        <p style="background:#ede9fe; padding:8px; border-radius:5px; font-weight:bold; color:#5b21b6; border:1px dashed #8b5cf6;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: x² - x + 1 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (v)",
                question: "શૂન્યોનો સરવાળો અને ગુણાકાર પરથી બહુપદી મેળવો: -1/4, 1/4",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>-1/4</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1/4</b></p>
                        
                        <p><b>સૂત્ર:</b> p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</p>
                        
                        <p>કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (-1/4)x + (1/4) ]<br>
                        p(x) = k [ x² + x/4 + 1/4 ]</p>
                        
                        <p>છેદ સરખા હોવાથી 4 નો લ.સા.અ. લેતા:<br>
                        p(x) = k [ (4x² + x + 1) / 4 ]<br>
                        p(x) = (k/4) [ 4x² + x + 1 ]</p>
                        
                        <p style="background:#fce7f3; padding:8px; border-radius:5px; font-weight:bold; color:#be123c; border:1px dashed #ec4899;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: 4x² + x + 1 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 2.2 - પ્રશ્ન 2 (vi)",
                question: "શૂન્યોનો સરવાળો અને ગુણાકાર પરથી બહુપદી મેળવો: 4, 1",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>4</b><br>
                        અને શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1</b></p>
                        
                        <p><b>સૂત્ર:</b> p(x) = k [ x² - (&alpha; + &beta;)x + &alpha;&beta; ]</p>
                        
                        <p>કિંમત મૂકતા:<br>
                        p(x) = k [ x² - (4)x + (1) ]<br>
                        p(x) = k [ x² - 4x + 1 ]</p>
                        
                        <p style="background:#ccfbf1; padding:8px; border-radius:5px; font-weight:bold; color:#0f766e; border:1px dashed #14b8a6;">
                        તેથી, માંગેલ દ્વિઘાત બહુપદી: x² - 4x + 1 છે.
                        </p>
                    </div>`
            }
        ] // અહી પ્રકરણ 2 ના સ્વાધ્યાયનો એરે (Array) પૂરો થાય છે
    }, // અહી પ્રકરણ 2 નો ડેટા પૂરો થાય છે
      // ------------------------------------
    // પ્રકરણ 3: દ્વિચલ સુરેખ સમીકરણયુગ્મ
    // ------------------------------------
    3: {
        "theory": [
            {
                title: "થીયરી 1: બોર્ડ પરીક્ષાનું માળખું (Blueprint)",
                question: "આ પ્રકરણમાંથી બોર્ડની પરીક્ષામાં કેટલા ગુણનું પૂછાય છે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ef4444; font-size:14px; line-height:1.8; color:#334155;">
                        <p style="text-align:center; font-size:16px; font-weight:bold; color:#b91c1c; margin-bottom:10px;">🏆 કુલ ગુણ: 8</p>
                        <table style="width:100%; border-collapse: collapse; margin-top:10px; background:#fff; border-radius:5px; overflow:hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <tr style="background:#fee2e2; color:#991b1b; font-weight:bold; text-align:left;">
                                <th style="padding:10px; border:1px solid #fca5a5;">વિભાગ (Section)</th>
                                <th style="padding:10px; border:1px solid #fca5a5;">ગુણ (Marks)</th>
                                <th style="padding:10px; border:1px solid #fca5a5;">પ્રશ્ન ક્રમાંક (Q. No.)</th>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #fecaca;"><b>વિભાગ A</b> (હેતુલક્ષી)</td>
                                <td style="padding:10px; border:1px solid #fecaca;">2 ગુણ (1+1)</td>
                                <td style="padding:10px; border:1px solid #fecaca; font-weight:bold; color:#dc2626;">1 અને 15</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #fecaca;"><b>વિભાગ C</b> (દાખલા)</td>
                                <td style="padding:10px; border:1px solid #fecaca;">6 ગુણ (3+3)</td>
                                <td style="padding:10px; border:1px solid #fecaca; font-weight:bold; color:#dc2626;">38 અને 39</td>
                            </tr>
                        </table>
                        <p style="margin-top:10px; font-size:13px; color:#7f1d1d;"><i>નોંધ: વિદ્યાર્થીઓએ વિભાગ C ના 3 ગુણના દાખલાઓ (આદેશ અને લોપની રીત) પર ખાસ ભાર મૂકવો.</i></p>
                    </div>`
            },
            {
                title: "થીયરી 2: સમીકરણના ઉકેલની શરતો",
                question: "ગુણોત્તર સરખામણી પરથી સમીકરણના ઉકેલ અને આલેખનો પ્રકાર કેવી રીતે નક્કી થાય?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p>જો બે સમીકરણો <b>a₁x + b₁y + c₁ = 0</b> અને <b>a₂x + b₂y + c₂ = 0</b> હોય, તો તેમના સહગુણકોના ગુણોત્તર પરથી નીચેની 3 શરતો મળે છે:</p>
                        
                        <div style="background:#e0e7ff; padding:10px; margin-bottom:10px; border-radius:5px; border:1px solid #a5b4fc;">
                            <p style="margin:0; font-weight:bold; color:#1d4ed8;">1. છેદતી રેખાઓ (Intersecting Lines):</p>
                            <p style="margin:5px 0 0 0;">શરત: <b>a₁/a₂ &ne; b₁/b₂</b></p>
                            <p style="margin:0; font-size:13px;">ઉકેલ: માત્ર એક જ (અનન્ય) ઉકેલ મળે. (સમીકરણ સુસંગત છે)</p>
                        </div>

                        <div style="background:#ecfdf5; padding:10px; margin-bottom:10px; border-radius:5px; border:1px solid #6ee7b7;">
                            <p style="margin:0; font-weight:bold; color:#047857;">2. સંપાતી રેખાઓ (Coincident Lines - એકબીજા પર આવેલી):</p>
                            <p style="margin:5px 0 0 0;">શરત: <b>a₁/a₂ = b₁/b₂ = c₁/c₂</b></p>
                            <p style="margin:0; font-size:13px;">ઉકેલ: અનંત ઉકેલો મળે. (સમીકરણ સુસંગત અને અવલંબી છે)</p>
                        </div>

                        <div style="background:#fef3c7; padding:10px; border-radius:5px; border:1px solid #fcd34d;">
                            <p style="margin:0; font-weight:bold; color:#b45309;">3. સમાંતર રેખાઓ (Parallel Lines):</p>
                            <p style="margin:5px 0 0 0;">શરત: <b>a₁/a₂ = b₁/b₂ &ne; c₁/c₂</b></p>
                            <p style="margin:0; font-size:13px;">ઉકેલ: કોઈ ઉકેલ મળે નહિ. (સમીકરણ સુસંગત નથી)</p>
                        </div>
                    </div>`
            },
            {
                title: "થીયરી 3: ઉકેલ શોધવાની રીતો",
                question: "દ્વિચલ સુરેખ સમીકરણયુગ્મનો ઉકેલ શોધવાની બૈજિક રીતો કઈ છે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <ul style="padding-left:20px;">
                            <li><b>1. આદેશની રીત (Substitution Method):</b> કોઈ એક સમીકરણમાંથી 'x' અથવા 'y' ને કર્તા બનાવી, તેની કિંમત બીજા સમીકરણમાં મૂકવાની રીત.</li>
                            <li><b>2. લોપની રીત (Elimination Method):</b> બંને સમીકરણોમાં કોઈ એક ચલ (x અથવા y) ના સહગુણક સમાન બનાવી, સરવાળો કે બાદબાકી કરી તે ચલનો લોપ (દૂર) કરવાની રીત.</li>
                        </ul>
                    </div>`
            }
        ],

        "examples": [
            {
                title: "ઉદાહરણ 1 (આદેશની રીત)",
                question: "નીચેના દ્વિચલ સુરેખ સમીકરણયુગ્મનો ઉકેલ આદેશની રીતે મેળવો: <br> 7x - 15y = 2 <br> x + 2y = 3",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): 7x - 15y = 2<br>
                        સમીકરણ (2): x + 2y = 3</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (2) પરથી x ને કર્તા બનાવીએ, કારણ કે તેનો સહગુણક 1 છે (ગણતરી સરળ રહેશે).<br>
                        x = 3 - 2y &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> આ x ની કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        7(3 - 2y) - 15y = 2<br>
                        21 - 14y - 15y = 2<br>
                        21 - 29y = 2<br>
                        -29y = 2 - 21<br>
                        -29y = -19<br>
                        y = -19 / -29 &nbsp;&rarr;&nbsp; <b>y = 19/29</b></p>
                        
                        <p><b>Step 3:</b> y ની આ કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = 3 - 2(19/29)<br>
                        x = 3 - (38/29)<br>
                        લ.સા.અ. લેતા:<br>
                        x = (87 - 38) / 29<br>
                        <b>x = 49/29</b></p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; text-align:center;">
                        આમ, સમીકરણયુગ્મનો ઉકેલ x = 49/29 અને y = 19/29 છે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 2 (લોપની રીત)",
                question: "નીચેના સમીકરણયુગ્મનો ઉકેલ લોપની રીતે શોધો: <br> 9x - 4y = 2000 <br> 7x - 3y = 2000",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): 9x - 4y = 2000<br>
                        સમીકરણ (2): 7x - 3y = 2000</p>
                        
                        <p><b>Step 1:</b> અહી આપણે 'y' નો લોપ કરવો સરળ પડશે. તે માટે સમીકરણ (1) ને 3 વડે અને સમીકરણ (2) ને 4 વડે ગુણીએ (જેથી y ના સહગુણક 12 થઈ જાય).</p>
                        
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>(1) × 3 &rarr; 27x - 12y = 6000 &nbsp;&nbsp; ...(3)</li>
                            <li>(2) × 4 &rarr; 28x - 12y = 8000 &nbsp;&nbsp; ...(4)</li>
                        </ul>
                        
                        <p><b>Step 2:</b> સમીકરણ (4) માંથી સમીકરણ (3) બાદ કરતા (નિશાનીઓ બદલતા):<br>
                        &nbsp;&nbsp; 28x - 12y = 8000<br>
                        - (27x - 12y = 6000)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; <b>x = 2000</b></p>
                        
                        <p><b>Step 3:</b> x = 2000 કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        9(2000) - 4y = 2000<br>
                        18000 - 4y = 2000<br>
                        18000 - 2000 = 4y<br>
                        16000 = 4y<br>
                        y = 16000 / 4 &nbsp;&rarr;&nbsp; <b>y = 4000</b></p>
                        
                        <p style="background:#fce7f3; padding:8px; border-radius:5px; font-weight:bold; color:#be123c; text-align:center;">
                        આમ, ઉકેલ x = 2000 અને y = 4000 છે.
                        </p>
                    </div>`
            },
            {
                title: "ઉદાહરણ 3 (કૂટપ્રશ્ન / Word Problem)",
                question: "બે અંકોની એક સંખ્યા અને તે સંખ્યાના અંકોની અદલાબદલી કરતા મળતી સંખ્યાનો સરવાળો 66 છે. જો સંખ્યાના અંકોનો તફાવત 2 હોય, તો તે સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p><b>Step 1 (ધારણા):</b> ધારો કે બે અંકની સંખ્યાનો દશકનો અંક <b>x</b> અને એકમનો અંક <b>y</b> છે.<br>
                        તેથી મૂળ સંખ્યા = <b>10x + y</b><br>
                        અંકોની અદલાબદલી કરતા મળતી નવી સંખ્યા = <b>10y + x</b></p>
                        
                        <p><b>Step 2 (સમીકરણ બનાવવું):</b><br>
                        પ્રથમ શરત મુજબ બંનેનો સરવાળો 66 છે:<br>
                        (10x + y) + (10y + x) = 66<br>
                        11x + 11y = 66<br>
                        11 સામાન્ય કાઢતા:<br>
                        <b>x + y = 6</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p>બીજી શરત મુજબ અંકોનો તફાવત 2 છે:<br>
                        <b>x - y = 2</b> &nbsp;&nbsp; --- (સમીકરણ 2) (ધારો કે x > y છે)</p>
                        
                        <p><b>Step 3 (લોપની રીત):</b><br>
                        સમીકરણ (1) અને (2) નો સરવાળો કરતા:<br>
                        (x + y) + (x - y) = 6 + 2<br>
                        2x = 8 &nbsp;&rarr;&nbsp; <b>x = 4</b></p>
                        
                        <p>x ની કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        4 + y = 6 &nbsp;&rarr;&nbsp; <b>y = 2</b></p>
                        
                        <p><b>Step 4:</b> માંગેલ મૂળ સંખ્યા = 10x + y = 10(4) + 2 = 40 + 2 = <b>42</b>.<br>
                        (નોંધ: જો y > x લીધું હોય તો સંખ્યા 24 પણ મળી શકે).</p>
                        
                        <p style="background:#fef3c7; padding:8px; border-radius:5px; font-weight:bold; color:#b45309; text-align:center;">
                        જવાબ: માંગેલ સંખ્યા 42 અથવા 24 છે.
                        </p>
                    </div>`
            }
        ],
             // ------------------------------------
        // સ્વાધ્યાય 3.1 ની શરૂઆત 
        // ------------------------------------
        "exercise": [
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 1 (i)",
                question: "નીચેની સમસ્યા પરથી સુરેખ સમીકરણયુગ્મ બનાવો અને તેમનો ઉકેલ આલેખની રીતે શોધો: <br> ધોરણ 10 ના 10 વિદ્યાર્થીઓ ગણિતના કોયડાની સ્પર્ધામાં ભાગ લે છે. જો ભાગ લેનાર છોકરીઓની સંખ્યા છોકરાઓની સંખ્યા કરતાં 4 વધારે હોય, તો કેટલા છોકરાઓ અને કેટલી છોકરીઓએ ભાગ લીધો હશે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>Step 1: સમીકરણ બનાવવા:</b></p>
                        <p>ધારો કે, છોકરાઓની સંખ્યા = <b>x</b> અને છોકરીઓની સંખ્યા = <b>y</b></p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>👉 કુલ 10 વિદ્યાર્થીઓ છે: <b>x + y = 10</b> &nbsp;&nbsp;--- (સમીકરણ 1)</li>
                            <li>👉 છોકરીઓની સંખ્યા છોકરાઓ કરતા 4 વધુ છે: <b>y = x + 4</b> &nbsp;&nbsp;--- (સમીકરણ 2)</li>
                        </ul>
                        
                        <p><b>Step 2: આલેખ દોરવા માટેના બિંદુઓ:</b></p>
                        <p>સમીકરણ 1 (x + y = 10) માટે: જો x=5 તો y=5 (5,5). જો x=3 તો y=7 (3,7).<br>
                        સમીકરણ 2 (y = x + 4) માટે: જો x=1 તો y=5 (1,5). જો x=3 તો y=7 (3,7).</p>
                        
                        <div style="display:flex; justify-content:center; margin:15px 0;">
                            <svg viewBox="0 0 200 150" style="width:100%; max-width:300px; background:#fff; border:1px solid #cbd5e1; border-radius:5px;">
                                <line x1="20" y1="130" x2="190" y2="130" stroke="#334155" stroke-width="1.5" />
                                <line x1="20" y1="10" x2="20" y2="130" stroke="#334155" stroke-width="1.5" />
                                <line x1="20" y1="30" x2="120" y2="130" stroke="#2563eb" stroke-width="2" />
                                <text x="125" y="125" font-size="8" fill="#2563eb">x+y=10</text>
                                <line x1="20" y1="90" x2="120" y2="-10" stroke="#dc2626" stroke-width="2" />
                                <text x="100" y="15" font-size="8" fill="#dc2626">y=x+4</text>
                                <circle cx="50" cy="60" r="4" fill="#10b981" />
                                <text x="55" y="55" font-size="10" fill="#047857" font-weight="bold">B(3, 7)</text>
                                <text x="180" y="145" font-size="9" font-weight="bold">X (છોકરા)</text>
                                <text x="25" y="15" font-size="9" font-weight="bold">Y (છોકરી)</text>
                            </svg>
                        </div>
                        
                        <p style="background:#eff6ff; padding:10px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6; text-align:center;">
                        આલેખ પરથી સ્પષ્ટ છે કે બંને રેખાઓ (3, 7) બિંદુમાં છેદે છે.<br> 
                        જવાબ: છોકરાઓની સંખ્યા (x) = 3 અને છોકરીઓની સંખ્યા (y) = 7 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 2 (i)",
                question: "ગુણોત્તરો a₁/a₂, b₁/b₂ અને c₁/c₂ ની સરખામણી કરી નીચેના સમીકરણયુગ્મથી બનતી રેખાઓ એક બિંદુમાં છેદે છે, સમાંતર છે અથવા સંપાતી છે તે નક્કી કરો:<br> 5x - 4y + 8 = 0 <br> 7x + 6y - 9 = 0",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>આપેલા સમીકરણોને પ્રમાણિત સ્વરૂપ a₁x + b₁y + c₁ = 0 સાથે સરખાવતા:</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>a₁ = 5, b₁ = -4, c₁ = 8</li>
                            <li>a₂ = 7, b₂ = 6, c₂ = -9</li>
                        </ul>
                        
                        <p>હવે ગુણોત્તર ચકાસીએ:</p>
                        <p>👉 a₁ / a₂ = <b>5 / 7</b><br>
                        👉 b₁ / b₂ = -4 / 6 = <b>-2 / 3</b></p>
                        
                        <div style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857;">
                            <p style="margin:0;">અહીં સ્પષ્ટ છે કે, <b>a₁/a₂ &ne; b₁/b₂</b> (કારણ કે 5/7 અને -2/3 સરખા નથી).</p>
                        </div>
                        
                        <p style="margin-top:10px;"><b>નિષ્કર્ષ:</b> શરત મુજબ, આ સમીકરણયુગ્મથી બનતી <b>રેખાઓ એક બિંદુમાં છેદે છે.</b> (તેમને અનન્ય ઉકેલ છે).</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 2 (ii)",
                question: "ગુણોત્તરની સરખામણી કરી રેખાઓનો પ્રકાર નક્કી કરો:<br> 9x + 3y + 12 = 0 <br> 18x + 6y + 24 = 0",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>a₁ = 9, b₁ = 3, c₁ = 12</li>
                            <li>a₂ = 18, b₂ = 6, c₂ = 24</li>
                        </ul>
                        
                        <p>ગુણોત્તર મેળવીએ:</p>
                        <p>👉 a₁ / a₂ = 9 / 18 = <b>1 / 2</b><br>
                        👉 b₁ / b₂ = 3 / 6 = <b>1 / 2</b><br>
                        👉 c₁ / c₂ = 12 / 24 = <b>1 / 2</b></p>
                        
                        <div style="background:#fef3c7; padding:8px; border-radius:5px; font-weight:bold; color:#b45309;">
                            <p style="margin:0;">અહીં, <b>a₁/a₂ = b₁/b₂ = c₁/c₂</b> શરતનું પાલન થાય છે.</p>
                        </div>
                        
                        <p style="margin-top:10px;"><b>નિષ્કર્ષ:</b> ત્રણેય ગુણોત્તર સમાન હોવાથી, આ <b>સંપાતી રેખાઓ</b> છે (એકબીજા પર જ આવેલી છે) અને તેને અનંત ઉકેલો છે.</p>

                        <div style="border:1px dashed #f59e0b; padding:8px; margin-top:10px; font-size:13px; border-radius:5px;">
                            <b>💡 શોર્ટકટ (MCQ માટે):</b> ધ્યાનથી જુઓ, બીજા સમીકરણને 2 વડે ભાગીએ તો પહેલું સમીકરણ જ બની જાય છે! એટલે કે બંને સમીકરણો એક જ છે. માટે જવાબ હંમેશા "સંપાતી રેખાઓ" જ આવે.
                        </div>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 2 (iii)",
                question: "ગુણોત્તરની સરખામણી કરી રેખાઓનો પ્રકાર નક્કી કરો:<br> 6x - 3y + 10 = 0 <br> 2x - y + 9 = 0",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li>a₁ = 6, b₁ = -3, c₁ = 10</li>
                            <li>a₂ = 2, b₂ = -1, c₂ = 9</li>
                        </ul>
                        
                        <p>ગુણોત્તર મેળવીએ:</p>
                        <p>👉 a₁ / a₂ = 6 / 2 = <b>3 / 1 = 3</b><br>
                        👉 b₁ / b₂ = -3 / -1 = <b>3 / 1 = 3</b><br>
                        👉 c₁ / c₂ = <b>10 / 9</b></p>
                        
                        <div style="background:#ede9fe; padding:8px; border-radius:5px; font-weight:bold; color:#5b21b6;">
                            <p style="margin:0;">અહીં, <b>a₁/a₂ = b₁/b₂ &ne; c₁/c₂</b> છે. (પહેલા બે ગુણોત્તર સરખા છે, પણ ત્રીજો અલગ છે).</p>
                        </div>
                        
                        <p style="margin-top:10px;"><b>નિષ્કર્ષ:</b> આ શરત <b>સમાંતર રેખાઓ</b> દર્શાવે છે. આ રેખાઓ ક્યારેય એકબીજાને છેદશે નહિ અને તેને કોઈ ઉકેલ મળશે નહિ.</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 3 (i & ii)",
                question: "નીચેના સમીકરણયુગ્મ સુસંગત છે કે સુસંગત નથી તે ગુણોત્તર પરથી નક્કી કરો:<br>(i) 3x + 2y = 5 ; 2x - 3y = 7 <br>(ii) 2x - 3y = 8 ; 4x - 6y = 9",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>નોંધ:</b> જો ઉકેલ મળે (છેદતી અથવા સંપાતી રેખા) તો તે <b>સુસંગત (Consistent)</b> કહેવાય. જો ઉકેલ ન મળે (સમાંતર રેખા) તો તે <b>સુસંગત નથી (Inconsistent)</b> તેમ કહેવાય.</p>
                        <hr style="border:0; border-top:1px solid #cbd5e1; margin:10px 0;">
                        
                        <p><b>દાખલો (i): 3x + 2y = 5 ; 2x - 3y = 7</b></p>
                        <p>a₁/a₂ = 3/2 <br> b₁/b₂ = 2/-3 = -2/3</p>
                        <p>અહીં a₁/a₂ &ne; b₁/b₂ હોવાથી, અનન્ય ઉકેલ મળે. <br>
                        <span style="background:#fce7f3; color:#be123c; padding:3px 8px; border-radius:5px; font-weight:bold;">નિષ્કર્ષ: સમીકરણયુગ્મ સુસંગત છે.</span></p>

                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">

                        <p><b>દાખલો (ii): 2x - 3y = 8 ; 4x - 6y = 9</b></p>
                        <p>a₁/a₂ = 2/4 = 1/2 <br> b₁/b₂ = -3/-6 = 1/2 <br> c₁/c₂ = -8/-9 = 8/9</p>
                        <p>અહીં a₁/a₂ = b₁/b₂ &ne; c₁/c₂ હોવાથી, આ સમાંતર રેખાઓ છે (ઉકેલ ન મળે). <br>
                        <span style="background:#fce7f3; color:#be123c; padding:3px 8px; border-radius:5px; font-weight:bold;">નિષ્કર્ષ: સમીકરણયુગ્મ સુસંગત નથી.</span></p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.1 - પ્રશ્ન 3 (iii)",
                question: "સુસંગત છે કે નહિ તે ચકાસો: <br> (3/2)x + (5/3)y = 7 <br> 9x - 10y = 14",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>પહેલા સમીકરણને સરળ બનાવીએ (લ.સા.અ. 6 વડે ગુણતા):<br>
                        9x + 10y = 42<br>
                        બીજું સમીકરણ: 9x - 10y = 14</p>
                        
                        <p>ગુણોત્તર સરખાવતા:<br>
                        a₁/a₂ = 9/9 = 1<br>
                        b₁/b₂ = 10/-10 = -1</p>
                        
                        <p>અહીં a₁/a₂ &ne; b₁/b₂ (કારણ કે 1 અને -1 અલગ છે). તેથી અનન્ય ઉકેલ મળે.</p>
                        <p style="background:#ccfbf1; padding:8px; border-radius:5px; font-weight:bold; color:#0f766e; text-align:center;">
                        નિષ્કર્ષ: સમીકરણયુગ્મ સુસંગત છે.
                        </p>
                    </div>`
            },            
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (i)",
                question: "નીચેના દ્વિચલ સુરેખ સમીકરણયુગ્મનો ઉકેલ આદેશની રીતે મેળવો:<br> x + y = 14 <br> x - y = 4",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ (આદેશની રીત):</b></p>
                        <p>સમીકરણ (1): x + y = 14<br>
                        સમીકરણ (2): x - y = 4</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (2) પરથી x ને સૂત્રનો કર્તા બનાવીએ:<br>
                        <b>x = y + 4</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> x ની આ કિંમત સમીકરણ (1) માં મૂકતા (આદેશ લેતા):<br>
                        (y + 4) + y = 14<br>
                        2y + 4 = 14<br>
                        2y = 14 - 4<br>
                        2y = 10 &nbsp;&rarr;&nbsp; <b>y = 5</b></p>
                        
                        <p><b>Step 3:</b> y = 5 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = 5 + 4<br>
                        <b>x = 9</b></p>
                        
                        <p style="background:#eff6ff; padding:8px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6; text-align:center;">
                        આમ, સમીકરણયુગ્મનો ઉકેલ x = 9 અને y = 5 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (ii)",
                question: "ઉકેલ આદેશની રીતે મેળવો:<br> s - t = 3 <br> s/3 + t/2 = 6",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): s - t = 3 &nbsp;&rarr;&nbsp; <b>s = t + 3</b> &nbsp;&nbsp;--- (સમીકરણ 3)<br>
                        સમીકરણ (2): s/3 + t/2 = 6</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (2) નો લ.સા.અ. (6) લઈને સાદુંરૂપ આપીએ:<br>
                        (2s + 3t) / 6 = 6<br>
                        2s + 3t = 36 &nbsp;&nbsp;--- (સમીકરણ 4)</p>
                        
                        <p><b>Step 2:</b> s ની કિંમત (t + 3) સમીકરણ (4) માં મૂકતા:<br>
                        2(t + 3) + 3t = 36<br>
                        2t + 6 + 3t = 36<br>
                        5t + 6 = 36<br>
                        5t = 36 - 6<br>
                        5t = 30 &nbsp;&rarr;&nbsp; <b>t = 6</b></p>
                        
                        <p><b>Step 3:</b> t = 6 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        s = 6 + 3 &nbsp;&rarr;&nbsp; <b>s = 9</b></p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; border:1px dashed #10b981; text-align:center;">
                        આમ, ઉકેલ s = 9 અને t = 6 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (iii)",
                question: "ઉકેલ આદેશની રીતે મેળવો:<br> 3x - y = 3 <br> 9x - 3y = 9",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): 3x - y = 3<br>
                        સમીકરણ (2): 9x - 3y = 9</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (1) પરથી y ને કર્તા બનાવીએ (કારણ કે તેનો સહગુણક -1 છે):<br>
                        3x - 3 = y &nbsp;&rarr;&nbsp; <b>y = 3x - 3</b> &nbsp;&nbsp;--- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> y ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        9x - 3(3x - 3) = 9<br>
                        9x - 9x + 9 = 9<br>
                        <b>9 = 9</b></p>
                        
                        <div style="background:#fef3c7; padding:10px; border-radius:5px; border:1px solid #fde68a; margin-top:10px;">
                            <p style="margin:0; font-weight:bold; color:#b45309;">💡 સમજૂતી:</p>
                            <p style="margin:5px 0 0 0;">અહીં ચલ 'x' નો લોપ થઈ જાય છે અને 9 = 9 જેવું સત્ય વિધાન મળે છે. આનો અર્થ એ છે કે <b>બંને સમીકરણો એક જ છે (સંપાતી રેખાઓ)</b>.</p>
                        </div>
                        
                        <p style="margin-top:10px;"><b>નિષ્કર્ષ:</b> આ સમીકરણયુગ્મને <b>અનંત ઉકેલો</b> છે. (કોઈ ચોક્કસ x અને y ની કિંમત ન મળે).</p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (iv)",
                question: "ઉકેલ આદેશની રીતે મેળવો:<br> 0.2x + 0.3y = 1.3 <br> 0.4x + 0.5y = 2.3",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>અહીં દશાંશ ચિહ્ન (પોઈન્ટ) દૂર કરવા માટે બંને સમીકરણોને 10 વડે ગુણતા:</p>
                        <ul style="list-style-type:none; padding-left:10px;">
                            <li><b>2x + 3y = 13</b> &nbsp;&nbsp;--- (સમીકરણ 1)</li>
                            <li><b>4x + 5y = 23</b> &nbsp;&nbsp;--- (સમીકરણ 2)</li>
                        </ul>
                        
                        <p><b>Step 1:</b> સમીકરણ (1) પરથી x ને કર્તા બનાવીએ:<br>
                        2x = 13 - 3y<br>
                        <b>x = (13 - 3y) / 2</b> &nbsp;&nbsp;--- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> x ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        4 [ (13 - 3y) / 2 ] + 5y = 23<br>
                        2 (13 - 3y) + 5y = 23 &nbsp;&nbsp;<i>(કારણ કે 4/2 = 2)</i><br>
                        26 - 6y + 5y = 23<br>
                        26 - y = 23<br>
                        -y = 23 - 26<br>
                        -y = -3 &nbsp;&rarr;&nbsp; <b>y = 3</b></p>
                        
                        <p><b>Step 3:</b> y = 3 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = (13 - 3(3)) / 2<br>
                        x = (13 - 9) / 2 = 4 / 2 &nbsp;&rarr;&nbsp; <b>x = 2</b></p>
                        
                        <p style="background:#ede9fe; padding:8px; border-radius:5px; font-weight:bold; color:#5b21b6; border:1px dashed #8b5cf6; text-align:center;">
                        આમ, ઉકેલ x = 2 અને y = 3 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (v)",
                question: "ઉકેલ આદેશની રીતે મેળવો:<br> &radic;2x + &radic;3y = 0 <br> &radic;3x - &radic;8y = 0",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): &radic;2x + &radic;3y = 0<br>
                        સમીકરણ (2): &radic;3x - &radic;8y = 0</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (1) પરથી x ને કર્તા બનાવીએ:<br>
                        &radic;2x = -&radic;3y<br>
                        <b>x = -&radic;3y / &radic;2</b> &nbsp;&nbsp;--- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> x ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        &radic;3 [ -&radic;3y / &radic;2 ] - &radic;8y = 0<br>
                        (-3y / &radic;2) - 2&radic;2y = 0 &nbsp;&nbsp;<i>(નોંધ: &radic;8 = 2&radic;2)</i><br>
                        <br>બંને પદમાંથી 'y' સામાન્ય કાઢતા:<br>
                        y [ -3/&radic;2 - 2&radic;2 ] = 0</p>
                        
                        <p>અહીં કૌંસમાં રહેલી સંખ્યા શૂન્ય નથી, તેથી <b>y = 0</b> જ હોવું જોઈએ.</p>
                        
                        <p><b>Step 3:</b> y = 0 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = -&radic;3(0) / &radic;2 &nbsp;&rarr;&nbsp; <b>x = 0</b></p>
                        
                        <div style="border:1px dashed #ec4899; padding:8px; margin-top:10px; font-size:13px; border-radius:5px;">
                            <b>💡 શોર્ટકટ ટ્રીક:</b> જ્યારે બંને સમીકરણોમાં અચળ પદ શૂન્ય (c₁=0, c₂=0) હોય, એટલે કે સમીકરણ બરાબરની જમણી બાજુ ઝીરો હોય, ત્યારે હંમેશા તેનો ઉકેલ <b>x=0, y=0</b> જ મળે!
                        </div>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 1 (vi)",
                question: "ઉકેલ આદેશની રીતે મેળવો:<br> (3x/2) - (5y/3) = -2 <br> x/3 + y/2 = 13/6",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>બંને સમીકરણોમાં છેદ દૂર કરવા લ.સા.અ. (6) લઈને સાદુંરૂપ આપીએ:</p>
                        <p>સમીકરણ 1: 3(3x) - 2(5y) = -12 &nbsp;&rarr;&nbsp; <b>9x - 10y = -12</b> &nbsp;&nbsp;---(1)<br>
                        સમીકરણ 2: 2(x) + 3(y) = 13 &nbsp;&rarr;&nbsp; <b>2x + 3y = 13</b> &nbsp;&nbsp;---(2)</p>
                        
                        <p><b>Step 1:</b> સમીકરણ (2) પરથી x ને કર્તા બનાવીએ:<br>
                        2x = 13 - 3y<br>
                        <b>x = (13 - 3y) / 2</b> &nbsp;&nbsp;--- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> x ની આ કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        9 [ (13 - 3y) / 2 ] - 10y = -12<br>
                        (117 - 27y) / 2 - 10y = -12<br>
                        આખા સમીકરણને 2 વડે ગુણતા (લ.સા.અ. લેતા):<br>
                        117 - 27y - 20y = -24<br>
                        117 - 47y = -24<br>
                        -47y = -24 - 117<br>
                        -47y = -141 &nbsp;&rarr;&nbsp; y = -141 / -47 &nbsp;&rarr;&nbsp; <b>y = 3</b></p>
                        
                        <p><b>Step 3:</b> y = 3 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = (13 - 3(3)) / 2<br>
                        x = (13 - 9) / 2 = 4 / 2 &nbsp;&rarr;&nbsp; <b>x = 2</b></p>
                        
                        <p style="background:#ccfbf1; padding:8px; border-radius:5px; font-weight:bold; color:#0f766e; text-align:center;">
                        આમ, ઉકેલ x = 2 અને y = 3 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 2",
                question: "સમીકરણ 2x + 3y = 11 અને 2x - 4y = -24 નો ઉકેલ શોધો અને એવો 'm' શોધો કે જેથી y = mx + 3 થાય.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f43f5e; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): 2x + 3y = 11<br>
                        સમીકરણ (2): 2x - 4y = -24 (આખા સમીકરણને 2 વડે ભાગતા <b>x - 2y = -12</b> બને)</p>
                        
                        <p><b>Step 1:</b> સરળ સમીકરણ x - 2y = -12 પરથી x ને કર્તા બનાવીએ:<br>
                        <b>x = 2y - 12</b> &nbsp;&nbsp;--- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> x ની આ કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        2(2y - 12) + 3y = 11<br>
                        4y - 24 + 3y = 11<br>
                        7y = 11 + 24<br>
                        7y = 35 &nbsp;&rarr;&nbsp; <b>y = 5</b></p>
                        
                        <p><b>Step 3:</b> y = 5 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = 2(5) - 12<br>
                        x = 10 - 12 &nbsp;&rarr;&nbsp; <b>x = -2</b></p>
                        
                        <hr style="border:0; border-top:1px dashed #cbd5e1; margin:15px 0;">
                        
                        <p><b>Step 4: 'm' શોધવા માટે:</b><br>
                        આપણને આપેલ છે: y = mx + 3<br>
                        અહીં x = -2 અને y = 5 મૂકતા:<br>
                        5 = m(-2) + 3<br>
                        5 - 3 = -2m<br>
                        2 = -2m<br>
                        m = 2 / -2 &nbsp;&rarr;&nbsp; <span style="font-size:16px; font-weight:bold; color:#be123c;">m = -1</span></p>
                    </div>`
            },
                     
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (i)",
                question: "નીચેની સમસ્યા ઉપરથી દ્વિચલ સુરેખ સમીકરણયુગ્મ મેળવો અને આદેશની રીતે ઉકેલ શોધો:<br> બે સંખ્યાઓનો તફાવત 26 છે અને એક સંખ્યા બીજી સંખ્યાથી ત્રણ ગણી છે. તો તે બે સંખ્યાઓ શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે મોટી સંખ્યા = <b>x</b> અને નાની સંખ્યા = <b>y</b> છે.</p>
                        
                        <p><b>Step 1 (સમીકરણ બનાવવા):</b><br>
                        પહેલી શરત: બે સંખ્યાનો તફાવત (બાદબાકી) 26 છે.<br>
                        <b>x - y = 26</b> &nbsp;&nbsp; --- (સમીકરણ 1)<br>
                        બીજી શરત: એક સંખ્યા બીજી સંખ્યા કરતા ત્રણ ગણી છે.<br>
                        <b>x = 3y</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 2 (આદેશની રીત):</b><br>
                        અહીં સમીકરણ (2) માં પહેલેથી જ x કર્તા બનેલો છે. તેથી x ની આ કિંમત (3y) સીધી જ સમીકરણ (1) માં મૂકતા:<br>
                        3y - y = 26<br>
                        2y = 26<br>
                        y = 26 / 2 &nbsp;&rarr;&nbsp; <b>y = 13</b> (નાની સંખ્યા)</p>
                        
                        <p><b>Step 3:</b> y = 13 ની કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        x = 3(13) &nbsp;&rarr;&nbsp; <b>x = 39</b> (મોટી સંખ્યા)</p>
                        
                        <p style="background:#eff6ff; padding:8px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6; text-align:center;">
                        જવાબ: માંગેલ બે સંખ્યાઓ 39 અને 13 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (ii)",
                question: "બે પૂરકકોણો પૈકી મોટો ખૂણો નાના ખૂણા કરતાં 18 અંશ મોટો હોય, તો તે પૂરકકોણો શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે મોટા ખૂણાનું માપ = <b>x°</b> અને નાના ખૂણાનું માપ = <b>y°</b> છે.</p>
                        
                        <p><b>Step 1 (સમીકરણ બનાવવા):</b><br>
                        પહેલી શરત: આપણે જાણીએ છીએ કે બે પૂરકકોણોનો સરવાળો હંમેશા 180° થાય છે.<br>
                        <b>x + y = 180</b> &nbsp;&nbsp; --- (સમીકરણ 1)<br>
                        બીજી શરત: મોટો ખૂણો નાના ખૂણા કરતા 18° મોટો છે.<br>
                        <b>x = y + 18</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 2 (આદેશની રીત):</b><br>
                        સમીકરણ (2) ની x ની કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        (y + 18) + y = 180<br>
                        2y + 18 = 180<br>
                        2y = 180 - 18<br>
                        2y = 162<br>
                        y = 162 / 2 &nbsp;&rarr;&nbsp; <b>y = 81</b></p>
                        
                        <p><b>Step 3:</b> y = 81 ની કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        x = 81 + 18 &nbsp;&rarr;&nbsp; <b>x = 99</b></p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; border:1px dashed #10b981; text-align:center;">
                        જવાબ: બંને પૂરકકોણો 99° અને 81° છે. (ચકાસણી: 99 + 81 = 180 થાય છે)
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (iii)",
                question: "ક્રિકેટ ટીમના કોચે 7 બેટ અને 6 દડા 3800 રૂપિયામાં ખરીદ્યા. પછીથી તેણે તે જ કિંમતવાળા 3 બેટ અને 5 દડા 1750 રૂપિયામાં ખરીદ્યા. તો એક બેટની કિંમત અને એક દડાની કિંમત શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે 1 બેટની કિંમત = <b>x</b> રૂપિયા અને 1 દડાની કિંમત = <b>y</b> રૂપિયા છે.</p>
                        
                        <p><b>Step 1 (સમીકરણ બનાવવા):</b><br>
                        7 બેટ અને 6 દડાની કુલ કિંમત 3800 છે: <br>
                        <b>7x + 6y = 3800</b> &nbsp;&nbsp; --- (સમીકરણ 1)<br>
                        3 બેટ અને 5 દડાની કુલ કિંમત 1750 છે: <br>
                        <b>3x + 5y = 1750</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 2 (આદેશ લેવો):</b><br>
                        સમીકરણ (1) પરથી y ને કર્તા બનાવીએ:<br>
                        6y = 3800 - 7x <br>
                        <b>y = (3800 - 7x) / 6</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 3:</b> y ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        3x + 5 [ (3800 - 7x) / 6 ] = 1750<br>
                        3x + (19000 - 35x) / 6 = 1750<br>
                        <br>
                        આખા સમીકરણને 6 વડે ગુણતા (લ.સા.અ. લેતા):<br>
                        6(3x) + 19000 - 35x = 6(1750)<br>
                        18x + 19000 - 35x = 10500<br>
                        -17x = 10500 - 19000<br>
                        -17x = -8500<br>
                        x = -8500 / -17 &nbsp;&rarr;&nbsp; <b>x = 500</b></p>
                        
                        <p><b>Step 4:</b> x = 500 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        y = (3800 - 7(500)) / 6<br>
                        y = (3800 - 3500) / 6<br>
                        y = 300 / 6 &nbsp;&rarr;&nbsp; <b>y = 50</b></p>
                        
                        <p style="background:#fef3c7; padding:8px; border-radius:5px; font-weight:bold; color:#b45309; border:1px dashed #f59e0b; text-align:center;">
                        જવાબ: 1 બેટની કિંમત 500 રૂપિયા અને 1 દડાની કિંમત 50 રૂપિયા છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (iv)",
                question: "એક શહેરમાં ટેક્સીનું ભાડું નિશ્ચિત ભાડા અને અંતરના પ્રમાણમાં સંયુક્ત રીતે લેવાય છે. 10 કિમીના અંતર માટે 105 રૂપિયા અને 15 કિમીના અંતર માટે 155 રૂપિયા ચૂકવવા પડે છે. તો નિશ્ચિત ભાડું અને પ્રતિ કિમી કેટલું ભાડું ચૂકવવું પડે? 25 કિમીની મુસાફરી માટે કેટલું ભાડું ચૂકવવું પડે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે ટેક્સીનું નિશ્ચિત ભાડું (Fixed charge) = <b>x</b> રૂપિયા<br>
                        અને પ્રતિ કિમી ભાડું (Per km charge) = <b>y</b> રૂપિયા છે.</p>
                        
                        <p><b>Step 1 (સમીકરણ બનાવવા):</b><br>
                        10 કિમી માટે: નિશ્ચિત ભાડું + 10 કિમીનું ભાડું = 105<br>
                        <b>x + 10y = 105</b> &nbsp;&nbsp; --- (સમીકરણ 1)<br>
                        15 કિમી માટે:<br>
                        <b>x + 15y = 155</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 2 (આદેશની રીત):</b><br>
                        સમીકરણ (1) પરથી x ને કર્તા બનાવીએ:<br>
                        <b>x = 105 - 10y</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 3:</b> x ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        (105 - 10y) + 15y = 155<br>
                        105 + 5y = 155<br>
                        5y = 155 - 105<br>
                        5y = 50<br>
                        y = 50 / 5 &nbsp;&rarr;&nbsp; <b>y = 10</b></p>
                        
                        <p><b>Step 4:</b> y = 10 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = 105 - 10(10)<br>
                        x = 105 - 100 &nbsp;&rarr;&nbsp; <b>x = 5</b></p>
                        
                        <p><b>Step 5: 25 કિમી માટે ભાડું શોધવું:</b><br>
                        કુલ ભાડું = x + 25y<br>
                        = 5 + 25(10)<br>
                        = 5 + 250 = <b>255 રૂપિયા</b></p>
                        
                        <p style="background:#ede9fe; padding:8px; border-radius:5px; font-weight:bold; color:#5b21b6; border:1px dashed #8b5cf6; text-align:center;">
                        જવાબ: નિશ્ચિત ભાડું 5 રૂપિયા અને પ્રતિ કિમી ભાડું 10 રૂપિયા છે. 25 કિમી માટે કુલ 255 રૂપિયા ચૂકવવા પડશે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (v)",
                question: "એક અપૂર્ણાંકના અંશ અને છેદ બંનેમાં 2 ઉમેરતા તે 9/11 બને છે. જો અંશ અને છેદ બંનેમાં 3 ઉમેરતા તે 5/6 બને, તો તે અપૂર્ણાંક શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે માંગેલ અપૂર્ણાંકનો અંશ = <b>x</b> અને છેદ = <b>y</b> છે. (માટે અપૂર્ણાંક = <b>x/y</b>)</p>
                        
                        <p><b>Step 1 (સમીકરણ 1 બનાવવું):</b><br>
                        અંશ અને છેદમાં 2 ઉમેરતા (x+2) / (y+2) = 9/11 થાય.<br>
                        ચોકડી ગુણાકાર કરતા:<br>
                        11(x + 2) = 9(y + 2)<br>
                        11x + 22 = 9y + 18<br>
                        <b>11x - 9y = -4</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>Step 2 (સમીકરણ 2 બનાવવું):</b><br>
                        અંશ અને છેદમાં 3 ઉમેરતા (x+3) / (y+3) = 5/6 થાય.<br>
                        ચોકડી ગુણાકાર કરતા:<br>
                        6(x + 3) = 5(y + 3)<br>
                        6x + 18 = 5y + 15<br>
                        <b>6x - 5y = -3</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 3 (આદેશની રીત):</b><br>
                        સમીકરણ (1) પરથી x ને કર્તા બનાવીએ:<br>
                        11x = 9y - 4 &nbsp;&rarr;&nbsp; <b>x = (9y - 4) / 11</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p>x ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        6 [ (9y - 4) / 11 ] - 5y = -3<br>
                        (54y - 24) / 11 - 5y = -3<br>
                        આખા સમીકરણને 11 વડે ગુણતા:<br>
                        54y - 24 - 55y = -33<br>
                        -y - 24 = -33<br>
                        -y = -33 + 24<br>
                        -y = -9 &nbsp;&rarr;&nbsp; <b>y = 9</b> (છેદ)</p>
                        
                        <p><b>Step 4:</b> y = 9 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = (9(9) - 4) / 11<br>
                        x = (81 - 4) / 11<br>
                        x = 77 / 11 &nbsp;&rarr;&nbsp; <b>x = 7</b> (અંશ)</p>
                        
                        <p style="background:#fce7f3; padding:8px; border-radius:5px; font-weight:bold; color:#be123c; border:1px dashed #ec4899; text-align:center;">
                        જવાબ: માંગેલ અપૂર્ણાંક 7/9 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.2 - પ્રશ્ન 3 (vi)",
                question: "પાંચ વર્ષ પછી જેકબની ઉંમર (વર્ષમાં) તેના પુત્રની ઉંમર કરતા ત્રણ ગણી હશે. પાંચ વર્ષ પહેલાં જેકબની ઉંમર તેના પુત્રની ઉંમરથી સાત ગણી હોય, તો તેમની વર્તમાન ઉંમર શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે જેકબની હાલની ઉંમર = <b>x</b> વર્ષ અને તેના પુત્રની હાલની ઉંમર = <b>y</b> વર્ષ છે.</p>
                        
                        <p><b>Step 1 (સમીકરણ 1 બનાવવું):</b><br>
                        5 વર્ષ <b>પછી</b>: જેકબની ઉંમર (x+5) અને પુત્રની ઉંમર (y+5).<br>
                        શરત મુજબ: x + 5 = 3(y + 5)<br>
                        x + 5 = 3y + 15<br>
                        <b>x - 3y = 10</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>Step 2 (સમીકરણ 2 બનાવવું):</b><br>
                        5 વર્ષ <b>પહેલાં</b>: જેકબની ઉંમર (x-5) અને પુત્રની ઉંમર (y-5).<br>
                        શરત મુજબ: x - 5 = 7(y - 5)<br>
                        x - 5 = 7y - 35<br>
                        <b>x - 7y = -30</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>Step 3 (આદેશની રીત):</b><br>
                        સમીકરણ (1) પરથી x ને કર્તા બનાવીએ:<br>
                        <b>x = 3y + 10</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p>x ની આ કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        (3y + 10) - 7y = -30<br>
                        -4y + 10 = -30<br>
                        -4y = -30 - 10<br>
                        -4y = -40<br>
                        y = -40 / -4 &nbsp;&rarr;&nbsp; <b>y = 10</b> (પુત્રની ઉંમર)</p>
                        
                        <p><b>Step 4:</b> y = 10 ની કિંમત સમીકરણ (3) માં મૂકતા:<br>
                        x = 3(10) + 10<br>
                        x = 30 + 10 &nbsp;&rarr;&nbsp; <b>x = 40</b> (જેકબની ઉંમર)</p>
                        
                        <p style="background:#ccfbf1; padding:8px; border-radius:5px; font-weight:bold; color:#0f766e; border:1px dashed #14b8a6; text-align:center;">
                        જવાબ: જેકબની હાલની ઉંમર 40 વર્ષ છે અને તેના પુત્રની હાલની ઉંમર 10 વર્ષ છે.
                        </p>
                    </div>`
            },
                     
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 1 (i)",
                question: "નીચેના દ્વિચલ સુરેખ સમીકરણયુગ્મનો ઉકેલ લોપની રીતે શોધો:<br> x + y = 5 <br> 2x - 3y = 4",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ (લોપની રીત):</b></p>
                        <p>સમીકરણ (1): x + y = 5<br>
                        સમીકરણ (2): 2x - 3y = 4</p>
                        
                        <p><b>Step 1:</b> y નો લોપ કરવા માટે સમીકરણ (1) ને 3 વડે ગુણતા:<br>
                        3(x) + 3(y) = 3(5)<br>
                        <b>3x + 3y = 15</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> સમીકરણ (2) અને (3) નો સરવાળો કરતા:<br>
                        &nbsp;&nbsp; 2x - 3y = 4<br>
                        + (3x + 3y = 15)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; 5x = 19 &nbsp;&rarr;&nbsp; <b>x = 19/5</b></p>
                        
                        <p><b>Step 3:</b> x ની કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        19/5 + y = 5<br>
                        y = 5 - (19/5)<br>
                        લ.સા.અ. લેતા: y = (25 - 19) / 5<br>
                        <b>y = 6/5</b></p>
                        
                        <p style="background:#eff6ff; padding:8px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6; text-align:center;">
                        આમ, સમીકરણયુગ્મનો ઉકેલ x = 19/5 અને y = 6/5 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 1 (ii)",
                question: "ઉકેલ લોપની રીતે શોધો:<br> 3x + 4y = 10 <br> 2x - 2y = 2",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણ (1): 3x + 4y = 10<br>
                        સમીકરણ (2): 2x - 2y = 2</p>
                        
                        <p><b>Step 1:</b> y નો લોપ કરવા માટે સમીકરણ (2) ને 2 વડે ગુણતા (જેથી y નો સહગુણક 4 થઈ જાય):<br>
                        2(2x) - 2(2y) = 2(2)<br>
                        <b>4x - 4y = 4</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> સમીકરણ (1) અને (3) નો સરવાળો કરતા:<br>
                        &nbsp;&nbsp; 3x + 4y = 10<br>
                        + (4x - 4y = 4)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; 7x = 14 &nbsp;&rarr;&nbsp; x = 14 / 7 &nbsp;&rarr;&nbsp; <b>x = 2</b></p>
                        
                        <p><b>Step 3:</b> x = 2 ની કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        2(2) - 2y = 2<br>
                        4 - 2y = 2<br>
                        -2y = 2 - 4<br>
                        -2y = -2 &nbsp;&rarr;&nbsp; <b>y = 1</b></p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; border:1px dashed #10b981; text-align:center;">
                        આમ, ઉકેલ x = 2 અને y = 1 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 1 (iii)",
                question: "ઉકેલ લોપની રીતે શોધો:<br> 3x - 5y - 4 = 0 <br> 9x = 2y + 7",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>સમીકરણોને યોગ્ય સ્વરૂપમાં ગોઠવતા:<br>
                        સમીકરણ (1): 3x - 5y = 4<br>
                        સમીકરણ (2): 9x - 2y = 7</p>
                        
                        <p><b>Step 1:</b> x નો લોપ કરવા માટે સમીકરણ (1) ને 3 વડે ગુણતા:<br>
                        <b>9x - 15y = 12</b> &nbsp;&nbsp; --- (સમીકરણ 3)</p>
                        
                        <p><b>Step 2:</b> સમીકરણ (3) માંથી સમીકરણ (2) બાદ કરતા:<br>
                        &nbsp;&nbsp; 9x - 15y = 12<br>
                        - (9x - 2y = 7) &nbsp;&nbsp;<i>(નિશાની બદલતા: -9x + 2y = -7)</i><br>
                        -----------------------<br>
                        &nbsp;&nbsp; -13y = 5 &nbsp;&rarr;&nbsp; <b>y = -5/13</b></p>
                        
                        <p><b>Step 3:</b> y ની આ કિંમત સમીકરણ (1) માં મૂકતા:<br>
                        3x - 5(-5/13) = 4<br>
                        3x + 25/13 = 4<br>
                        3x = 4 - 25/13<br>
                        3x = (52 - 25) / 13<br>
                        3x = 27/13 &nbsp;&rarr;&nbsp; x = 27 / (13 × 3) &nbsp;&rarr;&nbsp; <b>x = 9/13</b></p>
                        
                        <p style="background:#fef3c7; padding:8px; border-radius:5px; font-weight:bold; color:#b45309; border:1px dashed #f59e0b; text-align:center;">
                        આમ, ઉકેલ x = 9/13 અને y = -5/13 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 1 (iv)",
                question: "ઉકેલ લોપની રીતે શોધો:<br> x/2 + 2y/3 = -1 <br> x - y/3 = 3",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>પહેલા લ.સા.અ. લઈને સમીકરણોને સાદા સ્વરૂપમાં ફેરવીએ:<br>
                        સમીકરણ (1): (3x + 4y) / 6 = -1 &nbsp;&rarr;&nbsp; <b>3x + 4y = -6</b><br>
                        સમીકરણ (2): (3x - y) / 3 = 3 &nbsp;&rarr;&nbsp; <b>3x - y = 9</b></p>
                        
                        <p><b>Step 1:</b> અહી બંનેમાં 3x સરખા જ છે, તેથી સીધી જ બાદબાકી કરતા:<br>
                        &nbsp;&nbsp; 3x + 4y = -6<br>
                        - (3x - y = 9) &nbsp;&nbsp;<i>(નિશાની બદલતા: -3x + y = -9)</i><br>
                        -----------------------<br>
                        &nbsp;&nbsp; 5y = -15 &nbsp;&rarr;&nbsp; y = -15 / 5 &nbsp;&rarr;&nbsp; <b>y = -3</b></p>
                        
                        <p><b>Step 2:</b> y = -3 ની કિંમત સમીકરણ (2) માં મૂકતા:<br>
                        3x - (-3) = 9<br>
                        3x + 3 = 9<br>
                        3x = 6 &nbsp;&rarr;&nbsp; <b>x = 2</b></p>
                        
                        <p style="background:#ede9fe; padding:8px; border-radius:5px; font-weight:bold; color:#5b21b6; border:1px dashed #8b5cf6; text-align:center;">
                        આમ, ઉકેલ x = 2 અને y = -3 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 2 (i)",
                question: "કૂટપ્રશ્ન (લોપની રીત): એક અપૂર્ણાંકના અંશમાં 1 ઉમેરતા અને છેદમાંથી 1 બાદ કરતા અપૂર્ણાંકની કિંમત 1 બને છે. જો માત્ર છેદમાં 1 ઉમેરતા અપૂર્ણાંકનું અતિસંક્ષિપ્ત રૂપ 1/2 બને, તો તે અપૂર્ણાંક શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે માંગેલ અપૂર્ણાંકનો અંશ = <b>x</b> અને છેદ = <b>y</b> છે. (અપૂર્ણાંક = x/y)</p>
                        
                        <p><b>સમીકરણ 1:</b> શરત મુજબ, (x+1) / (y-1) = 1<br>
                        x + 1 = y - 1<br>
                        <b>x - y = -2</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>સમીકરણ 2:</b> બીજી શરત મુજબ, x / (y+1) = 1/2<br>
                        2x = y + 1<br>
                        <b>2x - y = 1</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>લોપની રીત:</b> અહી y ના સહગુણક સરખા છે, તેથી બાદબાકી કરતા:<br>
                        &nbsp;&nbsp; 2x - y = 1<br>
                        - (x - y = -2)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; <b>x = 3</b> (અંશ)</p>
                        
                        <p>x = 3 સમીકરણ (1) માં મૂકતા:<br>
                        3 - y = -2 &nbsp;&rarr;&nbsp; -y = -5 &nbsp;&rarr;&nbsp; <b>y = 5</b> (છેદ)</p>
                        
                        <p style="background:#fce7f3; padding:8px; border-radius:5px; font-weight:bold; color:#be123c; border:1px dashed #ec4899; text-align:center;">
                        જવાબ: માંગેલ અપૂર્ણાંક 3/5 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 2 (ii)",
                question: "કૂટપ્રશ્ન: પાંચ વર્ષ પહેલાં નૂરીની ઉંમર સોનુની ઉંમરથી ત્રણ ગણી હતી. દસ વર્ષ પછી નૂરીની ઉંમર સોનુની ઉંમરથી બે ગણી થશે. તો નૂરી અને સોનુની વર્તમાન ઉંમર કેટલી હશે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે નૂરીની હાલની ઉંમર = <b>x</b> અને સોનુની હાલની ઉંમર = <b>y</b> છે.</p>
                        
                        <p><b>સમીકરણ 1:</b> 5 વર્ષ પહેલાં:<br>
                        x - 5 = 3(y - 5)<br>
                        x - 5 = 3y - 15<br>
                        <b>x - 3y = -10</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>સમીકરણ 2:</b> 10 વર્ષ પછી:<br>
                        x + 10 = 2(y + 10)<br>
                        x + 10 = 2y + 20<br>
                        <b>x - 2y = 10</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>લોપની રીત:</b> x નો લોપ કરવા બાદબાકી કરતા:<br>
                        &nbsp;&nbsp; x - 2y = 10<br>
                        - (x - 3y = -10)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; <b>y = 20</b> (સોનુની ઉંમર)</p>
                        
                        <p>y = 20 સમીકરણ (2) માં મૂકતા:<br>
                        x - 2(20) = 10 &nbsp;&rarr;&nbsp; x - 40 = 10 &nbsp;&rarr;&nbsp; <b>x = 50</b> (નૂરીની ઉંમર)</p>
                        
                        <p style="background:#ccfbf1; padding:8px; border-radius:5px; font-weight:bold; color:#0f766e; border:1px dashed #14b8a6; text-align:center;">
                        જવાબ: નૂરીની હાલની ઉંમર 50 વર્ષ અને સોનુની 20 વર્ષ છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 2 (iii)",
                question: "કૂટપ્રશ્ન: બે અંકોની એક સંખ્યાના અંકોનો સરવાળો 9 છે. વળી સંખ્યાના નવ ગણા કરતા મળતી સંખ્યા એ અંકોની અદલાબદલી કરતા મળતી સંખ્યા કરતા બે ગણી છે. તો તે સંખ્યા શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f43f5e; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે દશકનો અંક = <b>x</b> અને એકમનો અંક = <b>y</b> છે.<br>
                        મૂળ સંખ્યા = <b>10x + y</b> (અને અંકો બદલતા નવી સંખ્યા = 10y + x)</p>
                        
                        <p><b>સમીકરણ 1:</b> અંકોનો સરવાળો 9 છે.<br>
                        <b>x + y = 9</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>સમીકરણ 2:</b> મૂળ સંખ્યાના 9 ગણા = નવી સંખ્યાના 2 ગણા<br>
                        9(10x + y) = 2(10y + x)<br>
                        90x + 9y = 20y + 2x<br>
                        90x - 2x + 9y - 20y = 0<br>
                        88x - 11y = 0<br>
                        11 વડે ભાગતા: <b>8x - y = 0</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>લોપની રીત:</b> સમીકરણ 1 અને 2 નો સરવાળો કરતા:<br>
                        &nbsp;&nbsp; x + y = 9<br>
                        + (8x - y = 0)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; 9x = 9 &nbsp;&rarr;&nbsp; <b>x = 1</b> (દશકનો અંક)</p>
                        
                        <p>x = 1 સમીકરણ (1) માં મૂકતા:<br>
                        1 + y = 9 &nbsp;&rarr;&nbsp; <b>y = 8</b> (એકમનો અંક)</p>
                        
                        <p style="background:#ffe4e6; padding:8px; border-radius:5px; font-weight:bold; color:#be123c; border:1px dashed #f43f5e; text-align:center;">
                        જવાબ: માંગેલ સંખ્યા 18 છે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 2 (iv)",
                question: "કૂટપ્રશ્ન: મીના રૂપિયા 2000 ઉપાડવા બેંકમાં ગઈ હતી. તેણે કેશિયરને કહ્યું હતું કે મને માત્ર રૂપિયા 50 અને રૂપિયા 100 ની નોટો જ જોઈએ છે. મીનાને કુલ 25 નોટો મળી હતી. તો તેણે રૂપિયા 50 અને રૂપિયા 100 ની કેટલી નોટો મેળવી હશે?",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે 50 ની નોટની સંખ્યા = <b>x</b> અને 100 ની નોટની સંખ્યા = <b>y</b> છે.</p>
                        
                        <p><b>સમીકરણ 1:</b> કુલ નોટો 25 છે.<br>
                        <b>x + y = 25</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>સમીકરણ 2:</b> કુલ રકમ 2000 રૂપિયા છે.<br>
                        50x + 100y = 2000<br>
                        50 વડે ભાગતા: <b>x + 2y = 40</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>લોપની રીત:</b> સમીકરણ 2 માંથી સમીકરણ 1 બાદ કરતા:<br>
                        &nbsp;&nbsp; x + 2y = 40<br>
                        - (x + y = 25)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; <b>y = 15</b> (100 ની નોટ)</p>
                        
                        <p>y = 15 સમીકરણ (1) માં મૂકતા:<br>
                        x + 15 = 25 &nbsp;&rarr;&nbsp; <b>x = 10</b> (50 ની નોટ)</p>
                        
                        <p style="background:#eff6ff; padding:8px; border-radius:5px; font-weight:bold; color:#1e40af; border:1px dashed #3b82f6; text-align:center;">
                        જવાબ: મીનાને 50 ની 10 નોટો અને 100 ની 15 નોટો મળી હશે.
                        </p>
                    </div>`
            },
            {
                title: "સ્વાધ્યાય 3.3 - પ્રશ્ન 2 (v)",
                question: "કૂટપ્રશ્ન: એક પ્રતિષ્ઠિત પુસ્તકાલય પ્રથમ ત્રણ દિવસનું એક પુસ્તકનું નિશ્ચિત ભાડું લે છે અને પછીના પ્રત્યેક દિવસ દીઠ અતિરિક્ત ભાડું લે છે. સરિતા 7 દિવસ પુસ્તક રાખવાના 27 રૂપિયા ચૂકવે છે, જ્યારે સૂસી 5 દિવસ પુસ્તક રાખવાના 21 રૂપિયા ચૂકવે છે. તો નિશ્ચિત ભાડું અને પ્રત્યેક વધારાના દિવસનું ભાડું શોધો.",
                answer: `
                    <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #10b981; font-size:14px; line-height:1.8; color:#334155;">
                        <p><b>ઉકેલ:</b></p>
                        <p>ધારો કે પ્રથમ 3 દિવસનું નિશ્ચિત ભાડું = <b>x</b> રૂપિયા<br>
                        અને ત્યારબાદ પ્રત્યેક દિવસનું ભાડું = <b>y</b> રૂપિયા છે.</p>
                        
                        <p><b>સમીકરણ 1:</b> સરિતા 7 દિવસ રાખે છે (એટલે 3 દિવસ નિશ્ચિત + 4 દિવસ વધારાના).<br>
                        <b>x + 4y = 27</b> &nbsp;&nbsp; --- (સમીકરણ 1)</p>
                        
                        <p><b>સમીકરણ 2:</b> સૂસી 5 દિવસ રાખે છે (એટલે 3 દિવસ નિશ્ચિત + 2 દિવસ વધારાના).<br>
                        <b>x + 2y = 21</b> &nbsp;&nbsp; --- (સમીકરણ 2)</p>
                        
                        <p><b>લોપની રીત:</b> x નો લોપ કરવા બાદબાકી કરતા:<br>
                        &nbsp;&nbsp; x + 4y = 27<br>
                        - (x + 2y = 21)<br>
                        -----------------------<br>
                        &nbsp;&nbsp; 2y = 6 &nbsp;&rarr;&nbsp; <b>y = 3</b> (પ્રતિ દિવસ ભાડું)</p>
                        
                        <p>y = 3 સમીકરણ (2) માં મૂકતા:<br>
                        x + 2(3) = 21 &nbsp;&rarr;&nbsp; x + 6 = 21 &nbsp;&rarr;&nbsp; <b>x = 15</b> (નિશ્ચિત ભાડું)</p>
                        
                        <p style="background:#ecfdf5; padding:8px; border-radius:5px; font-weight:bold; color:#047857; border:1px dashed #10b981; text-align:center;">
                        જવાબ: પ્રથમ 3 દિવસનું નિશ્ચિત ભાડું 15 રૂપિયા છે, અને પછી પ્રત્યેક દિવસનું ભાડું 3 રૂપિયા છે.
                        </p>
                    </div>`
            }
        ] // અહી પ્રકરણ 3 ના સ્વાધ્યાયનો એરે (Array) પૂરો થાય છે
    } // અહી પ્રકરણ 3 નો ડેટા પૂરો થાય છે
}; // અહી આખો njMathsSolutions નો ડેટાબેઝ પૂરો થાય છે

