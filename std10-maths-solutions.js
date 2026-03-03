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
                     ,
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
    } // અહી પ્રકરણ 2 નો ડેટા પૂરો થાય છે
}; // અહી આખો njMathsSolutions નો ડેટાબેઝ પૂરો થાય છે

         
        
        
     

