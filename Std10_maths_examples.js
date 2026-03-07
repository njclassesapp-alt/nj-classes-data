var njMathsExamples = {
    // ------------------------------------
    // પ્રકરણ 1: વાસ્તવિક સંખ્યાઓ (ઉદાહરણના દાખલા)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "વાસ્તવિક સંખ્યાઓ (ઉદાહરણના દાખલા)",
        "qa_list": [
            { 
                question: "ઉદાહરણ 1: 4ⁿ નો છેલ્લો અંક 0 હશે કે નહીં તે ચકાસો", 
                answer: "<b>પ્રશ્ન:</b> કોઈ પ્રાકૃતિક સંખ્યા n માટે 4ⁿ નો છેલ્લો અંક શૂન્ય (0) હશે કે નહીં તે ચકાસો.<br><br><b>સમજૂતી:</b> જો કોઈ પણ સંખ્યાનો છેલ્લો અંક 0 હોય, તો તે 10 વડે (એટલે કે 2 અને 5 બંને વડે) વિભાજ્ય હોવી જ જોઈએ.<br><br><b>ગણતરી:</b><br>અહીં, 4ⁿ ના અવિભાજ્ય અવયવો = (2 × 2)ⁿ = (2²)ⁿ = 2²ⁿ<br>આમ, 4ⁿ ના અવયવોમાં ફક્ત 2 જ આવે છે, ક્યાંય 5 આવતો નથી.<br><br><b>નિષ્કર્ષ:</b> 4ⁿ ના અવયવોમાં 5 ન હોવાથી, n ની કોઈપણ કિંમત માટે 4ⁿ નો છેલ્લો અંક ક્યારેય શૂન્ય (0) ન હોઈ શકે.<br><br><span style='font-size:14px; color:#1d4ed8; font-weight:bold;'>💡 શોર્ટકટ ટ્રીક (યાદ રાખવા માટે):</span><br>4 ની કોઈપણ ઘાત કરો (4¹=4, 4²=16, 4³=64, 4⁴=256...). છેલ્લો અંક હંમેશા 4 અથવા 6 જ આવે, 0 તો ક્યારેય આવે જ નહીં!" 
            },
            { 
                question: "ઉદાહરણ 2: 6 અને 20 નો ગુ.સા.અ. અને લ.સા.અ.", 
                answer: "<b>પ્રશ્ન:</b> અવિભાજ્ય અવયવીકરણની રીતે 6 અને 20 નો ગુ.સા.અ. (HCF) અને લ.સા.અ. (LCM) શોધો.<br><br><b>ગણતરી:</b><br>6 ના અવયવો = 2 × 3<br>20 ના અવયવો = 2 × 2 × 5 = 2² × 5<br><br><b>1. ગુ.સા.અ. (HCF):</b><br>બંનેમાં સામાન્ય (Common) અવયવ 2 છે, તેની સૌથી નાની ઘાત 2¹ છે.<br>ગુ.સા.અ. (6, 20) = <b>2</b><br><br><b>2. લ.સા.અ. (LCM):</b><br>આવેલા તમામ અવયવો (2, 3, 5) ની સૌથી મોટી ઘાતોનો ગુણાકાર (2², 3¹, 5¹).<br>લ.સા.અ. (6, 20) = 2² × 3 × 5 = 4 × 3 × 5 = <b>60</b><br><br><span style='font-size:14px; color:#047857; font-weight:bold;'>🔥 સ્માર્ટ ટ્રીક:</span><br><ul><li><b>ગુ.સા.અ. માટે:</b> બન્નેમાં સરખું હોય તે અને નાનું હોય તે લેવું.</li><li><b>લ.સા.અ. માટે:</b> બધું જ લેવાનું (કોઈ અંક રહી ન જવો જોઈએ) અને મોટી ઘાત લેવાની.</li></ul>" 
            },
            { 
                question: "ઉદાહરણ 3: 96 અને 404 નો ગુ.સા.અ. અને સૂત્ર પરથી લ.સા.અ.", 
                answer: "<b>પ્રશ્ન:</b> 96 અને 404 નો ગુ.સા.અ. અવિભાજ્ય અવયવીકરણની રીતે શોધો અને તે પરથી લ.સા.અ. શોધો.<br><br><b>ગણતરી:</b><br>96 = 2 × 2 × 2 × 2 × 2 × 3 = 2⁵ × 3<br>404 = 2 × 2 × 101 = 2² × 101<br><br><b>ગુ.સા.અ.:</b> બંનેમાં સામાન્ય 2 છે, નાની ઘાત 2² છે.<br>ગુ.સા.અ. = 2² = <b>4</b><br><br><b>બીજી રીત (સૂત્ર દ્વારા લ.સા.અ.):</b><br><span style='font-size:15px; background:#fef3c7; padding:2px 5px;'>સૂત્ર: ગુ.સા.અ. × લ.સા.અ. = બંને સંખ્યાઓનો ગુણાકાર</span><br>4 × લ.સા.અ. = 96 × 404<br>લ.સા.અ. = (96 × 404) / 4<br>લ.સા.અ. = 96 × 101 = <b>9696</b>" 
            },
            { 
                question: "ઉદાહરણ 4: 6, 72 અને 120 નો ગુ.સા.અ. અને લ.સા.અ.", 
                answer: "<b>પ્રશ્ન:</b> અવિભાજ્ય અવયવીકરણની રીતે 3 સંખ્યાઓ (6, 72 અને 120) નો ગુ.સા.અ. અને લ.સા.અ. શોધો.<br><br><b>ગણતરી:</b><br>6 = 2 × 3<br>72 = 8 × 9 = 2³ × 3²<br>120 = 8 × 15 = 2³ × 3 × 5<br><br><b>ગુ.સા.અ. (HCF):</b><br>ત્રણેયમાં સામાન્ય અવયવ 2 અને 3 છે. તેમની સૌથી નાની ઘાત 2¹ અને 3¹ છે.<br>ગુ.સા.અ. = 2 × 3 = <b>6</b><br><br><b>લ.સા.અ. (LCM):</b><br>બધા જ અવયવો (2, 3, 5) ની સૌથી મોટી ઘાત લઈએ (2³, 3², 5¹).<br>લ.સા.અ. = 2³ × 3² × 5 = 8 × 9 × 5 = <b>360</b><br><br><span style='font-size:14px; color:#be123c; font-weight:bold;'>⚠️ ખાસ નોંધ:</span><br>3 સંખ્યાઓ માટે <i>'ગુ.સા.અ. × લ.સા.અ. = a × b × c'</i> વાળો નિયમ સાચો પડતો નથી, તેથી ત્રણેયનો લ.સા.અ. અવયવ પાડીને જ શોધવો પડે." 
            },
            { 
                question: "ઉદાહરણ 5: સાબિત કરો કે √3 અસંમેય છે", 
                answer: "<b>વિરોધાભાસની રીત (ખૂબ જ અગત્યનો દાખલો):</b><br><br><b>સ્ટેપ 1:</b> ધારો કે √3 સંમેય છે. તેથી √3 = a/b (જ્યાં a અને b પરસ્પર અવિભાજ્ય પૂર્ણાંકો છે, એટલે કે તેમનો 1 સિવાય કોઈ સામાન્ય અવયવ નથી).<br><b>સ્ટેપ 2:</b> બંને બાજુ વર્ગ કરતા: 3 = a² / b² ➜ <b>a² = 3b²</b><br><b>સ્ટેપ 3:</b> આનો અર્થ એ કે a² એ 3 વડે વિભાજ્ય છે, તેથી પ્રમેય 1.2 મુજબ <b>'a' પણ 3 વડે વિભાજ્ય થાય</b>. ધારો કે a = 3c.<br><b>સ્ટેપ 4:</b> a ની કિંમત સમીકરણમાં મુકતા: (3c)² = 3b² ➜ 9c² = 3b² ➜ <b>b² = 3c²</b><br><b>સ્ટેપ 5:</b> આનો અર્થ એ કે b² પણ 3 વડે વિભાજ્ય છે, તેથી <b>'b' પણ 3 વડે વિભાજ્ય થાય</b>.<br><br><b>નિષ્કર્ષ:</b> a અને b બંને 3 વડે વિભાજ્ય છે (તેમનો સામાન્ય અવયવ 3 મળ્યો), જે આપણી ધારણા (બંને અવિભાજ્ય છે) નો વિરોધાભાસ છે. તેથી, આપણી ધારણા ખોટી છે અને <b>√3 અસંમેય છે</b>.<br><br><span style='font-size:14px; color:#047857; font-weight:bold;'>💡 બોર્ડ એક્ઝામ ટ્રીક:</span><br>જો પરીક્ષામાં √2, √5 કે √7 પૂછાય, તો આ જ દાખલામાં જ્યાં 3 દેખાય છે ત્યાં 2, 5 કે 7 મૂકી દેવા. બાકીના બધા જ સ્ટેપ આબેહૂબ લખી નાખવા! આ 3 માર્ક્સ પાક્કા!" 
            },
            { 
                question: "ઉદાહરણ 6: સાબિત કરો કે 5 - √3 અસંમેય છે", 
                answer: "<b>ગણતરી:</b> ધારો કે 5 - √3 સંમેય સંખ્યા છે.<br>તેથી, 5 - √3 = a/b (જ્યાં a, b પૂર્ણાંકો છે અને b ≠ 0)<br><br>હવે, અસંમેય પદ (√3) ને એકલું પાડીને સૂત્રનો કર્તા બનાવીએ:<br>5 - a/b = √3<br><b>(5b - a) / b = √3</b><br><br><b>સમજૂતી અને નિષ્કર્ષ:</b><br>અહીં a અને b પૂર્ણાંકો હોવાથી ડાબી બાજુનું પદ <i>(5b - a) / b</i> સંમેય સંખ્યા થાય. <br>આથી તેની સામેનું પદ <i>√3</i> પણ સંમેય થવું જોઈએ.<br>પરંતુ, આપણે જાણીએ છીએ કે <b>√3 અસંમેય છે</b>. સંમેય = અસંમેય ક્યારેય શક્ય નથી!<br>આ વિરોધાભાસ દર્શાવે છે કે આપણી ધારણા ખોટી છે. <br>તેથી <b>5 - √3 અસંમેય સંખ્યા છે</b>." 
            },
            { 
                question: "ઉદાહરણ 7: સાબિત કરો કે 3√2 અસંમેય છે", 
                answer: "<b>ગણતરી:</b> ધારો કે 3√2 સંમેય સંખ્યા છે.<br>તેથી, 3√2 = a/b (જ્યાં a અને b પૂર્ણાંકો છે, b ≠ 0)<br><br>ફરીથી, √2 ને એકલું પાડીએ (સૂત્રનો કર્તા બનાવીએ):<br><b>√2 = a / 3b</b><br><br><b>સમજૂતી અને નિષ્કર્ષ:</b><br>અહીં 3, a અને b પૂર્ણાંકો છે, તેથી ડાબી બાજુ <i>(a / 3b)</i> સંમેય સંખ્યા બને. <br>જેનો અર્થ એ થાય કે <i>√2</i> પણ સંમેય હોવી જોઈએ. <br>પરંતુ આ સાર્વત્રિક સત્યનો વિરોધાભાસ છે કારણ કે આપણે જાણીએ છીએ કે <b>√2 અસંમેય છે</b>. <br>તેથી આપણી ધારણા ખોટી છે, અને <b>3√2 અસંમેય સંખ્યા છે</b>." 
            }
        ]
    },
        // ------------------------------------
    // પ્રકરણ 2: બહુપદીઓ (ઉદાહરણના દાખલા)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2 (ઉદાહરણ)",
        "chapterTitle": "બહુપદીઓ - ઉદાહરણના દાખલા",
        "qa_list": [
            { 
                question: "ઉદાહરણ 1: આલેખ પરથી શૂન્યોની સંખ્યા શોધવી", 
                answer: `
                <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border-left:5px solid #3b82f6;'>
                    <p style='margin-top:0;'><b>પ્રશ્ન:</b> નીચે આપેલ આલેખ જુઓ. પ્રત્યેક આલેખ બહુપદી p(x) માટે y = p(x) ના આલેખ છે. પ્રત્યેક આલેખ માટે <b>p(x) ના શૂન્યોની સંખ્યા</b> શોધો.</p>

                    <div style='display:flex; justify-content:space-around; flex-wrap:wrap; margin:20px 0;'>
                        <div style='text-align:center;'>
                            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="60" x2="110" y2="60" stroke="#94a3b8" stroke-width="2"/> <line x1="60" y1="10" x2="60" y2="110" stroke="#94a3b8" stroke-width="2"/> <text x="100" y="75" font-size="10">X</text>
                                <text x="65" y="20" font-size="10">Y</text>
                                <path d="M 30 20 Q 80 100 110 20" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <circle cx="88" cy="60" r="4" fill="#1d4ed8"/>
                            </svg>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#1e293b;'><b>1 છેદબિંદુ = 1 શૂન્ય</b></p>
                        </div>

                        <div style='text-align:center;'>
                            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="60" x2="110" y2="60" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="60" y1="10" x2="60" y2="110" stroke="#94a3b8" stroke-width="2"/>
                                <path d="M 20 100 Q 60 -20 100 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <circle cx="35" cy="60" r="4" fill="#1d4ed8"/>
                                <circle cx="85" cy="60" r="4" fill="#1d4ed8"/>
                            </svg>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#1e293b;'><b>2 છેદબિંદુ = 2 શૂન્યો</b></p>
                        </div>

                        <div style='text-align:center;'>
                            <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="60" x2="110" y2="60" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="60" y1="10" x2="60" y2="110" stroke="#94a3b8" stroke-width="2"/>
                                <path d="M 10 100 C 40 20, 80 120, 110 20" fill="none" stroke="#ca8a04" stroke-width="2"/>
                                <circle cx="28" cy="60" r="4" fill="#1d4ed8"/>
                                <circle cx="60" cy="60" r="4" fill="#1d4ed8"/>
                                <circle cx="93" cy="60" r="4" fill="#1d4ed8"/>
                            </svg>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#1e293b;'><b>3 છેદબિંદુ = 3 શૂન્યો</b></p>
                        </div>
                    </div>

                    <div style='background-color:#eff6ff; border:2px dashed #2563eb; padding:10px; border-radius:8px; text-align:center;'>
                        <b style='color:#1d4ed8;'>💡 યાદ રાખવાની ગોલ્ડન ટ્રીક (માસ્ટર ચાવી):</b><br>
                        આલેખ (રેખા કે વળાંક) <b>X-અક્ષ (આડી ધરી) ને જેટલી વાર અડે કે કાપે</b>, તેટલા જ તેના શૂન્યો હોય! Y-અક્ષ પર કાપે તેને ગણતરીમાં લેવા નહીં.
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 2: દ્વિઘાત બહુપદી x² + 7x + 10 ના શૂન્યો શોધો અને સંબંધ ચકાસો.", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='font-size:16px; color:#0f172a;'><b>સ્ટેપ 1: બહુપદીના અવયવ પાડીને શૂન્યો શોધવા</b></p>
                    <p>આપેલ બહુપદી: p(x) = x&sup2; + 7x + 10 = 0</p>
                    
                    <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin:10px 0;'>
                        <b style='color:#b91c1c;'>મધ્યમ પદના ભાગ પાડવાની રીત:</b><br>
                        છેલ્લું પદ (10) અને પ્રથમ પદના સહગુણક (1) નો ગુણાકાર = 10.<br>
                        હવે, 10 ના એવા બે ભાગ પાડો કે જેનો <b>સરવાળો 7 (વચ્ચેનું પદ)</b> થાય.<br>
                        <i style='color:#0f172a;'>વિચારો... 5 &times; 2 = 10 અને 5 + 2 = 7. બરાબર!</i>
                    </div>

                    <div style='font-family:monospace; font-size:16px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                        &rArr; x&sup2; + 5x + 2x + 10 = 0 <br>
                        &rArr; x(x + 5) + 2(x + 5) = 0 &nbsp;&nbsp; <i style='color:#64748b;'>(સામાન્ય કાઢ્યા)</i><br>
                        &rArr; (x + 5)(x + 2) = 0 <br><br>
                        તેથી, x + 5 = 0 &nbsp; અથવા &nbsp; x + 2 = 0 <br>
                        <b>x = -5</b> &nbsp;&nbsp;&nbsp; અથવા &nbsp;&nbsp;&nbsp; <b>x = -2</b>
                    </div>
                    <p style='color:#047857; font-weight:bold;'>આમ, બહુપદીના બે શૂન્યો &alpha; = -5 અને &beta; = -2 મળ્યા.</p>

                    <hr style='border:1px solid #e2e8f0; margin:15px 0;'>

                    <p style='font-size:16px; color:#0f172a;'><b>સ્ટેપ 2: શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસવો</b></p>
                    <p>સમીકરણને ax&sup2; + bx + c સાથે સરખાવતા: a=1, b=7, c=10</p>
                    
                    <ul style='line-height:2;'>
                        <li><b>શૂન્યોનો સરવાળો (&alpha; + &beta;):</b><br>
                            સૂત્ર વગર: (-5) + (-2) = <b>-7</b><br>
                            સૂત્ર મુજબ: -b / a = -7 / 1 = <b>-7</b> &nbsp; <span style='color:#16a34a;'>&check; (બંને સમાન છે)</span>
                        </li>
                        <li style='margin-top:10px;'><b>શૂન્યોનો ગુણાકાર (&alpha; &times; &beta;):</b><br>
                            સૂત્ર વગર: (-5) &times; (-2) = <b>10</b> (ઓછે ઓછે વત્તા)<br>
                            સૂત્ર મુજબ: c / a = 10 / 1 = <b>10</b> &nbsp; <span style='color:#16a34a;'>&check; (બંને સમાન છે)</span>
                        </li>
                    </ul>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 3: બહુપદી x² - 3 ના શૂન્યો શોધો અને સંબંધ ચકાસો.", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='font-size:16px; color:#0f172a;'><b>સ્ટેપ 1: અવયવ પાડીને શૂન્યો શોધવા</b></p>
                    <p>આપેલ બહુપદી: p(x) = x&sup2; - 3 = 0</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:10px; margin-bottom:15px;'>
                        <div style='flex:1; background-color:#f0fdf4; border:1px solid #86efac; padding:10px; border-radius:8px;'>
                            <b style='color:#16a34a;'>રીત 1 (પ્રમાણિત રીત): પૂર્ણવર્ગ તફાવત</b><br>
                            સૂત્ર: <b>a&sup2; - b&sup2; = (a - b)(a + b)</b><br>
                            અહીં 3 એ કોઈનો સીધો વર્ગ નથી, એટલે તેને (&radic;3)&sup2; લખી શકાય.<br>
                            &rArr; (x)&sup2; - (&radic;3)&sup2; = 0<br>
                            &rArr; (x - &radic;3)(x + &radic;3) = 0<br>
                            <b>તેથી, x = &radic;3 અથવા x = -&radic;3</b>
                        </div>
                        
                        <div style='flex:1; background-color:#fffbeb; border:1px solid #fcd34d; padding:10px; border-radius:8px;'>
                            <b style='color:#d97706;'>રીત 2 (શોર્ટકટ ટ્રીક): સીધી ગણતરી</b><br>
                            x&sup2; - 3 = 0<br>
                            x&sup2; = 3 &nbsp; <i style='color:#64748b;'>(3 ને જમણી બાજુ લઈ જતા)</i><br>
                            હવે બંને બાજુ વર્ગમૂળ લેતા,<br>
                            <b>x = &plusmn;&radic;3</b> <br>
                            <i style='font-size:12px; color:#b45309;'>(નોંધ: વર્ગમૂળ કાઢીએ ત્યારે જવાબ હંમેશા + અને - બંનેમાં આવે, તેથી &alpha; = &radic;3 અને &beta; = -&radic;3). આ રીત પરીક્ષામાં 100% માન્ય છે.</i>
                        </div>
                    </div>

                    <p style='font-size:16px; color:#0f172a; margin-top:20px;'><b>સ્ટેપ 2: સંબંધ ચકાસવો</b></p>
                    <p>x&sup2; - 3 ને ax&sup2; + bx + c સાથે સરખાવતા: <br>a = 1, <b style='color:#be123c;'>b = 0</b> (કારણ કે x વાળું પદ નથી), c = -3</p>
                    
                    <ul style='line-height:2;'>
                        <li><b>શૂન્યોનો સરવાળો:</b><br>
                            (&radic;3) + (-&radic;3) = <b>0</b><br>
                            સૂત્ર: -b / a = -0 / 1 = <b>0</b> &nbsp; <span style='color:#16a34a;'>&check;</span>
                        </li>
                        <li><b>શૂન્યોનો ગુણાકાર:</b><br>
                            (&radic;3) &times; (-&radic;3) = <b>-3</b><br>
                            સૂત્ર: c / a = -3 / 1 = <b>-3</b> &nbsp; <span style='color:#16a34a;'>&check;</span>
                        </li>
                    </ul>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 4: જેના શૂન્યોનો સરવાળો અને ગુણાકાર અનુક્રમે -3 અને 2 હોય તેવી દ્વિઘાત બહુપદી મેળવો.", 
                question_desc: "મોસ્ટ IMP - 2 માર્ક્સ માટે",
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p>અહીં આપણને આપેલું છે:<br>
                    શૂન્યોનો સરવાળો (&alpha; + &beta;) = -3<br>
                    શૂન્યોનો ગુણાકાર (&alpha;&beta;) = 2</p>

                    <p>આ દાખલો ગણવા માટે બોર્ડમાં 2 રીતો માન્ય છે, પણ આપણે સીધી <b>"સૂત્ર વાળી ટ્રીક"</b> નો જ ઉપયોગ કરીશું, જે સૌથી સહેલી છે અને તેમાં ભૂલ પડવાની કોઈ શક્યતા નથી.</p>

                    <div style='background-color:#f8fafc; border:2px solid #0ea5e9; border-radius:10px; padding:15px; margin:15px 0;'>
                        <b style='color:#0284c7; font-size:16px;'>🎯 સૌથી સરળ રીત (માસ્ટર ફોર્મ્યુલા):</b><br>
                        જ્યારે સરવાળો અને ગુણાકાર આપ્યો હોય, ત્યારે નીચેના સૂત્રમાં સીધી જ કિંમત મૂકી દેવી:<br><br>
                        
                        <div style='font-size:20px; font-weight:bold; color:#be123c; text-align:center; background-color:#ffe4e6; padding:10px; border-radius:5px;'>
                            p(x) = k [ x&sup2; - (&alpha; + &beta;)x + (&alpha;&beta;) ]
                        </div>
                        
                        <div style='font-size:16px; margin-top:15px; line-height:1.8; color:#0f172a;'>
                            અહીં કિંમતો મૂકતાં,<br>
                            p(x) = k [ x&sup2; - (-3)x + (2) ] <br>
                            <b>p(x) = k [ x&sup2; + 3x + 2 ]</b> &nbsp; <i style='color:#64748b;'>(ઓછે ઓછે વત્તા થયા)</i>
                        </div>
                        <p style='margin-top:10px; color:#047857; font-weight:bold;'>આ જ આપણો ફાઇનલ જવાબ છે! (જ્યાં k એ શૂન્યેતર વાસ્તવિક સંખ્યા છે).</p>
                    </div>

                    <div style='background-color:#fff7ed; border-left:4px solid #f97316; padding:10px;'>
                        <b style='color:#c2410c;'>ચોપડીની બીજી રીત (સરખામણીની રીત) - ફક્ત સમજવા માટે:</b><br>
                        &alpha; + &beta; = -b / a = -3 / 1<br>
                        &alpha;&beta; = c / a = 2 / 1<br>
                        જો આપણે a = 1 ધારીએ, તો -b = -3 (એટલે કે b = 3) અને c = 2 મળે.<br>
                        આ કિંમતો પ્રમાણિત સ્વરૂપ ax&sup2; + bx + c માં મૂકતા: <b>1x&sup2; + 3x + 2</b> બને.
                    </div>
                </div>
                `
            }
        ]
    },
        // ------------------------------------
    // પ્રકરણ 3: દ્વિચલ સુરેખ સમીકરણયુગ્મ (ઉદાહરણના દાખલા)
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3 (ઉદાહરણ)",
        "chapterTitle": "દ્વિચલ સુરેખ સમીકરણયુગ્મ - ઉદાહરણ",
        "qa_list": [
            { 
                question: "ઉદાહરણ 1: આલેખની રીત (કોષ્ટક બનાવતા શીખવા માટે મોસ્ટ IMP)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> અખિલા મેળામાં જાય છે. ચકડોળમાં બેસવાની અને હૂપલાની રમત રમવાની શરતો માટેના સમીકરણો: <b>x - 2y = 0</b> અને <b>3x + 4y = 20</b> છે. આલેખની રીતે ઉકેલ શોધો.</p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>સ્ટેપ 1: સમીકરણ 1 માટે x અને y ની કિંમતો (કોષ્ટક) શોધવી</b><br>
                        સમીકરણ 1: <span style='white-space:nowrap; font-weight:bold;'>x - 2y = 0</span><br>
                        સૌથી સહેલું એ છે કે x ને કર્તા બનાવો: <span style='white-space:nowrap; font-weight:bold; color:#be123c;'>x = 2y</span><br><br>
                        <i>ગણતરી:</i><br>
                        - જો y = 0 લઈએ, તો x = 2(0) = 0.<br>
                        - જો y = 1 લઈએ, તો x = 2(1) = 2.<br>
                        - જો y = 2 લઈએ, તો x = 2(2) = 4.
                        
                        <table style='width:100%; text-align:center; border-collapse:collapse; margin-top:10px; background-color:#ffffff;'>
                            <tr>
                                <th style='border:1px solid #cbd5e1; padding:8px; background-color:#dcfce7;'>x</th>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>0</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>2</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>4</td>
                            </tr>
                            <tr>
                                <th style='border:1px solid #cbd5e1; padding:8px; background-color:#dcfce7;'>y</th>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>0</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>1</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>2</td>
                            </tr>
                        </table>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #2563eb; padding:10px; margin-bottom:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: સમીકરણ 2 માટે ગણતરી</b><br>
                        સમીકરણ 2: <span style='white-space:nowrap; font-weight:bold;'>3x + 4y = 20</span><br>
                        y ને કર્તા બનાવીએ: <span style='white-space:nowrap; font-weight:bold; color:#1d4ed8;'>4y = 20 - 3x</span>  &rArr;  
                        <div style='font-size:16px; font-weight:bold; color:#1d4ed8; display:inline-flex; align-items:center; margin-left:5px;'>
                            y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin-left:5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 5px;'>20 - 3x</span><span>4</span></span>
                        </div>
                        <br><br>
                        <b style='color:#b91c1c;'>💡 ટ્રીક:</b> x ની એવી કિંમત ધારો કે જેથી અંશ 4 વડે ભગાઈ શકે અને જવાબ પૂર્ણાંકમાં આવે!<br>
                        - જો x = 0 લઈએ, તો y = (20 - 0)/4 = 20/4 = <b style='color:#047857;'>5</b>.<br>
                        - જો x = 4 લઈએ, તો y = (20 - 12)/4 = 8/4 = <b style='color:#047857;'>2</b>.
                        
                        <table style='width:100%; text-align:center; border-collapse:collapse; margin-top:10px; background-color:#ffffff;'>
                            <tr>
                                <th style='border:1px solid #cbd5e1; padding:8px; background-color:#dbeafe;'>x</th>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>0</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>4</td>
                            </tr>
                            <tr>
                                <th style='border:1px solid #cbd5e1; padding:8px; background-color:#dbeafe;'>y</th>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>5</td>
                                <td style='border:1px solid #cbd5e1; padding:8px;'>2</td>
                            </tr>
                        </table>
                    </div>

                    <p style='color:#0f172a;'><b>સ્ટેપ 3: આલેખ દોરવો</b></p>
                    <div style='text-align:center; margin: 15px 0;'>
                        <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                            <rect width="250" height="250" fill="url(#grid)" />
                            
                            <line x1="30" y1="220" x2="240" y2="220" stroke="#0f172a" stroke-width="2"/>
                            <line x1="30" y1="10" x2="30" y2="220" stroke="#0f172a" stroke-width="2"/>
                            <text x="230" y="240" font-weight="bold">X</text>
                            <text x="10" y="20" font-weight="bold">Y</text>
                            <text x="15" y="235" font-size="12">0</text>

                            <line x1="30" y1="220" x2="190" y2="140" stroke="#16a34a" stroke-width="3"/>
                            
                            <line x1="30" y1="120" x2="163" y2="220" stroke="#2563eb" stroke-width="3"/>

                            <circle cx="110" cy="180" r="5" fill="#be123c"/>
                            <text x="120" y="175" font-weight="bold" fill="#be123c">(4, 2)</text>
                        </svg>
                    </div>

                    <div style='background-color:#fffbeb; border:1px solid #fcd34d; padding:10px; border-radius:8px;'>
                        <b style='color:#b45309;'>જવાબ:</b> આલેખ પરથી સ્પષ્ટ છે કે બંને રેખાઓ બિંદુ <b>(4, 2)</b> માં છેદે છે.<br>
                        તેથી આપેલ સમીકરણયુગ્મનો ઉકેલ <b style='color:#b91c1c;'>x = 4 અને y = 2</b> મળે.
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 2: આદેશની રીત (Substitution Method)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> નીચેના સમીકરણયુગ્મનો ઉકેલ આદેશની રીતે મેળવો.<br>
                    <span style='white-space:nowrap; font-weight:bold; color:#be123c;'>7x - 15y = 2 ... (સમીકરણ 1)</span><br>
                    <span style='white-space:nowrap; font-weight:bold; color:#1d4ed8;'>x + 2y = 3 ... (સમીકરણ 2)</span></p>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                        <b style='color:#0f172a;'>સ્ટેપ 1: કોઈપણ એક સમીકરણમાંથી x કે y ને કર્તા બનાવો.</b><br>
                        <b style='color:#047857;'>💡 ટ્રીક:</b> જે ચલનો સહગુણક 1 હોય (જેમ કે સમીકરણ 2 માં ખાલી x છે), તેને કર્તા બનાવવો સૌથી સહેલો પડે! અપૂર્ણાંક નહિ આવે.<br>
                        સમીકરણ (2) પરથી:<br>
                        <span style='white-space:nowrap; font-weight:bold; font-size:16px; background-color:#e2e8f0; padding:2px 5px;'>x = 3 - 2y ... (સમીકરણ 3)</span>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: આ કિંમત બીજા સમીકરણમાં મૂકવી (આદેશ લેવો)</b><br>
                        સમીકરણ (1) માં x ની જગ્યાએ (3 - 2y) મૂકતાં:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>7(3 - 2y) - 15y = 2</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>21 - 14y - 15y = 2</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>21 - 29y = 2</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>-29y = 2 - 21</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>-29y = -19</span> &nbsp;&nbsp; <i>(બંને બાજુથી માઈનસ કેન્સલ)</i><br><br>
                        <div style='font-size:18px; font-weight:bold; color:#be123c; display:inline-flex; align-items:center;'>
                            y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin-left:5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 5px;'>19</span><span>29</span></span>
                        </div>
                    </div>

                    <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                        <b style='color:#86198f;'>સ્ટેપ 3: મળેલ y ની કિંમત સમીકરણ (3) માં મૂકી x શોધવો</b><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>x = 3 - 2y</span><br>
                        
                        <div style='font-family:monospace; font-size:15px; margin-top:5px; line-height:2;'>
                            <span style='white-space:nowrap;'>x = 3 - 2(<span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>19</span><span>29</span></span>)</span><br>
                            <span style='white-space:nowrap;'>x = 3 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>38</span><span>29</span></span></span><br>
                            <span style='color:#64748b;'><i>(29 નો લ.સા.અ. લેતાં: 29 &times; 3 = 87)</i></span><br>
                            <span style='white-space:nowrap;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>87 - 38</span><span>29</span></span></span>
                        </div>
                        <br>
                        <div style='font-size:18px; font-weight:bold; color:#047857; display:inline-flex; align-items:center;'>
                            x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin-left:5px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 5px;'>49</span><span>29</span></span>
                        </div>
                    </div>
                    <p style='margin-top:10px; font-weight:bold; text-align:center;'>આમ, ઉકેલ: (x, y) = (<span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>49</span><span>29</span></span> , <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>19</span><span>29</span></span>) છે.</p>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 3: લોપની રીત (Elimination Method) - પરીક્ષા માટે શ્રેષ્ઠ", 
                question_desc: "સૌથી ઝડપી રીત",
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> બે વ્યક્તિની માસિક આવકનો ગુણોત્તર 9:7 અને ખર્ચનો ગુણોત્તર 4:3 છે. દરેક વ્યક્તિ માસિક ₹2000 બચાવે છે. તેમની માસિક આવક શોધો.</p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                        ધારો કે આવક માટે ચલ <b>x</b> અને ખર્ચ માટે <b>y</b> છે.<br>
                        બચત = આવક - ખર્ચ<br><br>
                        પ્રથમ વ્યક્તિ માટે: <span style='white-space:nowrap; font-weight:bold; color:#be123c;'>9x - 4y = 2000 ... (સમીકરણ 1)</span><br>
                        બીજી વ્યક્તિ માટે: <span style='white-space:nowrap; font-weight:bold; color:#1d4ed8;'>7x - 3y = 2000 ... (સમીકરણ 2)</span>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: સહગુણકો સમાન કરવા (લોપ કરવા માટે)</b><br>
                        <b style='color:#b91c1c;'>💡 ટ્રીક:</b> આપણે 'y' નો લોપ કરીએ કારણ કે તેના સહગુણકો (4 અને 3) નાના છે.<br>
                        સમીકરણ (1) ને <b>3</b> વડે અને સમીકરણ (2) ને <b>4</b> વડે ગુણતાં:<br><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>(9x - 4y = 2000) &times; 3 &rArr; <b style='color:#0f172a;'>27x - 12y = 6000 ... (સમીકરણ 3)</b></span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>(7x - 3y = 2000) &times; 4 &rArr; <b style='color:#0f172a;'>28x - 12y = 8000 ... (સમીકરણ 4)</b></span>
                    </div>

                    <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                        <b style='color:#86198f;'>સ્ટેપ 3: સમીકરણ 4 માંથી 3 ની બાદબાકી કરવી</b><br>
                        <i style='color:#64748b;'>(કારણ કે બંને 12y ની નિશાની સમાન છે, એટલે બાદબાકી કરવી પડે)</i><br>
                        <table style='font-family:monospace; font-size:16px; margin:10px 0;'>
                            <tr><td style='text-align:right; padding-right:10px;'>28x</td><td>- 12y</td><td>= 8000</td></tr>
                            <tr><td style='text-align:right; padding-right:10px;'>27x</td><td>- 12y</td><td>= 6000</td></tr>
                            <tr><td style='text-align:right; padding-right:10px; border-bottom:1px solid black;'>(-)</td><td style='border-bottom:1px solid black;'>(+)</td><td style='border-bottom:1px solid black;'>(-)</td></tr>
                            <tr><td style='text-align:right; padding-right:10px; font-weight:bold; color:#047857;'>1x</td><td style='font-weight:bold; color:#be123c;'>+ 0</td><td style='font-weight:bold; color:#047857;'>= 2000</td></tr>
                        </table>
                        <b style='font-size:18px; color:#16a34a;'>તેથી, x = 2000</b>
                    </div>

                    <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px;'>
                        <b style='color:#b45309;'>સ્ટેપ 4: માસિક આવક શોધવી</b><br>
                        પ્રશ્નમાં આપણને માત્ર "આવક" પૂછી છે, તેથી y શોધવામાં સમય બગાડવો નહિ!<br>
                        પ્રથમ વ્યક્તિની આવક = 9x = 9(2000) = <b style='color:#be123c;'>₹ 18,000</b><br>
                        બીજી વ્યક્તિની આવક = 7x = 7(2000) = <b style='color:#1d4ed8;'>₹ 14,000</b>
                    </div>
                </div>
                `
            }
        ]
    },
        // ------------------------------------
    // પ્રકરણ 4: દ્વિઘાત સમીકરણ (ઉદાહરણના દાખલા)
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4 (ઉદાહરણ)",
        "chapterTitle": "દ્વિઘાત સમીકરણ - ઉદાહરણના દાખલા",
        "qa_list": [
            { 
                question: "ઉદાહરણ 1: કૂટપ્રશ્ન પરથી દ્વિઘાત સમીકરણ બનાવવું", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક લંબચોરસ પ્લોટનું ક્ષેત્રફળ 528 મી&sup2; છે. પ્લોટની લંબાઈ (મીટરમાં) તેની પહોળાઈના બમણાથી એક મીટર જેટલી વધુ છે. આપણે પ્લોટની લંબાઈ અને પહોળાઈ શોધવી છે. (માત્ર સમીકરણ બનાવો).</p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>સ્ટેપ 1: કોના બરાબર x ધારવું? (સૌથી મોટો પ્રશ્ન)</b><br>
                        <b style='color:#047857;'>💡 ટ્રીક:</b> રકમમાં જેનાથી સરખામણી કરી હોય (જેના નામ પાછળ 'ના' કે 'થી' લાગેલું હોય) તેને જ હંમેશા x ધારવો. અહીં "પહોળાઈના" લખેલું છે, તેથી પહોળાઈ બરાબર x ધારીશું.<br><br>
                        ધારો કે, લંબચોરસ પ્લોટની પહોળાઈ = <span style='font-weight:bold; color:#1d4ed8;'>x મીટર</span><br>
                        રકમ મુજબ, લંબાઈ એ પહોળાઈના બમણા (2x) થી 1 વધુ (+1) છે.<br>
                        તેથી, પ્લોટની લંબાઈ = <span style='font-weight:bold; color:#be123c;'>(2x + 1) મીટર</span>
                    </div>

                    <div style='text-align:center; margin: 15px 0;'>
                        <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                            <rect x="30" y="30" width="190" height="90" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                            
                            <text x="125" y="80" font-weight="bold" fill="#0369a1" text-anchor="middle">ક્ષેત્રફળ = 528 મી²</text>
                            
                            <text x="15" y="80" font-weight="bold" fill="#1d4ed8">x</text>
                            
                            <text x="125" y="20" font-weight="bold" fill="#be123c" text-anchor="middle">2x + 1</text>
                        </svg>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્ર મૂકીને સમીકરણ બનાવવું</b><br>
                        આપણે જાણીએ છીએ કે, <span style='font-weight:bold;'>લંબચોરસનું ક્ષેત્રફળ = લંબાઈ &times; પહોળાઈ</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>528 = (2x + 1) &times; x</span><br>
                        હવે x નો કૌંસની અંદર બંને પદો સાથે ગુણાકાર કરતાં:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>528 = 2x&sup2; + x</span><br>
                        528 ને બરાબરની જમણી બાજુ લઈ જતા નિશાની બદલાશે (-528 થશે).<br><br>
                        <div style='font-size:20px; font-weight:bold; color:#b91c1c; text-align:center; background-color:#fef2f2; border:1px solid #fca5a5; padding:10px; border-radius:8px;'>
                            2x&sup2; + x - 528 = 0
                        </div>
                        <p style='margin-top:10px; color:#0f172a; text-align:center;'>આ માંગેલ દ્વિઘાત સમીકરણ છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 2: આપેલ સમીકરણ દ્વિઘાત સમીકરણ છે કે નહિ તે ચકાસવું", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> ચકાસો કે <span style='white-space:nowrap; font-weight:bold;'>(x - 2)&sup2; + 1 = 2x - 3</span> એ દ્વિઘાત સમીકરણ છે કે નહિ?</p>

                    <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                        <b style='color:#b45309;'>💡 પાયાનો નિયમ:</b> કોઈપણ સમીકરણનું સાદુરૂપ આપ્યા પછી જો તેમાં <b>ચલ (x) ની મહત્તમ ઘાત 2 જ વધે</b> (એટલે કે ax&sup2; + bx + c = 0 સ્વરૂપ બને), તો જ તે દ્વિઘાત સમીકરણ કહેવાય.
                    </div>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                        <b style='color:#0f172a;'>સ્ટેપ 1: કૌંસ છોડવો (સાદુરૂપ આપવું)</b><br>
                        ડાબી બાજુ (x - 2)&sup2; છે, જેના માટે આપણે <b style='color:#be123c;'>(a - b)&sup2; = a&sup2; - 2ab + b&sup2;</b> નું નિત્યસમ વાપરીશું.<br>
                        અહીં a=x અને b=2 છે.<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>(x&sup2; - 4x + 4) + 1 = 2x - 3</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>x&sup2; - 4x + 5 = 2x - 3</span>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-top:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ ભેગા કરવા</b><br>
                        જમણી બાજુના 2x અને -3 ને ડાબી બાજુ લાવતા તેમની નિશાનીઓ બદલાશે (-2x અને +3 થશે).<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:15px;'>x&sup2; - 4x + 5 - 2x + 3 = 0</span><br>
                        હવે સમાન ચલ વાળા પદોનો સરવાળો/બાદબાકી કરીએ (-4x અને -2x = -6x, તથા 5 અને 3 = 8):<br><br>
                        <div style='font-size:20px; font-weight:bold; color:#047857; text-align:center;'>
                            x&sup2; - 6x + 8 = 0
                        </div>
                    </div>

                    <p style='margin-top:15px; padding:10px; background-color:#fdf4ff; border-radius:5px;'><b>નિષ્કર્ષ:</b> અહીં સાદુરૂપ આપ્યા પછી સમીકરણમાં x ની મહત્તમ ઘાત 2 છે. તે <span style='white-space:nowrap;'>ax&sup2; + bx + c = 0</span> સ્વરૂપમાં છે (જ્યાં a=1, b=-6, c=8 છે). <b>તેથી આ દ્વિઘાત સમીકરણ છે.</b></p>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 3: અવયવીકરણની રીતે બીજ (ઉકેલ) શોધવા - મોસ્ટ IMP", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> અવયવીકરણની રીતે દ્વિઘાત સમીકરણ <span style='white-space:nowrap; font-weight:bold; color:#be123c;'>2x&sup2; - 5x + 3 = 0</span> ના બીજ શોધો.</p>

                    <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                        <b style='color:#b91c1c;'>સ્ટેપ 1: મધ્યમ પદ (-5x) ના ભાગ પાડવાની શોર્ટકટ ટ્રીક</b><br>
                        સૌપ્રથમ પહેલા પદના સહગુણક (2) અને છેલ્લા પદ (3) નો ગુણાકાર કરો.<br>
                        <b style='color:#0f172a;'>ગુણાકાર: 2 &times; 3 = 6</b><br>
                        હવે 6 ના એવા બે ઘડિયા (અવયવો) શોધો, જેનો <b>સરવાળો 5</b> (વચ્ચેનું પદ) થાય. (સરવાળો જ કેમ? કારણ કે છેલ્લું પદ +3 પ્લસ છે).<br>
                        વિચારો: 2 &times; 3 = 6 થાય, અને 2 + 3 = 5 પણ થાય! બરાબર.<br>
                        હવે નિશાની: વચ્ચેનું પદ માઇનસ (-5x) હોવાથી બંને ભાગને માઇનસ નિશાની આપીશું (-2x અને -3x).
                    </div>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>સ્ટેપ 2: ભાગ પાડીને સામાન્ય (Common) કાઢવા</b><br>
                        મધ્યમ પદ -5x ની જગ્યાએ -2x અને -3x લખતાં:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>2x&sup2; <b style='color:#be123c;'>- 2x - 3x</b> + 3 = 0</span><br><br>
                        પહેલા બે પદ અને છેલ્લા બે પદની જોડી બનાવો:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'><u style='text-decoration-color:#3b82f6;'>(2x&sup2; - 2x)</u> <u style='text-decoration-color:#f59e0b;'>- (3x - 3)</u> = 0</span> &nbsp; <i>(કૌંસની બહાર માઇનસ હોવાથી અંદરની નિશાની બદલાઈ ગઈ +3 નું -3 થયું)</i><br><br>
                        હવે બંનેમાંથી સામાન્ય કાઢો:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'><b style='color:#3b82f6;'>2x</b>(x - 1) <b style='color:#f59e0b;'>- 3</b>(x - 1) = 0</span><br>
                        જો બંને કૌંસ (x - 1) સરખા આવે, તો તમારી ગણતરી બિલકુલ સાચી છે!<br><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>(x - 1) (2x - 3) = 0</span>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 3: x ની કિંમત (બીજ) શોધવી</b><br>
                        બંને કૌંસને વારાફરતી 0 સાથે સરખાવો:<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>x - 1 = 0</span> &nbsp; અથવા &nbsp; <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>2x - 3 = 0</span><br>
                        <span style='white-space:nowrap; font-weight:bold; font-size:18px; color:#047857;'>x = 1</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; અથવા &nbsp; <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>2x = 3</span> &rArr; 
                        <span style='white-space:nowrap; font-weight:bold; font-size:18px; color:#047857;'>
                            x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin-left:3px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>3</span><span>2</span></span>
                        </span>
                        <p style='margin-top:10px; font-weight:bold;'>આપેલ દ્વિઘાત સમીકરણના બે બીજ 1 અને <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>3</span><span>2</span></span> છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 4: દ્વિઘાત સૂત્ર (શ્રીધર આચાર્યનું સૂત્ર) ની રીતે ઉકેલ", 
                question_desc: "જ્યારે અવયવ ન પડે ત્યારે બ્રહ્માસ્ત્ર",
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> દ્વિઘાત સૂત્રનો ઉપયોગ કરીને <span style='white-space:nowrap; font-weight:bold; color:#1d4ed8;'>3x&sup2; - 5x + 2 = 0</span> ના બીજ શોધો.</p>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                        <b style='color:#0f172a;'>સ્ટેપ 1: a, b, c ની કિંમત નક્કી કરવી અને વિવેચક (D) શોધવો.</b><br>
                        સમીકરણને <span style='white-space:nowrap;'>ax&sup2; + bx + c = 0</span> સાથે સરખાવતાં:<br>
                        <b style='color:#be123c;'>a = 3, b = -5, c = 2</b><br><br>
                        
                        હવે <b>વિવેચક (Discriminant - D)</b> શોધીએ, જેના પરથી ખબર પડશે કે દાખલો આગળ ગણવો કે નહિ.<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>D = b&sup2; - 4ac</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>D = (-5)&sup2; - 4(3)(2)</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>D = 25 - 24</span><br>
                        <b style='color:#047857; font-size:18px;'>D = 1</b><br>
                        અહીં D > 0 (ધન સંખ્યા) છે, તેથી <b>બે ભિન્ન અને વાસ્તવિક બીજ મળશે</b>. (દાખલો આગળ ગણાશે).
                    </div>

                    <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px;'>
                        <b style='color:#b45309;'>સ્ટેપ 2: દ્વિઘાત સૂત્રમાં કિંમત મૂકવી</b><br>
                        દ્વિઘાત સૂત્ર નીચે મુજબ છે:<br>
                        
                        <div style='font-size:20px; font-weight:bold; color:#1d4ed8; text-align:center; margin:15px 0;'>
                            <span style='white-space:nowrap;'>
                                x = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'>
                                    <span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 5px;'>-b &plusmn; &radic;D</span>
                                    <span>2a</span>
                                </span>
                            </span>
                        </div>

                        <div style='font-family:monospace; font-size:16px; line-height:2;'>
                            <span style='white-space:nowrap;'>
                                x = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'>
                                    <span style='border-bottom:1px solid black; display:block; padding:0 5px;'>-(-5) &plusmn; &radic;1</span>
                                    <span>2(3)</span>
                                </span>
                            </span><br>
                            <span style='white-space:nowrap;'>
                                x = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'>
                                    <span style='border-bottom:1px solid black; display:block; padding:0 5px;'>5 &plusmn; 1</span>
                                    <span>6</span>
                                </span>
                            </span>
                        </div>

                        <p style='margin-top:15px; font-weight:bold; color:#be123c;'>હવે &plusmn; ની નિશાની હોવાથી એકવાર પ્લસ (+) અને એકવાર માઇનસ (-) લેતાં:</p>

                        <div style='display:flex; justify-content:space-around; background-color:#ffffff; border:1px solid #cbd5e1; padding:10px; border-radius:5px;'>
                            <div>
                                <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 + 1</span><span>6</span></span></span><br><br>
                                <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6</span><span>6</span></span></span><br><br>
                                <b style='color:#047857; font-size:18px;'>x = 1</b>
                            </div>
                            <div style='border-left:2px solid #cbd5e1;'></div> <div>
                                <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 - 1</span><span>6</span></span></span><br><br>
                                <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>6</span></span></span><br><br>
                                <b style='color:#047857; font-size:18px;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>2</span><span>3</span></span></b>
                            </div>
                        </div>
                        <p style='margin-top:10px; font-weight:bold;'>આમ, માંગેલ બીજ 1 અને 2/3 છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 5: બીજ સમાન હોય ત્યારે 'k' ની કિંમત શોધવી (પરીક્ષાનો ફેવરિટ)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> નીચે આપેલા દ્વિઘાત સમીકરણના બીજ <b>સમાન</b> હોય, તો <b>k</b> નું મૂલ્ય શોધો.<br>
                    <span style='white-space:nowrap; font-weight:bold; color:#be123c;'>2x&sup2; + kx + 3 = 0</span></p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>સ્ટેપ 1: શરત યાદ કરો</b><br>
                        કોઈપણ દ્વિઘાત સમીકરણના બીજ સમાન ક્યારે હોય?<br>
                        જ્યારે તેનો <b>વિવેચક D શૂન્ય (0)</b> હોય!<br>
                        <b style='color:#047857;'>એટલે કે, D = b&sup2; - 4ac = 0 થવું જોઈએ.</b>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: કિંમતો મૂકીને k શોધવો</b><br>
                        સમીકરણ સરખાવતાં: a = 2, <b>b = k</b>, c = 3.<br><br>
                        હવે, b&sup2; - 4ac = 0 મૂકતાં,<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>(k)&sup2; - 4(2)(3) = 0</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>k&sup2; - 24 = 0</span><br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>k&sup2; = 24</span><br><br>
                        
                        હવે બંને બાજુ વર્ગમૂળ લેતાં (યાદ રાખો: વર્ગમૂળ લઈએ ત્યારે &plusmn; મૂકવું ફરજિયાત છે):<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>k = &plusmn;&radic;24</span><br><br>
                        
                        <b style='color:#b91c1c;'>💡 સાદુરૂપની ટ્રીક:</b> 24 નું સીધું વર્ગમૂળ નથી નીકળતું, પણ તેના એવા ભાગ પાડો જેમાંથી કોઈ એકનું વર્ગમૂળ નીકળતું હોય (જેમ કે 4 &times; 6 = 24. અહીં 4 નું વર્ગમૂળ 2 નીકળશે).<br>
                        <span style='white-space:nowrap; font-family:monospace; font-size:16px;'>k = &plusmn;&radic;(4 &times; 6)</span><br>
                        <div style='font-size:20px; font-weight:bold; color:#047857; text-align:center; padding:10px; background-color:#e2e8f0; border-radius:5px;'>
                            k = &plusmn;2&radic;6
                        </div>
                        <p style='margin-top:10px; color:#0f172a;'>એટલે કે k ની કિંમત +2&radic;6 અથવા -2&radic;6 હોઈ શકે છે. આ બે માર્ક્સનો સૌથી અગત્યનો દાખલો છે!</p>
                    </div>
                </div>
                `
            }
        ]
    },
        // ------------------------------------
    // પ્રકરણ 5: સમાંતર શ્રેણીઓ (ઉદાહરણ ભાગ 1)
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5 (ઉદાહરણ)",
        "chapterTitle": "સમાંતર શ્રેણીઓ - ઉદાહરણ (ભાગ 1)",
        "qa_list": [
            {
                question: "🎯 સમાંતર શ્રેણી સમજવા માટેની શોર્ટ-ટ્રીક (પાયો)",
                answer: `
                <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border:2px solid #cbd5e1;'>
                    <p style='margin-top:0; color:#0f172a;'>સમાંતર શ્રેણી (AP) ને <b>'દાદરના પગથિયાં'</b> જેવી સમજવી. દરેક પગથિયાં વચ્ચેની ઊંચાઈ એકસરખી જ હોવી જોઈએ, તો જ તેને સમાંતર શ્રેણી કહેવાય!</p>
                    
                    <div style='text-align:center; margin: 15px 0;'>
                        <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="20,130 60,130 60,100 110,100 110,70 160,70 160,40 210,40" fill="none" stroke="#2563eb" stroke-width="4"/>
                            
                            <text x="30" y="145" font-weight="bold" fill="#0f172a">a₁</text>
                            <text x="80" y="115" font-weight="bold" fill="#0f172a">a₂</text>
                            <text x="130" y="85" font-weight="bold" fill="#0f172a">a₃</text>
                            <text x="180" y="55" font-weight="bold" fill="#0f172a">a₄</text>
                            
                            <line x1="65" y1="130" x2="65" y2="100" stroke="#be123c" stroke-width="2" stroke-dasharray="3,3"/>
                            <text x="70" y="120" font-weight="bold" fill="#be123c">d</text>
                            
                            <line x1="115" y1="100" x2="115" y2="70" stroke="#be123c" stroke-width="2" stroke-dasharray="3,3"/>
                            <text x="120" y="90" font-weight="bold" fill="#be123c">d</text>
                        </svg>
                    </div>

                    <ul style='line-height:2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                        <li><b>a (પ્રથમ પદ):</b> જ્યાંથી શ્રેણી શરૂ થાય તે પહેલી સંખ્યા.</li>
                        <li><b>d (સામાન્ય તફાવત):</b> કોઈપણ પદમાંથી તેની આગળનું પદ બાદ કરો <b style='color:#be123c;'>(d = a₂ - a₁)</b>.</li>
                        <li><b>n (પદોની સંખ્યા):</b> શ્રેણીમાં કુલ કેટલા પદ છે તે ક્રમ (n હંમેશા પૂર્ણાંક જ હોય, ક્યારેય અપૂર્ણાંક કે ઋણ ન હોય).</li>
                        <li><b>aₙ (n-મું પદ):</b> n-મા ક્રમે આવેલી સંખ્યા અથવા શ્રેણીનું છેલ્લું પદ.</li>
                    </ul>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 1: પ્રથમ પદ (a) અને સામાન્ય તફાવત (d) શોધો", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>3</span><span>2</span></span> , <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>1</span><span>2</span></span> , <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>-1</span><span>2</span></span> , <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>-3</span><span>2</span></span> ... માટે પ્રથમ પદ <b>a</b> અને સામાન્ય તફાવત <b>d</b> લખો.</p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>ઉકેલ:</b><br>
                        શ્રેણીની શરૂઆતની સંખ્યાને પ્રથમ પદ કહેવાય.<br>
                        <div style='overflow-x:auto; white-space:nowrap; padding:5px;'>
                            <b style='font-size:18px; color:#15803d;'>પ્રથમ પદ (a) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>3</span><span>2</span></span></b>
                        </div>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                        <b style='color:#1e3a8a;'>સામાન્ય તફાવત (d) શોધવા:</b><br>
                        સૂત્ર: <b>d = બીજું પદ - પ્રથમ પદ (a₂ - a₁)</b><br>
                        <div style='overflow-x:auto; white-space:nowrap; padding:5px; margin-top:5px; line-height:2.5;'>
                            d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span><br>
                            <i>(છેદ સમાન હોવાથી અંશની સીધી બાદબાકી થશે)</i><br>
                            d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1 - 3</span><span>2</span></span><br>
                            d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2</span><span>2</span></span><br>
                            <b style='font-size:18px; color:#1d4ed8;'>d = -1</b>
                        </div>
                        <p style='margin-top:10px; color:#047857; font-weight:bold;'>જવાબ: a = 3/2 અને d = -1.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 3: સમાંતર શ્રેણીનું 10-મું પદ શોધો (સૂત્રનો ઉપયોગ)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી 2, 7, 12, ... નું <b>10-મું પદ</b> શોધો.</p>

                    <div style='background-color:#fffbeb; border:1px dashed #f59e0b; padding:10px; border-radius:5px; margin-bottom:15px;'>
                        <b style='color:#b45309;'>💡 સ્ટેપ 1: રકમમાંથી ડેટા કાઢવો</b><br>
                        અહીં શ્રેણી પરથી:<br>
                        પ્રથમ પદ <b style='color:#be123c;'>(a) = 2</b><br>
                        સામાન્ય તફાવત <b style='color:#1d4ed8;'>(d) = 7 - 2 = 5</b><br>
                        પદનો ક્રમ <b style='color:#047857;'>(n) = 10</b> (કારણ કે 10-મું પદ શોધવું છે)<br>
                        શોધવાનું છે: <b style='color:#0f172a;'>a₁₀ = ?</b>
                    </div>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                        <b style='color:#0f172a;'>સ્ટેપ 2: n-માં પદનું સૂત્ર વાપરવું</b><br>
                        <div style='overflow-x:auto; white-space:nowrap; padding:10px; background-color:#e2e8f0; border-radius:5px; margin-bottom:10px; text-align:center;'>
                            <b style='font-size:20px; color:#be123c;'>aₙ = a + (n - 1)d</b>
                        </div>
                        
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2;'>
                            કિંમતો મૂકતાં:<br>
                            a₁₀ = 2 + (10 - 1)5<br>
                            a₁₀ = 2 + (9)5<br>
                            a₁₀ = 2 + 45<br>
                            <b style='font-size:20px; color:#16a34a;'>a₁₀ = 47</b>
                        </div>
                        <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>આમ, આપેલ સમાંતર શ્રેણીનું 10-મું પદ 47 છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 4: શ્રેણીનું કયું પદ -81 હશે? (n શોધવાનો દાખલો)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી 21, 18, 15, ... નું કયું પદ <b>-81</b> હશે? વળી કોઈ પદ <b>0</b> હશે? સકારણ જવાબ આપો.</p>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                        <b style='color:#14532d;'>ભાગ 1: કયું પદ -81 હશે?</b><br>
                        ડેટા: a = 21, d = 18 - 21 = <b>-3</b>.<br>
                        ધારો કે <b>n-મું પદ -81 છે</b>. એટલે કે, <b>aₙ = -81</b> (અહીં આપણે n શોધવાનો છે).<br>
                        
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                            aₙ = a + (n - 1)d<br>
                            -81 = 21 + (n - 1)(-3)<br>
                            <i style='color:#64748b;'>(21 ને ડાબી બાજુ લાવતાં)</i><br>
                            -81 - 21 = (n - 1)(-3)<br>
                            -102 = -3(n - 1)<br>
                            <i style='color:#64748b;'>(હવે -3 ગુણાકારમાંથી ભાગાકારમાં જશે)</i><br>
                            <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-102</span><span>-3</span></span> = n - 1<br>
                            34 = n - 1<br>
                            34 + 1 = n<br>
                            <b style='font-size:18px; color:#15803d;'>n = 35</b>
                        </div>
                        <p style='margin-top:5px; color:#14532d;'>તેથી, આ શ્રેણીનું <b>35-મું પદ -81</b> છે.</p>
                    </div>

                    <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                        <b style='color:#1e3a8a;'>ભાગ 2: શું કોઈ પદ 0 હશે?</b><br>
                        હવે ધારો કે કોઈ પદ 0 છે. <b>aₙ = 0</b> લેતાં:<br>
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2;'>
                            0 = 21 + (n - 1)(-3)<br>
                            -21 = -3(n - 1)<br>
                            <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-21</span><span>-3</span></span> = n - 1<br>
                            7 = n - 1<br>
                            7 + 1 = n<br>
                            <b style='font-size:18px; color:#1d4ed8;'>n = 8</b>
                        </div>
                        <p style='margin-top:5px; color:#1e3a8a;'>અહીં n = 8 (પૂર્ણાંક સંખ્યા) મળે છે. તેથી હા, આ શ્રેણીનું <b>8-મું પદ 0 હશે</b>.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 5: સમીકરણ બનાવીને સમાંતર શ્રેણી શોધવી", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> જેનું <b>3-જું પદ 5</b> અને <b>7-મું પદ 9</b> હોય તેવી સમાંતર શ્રેણી શોધો.</p>

                    <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                        <b style='color:#b91c1c;'>સ્ટેપ 1: માહિતી પરથી સમીકરણ બનાવવા</b><br>
                        સૂત્ર: aₙ = a + (n - 1)d મુજબ,<br>
                        3-જું પદ (a₃) = a + 2d = 5 &nbsp;&nbsp;&nbsp; <b>... (સમીકરણ 1)</b><br>
                        7-મું પદ (a₇) = a + 6d = 9 &nbsp;&nbsp;&nbsp; <b>... (સમીકરણ 2)</b>
                    </div>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                        <b style='color:#0f172a;'>સ્ટેપ 2: લોપની રીત (ચેપ્ટર 3 નો ઉપયોગ!)</b><br>
                        સમીકરણ (2) માંથી સમીકરણ (1) બાદ કરતાં:<br>
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:1.8;'>
                            &nbsp;&nbsp;a + 6d = 9<br>
                            (-)a + 2d = 5<br>
                            <hr style='border:1px solid #cbd5e1; width:150px; margin:0;'>
                            &nbsp;&nbsp;0 + 4d = 4<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d = 4/4<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='color:#047857;'>d = 1</b>
                        </div>
                    </div>

                    <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px;'>
                        <b style='color:#b45309;'>સ્ટેપ 3: 'a' શોધીને શ્રેણી બનાવવી</b><br>
                        d = 1 ની કિંમત સમીકરણ (1) માં મૂકતાં:<br>
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px;'>
                            a + 2(1) = 5<br>
                            a + 2 = 5<br>
                            a = 5 - 2<br>
                            <b style='color:#b45309;'>a = 3</b>
                        </div>
                        <p style='margin-top:10px;'>આપણને પ્રથમ પદ a = 3 મળ્યું અને d = 1 છે (એટલે 1-1 ઉમેરતા જવાનું).<br>
                        તેથી માંગેલ સમાંતર શ્રેણી: <b style='color:#1d4ed8; font-size:18px;'>3, 4, 5, 6, 7, ...</b> છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 7: 3 વડે વિભાજ્ય બે અંકોની સંખ્યાઓ કેટલી? (મોસ્ટ IMP)", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> બે અંકની કેટલી સંખ્યાઓ 3 વડે વિભાજ્ય હશે?</p>

                    <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                        <b style='color:#86198f;'>સ્ટેપ 1: જાતે સમાંતર શ્રેણી બનાવવી</b><br>
                        બે અંકની સંખ્યાઓ 10 થી ચાલુ થઈને 99 સુધી હોય છે.<br>
                        આમાંથી 3 ના ઘડિયામાં આવતી (3 વડે ભગાતી) પહેલી સંખ્યા: <b>12</b> (3&times;4=12).<br>
                        બીજી સંખ્યા: <b>15</b>, ત્રીજી: <b>18</b>.<br>
                        છેલ્લી 2 અંકની સંખ્યા 99 છે, જે 3 વડે ભગાય છે (33&times;3=99).<br><br>
                        આમ આપણી સમાંતર શ્રેણી બની: <b style='color:#c026d3;'>12, 15, 18, ..., 99</b>
                    </div>

                    <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                        <b style='color:#14532d;'>સ્ટેપ 2: n શોધવો (કુલ કેટલી સંખ્યાઓ છે?)</b><br>
                        અહીં: <b>a = 12</b>, <b>d = 3</b> (કારણ કે 3 નો ઘડિયો છે), અને છેલ્લું પદ <b>aₙ = 99</b>.<br>
                        
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                            aₙ = a + (n - 1)d<br>
                            99 = 12 + (n - 1)(3)<br>
                            99 - 12 = 3(n - 1)<br>
                            87 = 3(n - 1)<br>
                            <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>87</span><span>3</span></span> = n - 1<br>
                            29 = n - 1<br>
                            29 + 1 = n<br>
                            <b style='font-size:18px; color:#15803d;'>n = 30</b>
                        </div>
                        <p style='margin-top:10px; color:#064e3b; font-weight:bold;'>જવાબ: 3 વડે વિભાજ્ય હોય તેવી બે અંકની કુલ 30 સંખ્યાઓ છે.</p>
                    </div>
                </div>
                `
            },
            { 
                question: "ઉદાહરણ 8: શ્રેણીનું છેલ્લેથી પદ શોધવાની જાદુઈ ટ્રીક", 
                answer: `
                <div style='background-color:#ffffff; padding:10px;'>
                    <p style='color:#0f172a;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી 10, 7, 4, ..., -62 નું <b>છેલ્લેથી 11-મું પદ</b> શોધો.</p>

                    <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:15px; border-radius:8px;'>
                        <b style='color:#b45309; font-size:16px;'>🎯 સૌથી સરળ શોર્ટકટ ટ્રીક (માસ્ટર કી):</b><br>
                        ચોપડીની લાંબી રીત કરવા કરતા, <b>આખી સમાંતર શ્રેણીને ઊંધી (Reverse) કરી નાખો!</b><br>
                        મૂળ શ્રેણીમાં d = 7 - 10 = <b>-3</b> છે.<br>
                        જ્યારે શ્રેણીને ઊંધી કરીએ, ત્યારે છેલ્લું પદ (-62) એ પ્રથમ પદ બની જાય, અને d ની નિશાની બદલાઈ જાય (એટલે d = <b>+3</b> થઈ જાય).<br><br>
                        
                        <b>નવી શ્રેણી:</b> <span style='font-weight:bold; color:#be123c;'>-62, -59, -56, ...</span><br>
                        અહીં <b>a = -62</b> અને <b>d = 3</b> છે.<br>
                        હવે આપણે ખાલી આગળથી 11-મું પદ જ શોધવાનું છે!
                    </div>

                    <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-top:15px;'>
                        <b style='color:#0f172a;'>ગણતરી:</b><br>
                        <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2;'>
                            n = 11 માટે,<br>
                            a₁₁ = a + (11 - 1)d<br>
                            a₁₁ = a + 10d<br>
                            a₁₁ = -62 + 10(3)<br>
                            a₁₁ = -62 + 30<br>
                            <b style='font-size:20px; color:#1d4ed8;'>a₁₁ = -32</b>
                        </div>
                        <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: આપેલ શ્રેણીનું છેલ્લેથી 11-મું પદ -32 છે. (આ રીત બોર્ડમાં 100% માન્ય છે અને ક્યારેય ભૂલ નહિ પડે!).</p>
                    </div>
                </div>
                `
            },
                {
                    question: "🎯 n પદોના સરવાળા (Sₙ) ના સૂત્રો અને સમજૂતી",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold;'>જ્યારે શ્રેણીના બધા પદોનો સરવાળો (Total) કરવાનો હોય, ત્યારે Sₙ ના સૂત્રો વપરાય છે.</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fde047; margin-bottom:10px;'>
                            <b style='color:#b45309;'>૧. મુખ્ય સૂત્ર (મોટાભાગે વપરાતું):</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:20px; font-weight:bold; color:#be123c; padding:10px 0; text-align:center;'>
                                Sₙ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>n</span><span>2</span></span> [2a + (n - 1)d]
                            </div>
                        </div>

                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fde047;'>
                            <b style='color:#b45309;'>૨. ટૂંકું સૂત્ર (જ્યારે છેલ્લું પદ આપેલું હોય):</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:20px; font-weight:bold; color:#047857; padding:10px 0; text-align:center;'>
                                Sₙ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>n</span><span>2</span></span> [a + l]
                            </div>
                            <p style='margin:0; font-size:14px; color:#064e3b; text-align:center;'><i>(અહીં l એટલે કે aₙ છેલ્લું પદ છે)</i></p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 9: સમાંતર શ્રેણીના પ્રથમ 22 પદોનો સરવાળો શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી 8, 3, -2, ... ના પ્રથમ <b>22 પદોનો સરવાળો</b> શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: રકમમાંથી ડેટા અલગ કરવો</b><br>
                            અહીં, <b style='color:#be123c;'>a = 8</b><br>
                            <b style='color:#1d4ed8;'>d = 3 - 8 = -5</b><br>
                            અને 22 પદો કીધા છે એટલે <b style='color:#047857;'>n = 22</b>.<br>
                            શોધવાનું છે: <b>S₂₂ = ?</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી (મોટું સૂત્ર)</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                Sₙ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [2a + (n - 1)d]<br>
                                
                                S₂₂ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>2</span></span> [2(8) + (22 - 1)(-5)]<br>
                                
                                S₂₂ = 11 [16 + (21)(-5)]<br>
                                
                                <i style='color:#be123c;'>(ખાસ ધ્યાન: પ્લસ ગુણ્યા માઇનસ બરાબર માઇનસ થાય, એટલે 21 &times; -5 = -105)</i><br>
                                
                                S₂₂ = 11 [16 - 105]<br>
                                
                                S₂₂ = 11 [-89]<br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'>S₂₂ = -979</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: આ શ્રેણીના પ્રથમ 22 પદોનો સરવાળો -979 થશે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 10: સરવાળો આપેલો હોય અને પદ શોધવાનું હોય (મોસ્ટ IMP)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો સમાંતર શ્રેણીના પ્રથમ <b>14 પદોનો સરવાળો 1050</b> હોય અને તેનું પ્રથમ પદ <b>10</b> હોય, તો તે શ્રેણીનું <b>20-મું પદ (a₂₀)</b> શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: d (સામાન્ય તફાવત) શોધવો</b><br>
                            અહીં, <b>S₁₄ = 1050</b>, <b>n = 14</b>, અને <b>a = 10</b> આપેલ છે. આપણી પાસે d નથી.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2;'>
                                Sₙ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [2a + (n - 1)d]<br>
                                
                                1050 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>2</span></span> [2(10) + (14 - 1)d]<br>
                                
                                1050 = 7 [20 + 13d]<br>
                                
                                <i style='color:#64748b;'>(7 ને ગુણાકારમાંથી ભાગાકારમાં ડાબી બાજુ લાવતાં)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1050</span><span>7</span></span> = 20 + 13d<br>
                                
                                150 = 20 + 13d<br>
                                150 - 20 = 13d<br>
                                130 = 13d<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>130</span><span>13</span></span> = d<br>
                                <b style='font-size:20px; color:#be123c;'>d = 10</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 2: 20-મું પદ (a₂₀) શોધવું</b><br>
                            હવે આપણી પાસે <b>a = 10</b> અને <b>d = 10</b> બંને છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2;'>
                                a₂₀ = a + 19d<br>
                                a₂₀ = 10 + 19(10)<br>
                                a₂₀ = 10 + 190<br>
                                <b style='font-size:20px; color:#16a34a;'>a₂₀ = 200</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: આ શ્રેણીનું 20-મું પદ 200 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 11: કેટલા પદોનો સરવાળો 78 થાય? (n ના 2 જવાબો કેમ?)", 
                    question_desc: "બોર્ડમાં પૂછાતો સૌથી અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સમાંતર શ્રેણી 24, 21, 18, ... ના <b>કેટલા પદોનો સરવાળો 78</b> થાય?</p>

                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>સ્ટેપ 1: સમીકરણ બનાવવું (n શોધવો છે)</b><br>
                            અહીં, <b>a = 24</b>, <b>d = 21 - 24 = -3</b>, અને <b>Sₙ = 78</b> આપેલ છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2;'>
                                78 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [2(24) + (n - 1)(-3)]<br>
                                
                                <i style='color:#64748b;'>(છેદમાં રહેલા 2 ને સામે 78 સાથે ગુણાકારમાં લઈ જઈએ)</i><br>
                                156 = n [48 - 3n + 3]<br>
                                156 = n [51 - 3n]<br>
                                156 = 51n - 3n&sup2;<br>
                                
                                <i style='color:#64748b;'>(બધા પદોને ડાબી બાજુ લાવતા સમીકરણ દ્વિઘાત બનશે)</i><br>
                                <b style='color:#be123c;'>3n&sup2; - 51n + 156 = 0</b><br>
                                <i style='color:#64748b;'>(બધામાંથી 3 સામાન્ય કાઢતાં સમીકરણ નાનું થઈ જશે)</i><br>
                                <div style='font-size:20px; font-weight:bold; color:#1d4ed8; background-color:#e0f2fe; padding:10px; border-radius:5px; text-align:center; margin:10px 0;'>
                                    n&sup2; - 17n + 52 = 0
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: અવયવ પાડીને n શોધવો</b><br>
                            52 ના એવા બે ભાગ પાડો જેનો <b>સરવાળો 17</b> થાય.<br>
                            <i style='color:#64748b;'>13 &times; 4 = 52 અને 13 + 4 = 17.</i><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2;'>
                                n&sup2; - 13n - 4n + 52 = 0<br>
                                n(n - 13) - 4(n - 13) = 0<br>
                                (n - 13)(n - 4) = 0<br>
                                <b style='font-size:20px; color:#047857;'>n = 13 &nbsp; અથવા &nbsp; n = 4</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border:2px dashed #c026d3; padding:10px; border-radius:8px;'>
                            <b style='color:#86198f; font-size:16px;'>🤔 માસ્ટર કી: અહી n ના બે જવાબો કેમ આવ્યા? શું બંને સાચા છે?</b><br>
                            <p style='margin:5px 0 0 0; line-height:1.6;'>હા, બંને જવાબો સાચા છે! કારણ કે <b>d = -3 (ઋણ)</b> છે. તેથી શ્રેણી ઘટતી જાય છે.<br>
                            શ્રેણીના <b>પ્રથમ 4 પદોનો સરવાળો 78</b> થાય છે. <br>
                            ત્યારપછીના 5મા થી 13મા પદ સુધીની સંખ્યાઓમાં <b>ધન અને ઋણ સંખ્યાઓ એકબીજાને કાપી નાખે છે (સરવાળો 0 થઈ જાય છે)</b>, તેથી પ્રથમ 13 પદોનો સરવાળો પણ 78 જ રહે છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 12: 6 વડે વિભાજ્ય પ્રથમ 40 ધન પૂર્ણાંકોનો સરવાળો શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a;'><b>પ્રશ્ન:</b> 6 વડે વિભાજ્ય (6 ના ઘડિયામાં આવતા) પ્રથમ 40 ધન પૂર્ણાંકોનો સરવાળો શોધો.</p>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: શ્રેણી બનાવવી</b><br>
                            6 વડે વિભાજ્ય ધન સંખ્યાઓ: 6, 12, 18, 24, ...<br>
                            આ શ્રેણીમાં:<br>
                            <b style='color:#be123c;'>a = 6</b><br>
                            <b style='color:#1d4ed8;'>d = 6</b> (6 નો ઘડિયો છે એટલે d=6 જ હોય)<br>
                            <b style='color:#047857;'>n = 40</b> (કારણ કે 40 સંખ્યાઓ કીધી છે)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સરવાળો (S₄₀) શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                S₄₀ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>40</span><span>2</span></span> [2(6) + (40 - 1)6]<br>
                                
                                S₄₀ = 20 [12 + (39)6]<br>
                                
                                <i style='color:#64748b;'>(પહેલા ગુણાકાર 39 &times; 6 = 234)</i><br>
                                S₄₀ = 20 [12 + 234]<br>
                                
                                S₄₀ = 20 [246]<br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'>S₄₀ = 4920</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: માંગેલ સરવાળો 4920 થશે.</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
        // ------------------------------------
        // પ્રકરણ 6: ત્રિકોણ (ઉદાહરણના દાખલા)
        // ------------------------------------
        "6": {
            "chapterName": "પ્રકરણ 6 (ઉદાહરણ)",
            "chapterTitle": "ત્રિકોણ - ઉદાહરણના દાખલા",
            "qa_list": [
                { 
                    question: "ઉદાહરણ 1: થેલ્સના પ્રમેયનો ઉપયોગ (સાબિતી વાળો દાખલો)", 
                    question_desc: "પરીક્ષા માટે અગત્યનો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો કોઈ રેખા ત્રિકોણ ABC ની બાજુઓ AB અને AC ને અનુક્રમે D અને E માં છેદે તથા BC ને સમાંતર હોય, તો સાબિત કરો કે <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>AD</span><span>AB</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>AE</span><span>AC</span></span> છે.</p>

                        <div style='text-align:center; margin: 20px 0;'>
                            <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="100,20 20,160 180,160" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
                                <line x1="60" y1="90" x2="140" y2="90" stroke="#dc2626" stroke-width="2" />
                                <text x="95" y="15" font-weight="bold">A</text>
                                <text x="5" y="170" font-weight="bold">B</text>
                                <text x="185" y="170" font-weight="bold">C</text>
                                <text x="40" y="95" font-weight="bold" fill="#dc2626">D</text>
                                <text x="150" y="95" font-weight="bold" fill="#dc2626">E</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>🎯 પક્ષ:</b><br>
                            &Delta;ABC માં રેખા DE <b>||</b> BC છે. (રેખા DE એ BC ને સમાંતર છે).
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>🎯 સાધ્ય:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:18px; font-weight:bold; color:#be123c; margin:5px 0;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>AD</span><span>AB</span></span> = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>AE</span><span>AC</span></span>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>✍️ સાબિતી:</b><br>
                            પ્રમેય 6.1 (થેલ્સના પ્રમેય) મુજબ, જો DE || BC હોય, તો:<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AD</span><span>DB</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AE</span><span>EC</span></span><br>
                                
                                <i style='color:#047857;'>(સ્ટેપ 1: બંને બાજુ વ્યસ્ત કરતા એટલે કે પલટાવતા)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>DB</span><span>AD</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>EC</span><span>AE</span></span><br>
                                
                                <i style='color:#047857;'>(સ્ટેપ 2: બંને બાજુ 1 ઉમેરતાં)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>DB</span><span>AD</span></span> + 1 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>EC</span><span>AE</span></span> + 1<br>
                                
                                <i style='color:#047857;'>(લ.સા.અ. લેતાં)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>DB + AD</span><span>AD</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>EC + AE</span><span>AE</span></span><br>
                            </div>
                            
                            <p style='margin-top:10px;'>આકૃતિ પરથી સ્પષ્ટ છે કે <b>DB + AD = AB</b> અને <b>EC + AE = AC</b> થાય.</p>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB</span><span>AD</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AC</span><span>AE</span></span><br>
                                
                                <i style='color:#be123c;'>(ફરીથી બંને બાજુ વ્યસ્ત કરતા આપણો જવાબ મળી જશે!)</i><br>
                                <b style='font-size:20px; color:#1d4ed8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>AD</span><span>AB</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>AE</span><span>AC</span></span>
                                </b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#047857; text-align:right;'>... જે સાબિત થાય છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 2: સમલંબ ચતુષ્કોણમાં સમપ્રમાણતા (રચના વાળો દાખલો)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સમલંબ ચતુષ્કોણ ABCD માં AB || DC છે. સમાંતર ન હોય તેવી બાજુઓ AD અને BC પર અનુક્રમે E અને F એવાં બિંદુઓ છે કે જેથી EF એ AB ને સમાંતર હોય. સાબિત કરો કે <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>AE</span><span>ED</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>BF</span><span>FC</span></span>.</p>

                        <div style='text-align:center; margin: 20px 0;'>
                            <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="60,20 180,20 220,130 20,130" fill="#fff7ed" stroke="#ea580c" stroke-width="2" />
                                <line x1="40" y1="75" x2="200" y2="75" stroke="#2563eb" stroke-width="2" />
                                <line x1="60" y1="20" x2="220" y2="130" stroke="#047857" stroke-width="1.5" stroke-dasharray="4,4" />
                                
                                <text x="50" y="15" font-weight="bold">A</text>
                                <text x="185" y="15" font-weight="bold">B</text>
                                <text x="225" y="140" font-weight="bold">C</text>
                                <text x="10" y="140" font-weight="bold">D</text>
                                <text x="25" y="80" font-weight="bold" fill="#2563eb">E</text>
                                <text x="205" y="80" font-weight="bold" fill="#2563eb">F</text>
                                <text x="110" y="65" font-weight="bold" fill="#047857">G</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>🎯 પક્ષ અને સાધ્ય:</b><br>
                            પક્ષ: AB || DC અને EF || AB (તેથી ત્રણેય રેખાઓ એકબીજાને સમાંતર થાય: <b>AB || EF || DC</b>).<br>
                            સાધ્ય: <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>AE</span><span>ED</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>BF</span><span>FC</span></span>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>✍️ સાબિતી અને રચના:</b><br>
                            સૌપ્રથમ <b>વિકર્ણ AC દોરો</b>, જે રેખા EF ને <b>G</b> બિંદુમાં છેદે છે.<br>
                            હવે આપણને 2 ત્રિકોણ મળશે. વારાફરતી બંનેમાં થેલ્સનો પ્રમેય વાપરીશું.<br>

                            <div style='background-color:#f0fdf4; border:1px dashed #16a34a; padding:10px; border-radius:5px; margin:10px 0;'>
                                <b>ત્રિકોણ 1: &Delta;ADC માં</b><br>
                                EG || DC (કારણ કે આખી રેખા EF || DC છે)<br>
                                તેથી થેલ્સના પ્રમેય મુજબ:<br>
                                <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px;'>
                                    <b style='color:#15803d;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>AE</span><span>ED</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>AG</span><span>GC</span></span> &nbsp;&nbsp;&nbsp; ... (પરિણામ 1)</b>
                                </div>
                            </div>

                            <div style='background-color:#fffbeb; border:1px dashed #d97706; padding:10px; border-radius:5px; margin:10px 0;'>
                                <b>ત્રિકોણ 2: &Delta;CAB માં</b><br>
                                GF || AB (કારણ કે EF || AB છે)<br>
                                અહીં ત્રિકોણ ઊંધો છે, તેથી C તરફથી ગુણોત્તર લઈશું:<br>
                                <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px;'>
                                    <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>CG</span><span>AG</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>CF</span><span>BF</span></span><br>
                                    <i>(બંને બાજુ વ્યસ્ત કરતાં)</i><br>
                                    <b style='color:#b45309;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #b45309; display:block; padding:0 3px;'>AG</span><span>GC</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #b45309; display:block; padding:0 3px;'>BF</span><span>FC</span></span> &nbsp;&nbsp;&nbsp; ... (પરિણામ 2)</b>
                                </div>
                            </div>

                            <p style='margin-top:10px;'>પરિણામ (1) અને (2) ની સરખામણી કરતાં (બંનેમાં <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>AG</span><span>GC</span></span> સામાન્ય છે):</p>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-size:20px; font-weight:bold; color:#be123c; text-align:center; background-color:#ffe4e6; padding:10px; border-radius:5px;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>AE</span><span>ED</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>BF</span><span>FC</span></span>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#047857; text-align:right;'>... જે સાબિત થાય છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 3: થેલ્સના પ્રતિપ્રમેય અને સમરૂપતાનો ઉપયોગ", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> &Delta;PQR માં બિંદુઓ S અને T અનુક્રમે બાજુઓ PQ અને PR પર આવેલા છે. જો <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>PS</span><span>SQ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>PT</span><span>TR</span></span> અને <b>&angle;PST = &angle;PRQ</b> હોય, તો સાબિત કરો કે &Delta;PQR એ સમદ્વિબાજુ ત્રિકોણ છે.</p>

                        <div style='text-align:center; margin: 20px 0;'>
                            <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="100,20 30,160 170,160" fill="#f8fafc" stroke="#475569" stroke-width="2" />
                                <line x1="65" y1="90" x2="135" y2="90" stroke="#be123c" stroke-width="2" />
                                
                                <text x="95" y="15" font-weight="bold">P</text>
                                <text x="15" y="170" font-weight="bold">Q</text>
                                <text x="175" y="170" font-weight="bold">R</text>
                                <text x="45" y="95" font-weight="bold" fill="#be123c">S</text>
                                <text x="145" y="95" font-weight="bold" fill="#be123c">T</text>
                                
                                <path d="M 60 100 A 15 15 0 0 0 75 90" fill="none" stroke="#2563eb" stroke-width="2"/>
                                <path d="M 155 160 A 15 15 0 0 0 160 145" fill="none" stroke="#2563eb" stroke-width="2"/>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (વિચારો કેમ કરવું?):</b><br>
                            કોઈપણ ત્રિકોણને 'સમદ્વિબાજુ' (બે બાજુ સરખી) સાબિત કરવો હોય, તો તેના <b>બે સામસામેના ખૂણા સરખા</b> સાબિત કરી દો! એટલે કે આપણે &angle;Q = &angle;R સાબિત કરવાનું છે.
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>✍️ સાબિતી:</b><br>
                            <ul style='line-height:2; font-size:15px; margin-bottom:0;'>
                                <li>આપણને પક્ષમાં આપેલ છે કે: <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>PS</span><span>SQ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>PT</span><span>TR</span></span></li>
                                <li>તેથી, <b>પ્રમેય 6.2 (થેલ્સના પ્રતિપ્રમેય)</b> મુજબ જો ગુણોત્તર સમાન હોય, તો રેખા સમાંતર થાય.<br>
                                તેથી, <b style='color:#be123c;'>ST || QR</b>.</li>
                                <li>હવે જો બે રેખાઓ સમાંતર હોય, તો તેમના અનુરૂપ ખૂણાઓ (F આકારના ખૂણા) સમાન થાય.<br>
                                તેથી, <b style='color:#1d4ed8;'>&angle;PST = &angle;PQR &nbsp;&nbsp; ... (પરિણામ 1)</b></li>
                                <li>પરંતુ રકમમાં (પક્ષમાં) આપેલું છે કે:<br>
                                <b style='color:#047857;'>&angle;PST = &angle;PRQ &nbsp;&nbsp; ... (પરિણામ 2)</b></li>
                            </ul>

                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                પરિણામ (1) અને (2) ને ધ્યાનથી જુઓ. બંનેની ડાબી બાજુ (&angle;PST) સરખી છે. તેથી તેમની જમણી બાજુ પણ સરખી થાય!<br>
                                <div style='font-size:18px; font-weight:bold; color:#be123c; text-align:center; margin:10px 0;'>
                                    &angle;PQR = &angle;PRQ
                                </div>
                                
                                <p style='margin-bottom:0;'>ધોરણ 9 ના પ્રમેય મુજબ: "ત્રિકોણમાં સમાન ખૂણાની સામેની બાજુઓ સમાન હોય છે."<br>
                                &angle;R ની સામેની બાજુ PQ છે અને &angle;Q ની સામેની બાજુ PR છે.<br>
                                તેથી, <b style='font-size:18px; color:#16a34a;'>PQ = PR</b> થાય.</p>
                            </div>
                            
                            <p style='margin-top:10px; font-weight:bold; color:#047857; text-align:right;'>આમ, બે બાજુઓ સમાન હોવાથી &Delta;PQR એ સમદ્વિબાજુ ત્રિકોણ છે. (સાબિત થાય છે).</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
        // ------------------------------------
        // પ્રકરણ 7: યામ ભૂમિતિ (ઉદાહરણ ભાગ 1 - અંતર સૂત્ર)
        // ------------------------------------
        "7": {
            "chapterName": "પ્રકરણ 7 (ઉદાહરણ ભાગ 1)",
            "chapterTitle": "યામ ભૂમિતિ - ઉદાહરણના દાખલા",
            "qa_list": [
                {
                    question: "🎯 પાયાની સમજૂતી: અંતર સૂત્ર અને x₁, y₁ નો ઉપયોગ",
                    answer: `
                    <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border:2px solid #cbd5e1;'>
                        <p style='margin-top:0; color:#0f172a;'>અંતર સૂત્રનો ઉપયોગ બે બિંદુઓ વચ્ચેનું અંતર શોધવા માટે થાય છે. પરીક્ષામાં ભૂલ ન પડે તે માટે પહેલા <b>x<sub>1</sub>, y<sub>1</sub></b> અને <b>x<sub>2</sub>, y<sub>2</sub></b> લખી લેવા.</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #94a3b8; margin-bottom:10px;'>
                            <b style='color:#be123c;'>અંતર સૂત્ર (Distance Formula):</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:20px; font-weight:bold; color:#1d4ed8; padding:10px 0; text-align:center;'>
                                AB = &radic;[ (x<sub>2</sub> - x<sub>1</sub>)&sup2; + (y<sub>2</sub> - y<sub>1</sub>)&sup2; ]
                            </div>
                            <p style='margin:0; font-size:14px; color:#475569; text-align:center;'><i>(નોંધ: ગણતરી સહેલી કરવા આપણે વર્ગમૂળ દૂર કરીને <b>AB&sup2; = (x<sub>2</sub> - x<sub>1</sub>)&sup2; + (y<sub>2</sub> - y<sub>1</sub>)&sup2;</b> વાપરીશું).</i></p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 1: ત્રણ બિંદુઓ ત્રિકોણ બનાવે છે કે નહિ તે ચકાસવું", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a;'><b>પ્રશ્ન:</b> શું બિંદુઓ (3, 2), (-2, -3) અને (2, 3) ત્રિકોણ બનાવશે? જો હા, તો કયા પ્રકારનો ત્રિકોણ બનાવશે?</p>
                        
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: ધારો કે ત્રણ બિંદુઓ P, Q અને R છે.</b><br>
                            P(3, 2) &rArr; <b>x<sub>1</sub> = 3, y<sub>1</sub> = 2</b><br>
                            Q(-2, -3) &rArr; <b>x<sub>2</sub> = -2, y<sub>2</sub> = -3</b><br>
                            R(2, 3) &rArr; <b>x<sub>3</sub> = 2, y<sub>3</sub> = 3</b><br><br>
                            
                            <b style='color:#16a34a;'>હવે ત્રણેય બાજુઓ (PQ, QR, PR) ના અંતર શોધીએ:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                <b style='color:#15803d;'>1) PQ&sup2; શોધવા:</b><br>
                                PQ&sup2; = (x<sub>2</sub> - x<sub>1</sub>)&sup2; + (y<sub>2</sub> - y<sub>1</sub>)&sup2;<br>
                                PQ&sup2; = (-2 - 3)&sup2; + (-3 - 2)&sup2;<br>
                                PQ&sup2; = (-5)&sup2; + (-5)&sup2;<br>
                                PQ&sup2; = 25 + 25 = 50 &rArr; <b style='color:#047857;'>PQ = &radic;50 &approx; 7.07</b><br><br>
                                
                                <b style='color:#15803d;'>2) QR&sup2; શોધવા:</b><br>
                                QR&sup2; = (x<sub>3</sub> - x<sub>2</sub>)&sup2; + (y<sub>3</sub> - y<sub>2</sub>)&sup2;<br>
                                QR&sup2; = (2 - (-2))&sup2; + (3 - (-3))&sup2;<br>
                                QR&sup2; = (2 + 2)&sup2; + (3 + 3)&sup2;<br>
                                QR&sup2; = (4)&sup2; + (6)&sup2;<br>
                                QR&sup2; = 16 + 36 = 52 &rArr; <b style='color:#047857;'>QR = &radic;52 &approx; 7.21</b><br><br>

                                <b style='color:#15803d;'>3) PR&sup2; શોધવા:</b><br>
                                PR&sup2; = (x<sub>3</sub> - x<sub>1</sub>)&sup2; + (y<sub>3</sub> - y<sub>1</sub>)&sup2;<br>
                                PR&sup2; = (2 - 3)&sup2; + (3 - 2)&sup2;<br>
                                PR&sup2; = (-1)&sup2; + (1)&sup2;<br>
                                PR&sup2; = 1 + 1 = 2 &rArr; <b style='color:#047857;'>PR = &radic;2 &approx; 1.41</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: ચકાસણી કરવી</b><br>
                            અહીં, કોઈપણ બે બાજુઓનો સરવાળો ત્રીજી બાજુ કરતા મોટો છે (દા.ત. PQ + PR > QR). તેથી આ બિંદુઓ <b>ત્રિકોણ ચોક્કસ બનાવશે</b>.<br><br>
                            
                            <b style='color:#b91c1c;'>💡 ત્રિકોણનો પ્રકાર નક્કી કરવાની ટ્રીક:</b><br>
                            ઉપરની ગણતરીમાં જુઓ: PQ&sup2; = 50, PR&sup2; = 2 અને QR&sup2; = 52.<br>
                            <span style='white-space:nowrap; font-weight:bold;'>50 + 2 = 52</span> એટલે કે <b style='color:#be123c;'>PQ&sup2; + PR&sup2; = QR&sup2;</b> થાય છે.<br>
                            પાયથાગોરસના પ્રમેય મુજબ, આ <b>કાટકોણ ત્રિકોણ</b> છે! (જેમાં ખૂણો P કાટખૂણો છે).
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 2: ચોરસના શિરોબિંદુઓ સાબિત કરવા (4 માર્ક્સ માટે IMP)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સાબિત કરો કે બિંદુઓ (1, 7), (4, 2), (-1, -1) અને (-4, 4) એ <b>ચોરસના શિરોબિંદુઓ</b> છે.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (ચોરસ સાબિત કરવા શું કરવું?):</b><br>
                            કોઈપણ આકૃતિને ચોરસ સાબિત કરવા માટે <b>કુલ 6 અંતર</b> શોધવા પડે:<br>
                            1. ચારેય બાજુઓ સમાન થવી જોઈએ (AB = BC = CD = DA).<br>
                            2. બંને વિકર્ણો સમાન થવા જોઈએ (AC = BD).
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: ધારો કે 4 બિંદુઓ A, B, C, D છે.</b><br>
                            A(1, 7), B(4, 2), C(-1, -1), D(-4, 4)<br><br>
                            
                            <b style='color:#1d4ed8;'>ચારેય બાજુઓ શોધીએ (અંતર સૂત્ર: AB&sup2; = (x₂-x₁)&sup2; + (y₂-y₁)&sup2;):</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                AB&sup2; = (4 - 1)&sup2; + (2 - 7)&sup2; = (3)&sup2; + (-5)&sup2; = 9 + 25 = <b>34</b> &rArr; <b style='color:#16a34a;'>AB = &radic;34</b><br>
                                BC&sup2; = (-1 - 4)&sup2; + (-1 - 2)&sup2; = (-5)&sup2; + (-3)&sup2; = 25 + 9 = <b>34</b> &rArr; <b style='color:#16a34a;'>BC = &radic;34</b><br>
                                CD&sup2; = (-4 - (-1))&sup2; + (4 - (-1))&sup2; = (-3)&sup2; + (5)&sup2; = 9 + 25 = <b>34</b> &rArr; <b style='color:#16a34a;'>CD = &radic;34</b><br>
                                DA&sup2; = (1 - (-4))&sup2; + (7 - 4)&sup2; = (5)&sup2; + (3)&sup2; = 25 + 9 = <b>34</b> &rArr; <b style='color:#16a34a;'>DA = &radic;34</b>
                            </div>
                            <p style='margin-top:5px;'>અહીં ચારેય બાજુઓ સમાન છે: <b>AB = BC = CD = DA</b>.</p>

                            <hr style='border:1px solid #cbd5e1; margin:15px 0;'>

                            <b style='color:#be123c;'>સ્ટેપ 2: બંને વિકર્ણો (AC અને BD) શોધીએ:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                AC&sup2; = (-1 - 1)&sup2; + (-1 - 7)&sup2; = (-2)&sup2; + (-8)&sup2; = 4 + 64 = <b>68</b> &rArr; <b style='color:#b91c1c;'>AC = &radic;68</b><br>
                                BD&sup2; = (-4 - 4)&sup2; + (4 - 2)&sup2; = (-8)&sup2; + (2)&sup2; = 64 + 4 = <b>68</b> &rArr; <b style='color:#b91c1c;'>BD = &radic;68</b>
                            </div>
                            <p style='margin-top:5px;'>અહીં બંને વિકર્ણો પણ સમાન છે: <b>AC = BD</b>.</p>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#15803d;'>નિષ્કર્ષ:</b> ચારેય બાજુઓ સમાન છે અને વિકર્ણો પણ સમાન છે, તેથી ABCD <b>ચોરસ</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 3: ત્રણ બિંદુઓ સમરેખ છે કે નહિ? (એક જ રેખામાં)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> આકૃતિમાં દર્શાવ્યા મુજબ એક વર્ગખંડમાં ડેસ્ક ગોઠવેલા છે. આશિમા(A), ભારતી(B) અને કેમેલિયા(C) અનુક્રમે A(3, 1), B(6, 4) અને C(8, 6) સ્થાન પર બેઠેલા છે. શું તેઓ <b>એક જ રેખામાં (સમરેખ)</b> બેઠેલા છે?</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમરેખ સાબિત કરવાની શરત:</b><br>
                            જો બે નાના અંતરનો સરવાળો સૌથી મોટા અંતર બરાબર થાય, તો બિંદુઓ સમરેખ કહેવાય.<br>
                            એટલે કે <b style='color:#be123c;'>AB + BC = AC</b> થવું જોઈએ.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરી: ત્રણેય અંતર શોધીએ</b><br>
                            A(3, 1), B(6, 4), C(8, 6)<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2;'>
                                AB&sup2; = (6 - 3)&sup2; + (4 - 1)&sup2; = (3)&sup2; + (3)&sup2; = 9 + 9 = 18 <br>
                                <span style='color:#64748b;'><i>(18 ના ભાગ 9 &times; 2 પાડીએ, 9 નું વર્ગમૂળ 3 થાય)</i></span><br>
                                <b style='color:#15803d;'>AB = 3&radic;2</b><br><br>

                                BC&sup2; = (8 - 6)&sup2; + (6 - 4)&sup2; = (2)&sup2; + (2)&sup2; = 4 + 4 = 8 <br>
                                <span style='color:#64748b;'><i>(8 ના ભાગ 4 &times; 2 પાડીએ, 4 નું વર્ગમૂળ 2 થાય)</i></span><br>
                                <b style='color:#15803d;'>BC = 2&radic;2</b><br><br>

                                AC&sup2; = (8 - 3)&sup2; + (6 - 1)&sup2; = (5)&sup2; + (5)&sup2; = 25 + 25 = 50 <br>
                                <span style='color:#64748b;'><i>(50 ના ભાગ 25 &times; 2 પાડીએ, 25 નું વર્ગમૂળ 5 થાય)</i></span><br>
                                <b style='color:#15803d;'>AC = 5&radic;2</b>
                            </div>

                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>ચકાસણી:</b><br>
                                બે નાના અંતરનો સરવાળો: AB + BC = 3&radic;2 + 2&radic;2 = <b>5&radic;2</b><br>
                                અને મોટું અંતર AC પણ <b>5&radic;2</b> છે.<br>
                                અહીં, <b style='color:#be123c;'>AB + BC = AC</b> થાય છે. <br>
                                <b>જવાબ:</b> હા, આશિમા, ભારતી અને કેમેલિયા એક જ સીધી રેખામાં (સમરેખ) બેઠેલા છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 4: સમાન અંતરે (Equidistant) આવેલ બિંદુ માટેનો સંબંધ", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> બિંદુ P(x, y) એ બિંદુઓ A(7, 1) અને B(3, 5) થી સમાન અંતરે આવેલ છે, તો x અને y વચ્ચેનો સંબંધ દર્શાવતું સમીકરણ મેળવો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: 'સમાન અંતર' ની શરત મૂકવી</b><br>
                            રકમ મુજબ બિંદુ P નું A થી અંતર અને B થી અંતર સરખું છે.<br>
                            તેથી, <b style='font-size:18px;'>PA = PB</b><br>
                            ગણતરી સહેલી કરવા બંને બાજુ વર્ગ લઈએ:<br>
                            <b style='font-size:18px; color:#be123c;'>PA&sup2; = PB&sup2;</b>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 2: અંતર સૂત્રમાં કિંમત મૂકી સાદુરૂપ આપવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                (x - 7)&sup2; + (y - 1)&sup2; = (x - 3)&sup2; + (y - 5)&sup2;<br>
                                
                                <i style='color:#64748b;'>(હવે (a-b)² ના સૂત્રથી કૌંસ છોડીશું)</i><br>
                                (x&sup2; - 14x + 49) + (y&sup2; - 2y + 1) = (x&sup2; - 6x + 9) + (y&sup2; - 10y + 25)<br>
                                
                                <i style='color:#64748b;'>(બંને બાજુથી x² અને y² ઉડી જશે)</i><br>
                                -14x - 2y + 50 = -6x - 10y + 34<br>
                                
                                <i style='color:#64748b;'>(બધા પદો એક બાજુ ભેગા કરતાં)</i><br>
                                -14x + 6x - 2y + 10y + 50 - 34 = 0<br>
                                -8x + 8y + 16 = 0<br>
                                
                                <i style='color:#64748b;'>(બધામાંથી -8 સામાન્ય કાઢતાં)</i><br>
                                <b style='font-size:20px; color:#1d4ed8;'>x - y - 2 = 0</b> &nbsp;&nbsp; અથવા &nbsp;&nbsp; <b style='font-size:20px; color:#1d4ed8;'>x - y = 2</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#047857;'>આ x અને y વચ્ચેનો માંગેલ સંબંધ છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 5: y-અક્ષ પર આવેલું સમાન અંતરે આવેલ બિંદુ શોધો", 
                    question_desc: "2 માર્ક્સ માટે મોસ્ટ IMP",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> બિંદુઓ A(6, 5) અને B(-4, 3) થી સમાન અંતરે આવેલું <b>y-અક્ષ પરનું બિંદુ</b> શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ગોલ્ડન ટ્રીક (શરૂઆત ક્યાંથી કરવી?):</b><br>
                            જ્યારે પણ <b>"y-અક્ષ પરનું બિંદુ"</b> કહે, ત્યારે તેનો x-યામ હંમેશા <b>0</b> જ હોય! <br>
                            તેથી ધારો કે y-અક્ષ પરનું માંગેલ બિંદુ <b style='color:#be123c;'>P(0, y)</b> છે.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરી: PA&sup2; = PB&sup2; મૂકતાં</b><br>
                            P(0, y), A(6, 5), B(-4, 3)<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                PA&sup2; = PB&sup2;<br>
                                (0 - 6)&sup2; + (y - 5)&sup2; = (0 - (-4))&sup2; + (y - 3)&sup2;<br>
                                (-6)&sup2; + (y&sup2; - 10y + 25) = (4)&sup2; + (y&sup2; - 6y + 9)<br>
                                36 + y&sup2; - 10y + 25 = 16 + y&sup2; - 6y + 9<br>
                                
                                <i style='color:#64748b;'>(બંને બાજુથી y² ઉડી જશે)</i><br>
                                -10y + 61 = -6y + 25<br>
                                
                                <i style='color:#64748b;'>(y વાળા પદ એક બાજુ, સંખ્યા બીજી બાજુ)</i><br>
                                61 - 25 = -6y + 10y<br>
                                36 = 4y<br>
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>36</span><span>4</span></span><br>
                                <b style='font-size:20px; color:#15803d;'>y = 9</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: y-અક્ષ પર આવેલું માંગેલ બિંદુ P(0, y) = <b style='color:#be123c;'>(0, 9)</b> છે.</p>
                        </div>
                    </div>
                    `
                },
        
                {
                    question: "🎯 પાયાની સમજૂતી: વિભાજન સૂત્ર (Section Formula)",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold;'>જ્યારે કોઈ બિંદુ P(x, y) એ રેખાખંડ AB નું m₁ અને m₂ ના ગુણોત્તરમાં વિભાજન કરે, ત્યારે P ના યામ શોધવા નીચેનું સૂત્ર વપરાય છે:</p>
                        
                        <div style='overflow-x:auto; white-space:nowrap; background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #fde047; text-align:center;'>
                            <b style='color:#b45309; font-size:18px;'>P(x, y) = </b>
                            <span style='font-size:30px; font-weight:normal; vertical-align:middle; color:#b45309;'>[</span>
                            <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 10px;'>
                                <span style='border-bottom:2px solid #b45309; display:block; padding:0 5px; color:#b45309; font-weight:bold;'>m₁x₂ + m₂x₁</span>
                                <span style='color:#b45309; font-weight:bold;'>m₁ + m₂</span>
                            </span>
                            <b style='font-size:20px; color:#b45309;'>,</b>
                            <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 10px;'>
                                <span style='border-bottom:2px solid #b45309; display:block; padding:0 5px; color:#b45309; font-weight:bold;'>m₁y₂ + m₂y₁</span>
                                <span style='color:#b45309; font-weight:bold;'>m₁ + m₂</span>
                            </span>
                            <span style='font-size:30px; font-weight:normal; vertical-align:middle; color:#b45309;'>]</span>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 6: વિભાજન કરતા બિંદુના યામ શોધવા (સીધો દાખલો)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> બિંદુઓ (4, -3) અને (8, 5) ને જોડતા રેખાખંડનું <b>3:1 ગુણોત્તરમાં</b> અંતઃવિભાજન કરતા બિંદુના યામ શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: કિંમતો અલગ તારવવી</b><br>
                            ધારો કે A(4, -3) અને B(8, 5) છે.<br>
                            અહીં, <b style='color:#15803d;'>x₁ = 4, y₁ = -3</b><br>
                            <b style='color:#15803d;'>x₂ = 8, y₂ = 5</b><br>
                            ગુણોત્તર <b style='color:#be123c;'>m₁ = 3</b> અને <b style='color:#be123c;'>m₂ = 1</b><br>
                            આપણે બિંદુ P(x, y) શોધવાનું છે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>x-યામ:</b><br>
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>m₁x₂ + m₂x₁</span><span>m₁ + m₂</span></span><br>
                                
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3(8) + 1(4)</span><span>3 + 1</span></span><br>
                                
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>24 + 4</span><span>4</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>28</span><span>4</span></span><br>
                                <b style='font-size:20px; color:#1d4ed8;'>x = 7</b>
                                <hr style='border:1px dashed #93c5fd; margin:10px 0;'>
                                
                                <b>y-યામ:</b><br>
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>m₁y₂ + m₂y₁</span><span>m₁ + m₂</span></span><br>
                                
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3(5) + 1(-3)</span><span>3 + 1</span></span><br>
                                
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15 - 3</span><span>4</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12</span><span>4</span></span><br>
                                <b style='font-size:20px; color:#1d4ed8;'>y = 3</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: માંગેલ વિભાજન બિંદુના યામ (7, 3) છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 ઉદાહરણ 7: ગુણોત્તર શોધવો (બંને રીતો: m₁:m₂ અને k:1 શોર્ટકટ)", 
                    question_desc: "બોર્ડમાં 100% પૂછાતો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> બિંદુ (-4, 6) એ બિંદુઓ A(-6, 10) અને B(3, -8) ને જોડતા રેખાખંડનું <b>કયા ગુણોત્તરમાં</b> વિભાજન કરે છે?</p>
                        
                        <div style='background-color:#fffbeb; border:1px dashed #f59e0b; padding:10px; border-radius:5px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 પાયાની સમજ:</b> અહીં ગુણોત્તર શોધવો છે, એટલે આપણે <b>ફક્ત x-યામ</b> અથવા <b>ફક્ત y-યામ</b> નો ઉપયોગ કરીશું તો પણ જવાબ મળી જશે. બંને ગણવાની જરૂર નથી! અહીં P નો x-યામ -4 છે.
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:20px;'>
                            <b style='color:#0f172a; font-size:16px;'>રીત 1: m₁ અને m₂ ધારીને (પરંપરાગત રીત)</b><br>
                            ધારો કે ગુણોત્તર m₁ : m₂ છે.<br>
                            અહીં, x₁ = -6, x₂ = 3 છે અને વિભાજન બિંદુનો <b>x-યામ = -4</b> છે.<br>

                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#e2e8f0; padding:10px; border-radius:5px;'>
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>m₁x₂ + m₂x₁</span><span>m₁ + m₂</span></span><br>
                                
                                -4 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>m₁(3) + m₂(-6)</span><span>m₁ + m₂</span></span><br>
                                
                                <i style='color:#be123c;'>(હવે છેદના (m₁ + m₂) ને ડાબી બાજુ -4 સાથે ગુણાકારમાં લઈ જતાં)</i><br>
                                -4(m₁ + m₂) = 3m₁ - 6m₂<br>
                                
                                -4m₁ - 4m₂ = 3m₁ - 6m₂<br>
                                
                                <i style='color:#be123c;'>(હવે m₁ વાળા પદ એક બાજુ અને m₂ વાળા પદ બીજી બાજુ કરીએ)</i><br>
                                -4m₁ - 3m₁ = -6m₂ + 4m₂<br>
                                
                                -7m₁ = -2m₂<br>
                                
                                <i style='color:#be123c;'>(બંને બાજુથી માઇનસ નીકળી જશે)</i><br>
                                7m₁ = 2m₂<br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>m₁</span><span>m₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2</span><span>7</span></span>
                                </b>
                            </div>
                            <p style='margin-top:10px; color:#1e293b; font-weight:bold;'>જવાબ: ગુણોત્તર 2:7 છે.</p>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px;'>
                            <b style='color:#b91c1c; font-size:16px;'>રીત 2: ધારો કે ગુણોત્તર k : 1 છે (સૌથી સરળ શોર્ટકટ ટ્રીક 🚀)</b><br>
                            આ રીતમાં આપણે <b>m₁ = k</b> અને <b>m₂ = 1</b> લઈએ છીએ. એટલે સીધી એક જ ચલ (k) ની કિંમત શોધવાની રહે છે!<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>kx₂ + x₁</span><span>k + 1</span></span><br>
                                
                                -4 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>k(3) + (-6)</span><span>k + 1</span></span><br>
                                
                                -4 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3k - 6</span><span>k + 1</span></span><br>
                                
                                <i style='color:#be123c;'>(છેદના (k + 1) ને ડાબી બાજુ -4 સાથે ગુણાકારમાં લેતાં)</i><br>
                                -4(k + 1) = 3k - 6<br>
                                
                                -4k - 4 = 3k - 6<br>
                                
                                -4 + 6 = 3k + 4k<br>
                                
                                2 = 7k<br>
                                
                                <b style='font-size:20px; color:#047857;'>k = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>2</span><span>7</span></span></b>
                            </div>
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#15803d;'>નિષ્કર્ષ:</b> k ની કિંમત 2/7 મળી, એટલે સીધો જ જવાબ <b>2:7</b> થઈ જાય! આ રીતમાં સમીકરણ એકદમ નાનું બને છે અને ભૂલ પડવાની શક્યતા 0% રહે છે. <b>પરીક્ષામાં આ જ રીત વાપરવી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
        
                { 
                    question: "ઉદાહરણ 8: ત્રિભાજક બિંદુઓ શોધવા (3 સરખા ભાગ)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> બિંદુઓ A(2, -2) અને B(-7, 4) ને જોડતા રેખાખંડના <b>ત્રિભાજક બિંદુઓના યામ</b> શોધો.</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                                <line x1="30" y1="40" x2="250" y2="40" stroke="#0f172a" stroke-width="3" />
                                
                                <circle cx="30" cy="40" r="5" fill="#dc2626" />
                                <text x="10" y="60" font-weight="bold">A</text>
                                
                                <circle cx="103" cy="40" r="5" fill="#2563eb" />
                                <text x="95" y="60" font-weight="bold" fill="#2563eb">P</text>
                                
                                <circle cx="176" cy="40" r="5" fill="#2563eb" />
                                <text x="168" y="60" font-weight="bold" fill="#2563eb">Q</text>
                                
                                <circle cx="250" cy="40" r="5" fill="#dc2626" />
                                <text x="240" y="60" font-weight="bold">B</text>
                                
                                <text x="65" y="25" font-weight="bold" fill="#047857">1</text>
                                <text x="140" y="25" font-weight="bold" fill="#047857">1</text>
                                <text x="210" y="25" font-weight="bold" fill="#047857">1</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ત્રિભાજક એટલે 3 સરખા ભાગ:</b><br>
                            આ માટે આપણે રેખાખંડની વચ્ચે 2 બિંદુઓ P અને Q મૂકવા પડે.<br>
                            - <b>બિંદુ P માટે ગુણોત્તર:</b> P ની ડાબી બાજુ 1 ભાગ અને જમણી બાજુ 2 ભાગ છે, તેથી P નો ગુણોત્તર <b>1 : 2</b> થાય.<br>
                            - <b>બિંદુ Q માટે ગુણોત્તર:</b> Q ની ડાબી બાજુ 2 ભાગ અને જમણી બાજુ 1 ભાગ છે, તેથી Q નો ગુણોત્તર <b>2 : 1</b> થાય.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: બિંદુ P ના યામ શોધવા (ગુણોત્તર 1:2)</b><br>
                            અહીં, m₁=1, m₂=2, x₁=2, y₁=-2, x₂=-7, y₂=4<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                P(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1(-7) + 2(2)</span><span>1 + 2</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1(4) + 2(-2)</span><span>1 + 2</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                P(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-7 + 4</span><span>3</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4 - 4</span><span>3</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                P(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>3</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>0</span><span>3</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                <b style='font-size:20px; color:#15803d;'>P ના યામ = (-1, 0)</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: બિંદુ Q ના યામ શોધવા (ગુણોત્તર 2:1)</b><br>
                            અહીં, m₁=2, m₂=1<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                Q(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2(-7) + 1(2)</span><span>2 + 1</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2(4) + 1(-2)</span><span>2 + 1</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                Q(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-14 + 2</span><span>3</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8 - 2</span><span>3</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                Q(x, y) = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-12</span><span>3</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6</span><span>3</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'>Q ના યામ = (-4, 2)</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: ત્રિભાજક બિંદુઓ P(-1, 0) અને Q(-4, 2) છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 9: y-અક્ષ દ્વારા વિભાજનનો ગુણોત્તર શોધો (k:1 નો ઉપયોગ)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> <b>y-અક્ષ</b> એ બિંદુઓ (5, -6) અને (-1, -4) ને જોડતા રેખાખંડનું <b>કયા ગુણોત્તરમાં વિભાજન</b> કરે છે? છેદબિંદુ પણ શોધો.</p>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f;'>સ્ટેપ 1: ધારો કે ગુણોત્તર k : 1 છે.</b><br>
                            અને આપણે જાણીએ છીએ કે <b>y-અક્ષ</b> પર આવેલા કોઈપણ બિંદુનો <b>x-યામ હંમેશા 0 હોય છે</b>.<br>
                            તેથી છેદબિંદુના યામ <b>P(0, y)</b> થાય.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#fce7f3; padding:10px; border-radius:5px;'>
                                <i style='color:#be123c;'>(અહીં x-યામ 0 છે, તેથી x નું જ સૂત્ર વાપરીશું)</i><br>
                                x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>kx₂ + x₁</span><span>k + 1</span></span><br>
                                
                                0 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>k(-1) + 5</span><span>k + 1</span></span><br>
                                
                                <i style='color:#64748b;'>(છેદનો (k+1) ઝીરો સાથે ગુણાઈને ઝીરો થઈ જશે)</i><br>
                                0 = -k + 5<br>
                                
                                <b style='font-size:20px; color:#be123c;'>k = 5</b><br>
                                <b>તેથી માંગેલ ગુણોત્તર 5 : 1 છે!</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: છેદબિંદુનો y-યામ શોધવો</b><br>
                            હવે આપણી પાસે ગુણોત્તર (5 : 1) એટલે કે m₁=5, m₂=1 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2;'>
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>m₁y₂ + m₂y₁</span><span>m₁ + m₂</span></span><br>
                                
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5(-4) + 1(-6)</span><span>5 + 1</span></span><br>
                                
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-20 - 6</span><span>6</span></span><br>
                                
                                y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-26</span><span>6</span></span> <i style='color:#64748b;'>(બંને ને 2 વડે ભાગતાં)</i><br>
                                
                                <b style='font-size:20px; color:#15803d;'>y = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>-13</span><span>3</span></span></b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: ગુણોત્તર 5:1 છે અને છેદબિંદુ (0, <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>-13</span><span>3</span></span>) છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 10: સમાંતરબાજુ ચતુષ્કોણમાં અજ્ઞાત 'p' ની કિંમત શોધવી (મધ્યબિંદુ ટ્રીક)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો બિંદુઓ A(6, 1), B(8, 2), C(9, 4) અને D(p, 3) એ ક્રમમાં લેવાતા <b>સમાંતરબાજુ ચતુષ્કોણના શિરોબિંદુઓ</b> હોય, તો <b>p</b> ની કિંમત શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (Midpoint Trick):</b><br>
                            આખો દાખલો માત્ર એક જ વાક્ય પર આધારિત છે: <b>"સમાંતરબાજુ ચતુષ્કોણના વિકર્ણો પરસ્પર દુભાગે છે."</b><br>
                            એટલે કે, <b style='color:#be123c;'>વિકર્ણ AC નું મધ્યબિંદુ = વિકર્ણ BD નું મધ્યબિંદુ</b><br>
                            આપણે અહીં ખાલી મધ્યબિંદુનું ટૂંકું સૂત્ર જ વાપરવાનું છે!
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>ગણતરી: મધ્યબિંદુ સરખાવતા</b><br>
                            A(6, 1) અને C(9, 4) નું મધ્યબિંદુ  =  B(8, 2) અને D(p, 3) નું મધ્યબિંદુ<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2;'>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6 + 9</span><span>2</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1 + 4</span><span>2</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span>
                                = 
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8 + p</span><span>2</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2 + 3</span><span>2</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span><br><br>
                                
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15</span><span>2</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span>
                                = 
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8 + p</span><span>2</span></span> , 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span>
                                <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span>
                            </div>

                            <p style='margin-top:15px;'>p શોધવા માટે આપણે <b>ફક્ત x-યામ સરખાવીશું</b> (કારણ કે y-યામ તો બંનેના 5/2 સરખા જ છે):</p>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8 + p</span><span>2</span></span><br>
                                
                                <i style='color:#64748b;'>(બંને બાજુથી છેદમાં રહેલા 2 ઉડી જશે)</i><br>
                                15 = 8 + p<br>
                                
                                15 - 8 = p<br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'>p = 7</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#047857;'>જવાબ: અજ્ઞાત p ની કિંમત 7 છે.</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 8: ત્રિકોણમિતિનો પરિચય (ઉદાહરણ ભાગ 1.1)
        // ------------------------------------
        "8": {
            "chapterName": "પ્રકરણ 8 (ઉદાહરણ 1.1)",
            "chapterTitle": "ત્રિકોણમિતિ - પાયાની સમજ અને ઉદાહરણ 1",
            "qa_list": [
                {
                    question: "🎯 પાયાની સમજ: ત્રિકોણમિતિ શરૂ કરતા પહેલા આટલું મગજમાં છાપી લો!",
                    answer: `
                    <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border:2px solid #94a3b8; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#0f172a;'>કોઈપણ દાખલો ગણતા પહેલા કાટકોણ ત્રિકોણ દોરીને આ 3 વસ્તુઓ નક્કી કરી લેવી:</p>
                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="250" height="180" viewBox="0 0 250 180" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="50,20 50,150 180,150" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
                                <polyline points="50,135 65,135 65,150" fill="none" stroke="black" stroke-width="1.5" />
                                <path d="M 150 150 A 30 30 0 0 0 160 130" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="135" y="145" font-weight="bold" fill="#dc2626" font-size="18">A</text>
                                
                                <text x="35" y="15" font-weight="bold">C</text>
                                <text x="30" y="165" font-weight="bold">B</text>
                                <text x="185" y="165" font-weight="bold">A</text>
                                
                                <text x="120" y="80" font-weight="bold" fill="#1d4ed8" transform="rotate(45 115 85)">કર્ણ (સૌથી મોટી બાજુ)</text>
                                <text x="90" y="170" font-weight="bold" fill="#047857">પાસેની બાજુ (પા.બા.)</text>
                                <text x="10" y="90" font-weight="bold" fill="#be123c" transform="rotate(-90 20 90)">સામેની બાજુ (સા.બા.)</text>
                            </svg>
                        </div>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #cbd5e1;'>
                            <b style='color:#be123c;'>મંત્રો યાદ રાખો:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; line-height:2;'>
                                1. <b>sin A</b> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>સા.બા.</span><span>કર્ણ</span></span><br>
                                2. <b>cos A</b> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>પા.બા.</span><span>કર્ણ</span></span><br>
                                3. <b>tan A</b> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>સા.બા.</span><span>પા.બા.</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 1: tan A આપેલ છે, બાકીના ગુણોત્તરો શોધો", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો <b>tan A = 4/3</b> હોય, તો ખૂણા A ના અન્ય ત્રિકોણમિતીય ગુણોત્તરો શોધો.</p>

                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>સ્ટેપ 1: આકૃતિ દોરો અને ધારો</b><br>
                            આપણે જાણીએ છીએ કે <b>tan A = સા.બા. / પા.બા.</b><br>
                            તેથી, tan A = BC / AB = 4 / 3<br>
                            અહીં ગુણોત્તર છે, તેથી કોઈ અચળ 'k' ધારી લઈએ (જ્યાં k ધન સંખ્યા છે).<br>
                            <b style='color:#be123c;'>BC (સા.બા.) = 4k</b> અને <b style='color:#047857;'>AB (પા.બા.) = 3k</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: પાયથાગોરસના પ્રમેયથી કર્ણ (AC) શોધવો</b><br>
                            &Delta;ABC માં કાટખૂણો B છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                AC&sup2; = AB&sup2; + BC&sup2;<br>
                                AC&sup2; = (3k)&sup2; + (4k)&sup2;<br>
                                AC&sup2; = 9k&sup2; + 16k&sup2;<br>
                                AC&sup2; = 25k&sup2;<br>
                                <i style='color:#64748b;'>(બંને બાજુ વર્ગમૂળ લેતાં)</i><br>
                                <b style='font-size:20px; color:#15803d;'>AC (કર્ણ) = 5k</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: બાકીના ગુણોત્તરો શોધવા</b><br>
                            હવે આપણી પાસે ત્રણેય બાજુઓ છે: સા.બા.=4k, પા.બા.=3k, કર્ણ=5k.<br>
                            <div style='overflow-x:auto; white-space:nowrap; line-height:2.5; font-size:16px;'>
                                <ul>
                                    <li><b>sin A</b> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>સા.બા.</span><span>કર્ણ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4k</span><span>5k</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>4</span><span>5</span></span></b></li>
                                    
                                    <li><b>cos A</b> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>પા.બા.</span><span>કર્ણ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3k</span><span>5k</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>3</span><span>5</span></span></b></li>
                                    
                                    <li><b>cot A</b> (tan નો વ્યસ્ત) = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>3</span><span>4</span></span></b></li>
                                    
                                    <li><b>sec A</b> (cos નો વ્યસ્ત) = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>5</span><span>3</span></span></b></li>
                                    
                                    <li><b>cosec A</b> (sin નો વ્યસ્ત) = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>5</span><span>4</span></span></b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                },       
   
                { 
                    question: "ઉદાહરણ 2: sin B = sin Q હોય, તો સાબિત કરો કે ∠B = ∠Q", 
                    question_desc: "સાબિતી વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો &angle;B અને &angle;Q એવા લઘુકોણો હોય કે જેથી <b>sin B = sin Q</b> થાય, તો સાબિત કરો કે <b>&angle;B = &angle;Q</b>.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (કેવી રીતે ગણવો?):</b><br>
                            અહીં આપણે 2 અલગ-અલગ કાટકોણ ત્રિકોણ ધારીશું: &Delta;ABC અને &Delta;PQR. જો આપણે આ બંને ત્રિકોણને <b>સમરૂપ (Similar)</b> સાબિત કરી દઈએ, તો તેમના ખૂણાઓ ઓટોમેટિક સરખા સાબિત થઈ જાય!
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: ગુણોત્તર સરખાવવો</b><br>
                            ધારો કે &Delta;ABC માં ખૂણો C કાટખૂણો છે, અને &Delta;PQR માં ખૂણો R કાટખૂણો છે.<br>
                            રકમ મુજબ: sin B = sin Q<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AC</span><span>AB</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>PR</span><span>PQ</span></span><br>
                                
                                <i style='color:#64748b;'>(હવે આપણે AC ની નીચે PR અને AB ની ઉપર લાવીશું - ચોકડી ગુણાકારની જેમ ગોઠવણ)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AC</span><span>PR</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB</span><span>PQ</span></span> = <b style='color:#be123c;'>k (ધારો કે)</b> &nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>
                            <p style='margin-top:5px; font-size:14px; color:#64748b;'>અહીંથી આપણને મળ્યું: AC = k(PR) અને AB = k(PQ)</p>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-top:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: પાયથાગોરસથી ત્રીજી બાજુ (BC અને QR) શોધવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                &Delta;ABC માં: BC = &radic;(AB&sup2; - AC&sup2;)<br>
                                &Delta;PQR માં: QR = &radic;(PQ&sup2; - PR&sup2;)<br><br>
                                
                                હવે બંનેનો ગુણોત્તર લઈએ:<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BC</span><span>QR</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;(AB&sup2; - AC&sup2;)</span><span>&radic;(PQ&sup2; - PR&sup2;)</span></span><br>
                                
                                <i style='color:#64748b;'>(AB ની જગ્યાએ k(PQ) અને AC ની જગ્યાએ k(PR) મૂકતાં)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BC</span><span>QR</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;(k&sup2;PQ&sup2; - k&sup2;PR&sup2;)</span><span>&radic;(PQ&sup2; - PR&sup2;)</span></span><br>
                                
                                <i style='color:#64748b;'>(k² ને વર્ગમૂળની બહાર કાઢીએ એટલે k થઈ જાય)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BC</span><span>QR</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>k &radic;(PQ&sup2; - PR&sup2;)</span><span>&radic;(PQ&sup2; - PR&sup2;)</span></span><br>
                                
                                <i style='color:#64748b;'>(બંને કૌંસ સરખા હોવાથી ઉડી જશે)</i><br>
                                <b style='font-size:18px; color:#15803d;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>BC</span><span>QR</span></span> = k</b> &nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:15px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: નિષ્કર્ષ</b><br>
                            સમીકરણ (1) અને (2) પરથી:<br>
                            <div style='overflow-x:auto; white-space:nowrap; margin:10px 0;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AC</span><span>PR</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB</span><span>PQ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BC</span><span>QR</span></span>
                            </div>
                            <p style='margin-bottom:0;'>બા.બા.બા. (SSS) સમરૂપતાની શરત મુજબ, ત્રણેય બાજુઓનો ગુણોત્તર સમાન હોવાથી <b>&Delta;ABC ~ &Delta;PQR</b> (બંને ત્રિકોણ સમરૂપ છે).<br>
                            <b style='color:#be123c;'>તેથી, તેમના અનુરૂપ ખૂણાઓ સમાન થાય: &angle;B = &angle;Q. (સાબિત થાય છે).</b></p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 3: બે બાજુઓ પરથી sin²θ + cos²θ શોધવું", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> &Delta;ACB માં ખૂણો C કાટખૂણો છે. AB = 29, BC = 21 અને &angle;ABC = &theta; છે. તો (i) cos&sup2;&theta; + sin&sup2;&theta; અને (ii) cos&sup2;&theta; - sin&sup2;&theta; નું મૂલ્ય શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: પાયથાગોરસથી ત્રીજી બાજુ (AC) શોધવી</b><br>
                            કર્ણ (AB) = 29, પાસેની બાજુ (BC) = 21, સામેની બાજુ (AC) = ?<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                AB&sup2; = AC&sup2; + BC&sup2;<br>
                                (29)&sup2; = AC&sup2; + (21)&sup2;<br>
                                841 = AC&sup2; + 441<br>
                                AC&sup2; = 841 - 441 = 400<br>
                                <b style='font-size:18px; color:#b91c1c;'>AC = 20</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: sin &theta; અને cos &theta; શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                sin &theta; = સા.બા./કર્ણ = AC/AB = <b style='color:#15803d;'>20/29</b><br>
                                cos &theta; = પા.બા./કર્ણ = BC/AB = <b style='color:#15803d;'>21/29</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: માંગેલ મૂલ્યો શોધવા</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <b style='color:#0f172a;'>(i) cos&sup2;&theta; + sin&sup2;&theta;</b><br>
                                = (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>29</span></span>)&sup2; + (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>20</span><span>29</span></span>)&sup2;<br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>441</span><span>841</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>400</span><span>841</span></span><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>441 + 400</span><span>841</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>841</span><span>841</span></span> = <b style='font-size:20px; color:#1d4ed8;'>1</b>
                                
                                <br><hr style='border:1px dashed #94a3b8; margin:15px 0;'><br>
                                
                                <b style='color:#0f172a;'>(ii) cos&sup2;&theta; - sin&sup2;&theta;</b><br>
                                = (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>29</span></span>)&sup2; - (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>20</span><span>29</span></span>)&sup2;<br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>441</span><span>841</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>400</span><span>841</span></span><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>441 - 400</span><span>841</span></span> = <b style='font-size:20px; color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>41</span><span>841</span></span></b>
                            </div>
                        </div>
                    </div>
                    `
                },
            
        
                { 
                    question: "🌟 ઉદાહરણ 4: ચકાસો કે 2 sin A cos A = 1 (બંને રીતો: ચોપડીની અને શોર્ટકટ ટ્રીક)", 
                    question_desc: "બોર્ડમાં પૂછાતો ફેવરિટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> કાટકોણ ત્રિકોણ ABC માં ખૂણો B કાટખૂણો છે. જો <b>tan A = 1</b> હોય, તો ચકાસો કે <b>2 sin A cos A = 1</b>.</p>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:20px;'>
                            <b style='color:#0f172a; font-size:16px;'>રીત 1: પાયથાગોરસની લાંબી રીત (ચોપડી મુજબ)</b><br>
                            tan A = BC / AB = 1 &rArr; <b>BC = AB</b>.<br>
                            ધારો કે BC = AB = k.<br>
                            પાયથાગોરસ મુજબ: AC&sup2; = AB&sup2; + BC&sup2; = k&sup2; + k&sup2; = 2k&sup2; &rArr; <b style='color:#047857;'>AC = &radic;2 k</b>.<br><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                હવે sin A = BC/AC = k / (&radic;2 k) = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span></b><br>
                                અને cos A = AB/AC = k / (&radic;2 k) = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span></b><br><br>
                                
                                <b>ડાબી બાજુ (LHS):</b><br>
                                = 2 sin A cos A<br>
                                = 2 &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span>) &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span>)<br>
                                = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &nbsp;&nbsp; <i style='color:#64748b;'>(&radic;2 &times; &radic;2 = 2 થાય)</i><br>
                                = <b>1</b> = જમણી બાજુ (RHS). (સાબિત થાય છે).
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:15px; border-radius:8px;'>
                            <b style='color:#c2410c; font-size:18px;'>🚀 રીત 2: કોષ્ટકની સ્માર્ટ ટ્રીક (માત્ર 3 સ્ટેપમાં દાખલો પૂરો!)</b><br>
                            આ રીત બોર્ડમાં 100% માન્ય છે અને તમારો ઘણો સમય બચાવશે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                રકમમાં આપેલ છે: <b>tan A = 1</b><br>
                                કોષ્ટક યાદ કરો: tan માં કયા ખૂણાની કિંમત 1 થાય?<br>
                                આપણે જાણીએ છીએ કે <b>tan 45&deg; = 1</b>.<br>
                                તેથી, <b style='color:#be123c; font-size:18px;'>A = 45&deg;</b> મળે.<br><br>
                                
                                <b>હવે સીધી કિંમત ડાબી બાજુ (LHS) માં મૂકો:</b><br>
                                = 2 sin A cos A<br>
                                = 2 sin(45&deg;) cos(45&deg;)<br>
                                = 2 &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span>) &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;2</span></span>)<br>
                                = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span><br>
                                = <b style='font-size:20px; color:#15803d;'>1</b> = RHS. (સાબિત થાય છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 5: બીજગણિત + પાયથાગોરસનો સમન્વય (OQ - PQ = 1)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> &Delta;OPQ માં કાટખૂણો P છે. OP = 7 cm અને <b>OQ - PQ = 1 cm</b> છે. તો sin Q અને cos Q ના મૂલ્યો શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: સમીકરણને સેટ કરવું</b><br>
                            આપણને OQ - PQ = 1 આપેલું છે.<br>
                            PQ ને સામેની બાજુ લઈ જઈએ: <b style='color:#be123c;'>OQ = 1 + PQ</b> &nbsp; ... (સમીકરણ 1)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: પાયથાગોરસનો પ્રમેય વાપરવો</b><br>
                            &Delta;OPQ માં OQ કર્ણ છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                OQ&sup2; = OP&sup2; + PQ&sup2;<br>
                                
                                <i style='color:#64748b;'>(OQ ની જગ્યાએ (1 + PQ) અને OP = 7 મૂકતાં)</i><br>
                                (1 + PQ)&sup2; = (7)&sup2; + PQ&sup2;<br>
                                
                                <i style='color:#be123c;'>(અહીં (a+b)² નું સૂત્ર લાગશે: 1 + 2(1)(PQ) + PQ²)</i><br>
                                1 + 2PQ + PQ&sup2; = 49 + PQ&sup2;<br>
                                
                                <i style='color:#64748b;'>(બંને બાજુથી PQ² ઉડી જશે)</i><br>
                                1 + 2PQ = 49<br>
                                2PQ = 49 - 1<br>
                                2PQ = 48<br>
                                PQ = 48 / 2 &rArr; <b style='font-size:18px; color:#1d4ed8;'>PQ = 24 cm</b>
                            </div>
                            
                            <p style='margin-top:10px;'>હવે PQ ની કિંમત સમીકરણ 1 માં મૂકતાં:<br>
                            OQ = 1 + 24 &rArr; <b style='font-size:18px; color:#047857;'>OQ = 25 cm</b></p>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f;'>સ્ટેપ 3: sin Q અને cos Q શોધવા</b><br>
                            અહીં ખૂણો <b>Q</b> ધ્યાનમાં લેવાનો છે, તેથી Q ની <b>સામેની બાજુ OP (7)</b> થશે અને <b>પાસેની બાજુ PQ (24)</b> થશે. કર્ણ <b>OQ (25)</b> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <ul>
                                    <li><b>sin Q</b> = સા.બા./કર્ણ = OP/OQ = <b style='color:#be123c; font-size:18px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>7</span><span>25</span></span></b></li>
                                    <li><b>cos Q</b> = પા.બા./કર્ણ = PQ/OQ = <b style='color:#be123c; font-size:18px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>24</span><span>25</span></span></b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                },
            
        
        
                { 
                    question: "ઉદાહરણ 6: ખૂણો અને એક બાજુ આપેલ હોય, ત્યારે બીજી બાજુઓ શોધવી", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> &Delta;ABC માં કાટખૂણો B છે. <b>AB = 5 cm</b> અને <b>&angle;ACB = 30&deg;</b> છે. બાજુઓ <b>BC</b> અને <b>AC</b> ની લંબાઈ શોધો.</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="40,20 40,130 160,130" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
                                <polyline points="40,115 55,115 55,130" fill="none" stroke="black" stroke-width="1.5" />
                                
                                <path d="M 130 130 A 30 30 0 0 0 140 115" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="110" y="125" font-weight="bold" fill="#dc2626" font-size="14">30&deg;</text>
                                
                                <text x="25" y="15" font-weight="bold">A</text>
                                <text x="20" y="140" font-weight="bold">B</text>
                                <text x="170" y="140" font-weight="bold">C</text>
                                
                                <text x="10" y="80" font-weight="bold" fill="#be123c">5 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (કેવી રીતે વિચારવું?):</b><br>
                            અહીં ખૂણો C (30&deg;) છે. તેની <b>સામેની બાજુ (AB = 5)</b> આપેલી છે.<br>
                            - આપણે <b>BC (પાસેની બાજુ)</b> શોધવી છે &rArr; સામેની બાજુ અને પાસેની બાજુનો સંબંધ કયા સૂત્રમાં આવે? <b>tan</b> માં!<br>
                            - આપણે <b>AC (કર્ણ)</b> શોધવો છે &rArr; સામેની બાજુ અને કર્ણનો સંબંધ કયા સૂત્રમાં આવે? <b>sin</b> માં!
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: BC શોધવા માટે tan નો ઉપયોગ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                tan C = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB (સા.બા.)</span><span>BC (પા.બા.)</span></span><br>
                                
                                tan 30&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>BC</span></span><br>
                                
                                <i style='color:#64748b;'>(કોષ્ટક મુજબ tan 30&deg; ની કિંમત 1/&radic;3 છે)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>BC</span></span><br>
                                
                                <i style='color:#64748b;'>(ચોકડી ગુણાકાર કરતાં)</i><br>
                                BC &times; 1 = 5 &times; &radic;3<br>
                                <b style='font-size:20px; color:#1d4ed8;'>BC = 5&radic;3 cm</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: AC શોધવા માટે sin નો ઉપયોગ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                sin C = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB (સા.બા.)</span><span>AC (કર્ણ)</span></span><br>
                                
                                sin 30&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>AC</span></span><br>
                                
                                <i style='color:#64748b;'>(કોષ્ટક મુજબ sin 30&deg; ની કિંમત 1/2 છે)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>AC</span></span><br>
                                
                                <i style='color:#64748b;'>(ચોકડી ગુણાકાર કરતાં)</i><br>
                                AC &times; 1 = 5 &times; 2<br>
                                <b style='font-size:20px; color:#047857;'>AC = 10 cm</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: BC = 5&radic;3 cm અને AC = 10 cm.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 7: બે બાજુઓ પરથી ખૂણો શોધવો", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> &Delta;PQR માં ખૂણો Q કાટખૂણો છે. <b>PQ = 3 cm</b> અને <b>PR = 6 cm</b> છે. તો <b>&angle;QPR</b> અને <b>&angle;PRQ</b> શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: &angle;R (&angle;PRQ) શોધવો</b><br>
                            આપણે ખૂણો R શોધવો છે. <b>સામેની બાજુ (PQ = 3)</b> અને <b>કર્ણ (PR = 6)</b> આપેલ છે.<br>
                            સામેની બાજુ અને કર્ણ આવે તેવું સૂત્ર: <b>sin</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                sin R = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>PQ (સા.બા.)</span><span>PR (કર્ણ)</span></span><br>
                                
                                sin R = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>6</span></span><br>
                                
                                sin R = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span>
                            </div>
                            
                            <p style='margin-top:10px; color:#be123c; font-weight:bold;'>હવે કોષ્ટક યાદ કરો: sin માં કયા ખૂણાની કિંમત 1/2 થાય?</p>
                            <p><b>sin 30&deg; = 1/2 થાય.</b></p>
                            <div style='font-size:20px; font-weight:bold; color:#1d4ed8;'>તેથી, &angle;PRQ (એટલે કે &angle;R) = 30&deg;</div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: &angle;P (&angle;QPR) શોધવો</b><br>
                            આપણે જાણીએ છીએ કે ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &Delta;PQR માં &angle;Q = 90&deg; અને &angle;R = 30&deg; છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2;'>
                                &angle;P + &angle;Q + &angle;R = 180&deg;<br>
                                &angle;P + 90&deg; + 30&deg; = 180&deg;<br>
                                &angle;P + 120&deg; = 180&deg;<br>
                                &angle;P = 180&deg; - 120&deg;<br>
                                <b style='font-size:20px; color:#047857;'>&angle;QPR (એટલે કે &angle;P) = 60&deg;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 ઉદાહરણ 8: સમીકરણ પરથી ખૂણા A અને B શોધવા", 
                    question_desc: "બોર્ડમાં અચૂક પૂછાતો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જો <b>sin(A - B) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>1</span><span>2</span></span></b> અને <b>cos(A + B) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>1</span><span>2</span></span></b> હોય, (જ્યાં A > B), તો A અને B શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: કોષ્ટક પરથી સમીકરણો બનાવવા</b><br>
                            <p style='margin-bottom:5px;'><b>1) sin માટે:</b></p>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2;'>
                                sin(A - B) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span><br>
                                <i style='color:#64748b;'>(કોષ્ટકમાં sin 30&deg; = 1/2 થાય)</i><br>
                                તેથી, <b style='color:#1d4ed8; font-size:18px;'>A - B = 30&deg; &nbsp; ... (સમીકરણ 1)</b>
                            </div>
                            
                            <hr style='border:1px dashed #fca5a5; margin:10px 0;'>
                            
                            <p style='margin-bottom:5px;'><b>2) cos માટે:</b></p>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2;'>
                                cos(A + B) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span><br>
                                <i style='color:#64748b;'>(કોષ્ટકમાં cos 60&deg; = 1/2 થાય)</i><br>
                                તેથી, <b style='color:#1d4ed8; font-size:18px;'>A + B = 60&deg; &nbsp; ... (સમીકરણ 2)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: લોપની રીત (ચેપ્ટર 3 નો ઉપયોગ!)</b><br>
                            સમીકરણ 1 અને 2 નો સરવાળો કરતાં:<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:1.8; text-align:center; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp;A - B = 30&deg;<br>
                                (+)A + B = 60&deg;<br>
                                <hr style='border:1px solid #16a34a; width:150px; margin:auto;'>
                                &nbsp;&nbsp;2A &nbsp;&nbsp;&nbsp; = 90&deg; &nbsp;&nbsp; <i style='font-size:14px; color:#64748b;'>(-B અને +B ઉડી જશે)</i><br>
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;A = 90 / 2<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<b style='color:#047857;'>A = 45&deg;</b>
                            </div>
                            
                            <p style='margin-top:15px;'>હવે A ની કિંમત સમીકરણ 2 માં મૂકતાં:</p>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2;'>
                                A + B = 60&deg;<br>
                                45&deg; + B = 60&deg;<br>
                                B = 60&deg; - 45&deg;<br>
                                <b style='font-size:20px; color:#be123c;'>B = 15&deg;</b>
                            </div>
                            
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#1e40af;'>અંતિમ જવાબ:</b> A = 45&deg; અને B = 15&deg;. 
                                <p style='margin-bottom:0; font-size:14px; color:#64748b;'><i>(તમે જોઈ શકો છો કે 45 > 15 છે, એટલે કે A > B ની શરત પણ પળાય છે).</i></p>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
      },
            
        // ------------------------------------
        // પ્રકરણ 9: ત્રિકોણમિતિનો ઉપયોગ (ઉદાહરણ ભાગ 1)
        // ------------------------------------
        "9": {
            "chapterName": "પ્રકરણ 9 (ઉદાહરણ 1.1)",
            "chapterTitle": "ત્રિકોણમિતિનો ઉપયોગ - ભાગ 1",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: ક્યારે કયું સૂત્ર વાપરવું? (દાખલો ગણવાની શોર્ટકટ ટ્રીક)",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold;'>દાખલાની રકમ વાંચીને કાટકોણ ત્રિકોણ દોરો. ત્યારબાદ આ 3 પ્રશ્નો તમારી જાતને પૂછો:</p>
                        
                        <ul style='line-height:2; margin-bottom:0; font-size:16px; color:#0f172a;'>
                            <li>જો <b>ઊંચાઈ (સામેની બાજુ)</b> અને <b>અંતર (પાસેની બાજુ)</b> ની વાત હોય &rArr; <b style='color:#be123c;'>tan &theta;</b> વાપરો. (90% દાખલામાં આ જ વપરાશે!)</li>
                            <li>જો <b>ઊંચાઈ (સામેની બાજુ)</b> અને <b>દોરી/નિસરણીની લંબાઈ (કર્ણ)</b> ની વાત હોય &rArr; <b style='color:#1d4ed8;'>sin &theta;</b> વાપરો.</li>
                            <li>જો <b>અંતર (પાસેની બાજુ)</b> અને <b>દોરી/નિસરણીની લંબાઈ (કર્ણ)</b> ની વાત હોય &rArr; <b style='color:#047857;'>cos &theta;</b> વાપરો.</li>
                        </ul>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 1: ટાવરની ઊંચાઈ શોધવી (સૌથી સહેલો દાખલો)", 
                    question_desc: "2 માર્ક્સ માટે મોસ્ટ IMP",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જમીન પર એક ટાવર શિરોલંબ સ્થિતિમાં છે. તેના પાયાથી <b>15 મીટર દૂર</b> રહેલા જમીન પરના એક બિંદુથી ટાવરની ટોચનો <b>ઉત્સેધકોણ 60&deg;</b> છે. ટાવરની ઊંચાઈ શોધો.</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="180" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="150" x2="180" y2="150" stroke="#475569" stroke-width="3" />
                                
                                <rect x="150" y="30" width="15" height="120" fill="#94a3b8" stroke="#334155" stroke-width="2" />
                                <text x="175" y="90" font-weight="bold" fill="#be123c">h (ઊંચાઈ)</text>
                                
                                <line x1="30" y1="150" x2="150" y2="30" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,5" />
                                
                                <text x="155" y="20" font-weight="bold">A (ટોચ)</text>
                                <text x="155" y="170" font-weight="bold">B (પાયો)</text>
                                <text x="15" y="170" font-weight="bold">C (બિંદુ)</text>
                                <text x="75" y="170" font-weight="bold" fill="#047857">15 m</text>
                                
                                <path d="M 60 150 A 30 30 0 0 0 50 130" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="65" y="140" font-weight="bold" fill="#dc2626">60&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:1px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારો કયું સૂત્ર આવશે?</b><br>
                            ખૂણો 60&deg; છે. આપણે ટાવરની ઊંચાઈ એટલે કે <b>સામેની બાજુ (AB)</b> શોધવી છે. અને પાયાથી અંતર એટલે કે <b>પાસેની બાજુ (BC = 15)</b> આપેલી છે.<br>
                            સા.બા. અને પા.બા. નો સંબંધ એટલે <b style='color:#be123c;'>tan</b>!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            &Delta;ABC માં ખૂણો B કાટખૂણો છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                tan C = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB (સા.બા.)</span><span>BC (પા.બા.)</span></span><br>
                                
                                tan 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>15</span></span><br>
                                
                                <i style='color:#64748b;'>(કોષ્ટક મુજબ tan 60&deg; ની કિંમત &radic;3 છે)</i><br>
                                &radic;3 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>15</span></span><br>
                                
                                <i style='color:#64748b;'>(15 નો સામે ગુણાકાર થશે)</i><br>
                                <b style='font-size:20px; color:#15803d;'>h = 15&radic;3 m</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: ટાવરની ઊંચાઈ 15&radic;3 મીટર છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 2: થાંભલા પર ઇલેક્ટ્રિશિયનનું સમારકામ", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક ઇલેક્ટ્રિશિયનને <b>5 m</b> ઊંચાઈવાળા થાંભલા પર ફોલ્ટનું સમારકામ કરવાનું છે. આ માટે તેણે ટોચથી <b>1.3 m નીચે</b> સુધી પહોંચીને કામ કરવાનું છે. નિસરણી જમીન સાથે <b>60&deg; નો ખૂણો</b> બનાવે છે.<br> 
                        (i) નિસરણીની લંબાઈ કેટલી હશે?<br> 
                        (ii) નિસરણીનો પાયો થાંભલાથી કેટલો દૂર હશે? (&radic;3 = 1.73 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="200" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="180" x2="180" y2="180" stroke="#475569" stroke-width="3" />
                                
                                <line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" stroke-width="6" />
                                <text x="165" y="100" fill="#64748b" font-size="12">કુલ 5m</text>
                                
                                <circle cx="150" cy="60" r="5" fill="#dc2626" />
                                <text x="160" y="65" font-weight="bold" fill="#dc2626">B</text>
                                <text x="160" y="45" font-size="12" fill="#be123c">1.3m નીચે</text>
                                
                                <line x1="60" y1="180" x2="150" y2="60" stroke="#d97706" stroke-width="4" stroke-dasharray="8,4" />
                                <text x="75" y="110" font-weight="bold" fill="#d97706" transform="rotate(-53 75 110)">નિસરણી</text>
                                
                                <text x="145" y="15" font-weight="bold">A</text>
                                <text x="155" y="195" font-weight="bold">D (પાયો)</text>
                                <text x="45" y="195" font-weight="bold">C</text>
                                
                                <path d="M 85 180 A 25 25 0 0 0 75 160" fill="none" stroke="#2563eb" stroke-width="2" />
                                <text x="90" y="175" font-weight="bold" fill="#2563eb">60&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: કાટકોણ ત્રિકોણ BDC માટે સાચી ઊંચાઈ (BD) શોધવી</b><br>
                            થાંભલાની કુલ ઊંચાઈ AD = 5 m છે. ઇલેક્ટ્રિશિયનને ટોચ (A) થી 1.3 m નીચે (B) પહોંચવાનું છે.<br>
                            તેથી, કામ કરવાની ઊંચાઈ <b style='color:#be123c;'>BD = 5 - 1.3 = 3.7 m</b> થાય. (આ આપણી <b>સામેની બાજુ</b> બની ગઈ).
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: નિસરણીની લંબાઈ (કર્ણ BC) શોધવી</b><br>
                            સામેની બાજુ (BD) આપેલી છે અને કર્ણ (BC) શોધવો છે &rArr; <b style='color:#1d4ed8;'>sin 60&deg;</b> વપરાશે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                sin 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BD (સા.બા.)</span><span>BC (કર્ણ)</span></span><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.7</span><span>BC</span></span><br>
                                
                                BC = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.7 &times; 2</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7.4</span><span>1.73</span></span> <i style='color:#64748b;'>(&radic;3 ની કિંમત 1.73 મૂકતાં)</i><br>
                                
                                <b style='font-size:18px; color:#1d4ed8;'>BC &approx; 4.28 m</b> (નિસરણીની લંબાઈ)
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>સ્ટેપ 3: પાયાથી નિસરણીનું અંતર (પાસેની બાજુ CD) શોધવું</b><br>
                            સામેની બાજુ (BD) આપેલી છે અને પાસેની બાજુ (CD) શોધવી છે &rArr; <b style='color:#047857;'>tan 60&deg;</b> વપરાશે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                tan 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>BD (સા.બા.)</span><span>CD (પા.બા.)</span></span><br>
                                
                                &radic;3 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.7</span><span>CD</span></span><br>
                                
                                CD = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.7</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.7</span><span>1.73</span></span><br>
                                
                                <b style='font-size:18px; color:#15803d;'>CD &approx; 2.14 m</b> (થાંભલાથી અંતર)
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 3: ચિમની અને નિરીક્ષક (વ્યક્તિની ઊંચાઈ આપેલી હોય ત્યારે)", 
                    question_desc: "ખૂબ જ અગત્યનો કન્સેપ્ટ",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> <b>1.5 મીટર ઊંચાઈવાળી</b> એક નિરીક્ષક એક ચિમનીથી <b>28.5 મીટર દૂર</b> ઊભેલી છે. તેની આંખથી ચિમનીની ટોચનો <b>ઉત્સેધકોણ 45&deg;</b> છે. ચિમનીની <b>કુલ ઊંચાઈ</b> કેટલી હશે?</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="240" height="200" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="180" x2="200" y2="180" stroke="#475569" stroke-width="3" />
                                
                                <line x1="40" y1="130" x2="40" y2="180" stroke="#be123c" stroke-width="4" />
                                <text x="10" y="160" font-size="12" fill="#be123c">1.5m</text>
                                <text x="35" y="120" font-weight="bold">D (આંખ)</text>
                                
                                <rect x="160" y="30" width="20" height="150" fill="#94a3b8" stroke="#334155" stroke-width="2" />
                                <text x="185" y="40" font-weight="bold">A (ટોચ)</text>
                                <text x="185" y="180" font-weight="bold">B</text>
                                
                                <line x1="40" y1="130" x2="160" y2="130" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,5" />
                                <text x="175" y="135" font-weight="bold">E</text>
                                <text x="80" y="145" font-size="12" fill="#16a34a">28.5 m</text>
                                
                                <line x1="40" y1="130" x2="160" y2="30" stroke="#2563eb" stroke-width="2" />
                                
                                <path d="M 70 130 A 30 30 0 0 0 65 110" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="75" y="125" font-weight="bold" fill="#dc2626">45&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ગોલ્ડન ટ્રીક (આકૃતિ સમજવી):</b><br>
                            વ્યક્તિની આંખ જમીનથી 1.5m ઊંચે છે, એટલે આપણો કાટકોણ ત્રિકોણ (ADE) જમીનથી 1.5m અધ્ધર હવામાં બનશે!<br>
                            આપણે ત્રિકોણની ઊંચાઈ (AE) શોધીશું, અને પછી તેમાં વ્યક્તિની ઊંચાઈ (1.5) ઉમેરીશું એટલે ચિમનીની કુલ ઊંચાઈ (AB) મળી જશે.
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: ત્રિકોણ ADE માં AE શોધવી</b><br>
                            અહીં DE = જમીન પરનું અંતર = 28.5 m (પાસેની બાજુ).<br>
                            સામેની બાજુ (AE) શોધવી છે. તેથી <b>tan 45&deg;</b> વાપરીશું.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                tan 45&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AE (સા.બા.)</span><span>DE (પા.બા.)</span></span><br>
                                
                                <i style='color:#64748b;'>(કોષ્ટકમાં tan 45&deg; ની કિંમત 1 છે - સૌથી સહેલું!)</i><br>
                                1 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AE</span><span>28.5</span></span><br>
                                
                                AE = 28.5 &times; 1<br>
                                <b style='font-size:20px; color:#1d4ed8;'>AE = 28.5 m</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: ચિમનીની કુલ ઊંચાઈ (AB) શોધવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2;'>
                                ચિમનીની કુલ ઊંચાઈ AB = AE + EB<br>
                                <i style='color:#64748b;'>(અહીં EB = વ્યક્તિની ઊંચાઈ = 1.5 m)</i><br>
                                AB = 28.5 + 1.5<br>
                                <b style='font-size:20px; color:#15803d;'>AB = 30 m</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: ચિમનીની કુલ ઊંચાઈ 30 મીટર છે.</p>
                        </div>
                    </div>
                    `
                },
        
                { 
                    question: "ઉદાહરણ 4: ઈમારત પર રહેલો ધ્વજદંડ (બે ઉત્સેધકોણ વાળો દાખલો)", 
                    question_desc: "બોર્ડનો ફેવરિટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> જમીન પરના બિંદુ P થી એક <b>10 મીટર ઊંચી ઈમારત</b> ની ટોચનો ઉત્સેધકોણ <b>30&deg;</b> છે. ઈમારતની ટોચ પર ધ્વજદંડ ફરકાવેલો છે. બિંદુ P થી આ <b>ધ્વજદંડની ટોચનો ઉત્સેધકોણ 45&deg;</b> છે. તો ધ્વજદંડની લંબાઈ અને ઈમારતનું બિંદુ P થી અંતર શોધો. (&radic;3 = 1.732 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="250" height="220" viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="200" x2="220" y2="200" stroke="#475569" stroke-width="3" />
                                
                                <rect x="160" y="100" width="30" height="100" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
                                <text x="195" y="160" font-weight="bold" fill="#1e3a8a">10 m</text>
                                
                                <line x1="175" y1="40" x2="175" y2="100" stroke="#be123c" stroke-width="4" />
                                <text x="185" y="70" font-weight="bold" fill="#be123c">x</text>
                                
                                <line x1="30" y1="200" x2="175" y2="100" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" /> <line x1="30" y1="200" x2="175" y2="40" stroke="#ea580c" stroke-width="2" /> <text x="15" y="215" font-weight="bold">P</text>
                                <text x="150" y="215" font-weight="bold">B (પાયો)</text>
                                <text x="145" y="105" font-weight="bold">A</text>
                                <text x="160" y="30" font-weight="bold">C (ધ્વજ ટોચ)</text>
                                
                                <path d="M 80 200 A 50 50 0 0 0 70 173" fill="none" stroke="#2563eb" stroke-width="2" />
                                <text x="85" y="195" font-weight="bold" fill="#2563eb" font-size="12">30&deg;</text>
                                
                                <path d="M 60 200 A 30 30 0 0 0 52 176" fill="none" stroke="#ea580c" stroke-width="2" />
                                <text x="50" y="165" font-weight="bold" fill="#ea580c" font-size="12">45&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (2 ત્રિકોણ અલગ કરો):</b><br>
                            આકૃતિમાં 2 કાટકોણ ત્રિકોણ છે. બંનેનો પાયો (PB) સરખો છે.<br>
                            1. <b>નાનો ત્રિકોણ PAB (30&deg; વાળો):</b> જેની ઊંચાઈ 10 છે. આના પરથી આપણને પાયો (PB) મળી જશે.<br>
                            2. <b>મોટો ત્રિકોણ PCB (45&deg; વાળો):</b> જેની ઊંચાઈ (10 + x) થશે. આમાં PB ની કિંમત મૂકવાથી ધ્વજદંડ (x) મળી જશે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: નાના ત્રિકોણ &Delta;PAB માં ગણતરી (PB શોધવા)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                tan 30&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB</span><span>PB</span></span><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10</span><span>PB</span></span><br>
                                
                                <i style='color:#64748b;'>(ચોકડી ગુણાકાર કરતાં)</i><br>
                                PB = 10&radic;3<br>
                                PB = 10 &times; 1.732<br>
                                <b style='font-size:18px; color:#15803d;'>PB = 17.32 મીટર</b> (આ ઈમારતનું અંતર છે).
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: મોટા ત્રિકોણ &Delta;PCB માં ગણતરી (ધ્વજદંડ x શોધવા)</b><br>
                            અહીં કુલ ઊંચાઈ CB = ઈમારત (10) + ધ્વજદંડ (x) = <b>(10 + x)</b> થશે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                tan 45&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>CB</span><span>PB</span></span><br>
                                
                                <i style='color:#64748b;'>(tan 45&deg; ની કિંમત 1 છે)</i><br>
                                1 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10 + x</span><span>10&radic;3</span></span><br>
                                
                                10&radic;3 = 10 + x<br>
                                x = 10&radic;3 - 10<br>
                                
                                <i style='color:#64748b;'>(બંનેમાંથી 10 સામાન્ય કાઢતાં)</i><br>
                                x = 10(&radic;3 - 1)<br>
                                x = 10(1.732 - 1)<br>
                                x = 10(0.732)<br>
                                <b style='font-size:18px; color:#1d4ed8;'>x = 7.32 મીટર</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: ઈમારતથી અંતર 17.32 મીટર અને ધ્વજદંડની લંબાઈ 7.32 મીટર છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 5: સૂર્યના ઉત્સેધકોણ બદલાવાથી પડછાયાની લંબાઈ", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સૂર્યનો ઉત્સેધકોણ <b>60&deg; થી ઘટીને 30&deg;</b> થતાં, જમીન પર ઊભેલા ટાવરના પડછાયાની લંબાઈમાં <b>40 મીટરનો વધારો</b> થાય છે. તો ટાવરની ઊંચાઈ શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>આકૃતિની સમજૂતી:</b><br>
                            ધારો કે ટાવરની ઊંચાઈ <b style='color:#be123c;'>h</b> છે. શરૂઆતમાં (જ્યારે ખૂણો 60&deg; હતો) પડછાયો <b style='color:#1d4ed8;'>x</b> હતો. પછી ખૂણો 30&deg; થયો એટલે પડછાયો 40 મીટર વધ્યો, તેથી હવે કુલ પડછાયો <b style='color:#047857;'>(x + 40)</b> થશે.
                        </div>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="260" height="180" viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="150" x2="250" y2="150" stroke="#475569" stroke-width="3" />
                                
                                <line x1="200" y1="30" x2="200" y2="150" stroke="#b91c1c" stroke-width="6" />
                                <text x="210" y="90" font-weight="bold" fill="#be123c">h</text>
                                <text x="195" y="20" font-weight="bold">A</text>
                                <text x="195" y="170" font-weight="bold">B</text>
                                
                                <line x1="140" y1="150" x2="200" y2="30" stroke="#2563eb" stroke-width="2" />
                                <text x="135" y="170" font-weight="bold">C</text>
                                <text x="165" y="145" font-weight="bold" fill="#1d4ed8">x</text>
                                <path d="M 160 150 A 20 20 0 0 0 152 125" fill="none" stroke="#2563eb" stroke-width="2" />
                                <text x="160" y="130" font-size="12" fill="#2563eb">60&deg;</text>
                                
                                <line x1="40" y1="150" x2="200" y2="30" stroke="#047857" stroke-width="2" />
                                <text x="35" y="170" font-weight="bold">D</text>
                                <text x="80" y="170" font-weight="bold" fill="#047857">40 m</text>
                                <path d="M 80 150 A 40 40 0 0 0 70 128" fill="none" stroke="#047857" stroke-width="2" />
                                <text x="80" y="140" font-size="12" fill="#047857">30&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 1: નાના ત્રિકોણ &Delta;ABC માં (60&deg;)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; line-height:2.5;'>
                                tan 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AB</span><span>BC</span></span><br>
                                &radic;3 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>x</span></span><br>
                                <b style='color:#1d4ed8;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>&radic;3</span></span> &nbsp; ... (સમીકરણ 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: મોટા ત્રિકોણ &Delta;ABD માં (30&deg;)</b><br>
                            અહીં પાયો DB = x + 40 છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                tan 30&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>x + 40</span></span><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>x + 40</span></span><br>
                                
                                <i style='color:#64748b;'>(ચોકડી ગુણાકાર)</i><br>
                                x + 40 = h&radic;3<br>
                                
                                <i style='color:#64748b;'>(સમીકરણ 1 પરથી x ની કિંમત h/&radic;3 મૂકતાં)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>&radic;3</span></span> + 40 = h&radic;3<br>
                                
                                40 = h&radic;3 - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>&radic;3</span></span><br>
                                
                                <i style='color:#64748b;'>(લ.સા.અ. લેતાં: &radic;3 &times; &radic;3 = 3)</i><br>
                                40 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3h - h</span><span>&radic;3</span></span><br>
                                40 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2h</span><span>&radic;3</span></span><br>
                                
                                2h = 40&radic;3<br>
                                h = 40&radic;3 / 2<br>
                                <b style='font-size:20px; color:#15803d;'>h = 20&radic;3 મીટર</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: ટાવરની ઊંચાઈ 20&radic;3 મીટર છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 6: બહુમાળી ઈમારત અને અવસેધકોણ (Z આકારનો નિયમ)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક <b>બહુમાળી ઈમારત</b>ની ટોચ પરથી જોતાં એક <b>8 મીટર ઊંચી</b> ઈમારતની ટોચ અને તળિયાના <b>અવસેધકોણ અનુક્રમે 30&deg; અને 45&deg;</b> છે. બહુમાળી ઈમારતની ઊંચાઈ અને બંને વચ્ચેનું અંતર શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ગોલ્ડન ટ્રીક (અવસેધકોણ હોય ત્યારે):</b><br>
                            હંમેશા યાદ રાખો કે અવસેધકોણ (ઉપરથી બનતો ખૂણો) એ <b>યુગ્મકોણ (Z આકાર)</b> ના નિયમ મુજબ નીચેના <b>ઉત્સેધકોણ બરાબર જ થાય</b> છે. એટલે દાખલો ગણવામાં એકદમ સહેલો પડી જશે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: આકૃતિ અને ધારણા</b><br>
                            ધારો કે બહુમાળી ઈમારત PC = h છે, અને બંને વચ્ચેનું અંતર AC = x છે.<br>
                            નાની ઈમારત AB = 8 m છે.<br>
                            PC માંથી આપણે એક લાઇન BD દોરીએ, તો DC = AB = 8 m થશે.<br>
                            તેથી ઉપરનો ભાગ <b>PD = h - 8</b> થશે.
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 2: મોટા ત્રિકોણ &Delta;PAC માં (45&deg;)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                tan 45&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>PC</span><span>AC</span></span><br>
                                1 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h</span><span>x</span></span><br>
                                <b style='color:#be123c;'>x = h &nbsp; ... (એટલે કે બંને ઈમારત વચ્ચેનું અંતર અને બહુમાળીની ઊંચાઈ સરખી છે!)</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: નાના ત્રિકોણ &Delta;PDB માં (30&deg;)</b><br>
                            અહીં PD = h - 8 અને પાયો DB = x છે (જે h બરાબર છે).<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                tan 30&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>PD</span><span>DB</span></span><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>&radic;3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>h - 8</span><span>x</span></span><br>
                                
                                <i style='color:#64748b;'>(x ની જગ્યાએ h મૂકતાં)</i><br>
                                x = &radic;3(h - 8)<br>
                                h = h&radic;3 - 8&radic;3<br>
                                
                                <i style='color:#64748b;'>(8&radic;3 ને ડાબી બાજુ અને h ને જમણી બાજુ લઈ જતાં)</i><br>
                                8&radic;3 = h&radic;3 - h<br>
                                8&radic;3 = h(&radic;3 - 1)<br>
                                
                                h = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8&radic;3</span><span>&radic;3 - 1</span></span><br>
                                
                                <i style='color:#64748b;'>(છેદનું સંમેયીકરણ કરતાં: ઉપર-નીચે (&radic;3 + 1) વડે ગુણતા)</i><br>
                                h = 4&radic;3(&radic;3 + 1) <br>
                                <b style='font-size:18px; color:#1d4ed8;'>h = 12 + 4&radic;3 મીટર</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold;'>જવાબ: બહુમાળી ઈમારતની ઊંચાઈ અને બંને વચ્ચેનું અંતર બંને 12 + 4&radic;3 મીટર છે.</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
            ,
        // ------------------------------------
        // પ્રકરણ 10: વર્તુળ (ઉદાહરણના દાખલા)
        // ------------------------------------
        "10": {
            "chapterName": "પ્રકરણ 10 (ઉદાહરણ)",
            "chapterTitle": "વર્તુળ - ઉદાહરણના દાખલા",
            "qa_list": [
                { 
                    question: "ઉદાહરણ 1: સમકેન્દ્રી વર્તુળોની જીવા (સાબિતી)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સાબિત કરો કે બે સમકેન્દ્રી વર્તુળોમાં, મોટા વર્તુળની જીવા જે નાના વર્તુળને સ્પર્શે છે, તે સ્પર્શબિંદુએ દુભાગે છે (એટલે કે તેના બે સરખા ભાગ થાય છે).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="240" height="200" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="120" cy="100" r="80" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
                                <circle cx="120" cy="100" r="45" fill="#dcfce7" stroke="#047857" stroke-width="2" />
                                
                                <circle cx="120" cy="100" r="4" fill="#000" />
                                <text x="115" y="90" font-weight="bold">O</text>
                                
                                <line x1="55" y1="145" x2="185" y2="145" stroke="#be123c" stroke-width="3" />
                                <text x="40" y="150" font-weight="bold" fill="#be123c">A</text>
                                <text x="195" y="150" font-weight="bold" fill="#be123c">B</text>
                                
                                <circle cx="120" cy="145" r="4" fill="#000" />
                                <text x="115" y="165" font-weight="bold">P</text>
                                
                                <line x1="120" y1="100" x2="120" y2="145" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
                                
                                <polyline points="110,145 110,135 120,135" fill="none" stroke="black" stroke-width="1.5" />
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (ફક્ત 2 જ નિયમો યાદ રાખો):</b><br>
                            1. <b>પ્રમેય 10.1:</b> સ્પર્શક અને ત્રિજ્યા હંમેશા કાટખૂણે (90&deg;) હોય. (OP &perp; AB).<br>
                            2. <b>ધોરણ 9 નો પ્રમેય:</b> વર્તુળના કેન્દ્રમાંથી જીવા પર દોરેલો લંબ જીવાને દુભાગે છે! બસ દાખલો પૂરો.
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>✍️ સાબિતી:</b><br>
                            <ul style='line-height:2; font-size:15px; margin-bottom:0;'>
                                <li>અહીં કેન્દ્ર O વાળા બે સમકેન્દ્રી વર્તુળો C₁ (મોટું) અને C₂ (નાનું) છે.</li>
                                <li>AB એ મોટા વર્તુળ C₁ ની જીવા છે, જે નાના વર્તુળ C₂ ને P બિંદુએ સ્પર્શે છે.</li>
                                <li>તેથી, <b>AB એ નાના વર્તુળ C₂ નો સ્પર્શક બને</b> છે અને OP તેની ત્રિજ્યા છે.</li>
                                <li>પ્રમેય 10.1 મુજબ, સ્પર્શક એ ત્રિજ્યાને લંબ હોય છે. તેથી <b style='color:#be123c;'>OP &perp; AB</b> થાય.</li>
                                <li>હવે મોટા વર્તુળ C₁ માટે વિચારો: AB તેની જીવા છે અને OP એ કેન્દ્ર O માંથી દોરેલો લંબ છે.</li>
                                <li>આપણે જાણીએ છીએ કે કેન્દ્રમાંથી જીવા પર દોરેલો લંબ જીવાને <b>દુભાગે (બે સમાન ભાગ કરે)</b> છે.</li>
                            </ul>
                            <div style='font-size:18px; font-weight:bold; color:#16a34a; text-align:center; padding:10px; background-color:#dcfce7; border-radius:5px; margin-top:10px;'>
                                તેથી, AP = PB. (સાબિત થાય છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 ઉદાહરણ 2: ∠PTQ = 2∠OPQ સાબિત કરો", 
                    question_desc: "બોર્ડમાં પૂછાતો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> કેન્દ્ર O વાળા વર્તુળના બહારના બિંદુ T માંથી વર્તુળને બે સ્પર્શકો TP અને TQ દોરેલા છે. સાબિત કરો કે <b>&angle;PTQ = 2&angle;OPQ</b>.</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="260" height="180" viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="80" cy="90" r="50" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
                                
                                <circle cx="80" cy="90" r="4" fill="#000" />
                                <text x="60" y="95" font-weight="bold">O</text>
                                
                                <circle cx="230" cy="90" r="4" fill="#dc2626" />
                                <text x="240" y="95" font-weight="bold" fill="#dc2626">T</text>
                                
                                <line x1="230" y1="90" x2="105" y2="45" stroke="#2563eb" stroke-width="2.5" />
                                <line x1="230" y1="90" x2="105" y2="135" stroke="#2563eb" stroke-width="2.5" />
                                
                                <circle cx="105" cy="45" r="4" fill="#000" />
                                <text x="95" y="35" font-weight="bold">P</text>
                                <circle cx="105" cy="135" r="4" fill="#000" />
                                <text x="95" y="155" font-weight="bold">Q</text>
                                
                                <line x1="105" y1="45" x2="105" y2="135" stroke="#ea580c" stroke-width="2" />
                                
                                <line x1="80" y1="90" x2="105" y2="45" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
                                <line x1="80" y1="90" x2="105" y2="135" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
                                
                                <path d="M 210 90 A 20 20 0 0 0 215 80" fill="none" stroke="#dc2626" stroke-width="2" />
                                <path d="M 210 90 A 20 20 0 0 1 215 100" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="195" y="95" font-weight="bold" fill="#dc2626">&theta;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: &theta; ધારવો અને સમદ્વિબાજુ ત્રિકોણનો ઉપયોગ</b><br>
                            ધારો કે બહારનો ખૂણો <b>&angle;PTQ = &theta;</b> છે.<br>
                            પ્રમેય 10.2 મુજબ, બહારના બિંદુમાંથી દોરેલા સ્પર્શકો સમાન હોય છે, તેથી <b style='color:#1d4ed8;'>TP = TQ</b> થાય.<br>
                            આમ, &Delta;TPQ એ <b>સમદ્વિબાજુ ત્રિકોણ</b> બને છે, જેમાં સમાન બાજુની સામેના ખૂણા સમાન હોય: <b>&angle;TPQ = &angle;TQP</b>.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: &angle;TPQ નું માપ શોધવું</b><br>
                            ત્રિકોણના ત્રણેય ખૂણાનો સરવાળો 180&deg; થાય.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                &angle;TPQ + &angle;TQP + &angle;PTQ = 180&deg;<br>
                                &angle;TPQ + &angle;TPQ + &theta; = 180&deg; <i style='color:#64748b;'>(બંને ખૂણા સરખા છે)</i><br>
                                2&angle;TPQ = 180&deg; - &theta;<br>
                                &angle;TPQ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>180&deg; - &theta;</span><span>2</span></span><br>
                                <b style='color:#047857;'>&angle;TPQ = 90&deg; - &theta;/2</b> &nbsp;&nbsp; ... (પરિણામ 1)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: પ્રમેય 10.1 લગાડી સાબિતી પૂરી કરવી</b><br>
                            પ્રમેય 10.1 મુજબ, ત્રિજ્યા (OP) એ સ્પર્શક (TP) ને લંબ હોય છે.<br>
                            તેથી, <b>આખો ખૂણો &angle;OPT = 90&deg;</b> થાય.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                હવે આકૃતિ પરથી જુઓ:<br>
                                &angle;OPQ = આખો ખૂણો (&angle;OPT) - બહારનો ખૂણો (&angle;TPQ)<br>
                                &angle;OPQ = 90&deg; - (90&deg; - &theta;/2) <i style='color:#64748b;'>(પરિણામ 1 પરથી)</i><br>
                                &angle;OPQ = 90&deg; - 90&deg; + &theta;/2<br>
                                &angle;OPQ = &theta;/2<br>
                                
                                <i style='color:#be123c;'>(2 ને સામે ગુણાકારમાં લઈ જતાં)</i><br>
                                2&angle;OPQ = &theta;
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#be123c;'>પરંતુ આપણે &theta; = &angle;PTQ ધાર્યો હતો, તેથી:<br>
                            <b style='font-size:18px; color:#1d4ed8;'>&angle;PTQ = 2&angle;OPQ</b> (સાબિત થાય છે).</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 ઉદાહરણ 3: સ્પર્શક TP ની લંબાઈ શોધવી (3 માર્ક્સનો લાંબો દાખલો)", 
                    question_desc: "પાયથાગોરસ અને સમરૂપતાનો શ્રેષ્ઠ સમન્વય",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> <b>5 સેમી ત્રિજ્યાવાળા</b> વર્તુળની <b>8 સેમી લંબાઈની જીવા PQ</b> છે. P અને Q માંથી પસાર થતા સ્પર્શકો બિંદુ T માં છેદે છે. <b>સ્પર્શક TP ની લંબાઈ</b> શોધો.</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="260" height="180" viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="80" cy="90" r="50" fill="#fcf8ff" stroke="#6366f1" stroke-width="2" />
                                
                                <circle cx="80" cy="90" r="4" fill="#000" />
                                <text x="60" y="95" font-weight="bold">O</text>
                                
                                <circle cx="240" cy="90" r="4" fill="#dc2626" />
                                <text x="245" y="95" font-weight="bold" fill="#dc2626">T</text>
                                
                                <line x1="240" y1="90" x2="110" y2="50" stroke="#be123c" stroke-width="2.5" />
                                <line x1="240" y1="90" x2="110" y2="130" stroke="#be123c" stroke-width="2.5" />
                                
                                <circle cx="110" cy="50" r="4" fill="#000" />
                                <text x="100" y="40" font-weight="bold">P</text>
                                <circle cx="110" cy="130" r="4" fill="#000" />
                                <text x="100" y="150" font-weight="bold">Q</text>
                                
                                <line x1="110" y1="50" x2="110" y2="130" stroke="#16a34a" stroke-width="2" />
                                
                                <line x1="80" y1="90" x2="240" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,5" />
                                
                                <circle cx="110" cy="90" r="4" fill="#2563eb" />
                                <text x="115" y="85" font-weight="bold" fill="#2563eb">R</text>
                                
                                <line x1="80" y1="90" x2="110" y2="50" stroke="#000" stroke-width="1" />
                                <text x="80" y="65" font-size="12" font-weight="bold">5 cm</text>
                                <text x="115" y="70" font-size="12" fill="#16a34a" font-weight="bold">4 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (શોર્ટકટ રીત વાપરો!):</b><br>
                            આ દાખલાને ગણવાની બે રીતો છે: એક પાયથાગોરસની (જે ખૂબ લાંબી અને અઘરી છે) અને બીજી <b>સમરૂપતા (Similarity) ની શોર્ટકટ રીત</b>. આપણે બોર્ડમાં પૂરા માર્ક્સ અપાવે તેવી <b>સૌથી સહેલી શોર્ટકટ રીત</b> થી ગણીશું!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: નાનો કાટકોણ ત્રિકોણ &Delta;POR ઉકેલવો</b><br>
                            અહીં OT એ જીવા PQ નો લંબદ્વિભાજક બને છે (એટલે કે 90&deg; નો ખૂણો બનાવે અને જીવાના બે સરખા ભાગ કરે).<br>
                            આખી જીવા PQ = 8 છે, તેથી તેનો અડધો ભાગ <b style='color:#16a34a;'>PR = 4 cm</b> થાય.<br>
                            ત્રિજ્યા <b style='color:#0f172a;'>OP = 5 cm</b> આપેલ છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                પાયથાગોરસ મુજબ &Delta;POR માં:<br>
                                OR&sup2; = OP&sup2; - PR&sup2;<br>
                                OR&sup2; = 5&sup2; - 4&sup2; = 25 - 16 = 9<br>
                                <b style='font-size:18px; color:#15803d;'>OR = 3 cm</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 🚀 સમરૂપતાની શોર્ટકટ ટ્રીક (સીધો જવાબ!)</b><br>
                            અહીં બે કાટકોણ ત્રિકોણ <b>&Delta;TPR</b> અને <b>&Delta;PRO</b> બંને <b>સમરૂપ ત્રિકોણો</b> છે (ખૂ.ખૂ. શરત મુજબ).<br>
                            જ્યારે બે ત્રિકોણ સમરૂપ હોય, ત્યારે તેમની બાજુઓનો ગુણોત્તર સમાન થાય!<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>TP (મોટાનો કર્ણ)</span><span>OP (નાનાનો કર્ણ)</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>PR (મોટાની બાજુ)</span><span>OR (નાનાની બાજુ)</span></span><br>
                                
                                <i style='color:#64748b;'>(કિંમતો મૂકતાં: OP=5, PR=4, OR=3)</i><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>TP</span><span>5</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span><br>
                                
                                <i style='color:#64748b;'>(5 ને સામે ગુણાકારમાં લઈ જતાં)</i><br>
                                TP = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4 &times; 5</span><span>3</span></span><br>
                                
                                <b style='font-size:20px; color:#be123c;'>TP = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>20</span><span>3</span></span> cm</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: સ્પર્શક TP ની લંબાઈ 20/3 cm છે.</p>
                            <p style='font-size:14px; color:#64748b; margin-bottom:0;'>(નોંધ: તમે આ દાખલો ચોપડીની x અને y ધારવા વાળી પાયથાગોરસની લાંબી રીતથી પણ ગણી શકો, પણ બોર્ડમાં આ સમરૂપતાની રીત સમય બચાવશે અને ભૂલ નહિ પડે).</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 11: વર્તુળ સંબંધિત ક્ષેત્રફળ (ઉદાહરણના દાખલા)
        // ------------------------------------
        "11": {
            "chapterName": "પ્રકરણ 11 (ઉદાહરણ)",
            "chapterTitle": "વર્તુળ સંબંધિત ક્ષેત્રફળ - ઉદાહરણ",
            "qa_list": [
                { 
                    question: "ઉદાહરણ 1: પિઝાનો ટુકડો (લઘુવૃત્તાંશ અને ગુરુવૃત્તાંશનું ક્ષેત્રફળ)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> <b>4 સેમી ત્રિજ્યાવાળા</b> અને કેન્દ્ર આગળ <b>30&deg; નો ખૂણો</b> બનાવતા વર્તુળના <b>વૃત્તાંશનું ક્ષેત્રફળ</b> શોધો. વળી, <b>ગુરુવૃત્તાંશનું ક્ષેત્રફળ</b> પણ શોધો. (&pi; = 3.14 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="110" cy="110" r="90" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" />
                                
                                <path d="M 110 110 L 196 85 A 90 90 0 1 0 196 135 Z" fill="#e0f2fe" />
                                <text x="60" y="80" fill="#0369a1" font-weight="bold">ગુરુવૃત્તાંશ</text>
                                
                                <path d="M 110 110 L 196 85 A 90 90 0 0 1 196 135 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
                                <text x="145" y="115" fill="#a16207" font-weight="bold" font-size="12">લઘુવૃત્તાંશ</text>
                                
                                <circle cx="110" cy="110" r="4" fill="#000" />
                                <text x="95" y="115" font-weight="bold">O</text>
                                
                                <path d="M 140 100 A 30 30 0 0 1 140 120" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="145" y="115" fill="#dc2626" font-weight="bold" font-size="12">30&deg;</text>
                                
                                <text x="150" y="90" font-weight="bold" fill="#0f172a" font-size="12">4 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ડેટા અને સૂત્ર:</b><br>
                            અહીં ત્રિજ્યા <b style='color:#1d4ed8;'>r = 4 cm</b> અને ખૂણો <b style='color:#be123c;'>&theta; = 30&deg;</b> છે.<br>
                            લઘુવૃત્તાંશનું ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>&theta;</span><span>360&deg;</span></span> &times; &pi;r&sup2;
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: લઘુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>30</span><span>360</span></span> &times; 3.14 &times; (4)&sup2;<br>
                                
                                <i style='color:#64748b;'>(30 અને 360 નો છેદ ઉડાડતાં 1/12 વધે)</i><br>
                                ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>12</span></span> &times; 3.14 &times; 16<br>
                                
                                <i style='color:#64748b;'>(12 અને 16 બંને 4 ના ઘડિયામાં આવે: 4&times;3=12, 4&times;4=16)</i><br>
                                ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.14 &times; 4</span><span>3</span></span><br>
                                
                                ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12.56</span><span>3</span></span><br>
                                
                                <b style='font-size:20px; color:#15803d;'>લઘુવૃત્તાંશ = 4.19 cm&sup2; (આશરે)</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: ગુરુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            ગુરુવૃત્તાંશ = <b>આખા વર્તુળનું ક્ષેત્રફળ - લઘુવૃત્તાંશનું ક્ષેત્રફળ</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                વર્તુળનું ક્ષેત્રફળ = &pi;r&sup2; = 3.14 &times; (4)&sup2;<br>
                                વર્તુળનું ક્ષેત્રફળ = 3.14 &times; 16 = <b style='color:#1d4ed8;'>50.24 cm&sup2;</b><br><br>
                                
                                ગુરુવૃત્તાંશ = 50.24 - 4.19<br>
                                <b style='font-size:20px; color:#047857;'>ગુરુવૃત્તાંશ = 46.05 cm&sup2;</b>
                            </div>
                            <p style='margin-top:10px; color:#0f172a; font-weight:bold;'>જવાબ: લઘુવૃત્તાંશ 4.19 cm&sup2; અને ગુરુવૃત્તાંશ 46.05 cm&sup2; છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 ઉદાહરણ 2: તરબૂચની ચીરી (વૃત્તખંડનું ક્ષેત્રફળ અને ત્રિકોણની ગણતરી)", 
                    question_desc: "બોર્ડની પરીક્ષા માટે મોસ્ટ IMP (ત્રિકોણમિતિનો ઉપયોગ)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> <b>21 સેમી ત્રિજ્યાવાળા</b> વર્તુળમાં કેન્દ્ર આગળ <b>120&deg; નો ખૂણો</b> બને છે. તો તેને અનુરૂપ <b>વૃત્તખંડ (Segment)</b> નું ક્ષેત્રફળ શોધો. (&pi; = 22/7 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="240" height="180" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 20 50 A 100 100 0 0 0 220 50" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" />
                                
                                <polygon points="120,150 40,50 200,50" fill="#ffffff" stroke="#334155" stroke-width="1.5" />
                                
                                <line x1="40" y1="50" x2="200" y2="50" stroke="#be123c" stroke-width="2" />
                                
                                <path d="M 40 50 A 100 100 0 0 0 200 50 Z" fill="#fecdd3" stroke="#be123c" stroke-width="2" />
                                <text x="120" y="80" fill="#9f1239" font-weight="bold" font-size="12" text-anchor="middle">વૃત્તખંડ</text>
                                
                                <circle cx="120" cy="150" r="4" fill="#000" />
                                <text x="115" y="165" font-weight="bold">O</text>
                                <line x1="120" y1="150" x2="120" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />
                                <text x="115" y="45" font-weight="bold" fill="#2563eb">M</text>
                                
                                <text x="25" y="45" font-weight="bold">A</text>
                                <text x="205" y="45" font-weight="bold">B</text>
                                
                                <text x="60" y="115" font-weight="bold" fill="#0f172a" font-size="12">21 cm</text>
                                <path d="M 105 130 A 25 25 0 0 1 135 130" fill="none" stroke="#dc2626" stroke-width="2" />
                                <text x="120" y="125" fill="#dc2626" font-weight="bold" font-size="10" text-anchor="middle">120&deg;</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (સૂત્ર):</b><br>
                            <b style='color:#be123c;'>વૃત્તખંડ = આખા પિઝાનો ટુકડો (વૃત્તાંશ) - ત્રિકોણની સાઈઝ (&Delta;AOB)</b><br>
                            અહીં ખૂણો 120&deg; છે, એટલે ત્રિકોણનું ક્ષેત્રફળ શોધવા આપણે તેને વચ્ચેથી કાપીને બે 60&deg; ના કાટકોણ ત્રિકોણ બનાવીશું (ત્રિકોણમિતિનો ઉપયોગ કરીશું).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: આખા વૃત્તાંશ (OAPB) નું ક્ષેત્રફળ</b><br>
                            અહીં r = 21 cm, &theta; = 120&deg;.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                વૃત્તાંશ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>120</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 21 &times; 21<br>
                                
                                <i style='color:#64748b;'>(120 અને 360 નો છેદ ઊડતા 1/3 વધશે)</i><br>
                                વૃત્તાંશ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 21 &times; 21<br>
                                
                                <i style='color:#64748b;'>(છેદમાં 3 &times; 7 = 21 થાય, જે ઉપરના એક 21 સાથે ઉડી જશે)</i><br>
                                વૃત્તાંશ = 22 &times; 21<br>
                                <b style='font-size:18px; color:#15803d;'>વૃત્તાંશ = 462 cm&sup2;</b> &nbsp;&nbsp; ... (પરિણામ 1)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: ત્રિકોણ AOB નું ક્ષેત્રફળ શોધવું (ત્રિકોણમિતિનો જાદુ)</b><br>
                            કેન્દ્ર O માંથી જીવા AB પર લંબ OM દોરો. <br>
                            આ લંબ ખૂણા 120&deg; ના બે સરખા ભાગ (60&deg; - 60&deg;) કરશે અને જીવા AB ના પણ 2 સરખા ભાગ (AM અને MB) કરશે.<br>
                            હવે કાટકોણ ત્રિકોણ &Delta;OMA માં ખૂણો 60&deg; છે અને કર્ણ (OA) = 21 છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>પાયો (AM) શોધવા:</b><br>
                                sin 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AM</span><span>OA</span></span> &nbsp;&rArr;&nbsp; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>AM</span><span>21</span></span> &nbsp;&rArr;&nbsp; <b style='color:#1d4ed8;'>AM = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>21&radic;3</span><span>2</span></span></b><br>
                                આખી જીવા <b>AB</b> = 2 &times; AM = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21&radic;3</span><span>2</span></span> = <b style='color:#1d4ed8;'>21&radic;3 cm</b><br><br>
                                
                                <b style='color:#0f172a;'>વેધ (OM) શોધવા:</b><br>
                                cos 60&deg; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>OM</span><span>OA</span></span> &nbsp;&rArr;&nbsp; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>OM</span><span>21</span></span> &nbsp;&rArr;&nbsp; <b style='color:#1d4ed8;'>OM = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>21</span><span>2</span></span> cm</b>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <b>ત્રિકોણ AOB નું ક્ષેત્રફળ</b> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; પાયો(AB) &times; વેધ(OM)<br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; (21&radic;3) &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>2</span></span>)<br>
                                <b style='font-size:18px; color:#1d4ed8;'>&Delta;AOB = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>441&radic;3</span><span>4</span></span> cm&sup2;</b> &nbsp;&nbsp; ... (પરિણામ 2)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f;'>સ્ટેપ 3: ફાઇનલ જવાબ (વૃત્તખંડનું ક્ષેત્રફળ)</b><br>
                            <p style='margin-top:5px;'>વૃત્તખંડ = વૃત્તાંશ - ત્રિકોણ AOB</p>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:22px; font-weight:bold; color:#be123c; background-color:#fce7f3; padding:15px; border-radius:8px; text-align:center;'>
                                વૃત્તખંડ = 462 - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>441&radic;3</span><span>4</span></span> cm&sup2;
                            </div>
                            <p style='margin-top:10px; font-size:14px; color:#64748b; text-align:center;'>(નોંધ: બોર્ડની પરીક્ષામાં &radic;3 ની કિંમત ન આપી હોય તો અહીં જ દાખલો પૂરો કરી દેવો, પૂરા માર્ક્સ મળશે!)</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
        // ------------------------------------
        // પ્રકરણ 12: પૃષ્ઠફળ અને ઘનફળ (ઉદાહરણ ભાગ 1)
        // ------------------------------------
        "12": {
            "chapterName": "પ્રકરણ 12 (ઉદાહરણ 1)",
            "chapterTitle": "પૃષ્ઠફળ અને ઘનફળ - ભાગ 1",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: સંયોજિત ઘનાકારોનું પૃષ્ઠફળ શોધવા સૂત્ર કેવી રીતે બનાવવું?",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>જ્યારે 2 આકારો જોડાયેલા હોય, ત્યારે ક્યારેય તેમના કુલ પૃષ્ઠફળ (TSA) નો સરવાળો ન કરવો!</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #f59e0b;'>
                            <b style='color:#b45309;'>ગોલ્ડન રૂલ:</b><br>
                            આપણે ફક્ત એ જ ભાગનું ક્ષેત્રફળ શોધવાનું છે જેને આપણે <b>બહારથી સ્પર્શ કરી શકીએ (કે કલર કરી શકીએ)</b>.<br>
                            જે ભાગ જોડાણમાં અંદર દબાઈ જાય છે, તેને ગણતરીમાં લેવો નહિ.<br>
                            મોટાભાગના દાખલામાં સૂત્ર: <b style='color:#be123c;'>પહેલા આકારનું વક્ર પૃષ્ઠફળ (CSA) + બીજા આકારનું વક્ર પૃષ્ઠફળ (CSA)</b> જ બનશે!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 1: રશીદનો ભમરડો (શંકુ + અર્ધગોલક)", 
                    question_desc: "સૂત્ર બનાવતા શીખવા માટે બેસ્ટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> રશીદને તેના જન્મદિવસે ભેટ સ્વરૂપે એક ભમરડો મળ્યો. આ ભમરડો <b>શંકુની ઉપર અર્ધગોલક</b> લગાવેલ હોય તેવો છે. ભમરડાની <b>કુલ ઊંચાઈ 5 સેમી</b> અને અર્ધગોલકનો <b>વ્યાસ 3.5 સેમી</b> છે. તો ભમરડાનું <b>કુલ પૃષ્ઠફળ</b> શોધો. (&pi; = 22/7 લો).</p>
                        
                        
                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="200" height="240" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 50 80 A 50 50 0 0 1 150 80" fill="#fecaca" stroke="#be123c" stroke-width="2"/>
                                <ellipse cx="100" cy="80" rx="50" ry="15" fill="none" stroke="#be123c" stroke-dasharray="4,4" />
                                
                                <path d="M 50 80 L 100 200 L 150 80" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                
                                <line x1="170" y1="30" x2="170" y2="200" stroke="#475569" stroke-width="1.5" />
                                <line x1="165" y1="30" x2="175" y2="30" stroke="#475569" stroke-width="1.5" />
                                <line x1="165" y1="200" x2="175" y2="200" stroke="#475569" stroke-width="1.5" />
                                <text x="180" y="120" font-weight="bold" fill="#0f172a">5 cm</text>
                                
                                <line x1="50" y1="20" x2="150" y2="20" stroke="#475569" stroke-width="1.5" />
                                <line x1="50" y1="15" x2="50" y2="25" stroke="#475569" stroke-width="1.5" />
                                <line x1="150" y1="15" x2="150" y2="25" stroke="#475569" stroke-width="1.5" />
                                <text x="75" y="15" font-weight="bold" fill="#0f172a">3.5 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સ્ટેપ 1: સૂત્ર કેવી રીતે બનશે?</b><br>
                            આપણે ભમરડાને બહારથી જ કલર કરી શકીએ. વચ્ચેનો ગોળ ભાગ અંદર દબાઈ ગયો છે.<br>
                            તેથી, <b>ભમરડાનું કુલ પૃષ્ઠફળ = અર્ધગોલકની વક્ર સપાટી (CSA) + શંકુની વક્ર સપાટી (CSA)</b><br>
                            <b style='color:#be123c;'>સૂત્ર: 2&pi;r&sup2; + &pi;rl</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 2: બધી કિંમતો (r, h અને l) શોધવી</b><br>
                            વ્યાસ (d) = 3.5 સેમી. તેથી ત્રિજ્યા (r) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>3.5</span><span>2</span></span> = <b style='color:#15803d;'>1.75 સેમી.</b><br>
                            અથવા ગણતરી સહેલી કરવા 3.5 એટલે 7 ના અડધા (7/2) થાય, તેથી <b>r = 7/4</b> પણ લઈ શકાય.<br><br>
                            
                            શંકુની ઊંચાઈ (h) = કુલ ઊંચાઈ - અર્ધગોલકની ત્રિજ્યા<br>
                            h = 5 - 1.75 = <b style='color:#15803d;'>3.25 સેમી.</b><br><br>
                            
                            <b style='color:#047857;'>શંકુની ત્રાંસી ઊંચાઈ (l) શોધવી:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                l = &radic;(r&sup2; + h&sup2;)<br>
                                l = &radic;((1.75)&sup2; + (3.25)&sup2;)<br>
                                l = &radic;(3.0625 + 10.5625)<br>
                                l = &radic;(13.625) <br>
                                <b style='color:#047857;'>l &approx; 3.7 સેમી (આશરે)</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: સૂત્રમાં કિંમત મૂકી ગણતરી કરવી</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                પૃષ્ઠફળ = 2&pi;r&sup2; + &pi;rl<br>
                                
                                <i style='color:#64748b;'>(બંનેમાંથી &pi;r સામાન્ય કાઢતાં ગણતરી સહેલી બનશે)</i><br>
                                પૃષ્ઠફળ = &pi;r (2r + l)<br>
                                
                                પૃષ્ઠફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.5</span><span>2</span></span> &times; [ 2(1.75) + 3.7 ]<br>
                                
                                <i style='color:#64748b;'>(અહીં 3.5 એટલે 7/2. 7 અને 7 ઊડી જશે. 2 અને 22 નો ભાગ ચાલતા 11 વધશે. અને છેદમાં 2 વધશે.)</i><br>
                                પૃષ્ઠફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> &times; [ 3.5 + 3.7 ]<br>
                                
                                પૃષ્ઠફળ = 5.5 &times; 7.2<br>
                                <b style='font-size:20px; color:#1d4ed8;'>પૃષ્ઠફળ = 39.6 cm&sup2; (આશરે)</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: ભમરડાનું કુલ પૃષ્ઠફળ 39.6 cm&sup2; છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 2: સુશોભન માટેનો બ્લોક (સમઘન + અર્ધગોલક)", 
                    question_desc: "સૌથી વધુ ભૂલ પડતો દાખલો, શોર્ટકટ ટ્રીક સાથે",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> સુશોભન માટેનો એક બ્લોક <b>સમઘન અને અર્ધગોલક</b> થી બનેલો છે. નીચેનો પાયો <b>5 સેમી કોર (બાજુ) વાળો સમઘન</b> છે અને તેની ઉપર <b>4.2 સેમી વ્યાસવાળો અર્ધગોલક</b> લગાવેલ છે. બ્લોકનું <b>કુલ પૃષ્ઠફળ</b> શોધો. (&pi; = 22/7 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="200" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
                                <rect x="50" y="80" width="100" height="100" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
                                <polygon points="50,80 80,40 180,40 150,80" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
                                <polygon points="150,80 180,40 180,140 150,180" fill="#a5b4fc" stroke="#4f46e5" stroke-width="2"/>
                                
                                <ellipse cx="115" cy="60" rx="30" ry="10" fill="#fecaca" stroke="#be123c" stroke-width="2" />
                                <path d="M 85 60 A 30 30 0 0 0 145 60" fill="#fca5a5" stroke="#be123c" stroke-width="2" transform="rotate(180 115 60)"/>
                                
                                <text x="90" y="195" font-weight="bold" fill="#0f172a">5 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fdf4ff; border:2px dashed #c026d3; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f;'>💡 માસ્ટર ચાવી (આ સૂત્ર ગોખતા નહિ, સમજો):</b><br>
                            આપણે આખા બ્લોકને કલર કરવાનો છે. <br>
                            જો આપણે સમઘનનું કુલ પૃષ્ઠફળ લઈએ (6a&sup2;), તો તેમાં ઉપરની આખી બાજુ આવી જાય. <br>
                            પણ ઉપરની બાજુ પર તો <b>અર્ધગોલક પડેલો છે</b>, એટલે અર્ધગોલકના <b>તળિયા જેટલો ભાગ (વર્તુળ આકાર) ઢંકાઈ ગયો છે</b>, ત્યાં કલર નહિ થાય. તેને બાદ કરવો પડે.<br>
                            અને અર્ધગોલકની ઉપરની ગોળાકાર સપાટી પર કલર થશે, તેને ઉમેરવો પડે.<br><br>
                            <b style='color:#be123c;'>બ્લોકનું પૃષ્ઠફળ = સમઘનનું કુલ પૃષ્ઠફળ - અર્ધગોલકના પાયાનું ક્ષેત્રફળ + અર્ધગોલકનું વક્ર પૃષ્ઠફળ</b><br>
                            સૂત્ર = 6a&sup2; - &pi;r&sup2; + 2&pi;r&sup2;<br>
                            <div style='text-align:center; font-size:18px; font-weight:bold; color:#1d4ed8; background-color:#e0f2fe; padding:5px; border-radius:5px; margin-top:5px;'>
                                ફાઇનલ સૂત્ર: 6a&sup2; + &pi;r&sup2;
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: ડેટા લખવો</b><br>
                            સમઘનની બાજુ (a) = 5 cm<br>
                            અર્ધગોલકનો વ્યાસ = 4.2 cm &rArr; <b>ત્રિજ્યા (r) = 2.1 cm</b> (અથવા 21/10 cm ગણતરી માટે સહેલું રહેશે).
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી ગણતરી</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                કુલ પૃષ્ઠફળ = 6a&sup2; + &pi;r&sup2;<br>
                                
                                પૃષ્ઠફળ = 6(5)&sup2; + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>10</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>10</span></span><br>
                                
                                પૃષ્ઠફળ = 6(25) + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 3 &times; 21</span><span>100</span></span> &nbsp;&nbsp; <i style='color:#64748b;'>(7 &times; 3 = 21 છેદ ઉડાડતાં)</i><br>
                                
                                પૃષ્ઠફળ = 150 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1386</span><span>100</span></span><br>
                                
                                પૃષ્ઠફળ = 150 + 13.86<br>
                                <b style='font-size:20px; color:#047857;'>પૃષ્ઠફળ = 163.86 cm&sup2;</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: બ્લોકનું કુલ પૃષ્ઠફળ 163.86 cm&sup2; છે.</p>
                        </div>
                    </div>
                    `
                },
                        

                { 
                    question: "ઉદાહરણ 3: લાકડાનું રમકડું (રોકેટ) - મોસ્ટ IMP કોન્સેપ્ટ", 
                    question_desc: "જ્યારે એકનો પાયો બીજા કરતા મોટો હોય",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> લાકડાનું એક રોકેટ <b>નળાકાર ઉપર શંકુ</b> મૂકેલો હોય તેવા આકારનું છે. રોકેટની <b>કુલ ઊંચાઈ 26 cm</b> અને <b>શંકુની ઊંચાઈ 6 cm</b> છે. શંકુના પાયાનો <b>વ્યાસ 5 cm</b> અને નળાકારના પાયાનો <b>વ્યાસ 3 cm</b> છે. જો શંકુવાળા ભાગને નારંગી (Orange) અને નળાકાર ભાગને પીળો (Yellow) રંગ કરવો હોય, તો બંને રંગના ભાગનું <b>ક્ષેત્રફળ અલગ-અલગ શોધો</b>. (&pi; = 3.14 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="280" viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg">
                                <rect x="85" y="80" width="50" height="150" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                <ellipse cx="110" cy="230" rx="25" ry="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                
                                <path d="M 110 20 L 70 80 L 150 80 Z" fill="#fdba74" stroke="#ea580c" stroke-width="2"/>
                                <ellipse cx="110" cy="80" rx="40" ry="12" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/>
                                
                                <line x1="180" y1="20" x2="180" y2="230" stroke="#475569" stroke-width="1.5" />
                                <text x="185" y="130" font-weight="bold" fill="#0f172a">26 cm</text>
                                
                                <line x1="50" y1="20" x2="50" y2="80" stroke="#be123c" stroke-width="1.5" />
                                <text x="15" y="55" font-weight="bold" fill="#be123c">6 cm</text>
                                
                                <line x1="85" y1="250" x2="135" y2="250" stroke="#ca8a04" stroke-width="1.5" />
                                <text x="95" y="265" font-weight="bold" fill="#ca8a04">3 cm</text>
                                
                                <line x1="70" y1="100" x2="150" y2="100" stroke="#ea580c" stroke-width="1.5" />
                                <text x="95" y="115" font-weight="bold" fill="#ea580c">5 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (સૂત્ર સમજવું):</b><br>
                            - <b>નારંગી રંગ (શંકુ):</b> શંકુનો પાયો નળાકાર કરતા મોટો છે, એટલે વધારાના <b>બહાર દેખાતા પાયા</b> પર પણ રંગ કરવો પડશે!<br>
                            સૂત્ર = શંકુની વક્રસપાટી + (શંકુનો પાયો - નળાકારનો પાયો) <br>
                            - <b>પીળો રંગ (નળાકાર):</b> નળાકારની વક્રસપાટી અને તેનું તળિયું.<br>
                            સૂત્ર = નળાકારની વક્રસપાટી + નળાકારનો પાયો.
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c;'>સ્ટેપ 1: નારંગી રંગના ભાગનું ક્ષેત્રફળ (શંકુ)</b><br>
                            શંકુની ત્રિજ્યા <b style='color:#c2410c;'>r₁ = 5/2 = 2.5 cm</b> અને ઊંચાઈ <b style='color:#c2410c;'>h₁ = 6 cm</b> છે.<br>
                            નળાકારની ત્રિજ્યા <b style='color:#1d4ed8;'>r₂ = 3/2 = 1.5 cm</b> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                <b>પહેલા શંકુની ત્રાંસી ઊંચાઈ (l) શોધીએ:</b><br>
                                l = &radic;(r₁&sup2; + h₁&sup2;)<br>
                                l = &radic;(2.5&sup2; + 6&sup2;)<br>
                                l = &radic;(6.25 + 36) = &radic;42.25<br>
                                <b style='color:#c2410c;'>l = 6.5 cm</b><br><br>

                                <b>નારંગી ક્ષેત્રફળ</b> = &pi;r₁l + &pi;r₁&sup2; - &pi;r₂&sup2;<br>
                                <i style='color:#64748b;'>(બધામાંથી &pi; સામાન્ય કાઢતાં)</i><br>
                                = &pi; [ r₁l + r₁&sup2; - r₂&sup2; ]<br>
                                = 3.14 [ (2.5 &times; 6.5) + (2.5)&sup2; - (1.5)&sup2; ]<br>
                                = 3.14 [ 16.25 + 6.25 - 2.25 ]<br>
                                = 3.14 [ 22.50 - 2.25 ]<br>
                                = 3.14 &times; 20.25<br>
                                <b style='font-size:18px; color:#c2410c;'>નારંગી ભાગનું ક્ષેત્રફળ = 63.585 cm&sup2;</b>
                            </div>
                        </div>

                        <div style='background-color:#fefce8; border-left:4px solid #eab308; padding:10px;'>
                            <b style='color:#a16207;'>સ્ટેપ 2: પીળા રંગના ભાગનું ક્ષેત્રફળ (નળાકાર)</b><br>
                            નળાકારની ત્રિજ્યા <b style='color:#1d4ed8;'>r₂ = 1.5 cm</b>.<br>
                            નળાકારની ઊંચાઈ (h₂) = કુલ ઊંચાઈ - શંકુની ઊંચાઈ = 26 - 6 = <b style='color:#1d4ed8;'>20 cm</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2; background-color:#fef9c3; padding:10px; border-radius:5px;'>
                                <b>પીળું ક્ષેત્રફળ</b> = નળાકારની વક્રસપાટી + નળાકારનું તળિયું<br>
                                = 2&pi;r₂h₂ + &pi;r₂&sup2;<br>
                                <i style='color:#64748b;'>(બંનેમાંથી &pi;r₂ સામાન્ય કાઢતાં)</i><br>
                                = &pi;r₂ [ 2h₂ + r₂ ]<br>
                                = 3.14 &times; 1.5 &times; [ 2(20) + 1.5 ]<br>
                                = 4.71 &times; [ 40 + 1.5 ]<br>
                                = 4.71 &times; 41.5<br>
                                <b style='font-size:18px; color:#a16207;'>પીળા ભાગનું ક્ષેત્રફળ = 195.465 cm&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 4: પક્ષીઓ માટેનું પાણીનું કૂંડું (Bird Bath)", 
                    question_desc: "એકમો (m અને cm) બદલવા વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> મયંકે પોતાના બગીચામાં પક્ષીઓને પાણી પીવા માટે <b>નળાકારના એક છેડે અર્ધગોળાકાર ખાડો</b> હોય તેવું પાત્ર બનાવ્યું છે. નળાકારની ઊંચાઈ <b>1.45 m</b> અને ત્રિજ્યા <b>30 cm</b> છે. આ પાત્રનું <b>કુલ પૃષ્ઠફળ</b> શોધો. (&pi; = 22/7 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="200" height="220" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
                                <rect x="60" y="40" width="80" height="150" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
                                
                                <path d="M 60 40 A 40 40 0 0 0 140 40" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                                <ellipse cx="100" cy="40" rx="40" ry="10" fill="none" stroke="#0284c7" stroke-width="2"/>
                                
                                <line x1="160" y1="40" x2="160" y2="190" stroke="#be123c" stroke-width="1.5" />
                                <text x="165" y="120" font-weight="bold" fill="#be123c">1.45 m</text>
                                
                                <line x1="100" y1="20" x2="140" y2="20" stroke="#1d4ed8" stroke-width="1.5" />
                                <text x="110" y="15" font-size="12" font-weight="bold" fill="#1d4ed8">30 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ગોલ્ડન ટ્રીક (ભૂલ ક્યાં થાય છે?):</b><br>
                            અહીં ઊંચાઈ <b>મીટર (m)</b> માં છે અને ત્રિજ્યા <b>સેમી (cm)</b> માં છે! <br>
                            ગણતરી કરતા પહેલા બંનેના એકમ સરખા કરવા પડે. <br>
                            ઊંચાઈ h = 1.45 m = <b>145 cm</b> (કારણ કે 1 m = 100 cm).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરી: કુલ પૃષ્ઠફળ શોધવું</b><br>
                            પાત્રનું કુલ પૃષ્ઠફળ = <b>નળાકારની વક્રસપાટી + અર્ધગોલકની વક્રસપાટી</b><br>
                            અહીં r = 30 cm અને h = 145 cm છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#ecfdf5; padding:10px; border-radius:5px;'>
                                કુલ પૃષ્ઠફળ = 2&pi;rh + 2&pi;r&sup2;<br>
                                
                                <i style='color:#64748b;'>(ગણતરી ટૂંકી કરવા 2&pi;r સામાન્ય કાઢતાં)</i><br>
                                પૃષ્ઠફળ = 2&pi;r (h + r)<br>
                                
                                પૃષ્ઠફળ = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 30 &times; (145 + 30)<br>
                                
                                પૃષ્ઠફળ = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 30 &times; 175<br>
                                
                                <i style='color:#64748b;'>(7 નો ઘડિયો: 25 &times; 7 = 175 થાય. તેથી 7 અને 175 ઉડીને 25 વધશે)</i><br>
                                પૃષ્ઠફળ = 2 &times; 22 &times; 30 &times; 25<br>
                                પૃષ્ઠફળ = 44 &times; 750<br>
                                <b style='font-size:20px; color:#15803d;'>પૃષ્ઠફળ = 33000 cm&sup2;</b>
                            </div>
                            
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#1e3a8a;'>મીટરમાં ફેરવવા:</b><br>
                                1 m&sup2; = 10,000 cm&sup2; થાય. તેથી 33000 ને 10000 વડે ભાગતાં:<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>33000</span><span>10000</span></span> = <b style='font-size:18px; color:#be123c;'>3.3 m&sup2;</b><br>
                                <b>જવાબ: પાત્રનું કુલ પૃષ્ઠફળ 33000 cm&sup2; અથવા 3.3 m&sup2; છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                {
                    question: "🎯 માસ્ટર ચાવી: ઘનફળના દાખલા પૃષ્ઠફળ કરતા સહેલા કેમ છે?",
                    answer: `
                    <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border:2px solid #cbd5e1; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#0f172a; font-weight:bold; font-size:16px;'>ઘનફળ (Volume) એટલે અંદર સમાતી વસ્તુની ક્ષમતા (Capacity).</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #3b82f6;'>
                            <b style='color:#1d4ed8;'>સૌથી સહેલો નિયમ:</b><br>
                            - જ્યારે બે આકારો જોડાઈને નવો આકાર બને, ત્યારે સીધો જ <b style='color:#047857;'>બંનેના ઘનફળનો સરવાળો (+)</b> કરી દો.<br>
                            - જ્યારે કોઈ એક આકારમાંથી બીજો આકાર કાપી લેવામાં આવે અથવા અંદર ખાડો હોય, ત્યારે મોટા આકારમાંથી નાના આકારની <b style='color:#be123c;'>બાદબાકી (-)</b> કરી દો.<br>
                            <i>(અહીં પૃષ્ઠફળની જેમ કયો ભાગ ઢંકાયેલો છે તે વિચારવાની કોઈ જરૂર જ નથી!)</i>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 5: જ્યુસનો ગ્લાસ (નળાકાર - અર્ધગોલક)", 
                    question_desc: "ગ્રાહકને કેવી રીતે છેતરવામાં આવે છે તે દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક જ્યુસ વેચનાર તેના ગ્રાહકોને આકૃતિમાં દર્શાવ્યા મુજબના પ્યાલામાં જ્યુસ આપે છે. નળાકાર પ્યાલાનો અંદરનો <b>વ્યાસ 5 cm</b> છે અને <b>ઊંચાઈ 10 cm</b> છે. પરંતુ પ્યાલાના તળિયે એક <b>અર્ધગોળાકાર ભાગ ઉપસેલો</b> છે, જેનાથી પ્યાલાની ક્ષમતા ઘટી જાય છે. પ્યાલાની <b>દેખીતી ક્ષમતા</b> અને <b>વાસ્તવિક ક્ષમતા (સાચું ઘનફળ)</b> શોધો. (&pi; = 3.14 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                <rect x="60" y="40" width="100" height="130" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                <ellipse cx="110" cy="40" rx="50" ry="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                                
                                <path d="M 60 170 A 50 50 0 0 1 160 170 Z" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
                                
                                <line x1="180" y1="40" x2="180" y2="170" stroke="#475569" stroke-width="1.5" />
                                <text x="190" y="110" font-weight="bold" fill="#0f172a">10 cm</text>
                                
                                <line x1="60" y1="20" x2="160" y2="20" stroke="#ea580c" stroke-width="1.5" />
                                <text x="95" y="15" font-weight="bold" fill="#ea580c">5 cm</text>
                                
                                <text x="80" y="160" font-size="12" fill="#be123c">ઉપસેલો ભાગ</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમજૂતી:</b><br>
                            બહારથી જોતા ગ્લાસ આખો નળાકાર દેખાય છે (દેખીતી ક્ષમતા). પરંતુ નીચેથી અર્ધગોલક જેટલી જગ્યા રોકાઈ ગઈ છે, એટલે એટલું જ્યુસ ઓછું આવશે! <br>
                            <b style='color:#be123c;'>વાસ્તવિક ક્ષમતા = નળાકારનું ઘનફળ - અર્ધગોલકનું ઘનફળ</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: પ્યાલાની દેખીતી ક્ષમતા (નળાકારનું ઘનફળ)</b><br>
                            વ્યાસ = 5 cm, તેથી ત્રિજ્યા <b>r = 2.5 cm</b>.<br>
                            ઊંચાઈ <b>h = 10 cm</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                દેખીતી ક્ષમતા = &pi;r&sup2;h<br>
                                = 3.14 &times; (2.5)&sup2; &times; 10<br>
                                = 3.14 &times; 6.25 &times; 10<br>
                                = 3.14 &times; 62.5<br>
                                <b style='font-size:18px; color:#15803d;'>= 196.25 cm&sup3;</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: વાસ્તવિક ક્ષમતા (સાચું ઘનફળ) શોધવું</b><br>
                            પહેલા અર્ધગોલકનું ઘનફળ શોધીએ:<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                અર્ધગોલકનું ઘનફળ = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span>&pi;r&sup3;<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span> &times; 3.14 &times; (2.5)&sup3;<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span> &times; 3.14 &times; 15.625<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>98.125</span><span>3</span></span><br>
                                
                                <b style='color:#be123c;'>&approx; 32.71 cm&sup3; (આશરે)</b>
                            </div>
                            
                            <p style='margin-top:15px; font-weight:bold; color:#0f172a;'>હવે સાચું ઘનફળ = 196.25 - 32.71 = <b style='font-size:20px; color:#047857;'>163.54 cm&sup3;</b></p>
                            <p style='font-size:14px; color:#64748b; margin-bottom:0;'>જવાબ: પ્યાલાની દેખીતી ક્ષમતા 196.25 cm&sup3; છે, પણ સાચી ક્ષમતા માત્ર 163.54 cm&sup3; જ છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 6: લાકડાનું નક્કર રમકડું (અર્ધગોલક + શંકુ + નળાકાર)", 
                    question_desc: "બોર્ડમાં પૂછાતો 4 માર્ક્સનો લાંબો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક <b>અર્ધગોલક પર શંકુ</b> લગાવેલ હોય તેવું એક નક્કર રમકડું છે. શંકુની ઊંચાઈ 2 cm અને પાયાનો વ્યાસ 4 cm છે. <b>રમકડાનું ઘનફળ શોધો.</b> <br>વળી, જો એક <b>લંબવૃત્તીય નળાકાર આ રમકડાને પરિગત હોય (એટલે કે આખું રમકડું નળાકારની અંદર ફિટ બેસી જતું હોય)</b>, તો નળાકાર અને રમકડાના <b>ઘનફળનો તફાવત (બાદબાકી)</b> શોધો. (&pi; = 3.14 લો).</p>

                        <div style='text-align:center; margin: 15px 0;'>
                            <svg width="220" height="240" viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg">
                                <rect x="60" y="40" width="100" height="100" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <path d="M 60 90 A 50 50 0 0 0 160 90" fill="#fecaca" stroke="#be123c" stroke-width="2"/>
                                <path d="M 60 90 L 110 40 L 160 90 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                
                                <line x1="110" y1="40" x2="110" y2="90" stroke="#000" stroke-width="1.5" stroke-dasharray="2,2"/>
                                <text x="115" y="70" font-size="12" font-weight="bold">2 cm</text>
                                
                                <line x1="60" y1="90" x2="160" y2="90" stroke="#000" stroke-width="1.5" />
                                <text x="80" y="85" font-size="12" font-weight="bold">4 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (આખો દાખલો 2 ભાગમાં વહેંચાયેલો છે):</b><br>
                            <b>ભાગ 1:</b> રમકડાનું ઘનફળ = શંકુનું ઘનફળ + અર્ધગોલકનું ઘનફળ.<br>
                            <b>ભાગ 2:</b> નળાકારનું ઘનફળ શોધો. અને છેલ્લે બંનેની બાદબાકી કરો. બસ!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: રમકડાનું કુલ ઘનફળ</b><br>
                            વ્યાસ = 4 cm &rArr; <b>ત્રિજ્યા (r) = 2 cm</b>.<br>
                            શંકુની ઊંચાઈ <b>(h) = 2 cm</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                રમકડાનું ઘનફળ = શંકુનું ઘનફળ + અર્ધગોલકનું ઘનફળ<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span>&pi;r&sup2;h + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span>&pi;r&sup3;<br>
                                
                                <i style='color:#64748b;'>(બંનેમાંથી (1/3)&pi;r&sup2; સામાન્ય કાઢતાં ગણતરી સહેલી બનશે)</i><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;r&sup2; [ h + 2r ]<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; 3.14 &times; (2)&sup2; &times; [ 2 + 2(2) ]<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; 3.14 &times; 4 &times; [ 2 + 4 ]<br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; 3.14 &times; 4 &times; 6<br>
                                
                                <i style='color:#64748b;'>(3 અને 6 નો છેદ ઉડાડતા 2 વધે)</i><br>
                                = 3.14 &times; 4 &times; 2 = 3.14 &times; 8<br>
                                <b style='font-size:18px; color:#15803d;'>= 25.12 cm&sup3; (રમકડાનું ઘનફળ)</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: નળાકારનું ઘનફળ અને તફાવત શોધવો</b><br>
                            નળાકારની ત્રિજ્યા <b>(R) = 2 cm</b> જ રહેશે.<br>
                            નળાકારની કુલ ઊંચાઈ <b>(H)</b> = શંકુની ઊંચાઈ (2) + અર્ધગોલકની ત્રિજ્યા (2) = <b>4 cm</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                નળાકારનું ઘનફળ = &pi;R&sup2;H<br>
                                = 3.14 &times; (2)&sup2; &times; 4<br>
                                = 3.14 &times; 4 &times; 4<br>
                                = 3.14 &times; 16<br>
                                <b style='font-size:18px; color:#1d4ed8;'>= 50.24 cm&sup3;</b><br><br>
                                
                                <b style='color:#be123c;'>તફાવત (બાદબાકી)</b> = નળાકારનું ઘનફળ - રમકડાનું ઘનફળ<br>
                                = 50.24 - 25.12<br>
                                <b style='font-size:20px; color:#be123c;'>= 25.12 cm&sup3;</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: રમકડાનું ઘનફળ 25.12 cm&sup3; છે અને બંનેના ઘનફળનો તફાવત પણ 25.12 cm&sup3; જ છે.</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 13: આંકડાશાસ્ત્ર (ઉદાહરણ ભાગ 1.1 - સીધી રીત)
        // ------------------------------------
        "13": {
            "chapterName": "પ્રકરણ 13 (ઉદાહરણ 1.1)",
            "chapterTitle": "આંકડાશાસ્ત્ર - મધ્યક (સીધી રીત)",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: મધ્યક (Mean) ની ત્રણેય રીતો સમજો",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>પરીક્ષામાં જો કોઈ રીતનું નામ ન આપ્યું હોય, તો તમે ત્રણમાંથી ગમે તે રીત વાપરી શકો છો. જવાબ હંમેશા સરખો જ આવશે!</p>
                        <ul style='line-height:2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                            <li><b style='color:#be123c;'>૧. સીધી રીત:</b> જ્યારે આંકડા નાના હોય ત્યારે વાપરવી.</li>
                            <li><b style='color:#1d4ed8;'>૨. ધારેલા મધ્યકની રીત:</b> જ્યારે આંકડા થોડા મોટા હોય ત્યારે (d<sub>i</sub> વાળું ખાનું).</li>
                            <li><b style='color:#047857;'>૩. પદ-વિચલનની રીત (બેસ્ટ ટ્રીક 🚀):</b> બોર્ડની પરીક્ષામાં મોટાભાગે આ જ રીત વાપરવી, કારણ કે આમાં ગુણાકાર સૌથી સહેલા થઈ જાય છે! (u<sub>i</sub> વાળું ખાનું).</li>
                        </ul>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 2 (રીત 1): આપેલ માહિતીનો મધ્યક શોધો (સીધી રીત)", 
                    question_desc: "Direct Method",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> નીચે આપેલ માહિતી 30 વિદ્યાર્થીઓએ મેળવેલ ગુણ દર્શાવે છે. આ માહિતીનો <b>મધ્યક (<span style="text-decoration:overline;">x</span>)</b> સીધી રીતે શોધો.</p>

                        <div style='overflow-x:auto; margin-bottom:15px; border:1px solid #cbd5e1; border-radius:5px;'>
                            <table style='width:100%; min-width:400px; text-align:center; border-collapse:collapse; background-color:#f8fafc;'>
                                <tr style='background-color:#e2e8f0; font-weight:bold;'>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>વર્ગ અંતરાલ</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>10-25</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>25-40</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>40-55</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>55-70</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>70-85</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>85-100</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #cbd5e1; padding:8px; font-weight:bold;'>વિદ્યાર્થીઓ (f<sub>i</sub>)</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>2</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>3</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>7</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>6</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>6</td>
                                    <td style='border:1px solid #cbd5e1; padding:8px;'>6</td>
                                </tr>
                            </table>
                        </div>

                        <div style='background-color:#fdf4ff; border:1px dashed #c026d3; padding:10px; border-radius:5px; margin-bottom:15px;'>
                            <b style='color:#86198f;'>💡 સૌથી પહેલું કામ: મધ્યકિંમત (x<sub>i</sub>) શોધવી</b><br>
                            કોઈપણ રીત વાપરો, x<sub>i</sub> તો શોધવો જ પડશે.<br>
                            સૂત્ર: <b>x<sub>i</sub> = (નીચલી સીમા + ઉપલી સીમા) / 2</b><br>
                            પહેલા વર્ગ (10-25) માટે: x<sub>i</sub> = (10 + 25)/2 = 35/2 = <b style='color:#be123c;'>17.5</b><br>
                            અહીં <b>વર્ગલંબાઈ (h) = 15</b> છે, તેથી બધામાં 15-15 ઉમેરતા જાવ! 
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>ગણતરીનું કોષ્ટક:</b>
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:450px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dcfce7; font-weight:bold; color:#14532d;'>
                                        <th style='border:1px solid #86efac; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>f<sub>i</sub> &times; x<sub>i</sub></th>
                                    </tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>10-25</td><td style='border:1px solid #86efac; padding:5px;'>2</td><td style='border:1px solid #86efac; padding:5px;'>17.5</td><td style='border:1px solid #86efac; padding:5px;'>35.0</td></tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>25-40</td><td style='border:1px solid #86efac; padding:5px;'>3</td><td style='border:1px solid #86efac; padding:5px;'>32.5</td><td style='border:1px solid #86efac; padding:5px;'>97.5</td></tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>40-55</td><td style='border:1px solid #86efac; padding:5px;'>7</td><td style='border:1px solid #86efac; padding:5px;'>47.5</td><td style='border:1px solid #86efac; padding:5px;'>332.5</td></tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>55-70</td><td style='border:1px solid #86efac; padding:5px;'>6</td><td style='border:1px solid #86efac; padding:5px;'>62.5</td><td style='border:1px solid #86efac; padding:5px;'>375.0</td></tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>70-85</td><td style='border:1px solid #86efac; padding:5px;'>6</td><td style='border:1px solid #86efac; padding:5px;'>77.5</td><td style='border:1px solid #86efac; padding:5px;'>465.0</td></tr>
                                    <tr><td style='border:1px solid #86efac; padding:5px;'>85-100</td><td style='border:1px solid #86efac; padding:5px;'>6</td><td style='border:1px solid #86efac; padding:5px;'>92.5</td><td style='border:1px solid #86efac; padding:5px;'>555.0</td></tr>
                                    <tr style='background-color:#bbf7d0; font-weight:bold;'>
                                        <td style='border:1px solid #86efac; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>&Sigma;f<sub>i</sub> = 30</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>-</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 1860.0</td>
                                    </tr>
                                </table>
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                મધ્યક (<span style="text-decoration:overline;">x</span>) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br>
                                <span style="text-decoration:overline;">x</span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1860</span><span>30</span></span> <br>
                                <b style='font-size:20px; color:#15803d;'><span style="text-decoration:overline;">x</span> = 62</b> 
                                <p style='color:#64748b; font-size:14px; margin-bottom:0;'><i>(નોંધ: આ રીતમાં ગુણાકાર બહુ મોટા થાય છે, એટલે જો આંકડા મોટા હોય તો આ રીત ટાળવી).</i></p>
                            </div>
                        </div>
                    </div>
                    `
                },
                    
        
                { 
                    question: "ઉદાહરણ 2 (રીત 2): આપેલ માહિતીનો મધ્યક શોધો (ધારેલા મધ્યકની રીત)", 
                    question_desc: "Assumed Mean Method",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> અગાઉના જ દાખલા (30 વિદ્યાર્થીઓના ગુણ) નો મધ્યક હવે <b>ધારેલા મધ્યકની રીત</b> થી શોધો.</p>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>💡 રીતની સમજૂતી:</b><br>
                            જ્યારે x<sub>i</sub> અને f<sub>i</sub> ના આંકડા મોટા હોય ત્યારે તેમનો સીધો ગુણાકાર અઘરો પડે છે.<br>
                            તેથી આપણે x<sub>i</sub> ના ખાનામાંથી બરાબર વચ્ચે આવતી કોઈ એક કિંમતને <b>'a' (ધારેલો મધ્યક)</b> ધારી લઈએ છીએ.<br>
                            અહીં આપણે <b style='color:#be123c;'>a = 47.5</b> ધારીશું.
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px;'>
                            <b style='color:#0f172a; font-size:16px;'>ગણતરીનું કોષ્ટક:</b>
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:550px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dbeafe; font-weight:bold; color:#1e3a8a;'>
                                        <th style='border:1px solid #93c5fd; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #93c5fd; padding:8px;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #93c5fd; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #93c5fd; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - a</th>
                                        <th style='border:1px solid #93c5fd; padding:8px;'>f<sub>i</sub> &times; d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>10-25</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>2</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>17.5</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>17.5 - 47.5 = <b>-30</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>2 &times; (-30) = <b style='color:#be123c;'>-60</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>25-40</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>3</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>32.5</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>32.5 - 47.5 = <b>-15</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>3 &times; (-15) = <b style='color:#be123c;'>-45</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>40-55</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>7</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'><b style='color:#b45309;'>a = 47.5</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>47.5 - 47.5 = <b style='color:#047857;'>0</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>7 &times; 0 = <b style='color:#047857;'>0</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>55-70</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>62.5</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>62.5 - 47.5 = <b>15</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6 &times; 15 = <b style='color:#1d4ed8;'>90</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>70-85</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>77.5</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>77.5 - 47.5 = <b>30</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6 &times; 30 = <b style='color:#1d4ed8;'>180</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>85-100</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>92.5</td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>92.5 - 47.5 = <b>45</b></td>
                                        <td style='border:1px solid #93c5fd; padding:5px;'>6 &times; 45 = <b style='color:#1d4ed8;'>270</b></td>
                                    </tr>
                                    <tr style='background-color:#bfdbfe; font-weight:bold;'>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>&Sigma;f<sub>i</sub> = 30</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>-</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>-</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = 435</td>
                                    </tr>
                                </table>
                            </div>

                            <div style='background-color:#fffbeb; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#b45309;'>&Sigma;f<sub>i</sub>d<sub>i</sub> શોધવાની ટ્રીક:</b><br>
                                પહેલા માઇનસ વાળી સંખ્યાઓનો સરવાળો કરો: (-60) + (-45) = <b>-105</b><br>
                                પછી પ્લસ વાળી સંખ્યાઓનો સરવાળો કરો: 90 + 180 + 270 = <b>540</b><br>
                                છેલ્લે બંનેની બાદબાકી: 540 - 105 = <b style='color:#047857;'>435</b>. 
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:15px; line-height:2.5;'>
                                <b style='color:#1e3a8a;'>સૂત્રમાં કિંમત મૂકતાં:</b><br>
                                મધ્યક (<span style="text-decoration:overline;">x</span>) = a + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                
                                <span style="text-decoration:overline;">x</span> = 47.5 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>435</span><span>30</span></span><br><br>
                                
                                <i style='color:#64748b;'>(435 ને 30 વડે ભાગતાં 14.5 મળશે)</i><br>
                                <span style="text-decoration:overline;">x</span> = 47.5 + 14.5<br><br>
                                
                                <b style='font-size:20px; color:#1d4ed8;'><span style="text-decoration:overline;">x</span> = 62</b> 
                            </div>
                        </div>
                    </div>
                    `
                },

                { 
                    question: "ઉદાહરણ 2 (રીત 3): આપેલ માહિતીનો મધ્યક શોધો (પદ-વિચલનની રીત 🚀)", 
                    question_desc: "Step-Deviation Method (પરીક્ષા માટે બેસ્ટ)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> તે જ 30 વિદ્યાર્થીઓના ગુણનો મધ્યક હવે <b>પદ-વિચલનની રીત</b> થી શોધો.</p>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>💡 જાદુઈ ટ્રીક સમજો:</b><br>
                            જ્યારે વર્ગલંબાઈ (h) સમાન હોય, ત્યારે ગણતરી કરવાની જરૂર જ નથી! <br>
                            જેને <b>'a'</b> ધારો તેની સામે u<sub>i</sub> ના ખાનામાં સીધો <b>0</b> મૂકી દો. <br>
                            0 ની ઉપર <b>-1, -2, -3...</b> અને નીચે <b>1, 2, 3...</b> સીધું જ લખી નાખવું! (અહીં <b>h = 15</b> અને <b>a = 47.5</b> છે).
                        </div>

                        <div style='background-color:#fcfaf8; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#9a3412; font-size:16px;'>ગણતરીનું કોષ્ટક:</b>
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:550px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#ffedd5; font-weight:bold; color:#c2410c;'>
                                        <th style='border:1px solid #fdba74; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #fdba74; padding:8px;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #fdba74; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #fdba74; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub> - a) / h</th>
                                        <th style='border:1px solid #fdba74; padding:8px;'>f<sub>i</sub> &times; u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fdba74; padding:5px;'>10-25</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>2</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>17.5</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b style='color:#be123c;'>-2</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>2 &times; (-2) = <b style='color:#be123c;'>-4</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fdba74; padding:5px;'>25-40</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>3</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>32.5</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b style='color:#be123c;'>-1</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>3 &times; (-1) = <b style='color:#be123c;'>-3</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #fdba74; padding:5px;'>40-55</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>7</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b style='color:#b45309;'>a = 47.5</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b style='color:#047857;'>0</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>7 &times; 0 = <b style='color:#047857;'>0</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fdba74; padding:5px;'>55-70</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>62.5</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b>1</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6 &times; 1 = <b>6</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fdba74; padding:5px;'>70-85</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>77.5</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b>2</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6 &times; 2 = <b>12</b></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fdba74; padding:5px;'>85-100</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>92.5</td>
                                        <td style='border:1px solid #fdba74; padding:5px;'><b>3</b></td>
                                        <td style='border:1px solid #fdba74; padding:5px;'>6 &times; 3 = <b>18</b></td>
                                    </tr>
                                    <tr style='background-color:#fed7aa; font-weight:bold;'>
                                        <td style='border:1px solid #fdba74; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #fdba74; padding:8px;'>&Sigma;f<sub>i</sub> = 30</td>
                                        <td style='border:1px solid #fdba74; padding:8px;'>-</td>
                                        <td style='border:1px solid #fdba74; padding:8px;'>-</td>
                                        <td style='border:1px solid #fdba74; padding:8px;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 29</td>
                                    </tr>
                                </table>
                            </div>

                            <div style='background-color:#fffbeb; padding:10px; border-radius:5px; margin-top:10px;'>
                                <b style='color:#b45309;'>&Sigma;f<sub>i</sub>u<sub>i</sub> શોધવાની ટ્રીક:</b><br>
                                માઇનસ વાળાનો સરવાળો: (-4) + (-3) = <b>-7</b><br>
                                પ્લસ વાળાનો સરવાળો: 6 + 12 + 18 = <b>36</b><br>
                                બાદબાકી: 36 - 7 = <b style='color:#047857;'>29</b>. (ગણતરી કેટલી સહેલી થઈ ગઈ!)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:15px; line-height:2.5;'>
                                <b style='color:#c2410c;'>સૂત્રમાં કિંમત મૂકતાં:</b><br>
                                મધ્યક (<span style="text-decoration:overline;">x</span>) = a + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; h<br><br>
                                
                                <span style="text-decoration:overline;">x</span> = 47.5 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>29</span><span>30</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 15<br><br>
                                
                                <i style='color:#64748b;'>(15 અને 30 નો છેદ ઉડતા છેદમાં 2 વધશે: 15 &times; 2 = 30)</i><br>
                                <span style="text-decoration:overline;">x</span> = 47.5 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>29</span><span>2</span></span><br><br>
                                
                                <i style='color:#64748b;'>(29 ના અડધા 14.5 થાય)</i><br>
                                <span style="text-decoration:overline;">x</span> = 47.5 + 14.5<br><br>
                                
                                <b style='font-size:20px; color:#c2410c;'><span style="text-decoration:overline;">x</span> = 62</b>
                            </div>
                        </div>

                        <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:20px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                            <b style='color:#15803d; font-size:18px;'>🏆 વિદ્યાર્થીઓ માટે અંતિમ નિષ્કર્ષ:</b><br>
                            તમે જોયું ને? આપણે 3 અલગ-અલગ રીતે ગણતરી કરી (સીધી રીત, ધારેલા મધ્યકની રીત અને પદ-વિચલનની રીત), પણ ત્રણેયમાં <b>જવાબ 62 જ આવ્યો!</b><br>
                            બોર્ડની પરીક્ષામાં તમારે ત્રણમાંથી કોઈ <b>એક જ રીત</b> થી દાખલો ગણવાનો છે. અને બને ત્યાં સુધી <b>પદ-વિચલનની રીત</b> જ વાપરવી, જેથી ગુણાકારમાં ભૂલ પડે જ નહીં!
                        </div>
                    </div>
                    `
                },
            
                
        
                {
                    question: "🎯 માસ્ટર ચાવી: બહુલક (Z) શોધવાનું સૂત્ર અને શોર્ટકટ",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>બહુલક શોધવા માટે કોઈ નવું ખાનું નથી બનાવવાનું. બસ, રકમમાંથી સૌથી મોટી આવૃત્તિ શોધો!</p>
                        
                        <div style='background-color:#ffffff; border:1px solid #fde047; padding:10px; border-radius:5px; text-align:center;'>
                            <b style='color:#be123c;'>બહુલક (Z) નું સૂત્ર:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:22px; font-weight:bold; color:#1d4ed8; padding:15px 0;'>
                                Z = l + 
                                <span style='font-size:40px; font-weight:normal; margin:0 5px; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'>
                                    <span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 10px;'>f<sub>1</sub> - f<sub>0</sub></span>
                                    <span style='padding:5px 10px 0 10px;'>2f<sub>1</sub> - f<sub>0</sub> - f<sub>2</sub></span>
                                </span>
                                <span style='font-size:40px; font-weight:normal; margin:0 5px; vertical-align:middle;'>]</span>
                                &times; h
                            </div>
                        </div>
                        <ul style='line-height:2; margin-top:10px; font-size:15px; color:#0f172a;'>
                            <li><b>f<sub>1</sub></b> = સૌથી મોટી આવૃત્તિ (બહુલક વર્ગની આવૃત્તિ)</li>
                            <li><b>f<sub>0</sub></b> = તેની બરાબર <b>ઉપરના (આગળના)</b> વર્ગની આવૃત્તિ</li>
                            <li><b>f<sub>2</sub></b> = તેની બરાબર <b>નીચેના (પાછળના)</b> વર્ગની આવૃત્તિ</li>
                        </ul>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 4: અવર્ગીકૃત માહિતીનો બહુલક (વિભાગ A માટે IMP)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક બૉલરે 10 ક્રિકેટ મૅચોમાં નીચે પ્રમાણે વિકેટો લીધી છે:<br>
                        <b>2, 6, 4, 5, 0, 2, 1, 3, 2, 3</b><br>
                        આ માહિતીનો <b>બહુલક</b> શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            આપેલી માહિતીને આવૃત્તિ વિતરણ કોષ્ટકમાં ગોઠવતાં:<br>
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:300px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dcfce7; font-weight:bold; color:#14532d;'>
                                        <th style='border:1px solid #86efac; padding:8px;'>વિકેટોની સંખ્યા</th>
                                        <td style='border:1px solid #86efac; padding:5px;'>0</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>2</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>3</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>4</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>5</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>6</td>
                                    </tr>
                                    <tr>
                                        <th style='border:1px solid #86efac; padding:8px; background-color:#f0fdf4;'>મૅચોની સંખ્યા</th>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                        <td style='border:1px solid #86efac; padding:5px; background-color:#fef08a; font-weight:bold; color:#be123c;'>3</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>2</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>1</td>
                                    </tr>
                                </table>
                            </div>

                            <p style='margin-top:10px;'>અહીં સ્પષ્ટ છે કે બૉલરે સૌથી વધુ વખત (3 વખત) <b>2 વિકેટ</b> લીધી છે.<br>
                            તેથી, આ માહિતીનો <b>બહુલક = 2</b> છે.</p>
                        </div>
                    </div>
                    `
                },
                    
        
                { 
                    question: "ઉદાહરણ 5: કુટુંબની સભ્યસંખ્યાનો બહુલક (મોસ્ટ IMP)", 
                    question_desc: "બોર્ડમાં 3 માર્ક્સ માટે પૂછાતો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> વિદ્યાર્થીઓના એક સમૂહે 20 પરિવારો પર સર્વેક્ષણ હાથ ધર્યું. તેનાથી પરિવારોના સભ્યોની સંખ્યા માટે નીચેનું આવૃત્તિ-વિતરણ કોષ્ટક મળ્યું. આ માહિતીનો <b>બહુલક</b> શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>સ્ટેપ 1: કોષ્ટકમાંથી કિંમતો તારવવી</b><br>
                            કોષ્ટકમાં જુઓ, સૌથી મોટી આવૃત્તિ કઈ છે? <b>8</b>. <br>
                            તેથી <b>3-5</b> એ આપણો <b>બહુલક વર્ગ</b> બનશે.
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:400px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#fee2e2; font-weight:bold; color:#b91c1c;'>
                                        <th style='border:1px solid #fca5a5; padding:8px;'>પરિવારની સભ્યસંખ્યા</th>
                                        <th style='border:1px solid #fca5a5; padding:8px;'>પરિવારોની સંખ્યા (f)</th>
                                        <th style='border:1px solid #fca5a5; padding:8px;'>સમજૂતી</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>1 - 3</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>7</td>
                                        <td style='border:1px solid #fca5a5; padding:5px; color:#64748b;'>&larr; f<sub>0</sub> (ઉપરનો વર્ગ)</td>
                                    </tr>
                                    <tr style='background-color:#fef08a; border:2px solid #ca8a04;'>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>3 - 5</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#be123c;'>8</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#be123c;'>&larr; f<sub>1</sub> (સૌથી મોટી આવૃત્તિ)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>5 - 7</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>2</td>
                                        <td style='border:1px solid #fca5a5; padding:5px; color:#64748b;'>&larr; f<sub>2</sub> (નીચેનો વર્ગ)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>7 - 9</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>2</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>9 - 11</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'>1</td>
                                        <td style='border:1px solid #fca5a5; padding:5px;'></td>
                                    </tr>
                                </table>
                            </div>
                            <ul style='margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li>બહુલક વર્ગની અધઃસીમા <b>l = 3</b></li>
                                <li>વર્ગલંબાઈ <b>h = 2</b> (કારણ કે 5 - 3 = 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                Z = l + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f<sub>1</sub> - f<sub>0</sub></span><span>2f<sub>1</sub> - f<sub>0</sub> - f<sub>2</sub></span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; h<br><br>
                                
                                Z = 3 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8 - 7</span><span>2(8) - 7 - 2</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 2<br><br>
                                
                                Z = 3 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>16 - 9</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 2<br><br>
                                
                                Z = 3 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>7</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 2<br><br>
                                
                                Z = 3 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>7</span></span><br><br>
                                
                                <i style='color:#64748b;'>(2 ને 7 વડે ભાગતા 0.286 મળશે)</i><br>
                                Z = 3 + 0.286<br>
                                <b style='font-size:20px; color:#1d4ed8;'>Z = 3.286</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: આપેલ માહિતીનો બહુલક 3.286 છે.</p>
                        </div>
                    </div>
                    `
                },
            
                
    
                { 
                    question: "ઉદાહરણ 6: વિદ્યાર્થીઓના ગુણનો બહુલક શોધો (ઉદાહરણ 2 ની રકમ)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> ઉદાહરણ 2 માં આપેલા 30 વિદ્યાર્થીઓના ગુણના આવૃત્તિ-વિતરણ માટે <b>બહુલક</b> શોધો. (યાદ કરો, ત્યાં આપણે મધ્યક 62 શોધ્યો હતો).</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: કોષ્ટકમાંથી કિંમતો તારવવી</b><br>
                            કોષ્ટકમાં સૌથી મોટી આવૃત્તિ કઈ છે? <b>7</b>. <br>
                            તેથી <b>40-55</b> એ આપણો <b>બહુલક વર્ગ</b> બનશે.
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:400px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dcfce7; font-weight:bold; color:#14532d;'>
                                        <th style='border:1px solid #86efac; padding:8px;'>વર્ગ અંતરાલ (ગુણ)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>વિદ્યાર્થીઓની સંખ્યા (f)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>સમજૂતી</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>10 - 25</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>2</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>25 - 40</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>3</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#64748b;'>&larr; f<sub>0</sub> (ઉપરનો વર્ગ)</td>
                                    </tr>
                                    <tr style='background-color:#fef08a; border:2px solid #ca8a04;'>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>40 - 55</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#be123c;'>7</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#be123c;'>&larr; f<sub>1</sub> (સૌથી મોટી આવૃત્તિ)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>55 - 70</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>6</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#64748b;'>&larr; f<sub>2</sub> (નીચેનો વર્ગ)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>70 - 85</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>6</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>85 - 100</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>6</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                </table>
                            </div>
                            <ul style='margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li>બહુલક વર્ગની અધઃસીમા <b>l = 40</b></li>
                                <li>વર્ગલંબાઈ <b>h = 15</b> (કારણ કે 55 - 40 = 15)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                Z = l + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f<sub>1</sub> - f<sub>0</sub></span><span>2f<sub>1</sub> - f<sub>0</sub> - f<sub>2</sub></span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; h<br><br>
                                
                                Z = 40 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7 - 3</span><span>2(7) - 3 - 6</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 15<br><br>
                                
                                Z = 40 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>14 - 9</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 15<br><br>
                                
                                Z = 40 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>5</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 15<br><br>
                                
                                <i style='color:#64748b;'>(15 અને 5 નો છેદ ઉડતા 3 વધે: 15 / 5 = 3)</i><br>
                                Z = 40 + (4 &times; 3)<br>
                                Z = 40 + 12<br>
                                <b style='font-size:20px; color:#1d4ed8;'>Z = 52</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 સરખામણી અને નિષ્કર્ષ:</b><br>
                                આ જ દાખલામાં આપણે <b>મધ્યક 62</b> શોધ્યો હતો, જ્યારે <b>બહુલક 52</b> આવ્યો છે. <br>
                                આનો અર્થ એ થાય કે મહત્તમ વિદ્યાર્થીઓએ <b>52 ની આસપાસ</b> ગુણ મેળવ્યા છે (બહુલક), પરંતુ બધા જ 30 વિદ્યાર્થીઓના ગુણની સરેરાશ કાઢીએ તો તે <b>62</b> થાય છે (મધ્યક).
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ચાવી: મધ્યસ્થ (M) શોધવાનું સૂત્ર અને 'cf' ની ટ્રીક",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>મધ્યસ્થ શોધવા માટે એક નવું ખાનું બનાવવું પડે: સંચયી આવૃત્તિ (cf - Cumulative Frequency).</p>
                        
                        <div style='background-color:#ffffff; border:1px solid #fde047; padding:10px; border-radius:5px; text-align:center;'>
                            <b style='color:#be123c;'>મધ્યસ્થ (M) નું સૂત્ર:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:22px; font-weight:bold; color:#1d4ed8; padding:15px 0;'>
                                M = l + 
                                <span style='font-size:40px; font-weight:normal; margin:0 5px; vertical-align:middle;'>[</span>
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'>
                                    <span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 10px;'>&nbsp;n/2 - cf&nbsp;</span>
                                    <span style='padding:5px 10px 0 10px;'>f</span>
                                </span>
                                <span style='font-size:40px; font-weight:normal; margin:0 5px; vertical-align:middle;'>]</span>
                                &times; h
                            </div>
                        </div>
                        <ul style='line-height:2; margin-top:10px; font-size:15px; color:#0f172a;'>
                            <li><b>n/2</b> = કુલ આવૃત્તિના અડધા કરવા.</li>
                            <li><b>મધ્યસ્થ વર્ગ</b> = cf ના ખાનામાં <b>n/2</b> કરતાં <b>તરત જ મોટી</b> સંખ્યા ગોતો, તે આખો વર્ગ આપણો મધ્યસ્થ વર્ગ બનશે.</li>
                            <li><b>cf</b> = મધ્યસ્થ વર્ગની બરાબર <b>ઉપરના</b> વર્ગની સંચયી આવૃત્તિ.</li>
                            <li><b>f</b> = મધ્યસ્થ વર્ગની પોતાની આવૃત્તિ.</li>
                        </ul>
                    </div>
                    `
                },
                { 
                    question: "ઉદાહરણ 7: 51 છોકરીઓની ઊંચાઈનો મધ્યક ('થી ઓછા' પ્રકારનો દાખલો)", 
                    question_desc: "કોષ્ટકને સીધું કરવાની ટ્રીક",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન:</b> એક શાળાના ધોરણ 10 ની 51 છોકરીઓની ઊંચાઈ (cm માં) નો સર્વે કરવામાં આવ્યો અને નીચેની માહિતી મેળવવામાં આવી:<br>
                        <b>140 થી ઓછી:</b> 4<br>
                        <b>145 થી ઓછી:</b> 11<br>
                        <b>150 થી ઓછી:</b> 29<br>
                        <b>155 થી ઓછી:</b> 40<br>
                        <b>160 થી ઓછી:</b> 46<br>
                        <b>165 થી ઓછી:</b> 51<br>
                        આ માહિતીનો <b>મધ્યસ્થ</b> શોધો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>💡 માસ્ટર ચાવી (કોષ્ટકને સીધું કરવું):</b><br>
                            જ્યારે રકમમાં <b>"થી ઓછી"</b> એવો શબ્દ હોય, ત્યારે આપેલી સંખ્યા <b>આવૃત્તિ (f) નથી, પણ સીધી cf જ છે!</b><br>
                            સાચી આવૃત્તિ (f) શોધવા માટે આપણે <b>નીચેની cf માંથી ઉપરની cf બાદ (માઇનસ)</b> કરતા જઈશું.<br>
                            ઉદાહરણ તરીકે: બીજી આવૃત્તિ = 11 - 4 = 7. ત્રીજી આવૃત્તિ = 29 - 11 = 18.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d;'>ગણતરીનું કોષ્ટક:</b><br>
                            અહીં કુલ n = 51 છે. તેથી <b>n/2 = 51/2 = 25.5</b> થાય.<br>
                            cf ના ખાનામાં <b>25.5 કરતાં તરત મોટી</b> સંખ્યા કઈ છે? <b>29</b>. <br>
                            તેથી <b>145 - 150</b> એ આપણો <b>મધ્યસ્થ વર્ગ</b> બનશે.
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:450px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dcfce7; font-weight:bold; color:#14532d;'>
                                        <th style='border:1px solid #86efac; padding:8px;'>વર્ગ અંતરાલ (ઊંચાઈ)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>આવૃત્તિ (f) <i>(બાદબાકી કરીને)</i></th>
                                        <th style='border:1px solid #86efac; padding:8px;'>સંચયી આવૃત્તિ (cf)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>સમજૂતી</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>140 થી ઓછી</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>4</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>4</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>140 - 145</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>11 - 4 = <b>7</b></td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#be123c; font-weight:bold;'>11</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#64748b;'>&larr; આ આપણો <b>cf</b> બનશે</td>
                                    </tr>
                                    <tr style='background-color:#fef08a; border:2px solid #ca8a04;'>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>145 - 150</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#1d4ed8;'>29 - 11 = <b>18</b></td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>29</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#1d4ed8;'>&larr; આ આપણો <b>f</b> બનશે</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>150 - 155</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>40 - 29 = <b>11</b></td>
                                        <td style='border:1px solid #86efac; padding:5px;'>40</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>155 - 160</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>46 - 40 = <b>6</b></td>
                                        <td style='border:1px solid #86efac; padding:5px;'>46</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>160 - 165</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>51 - 46 = <b>5</b></td>
                                        <td style='border:1px solid #86efac; padding:5px;'>51</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr style='background-color:#bbf7d0; font-weight:bold;'>
                                        <td style='border:1px solid #86efac; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>n = 51</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>-</td>
                                        <td style='border:1px solid #86efac; padding:8px;'></td>
                                    </tr>
                                </table>
                            </div>

                            <ul style='margin-bottom:10px; font-size:16px; color:#0f172a; line-height:2;'>
                                <li>બહુલક વર્ગની અધઃસીમા <b style='color:#047857;'>l = 145</b></li>
                                <li><b style='color:#047857;'>n/2 = 25.5</b></li>
                                <li>ઉપરના વર્ગની સંચયી આવૃત્તિ <b style='color:#be123c;'>cf = 11</b></li>
                                <li>તે જ વર્ગની આવૃત્તિ <b style='color:#1d4ed8;'>f = 18</b></li>
                                <li>વર્ગલંબાઈ <b style='color:#047857;'>h = 5</b></li>
                            </ul>

                            <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; border-radius:5px;'>
                                <b style='color:#1e3a8a;'>સૂત્રમાં કિંમત મૂકવી:</b><br>
                                <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                    M = l + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n/2 - cf</span><span>f</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; h<br><br>
                                    
                                    M = 145 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25.5 - 11</span><span>18</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 5<br><br>
                                    
                                    M = 145 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14.5</span><span>18</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 5<br><br>
                                    
                                    <i style='color:#64748b;'>(14.5 ને 5 વડે ગુણતા 72.5 મળે)</i><br>
                                    M = 145 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>72.5</span><span>18</span></span><br><br>
                                    
                                    <i style='color:#64748b;'>(72.5 ને 18 વડે ભાગતા આશરે 4.03 મળે)</i><br>
                                    M = 145 + 4.03<br>
                                    <b style='font-size:20px; color:#1d4ed8;'>M = 149.03 cm</b>
                                </div>
                                <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: છોકરીઓની ઊંચાઈનો મધ્યસ્થ 149.03 સેમી છે.</p>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                { 
                    question: "🌟 ઉદાહરણ 8: ખૂટતી આવૃત્તિઓ x અને y શોધો (મોસ્ટ IMP)", 
                    question_desc: "બોર્ડમાં 4 ગુણ માટે પૂછાતો સૌથી અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>પ્રશ્ન (પાઠ્યપુસ્તક મુજબ):</b> નીચે આપેલ આવૃત્તિ-વિતરણનો <b>મધ્યસ્થ 28.5</b> છે. જો <b>કુલ આવૃત્તિ 60</b> હોય, તો <b>x અને y નાં મૂલ્યો શોધો.</b></p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>સ્ટેપ 1: સંચયી આવૃત્તિ (cf) નું કોષ્ટક બનાવવું</b><br>
                            આપણને કુલ આવૃત્તિ <b>n = 60</b> આપેલી છે. તેથી <b>n/2 = 30</b> થાય.
                            
                            <div style='overflow-x:auto; margin:10px 0;'>
                                <table style='width:100%; min-width:500px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                    <tr style='background-color:#dcfce7; font-weight:bold; color:#14532d;'>
                                        <th style='border:1px solid #86efac; padding:8px;'>વર્ગ અંતરાલ</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>આવૃત્તિ (f)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>સંચયી આવૃત્તિ (cf)</th>
                                        <th style='border:1px solid #86efac; padding:8px;'>સમજૂતી</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>0 - 10</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>5</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>5</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>10 - 20</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#be123c; font-weight:bold;'>x</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#be123c; font-weight:bold;'>5 + x</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#64748b;'>&larr; આ આપણો <b>cf</b> બનશે</td>
                                    </tr>
                                    <tr style='background-color:#fef08a; border:2px solid #ca8a04;'>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>20 - 30</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#1d4ed8;'>20</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold;'>25 + x</td>
                                        <td style='border:1px solid #ca8a04; padding:5px; font-weight:bold; color:#1d4ed8;'>&larr; આ આપણો <b>f</b> બનશે</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>30 - 40</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>15</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>40 + x</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>40 - 50</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#ea580c; font-weight:bold;'>y</td>
                                        <td style='border:1px solid #86efac; padding:5px; color:#ea580c; font-weight:bold;'>40 + x + y</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #86efac; padding:5px;'>50 - 60</td>
                                        <td style='border:1px solid #86efac; padding:5px;'>5</td>
                                        <td style='border:1px solid #86efac; padding:5px; font-weight:bold;'>45 + x + y</td>
                                        <td style='border:1px solid #86efac; padding:5px;'></td>
                                    </tr>
                                    <tr style='background-color:#bbf7d0; font-weight:bold;'>
                                        <td style='border:1px solid #86efac; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>60</td>
                                        <td style='border:1px solid #86efac; padding:8px;'>-</td>
                                        <td style='border:1px solid #86efac; padding:8px;'></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સ્ટેપ 2: પહેલું સમીકરણ બનાવવું</b><br>
                            કોષ્ટકની છેલ્લી સંચયી આવૃત્તિ હંમેશા કુલ આવૃત્તિ (60) બરાબર જ થાય.<br>
                            <div style='font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                45 + x + y = 60<br>
                                x + y = 60 - 45<br>
                                <b style='color:#1d4ed8; font-size:18px;'>x + y = 15</b> &nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a;'>સ્ટેપ 3: મધ્યસ્થ વર્ગ નક્કી કરવો અને કિંમતો તારવવી</b><br>
                            આપણને <b>મધ્યસ્થ (M) = 28.5</b> આપેલો છે. આ કિંમત <b>20 અને 30 ની વચ્ચે</b> આવે છે.<br>
                            તેથી <b>20-30</b> એ આપણો <b>મધ્યસ્થ વર્ગ</b> છે!
                            <ul style='margin-bottom:0; margin-top:5px; font-size:16px; color:#0f172a; line-height:2;'>
                                <li>અધઃસીમા <b style='color:#047857;'>l = 20</b></li>
                                <li>વર્ગલંબાઈ <b style='color:#047857;'>h = 10</b></li>
                                <li>ઉપરના વર્ગની સંચયી આવૃત્તિ <b><span style='color:#be123c;'>cf = (5 + x)</span></b></li>
                                <li>તે જ વર્ગની આવૃત્તિ <b><span style='color:#1d4ed8;'>f = 20</span></b></li>
                            </ul>
                        </div>

                        <div style='background-color:#f8fafc; border-left:4px solid #64748b; padding:10px;'>
                            <b style='color:#0f172a;'>સ્ટેપ 4: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                M = l + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n/2 - cf</span><span>f</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; h<br><br>
                                
                                28.5 = 20 + <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>30 - (5 + x)</span><span>20</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 10<br><br>
                                
                                <i style='color:#64748b;'>(પહેલા 20 ને ડાબી બાજુ માઇનસમાં લઈ જતાં અને કૌંસ ખોલતાં)</i><br>
                                28.5 - 20 = <span style='font-size:30px; font-weight:normal; vertical-align:middle;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>30 - 5 - x</span><span>20</span></span><span style='font-size:30px; font-weight:normal; vertical-align:middle;'>]</span> &times; 10<br><br>
                                
                                <i style='color:#64748b;'>(10 અને 20 નો છેદ ઉડતા છેદમાં 2 વધશે)</i><br>
                                8.5 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25 - x</span><span>2</span></span><br><br>
                                
                                <i style='color:#64748b;'>(2 ને 8.5 સાથે ગુણાકારમાં લઈ જતાં)</i><br>
                                8.5 &times; 2 = 25 - x<br>
                                17 = 25 - x<br>
                                x = 25 - 17<br>
                                <b style='font-size:20px; color:#be123c;'>x = 8</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px;'>
                                <b style='color:#15803d;'>સ્ટેપ 5: સમીકરણ 1 માં x ની કિંમત મૂકતાં (y શોધવા)</b><br>
                                <div style='font-family:monospace; font-size:16px; margin-top:5px; line-height:2.2;'>
                                    x + y = 15<br>
                                    8 + y = 15<br>
                                    y = 15 - 8<br>
                                    <b style='font-size:20px; color:#ea580c;'>y = 7</b>
                                </div>
                                <p style='margin-top:10px; font-weight:bold; color:#0f172a; font-size:18px;'>અંતિમ જવાબ: ખૂટતી આવૃત્તિઓ x = 8 અને y = 7 છે.</p>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        }
                
            
    
                
    
    
};

