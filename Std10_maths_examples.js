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
    }
    
    
    
};

