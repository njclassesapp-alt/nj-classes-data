// ==========================================
// Std 10 Maths - Solutions Database (Gujarati)
// ==========================================

var njMathsSolutions = {
    
    // ------------------------------------
    // પ્રકરણ 1: વાસ્તવિક સંખ્યાઓ (ઉદાહરણ)
    // ------------------------------------
    "ch1_examples": [
        {
            id: "ch1_ex1",
            title: "ઉદાહરણ 1",
            question: "કોઈક ધન પૂર્ણાંક n માટે, 4ⁿ નો છેલ્લો અંક શૂન્ય હશે કે કેમ તે ચકાસો.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>સમજૂતી (સ્ટેપ-બાય-સ્ટેપ):</b></p>
                    <ul style="padding-left:20px;">
                        <li>જો કોઈ સંખ્યાનો છેલ્લો અંક 0 હોય, તો તે સંખ્યા 10 વડે વિભાજ્ય હોવી જોઈએ.</li>
                        <li>એટલે કે તેના અવિભાજ્ય અવયવોમાં <b>2 અને 5 બંને</b> હોવા જોઈએ. (કારણ કે 2 × 5 = 10 થાય)</li>
                        <li>હવે, આપણે 4ⁿ ના અવયવો પાડીએ:<br> 4ⁿ = (2 × 2)ⁿ = <b>2²ⁿ</b></li>
                        <li>અહી સ્પષ્ટ જોઈ શકાય છે કે 4ⁿ ના અવયવોમાં માત્ર '2' જ આવે છે, ક્યાંય '5' આવતો નથી.</li>
                    </ul>
                    <p style="color:#ef4444; font-weight:bold; margin-top:10px;">નિષ્કર્ષ:</p>
                    <p>અંકગણિતના મૂળભૂત પ્રમેય અનુસાર, આ અવયવીકરણ અનન્ય છે. તેમાં 5 નો સમાવેશ થતો નથી, તેથી કોઈપણ ધન પૂર્ણાંક n માટે 4ⁿ નો છેલ્લો અંક ક્યારેય શૂન્ય ન હોઈ શકે.</p>
                </div>
            `
        },
        {
            id: "ch1_ex2",
            title: "ઉદાહરણ 2",
            question: "6 અને 20 નો અવિભાજ્ય અવયવીકરણની રીતે ગુ.સા.અ. (HCF) અને લ.સા.અ. (LCM) શોધો.",
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
                    બંનેમાં હોય તેવો અને <i>સૌથી નાની ઘાત</i> વાળો સામાન્ય અવયવ લેવાનો.<br>
                    બંનેમાં '2' સામાન્ય છે અને નાની ઘાત 2¹ છે.<br>
                    તેથી, <span style="background:#d1fae5; padding:2px 6px; border-radius:4px; color:#047857;">ગુ.સા.અ. (6, 20) = 2</span></p>

                    <p><b>2. લ.સા.અ. શોધવા:</b><br>
                    બધા જ અવયવો લેવાના, અને તેમાં <i>સૌથી મોટી ઘાત</i> લેવાની.<br>
                    અહી અવયવો 2, 3 અને 5 છે. 2 ની મોટી ઘાત 2² છે.<br>
                    તેથી, લ.સા.અ. (6, 20) = 2² × 3 × 5 = 4 × 3 × 5 = <span style="background:#d1fae5; padding:2px 6px; border-radius:4px; color:#047857;">60</span></p>
                </div>
            `
        },
        {
            id: "ch1_ex3",
            title: "ઉદાહરણ 3",
            question: "96 અને 404 નો ગુ.સા.અ. અવિભાજ્ય અવયવીકરણની રીતે મેળવો અને તે પરથી તેમનો લ.સા.અ. શોધો.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>ઉકેલ:</b></p>
                    <p>96 અને 404 ના અવિભાજ્ય અવયવો નીચે મુજબ છે:</p>
                    <ul style="list-style-type:none; padding-left:10px; font-weight:bold;">
                        <li>👉 96 = 2 × 2 × 2 × 2 × 2 × 3 = 2⁵ × 3</li>
                        <li>👉 404 = 2 × 2 × 101 = 2² × 101</li>
                    </ul>
                    
                    <p><b>1. ગુ.સા.અ. (HCF):</b><br>
                    બંનેમાં સામાન્ય અવયવ '2' છે અને તેની નાની ઘાત 2² છે.<br>
                    તેથી, ગુ.સા.અ. (96, 404) = 2² = <span style="color:#b45309; font-weight:bold; font-size:16px;">4</span></p>

                    <hr style="border:0; border-top:1px dashed #cbd5e1; margin:10px 0;">
                    
                    <p><b>2. લ.સા.અ. (LCM):</b><br>
                    અહી આપણે સૂત્રનો ઉપયોગ કરીશું: <br>
                    <i>ગુ.સા.અ. × લ.સા.અ. = બંને સંખ્યાઓનો ગુણાકાર</i></p>
                    <p style="background:#fef3c7; padding:10px; border-radius:5px; text-align:center; font-weight:bold;">
                        4 × લ.સા.અ. = 96 × 404<br>
                        લ.સા.અ. = (96 × 404) / 4<br>
                        લ.સા.અ. = 96 × 101 = <span style="color:#b45309; font-size:18px;">9696</span>
                    </p>
                </div>
            `
        },
        {
            id: "ch1_ex4",
            title: "ઉદાહરણ 4",
            question: "6, 72 અને 120 નો અવિભાજ્ય અવયવીકરણની રીતે ગુ.સા.અ. અને લ.સા.અ. શોધો.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #8b5cf6; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>ઉકેલ:</b></p>
                    <p>ત્રણેય સંખ્યાઓના અવયવો પાડીએ:</p>
                    <ul style="list-style-type:none; padding-left:10px; font-weight:bold;">
                        <li>6 = 2 × 3</li>
                        <li>72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²</li>
                        <li>120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5</li>
                    </ul>
                    
                    <p><b>ગુ.સા.અ.:</b><br>
                    ત્રણેયમાં સામાન્ય હોય અને <i>સૌથી નાની ઘાત</i> હોય તેવા અવયવો: 2¹ અને 3¹<br>
                    તેથી, ગુ.સા.અ. = 2 × 3 = <b>6</b></p>

                    <p><b>લ.સા.અ.:</b><br>
                    બધા જ અવયવોની <i>સૌથી મોટી ઘાત</i>: 2³, 3² અને 5¹<br>
                    તેથી, લ.સા.અ. = 2³ × 3² × 5 = 8 × 9 × 5 = <b>360</b></p>
                </div>
            `
        },
        {
            id: "ch1_ex5",
            title: "ઉદાહરણ 5",
            question: "સાબિત કરો કે &radic;3 અસંમેય સંખ્યા છે.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #ec4899; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>સાબિતી (વિરોધાભાસની રીત):</b></p>
                    <ul style="padding-left:20px;">
                        <li><b>સ્ટેપ 1:</b> ધારો કે &radic;3 સંમેય સંખ્યા છે.<br>
                        જો તે સંમેય હોય, તો આપણે તેને <b>&radic;3 = a/b</b> સ્વરૂપમાં લખી શકીએ. (જ્યાં a અને b પરસ્પર અવિભાજ્ય પૂર્ણાંકો છે, એટલે કે તેમનો 1 સિવાય કોઈ સામાન્ય અવયવ નથી).</li>
                        
                        <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> બંને બાજુ વર્ગ કરતા:<br>
                        3 = a² / b²<br>
                        તેથી, <b>a² = 3b²</b> --- (સમીકરણ 1)</li>
                        
                        <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> આનો અર્થ એ કે a² એ 3 વડે વિભાજ્ય છે. પ્રમેય 1.3 મુજબ, જો a² એ 3 વડે વિભાજ્ય હોય, તો <b>'a' પણ 3 વડે વિભાજ્ય થાય!</b></li>
                        
                        <li style="margin-top:8px;"><b>સ્ટેપ 4:</b> હવે ધારો કે a = 3c (જ્યાં c કોઈ પૂર્ણાંક છે). આ કિંમત સમીકરણ 1 માં મૂકતા:<br>
                        (3c)² = 3b²<br>
                        9c² = 3b²<br>
                        તેથી, <b>b² = 3c²</b></li>
                        
                        <li style="margin-top:8px;"><b>સ્ટેપ 5:</b> આનો અર્થ એ કે b² એ 3 વડે વિભાજ્ય છે, એટલે કે <b>'b' પણ 3 વડે વિભાજ્ય થાય!</b></li>
                    </ul>
                    <p style="background:#fce7f3; padding:10px; border-radius:5px; margin-top:10px;">
                    <b>વિરોધાભાસ:</b> અહી સાબિત થયું કે a અને b બંને 3 વડે વિભાજ્ય છે. પણ આપણે શરૂઆતમાં ધાર્યું હતું કે તેમનો 1 સિવાય કોઈ સામાન્ય અવયવ નથી! આપણી ધારણા ખોટી છે.<br>
                    <b>તેથી સાબિત થાય છે કે, &radic;3 એ અસંમેય સંખ્યા છે.</b>
                    </p>
                </div>
            `
        },
        {
            id: "ch1_ex6",
            title: "ઉદાહરણ 6",
            question: "સાબિત કરો કે 5 - &radic;3 અસંમેય છે.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #14b8a6; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>સાબિતી:</b></p>
                    <ul style="padding-left:20px;">
                        <li><b>સ્ટેપ 1:</b> ધારો કે 5 - &radic;3 સંમેય છે.</li>
                        <li>તેથી, આપણે ધારી શકીએ કે <b>5 - &radic;3 = a/b</b> (જ્યાં a અને b પૂર્ણાંકો છે, b &ne; 0)</li>
                        <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> સમીકરણને ગોઠવતા (વર્ગમૂળ વાળા પદને એક બાજુ રાખો):<br>
                        5 - (a/b) = &radic;3<br>
                        તેથી, <b>&radic;3 = (5b - a) / b</b></li>
                        <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> અહી a અને b પૂર્ણાંકો હોવાથી (5b - a) / b સંમેય સંખ્યા બને.</li>
                        <li>જો જમણી બાજુ સંમેય હોય, તો ડાબી બાજુ (&radic;3) પણ સંમેય થવી જોઈએ.</li>
                    </ul>
                    <p style="background:#ccfbf1; padding:10px; border-radius:5px; margin-top:10px;">
                    <b>વિરોધાભાસ:</b> પરંતુ આપણે જાણીએ છીએ કે &radic;3 તો અસંમેય છે!<br>
                    તેથી, આપણી ધારણા ખોટી છે. <b>5 - &radic;3 એ અસંમેય સંખ્યા છે.</b>
                    </p>
                </div>
            `
        },
        {
            id: "ch1_ex7",
            title: "ઉદાહરણ 7",
            question: "દર્શાવો કે 3&radic;2 અસંમેય છે.",
            answer: `
                <div style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #f43f5e; font-size:14px; line-height:1.8; color:#334155;">
                    <p><b>સાબિતી:</b></p>
                    <ul style="padding-left:20px;">
                        <li><b>સ્ટેપ 1:</b> ધારો કે 3&radic;2 સંમેય છે.</li>
                        <li>તેથી, <b>3&radic;2 = a/b</b> (જ્યાં a અને b પૂર્ણાંકો છે, b &ne; 0)</li>
                        <li style="margin-top:8px;"><b>સ્ટેપ 2:</b> સમીકરણમાં માત્ર &radic;2 ને જ એકબાજુ (સૂત્રનો કર્તા) બનાવીએ:<br>
                        <b>&radic;2 = a / 3b</b></li>
                        <li style="margin-top:8px;"><b>સ્ટેપ 3:</b> અહી 3, a અને b પૂર્ણાંકો હોવાથી, (a / 3b) એ સંમેય સંખ્યા બને.</li>
                        <li>એટલે કે, આ સમીકરણ મુજબ ડાબી બાજુ રહેલ &radic;2 પણ સંમેય સંખ્યા થવી જોઈએ.</li>
                    </ul>
                    <p style="background:#ffe4e6; padding:10px; border-radius:5px; margin-top:10px;">
                    <b>વિરોધાભાસ:</b> પરંતુ આ હકીકતનો વિરોધાભાસ છે, કારણ કે આપણે પહેલેથી જ જાણીએ છીએ કે &radic;2 અસંમેય છે.<br>
                    તેથી, આપણી ધારણા ખોટી છે. <b>3&radic;2 એ અસંમેય સંખ્યા છે.</b>
                    </p>
                </div>
            `
        }
    ]
};
