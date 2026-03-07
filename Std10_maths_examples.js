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
    }
    
};

