var njMathsExercise = {
    // ------------------------------------
    // પ્રકરણ 1: વાસ્તવિક સંખ્યાઓ 
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "વાસ્તવિક સંખ્યાઓ (સ્વાધ્યાયના દાખલા)",
        "qa_list": [
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 1: સંખ્યાઓને અવિભાજ્ય અવયવોના ગુણાકાર સ્વરૂપે દર્શાવો", 
                answer: "<b>રીત (અવયવ વૃક્ષ - Factor Tree):</b> આપેલી સંખ્યાનો નાનામાં નાની અવિભાજ્ય સંખ્યા (2, 3, 5, 7...) વડે ભાગ ચલાવવો.<br><br><b>દાખલો (i): 140</b><br>140 = 2 × 70<br>70 = 2 × 35<br>35 = 5 × 7<br>7 = 7 × 1<br><b>જવાબ:</b> 140 = 2 × 2 × 5 × 7 = <b>2² × 5 × 7</b><br><br><b>દાખલો (iv): 5005</b><br>5005 (છેલ્લો અંક 5 છે, તેથી 5 વડે ભાગ ચાલશે)<br>5005 = 5 × 1001<br>1001 (7 વડે ભાગ ચાલશે) = 7 × 143<br>143 (11 વડે ભાગ ચાલશે) = 11 × 13<br><b>જવાબ:</b> 5005 = <b>5 × 7 × 11 × 13</b><br><br><span style='font-size:14px; color:#1d4ed8; font-weight:bold;'>💡 શોર્ટકટ ટ્રીક:</span><br>વિભાજ્યતાની ચાવીઓ યાદ રાખો: <br>• છેલ્લો અંક 0, 2, 4, 6, 8 હોય તો <b>2</b> વડે ભાગ ચાલે.<br>• અંકોના સરવાળાને 3 વડે ભાગી શકાય તો <b>3</b> વડે ભાગ ચાલે.<br>• છેલ્લો અંક 0 કે 5 હોય તો <b>5</b> વડે ભાગ ચાલે." 
            },
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 2: ગુ.સા.અ. અને લ.સા.અ. શોધો અને ચકાસો", 
                answer: "<b>પ્રશ્ન:</b> 26 અને 91 નો ગુ.સા.અ. અને લ.સા.અ. શોધો અને ચકાસો કે ગુ.સા.અ. × લ.સા.અ. = બંને સંખ્યાઓનો ગુણાકાર.<br><br><b>ગણતરી:</b><br>26 = 2 × 13<br>91 = 7 × 13<br><br><b>ગુ.સા.અ. (HCF):</b> બંનેમાં સામાન્ય અવયવ <b>13</b> છે.<br><b>લ.સા.અ. (LCM):</b> બધા અવયવો લેતા = 2 × 7 × 13 = <b>182</b><br><br><b>ચકાસણી (Verification):</b><br>ડાબી બાજુ (L.H.S.) = ગુ.સા.અ. × લ.સા.અ. = 13 × 182 = <b>2366</b><br>જમણી બાજુ (R.H.S.) = 26 × 91 = <b>2366</b><br>આમ, ડા.બા. = જ.બા. સાબિત થાય છે.<br><br><span style='font-size:14px; color:#047857; font-weight:bold;'>🔥 સ્માર્ટ ટ્રીક:</span><br>પરીક્ષામાં જવાબ સાચો છે કે ખોટો તે આ સૂત્ર (HCF × LCM = a × b) માં કિંમત મૂકીને રફ કામમાં 1 મિનિટમાં ચેક કરી લેવું!" 
            },
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 3: 3 સંખ્યાઓનો ગુ.સા.અ. અને લ.સા.અ.", 
                answer: "<b>પ્રશ્ન (i):</b> 12, 15 અને 21 નો ગુ.સા.અ. અને લ.સા.અ. શોધો.<br><br><b>અવયવો:</b><br>12 = 2² × 3<br>15 = 3 × 5<br>21 = 3 × 7<br><br><b>ગુ.સા.અ.:</b> ત્રણેયમાં સામાન્ય હોય તેવો અંક માત્ર '3' છે.<br>તેથી, <b>ગુ.સા.અ. = 3</b><br><br><b>લ.સા.અ.:</b> બધા જ અંકોની મોટી ઘાત લેવી (2², 3, 5, 7).<br>લ.સા.અ. = 2² × 3 × 5 × 7 = 4 × 3 × 5 × 7 = <b>420</b>" 
            },
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 4: સૂત્રની મદદથી લ.સા.અ. શોધવો (V.IMP)", 
                answer: "<b>પ્રશ્ન:</b> જો ગુ.સા.અ. (306, 657) = 9 આપેલ હોય, તો લ.સા.અ. (306, 657) શોધો.<br><br><b>સમજૂતી:</b> અહીં આપણે અવયવ પાડવાની લાંબી રીત નથી કરવાની, સીધું સૂત્ર વાપરવાનું છે.<br><br><b>સૂત્ર:</b> લ.સા.અ. = (બંને સંખ્યાઓનો ગુણાકાર) / ગુ.સા.અ.<br><br><b>ગણતરી:</b><br>લ.સા.અ. = (306 × 657) / 9<br>છેદ ઉડાડતા: 306 ને 9 વડે ભાગીએ તો 34 આવે. (9 × 34 = 306)<br>લ.સા.અ. = 34 × 657<br><b>લ.સા.અ. = 22338</b><br><br><span style='font-size:14px; color:#be123c; font-weight:bold;'>⭐ બોર્ડ માટે ખાસ:</span> આ દાખલો 2 માર્ક્સમાં વારંવાર પૂછાય છે. આમાં માત્ર ગુણાકાર અને ભાગાકારમાં ભૂલ ન પડે તેનું ધ્યાન રાખવું." 
            },
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 6: શા માટે આપેલી સંખ્યાઓ વિભાજ્ય છે?", 
                answer: "<b>પ્રશ્ન:</b> સમજાવો કે 7 × 11 × 13 + 13 એ વિભાજ્ય સંખ્યા શા માટે છે?<br><br><b>ગણતરી:</b><br>આપેલી રકમ: (7 × 11 × 13) + 13<br>બંને પદોમાંથી <b>13 સામાન્ય (Common)</b> કાઢતા:<br>= 13 [ (7 × 11) + 1 ]<br>= 13 [ 77 + 1 ]<br>= 13 × 78<br><br><b>નિષ્કર્ષ:</b><br>અહીં મળતી સંખ્યાને 1 અને પોતાના સિવાય અન્ય અવયવો (જેમ કે 13 અને 78) છે. જે સંખ્યાને 2 કરતાં વધુ અવયવ હોય તે <b>વિભાજ્ય સંખ્યા</b> કહેવાય છે. તેથી આ સંખ્યા વિભાજ્ય છે.<br><br><span style='font-size:14px; color:#1d4ed8; font-weight:bold;'>💡 શોર્ટકટ ટ્રીક:</span><br>જ્યારે પણ આવો દાખલો પૂછાય, પ્લસ (+) ની પાછળ જે અંક હોય તેને કોમન (સામાન્ય) કાઢી લેવો. એટલે દાખલો તરત સોલ્વ થઈ જશે!" 
            },
            { 
                question: "સ્વાધ્યાય 1.1 - પ્રશ્ન 7: રમતનું મેદાન (કૂટપ્રશ્ન)", 
                answer: "<b>પ્રશ્ન:</b> સોનિયાને મેદાનનું એક ચક્કર પૂરું કરતા 18 મિનિટ લાગે છે, જ્યારે રવિને 12 મિનિટ લાગે છે. બંને એક જ સમયે અને એક જ દિશામાં દોડવાનું શરૂ કરે, તો કેટલી મિનિટ બાદ ફરી પ્રારંભ બિંદુ પર ભેગા થશે?<br><br><span style='font-size:14px; color:#047857; font-weight:bold;'>🔥 સ્માર્ટ ટ્રીક (વાક્ય પકડો):</span><br>જ્યારે પણ રકમમાં <b>'ફરી ભેગા ક્યારે થશે?'</b>, <b>'એકસાથે બેલ ક્યારે વાગશે?'</b> કે <b>'ઓછામાં ઓછો સમય'</b> એવા શબ્દો આવે, ત્યારે આંખ બંધ કરીને <b>લ.સા.અ. (LCM)</b> જ શોધવાનો!<br><br><b>ગણતરી (18 અને 12 નો લ.સા.અ.):</b><br>18 = 2 × 3²<br>12 = 2² × 3<br>લ.સા.અ. (બધા અંકોની મોટી ઘાત) = 2² × 3² = 4 × 9 = <b>36</b><br><br><b>જવાબ:</b> સોનિયા અને રવિ <b>36 મિનિટ</b> પછી ફરીથી પ્રારંભ બિંદુ પર ભેગા થશે." 
            },
            { 
                question: "સ્વાધ્યાય 1.2 - પ્રશ્ન 1: સાબિત કરો કે √5 અસંમેય છે (બોર્ડનો હોટ ફેવરિટ)", 
                answer: "<b>વિરોધાભાસની રીત:</b><br><br><b>સ્ટેપ 1:</b> ધારો કે √5 સંમેય સંખ્યા છે. તેથી √5 = a/b (જ્યાં a અને b પરસ્પર અવિભાજ્ય છે, એટલે કે તેમનો 1 સિવાય કોઈ અવયવ નથી).<br><b>સ્ટેપ 2:</b> બંને બાજુ વર્ગ કરતા: 5 = a² / b² ➜ <b>a² = 5b²</b><br><b>સ્ટેપ 3:</b> આનો અર્થ એ કે a² એ 5 વડે વિભાજ્ય છે, તેથી <b>'a' પણ 5 વડે વિભાજ્ય થાય</b>. ધારો કે a = 5c.<br><b>સ્ટેપ 4:</b> a ની કિંમત સમીકરણમાં મુકતા: (5c)² = 5b² ➜ 25c² = 5b² ➜ <b>b² = 5c²</b><br><b>સ્ટેપ 5:</b> આનો અર્થ એ કે b² પણ 5 વડે વિભાજ્ય છે, તેથી <b>'b' પણ 5 વડે વિભાજ્ય થાય</b>.<br><br><b>નિષ્કર્ષ:</b> a અને b બંનેનો સામાન્ય અવયવ 5 મળ્યો, જે આપણી ધારણા (બંને અવિભાજ્ય છે) નો વિરોધાભાસ કરે છે. તેથી, આપણી ધારણા ખોટી છે અને <b>√5 અસંમેય છે</b>." 
            },
            { 
                question: "સ્વાધ્યાય 1.2 - પ્રશ્ન 2: સાબિત કરો કે 3 + 2√5 અસંમેય છે", 
                answer: "<b>ગણતરી:</b><br>ધારો કે 3 + 2√5 સંમેય સંખ્યા છે.<br>તેથી, 3 + 2√5 = a/b (જ્યાં a, b પૂર્ણાંકો છે, b ≠ 0)<br><br>આપણો ટાર્ગેટ √5 ને એકલો (સૂત્રનો કર્તા) બનાવવાનો છે:<br>2√5 = (a/b) - 3<br>2√5 = (a - 3b) / b<br><b>√5 = (a - 3b) / 2b</b><br><br><b>નિષ્કર્ષ:</b><br>અહીં 2, 3, a અને b પૂર્ણાંકો હોવાથી જમણી બાજુ <i>(a - 3b) / 2b</i> <b>સંમેય સંખ્યા</b> બને. <br>જેનો અર્થ એ થાય કે <i>√5</i> પણ સંમેય હોવી જોઈએ. <br>પરંતુ આપણે જાણીએ છીએ કે <b>√5 અસંમેય છે</b>. <br>આ વિરોધાભાસ છે, તેથી આપણી ધારણા ખોટી છે. આમ, <b>3 + 2√5 અસંમેય છે</b>.<br><br><span style='font-size:14px; color:#1d4ed8; font-weight:bold;'>💡 શોર્ટકટ ટ્રીક:</span> વર્ગમૂળ વાળા પદને એકલું પાડો. સામેની બાજુને સંમેય કહી દો અને વર્ગમૂળ વાળાને અસંમેય. બસ, વિરોધાભાસ લખી નાખો એટલે દાખલો પૂરો!" 
            },
            { 
                question: "સ્વાધ્યાય 1.2 - પ્રશ્ન 3 (i): સાબિત કરો કે 1/√2 અસંમેય છે", 
                answer: "<b>ગણતરી:</b><br>ધારો કે 1/√2 સંમેય સંખ્યા છે.<br>તેથી, 1/√2 = a/b (જ્યાં a, b પૂર્ણાંકો છે, બંને અશૂન્ય છે)<br><br>બંને બાજુ ઉલટાવતા (વ્યસ્ત લેતા):<br><b>√2 = b / a</b><br><br><b>નિષ્કર્ષ:</b><br>અહીં a અને b પૂર્ણાંકો હોવાથી જમણી બાજુ <i>(b/a)</i> સંમેય સંખ્યા છે. <br>આથી ડાબી બાજુ <i>√2</i> પણ સંમેય થવી જોઈએ. <br>પરંતુ આપણે અગાઉ સાબિત કર્યું છે કે <b>√2 અસંમેય છે</b>. <br>તેથી આપણી ધારણા ખોટી છે, અને <b>1/√2 અસંમેય સંખ્યા છે</b>." 
            }
        ]
    },
            
        // ------------------------------------
        // પ્રકરણ 2: બહુપદીઓ
        // ------------------------------------
        "2": {
            "chapterName": "પ્રકરણ 2 ",
            "chapterTitle": "બહુપદીઓ ",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી (ટ્રીક): આલેખ પરથી શૂન્યોની સંખ્યા કેવી રીતે ગણવી?",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>સ્વાધ્યાય 2.1 નો એકમાત્ર નિયમ, જે તમને 1 માર્ક પાક્કો અપાવશે!</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <b style='color:#be123c;'>ગોલ્ડન રૂલ:</b><br>
                            કોઈપણ બહુપદી <b>y = p(x)</b> નો આલેખ આડી લીટી એટલે કે <b>X-અક્ષને</b> જેટલા બિંદુઓમાં છેદે (અથવા અડે), તેટલી જ તે બહુપદીના શૂન્યોની સંખ્યા હોય.<br>
                            <i>(નોંધ: Y-અક્ષને ક્યાં છેદે છે તે જોવાનું જ નથી, ફક્ત X-અક્ષ જ જોવાની છે!)</i>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વાધ્યાય 2.1: નીચેની આકૃતિઓમાં બહુપદી y = p(x) ના આલેખ આપેલ છે, તો p(x) ના શૂન્યોની સંખ્યા શોધો.", 
                    question_desc: "તમામ 6 આલેખોની સમજૂતી",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        
                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-bottom:20px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(i) આલેખ 1</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="100" x2="210" y2="100" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <polygon points="210,100 200,95 200,105" fill="#0f172a"/>
                                    <polygon points="10,100 20,95 20,105" fill="#0f172a"/>
                                    <polygon points="110,10 105,20 115,20" fill="#0f172a"/>
                                    <polygon points="110,140 105,130 115,130" fill="#0f172a"/>
                                    <text x="200" y="115" font-weight="bold">X</text>
                                    <text x="15" y="115" font-weight="bold">X'</text>
                                    <text x="120" y="20" font-weight="bold">Y</text>
                                    <text x="120" y="135" font-weight="bold">Y'</text>
                                    
                                    <line x1="30" y1="50" x2="190" y2="50" stroke="#dc2626" stroke-width="3" />
                                </svg>
                            </div>
                            <div style='background-color:#fef2f2; padding:10px; border-radius:5px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>જવાબ: શૂન્યોની સંખ્યા 0 છે.</b><br>
                                <b>કારણ:</b> અહીં લાલ રંગનો આલેખ X-અક્ષને સમાંતર છે, તે <b>X-અક્ષને એકપણ બિંદુમાં છેદતો નથી</b>. તેથી તેના શૂન્યોની સંખ્યા 0 છે.
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-bottom:20px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(ii) આલેખ 2</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="210" y2="75" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <text x="200" y="90" font-weight="bold">X</text><text x="120" y="20" font-weight="bold">Y</text>
                                    
                                    <path d="M 40 120 Q 80 120 100 75 T 160 20" fill="none" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="100" cy="75" r="5" fill="#2563eb" />
                                </svg>
                            </div>
                            <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a;'>
                                <b style='color:#14532d;'>જવાબ: શૂન્યોની સંખ્યા 1 છે.</b><br>
                                <b>કારણ:</b> આલેખ X-અક્ષને માત્ર <b>1 જ બિંદુમાં</b> (વાદળી ટપકું) છેદે છે.
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-bottom:20px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(iii) આલેખ 3</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="210" y2="75" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <text x="200" y="90" font-weight="bold">X</text><text x="120" y="20" font-weight="bold">Y</text>
                                    
                                    <path d="M 20 130 C 50 20, 100 20, 110 75 C 120 120, 160 120, 180 20" fill="none" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="48" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="110" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="166" cy="75" r="5" fill="#2563eb" />
                                </svg>
                            </div>
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; border-left:4px solid #3b82f6;'>
                                <b style='color:#1e3a8a;'>જવાબ: શૂન્યોની સંખ્યા 3 છે.</b><br>
                                <b>કારણ:</b> આલેખ X-અક્ષને <b>3 અલગ-અલગ બિંદુઓમાં</b> છેદે છે.
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-bottom:20px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(iv) આલેખ 4 (પરવલય)</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="210" y2="75" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <text x="200" y="90" font-weight="bold">X</text><text x="120" y="20" font-weight="bold">Y</text>
                                    
                                    <path d="M 30 20 Q 70 150 110 20" fill="none" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="48" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="92" cy="75" r="5" fill="#2563eb" />
                                </svg>
                            </div>
                            <div style='background-color:#fdf4ff; padding:10px; border-radius:5px; border-left:4px solid #c026d3;'>
                                <b style='color:#86198f;'>જવાબ: શૂન્યોની સંખ્યા 2 છે.</b><br>
                                <b>કારણ:</b> આ U આકારનો આલેખ (જેને પરવલય કહેવાય છે) તે X-અક્ષને <b>2 બિંદુઓમાં</b> છેદે છે.
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-bottom:20px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(v) આલેખ 5</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="210" y2="75" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <text x="200" y="90" font-weight="bold">X</text><text x="120" y="20" font-weight="bold">Y</text>
                                    
                                    <path d="M 30 130 Q 50 10 80 75 T 140 75 Q 160 140 180 20" fill="none" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="43" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="80" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="140" cy="75" r="5" fill="#2563eb" />
                                    <circle cx="168" cy="75" r="5" fill="#2563eb" />
                                </svg>
                            </div>
                            <div style='background-color:#fff7ed; padding:10px; border-radius:5px; border-left:4px solid #ea580c;'>
                                <b style='color:#c2410c;'>જવાબ: શૂન્યોની સંખ્યા 4 છે.</b><br>
                                <b>કારણ:</b> આલેખ X-અક્ષને કુલ <b>4 બિંદુઓમાં</b> છેદે છે.
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(vi) આલેખ 6 (ખાસ ધ્યાન આપવું)</b>
                            <div style='text-align:center; margin: 15px 0;'>
                                
                                <svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="100" x2="210" y2="100" stroke="#0f172a" stroke-width="2" />
                                    <line x1="110" y1="10" x2="110" y2="140" stroke="#0f172a" stroke-width="2" />
                                    <text x="200" y="115" font-weight="bold">X</text><text x="120" y="20" font-weight="bold">Y</text>
                                    
                                    <path d="M 20 140 Q 40 40 60 100 Q 80 140 110 100 Q 140 60 160 100 Q 180 140 200 40" fill="none" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="51" cy="100" r="5" fill="#2563eb" />
                                    <circle cx="110" cy="100" r="5" fill="#2563eb" />
                                    <circle cx="169" cy="100" r="5" fill="#2563eb" />
                                </svg>
                            </div>
                            <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a;'>
                                <b style='color:#14532d;'>જવાબ: શૂન્યોની સંખ્યા 3 છે.</b><br>
                                <b>કારણ:</b> અહીં આલેખ X-અક્ષને 1 જગ્યાએ છેદે છે અને 2 જગ્યાએ <b>સ્પર્શે (અડે)</b> છે. સ્પર્શ કરતા બિંદુને પણ શૂન્ય ગણવામાં આવે છે. તેથી કુલ <b>3 બિંદુઓ</b> છે.
                            </div>
                        </div>

                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ચાવી: શૂન્યો શોધવા અને સંબંધ ચકાસવાના સૂત્રો",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>સ્વાધ્યાય 2.2 માટે આટલું મગજમાં છાપી લો!</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <b style='color:#be123c;'>દ્વિઘાત બહુપદીનું પ્રમાણિત રૂપ:</b> <b>ax&sup2; + bx + c</b><br>
                            આના બે શૂન્યોને આપણે <b>&alpha; (આલ્ફા)</b> અને <b>&beta; (બીટા)</b> કહીશું.<br><br>
                            
                            <b style='color:#1d4ed8;'>૧. શૂન્યોનો સરવાળો:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:16px; font-weight:bold; padding:5px 0;'>
                                &alpha; + &beta; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-b</span><span>a</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-(x નો સહગુણક)</span><span>x&sup2; નો સહગુણક</span></span>
                            </div>
                            
                            <b style='color:#047857;'>૨. શૂન્યોનો ગુણાકાર:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-size:16px; font-weight:bold; padding:5px 0;'>
                                &alpha; &times; &beta; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>c</span><span>a</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #047857; display:block; padding:0 3px;'>અચળ પદ</span><span>x&sup2; નો સહગુણક</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 1(i): x² - 2x - 8 ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> નીચે દર્શાવેલ દ્વિઘાત બહુપદીના શૂન્યો શોધો અને તેમના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો: <b>x&sup2; - 2x - 8</b></p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ભાગ 1: શૂન્યો શોધવા (મધ્યમ પદના ભાગલા પાડીને)</b><br>
                            આપણે એવી બે સંખ્યાઓ શોધવાની છે જેનો <b>ગુણાકાર -8</b> થાય અને <b>સરવાળો/બાદબાકી -2</b> થાય. તેવી સંખ્યાઓ <b>-4 અને +2</b> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                p(x) = x&sup2; - 2x - 8 = 0 લેતાં,<br>
                                x&sup2; - 4x + 2x - 8 = 0<br>
                                x(x - 4) + 2(x - 4) = 0<br>
                                (x - 4)(x + 2) = 0<br>
                                x - 4 = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; x + 2 = 0<br>
                                <b style='font-size:20px; color:#15803d;'>x = 4 &nbsp;&nbsp;કે&nbsp;&nbsp; x = -2</b>
                            </div>
                            <p style='margin-top:5px; color:#0f172a;'>તેથી બહુપદીના બે શૂન્યો <b>4 અને -2</b> છે.</p>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ભાગ 2: સહગુણકો વચ્ચેનો સંબંધ ચકાસવો</b><br>
                            અહીં ax&sup2; + bx + c સાથે સરખાવતાં: <b>a = 1, b = -2, c = -8</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                4 + (-2) = 2<br>
                                સૂત્ર મુજબ ચકાસણી: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-2)</span><span>1</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(x નો સહગુણક)</span><span>x&sup2; નો સહગુણક</span></span><br><br>
                                
                                <b style='color:#1d4ed8;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                4 &times; (-2) = -8<br>
                                સૂત્ર મુજબ ચકાસણી: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>1</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>અચળ પદ</span><span>x&sup2; નો સહગુણક</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 1(ii): 4s² - 4s + 1 ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <b>4s&sup2; - 4s + 1</b> ના શૂન્યો શોધો અને સંબંધ ચકાસો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>ભાગ 1: શૂન્યો શોધવા</b><br>
                            અહીં 4 &times; 1 = 4. આપણે એવી બે સંખ્યાઓ શોધવાની છે જેનો <b>ગુણાકાર 4</b> થાય અને <b>સરવાળો -4</b> થાય. તેવી સંખ્યાઓ <b>-2 અને -2</b> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                4s&sup2; - 4s + 1 = 0<br>
                                4s&sup2; - 2s - 2s + 1 = 0<br>
                                2s(2s - 1) - 1(2s - 1) = 0<br>
                                (2s - 1)(2s - 1) = 0<br>
                                2s - 1 = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; 2s - 1 = 0<br>
                                <b style='font-size:20px; color:#be123c;'>s = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>1</span><span>2</span></span> &nbsp;&nbsp;કે&nbsp;&nbsp; s = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>1</span><span>2</span></span></b>
                            </div>
                            <p style='margin-top:5px; color:#0f172a;'>તેથી બહુપદીના બે શૂન્યો <b>1/2 અને 1/2</b> છે.</p>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c;'>ભાગ 2: સંબંધ ચકાસવો</b><br>
                            અહીં <b>a = 4, b = -4, c = 1</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <b style='color:#9a3412;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>2</span></span> = 1<br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-4)</span><span>4</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>4</span></span> = 1 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span><br><br>
                                
                                <b style='color:#9a3412;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span><br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 1(iii): 6x² - 3 - 7x ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    question_desc: "રકમ આડીઅવળી છે તેને ગોઠવવાની ટ્રીક",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <b>6x&sup2; - 3 - 7x</b> ના શૂન્યો શોધો અને સંબંધ ચકાસો.</p>

                        <div style='background-color:#fefce8; border:2px dashed #eab308; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#854d0e;'>💡 ગોલ્ડન ટ્રીક:</b><br>
                            સૌથી પહેલા બહુપદીને ઘાતના ઉતરતા ક્રમમાં ગોઠવવી પડે!<br>
                            સાચું સ્વરૂપ: <b>6x&sup2; - 7x - 3</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ભાગ 1: શૂન્યો શોધવા</b><br>
                            અહીં 6 &times; (-3) = -18. આપણે એવી સંખ્યા શોધવાની જેનો <b>ગુણાકાર -18</b> અને <b>બાદબાકી -7</b> થાય. સંખ્યાઓ <b>-9 અને +2</b> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                6x&sup2; - 7x - 3 = 0<br>
                                6x&sup2; - 9x + 2x - 3 = 0<br>
                                3x(2x - 3) + 1(2x - 3) = 0<br>
                                (2x - 3)(3x + 1) = 0<br>
                                2x - 3 = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; 3x + 1 = 0<br>
                                2x = 3 &nbsp;&nbsp;કે&nbsp;&nbsp; 3x = -1<br>
                                <b style='font-size:20px; color:#15803d;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>3</span><span>2</span></span> &nbsp;&nbsp;કે&nbsp;&nbsp; x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>-1</span><span>3</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ભાગ 2: સંબંધ ચકાસવો</b><br>
                            અહીં <b>a = 6, b = -7, c = -3</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span> + <span style='font-size:20px;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>3</span></span><span style='font-size:20px;'>]</span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9 - 2</span><span>6</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>6</span></span><br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-7)</span><span>6</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>6</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span><br><br>
                                
                                <b style='color:#1d4ed8;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                <span style='font-size:20px;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span><span style='font-size:20px;'>]</span> &times; <span style='font-size:20px;'>[</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>3</span></span><span style='font-size:20px;'>]</span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>6</span></span><br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>6</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                    
        
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 1(iv): 4u² + 8u ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    question_desc: "સૌથી સહેલો દાખલો (અચળ પદ નથી)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <b>4u&sup2; + 8u</b> ના શૂન્યો શોધો અને સંબંધ ચકાસો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ટ્રીક:</b><br>
                            આ દાખલામાં છેલ્લું અચળ પદ (c) આપેલું જ નથી. તેથી ભાગલા પાડવાની કોઈ જરૂર નથી. સીધું જ સામાન્ય (Common) કાઢી લો!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ભાગ 1: શૂન્યો શોધવા</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                4u&sup2; + 8u = 0<br>
                                <i style='color:#64748b;'>(બંનેમાંથી 4u સામાન્ય કાઢતાં)</i><br>
                                4u(u + 2) = 0<br>
                                4u = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; u + 2 = 0<br>
                                u = 0/4 &nbsp;&nbsp;કે&nbsp;&nbsp; u = -2<br>
                                <b style='font-size:20px; color:#15803d;'>u = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; u = -2</b>
                            </div>
                            <p style='margin-top:5px; color:#0f172a;'>તેથી બહુપદીના બે શૂન્યો <b>0 અને -2</b> છે.</p>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ભાગ 2: સંબંધ ચકાસવો</b><br>
                            અહીં <b>a = 4, b = 8, c = 0</b> (અચળ પદ નથી એટલે 0 લેવું).<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                0 + (-2) = -2<br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>4</span></span> = -2 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span><br><br>
                                
                                <b style='color:#1d4ed8;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                0 &times; (-2) = 0<br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>0</span><span>4</span></span> = 0 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 2.2 પ્રશ્ન 1(v): t² - 15 ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    question_desc: "બોર્ડમાં પૂછાવા માટે મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <b>t&sup2; - 15</b> ના શૂન્યો શોધો અને સંબંધ ચકાસો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>ભાગ 1: શૂન્યો શોધવા (વર્ગમૂળની ટ્રીક)</b><br>
                            આ દાખલામાં મધ્યમ પદ (t વાળું પદ) નથી. આને (a&sup2; - b&sup2;) ના સૂત્રથી સીધું ઉકેલી શકાય.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                t&sup2; - 15 = 0<br>
                                t&sup2; = 15<br>
                                <i style='color:#64748b;'>(બંને બાજુ વર્ગમૂળ લેતાં, 15 નું વર્ગમૂળ &plusmn;&radic;15 થાય)</i><br>
                                t = &plusmn;&radic;15<br>
                                <b style='font-size:20px; color:#be123c;'>t = &radic;15 &nbsp;&nbsp;કે&nbsp;&nbsp; t = -&radic;15</b>
                            </div>
                            <p style='margin-top:5px; color:#0f172a;'>તેથી બહુપદીના બે શૂન્યો <b>&radic;15 અને -&radic;15</b> છે.</p>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c;'>ભાગ 2: સંબંધ ચકાસવો</b><br>
                            અહીં મધ્યમ પદ નથી એટલે તેનો સહગુણક 0 લેવો પડે.<br>
                            <b>a = 1, b = 0, c = -15</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <b style='color:#9a3412;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                &radic;15 + (-&radic;15) = 0<br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-0</span><span>1</span></span> = 0 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span><br><br>
                                
                                <b style='color:#9a3412;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                &radic;15 &times; (-&radic;15) = -(&radic;15 &times; &radic;15) = -15<br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-15</span><span>1</span></span> = -15 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 1(vi): 3x² - x - 4 ના શૂન્યો શોધો અને સંબંધ ચકાસો", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <b>3x&sup2; - x - 4</b> ના શૂન્યો શોધો અને સંબંધ ચકાસો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ભાગ 1: શૂન્યો શોધવા</b><br>
                            અહીં 3 &times; (-4) = -12. આપણે એવી સંખ્યા શોધવાની જેનો <b>ગુણાકાર -12</b> અને <b>બાદબાકી -1</b> (મધ્યમ પદનો સહગુણક) થાય. તેવી સંખ્યાઓ <b>-4 અને +3</b> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5;'>
                                3x&sup2; - x - 4 = 0<br>
                                3x&sup2; - 4x + 3x - 4 = 0<br>
                                x(3x - 4) + 1(3x - 4) = 0<br>
                                (3x - 4)(x + 1) = 0<br>
                                3x - 4 = 0 &nbsp;&nbsp;કે&nbsp;&nbsp; x + 1 = 0<br>
                                3x = 4 &nbsp;&nbsp;કે&nbsp;&nbsp; x = -1<br>
                                <b style='font-size:20px; color:#15803d;'>x = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>4</span><span>3</span></span> &nbsp;&nbsp;કે&nbsp;&nbsp; x = -1</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ભાગ 2: સંબંધ ચકાસવો</b><br>
                            અહીં <b>a = 3, b = -1, c = -4</b>.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>૧. શૂન્યોનો સરવાળો:</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span> + (-1) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4 - 3</span><span>3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span><br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-1)</span><span>3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b</span><span>a</span></span><br><br>
                                
                                <b style='color:#1d4ed8;'>૨. શૂન્યોનો ગુણાકાર:</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span> &times; (-1) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-4</span><span>3</span></span><br>
                                સૂત્ર મુજબ: <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-4</span><span>3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c</span><span>a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ચાવી: શૂન્યોના સરવાળા અને ગુણાકાર પરથી દ્વિઘાત બહુપદી શોધવાનું સીધું સૂત્ર",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>જ્યારે રકમમાં શૂન્યોનો સરવાળો અને ગુણાકાર આપ્યો હોય, ત્યારે માત્ર આ એક જ સૂત્ર વાપરવું:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px; text-align:center;'>
                            <b style='color:#be123c; font-size:18px;'>p(x) = k [ x&sup2; - (શૂન્યોનો સરવાળો)x + (શૂન્યોનો ગુણાકાર) ]</b><br><br>
                            અથવા ટૂંકમાં:<br>
                            <b style='color:#1d4ed8; font-size:20px;'>p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]</b>
                        </div>
                        
                        <div style='background-color:#fffbeb; padding:10px; border-radius:5px; margin-top:10px;'>
                            <b style='color:#b45309;'>💡 છેદ ઉડાડવાની ટ્રીક:</b> કૌંસમાં કિંમતો મૂક્યા પછી, જો કોઈ સંખ્યા છેદમાં (નીચે) આવે, તો તે <b>છેદવાળી સંખ્યાનો આખા કૌંસ સાથે ગુણાકાર</b> કરી દેવો, એટલે છેદ ઉડી જશે અને સીધો જવાબ મળી જશે! (અહીં k એ શૂન્યેતર વાસ્તવિક સંખ્યા છે).
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 2(i): શૂન્યોનો સરવાળો 1/4 અને ગુણાકાર -1", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> નીચે દર્શાવેલ સંખ્યાઓ અનુક્રમે દ્વિઘાત બહુપદીના શૂન્યોનો સરવાળો અને શૂન્યોનો ગુણાકાર છે. તે પરથી દ્વિઘાત બહુપદી મેળવો: <b>1/4, -1</b></p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>1/4</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>-1</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                માંગેલ દ્વિઘાત બહુપદી:<br>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k <span style='font-size:20px;'>[</span> x&sup2; - <span style='font-size:20px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span><span style='font-size:20px;'>)</span>x + (-1) <span style='font-size:20px;'>]</span><br>
                                
                                p(x) = k <span style='font-size:20px;'>[</span> x&sup2; - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>x</span><span>4</span></span> - 1 <span style='font-size:20px;'>]</span><br><br>
                                
                                <i style='color:#64748b;'>(અહીં છેદમાં 4 છે, તેથી આખા સમીકરણને 4 વડે ગુણતાં લ.સા.અ. લેવાશે)</i><br>
                                <b style='font-size:20px; color:#15803d;'>p(x) = k ( 4x&sup2; - x - 4 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી 4x&sup2; - x - 4 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 2(ii): શૂન્યોનો સરવાળો &radic;2 અને ગુણાકાર 1/3", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> શૂન્યોનો સરવાળો <b>&radic;2</b> અને ગુણાકાર <b>1/3</b> હોય તેવી દ્વિઘાત બહુપદી મેળવો.</p>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>&radic;2</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1/3</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k <span style='font-size:20px;'>[</span> x&sup2; - (&radic;2)x + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> <span style='font-size:20px;'>]</span><br><br>
                                
                                <i style='color:#64748b;'>(અહીં છેદમાં 3 છે, તેથી આખા સમીકરણને 3 વડે ગુણતાં)</i><br>
                                <b style='font-size:20px; color:#1d4ed8;'>p(x) = k ( 3x&sup2; - 3&radic;2x + 1 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી 3x&sup2; - 3&radic;2x + 1 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 2(iii): શૂન્યોનો સરવાળો 0 અને ગુણાકાર &radic;5", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> શૂન્યોનો સરવાળો <b>0</b> અને ગુણાકાર <b>&radic;5</b> હોય તેવી દ્વિઘાત બહુપદી મેળવો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px;'>
                            <b style='color:#b91c1c;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>0</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>&radic;5</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k [ x&sup2; - (0)x + &radic;5 ]<br>
                                
                                <i style='color:#64748b;'>(વચ્ચેનું પદ 0 &times; x એટલે 0 થઈ જશે)</i><br>
                                <b style='font-size:20px; color:#be123c;'>p(x) = k ( x&sup2; + &radic;5 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી x&sup2; + &radic;5 છે.</p>
                        </div>
                    </div>
                    `
                },
            
                

                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 2(iv): શૂન્યોનો સરવાળો 1 અને ગુણાકાર 1", 
                    question_desc: "સૌથી સહેલો અને ટૂંકો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> નીચે દર્શાવેલ સંખ્યાઓ અનુક્રમે દ્વિઘાત બહુપદીના શૂન્યોનો સરવાળો અને શૂન્યોનો ગુણાકાર છે. તે પરથી દ્વિઘાત બહુપદી મેળવો: <b>1, 1</b></p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>1</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                માંગેલ દ્વિઘાત બહુપદી:<br>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k [ x&sup2; - (1)x + (1) ]<br>
                                
                                <b style='font-size:20px; color:#15803d;'>p(x) = k ( x&sup2; - x + 1 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી x&sup2; - x + 1 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 2.2 પ્રશ્ન 2(v): શૂન્યોનો સરવાળો -1/4 અને ગુણાકાર 1/4", 
                    question_desc: "બોર્ડની પરીક્ષા માટે મોસ્ટ IMP (અપૂર્ણાંક વાળો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> શૂન્યોનો સરવાળો <b>-1/4</b> અને ગુણાકાર <b>1/4</b> હોય તેવી દ્વિઘાત બહુપદી મેળવો.</p>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>-1/4</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1/4</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k <span style='font-size:20px;'>[</span> x&sup2; - <span style='font-size:20px;'>(</span>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span><span style='font-size:20px;'>)</span>x + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> <span style='font-size:20px;'>]</span><br>
                                
                                <i style='color:#64748b;'>(માઇનસ માઇનસ પ્લસ થશે: - &times; - = +)</i><br>
                                p(x) = k <span style='font-size:20px;'>[</span> x&sup2; + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>x</span><span>4</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> <span style='font-size:20px;'>]</span><br><br>
                                
                                <i style='color:#64748b;'>(બંને પદના છેદમાં 4 છે, તેથી આખા કૌંસને 4 વડે ગુણતાં / લ.સા.અ. લેતાં)</i><br>
                                <b style='font-size:20px; color:#1d4ed8;'>p(x) = k ( 4x&sup2; + x + 1 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી 4x&sup2; + x + 1 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 2.2 પ્રશ્ન 2(vi): શૂન્યોનો સરવાળો 4 અને ગુણાકાર 1", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> શૂન્યોનો સરવાળો <b>4</b> અને ગુણાકાર <b>1</b> હોય તેવી દ્વિઘાત બહુપદી મેળવો.</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px;'>
                            <b style='color:#b91c1c;'>ગણતરી:</b><br>
                            અહીં, શૂન્યોનો સરવાળો (&alpha; + &beta;) = <b>4</b><br>
                            શૂન્યોનો ગુણાકાર (&alpha;&beta;) = <b>1</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                માંગેલ દ્વિઘાત બહુપદી:<br>
                                p(x) = k [ x&sup2; - (&alpha; + &beta;)x + &alpha;&beta; ]<br>
                                
                                p(x) = k [ x&sup2; - (4)x + (1) ]<br>
                                
                                <b style='font-size:20px; color:#be123c;'>p(x) = k ( x&sup2; - 4x + 1 )</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>જવાબ: માંગેલ દ્વિઘાત બહુપદી x&sup2; - 4x + 1 છે.</p>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 3: દ્વિચલ સુરેખ સમીકરણ યુગ્મ
        // ------------------------------------
        "3": {
            "chapterName": "પ્રકરણ 3 ",
            "chapterTitle": "દ્વિચલ સુરેખ સમીકરણ યુગ્મ ",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: આલેખની રીત માટે કોષ્ટક કેવી રીતે બનાવવું?",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>કોઈપણ સમીકરણનો આલેખ દોરવા માટે ઓછામાં ઓછા 2 બિંદુઓ શોધવા પડે. (આપણે ભૂલ ન પડે તે માટે 3 બિંદુઓ શોધીશું).</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b>સ્ટેપ 1:</b> સમીકરણમાંથી <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અથવા <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> ને કર્તા બનાવો (એકલો પાડો).</li>
                                <li><b>સ્ટેપ 2:</b> સામેના ચલની એવી કિંમતો ધારો કે જેથી જવાબ પૂર્ણાંક (આખી સંખ્યા) મળે. છેદમાં આવતી સંખ્યા વડે ભાગી શકાય તેવી જ કિંમત ધારવી, જેથી આલેખ દોરવામાં સરળતા રહે.</li>
                                <li><b>સ્ટેપ 3:</b> બંને સમીકરણની રેખાઓ આલેખમાં જે બિંદુએ એકબીજાને છેદે (ક્રોસ થાય), તે બિંદુના યામ <b>(<i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i>, <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i>)</b> એ આપણો ફાઇનલ જવાબ કહેવાય.</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 1(i): નીચેની સમસ્યા પરથી સુરેખ સમીકરણયુગ્મ બનાવો અને આલેખની રીતે ઉકેલ શોધો.", 
                    question_desc: "ધોરણ X ના 10 વિદ્યાર્થીઓ ગણિતના કોયડાની સ્પર્ધામાં...",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> ધોરણ X ના 10 વિદ્યાર્થીઓ ગણિતના કોયડાની સ્પર્ધામાં ભાગ લે છે. જો ભાગ લેનાર છોકરીઓની સંખ્યા છોકરાઓની સંખ્યા કરતાં 4 વધારે હોય, તો કેટલા છોકરાઓએ અને કેટલી છોકરીઓએ કોયડાની સ્પર્ધામાં ભાગ લીધો હશે તે શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ભાગ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે છોકરીઓની સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને છોકરાઓની સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li>કુલ 10 વિદ્યાર્થીઓ છે. તેથી પહેલું સમીકરણ:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 10</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                
                                <li>છોકરીઓની સંખ્યા (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i>) એ છોકરાઓ (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i>) કરતાં 4 વધારે છે. તેથી બીજું સમીકરણ:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 4</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>ભાગ 2: આલેખ માટે કોષ્ટક તૈયાર કરવા</b><br>
                            
                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:10px;'>
                                <b style='color:#2563eb;'>સમીકરણ 1: <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 10</b> પરથી <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ને કર્તા બનાવતાં: <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 10 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i></b><br>
                                <span style='font-size:14px; color:#64748b;'>હવે આપણે <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> ની અલગ અલગ કિંમતો ધારીશું:</span>
                                <ul style='font-size:15px; margin-top:5px; line-height:1.8;'>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 4 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 10 - 4 = <b>6</b></li>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 5 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 10 - 5 = <b>5</b></li>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 6 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 10 - 6 = <b>4</b></li>
                                </ul>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>6</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>4</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>4</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>6</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:15px;'>
                                <b style='color:#2563eb;'>સમીકરણ 2: <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 4</b> (અહીં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> પહેલેથી જ કર્તા છે).<br>
                                <span style='font-size:14px; color:#64748b;'><i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> ની કિંમતો ધારતાં:</span>
                                <ul style='font-size:15px; margin-top:5px; line-height:1.8;'>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 0 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 0 + 4 = <b>4</b></li>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 1 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 1 + 4 = <b>5</b></li>
                                    <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 3 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = 3 + 4 = <b>7</b></li>
                                </ul>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>4</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>7</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>1</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>ભાગ 3: આલેખ અને ઉકેલ</b><br>
                            આ બંને કોષ્ટકના બિંદુઓને આલેખપત્ર પર દર્શાવીએ:
                            
                            
                            <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                                <svg width="300" height="300" viewBox="-20 -20 320 320" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border:1px solid #cbd5e1; border-radius:5px;">
                                    <g stroke="#e2e8f0" stroke-width="1">
                                        <line x1="0" y1="0" x2="300" y2="0" /><line x1="0" y1="30" x2="300" y2="30" /><line x1="0" y1="60" x2="300" y2="60" /><line x1="0" y1="90" x2="300" y2="90" /><line x1="0" y1="120" x2="300" y2="120" /><line x1="0" y1="150" x2="300" y2="150" /><line x1="0" y1="180" x2="300" y2="180" /><line x1="0" y1="210" x2="300" y2="210" /><line x1="0" y1="240" x2="300" y2="240" /><line x1="0" y1="270" x2="300" y2="270" /><line x1="0" y1="300" x2="300" y2="300" />
                                        <line x1="0" y1="0" x2="0" y2="300" /><line x1="30" y1="0" x2="30" y2="300" /><line x1="60" y1="0" x2="60" y2="300" /><line x1="90" y1="0" x2="90" y2="300" /><line x1="120" y1="0" x2="120" y2="300" /><line x1="150" y1="0" x2="150" y2="300" /><line x1="180" y1="0" x2="180" y2="300" /><line x1="210" y1="0" x2="210" y2="300" /><line x1="240" y1="0" x2="240" y2="300" /><line x1="270" y1="0" x2="270" y2="300" /><line x1="300" y1="0" x2="300" y2="300" />
                                    </g>
                                    
                                    <line x1="0" y1="270" x2="300" y2="270" stroke="#0f172a" stroke-width="2" />
                                    <line x1="30" y1="0" x2="30" y2="300" stroke="#0f172a" stroke-width="2" />
                                    
                                    <text x="285" y="290" font-weight="bold" font-size="12">X</text>
                                    <text x="10" y="15" font-weight="bold" font-size="12">Y</text>
                                    <text x="15" y="285" font-weight="bold" font-size="12">O</text>
                                    
                                    <text x="55" y="285" font-size="10">1</text><text x="85" y="285" font-size="10">2</text><text x="115" y="285" font-size="10">3</text><text x="145" y="285" font-size="10">4</text><text x="175" y="285" font-size="10">5</text><text x="205" y="285" font-size="10">6</text><text x="235" y="285" font-size="10">7</text><text x="265" y="285" font-size="10">8</text>
                                    <text x="15" y="245" font-size="10">1</text><text x="15" y="215" font-size="10">2</text><text x="15" y="185" font-size="10">3</text><text x="15" y="155" font-size="10">4</text><text x="15" y="125" font-size="10">5</text><text x="15" y="95" font-size="10">6</text><text x="15" y="65" font-size="10">7</text>
                                    
                                    <line x1="120" y1="60" x2="270" y2="210" stroke="#2563eb" stroke-width="3" /> 
                                    <text x="200" y="130" font-size="12" fill="#2563eb" font-weight="bold" transform="rotate(45 200 130)">x + y = 10</text>
                                    
                                    <line x1="90" y1="330" x2="270" y2="150" stroke="#dc2626" stroke-width="3" />
                                    <text x="250" y="185" font-size="12" fill="#dc2626" font-weight="bold" transform="rotate(-45 250 185)">x = y + 4</text>
                                    
                                    <circle cx="240" cy="180" r="6" fill="#0f172a" />
                                    <text x="180" y="170" font-size="14" font-weight="bold" fill="#0f172a">(7, 3)</text>
                                </svg>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 આલેખ પરથી ઉકેલ:</b><br>
                                આલેખમાં બંને રેખાઓ એકબીજાને <b>(7, 3)</b> બિંદુએ છેદે છે.<br>
                                તેથી, <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> = 7 અને <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> = 3.<br><br>
                                <b>અંતિમ જવાબ:</b> સ્પર્ધામાં ભાગ લેનાર <b style='color:#1d4ed8;'>છોકરીઓની સંખ્યા 7</b> છે અને <b style='color:#be123c;'>છોકરાઓની સંખ્યા 3</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
        
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 1(ii): 5 પેન્સિલ અને 7 પેનની કુલ કિંમત ₹50 છે...", 
                    question_desc: "તે જ કિંમતવાળી 7 પેન્સિલ અને 5 પેનની કુલ કિંમત ₹46 છે...",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 5 પેન્સિલ અને 7 પેનની કુલ કિંમત ₹ 50 છે. અને તે જ કિંમતવાળી 7 પેન્સિલ અને 5 પેનની કુલ કિંમત ₹ 46 છે, તો એક પેન્સિલ અને એક પેનની કિંમત શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ભાગ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે 1 પેન્સિલની કિંમત = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને 1 પેનની કિંમત = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li>5 પેન્સિલ અને 7 પેનની કિંમત 50 છે:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>5<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 7<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 50</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                
                                <li>7 પેન્સિલ અને 5 પેનની કિંમત 46 છે:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>7<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 46</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>ભાગ 2: આલેખ માટે કોષ્ટક તૈયાર કરવા (અંશ-છેદ વાળા)</b><br>
                            
                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:10px;'>
                                <b style='color:#2563eb;'>સમીકરણ 1: 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 7<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 50</b> પરથી <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ને કર્તા બનાવતાં:<br>
                                <div style='overflow-x:auto; margin:10px 0; font-size:18px; font-weight:bold; color:#dc2626;'>
                                    <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>50 - 7<i style='font-family:"Times New Roman",serif;'>y</i></span><span>5</span></span>
                                </div>
                                <span style='font-size:14px; color:#64748b;'>અહીં છેદમાં 5 હોવાથી આપણે <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> ની એવી કિંમત ધારીશું કે અંશને 5 વડે ભાગી શકાય:</span>
                                <div style='overflow-x:auto;'>
                                    <ul style='font-size:15px; margin-top:5px; line-height:2.5; white-space:nowrap;'>
                                        <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 5 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50 - 7(5)</span><span>5</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50 - 35</span><span>5</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15</span><span>5</span></span> = <b>3</b></li>
                                        <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 0 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50 - 7(0)</span><span>5</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50 - 0</span><span>5</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50</span><span>5</span></span> = <b>10</b></li>
                                    </ul>
                                </div>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>3</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>10</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:15px;'>
                                <b style='color:#2563eb;'>સમીકરણ 2: 7<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 46</b> પરથી <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ને કર્તા બનાવતાં:<br>
                                <div style='overflow-x:auto; margin:10px 0; font-size:18px; font-weight:bold; color:#dc2626;'>
                                    <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>46 - 5<i style='font-family:"Times New Roman",serif;'>y</i></span><span>7</span></span>
                                </div>
                                <span style='font-size:14px; color:#64748b;'>અહીં છેદમાં 7 હોવાથી આપણે <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> ની એવી કિંમત ધારીશું કે અંશને 7 વડે ભાગી શકાય:</span>
                                <div style='overflow-x:auto;'>
                                    <ul style='font-size:15px; margin-top:5px; line-height:2.5; white-space:nowrap;'>
                                        <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = 5 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>46 - 5(5)</span><span>7</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>46 - 25</span><span>7</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>21</span><span>7</span></span> = <b>3</b></li>
                                        <li>જો <i style='font-family:"Times New Roman",serif; font-size:16px;'>y</i> = -2 લઈએ, તો <i style='font-family:"Times New Roman",serif; font-size:16px;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>46 - 5(-2)</span><span>7</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>46 + 10</span><span>7</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>56</span><span>7</span></span> = <b>8</b></li>
                                    </ul>
                                </div>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>3</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>8</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>-2</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>ભાગ 3: આલેખ અને ઉકેલ</b><br>
                            આ બંને કોષ્ટકના બિંદુઓને આલેખપત્ર પર દર્શાવીએ:
                            
                            
                            <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                                <svg width="340" height="280" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border:1px solid #cbd5e1; border-radius:5px;">
                                    <g stroke="#e2e8f0" stroke-width="1">
                                        <line x1="0" y1="20" x2="340" y2="20" /><line x1="0" y1="40" x2="340" y2="40" /><line x1="0" y1="60" x2="340" y2="60" /><line x1="0" y1="80" x2="340" y2="80" /><line x1="0" y1="100" x2="340" y2="100" /><line x1="0" y1="120" x2="340" y2="120" /><line x1="0" y1="140" x2="340" y2="140" /><line x1="0" y1="160" x2="340" y2="160" /><line x1="0" y1="180" x2="340" y2="180" /><line x1="0" y1="200" x2="340" y2="200" /><line x1="0" y1="220" x2="340" y2="220" /><line x1="0" y1="240" x2="340" y2="240" /><line x1="0" y1="260" x2="340" y2="260" />
                                        <line x1="20" y1="0" x2="20" y2="280" /><line x1="40" y1="0" x2="40" y2="280" /><line x1="60" y1="0" x2="60" y2="280" /><line x1="80" y1="0" x2="80" y2="280" /><line x1="100" y1="0" x2="100" y2="280" /><line x1="120" y1="0" x2="120" y2="280" /><line x1="140" y1="0" x2="140" y2="280" /><line x1="160" y1="0" x2="160" y2="280" /><line x1="180" y1="0" x2="180" y2="280" /><line x1="200" y1="0" x2="200" y2="280" /><line x1="220" y1="0" x2="220" y2="280" /><line x1="240" y1="0" x2="240" y2="280" /><line x1="260" y1="0" x2="260" y2="280" /><line x1="280" y1="0" x2="280" y2="280" /><line x1="300" y1="0" x2="300" y2="280" /><line x1="320" y1="0" x2="320" y2="280" />
                                    </g>
                                    
                                    <line x1="0" y1="200" x2="340" y2="200" stroke="#0f172a" stroke-width="2" /> <line x1="40" y1="0" x2="40" y2="280" stroke="#0f172a" stroke-width="2" /> <text x="325" y="195" font-weight="bold" font-size="12">X</text>
                                    <text x="25" y="15" font-weight="bold" font-size="12">Y</text>
                                    <text x="25" y="215" font-weight="bold" font-size="12">O</text>
                                    
                                    <text x="60" y="215" font-size="10">1</text><text x="80" y="215" font-size="10">2</text><text x="100" y="215" font-size="10">3</text><text x="140" y="215" font-size="10">5</text><text x="200" y="215" font-size="10">8</text><text x="240" y="215" font-size="10">10</text>
                                    <text x="25" y="185" font-size="10">1</text><text x="25" y="145" font-size="10">3</text><text x="25" y="105" font-size="10">5</text><text x="20" y="245" font-size="10">-2</text>
                                    
                                    <line x1="30" y1="50" x2="310" y2="250" stroke="#2563eb" stroke-width="3" />
                                    
                                    <line x1="50" y1="30" x2="225" y2="275" stroke="#dc2626" stroke-width="3" />
                                    
                                    <circle cx="100" cy="100" r="6" fill="#0f172a" />
                                    <text x="115" y="95" font-size="14" font-weight="bold" fill="#0f172a">(3, 5)</text>
                                </svg>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 આલેખ પરથી ઉકેલ:</b><br>
                                આલેખમાં બંને રેખાઓ એકબીજાને <b>(3, 5)</b> બિંદુએ છેદે છે.<br>
                                તેથી, <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> = 3 અને <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> = 5.<br><br>
                                <b>અંતિમ જવાબ:</b> એક <b style='color:#1d4ed8;'>પેન્સિલની કિંમત ₹ 3</b> છે અને એક <b style='color:#be123c;'>પેનની કિંમત ₹ 5</b> છે. 
                                <span style='font-size:14px; color:#64748b;'>(તાળો મેળવીએ: 5(3) + 7(5) = 15 + 35 = 50. જવાબ એકદમ સાચો છે!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
            
                {
                    question: "🎯 માસ્ટર ચાવી: સહગુણકોના ગુણોત્તર પરથી રેખાઓનો પ્રકાર અને ઉકેલ નક્કી કરવા",
                    answer: `
                    <div style='background-color:#fefce8; padding:10px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>કોઈપણ 2 સમીકરણો a<sub>1</sub><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + b<sub>1</sub><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + c<sub>1</sub> = 0 અને a<sub>2</sub><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + b<sub>2</sub><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + c<sub>2</sub> = 0 માટે આ કોષ્ટક હંમેશા યાદ રાખો:</p>
                        
                        <div style='overflow-x:auto;'>
                            <table style='width:100%; min-width:550px; text-align:center; border-collapse:collapse; background-color:#ffffff;'>
                                <tr style='background-color:#fef08a; font-weight:bold; color:#b45309;'>
                                    <th style='border:1px solid #fde047; padding:10px;'>ગુણોત્તરની સરખામણી</th>
                                    <th style='border:1px solid #fde047; padding:10px;'>આલેખાત્મક રજૂઆત (રેખાઓ)</th>
                                    <th style='border:1px solid #fde047; padding:10px;'>બૈજિક રજૂઆત (ઉકેલ)</th>
                                    <th style='border:1px solid #fde047; padding:10px;'>સમીકરણ યુગ્મ</th>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #fde047; padding:8px; font-size:18px; color:#dc2626; font-weight:bold;'>
                                        <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span>
                                    </td>
                                    <td style='border:1px solid #fde047; padding:8px; font-weight:bold; color:#2563eb;'>છેદતી રેખાઓ</td>
                                    <td style='border:1px solid #fde047; padding:8px;'>અનન્ય (એક અને માત્ર એક) ઉકેલ</td>
                                    <td style='border:1px solid #fde047; padding:8px; color:#16a34a; font-weight:bold;'>સુસંગત છે</td>
                                </tr>
                                <tr style='background-color:#fffbeb;'>
                                    <td style='border:1px solid #fde047; padding:8px; font-size:18px; color:#dc2626; font-weight:bold;'>
                                        <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span>
                                    </td>
                                    <td style='border:1px solid #fde047; padding:8px; font-weight:bold; color:#2563eb;'>સંપાતી રેખાઓ (એકની ઉપર એક)</td>
                                    <td style='border:1px solid #fde047; padding:8px;'>અનંત ઉકેલો</td>
                                    <td style='border:1px solid #fde047; padding:8px; color:#16a34a; font-weight:bold;'>સુસંગત છે (અવલંબી)</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #fde047; padding:8px; font-size:18px; color:#dc2626; font-weight:bold;'>
                                        <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span>
                                    </td>
                                    <td style='border:1px solid #fde047; padding:8px; font-weight:bold; color:#2563eb;'>સમાંતર રેખાઓ</td>
                                    <td style='border:1px solid #fde047; padding:8px;'>કોઈ ઉકેલ નથી (ઉકેલ ખાલીગણ)</td>
                                    <td style='border:1px solid #fde047; padding:8px; color:#dc2626; font-weight:bold;'>સુસંગત નથી</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 2(i): નીચેના સમીકરણયુગ્મથી બનતી રેખાઓ એક બિંદુમાં છેદે છે કે સમાંતર છે અથવા સંપાતી છે તે ગુણોત્તર પરથી નક્કી કરો.", 
                    question_desc: "5x - 4y + 8 = 0 અને 7x + 6y - 9 = 0",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 5<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 8 = 0  અને  7<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 9 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            સમીકરણોને પ્રમાણિત રૂપ સાથે સરખાવતાં:<br>
                            a<sub>1</sub> = 5, b<sub>1</sub> = -4, c<sub>1</sub> = 8<br>
                            a<sub>2</sub> = 7, b<sub>2</sub> = 6, c<sub>2</sub> = -9<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>7</span></span><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-4</span><span>6</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2</span><span>3</span></span>
                            </div>
                            
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં સ્પષ્ટ છે કે, <b style='color:#dc2626; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span></b><br>
                                <b style='color:#1e3a8a;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ <b>એક બિંદુમાં છેદે છે</b> (છેદતી રેખાઓ છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 2(ii): 9x + 3y + 12 = 0 અને 18x + 6y + 24 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 9<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 12 = 0  અને  18<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 24 = 0</p>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c;'>ગણતરી:</b><br>
                            સમીકરણોને પ્રમાણિત રૂપ સાથે સરખાવતાં:<br>
                            a<sub>1</sub> = 9, b<sub>1</sub> = 3, c<sub>1</sub> = 12<br>
                            a<sub>2</sub> = 18, b<sub>2</sub> = 6, c<sub>2</sub> = 24<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>18</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>6</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12</span><span>24</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં જોઈ શકાય છે કે, ત્રણેય ગુણોત્તર સરખા છે: <b style='color:#c2410c; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #c2410c; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #c2410c; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #c2410c; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#9a3412;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી <b>રેખાઓ સંપાતી છે</b> (એટલે કે એક જ રેખા છે અને તેના અનંત ઉકેલો છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 2(iii): 6x - 3y + 10 = 0 અને 2x - y + 9 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 10 = 0  અને  2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 9 = 0</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>ગણતરી:</b><br>
                            સમીકરણોને પ્રમાણિત રૂપ સાથે સરખાવતાં:<br>
                            a<sub>1</sub> = 6, b<sub>1</sub> = -3, c<sub>1</sub> = 10<br>
                            a<sub>2</sub> = 2, b<sub>2</sub> = -1, c<sub>2</sub> = 9<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6</span><span>2</span></span> = <b style='color:#1d4ed8;'>3</b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>-1</span></span> = <b style='color:#1d4ed8;'>3</b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>10</span><span>9</span></span></b>
                            </div>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં પહેલા બે ગુણોત્તર સરખા છે, પણ ત્રીજો અલગ છે: <b style='color:#b91c1c; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#991b1b;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી <b>રેખાઓ સમાંતર છે</b> (એટલે કે આ સમીકરણને કોઈ ઉકેલ નથી).
                            </div>
                        </div>
                    </div>
                    `
                },
        
                {
                    question: "સ્વા. 3.1 પ્રશ્ન 3(i): નીચેના સુરેખ સમીકરણયુગ્મ સુસંગત છે કે સુસંગત નથી તે ગુણોત્તર પરથી નક્કી કરો.",
                    question_desc: "3x + 2y = 5 અને 2x - 3y = 7",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 5  અને  2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 7</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            પહેલા બરાબરની જમણી બાજુના અચળ પદને ડાબી બાજુ લાવી પ્રમાણિત રૂપમાં ફેરવીએ:<br>
                            3<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5 = 0  &rArr; a<sub>1</sub> = 3, b<sub>1</sub> = 2, c<sub>1</sub> = -5<br>
                            2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 7 = 0  &rArr; a<sub>2</sub> = 2, b<sub>2</sub> = -3, c<sub>2</sub> = -7<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>3</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>-3</span></span> = <b style='color:#1d4ed8;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2</span><span>3</span></span></b>
                            </div>
                            
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં સ્પષ્ટ છે કે, <b style='color:#dc2626; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span></b><br>
                                <b style='color:#1e3a8a;'>અંતિમ જવાબ:</b> આ સમીકરણ યુગ્મની રેખાઓ છેદતી રેખાઓ છે, તેથી તે <b>સુસંગત છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 3(ii): 2x - 3y = 8 અને 4x - 6y = 9 સુસંગત છે કે નહિ?", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 8  અને  4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 9</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c;'>ગણતરી:</b><br>
                            પ્રમાણિત રૂપ:<br>
                            2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 8 = 0  &rArr; a<sub>1</sub> = 2, b<sub>1</sub> = -3, c<sub>1</sub> = -8<br>
                            4<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 6<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 9 = 0  &rArr; a<sub>2</sub> = 4, b<sub>2</sub> = -6, c<sub>2</sub> = -9<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.5;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>4</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>-6</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>-9</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>8</span><span>9</span></span></b>
                            </div>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં જોઈ શકાય છે કે, <b style='color:#b91c1c; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#991b1b;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ સમાંતર છે, તેથી તેને કોઈ ઉકેલ નથી. એટલે કે તે <b>સુસંગત નથી</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.1 પ્રશ્ન 3(iii): 3/2x + 5/3y = 7 અને 9x - 10y = 14 સુસંગત છે કે નહિ?", 
                    question_desc: "બોર્ડમાં પૂછાવા માટે મોસ્ટ IMP (અપૂર્ણાંકની ટ્રીક સાથે)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>3</span></span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 7  અને  9<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 10<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 14</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 અંશ-છેદની ટ્રીક:</b> જ્યારે છેદની અંદર બીજો છેદ આવે, ત્યારે "અંશનો છેદ છેદમાં જાય" તે નિયમ વાપરવો.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a;'>ગણતરી:</b><br>
                            પ્રમાણિત રૂપ:<br>
                            a<sub>1</sub> = 3/2, b<sub>1</sub> = 5/3, c<sub>1</sub> = -7<br>
                            a<sub>2</sub> = 9, b<sub>2</sub> = -10, c<sub>2</sub> = -14<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3/2</span><span>9</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2 &times; 9</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>18</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>6</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5/3</span><span>-10</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>3 &times; (-10)</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>-30</span></span> = <b style='color:#1d4ed8;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>6</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <span style='color:#64748b; font-size:14px;'>(નોંધ: અહીં એક જવાબ 1/6 છે અને બીજો જવાબ -1/6 છે, એટલે કે બંને સરખા નથી!)</span><br>
                                અહીં સ્પષ્ટ છે કે, <b style='color:#dc2626; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span></b><br>
                                <b style='color:#15803d;'>અંતિમ જવાબ:</b> આ સમીકરણ યુગ્મ <b>સુસંગત છે</b> (કારણ કે તેને અનન્ય ઉકેલ છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 3(iv): 5x - 3y = 11 અને -10x + 6y = -22 સુસંગત છે કે નહિ?", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 5<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 11  અને  -10<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = -22</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d;'>ગણતરી:</b><br>
                            સમીકરણોને પ્રમાણિત રૂપમાં ફેરવતાં:<br>
                            5<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 11 = 0  &rArr; a<sub>1</sub> = 5, b<sub>1</sub> = -3, c<sub>1</sub> = -11<br>
                            -10<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 22 = 0  &rArr; a<sub>2</sub> = -10, b<sub>2</sub> = 6, c<sub>2</sub> = 22<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>-10</span></span> = <b style='color:#1d4ed8;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>6</span></span> = <b style='color:#1d4ed8;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-11</span><span>22</span></span> = <b style='color:#1d4ed8;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#eff6ff; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં જોઈ શકાય છે કે, ત્રણેય ગુણોત્તર સરખા છે: <b style='color:#dc2626; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#1e3a8a;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ સંપાતી છે (અનંત ઉકેલ). તેથી તે <b>સુસંગત અને અવલંબી છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.1 પ્રશ્ન 3(v): 4/3x + 2y = 8 અને 2x + 3y = 12 સુસંગત છે કે નહિ?", 
                    question_desc: "બોર્ડમાં પૂછાવા માટે અગત્યનો (અપૂર્ણાંક વાળો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 8  અને  2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 12</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 અંશ-છેદની ટ્રીક:</b> ફરી યાદ કરો, "અંશનો છેદ હંમેશા છેદમાં જાય અને તેનો ગુણાકાર થાય."
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px;'>
                            <b style='color:#b91c1c;'>ગણતરી:</b><br>
                            પ્રમાણિત રૂપ:<br>
                            a<sub>1</sub> = 4/3, b<sub>1</sub> = 2, c<sub>1</sub> = -8<br>
                            a<sub>2</sub> = 2, b<sub>2</sub> = 3, c<sub>2</sub> = -12<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4/3</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3 &times; 2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>6</span></span> = <b style='color:#b91c1c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #b91c1c; display:block; padding:0 3px;'>2</span><span>3</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <b style='color:#b91c1c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #b91c1c; display:block; padding:0 3px;'>2</span><span>3</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>-12</span></span> = <b style='color:#b91c1c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #b91c1c; display:block; padding:0 3px;'>2</span><span>3</span></span></b> <span style='font-size:14px; color:#64748b;'>(બંને ને -4 વડે ભાગતાં)</span>
                            </div>
                            
                            <div style='background-color:#f8fafc; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #64748b;'>
                                અહીં પણ ત્રણેય ગુણોત્તર સરખા છે: <b style='color:#0f172a; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #0f172a; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #0f172a; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #0f172a; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#0f172a;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ સંપાતી છે. તેથી તે <b>સુસંગત અને અવલંબી છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
            
                {
                    question: "સ્વા. 3.1 પ્રશ્ન 4(i): નીચેના સુરેખ સમીકરણયુગ્મ સુસંગત છે કે સુસંગત નથી તે જણાવો. જો સુસંગત હોય, તો આલેખની રીતે ઉકેલ શોધો.",
                    question_desc: "x + y = 5 અને 2x + 2y = 10",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 5  અને  2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 10</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સુસંગતતા ચકાસવી</b><br>
                            પ્રમાણિત રૂપમાં ફેરવતાં:<br>
                            <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5 = 0  &rArr; a<sub>1</sub> = 1, b<sub>1</sub> = 1, c<sub>1</sub> = -5<br>
                            2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 10 = 0  &rArr; a<sub>2</sub> = 2, b<sub>2</sub> = 2, c<sub>2</sub> = -10<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-5</span><span>-10</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં ત્રણેય ગુણોત્તર સરખા છે. તેથી સમીકરણ યુગ્મથી બનતી રેખાઓ <b>સંપાતી (એકની ઉપર એક)</b> છે.<br>
                                <b style='color:#15803d;'>નિષ્કર્ષ:</b> સમીકરણ યુગ્મ <b>સુસંગત છે</b>. (તેથી આપણે તેનો આલેખ દોરવો પડશે!)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આલેખ માટે કોષ્ટક</b><br>
                            અહીં સમીકરણ 2 માંથી 2 સામાન્ય કાઢીએ તો તે સમીકરણ 1 જેવું જ બની જાય છે. તેથી <b>બંને રેખાઓ માટે એક જ કોષ્ટક</b> બનશે.<br>
                            <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 5 &rArr; <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 5 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b><br>
                            
                            <div style='overflow-x:auto;'>
                                <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                    <tr>
                                        <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>3</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                    </tr>
                                    <tr>
                                        <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>5</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>2</td>
                                        <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: આલેખની રજૂઆત</b><br>
                            
                            <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                                <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border:1px solid #cbd5e1; border-radius:5px;">
                                    <g stroke="#e2e8f0" stroke-width="1">
                                        <line x1="0" y1="30" x2="260" y2="30" /><line x1="0" y1="60" x2="260" y2="60" /><line x1="0" y1="90" x2="260" y2="90" /><line x1="0" y1="120" x2="260" y2="120" /><line x1="0" y1="150" x2="260" y2="150" /><line x1="0" y1="180" x2="260" y2="180" /><line x1="0" y1="210" x2="260" y2="210" /><line x1="0" y1="240" x2="260" y2="240" />
                                        <line x1="40" y1="0" x2="40" y2="260" /><line x1="70" y1="0" x2="70" y2="260" /><line x1="100" y1="0" x2="100" y2="260" /><line x1="130" y1="0" x2="130" y2="260" /><line x1="160" y1="0" x2="160" y2="260" /><line x1="190" y1="0" x2="190" y2="260" /><line x1="220" y1="0" x2="220" y2="260" /><line x1="250" y1="0" x2="250" y2="260" />
                                    </g>
                                    
                                    <line x1="0" y1="240" x2="260" y2="240" stroke="#0f172a" stroke-width="2" /> <line x1="40" y1="0" x2="40" y2="260" stroke="#0f172a" stroke-width="2" /> <text x="245" y="235" font-weight="bold" font-size="12">X</text><text x="25" y="15" font-weight="bold" font-size="12">Y</text><text x="25" y="255" font-weight="bold" font-size="12">O</text>
                                    <text x="66" y="255" font-size="10">1</text><text x="96" y="255" font-size="10">2</text><text x="126" y="255" font-size="10">3</text><text x="156" y="255" font-size="10">4</text><text x="186" y="255" font-size="10">5</text><text x="216" y="255" font-size="10">6</text>
                                    <text x="25" y="215" font-size="10">1</text><text x="25" y="185" font-size="10">2</text><text x="25" y="155" font-size="10">3</text><text x="25" y="125" font-size="10">4</text><text x="25" y="95" font-size="10">5</text><text x="25" y="65" font-size="10">6</text>
                                    
                                    <line x1="10" y1="60" x2="220" y2="270" stroke="#2563eb" stroke-width="4" />
                                    <line x1="10" y1="60" x2="220" y2="270" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,5" />
                                    
                                    <text x="120" y="140" font-size="12" fill="#0f172a" font-weight="bold" transform="rotate(45 120 140)">x + y = 5 (બંને રેખાઓ)</text>
                                    
                                    <circle cx="40" cy="90" r="5" fill="#0f172a" /><text x="50" y="85" font-size="12">(0, 5)</text>
                                    <circle cx="130" cy="180" r="5" fill="#0f172a" /><text x="140" y="175" font-size="12">(3, 2)</text>
                                    <circle cx="190" cy="240" r="5" fill="#0f172a" /><text x="195" y="235" font-size="12">(5, 0)</text>
                                </svg>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>બંને સમીકરણો માટે એક જ રેખા મળે છે, તેથી આ સમીકરણના અનંત ઉકેલો મળે. (દા.ત. (0,5), (3,2), (5,0) વગેરે તમામ બિંદુઓ ઉકેલ છે).</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 4(ii): x - y = 8 અને 3x - 3y = 16 સુસંગત છે કે નહિ તે ચકાસો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 8  અને  3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 16</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>ગણતરી:</b><br>
                            પ્રમાણિત રૂપમાં ફેરવતાં:<br>
                            <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 8 = 0  &rArr; a<sub>1</sub> = 1, b<sub>1</sub> = -1, c<sub>1</sub> = -8<br>
                            3<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 16 = 0  &rArr; a<sub>2</sub> = 3, b<sub>2</sub> = -3, c<sub>2</sub> = -16<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>3</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>-3</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>3</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>-16</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં જોઈ શકાય છે કે, <b style='color:#b91c1c; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#991b1b;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ સમાંતર છે, તેથી તેને કોઈ ઉકેલ નથી. એટલે કે તે <b>સુસંગત નથી</b>. <br>
                                <i>(સુસંગત નથી તેથી આલેખ દોરવાની જરૂર નથી!)</i>
                            </div>
                        </div>
                    </div>
                    `
                },
    
                {
                    question: "🌟 સ્વા. 3.1 પ્રશ્ન 4(iii): 2x + y - 6 = 0 અને 4x - 2y - 4 = 0 સુસંગત છે કે નહિ? જો હોય તો આલેખ દોરો.",
                    question_desc: "છેદતી રેખાઓનો મોસ્ટ IMP આલેખ",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 6 = 0  અને  4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 4 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સુસંગતતા ચકાસવી</b><br>
                            આ સમીકરણો પહેલાથી જ પ્રમાણિત રૂપમાં છે:<br>
                            a<sub>1</sub> = 2, b<sub>1</sub> = 1, c<sub>1</sub> = -6<br>
                            a<sub>2</sub> = 4, b<sub>2</sub> = -2, c<sub>2</sub> = -4<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>4</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>-2</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં સ્પષ્ટ છે કે, <b style='color:#dc2626; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #dc2626; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span></b><br>
                                <b style='color:#15803d;'>નિષ્કર્ષ:</b> સમીકરણ યુગ્મની રેખાઓ છેદતી રેખાઓ છે, તેથી તે <b>સુસંગત છે</b>. (આલેખ દોરવો પડશે).
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આલેખ માટે કોષ્ટક તૈયાર કરવા</b><br>
                            
                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:10px;'>
                                <b style='color:#2563eb;'>સમીકરણ 1: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 6 = 0</b><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> ને કર્તા બનાવતાં: <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 6 - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b><br>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>2</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>3</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>6</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>2</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:15px;'>
                                <b style='color:#2563eb;'>સમીકરણ 2: 4<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 4 = 0</b><br>
                                આખા સમીકરણને 2 વડે ભાગતાં: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 2 = 0<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> ને કર્તા બનાવતાં: <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2</b><br>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>1</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>2</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>-2</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>2</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: આલેખ અને ઉકેલ</b><br>
                            આ બંને કોષ્ટકના બિંદુઓને આલેખપત્ર પર દર્શાવીએ:
                            
                            
                            <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                                <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border:1px solid #cbd5e1; border-radius:5px;">
                                    <g stroke="#e2e8f0" stroke-width="1">
                                        <line x1="0" y1="20" x2="300" y2="20" /><line x1="0" y1="45" x2="300" y2="45" /><line x1="0" y1="70" x2="300" y2="70" /><line x1="0" y1="95" x2="300" y2="95" /><line x1="0" y1="120" x2="300" y2="120" /><line x1="0" y1="145" x2="300" y2="145" /><line x1="0" y1="170" x2="300" y2="170" /><line x1="0" y1="195" x2="300" y2="195" /><line x1="0" y1="220" x2="300" y2="220" /><line x1="0" y1="245" x2="300" y2="245" /><line x1="0" y1="270" x2="300" y2="270" /><line x1="0" y1="295" x2="300" y2="295" />
                                        <line x1="10" y1="0" x2="10" y2="300" /><line x1="35" y1="0" x2="35" y2="300" /><line x1="60" y1="0" x2="60" y2="300" /><line x1="85" y1="0" x2="85" y2="300" /><line x1="110" y1="0" x2="110" y2="300" /><line x1="135" y1="0" x2="135" y2="300" /><line x1="160" y1="0" x2="160" y2="300" /><line x1="185" y1="0" x2="185" y2="300" /><line x1="210" y1="0" x2="210" y2="300" /><line x1="235" y1="0" x2="235" y2="300" /><line x1="260" y1="0" x2="260" y2="300" /><line x1="285" y1="0" x2="285" y2="300" />
                                    </g>
                                    
                                    <line x1="0" y1="220" x2="300" y2="220" stroke="#0f172a" stroke-width="2" /> <line x1="60" y1="0" x2="60" y2="300" stroke="#0f172a" stroke-width="2" /> <text x="285" y="215" font-weight="bold" font-size="12">X</text>
                                    <text x="45" y="15" font-weight="bold" font-size="12">Y</text>
                                    <text x="45" y="235" font-weight="bold" font-size="12">O</text>
                                    
                                    <text x="82" y="235" font-size="10">1</text><text x="107" y="235" font-size="10">2</text><text x="132" y="235" font-size="10">3</text><text x="157" y="235" font-size="10">4</text><text x="182" y="235" font-size="10">5</text>
                                    <text x="45" y="195" font-size="10">1</text><text x="45" y="170" font-size="10">2</text><text x="45" y="145" font-size="10">3</text><text x="45" y="120" font-size="10">4</text><text x="45" y="95" font-size="10">5</text><text x="45" y="70" font-size="10">6</text>
                                    <text x="40" y="245" font-size="10">-1</text><text x="40" y="270" font-size="10">-2</text>
                                    
                                    <line x1="35" y1="20" x2="160" y2="270" stroke="#2563eb" stroke-width="3" />
                                    <text x="120" y="110" font-size="12" fill="#2563eb" font-weight="bold" transform="rotate(-63 120 110)">2x + y = 6</text>
                                    
                                    <line x1="40" y1="310" x2="160" y2="70" stroke="#dc2626" stroke-width="3" />
                                    <text x="130" y="140" font-size="12" fill="#dc2626" font-weight="bold" transform="rotate(-63 130 140)">4x - 2y = 4</text>
                                    
                                    <circle cx="110" cy="170" r="6" fill="#0f172a" />
                                    <text x="125" y="170" font-size="14" font-weight="bold" fill="#0f172a">(2, 2)</text>
                                </svg>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 આલેખ પરથી ઉકેલ:</b><br>
                                આલેખમાં બંને રેખાઓ એકબીજાને <b>(2, 2)</b> બિંદુએ છેદે છે.<br>
                                <b>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 2</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 2</b> છે. 
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 4(iv): 2x - 2y - 2 = 0 અને 4x - 4y - 5 = 0 સુસંગત છે કે નહિ તે ચકાસો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 2 = 0  અને  4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 5 = 0</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>ગણતરી:</b><br>
                            આ સમીકરણો પહેલેથી જ પ્રમાણિત રૂપમાં છે:<br>
                            a<sub>1</sub> = 2, b<sub>1</sub> = -2, c<sub>1</sub> = -2<br>
                            a<sub>2</sub> = 4, b<sub>2</sub> = -4, c<sub>2</sub> = -5<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>4</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2</span><span>-4</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br><br>
                                
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2</span><span>-5</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2</span><span>5</span></span></b>
                            </div>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px;'>
                                અહીં જોઈ શકાય છે કે, <b style='color:#b91c1c; font-size:18px;'><span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>a<sub>1</sub></span><span>a<sub>2</sub></span></span> = <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>b<sub>1</sub></span><span>b<sub>2</sub></span></span> &ne; <span style='display:inline-block; vertical-align:middle;'><span style='border-bottom:1px solid #b91c1c; display:block;'>c<sub>1</sub></span><span>c<sub>2</sub></span></span></b><br>
                                <b style='color:#991b1b;'>અંતિમ જવાબ:</b> આપેલ સમીકરણ યુગ્મથી બનતી રેખાઓ સમાંતર છે, તેથી તેને કોઈ ઉકેલ નથી. એટલે કે તે <b>સુસંગત નથી</b>. <br>
                                <i>(સુસંગત નથી તેથી આલેખ દોરવાની જરૂર નથી!)</i>
                            </div>
                        </div>
                    </div>
                    `
                },
            

                {
                    question: "🌟 સ્વા. 3.1 પ્રશ્ન 5: લંબચોરસ બગીચાની અર્ધપરિમિતિ 36 મીટર છે...",
                    question_desc: "બોર્ડમાં 3 માર્ક્સ માટે મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક લંબચોરસ બગીચાની અર્ધપરિમિતિ 36 મીટર છે. તેની લંબાઈ તેની પહોળાઈ કરતાં 4 મીટર વધુ છે. તો બગીચાની બાજુઓનાં માપ શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે બગીચાની લંબાઈ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> મીટર અને પહોળાઈ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> મીટર છે.<br>
                            
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li><b>શરત 1:</b> લંબાઈ એ પહોળાઈ કરતાં 4 વધુ છે.<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 4 &nbsp;&rArr;&nbsp; <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 4</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                
                                <li><b>શરત 2:</b> અર્ધપરિમિતિ 36 મીટર છે. (પરિમિતિ = 2(લંબાઈ + પહોળાઈ), તેથી અર્ધપરિમિતિ માત્ર લંબાઈ + પહોળાઈ થાય).<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 36</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી ઉકેલ</b><br>
                            સમીકરણ 1 અને 2 નો સીધો સરવાળો કરતાં (કારણ કે એક <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> માઇનસ છે અને એક પ્લસ છે):<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp;<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 4<br>
                                + &nbsp;<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 36<br>
                                ----------------<br>
                                &nbsp;&nbsp;&nbsp;2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> &nbsp;&nbsp;&nbsp;&nbsp;= 40<br>
                                &nbsp;&nbsp;&nbsp;<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 40 / 2<br>
                                &nbsp;&nbsp;&nbsp;<b style='font-size:20px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:20px;'>x</i> = 20</b>
                            </div>
                            
                            <div style='margin-top:15px;'>
                                હવે <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની આ કિંમત સમીકરણ 2 માં મૂકતાં:<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 36<br>
                                20 + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 36<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 36 - 20<br>
                                <b style='font-size:20px; color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:20px;'>y</i> = 16</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> બગીચાની <b style='color:#1d4ed8;'>લંબાઈ 20 મીટર</b> અને <b style='color:#be123c;'>પહોળાઈ 16 મીટર</b> છે.<br>
                                <span style='font-size:14px; color:#64748b;'>(તાળો: 20 + 16 = 36 અર્ધપરિમિતિ થઈ ગઈ, અને 20 એ 16 કરતા 4 વધારે છે!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.1 પ્રશ્ન 6: સુરેખ સમીકરણ 2x + 3y - 8 = 0 આપેલ છે. એવું બીજું દ્વિચલ સુરેખ સમીકરણ લખો જેથી બનતી રેખાઓની ભૌમિતિક રજૂઆત...", 
                    question_desc: "(i) છેદતી રેખાઓ, (ii) સમાંતર રેખાઓ, (iii) સંપાતી રેખાઓ હોય.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> સુરેખ સમીકરણ 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 8 = 0 આપેલ છે. એવું બીજું દ્વિચલ સુરેખ સમીકરણ લખો જેથી બનતી જોડની ભૌમિતિક રજૂઆત નીચે મુજબ હોય:</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>(i) છેદતી રેખાઓ હોય:</b><br>
                            <span style='color:#64748b; font-size:14px;'>શરત: a<sub>1</sub>/a<sub>2</sub> &ne; b<sub>1</sub>/b<sub>2</sub> થવું જોઈએ. એટલે કે <i style='font-family:"Times New Roman",serif;'>x</i> અને <i style='font-family:"Times New Roman",serif;'>y</i> ના સહગુણકો આડાઅવળા કરી નાખવા.</span><br>
                            આપેલ સમીકરણ: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 8 = 0<br>
                            <b style='color:#15803d; font-size:18px;'>જવાબ (ઉદાહરણ): 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> - 8 = 0</b>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>(ii) સમાંતર રેખાઓ હોય:</b><br>
                            <span style='color:#64748b; font-size:14px;'>શરત: a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> &ne; c<sub>1</sub>/c<sub>2</sub> થવું જોઈએ. એટલે કે <i style='font-family:"Times New Roman",serif;'>x</i> અને <i style='font-family:"Times New Roman",serif;'>y</i> ના પદો એવા જ રાખવા અથવા બમણા કરવા, પણ અચળ પદ અલગ રાખવું.</span><br>
                            આપેલ સમીકરણ: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 8 = 0<br>
                            <i style='font-family:"Times New Roman",serif; font-size:16px;'>(x અને y ને 2 વડે ગુણતા, પણ અચળ પદ કોઈ બીજું લેતા)</i><br>
                            <b style='color:#c2410c; font-size:18px;'>જવાબ (ઉદાહરણ): 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> - 15 = 0</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>(iii) સંપાતી રેખાઓ હોય:</b><br>
                            <span style='color:#64748b; font-size:14px;'>શરત: a<sub>1</sub>/a<sub>2</sub> = b<sub>1</sub>/b<sub>2</sub> = c<sub>1</sub>/c<sub>2</sub> થવું જોઈએ. એટલે કે આખા સમીકરણને કોઈ એક સંખ્યા (જેમ કે 2 અથવા 3) વડે ગુણી નાખવું.</span><br>
                            આપેલ સમીકરણ: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 8 = 0<br>
                            <i style='font-family:"Times New Roman",serif; font-size:16px;'>(આખા સમીકરણને 2 વડે ગુણતા)</i><br>
                            <b style='color:#1d4ed8; font-size:18px;'>જવાબ (ઉદાહરણ): 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> - 16 = 0</b>
                        </div>
                    </div>
                    `
                },
                        
                {
                    question: "🌟 સ્વા. 3.1 પ્રશ્ન 7: સમીકરણો x - y + 1 = 0 અને 3x + 2y - 12 = 0 દ્વારા દર્શાવાતી રેખાઓના આલેખ દોરો.",
                    question_desc: "આ રેખાઓ અને X-અક્ષ દ્વારા રચાતા ત્રિકોણના શિરોબિંદુઓના યામ શોધો અને ત્રિકોણાકાર પ્રદેશને છાયાંકિત કરો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> સમીકરણો <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 1 = 0 અને 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 12 = 0 દ્વારા દર્શાવાતી રેખાઓના આલેખ દોરો. આ રેખાઓ અને <b>X-અક્ષ દ્વારા રચાતા ત્રિકોણના</b> શિરોબિંદુઓના યામ શોધો અને ત્રિકોણાકાર પ્રદેશને છાયાંકિત (Shade) કરો.</p>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: આલેખ માટે કોષ્ટક તૈયાર કરવા</b><br>
                            
                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:10px;'>
                                <b style='color:#2563eb;'>સમીકરણ 1: <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 1 = 0</b><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> ને સામે લઈ જતાં (કર્તા બનાવતાં): <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1</b><br>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>-1</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px; font-weight:bold; background-color:#fef08a;'>2</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>1</td>
                                            <td style='border:1px solid #93c5fd; padding:8px; font-weight:bold; background-color:#fef08a;'>3</td>
                                        </tr>
                                    </table>
                                </div>
                                <span style='font-size:13px; color:#64748b;'>* (નોંધ: x= -1 મુકવાથી y=0 મળે છે, જે X-અક્ષ પરનું બિંદુ છે).</span>
                            </div>

                            <div style='background-color:#ffffff; border:1px solid #bfdbfe; border-radius:5px; padding:10px; margin-top:15px;'>
                                <b style='color:#2563eb;'>સમીકરણ 2: 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 12 = 0</b><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> ને કર્તા બનાવતાં:<br>
                                <div style='overflow-x:auto; margin:5px 0; font-size:18px; font-weight:bold; color:#dc2626;'>
                                    <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>12 - 3<i style='font-family:"Times New Roman",serif;'>x</i></span><span>2</span></span>
                                </div>
                                <div style='overflow-x:auto;'>
                                    <table style='width:100%; max-width:300px; text-align:center; border-collapse:collapse; margin-top:10px;'>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                            <td style='border:1px solid #93c5fd; padding:8px; font-weight:bold; background-color:#fef08a;'>2</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>4</td>
                                        </tr>
                                        <tr>
                                            <th style='border:1px solid #93c5fd; padding:8px; background-color:#dbeafe;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></th>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>6</td>
                                            <td style='border:1px solid #93c5fd; padding:8px; font-weight:bold; background-color:#fef08a;'>3</td>
                                            <td style='border:1px solid #93c5fd; padding:8px;'>0</td>
                                        </tr>
                                    </table>
                                </div>
                                <span style='font-size:13px; color:#64748b;'>* (નોંધ: x= 4 મુકવાથી y=0 મળે છે, જે પણ X-અક્ષ પરનું બિંદુ છે).</span>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: આલેખની રચના અને ત્રિકોણ</b><br>
                            
                            
                            <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                                <svg width="320" height="260" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border:1px solid #cbd5e1; border-radius:5px;">
                                    
                                    <polygon points="50,200 200,200 140,110" fill="#fef08a" stroke="#ca8a04" stroke-width="1" fill-opacity="0.6"/>
                                    <g stroke="#ca8a04" stroke-width="1" opacity="0.3">
                                        <line x1="60" y1="200" x2="140" y2="120" /><line x1="80" y1="200" x2="145" y2="135" /><line x1="100" y1="200" x2="155" y2="145" /><line x1="120" y1="200" x2="165" y2="155" /><line x1="140" y1="200" x2="175" y2="165" /><line x1="160" y1="200" x2="185" y2="175" /><line x1="180" y1="200" x2="195" y2="185" />
                                    </g>

                                    <g stroke="#e2e8f0" stroke-width="1">
                                        <line x1="0" y1="20" x2="320" y2="20" /><line x1="0" y1="50" x2="320" y2="50" /><line x1="0" y1="80" x2="320" y2="80" /><line x1="0" y1="110" x2="320" y2="110" /><line x1="0" y1="140" x2="320" y2="140" /><line x1="0" y1="170" x2="320" y2="170" /><line x1="0" y1="200" x2="320" y2="200" /><line x1="0" y1="230" x2="320" y2="230" />
                                        <line x1="20" y1="0" x2="20" y2="260" /><line x1="50" y1="0" x2="50" y2="260" /><line x1="80" y1="0" x2="80" y2="260" /><line x1="110" y1="0" x2="110" y2="260" /><line x1="140" y1="0" x2="140" y2="260" /><line x1="170" y1="0" x2="170" y2="260" /><line x1="200" y1="0" x2="200" y2="260" /><line x1="230" y1="0" x2="230" y2="260" /><line x1="260" y1="0" x2="260" y2="260" /><line x1="290" y1="0" x2="290" y2="260" />
                                    </g>
                                    
                                    <line x1="0" y1="200" x2="320" y2="200" stroke="#0f172a" stroke-width="2.5" /> <line x1="80" y1="0" x2="80" y2="260" stroke="#0f172a" stroke-width="2.5" /> <text x="305" y="195" font-weight="bold" font-size="12">X</text>
                                    <text x="85" y="15" font-weight="bold" font-size="12">Y</text>
                                    <text x="85" y="215" font-weight="bold" font-size="12">O</text>
                                    
                                    <text x="45" y="215" font-size="10">-1</text><text x="15" y="215" font-size="10">-2</text>
                                    <text x="107" y="215" font-size="10">1</text><text x="137" y="215" font-size="10">2</text><text x="167" y="215" font-size="10">3</text><text x="197" y="215" font-size="10">4</text><text x="227" y="215" font-size="10">5</text><text x="257" y="215" font-size="10">6</text>
                                    
                                    <text x="65" y="175" font-size="10">1</text><text x="65" y="145" font-size="10">2</text><text x="65" y="115" font-size="10">3</text><text x="65" y="85" font-size="10">4</text><text x="65" y="55" font-size="10">5</text><text x="65" y="25" font-size="10">6</text>
                                    
                                    <line x1="10" y1="240" x2="230" y2="20" stroke="#2563eb" stroke-width="3" />
                                    <text x="105" y="60" font-size="12" fill="#2563eb" font-weight="bold" transform="rotate(-45 105 60)">x - y + 1 = 0</text>
                                    
                                    <line x1="75" y1="12.5" x2="235" y2="252.5" stroke="#dc2626" stroke-width="3" />
                                    <text x="190" y="150" font-size="12" fill="#dc2626" font-weight="bold" transform="rotate(56 190 150)">3x + 2y - 12 = 0</text>
                                    
                                    <circle cx="140" cy="110" r="5" fill="#0f172a" />
                                    <text x="150" y="105" font-size="14" font-weight="bold" fill="#0f172a">A(2, 3)</text>
                                    
                                    <circle cx="50" cy="200" r="5" fill="#0f172a" />
                                    <text x="25" y="190" font-size="14" font-weight="bold" fill="#0f172a">B(-1, 0)</text>
                                    
                                    <circle cx="200" cy="200" r="5" fill="#0f172a" />
                                    <text x="190" y="190" font-size="14" font-weight="bold" fill="#0f172a">C(4, 0)</text>
                                </svg>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 આલેખ પરથી નિષ્કર્ષ:</b><br>
                                આલેખમાં જોઈ શકાય છે કે, બંને રેખાઓ અને X-અક્ષ દ્વારા એક સરસ મજાનો ત્રિકોણ <b>&Delta;ABC</b> બને છે (જે પીળા રંગથી દર્શાવેલ છે).<br><br>
                                <b>અંતિમ જવાબ:</b> આ ત્રિકોણના શિરોબિંદુઓના યામ નીચે મુજબ છે:<br>
                                <ul style='font-size:16px; margin-top:5px; margin-bottom:0;'>
                                    <li><b>A (2, 3)</b> &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'>(બંને રેખાઓનું છેદબિંદુ)</span></li>
                                    <li><b>B (-1, 0)</b> &nbsp;<span style='color:#64748b; font-size:14px;'>(પહેલી રેખાનું X-અક્ષ સાથેનું છેદબિંદુ)</span></li>
                                    <li><b>C (4, 0)</b> &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'>(બીજી રેખાનું X-અક્ષ સાથેનું છેદબિંદુ)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                },
        
                {
                    question: "🎯 માસ્ટર ચાવી: આદેશની રીત (Substitution Method) ના 3 ગોલ્ડન સ્ટેપ્સ",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>આદેશ આપવો એટલે એકની જગ્યાએ બીજાને મૂકવો! બસ આ 3 સ્ટેપ યાદ રાખો:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#be123c;'>સ્ટેપ 1 (કર્તા બનાવવો):</b> બે માંથી જે સમીકરણ સહેલું લાગે, તેમાંથી કોઈ એક ચલ (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> અથવા <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i>) ને એકલો પાડો (કર્તા બનાવો). <i>(યાદ રાખો: બરાબરની સામે જાય તો + નું - થાય, અને ગુણાકારનું ભાગાકાર થાય!)</i></li>
                                <li><b style='color:#1d4ed8;'>સ્ટેપ 2 (આદેશ આપવો):</b> આ નવા બનાવેલા સમીકરણની કિંમત, <b>બીજા સમીકરણમાં</b> મૂકો. આથી તમને એક ચલનો ફાઇનલ જવાબ મળી જશે.</li>
                                <li><b style='color:#16a34a;'>સ્ટેપ 3 (કિંમત મૂકવી):</b> મળેલા જવાબને પેલા 'કર્તા' બનાવેલા સમીકરણમાં મૂકી દો, એટલે બીજા ચલનો પણ જવાબ મળી જશે!</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.2 પ્રશ્ન 1(i): નીચેના સુરેખ સમીકરણયુગ્મનો ઉકેલ આદેશની રીતે મેળવો: x + y = 14 અને x - y = 4", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 14 &nbsp;&nbsp;અને&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 4</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:1.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>y</i></b> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-y) બરાબરની સામે જાય એટલે પ્લસ (+y) થઈ જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 4 <span style='color:#16a34a;'>+ <i style='font-family:"Times New Roman",serif;'>y</i></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં (આદેશ લેતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 14<br>
                                <span style='color:#64748b; font-size:14px;'><i>(x ની જગ્યાએ કૌંસમાં 4 + y મૂકો)</i></span><br>
                                <b style='color:#1d4ed8;'>(4 + <i style='font-family:"Times New Roman",serif;'>y</i>)</b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 14<br>
                                4 + 2<i style='font-family:"Times New Roman",serif;'>y</i> = 14<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&#10551; <i>(+4) સામે જશે તો માઇનસ (-4) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> = 14 <b style='color:#dc2626;'>- 4</b><br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&#10551; <i>(2) ગુણાકારમાં છે, સામે જાય તો છેદમાં (ભાગાકારમાં) જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10</span><span>2</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 5</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: મળેલા y = 5 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 4 + <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 4 + <b style='color:#be123c;'>5</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 9</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 9</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 5</b> છે. 
                                <span style='font-size:14px; color:#64748b;'>(તાળો: 9 + 5 = 14 થઈ ગયા!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 1(ii): s - t = 3 અને s/3 + t/2 = 6 નો ઉકેલ આદેશની રીતે મેળવો.", 
                    question_desc: "અપૂર્ણાંક અને લ.સા.અ. ની ટ્રીક વાળો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>s</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>t</i> = 3 &nbsp;&nbsp;અને&nbsp;&nbsp; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>s</i></span><span>3</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>t</i></span><span>2</span></span> = 6</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 લ.સા.અ. ની ટ્રીક:</b><br>
                            બીજું સમીકરણ અપૂર્ણાંકમાં છે. તેના છેદમાં 3 અને 2 છે. <b>(3 &times; 2 = 6 લ.સા.અ.)</b><br>
                            તેથી <b>આખા સમીકરણને 6 વડે ગુણીશું</b> જેથી છેદ ગાયબ થઈ જાય!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો તૈયાર કરવા</b><br>
                            સમીકરણ 1: <i style='font-family:"Times New Roman",serif; font-size:18px;'>s</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>t</i> = 3<br>
                            સમીકરણ 2 ને 6 વડે ગુણતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5;'>
                                6 &times; <span style='font-size:22px;'>[</span> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif;'>s</i></span><span>3</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif;'>t</i></span><span>2</span></span> = 6 <span style='font-size:22px;'>]</span><br>
                                <span style='color:#64748b; font-size:14px;'><i>(6 ને અંદર દરેક પદ સાથે ગુણતા અને છેદ ઉડાડતા)</i></span><br>
                                <b>2<i style='font-family:"Times New Roman",serif;'>s</i> + 3<i style='font-family:"Times New Roman",serif;'>t</i> = 36</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 1 માંથી s ને કર્તા બનાવવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:1.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>s</i> <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>t</i></b> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-t) સામે જતાં (+t) થશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>s</i> = 3 <span style='color:#16a34a;'>+ <i style='font-family:"Times New Roman",serif;'>t</i></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ s ની કિંમત નવા સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                2<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>s</i></b> + 3<i style='font-family:"Times New Roman",serif;'>t</i> = 36<br>
                                <span style='color:#64748b; font-size:14px;'><i>(s ની જગ્યાએ કૌંસમાં 3 + t મૂકો)</i></span><br>
                                2<b style='color:#1d4ed8;'>(3 + <i style='font-family:"Times New Roman",serif;'>t</i>)</b> + 3<i style='font-family:"Times New Roman",serif;'>t</i> = 36<br>
                                6 + 2<i style='font-family:"Times New Roman",serif;'>t</i> + 3<i style='font-family:"Times New Roman",serif;'>t</i> = 36<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&#10551; <i>(+6) સામે જશે તો (-6) થશે અને 2t+3t = 5t થશે</i></span><br>
                                5<i style='font-family:"Times New Roman",serif;'>t</i> = 36 <b style='color:#dc2626;'>- 6</b><br>
                                5<i style='font-family:"Times New Roman",serif;'>t</i> = 30<br>
                                <i style='font-family:"Times New Roman",serif;'>t</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>30</span><span>5</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>t</i> = 6</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા t = 6 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>s</i> = 3 + <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>t</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>s</i> = 3 + <b style='color:#be123c;'>6</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>s</i> = 9</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>s</i> = 9</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>t</i> = 6</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
    
                { 
                    question: "સ્વા. 3.2 પ્રશ્ન 1(iii): આદેશની રીતે ઉકેલ મેળવો: 3x - y = 3 અને 9x - 3y = 9", 
                    question_desc: "ખાસ દાખલો: જેમાં ચલ ઉડી જાય છે અને અનંત ઉકેલો મળે છે",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 3 &nbsp;&nbsp;અને&nbsp;&nbsp; 9<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 9</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ 1 માંથી y ને કર્તા બનાવતાં</b><br>
                            અહીં સમીકરણ 1 માં <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> નો સહગુણક 1 હોવાથી તેને કર્તા બનાવવો સહેલો પડશે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>y</i></b> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-y) ને જમણી બાજુ લઈ જતાં (+y) થશે અને 3 ને ડાબી બાજુ લાવતાં (-3) થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 3</b> = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                એટલે કે, <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 3<i style='font-family:"Times New Roman",serif;'>x</i> - 3</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આ y ની કિંમત સમીકરણ 2 માં મૂકતાં (આદેશ લેતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                9<i style='font-family:"Times New Roman",serif;'>x</i> - 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 9<br>
                                <span style='color:#64748b; font-size:14px;'><i>(y ની જગ્યાએ કૌંસમાં 3x - 3 મૂકો)</i></span><br>
                                9<i style='font-family:"Times New Roman",serif;'>x</i> - 3<b style='color:#be123c;'>(3<i style='font-family:"Times New Roman",serif;'>x</i> - 3)</b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-3) નો કૌંસમાં ગુણાકાર: -3 &times; 3x = -9x અને -3 &times; -3 = +9</i></span><br>
                                9<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 9<i style='font-family:"Times New Roman",serif;'>x</i> + 9</b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અહીં +9x અને -9x ઉડી જશે! (ઝીરો થઈ જશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'>9 = 9</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: નિષ્કર્ષ</b><br>
                            <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-top:5px;'>
                                અહીં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> દૂર થઈ જાય છે અને <b>9 = 9</b> એવું સત્ય વિધાન મળે છે. આનો અર્થ એ થાય કે <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની કોઈપણ કિંમત માટે આ સમીકરણ સાચું છે.<br><br>
                                <b style='color:#ea580c;'>અંતિમ જવાબ:</b> આ સમીકરણ યુગ્મને <b>અનંત ઉકેલો</b> છે! (કારણ કે ખરેખર બંને સમીકરણો એક જ છે, રેખાઓ સંપાતી છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 1(iv): 0.2x + 0.3y = 1.3 અને 0.4x + 0.5y = 2.3", 
                    question_desc: "દશાંશ ચિહ્ન (પોઈન્ટ) દૂર કરવાની સુપર ટ્રીક",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 0.2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 0.3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 1.3 &nbsp;&nbsp;અને&nbsp;&nbsp; 0.4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 0.5<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 2.3</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 પોઈન્ટ દૂર કરવાની ટ્રીક:</b><br>
                            બંને સમીકરણોમાં દરેક પદમાં પોઈન્ટ પછી માત્ર 1 જ આંકડો છે. તેથી <b>બંને સમીકરણોને 10 વડે ગુણતાં</b> બધા જ પોઈન્ટ ગાયબ થઈ જશે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: નવા અને સાદા સમીકરણો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.0;'>
                                <b>2<i style='font-family:"Times New Roman",serif;'>x</i> + 3<i style='font-family:"Times New Roman",serif;'>y</i> = 13</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)<br>
                                <b>4<i style='font-family:"Times New Roman",serif;'>x</i> + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 23</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 1 માંથી x ને કર્તા બનાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>+ 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 13<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3y) સામે જતાં (-3y) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> = 13 <b style='color:#dc2626;'>- 3<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2) ગુણાકારમાંથી છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>13 - 3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>2</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                4<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 23<br>
                                <span style='color:#64748b; font-size:14px;'><i>(x ની જગ્યાએ કિંમત મૂકો)</i></span><br>
                                4 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>13 - 3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>2</span></span></b> <span style='font-size:22px;'>]</span> + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 23<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશના 4 અને છેદના 2 ના છેદ ઉડતા 2 વધશે</i></span><br>
                                <b style='color:#c026d3;'>2</b> (13 - 3<i style='font-family:"Times New Roman",serif;'>y</i>) + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 23<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>2 નો અંદર ગુણાકાર કરો (2 &times; 13 = 26 અને 2 &times; -3y = -6y)</i></span><br>
                                26 <b style='color:#dc2626;'>- 6<i style='font-family:"Times New Roman",serif;'>y</i></b> + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 23<br>
                                26 <b style='color:#dc2626;'>- 1<i style='font-family:"Times New Roman",serif;'>y</i></b> = 23<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+26) સામે જશે તો (-26) થશે</i></span><br>
                                -<i style='font-family:"Times New Roman",serif;'>y</i> = 23 <b style='color:#dc2626;'>- 26</b><br>
                                -<i style='font-family:"Times New Roman",serif;'>y</i> = -3<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 3 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b></span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 3<b style='color:#be123c;'>(3)</b></span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 9</span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>2</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 2</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 3</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
            
    
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 1(v): &radic;2x + &radic;3y = 0 અને &radic;3x - &radic;8y = 0 નો ઉકેલ મેળવો.", 
                    question_desc: "વર્ગમૂળ વાળો દાખલો (બોર્ડ માટે સુપર IMP)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> &radic;2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + &radic;3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 0 &nbsp;&nbsp;અને&nbsp;&nbsp; &radic;3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - &radic;8<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ 1 માંથી x ને કર્તા બનાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                &radic;2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>+ &radic;3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+&radic;3y) સામે જતાં માઇનસ (-&radic;3y) થશે</i></span><br>
                                &radic;2<i style='font-family:"Times New Roman",serif;'>x</i> = <b style='color:#dc2626;'>-&radic;3<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(&radic;2) ગુણાકારમાંથી છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-&radic;3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>&radic;2</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આ x ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &radic;3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - &radic;8<i style='font-family:"Times New Roman",serif;'>y</i> = 0<br>
                                <span style='color:#64748b; font-size:14px;'><i>(x ની જગ્યાએ કિંમત મૂકો)</i></span><br>
                                &radic;3 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-&radic;3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>&radic;2</span></span></b> <span style='font-size:22px;'>]</span> - &radic;8<i style='font-family:"Times New Roman",serif;'>y</i> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશમાં ગુણાકાર: &radic;3 &times; -&radic;3 = -3 થશે</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>&radic;2</span></span> - &radic;8<i style='font-family:"Times New Roman",serif;'>y</i> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બંને પદમાંથી y સામાન્ય (કોમન) કાઢતાં</i></span><br>
                                <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> <span style='font-size:22px;'>[</span> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3</span><span>&radic;2</span></span> - &radic;8 <span style='font-size:22px;'>]</span> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>કૌંસવાળું આખું પદ 0 ના છેદમાં જશે એટલે બધું 0 થઈ જશે</i></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: મળેલા y = 0 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-&radic;3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b></span><span>&radic;2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-&radic;3<b style='color:#be123c;'>(0)</b></span><span>&radic;2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>0</span><span>&radic;2</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 0</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 0</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 0</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 1(vi): 3x/2 - 5y/3 = -2 અને x/3 + y/2 = 13/6", 
                    question_desc: "લ.સા.અ. ની ટ્રીક વાળો મોટો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i></span><span>2</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span><span>3</span></span> = -2 &nbsp;&nbsp;અને&nbsp;&nbsp; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i></span><span>3</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13</span><span>6</span></span></p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 લ.સા.અ. ની ટ્રીક (છેદ ઉડાડવા):</b><br>
                            બંને સમીકરણોમાં છેદમાં 2, 3 અને 6 છે. આ બધાનો લ.સા.અ. 6 થાય છે. <br>
                            તેથી <b>બંને સમીકરણોને 6 વડે ગુણીશું</b> એટલે એકદમ સાદા સમીકરણ બની જશે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સાદા સમીકરણો બનાવવા</b><br>
                            સમીકરણ 1 ને 6 વડે ગુણતાં: <span style='color:#64748b; font-size:14px;'><i>(6&times;3x/2 = 9x અને 6&times;5y/3 = 10y)</i></span><br>
                            <b>9<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 10<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -12</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 1)<br><br>
                            સમીકરણ 2 ને 6 વડે ગુણતાં:<br>
                            <b>2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 13</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: નવા સમીકરણ 2 માંથી x ને કર્તા બનાવતાં (સહેલું પડશે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>+ 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 13<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3y) સામે જતાં (-3y) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> = 13 <b style='color:#dc2626;'>- 3<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2) છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>13 - 3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>2</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત નવા સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                9<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - 10<i style='font-family:"Times New Roman",serif;'>y</i> = -12<br>
                                <span style='color:#64748b; font-size:14px;'><i>(x ની કિંમત મૂકો)</i></span><br>
                                9 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>13 - 3<i style='font-family:"Times New Roman",serif;'>y</i></span><span>2</span></span></b> <span style='font-size:22px;'>]</span> - 10<i style='font-family:"Times New Roman",serif;'>y</i> = -12<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અહીં છેદમાં 2 છે, તેને દૂર કરવા આખા સમીકરણને 2 વડે ગુણો!</i></span><br>
                                9(13 - 3<i style='font-family:"Times New Roman",serif;'>y</i>) - 20<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>9 નો અંદર ગુણાકાર: 9 &times; 13 = 117 અને 9 &times; -3y = -27y</i></span><br>
                                117 - 27<i style='font-family:"Times New Roman",serif;'>y</i> - 20<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                117 - 47<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+117) સામે જશે તો (-117) થશે</i></span><br>
                                -47<i style='font-family:"Times New Roman",serif;'>y</i> = -24 <b style='color:#dc2626;'>- 117</b><br>
                                -47<i style='font-family:"Times New Roman",serif;'>y</i> = -141<br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-141</span><span>-47</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 3 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b></span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 3<b style='color:#be123c;'>(3)</b></span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13 - 9</span><span>2</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>2</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> સમીકરણ યુગ્મનો ઉકેલ <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 2</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 3</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
    
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 2: 2x + 3y = 11 અને 2x - 4y = -24 નો ઉકેલ શોધો અને એવો 'm' શોધો કે જેથી y = mx + 3 થાય.", 
                    question_desc: "બોર્ડમાં 2 માર્ક્સ માટે પૂછાતો ટ્રીકી દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 11 અને 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = -24 નો ઉકેલ શોધો અને એવો <b>m</b> શોધો કે જેથી <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = m<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3 થાય.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં (સહેલું પડશે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 4<i style='font-family:"Times New Roman",serif;'>y</i></b> = -24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-4y) જમણી બાજુ જશે તો (+4y) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> = -24 <b style='color:#16a34a;'>+ 4<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>આખા સમીકરણને 2 વડે ભાગતાં</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = -12 + 2<i style='font-family:"Times New Roman",serif;'>y</i></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                2<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 3<i style='font-family:"Times New Roman",serif;'>y</i> = 11<br>
                                2<b style='color:#1d4ed8;'>(-12 + 2<i style='font-family:"Times New Roman",serif;'>y</i>)</b> + 3<i style='font-family:"Times New Roman",serif;'>y</i> = 11<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>2 નો અંદર ગુણાકાર: 2 &times; (-12) = -24 અને 2 &times; 2y = 4y</i></span><br>
                                <b style='color:#dc2626;'>-24</b> + 4<i style='font-family:"Times New Roman",serif;'>y</i> + 3<i style='font-family:"Times New Roman",serif;'>y</i> = 11<br>
                                <b style='color:#dc2626;'>-24</b> + 7<i style='font-family:"Times New Roman",serif;'>y</i> = 11<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-24) સામે જશે તો પ્લસ (+24) થશે</i></span><br>
                                7<i style='font-family:"Times New Roman",serif;'>y</i> = 11 <b style='color:#16a34a;'>+ 24</b><br>
                                7<i style='font-family:"Times New Roman",serif;'>y</i> = 35<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>7 ગુણાકારમાંથી છેદમાં જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>7</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 5</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: મળેલા y = 5 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = -12 + 2<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = -12 + 2<b style='color:#be123c;'>(5)</b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = -12 + 10<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = -2</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 4: હવે 'm' શોધવા માટે y = mx + 3 માં કિંમત મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = m<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 3<br>
                                <b style='color:#be123c;'>5</b> = m<b style='color:#1d4ed8;'>(-2)</b> + 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3) ને ડાબી બાજુ લાવતા (-3) થશે</i></span><br>
                                5 <b style='color:#dc2626;'>- 3</b> = -2m<br>
                                2 = -2m<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-2) છેદમાં જશે</i></span><br>
                                m = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>-2</span></span><br>
                                <b style='font-size:22px; color:#c026d3;'>m = -1</b>
                            </div>
                            <p style='margin-top:10px; font-weight:bold; color:#0f172a;'>અંતિમ જવાબ: સમીકરણનો ઉકેલ x = -2, y = 5 છે અને m = -1 છે.</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.2 પ્રશ્ન 3(i): બે સંખ્યાઓનો તફાવત 26 છે અને એક સંખ્યા બીજી સંખ્યાથી ત્રણ ગણી છે. તો તે બે સંખ્યાઓ શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે સંખ્યાઓનો તફાવત 26 છે અને એક સંખ્યા બીજી સંખ્યાથી ત્રણ ગણી છે. તો તે બે સંખ્યાઓ શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે મોટી સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને નાની સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li><b>શરત 1:</b> બે સંખ્યાઓનો તફાવત 26 છે. (મોટી - નાની = 26).<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 26</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                <li><b>શરત 2:</b> એક સંખ્યા બીજી સંખ્યાથી ત્રણ ગણી છે. (મોટી સંખ્યા = 3 &times; નાની સંખ્યા).<br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આદેશની રીત (સમીકરણ 2 ની કિંમત 1 માં મુકતા)</b><br>
                            અહીં સમીકરણ 2 માં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> પહેલેથી જ કર્તા છે. સીધી કિંમત મૂકીએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - <i style='font-family:"Times New Roman",serif;'>y</i> = 26<br>
                                <b style='color:#1d4ed8;'>(3<i style='font-family:"Times New Roman",serif;'>y</i>)</b> - 1<i style='font-family:"Times New Roman",serif;'>y</i> = 26<br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> = 26<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>2 છેદમાં જશે (26 ભાગ્યા 2)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>26</span><span>2</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 13</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 3<b style='color:#be123c;'>(13)</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 39</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલી બે સંખ્યાઓ <b style='color:#1d4ed8;'>39</b> અને <b style='color:#be123c;'>13</b> છે.
                                <span style='font-size:14px; color:#64748b;'>(તાળો: 39 - 13 = 26 અને 13 &times; 3 = 39)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.2 પ્રશ્ન 3(ii): બે પૂરકકોણો પૈકી મોટો ખૂણો નાના ખૂણા કરતાં 18° મોટો હોય, તો તે પૂરકકોણો શોધો.", 
                    question_desc: "પૂરકકોણ નો નિયમ આવડવો જરૂરી છે",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે પૂરકકોણો પૈકી મોટો ખૂણો નાના ખૂણા કરતાં 18&deg; મોટો હોય, તો તે પૂરકકોણો શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી:</b><br>
                            પૂરકકોણો એટલે એવા બે ખૂણા જેમનો <b>સરવાળો હંમેશા 180&deg;</b> થાય. (આ નિયમ રકમમાં આપ્યો ન હોય, આપણે યાદ રાખવાનો છે).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે મોટો ખૂણો = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને નાનો ખૂણો = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li><b>શરત 1:</b> બંને પૂરકકોણ છે, તેથી સરવાળો 180&deg; થાય.<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 180</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                <li><b>શરત 2:</b> મોટો ખૂણો નાના કરતા 18&deg; મોટો છે.<br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 18</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: આદેશની રીત (સમીકરણ 2 ની કિંમત 1 માં મુકતા)</b><br>
                            સમીકરણ 2 માં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> પહેલેથી જ કર્તા છે. તેની કિંમત સમીકરણ 1 માં મૂકીએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 180<br>
                                <b style='color:#1d4ed8;'>(<i style='font-family:"Times New Roman",serif;'>y</i> + 18)</b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 180<br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> + 18 = 180<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+18) સામે જતાં (-18) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> = 180 <b style='color:#dc2626;'>- 18</b><br>
                                2<i style='font-family:"Times New Roman",serif;'>y</i> = 162<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>2 છેદમાં જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>162</span><span>2</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 81</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> + 18<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <b style='color:#be123c;'>81</b> + 18<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 99</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલા પૂરકકોણો <b style='color:#1d4ed8;'>99&deg;</b> અને <b style='color:#be123c;'>81&deg;</b> છે.
                                <span style='font-size:14px; color:#64748b;'>(તાળો: 99 + 81 = 180 અને 99 એ 81 કરતા 18 મોટો છે)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 3(iii): ક્રિકેટ ટીમના કોચે 7 બેટ અને 6 દડા ₹3800 માં ખરીદ્યા...", 
                    question_desc: "પછીથી તેણે તે જ કિંમતવાળા 3 બેટ અને 5 દડા ₹1750 માં ખરીદ્યા. તો 1 બેટ અને 1 દડાની કિંમત શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> ક્રિકેટ ટીમના કોચે 7 બેટ અને 6 દડા ₹3800 માં ખરીદ્યા. પછીથી તેણે તે જ કિંમતવાળા 3 બેટ અને 5 દડા ₹1750 માં ખરીદ્યા. તો એક બેટની કિંમત અને એક દડાની કિંમત શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે 1 બેટની કિંમત = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને 1 દડાની કિંમત = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li>7 બેટ અને 6 દડાની કિંમત ₹ 3800 છે:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>7<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 6<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 3800</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                <li>3 બેટ અને 5 દડાની કિંમત ₹ 1750 છે:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>3<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 1750</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં (આંકડા નાના છે એટલે સહેલું પડશે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>+ 5<i style='font-family:"Times New Roman",serif;'>y</i></b> = 1750<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+5y) સામે જતાં (-5y) થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = 1750 <b style='color:#dc2626;'>- 5<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(3) ગુણાકારમાંથી છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1750 - 5<i style='font-family:"Times New Roman",serif;'>y</i></span><span>3</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                7<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 6<i style='font-family:"Times New Roman",serif;'>y</i> = 3800<br>
                                7 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1750 - 5<i style='font-family:"Times New Roman",serif;'>y</i></span><span>3</span></span></b> <span style='font-size:22px;'>]</span> + 6<i style='font-family:"Times New Roman",serif;'>y</i> = 3800<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અહીં છેદમાં 3 છે, તેને દૂર કરવા આખા સમીકરણને 3 વડે ગુણો! (લ.સા.અ.)</i></span><br>
                                7 (1750 - 5<i style='font-family:"Times New Roman",serif;'>y</i>) + 18<i style='font-family:"Times New Roman",serif;'>y</i> = 11400<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>7 નો કૌંસમાં ગુણાકાર: 7 &times; 1750 = 12250 અને 7 &times; -5y = -35y</i></span><br>
                                12250 <b style='color:#dc2626;'>- 35<i style='font-family:"Times New Roman",serif;'>y</i></b> + 18<i style='font-family:"Times New Roman",serif;'>y</i> = 11400<br>
                                12250 <b style='color:#dc2626;'>- 17<i style='font-family:"Times New Roman",serif;'>y</i></b> = 11400<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+12250) સામે જતાં (-12250) થશે</i></span><br>
                                -17<i style='font-family:"Times New Roman",serif;'>y</i> = 11400 <b style='color:#dc2626;'>- 12250</b><br>
                                -17<i style='font-family:"Times New Roman",serif;'>y</i> = -850<br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-850</span><span>-17</span></span> <span style='color:#64748b; font-size:14px;'><i>(માઇનસ માઇનસ ઉડી જશે, 17 પંચા 85)</i></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 50</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 50 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1750 - 5<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b></span><span>3</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1750 - 5<b style='color:#be123c;'>(50)</b></span><span>3</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1750 - 250</span><span>3</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1500</span><span>3</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 500</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> એક <b style='color:#1d4ed8;'>બેટની કિંમત ₹ 500</b> છે અને એક <b style='color:#be123c;'>દડાની કિંમત ₹ 50</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 3(iv): એક શહેરમાં ટેક્સીનું ભાડું નિશ્ચિત ભાડા અને અંતરના પ્રમાણમાં સંયુક્ત રીતે લેવાય છે.", 
                    question_desc: "10 કિમી માટે ₹105 અને 15 કિમી માટે ₹155. બોર્ડ માટે 3 માર્ક્સનો મોસ્ટ IMP દાખલો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક શહેરમાં ટેક્સીનું ભાડું નિશ્ચિત ભાડા અને અંતરના પ્રમાણમાં સંયુક્ત રીતે લેવાય છે. 10 કિમીના અંતર માટે ₹105 અને 15 કિમીની મુસાફરી માટે ₹155 ની ચૂકવણી કરવી પડે છે. તો નિશ્ચિત ભાડું અને પ્રતિ કિમી કેટલા દરે ભાડું ચૂકવવું પડે? મુસાફરે 25 કિમીની મુસાફરી માટે કેટલું ભાડું ચૂકવવું પડશે?</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે ટેક્સીનું નિશ્ચિત (ફિક્સ) ભાડું = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને પ્રતિ કિલોમીટર દીઠ ભાડું = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            <i>(કુલ ભાડું = ફિક્સ ભાડું + (કિમી &times; પ્રતિ કિમી ભાડું))</i>
                            <ul style='line-height:2.2; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li>10 કિમીની મુસાફરી માટે ₹ 105:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 10<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 105</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)</li>
                                <li>15 કિમીની મુસાફરી માટે ₹ 155:<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 15<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 155</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)</li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 1 માંથી x ને કર્તા બનાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>+ 10<i style='font-family:"Times New Roman",serif;'>y</i></b> = 105<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+10y) જમણી બાજુ જતાં (-10y) થશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 105 <span style='color:#dc2626;'>- 10<i style='font-family:"Times New Roman",serif;'>y</i></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 15<i style='font-family:"Times New Roman",serif;'>y</i> = 155<br>
                                <b style='color:#1d4ed8;'>(105 - 10<i style='font-family:"Times New Roman",serif;'>y</i>)</b> + 15<i style='font-family:"Times New Roman",serif;'>y</i> = 155<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-10y + 15y) એટલે કે (+5y) વધશે</i></span><br>
                                <b style='color:#dc2626;'>105</b> + 5<i style='font-family:"Times New Roman",serif;'>y</i> = 155<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+105) સામે જતાં માઇનસ (-105) થશે</i></span><br>
                                5<i style='font-family:"Times New Roman",serif;'>y</i> = 155 <b style='color:#dc2626;'>- 105</b><br>
                                5<i style='font-family:"Times New Roman",serif;'>y</i> = 50<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(5) ભાગાકારમાં જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>50</span><span>5</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 10</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 10 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 105 - 10<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 105 - 10<b style='color:#be123c;'>(10)</b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 105 - 100<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 5</b>
                            </div>
                            
                            <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>સ્ટેપ 5: 25 કિમીની મુસાફરી માટેનું ભાડું</b><br>
                                25 કિમી માટે ચૂકવવું પડતું ભાડું = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> + 25<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i><br>
                                = <b style='color:#1d4ed8;'>5</b> + 25<b style='color:#be123c;'>(10)</b><br>
                                = 5 + 250<br>
                                <b style='font-size:20px; color:#15803d;'>= ₹ 255</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> ટેક્સીનું <b style='color:#1d4ed8;'>નિશ્ચિત ભાડું ₹ 5</b> છે અને <b style='color:#be123c;'>પ્રતિ કિમી ભાડું ₹ 10</b> છે. 25 કિમી મુસાફરી કરવા માટે મુસાફરે <b>₹ 255</b> ચૂકવવા પડશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 3(v): એક અપૂર્ણાંકના અંશ અને છેદ બંનેમાં 2 ઉમેરતાં તે 9/11 બને છે...", 
                    question_desc: "જો અંશ અને છેદ બંનેમાં 3 ઉમેરતાં તે 5/6 બને, તો તે અપૂર્ણાંક શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક અપૂર્ણાંકના અંશ અને છેદ બંનેમાં 2 ઉમેરતાં તે 9/11 બને છે. જો અપૂર્ણાંકના અંશ અને છેદ બંનેમાં 3 ઉમેરતાં તે 5/6 બને, તો તે અપૂર્ણાંક શોધો.</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે માંગેલ અપૂર્ણાંકનો અંશ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને છેદ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            તેથી મૂળ અપૂર્ણાંક = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i></span><span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span></span> થાય.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:16px; margin-top:10px; line-height:2.8;'>
                                <b>શરત 1: બંનેમાં 2 ઉમેરતાં</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2</span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>11</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>ચોકડી ગુણાકાર કરતાં: 11(x+2) = 9(y+2)</i></span><br>
                                11<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 22 = 9<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 18<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>11<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 9<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -4</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)<br><br>

                                <b>શરત 2: બંનેમાં 3 ઉમેરતાં</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3</span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 3</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>6</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>ચોકડી ગુણાકાર કરતાં: 6(x+3) = 5(y+3)</i></span><br>
                                6<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 18 = 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 15<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'>6<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -3</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં (આંકડા નાના છે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                6<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 5<i style='font-family:"Times New Roman",serif;'>y</i></b> = -3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-5y) સામે જતાં પ્લસ (+5y) થશે</i></span><br>
                                6<i style='font-family:"Times New Roman",serif;'>x</i> = -3 <b style='color:#16a34a;'>+ 5<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(6) ગુણાકારમાંથી છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-3 + 5<i style='font-family:"Times New Roman",serif;'>y</i></span><span>6</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                11<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - 9<i style='font-family:"Times New Roman",serif;'>y</i> = -4<br>
                                11 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-3 + 5<i style='font-family:"Times New Roman",serif;'>y</i></span><span>6</span></span></b> <span style='font-size:22px;'>]</span> - 9<i style='font-family:"Times New Roman",serif;'>y</i> = -4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>છેદના 6 દૂર કરવા આખા સમીકરણને 6 વડે ગુણો!</i></span><br>
                                11 (-3 + 5<i style='font-family:"Times New Roman",serif;'>y</i>) - 54<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>11 નો અંદર ગુણાકાર: 11 &times; -3 = -33 અને 11 &times; 5y = 55y</i></span><br>
                                <b style='color:#dc2626;'>-33</b> + 55<i style='font-family:"Times New Roman",serif;'>y</i> - 54<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                <b style='color:#dc2626;'>-33</b> + 1<i style='font-family:"Times New Roman",serif;'>y</i> = -24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-33) સામે જતાં પ્લસ (+33) થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = -24 <b style='color:#16a34a;'>+ 33</b><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 9</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 9 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3 + 5<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b></span><span>6</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3 + 5<b style='color:#be123c;'>(9)</b></span><span>6</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-3 + 45</span><span>6</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>42</span><span>6</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 7</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલ અપૂર્ણાંકનો અંશ 7 અને છેદ 9 છે. તેથી <b>માંગેલ અપૂર્ણાંક <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>9</span></span></b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.2 પ્રશ્ન 3(vi): પાંચ વર્ષ પછી જેકબની ઉંમર તેના પુત્રની ઉંમર કરતાં 3 ગણી હશે...", 
                    question_desc: "પાંચ વર્ષ પહેલાં જેકબની ઉંમર તેના પુત્રની ઉંમરથી 7 ગણી હોય, તો તેમની વર્તમાન ઉંમર શોધો. (મોસ્ટ IMP)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> પાંચ વર્ષ પછી જેકબની ઉંમર તેના પુત્રની ઉંમર કરતાં ત્રણ ગણી હશે. પાંચ વર્ષ પહેલાં જેકબની ઉંમર તેના પુત્રની ઉંમરથી સાત ગણી હોય, તો તેમની વર્તમાન (હાલની) ઉંમર શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ઉંમરના દાખલાની ટ્રીક:</b><br>
                            જ્યારે <b>"પછી"</b> કીધું હોય ત્યારે હાલની ઉંમરમાં <b>સરવાળો (+)</b> કરવો. <br>
                            જ્યારે <b>"પહેલાં"</b> કીધું હોય ત્યારે હાલની ઉંમરમાંથી <b>બાદબાકી (-)</b> કરવી.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે જેકબની હાલની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> વર્ષ અને તેના પુત્રની હાલની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> વર્ષ છે.<br>
                            
                            <ul style='line-height:2.5; margin-top:5px; font-size:16px; color:#0f172a;'>
                                <li><b>શરત 1: પાંચ વર્ષ પછી</b><br>
                                જેકબની ઉંમર (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5) અને પુત્રની ઉંમર (<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 5) થશે.<br>
                                જેકબની ઉંમર = 3 &times; પુત્રની ઉંમર<br>
                                <div style='overflow-x:auto; white-space:nowrap; margin-top:5px;'>
                                    <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5 = 3(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 5) &nbsp;&rArr;&nbsp; <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 5 = 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 15<br>
                                    <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+5 ને સામે લઈ જતાં -5 થશે અને 3y ને આ બાજુ લાવતા -3y થશે)</i></span><br>
                                    <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 10</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                                </div>
                                </li>
                                
                                <li style='margin-top:10px;'><b>શરત 2: પાંચ વર્ષ પહેલાં</b><br>
                                જેકબની ઉંમર (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5) અને પુત્રની ઉંમર (<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5) હતી.<br>
                                જેકબની ઉંમર = 7 &times; પુત્રની ઉંમર<br>
                                <div style='overflow-x:auto; white-space:nowrap; margin-top:5px;'>
                                    <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5 = 7(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5) &nbsp;&rArr;&nbsp; <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5 = 7<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 35<br>
                                    <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-5 ને સામે લઈ જતાં +5 થશે અને 7y ને આ બાજુ લાવતા -7y થશે)</i></span><br>
                                    <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 7<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -30</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                                </div>
                                </li>
                            </ul>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સમીકરણ 1 માંથી x ને કર્તા બનાવતાં (x એકલો છે એટલે સહેલું પડશે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-3y) સામે જતાં પ્લસ (+3y) થશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 10 <span style='color:#16a34a;'>+ 3<i style='font-family:"Times New Roman",serif;'>y</i></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: આ x ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - 7<i style='font-family:"Times New Roman",serif;'>y</i> = -30<br>
                                <span style='color:#64748b; font-size:14px;'><i>(x ની જગ્યાએ કૌંસમાં 10 + 3y મૂકો)</i></span><br>
                                <b style='color:#1d4ed8;'>(10 + 3<i style='font-family:"Times New Roman",serif;'>y</i>)</b> - 7<i style='font-family:"Times New Roman",serif;'>y</i> = -30<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3y - 7y) એટલે માઇનસ (-4y) વધશે</i></span><br>
                                <b style='color:#dc2626;'>10</b> - 4<i style='font-family:"Times New Roman",serif;'>y</i> = -30<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+10) સામે જતાં માઇનસ (-10) થશે</i></span><br>
                                -4<i style='font-family:"Times New Roman",serif;'>y</i> = -30 <b style='color:#dc2626;'>- 10</b><br>
                                -4<i style='font-family:"Times New Roman",serif;'>y</i> = -40<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-4) છેદમાં જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-40</span><span>-4</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 10</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: મળેલા y = 10 ને સમીકરણ 3 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 10 + 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 10 + 3<b style='color:#be123c;'>(10)</b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 10 + 30<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 40</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> જેકબની વર્તમાન ઉંમર <b style='color:#1d4ed8;'>40 વર્ષ</b> છે અને તેના પુત્રની વર્તમાન ઉંમર <b style='color:#be123c;'>10 વર્ષ</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                {
                    question: "🎯 માસ્ટર ચાવી: લોપની રીત (Elimination Method) ના 3 ગોલ્ડન સ્ટેપ્સ",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>'લોપ' કરવો એટલે કે ગાયબ કરવું! બસ આ 3 સ્ટેપ યાદ રાખો:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#be123c;'>સ્ટેપ 1 (સરખા કરવા):</b> બંને સમીકરણમાંથી કોઈ એક ચલ (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> અથવા <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i>) ને પસંદ કરો અને યોગ્ય સંખ્યા વડે ગુણાકાર કરી બંનેના <b>સહગુણકો (આગળના આંકડા) સરખા કરો</b>.</li>
                                <li><b style='color:#1d4ed8;'>સ્ટેપ 2 (લોપ કરવો):</b> જો બંનેની નિશાની અલગ અલગ (+ અને -) હોય, તો સીધો <b>સરવાળો</b> કરો. જો નિશાની સરખી હોય, તો <b>બાદબાકી</b> કરો (એટલે કે નીચેના સમીકરણની નિશાનીઓ બદલી નાખો). આથી એક ચલ ગાયબ થઈ જશે અને બીજાનો જવાબ મળશે.</li>
                                <li><b style='color:#16a34a;'>સ્ટેપ 3 (કિંમત મૂકવી):</b> મળેલા જવાબને સહેલા લાગતા કોઈપણ એક સમીકરણમાં મૂકી દો, એટલે બીજા ચલનો પણ જવાબ મળી જશે!</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 3.3 પ્રશ્ન 1(i): નીચેના સુરેખ સમીકરણયુગ્મનો ઉકેલ લોપની રીતે અને આદેશની રીતે શોધો: x + y = 5 અને 2x - 3y = 4", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 5 &nbsp;&nbsp;અને&nbsp;&nbsp; 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 4</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:18px; border-bottom:2px solid #14532d; padding-bottom:2px;'>રીત 1: લોપની રીત</b><br><br>
                            સમીકરણ 1: <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 5<br>
                            સમીકરણ 2: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 4<br><br>
                            
                            <b style='color:#16a34a; font-size:15px;'>સ્ટેપ 1: y નો લોપ કરવા સમીકરણ 1 ને 3 વડે ગુણતાં</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(કારણ કે સમીકરણ 2 માં -3y છે, તો સમીકરણ 1 માં +3y લાવીએ તો સીધો લોપ થઈ જાય)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                3 &times; (<i style='font-family:"Times New Roman",serif;'>x</i> + <i style='font-family:"Times New Roman",serif;'>y</i> = 5) &nbsp;&nbsp;&#10551;&nbsp;&nbsp; <b>3<i style='font-family:"Times New Roman",serif;'>x</i> + 3<i style='font-family:"Times New Roman",serif;'>y</i> = 15</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 3)
                            </div>
                            
                            <b style='color:#16a34a; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: સમીકરણ 2 અને 3 નો સરવાળો કરતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; 3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 15<br>
                                +&nbsp; 2<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = 4<br>
                                --------------------<br>
                                &nbsp;&nbsp; 5<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 19<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(5 ગુણાકારમાંથી છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp; <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>19</span><span>5</span></span></b>
                            </div>
                            
                            <b style='color:#16a34a; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: x ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 5<br>
                                <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>19</span><span>5</span></span></b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 5<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(19/5) સામે જતાં માઇનસ થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 5 <b style='color:#dc2626;'>- <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>19</span><span>5</span></span></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>લ.સા.અ. લેતાં (5 &times; 5 = 25)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25 - 19</span><span>5</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>6</span><span>5</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:18px; border-bottom:2px solid #1e3a8a; padding-bottom:2px;'>રીત 2: આદેશની રીત</b><br><br>
                            
                            <b style='color:#2563eb; font-size:15px;'>સ્ટેપ 1: સમીકરણ 1 માંથી y ને કર્તા બનાવતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + <i style='font-family:"Times New Roman",serif;'>y</i> = 5<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+x) સામે જતાં (-x) થશે</i></span><br>
                                <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 5 <span style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                            
                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: આ y ની કિંમત સમીકરણ 2 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dbeafe; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> - 3<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 4<br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> - 3<b style='color:#be123c;'>(5 - <i style='font-family:"Times New Roman",serif;'>x</i>)</b> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-3) નો ગુણાકાર: -3 &times; 5 = -15 અને -3 &times; -x = +3x</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 15</b> <b style='color:#16a34a;'>+ 3<i style='font-family:"Times New Roman",serif;'>x</i></b> = 4<br>
                                5<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 15</b> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-15) સામે જતાં પ્લસ (+15) થશે</i></span><br>
                                5<i style='font-family:"Times New Roman",serif;'>x</i> = 4 <b style='color:#16a34a;'>+ 15</b><br>
                                5<i style='font-family:"Times New Roman",serif;'>x</i> = 19<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>19</span><span>5</span></span></b>
                            </div>

                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: x ની કિંમત સમીકરણ 3 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#bfdbfe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 5 - <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 5 - <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>19</span><span>5</span></span></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>લ.સા.અ. લેતાં</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25 - 19</span><span>5</span></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>6</span><span>5</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #f59e0b;'>
                            <b style='color:#b45309; font-size:16px;'>અંતિમ નિષ્કર્ષ:</b> તમે જોઈ શકો છો કે <b>બંને રીતથી જવાબ હંમેશા સરખો જ આવે છે!</b> <br>
                            ઉકેલ: <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 19/5</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 6/5</b> છે.
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "સ્વા. 3.3 પ્રશ્ન 1(ii): નીચેના સમીકરણયુગ્મનો ઉકેલ લોપ અને આદેશની રીતે શોધો: 3x + 4y = 10 અને 2x - 2y = 2", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 10 &nbsp;&nbsp;અને&nbsp;&nbsp; 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> = 2</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:18px; border-bottom:2px solid #b91c1c; padding-bottom:2px;'>રીત 1: લોપની રીત</b><br><br>
                            સમીકરણ 1: 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 4<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 10<br>
                            સમીકરણ 2: 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 2<br><br>
                            
                            <b style='color:#dc2626; font-size:15px;'>સ્ટેપ 1: y નો લોપ કરવા સમીકરણ 2 ને 2 વડે ગુણતાં</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1 માં +4y છે, તો સમીકરણ 2 માં -2y ને 2 વડે ગુણીએ તો -4y થઈ જાય અને લોપ થાય)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                2 &times; (2<i style='font-family:"Times New Roman",serif;'>x</i> - 2<i style='font-family:"Times New Roman",serif;'>y</i> = 2) &nbsp;&nbsp;&#10551;&nbsp;&nbsp; <b>4<i style='font-family:"Times New Roman",serif;'>x</i> - 4<i style='font-family:"Times New Roman",serif;'>y</i> = 4</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 3)
                            </div>
                            
                            <b style='color:#dc2626; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: સમીકરણ 1 અને 3 નો સરવાળો કરતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fecaca; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; 3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 4<i style='font-family:"Times New Roman",serif;'>y</i></b> = 10<br>
                                +&nbsp; 4<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 4<i style='font-family:"Times New Roman",serif;'>y</i></b> = 4<br>
                                --------------------<br>
                                &nbsp;&nbsp; 7<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 14<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(7 ગુણાકારમાંથી છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>x</i> = 14 / 7<br>
                                &nbsp;&nbsp; <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>
                            
                            <b style='color:#dc2626; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: x ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fef2f2; padding:10px; border-radius:5px;'>
                                3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                3<b style='color:#1d4ed8;'>(2)</b> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                6 + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+6) સામે જતાં માઇનસ થશે</i></span><br>
                                4<i style='font-family:"Times New Roman",serif;'>y</i> = 10 <b style='color:#dc2626;'>- 6</b><br>
                                4<i style='font-family:"Times New Roman",serif;'>y</i> = 4<br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 4 / 4<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:18px; border-bottom:2px solid #c2410c; padding-bottom:2px;'>રીત 2: આદેશની રીત</b><br><br>
                            
                            <b style='color:#ea580c; font-size:15px;'>સ્ટેપ 1: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં (આંકડા નાના છે)</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = 2<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-2y) સામે જતાં પ્લસ (+2y) થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> = 2 <b style='color:#16a34a;'>+ 2<i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>આખા સમીકરણને 2 વડે ભાગી શકાય છે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 1 + <i style='font-family:"Times New Roman",serif;'>y</i></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                            
                            <b style='color:#ea580c; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fed7aa; padding:10px; border-radius:5px;'>
                                3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                3<b style='color:#1d4ed8;'>(1 + <i style='font-family:"Times New Roman",serif;'>y</i>)</b> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>3 નો અંદર ગુણાકાર: 3&times;1=3 અને 3&times;y=3y</i></span><br>
                                <b style='color:#dc2626;'>3</b> + 3<i style='font-family:"Times New Roman",serif;'>y</i> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                <b style='color:#dc2626;'>3</b> + 7<i style='font-family:"Times New Roman",serif;'>y</i> = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3) સામે જતાં માઇનસ થશે</i></span><br>
                                7<i style='font-family:"Times New Roman",serif;'>y</i> = 10 <b style='color:#dc2626;'>- 3</b><br>
                                7<i style='font-family:"Times New Roman",serif;'>y</i> = 7<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 1</b>
                            </div>

                            <b style='color:#ea580c; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 3 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 1 + <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 1 + <b style='color:#be123c;'>1</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>
                        </div>

                        <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #f59e0b;'>
                            <b style='color:#b45309; font-size:16px;'>અંતિમ નિષ્કર્ષ:</b> તમે જોઈ શકો છો કે <b>બંને રીતથી જવાબ હંમેશા સરખો જ આવે છે!</b> <br>
                            ઉકેલ: <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 2</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 1</b> છે.
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "સ્વા. 3.3 પ્રશ્ન 1(iii): 3x - 5y - 4 = 0 અને 9x = 2y + 7 નો ઉકેલ લોપ અને આદેશની રીતે શોધો.", 
                    question_desc: "આડાઅવળા સમીકરણ અને અપૂર્ણાંક જવાબ વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 5<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> - 4 = 0 &nbsp;&nbsp;અને&nbsp;&nbsp; 9<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> = 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> + 7</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 પાયાનું સ્ટેપ (સમીકરણો ગોઠવવા):</b><br>
                            સૌથી પહેલા બંને સમીકરણોને <b>ax + by = c</b> ના સ્વરૂપમાં ગોઠવીએ:<br>
                            સમીકરણ 1: 3<i style='font-family:"Times New Roman",serif;'>x</i> - 5<i style='font-family:"Times New Roman",serif;'>y</i> <b style='color:#dc2626;'>- 4</b> = 0 &nbsp;&#10551;&nbsp; <b style='color:#15803d;'>3<i style='font-family:"Times New Roman",serif;'>x</i> - 5<i style='font-family:"Times New Roman",serif;'>y</i> = 4</b><br>
                            સમીકરણ 2: 9<i style='font-family:"Times New Roman",serif;'>x</i> = <b style='color:#dc2626;'>2<i style='font-family:"Times New Roman",serif;'>y</i></b> + 7 &nbsp;&#10551;&nbsp; <b style='color:#15803d;'>9<i style='font-family:"Times New Roman",serif;'>x</i> - 2<i style='font-family:"Times New Roman",serif;'>y</i> = 7</b>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:18px; border-bottom:2px solid #b91c1c; padding-bottom:2px;'>રીત 1: લોપની રીત</b><br><br>
                            
                            <b style='color:#dc2626; font-size:15px;'>સ્ટેપ 1: x નો લોપ કરવા સમીકરણ 1 ને 3 વડે ગુણતાં</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2 માં 9x છે, તો સમીકરણ 1 ના 3x ને 3 વડે ગુણીએ તો તે પણ 9x થઈ જાય)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                3 &times; (3<i style='font-family:"Times New Roman",serif;'>x</i> - 5<i style='font-family:"Times New Roman",serif;'>y</i> = 4) &nbsp;&nbsp;&#10551;&nbsp;&nbsp; <b>9<i style='font-family:"Times New Roman",serif;'>x</i> - 15<i style='font-family:"Times New Roman",serif;'>y</i> = 12</b> &nbsp;&nbsp;&nbsp; ... (નવું સમીકરણ 3)
                            </div>
                            
                            <b style='color:#dc2626; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: સમીકરણ 3 માંથી સમીકરણ 2 ની બાદબાકી કરતાં (નિશાની બદલવી)</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fecaca; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; 9<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 15<i style='font-family:"Times New Roman",serif;'>y</i></b> = 12<br>
                                -&nbsp; 9<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>-&nbsp; 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = 7 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(બધાની નિશાની બદલવી: -9x, +2y, -7)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 &nbsp;&nbsp;<b style='color:#dc2626;'>- 13<i style='font-family:"Times New Roman",serif;'>y</i></b> = 5<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-13 ગુણાકારમાંથી છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>-5</span><span>13</span></span></b>
                            </div>
                            
                            <b style='color:#dc2626; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fef2f2; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> - 5<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 4<br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> - 5 <span style='font-size:22px;'>[</span> <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>-5</span><span>13</span></span></b> <span style='font-size:22px;'>]</span> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશનો ગુણાકાર: -5 &times; -5 = +25</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25</span><span>13</span></span> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+25/13) સામે જતાં માઇનસ થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = 4 <b style='color:#dc2626;'>- <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>25</span><span>13</span></span></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>લ.સા.અ. લેતાં (13 &times; 4 = 52)</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>52 - 25</span><span>13</span></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>27</span><span>13</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>ગુણાકારના 3 સામે છેદમાં જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>27</span><span>13 &times; 3</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>9</span><span>13</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:18px; border-bottom:2px solid #1e3a8a; padding-bottom:2px;'>રીત 2: આદેશની રીત</b><br><br>
                            
                            <b style='color:#2563eb; font-size:15px;'>સ્ટેપ 1: સમીકરણ 2 માંથી x ને કર્તા બનાવતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                9<i style='font-family:"Times New Roman",serif;'>x</i> = 2<i style='font-family:"Times New Roman",serif;'>y</i> + 7<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(9) છેદમાં જશે</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2<i style='font-family:"Times New Roman",serif;'>y</i> + 7</span><span>9</span></span></b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                            
                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: આ x ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dbeafe; padding:10px; border-radius:5px;'>
                                3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - 5<i style='font-family:"Times New Roman",serif;'>y</i> = 4<br>
                                3 <span style='font-size:22px;'>[</span> <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2<i style='font-family:"Times New Roman",serif;'>y</i> + 7</span><span>9</span></span></b> <span style='font-size:22px;'>]</span> - 5<i style='font-family:"Times New Roman",serif;'>y</i> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશના 3 અને છેદના 9 ના છેદ ઉડતા છેદમાં 3 વધશે</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<i style='font-family:"Times New Roman",serif;'>y</i> + 7</span><span>3</span></span> - 5<i style='font-family:"Times New Roman",serif;'>y</i> = 4<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>છેદના 3 દૂર કરવા આખા સમીકરણને 3 વડે ગુણતાં</i></span><br>
                                (2<i style='font-family:"Times New Roman",serif;'>y</i> + 7) - 15<i style='font-family:"Times New Roman",serif;'>y</i> = 12<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+2y - 15y = -13y)</i></span><br>
                                -13<i style='font-family:"Times New Roman",serif;'>y</i> + 7 = 12<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+7) સામે જતાં માઇનસ થશે</i></span><br>
                                -13<i style='font-family:"Times New Roman",serif;'>y</i> = 12 <b style='color:#dc2626;'>- 7</b><br>
                                -13<i style='font-family:"Times New Roman",serif;'>y</i> = 5<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>-5</span><span>13</span></span></b>
                            </div>

                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 3 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#bfdbfe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> + 7</span><span>9</span></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<span style='font-size:18px;'>[</span><b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>-5</span><span>13</span></span></b><span style='font-size:18px;'>]</span> + 7</span><span>9</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશમાં લ.સા.અ. (13 &times; 7 = 91)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-10 + 91</span><span>13</span></span></span><span>9</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અંશનો છેદ છેદમાં જશે (13 &times; 9)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>81</span><span>13 &times; 9</span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>9</span><span>13</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #f59e0b;'>
                            <b style='color:#b45309; font-size:16px;'>અંતિમ નિષ્કર્ષ:</b> <b>બંને રીતથી જવાબ હંમેશા સરખો જ આવે છે!</b> <br>
                            ઉકેલ: <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 9/13</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -5/13</b> છે.
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "સ્વા. 3.3 પ્રશ્ન 1(iv): નીચેના સમીકરણયુગ્મનો ઉકેલ લોપ અને આદેશની રીતે શોધો: x/2 + 2y/3 = -1 અને x - y/3 = 3", 
                    question_desc: "અપૂર્ણાંક અને લ.સા.અ. ની ટ્રીક વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i></span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span><span>3</span></span> = -1 &nbsp;&nbsp;અને&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span><span>3</span></span> = 3</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 પાયાનું સ્ટેપ (સમીકરણો સાદા બનાવવા):</b><br>
                            <b>સમીકરણ 1:</b> છેદમાં 2 અને 3 છે, તો લ.સા.અ. 6 થાય. સમીકરણને 6 વડે ગુણતાં:<br>
                            6 &times; (<i style='font-family:"Times New Roman",serif;'>x</i>/2) + 6 &times; (2<i style='font-family:"Times New Roman",serif;'>y</i>/3) = 6 &times; (-1) &nbsp;&#10551;&nbsp; <b style='color:#15803d;'>3<i style='font-family:"Times New Roman",serif;'>x</i> + 4<i style='font-family:"Times New Roman",serif;'>y</i> = -6</b> &nbsp;... (નવું સમીકરણ 1)<br><br>
                            <b>સમીકરણ 2:</b> છેદમાં 3 છે. સમીકરણને 3 વડે ગુણતાં:<br>
                            3 &times; (<i style='font-family:"Times New Roman",serif;'>x</i>) - 3 &times; (<i style='font-family:"Times New Roman",serif;'>y</i>/3) = 3 &times; (3) &nbsp;&#10551;&nbsp; <b style='color:#15803d;'>3<i style='font-family:"Times New Roman",serif;'>x</i> - <i style='font-family:"Times New Roman",serif;'>y</i> = 9</b> &nbsp;... (નવું સમીકરણ 2)
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:18px; border-bottom:2px solid #b91c1c; padding-bottom:2px;'>રીત 1: લોપની રીત</b><br><br>
                            
                            <b style='color:#dc2626; font-size:15px;'>સ્ટેપ 1: સમીકરણોની બાદબાકી (નિશાની બદલવી)</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(અહીં બંને સમીકરણમાં 3x પહેલેથી જ સરખા છે, તો ગુણાકારની કોઈ જરૂર નથી. સીધી બાદબાકી કરીશું!)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fecaca; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; 3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 4<i style='font-family:"Times New Roman",serif;'>y</i></b> = -6<br>
                                -&nbsp; 3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+&nbsp; <i style='font-family:"Times New Roman",serif;'>y</i></b> = -9 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(નિશાનીઓ બદલી: -3x, +y, -9)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 &nbsp;&nbsp;<b style='color:#16a34a;'>+ 5<i style='font-family:"Times New Roman",serif;'>y</i></b> = -15<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(5 ગુણાકારમાંથી છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>y</i> = -15 / 5<br>
                                &nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = -3</b>
                            </div>
                            
                            <b style='color:#dc2626; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: y ની કિંમત સમીકરણ 2 માં મૂકતાં (તે સહેલું છે)</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fef2f2; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> - <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 9<br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> - <b style='color:#be123c;'>(-3)</b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>માઇનસ માઇનસ પ્લસ (+3) થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> + 3 = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3) સામે જતાં માઇનસ થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = 9 <b style='color:#dc2626;'>- 3</b><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> = 6<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 6 / 3<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:18px; border-bottom:2px solid #1e3a8a; padding-bottom:2px;'>રીત 2: આદેશની રીત</b><br><br>
                            
                            <b style='color:#2563eb; font-size:15px;'>સ્ટેપ 1: સમીકરણ 2 માંથી y ને કર્તા બનાવતાં (y એકલો છે)</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>y</i></b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-y) સામે જતાં પ્લસ (+y) થશે અને 9 આ બાજુ આવતાં માઇનસ થશે</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 9</b> = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>y</i></b><br>
                                <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 3<i style='font-family:"Times New Roman",serif;'>x</i> - 9</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 3)
                            </div>
                            
                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 2: આ y ની કિંમત સમીકરણ 1 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dbeafe; padding:10px; border-radius:5px;'>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> + 4<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = -6<br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> + 4<b style='color:#be123c;'>(3<i style='font-family:"Times New Roman",serif;'>x</i> - 9)</b> = -6<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>4 નો કૌંસમાં ગુણાકાર: 4 &times; 3x = 12x અને 4 &times; -9 = -36</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#16a34a;'>+ 12<i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 36</b> = -6<br>
                                15<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#dc2626;'>- 36</b> = -6<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-36) સામે જતાં પ્લસ (+36) થશે</i></span><br>
                                15<i style='font-family:"Times New Roman",serif;'>x</i> = -6 <b style='color:#16a34a;'>+ 36</b><br>
                                15<i style='font-family:"Times New Roman",serif;'>x</i> = 30<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 30 / 15<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 2</b>
                            </div>

                            <b style='color:#2563eb; font-size:15px; display:block; margin-top:10px;'>સ્ટેપ 3: x ની કિંમત સમીકરણ 3 માં મૂકતાં</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#bfdbfe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 3<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - 9<br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 3<b style='color:#1d4ed8;'>(2)</b> - 9<br>
                                <i style='font-family:"Times New Roman",serif;'>y</i> = 6 - 9<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = -3</b>
                            </div>
                        </div>

                        <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #f59e0b;'>
                            <b style='color:#b45309; font-size:16px;'>અંતિમ નિષ્કર્ષ:</b> <b>બંને રીતથી જવાબ હંમેશા સરખો જ આવે છે!</b> <br>
                            ઉકેલ: <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 2</b> અને <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -3</b> છે.
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "સ્વા. 3.3 પ્રશ્ન 2(i): એક અપૂર્ણાંકના અંશમાં 1 ઉમેરતાં અને છેદમાંથી 1 બાદ કરતાં...", 
                    question_desc: "અપૂર્ણાંક કિંમત 1 બને છે. માત્ર છેદમાં 1 ઉમેરતાં 1/2 બને, તો અપૂર્ણાંક શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક અપૂર્ણાંકના અંશમાં 1 ઉમેરતાં અને છેદમાંથી 1 બાદ કરતાં અપૂર્ણાંક કિંમત 1 બને છે. જો માત્ર છેદમાં 1 ઉમેરતાં અપૂર્ણાંકનું અતિસંક્ષિપ્ત રૂપ 1/2 બને, તો તે અપૂર્ણાંક શોધો. (લોપની રીતે ઉકેલો)</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમીકરણ કેવી રીતે બનશે?</b><br>
                            ધારો કે માંગેલ અપૂર્ણાંકનો અંશ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને છેદ = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            તેથી મૂળ અપૂર્ણાંક = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i></span><span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i></span></span> થાય.
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <b style='color:#14532d;'>શરત 1: અંશમાં 1 ઉમેરતાં (+1) અને છેદમાંથી 1 બાદ કરતાં (-1), જવાબ 1 મળે.</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1</span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 1</span></span> = 1<br>
                                <span style='color:#64748b; font-size:14px;'><i>(છેદનું પદ (y-1) સામે જતાં ગુણાકારમાં જશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1 = 1(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 1)<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1 = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 1<br>
                                <span style='color:#64748b; font-size:14px;'><i>(+y આ બાજુ આવતાં -y થશે, અને +1 સામે જતાં -1 થશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -1 - 1<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -2</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>શરત 2: માત્ર છેદમાં જ 1 ઉમેરતાં (+1), જવાબ 1/2 મળે. (અંશમાં કશું નથી કરવાનું)</b><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 1</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span><br>
                                <span style='color:#64748b; font-size:14px;'><i>(ચોકડી ગુણાકાર: 2 નો ગુણાકાર x સાથે અને (y+1) નો ગુણાકાર 1 સાથે)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 1(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 1)<br>
                                2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 1<br>
                                <span style='color:#64748b; font-size:14px;'><i>(+y આ બાજુ આવતાં -y થશે)</i></span><br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'>2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 1</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: લોપની રીત (સીધી બાદબાકી)</b><br>
                            અહીં બંને સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> ની નિશાની સમાન (-y) છે, તેથી કોઈપણ સમીકરણને ગુણવાની જરૂર નથી. સીધી <b>બાદબાકી (નિશાની બદલીને)</b> કરીશું.
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; 2<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- &nbsp;<i style='font-family:"Times New Roman",serif;'>y</i></b> = 1 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2 મોટું હોવાથી ઉપર રાખ્યું)</i></span><br>
                                -&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+&nbsp; <i style='font-family:"Times New Roman",serif;'>y</i></b> = +2 &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1 ની નિશાની બદલી: -x, +y, +2)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; &nbsp;<b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &nbsp;&nbsp;0 = 3<br>
                                &nbsp;&nbsp; &nbsp;<b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: x ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> - <i style='font-family:"Times New Roman",serif;'>y</i> = -2<br>
                                <b style='color:#1d4ed8;'>(3)</b> - <i style='font-family:"Times New Roman",serif;'>y</i> = -2<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3) સામે જતાં માઇનસ (-3) થશે</i></span><br>
                                -<i style='font-family:"Times New Roman",serif;'>y</i> = -2 <b style='color:#dc2626;'>- 3</b><br>
                                -<i style='font-family:"Times New Roman",serif;'>y</i> = -5<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(બંને બાજુથી માઇનસ દૂર કરતા)</i></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 5</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> અંશ x=3 અને છેદ y=5 છે. તેથી <b>માંગેલ અપૂર્ણાંક <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>5</span></span></b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.3 પ્રશ્ન 2(ii): 5 વર્ષ પહેલાં નૂરીની ઉંમર સોનુની ઉંમરથી ત્રણ ગણી હતી...", 
                    question_desc: "10 વર્ષ પછી નૂરીની ઉંમર સોનુની ઉંમરથી બે ગણી થશે. તેમની વર્તમાન ઉંમર શોધો. (ઉંમરનો મોસ્ટ IMP દાખલો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 5 વર્ષ પહેલાં નૂરીની ઉંમર સોનુની ઉંમરથી ત્રણ ગણી હતી. 10 વર્ષ પછી નૂરીની ઉંમર સોનુની ઉંમરથી બે ગણી થશે. નૂરી અને સોનુની વર્તમાન ઉંમર કેટલી હશે?</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમીકરણ કેવી રીતે બનશે?</b><br>
                            ધારો કે નૂરીની હાલની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> વર્ષ અને સોનુની હાલની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> વર્ષ છે.
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <b style='color:#14532d;'>શરત 1: 5 વર્ષ પહેલાં (બંનેમાંથી 5 બાદ કરવા પડે)</b><br>
                                નૂરીની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5 &nbsp; અને &nbsp; સોનુની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5<br>
                                નૂરીની ઉંમર = 3 &times; સોનુની ઉંમર<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5 = 3(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 5)<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 5 = 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 15<br>
                                <span style='color:#64748b; font-size:14px;'><i>(3y આ બાજુ લાવતાં -3y અને -5 સામે જતાં +5 થશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -15 + 5<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 3<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = -10</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>શરત 2: 10 વર્ષ પછી (બંનેમાં 10 ઉમેરવા પડે)</b><br>
                                નૂરીની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 10 &nbsp; અને &nbsp; સોનુની ઉંમર = <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 10<br>
                                નૂરીની ઉંમર = 2 &times; સોનુની ઉંમર<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 10 = 2(<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 10)<br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 10 = 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 20<br>
                                <span style='color:#64748b; font-size:14px;'><i>(2y આ બાજુ લાવતાં -2y અને +10 સામે જતાં -10 થશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 20 - 10<br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 10</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: લોપની રીત (સીધી બાદબાકી)</b><br>
                            અહીં બંને સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> પહેલેથી જ સરખો છે, તેથી કોઈ ગુણાકારની જરૂર નથી. સીધી <b>બાદબાકી (નિશાની બદલીને)</b> કરીશું.
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = 10 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2)</i></span><br>
                                -&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 3<i style='font-family:"Times New Roman",serif;'>y</i></b> = +10 &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1 ની નિશાની બદલી: -x, +3y, +10)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 <b style='color:#16a34a;'>+&nbsp; <i style='font-family:"Times New Roman",serif;'>y</i></b> = 20<br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 20</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: y ની કિંમત સમીકરણ 2 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 2<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 10<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 2<b style='color:#be123c;'>(20)</b> = 10<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 40 = 10<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-40) સામે જતાં પ્લસ (+40) થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 10 <b style='color:#16a34a;'>+ 40</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 50</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> નૂરીની વર્તમાન ઉંમર <b style='color:#1d4ed8;'>50 વર્ષ</b> છે અને સોનુની વર્તમાન ઉંમર <b style='color:#be123c;'>20 વર્ષ</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
        
                { 
                    question: "🌟 સ્વા. 3.3 પ્રશ્ન 2(iii): બે અંકોની સંખ્યાના અંકોનો સરવાળો 9 છે. વળી સંખ્યાના નવ ગણા કરતાં...", 
                    question_desc: "મળતી સંખ્યા એ અંકોની અદલાબદલી કરતાં મળતી સંખ્યા કરતાં બે ગણી છે. તો તે સંખ્યા શોધો. (સુપર IMP)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે અંકોની સંખ્યાના અંકોનો સરવાળો 9 છે. વળી સંખ્યાના નવ ગણા કરતાં મળતી સંખ્યા એ અંકોની અદલાબદલી કરતાં મળતી સંખ્યા કરતાં બે ગણી છે. તો તે સંખ્યા શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ચાવી (સ્થાન કિંમત):</b><br>
                            બે અંકોની સંખ્યામાં એક <b>એકમનો અંક</b> અને બીજો <b>દશકનો અંક</b> હોય છે.<br>
                            કોઈપણ સંખ્યા = (10 &times; દશકનો અંક) + એકમનો અંક.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે એકમનો અંક = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> અને દશકનો અંક = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            તેથી, <b>મૂળ સંખ્યા = 10<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i></b><br>
                            અંકોની અદલાબદલી કરતા બનતી <b>નવી સંખ્યા = 10<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c;'>y</i></b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <b style='color:#14532d;'>શરત 1: અંકોનો સરવાળો 9 છે.</b><br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 9</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>શરત 2: મૂળ સંખ્યાના 9 ગણા = નવી સંખ્યાના 2 ગણા</b><br>
                                9 &times; (મૂળ સંખ્યા) = 2 &times; (નવી સંખ્યા)<br>
                                9(10<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) = 2(10<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i>)<br>
                                90<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> + 9<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> = 20<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બધા પદો ડાબી બાજુ લાવતા (નિશાની બદલાશે)</i></span><br>
                                9<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 20<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 90<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> - 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 0<br>
                                -11<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 88<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>આખા સમીકરણને -11 વડે ભાગતાં</i></span><br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 8<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 0</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 2: લોપની રીત (સીધી બાદબાકી)</b><br>
                            અહીં બંને સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> સમાન છે, તેથી કોઈ ગુણાકારની જરૂર નથી.
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ &nbsp;<i style='font-family:"Times New Roman",serif;'>y</i></b> = 9 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1)</i></span><br>
                                -&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 8<i style='font-family:"Times New Roman",serif;'>y</i></b> = 0 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2 ની નિશાની બદલી: -x, +8y, 0)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 <b style='color:#16a34a;'>+ 9<i style='font-family:"Times New Roman",serif;'>y</i></b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(9 છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i style='font-family:"Times New Roman",serif;'>y</i> = 9 / 9<br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 1</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 9<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + <b style='color:#be123c;'>(1)</b> = 9<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+1) સામે જતાં માઇનસ થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 9 <b style='color:#dc2626;'>- 1</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 8</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> એકમનો અંક x = 8 અને દશકનો અંક y = 1 છે.<br>
                                તેથી માંગેલ મૂળ સંખ્યા = 10<i style='font-family:"Times New Roman",serif;'>y</i> + <i style='font-family:"Times New Roman",serif;'>x</i> = 10(1) + 8 = <b>18</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 3.3 પ્રશ્ન 2(iv): મીના ₹2000 ઉપાડવા બેંકમાં ગઈ હતી. તેણે કેશિયરને કહ્યું હતું કે...", 
                    question_desc: "મારે માત્ર ₹50 અને ₹100 ની નોટો જ જોઈએ છે. મીનાને કુલ 25 નોટો મળી હતી, તો કેટલી નોટો કઈ હશે?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> મીના ₹ 2000 ઉપાડવા બેંકમાં ગઈ હતી. તેણે કેશિયરને કહ્યું હતું કે મને માત્ર ₹ 50 અને ₹ 100 ની જ નોટો જોઈએ છે. મીનાને કુલ 25 નોટો મળી હતી, તો તેણે ₹ 50 અને ₹ 100 ની પ્રત્યેકની કેટલી નોટો મેળવી હશે?</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે ₹ 50 ની નોટોની સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> છે અને ₹ 100 ની નોટોની સંખ્યા = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <b style='color:#14532d;'>શરત 1: કુલ 25 નોટો મળી છે.</b><br>
                                (50 ની નોટો + 100 ની નોટો = 25)<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 25</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>શરત 2: કુલ રકમ ₹ 2000 છે.</b><br>
                                (50 ની નોટોની કિંમત + 100 ની નોટોની કિંમત = 2000)<br>
                                50<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 100<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 2000<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>આખા સમીકરણને 50 વડે ભાગીને નાનું બનાવતાં</i></span><br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 40</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 2: લોપની રીત (સીધી બાદબાકી)</b><br>
                            અહીં બંને સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> સમાન છે, તેથી કોઈ ગુણાકારની જરૂર નથી. સમીકરણ 2 માંથી 1 બાદ કરીએ (જેથી જવાબ પ્લસમાં આવે).
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = 40 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2 મોટું છે)</i></span><br>
                                -&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- &nbsp;<i style='font-family:"Times New Roman",serif;'>y</i></b> = -25 &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1 ની નિશાની બદલી: -x, -y, -25)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 <b style='color:#16a34a;'>+ &nbsp;<i style='font-family:"Times New Roman",serif;'>y</i></b> = 15<br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 15</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 1 માં મૂકતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 25<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + <b style='color:#be123c;'>(15)</b> = 25<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+15) સામે જતાં માઇનસ થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 25 <b style='color:#dc2626;'>- 15</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 10</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> મીનાને <b style='color:#1d4ed8;'>₹ 50 ની 10 નોટો</b> અને <b style='color:#be123c;'>₹ 100 ની 15 નોટો</b> મળી હશે.<br>
                                <span style='font-size:14px; color:#64748b;'>(તાળો: 10 + 15 = 25 નોટો થઈ ગઈ. રકમ: 50&times;10 = 500 અને 100&times;15 = 1500. 500+1500=2000 રૂપિયા પૂરા!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "🌟 સ્વા. 3.3 પ્રશ્ન 2(v): એક પ્રતિષ્ઠિત પુસ્તકાલય પ્રથમ 3 દિવસનું એક પુસ્તકનું નિશ્ચિત ભાડું લે છે...", 
                    question_desc: "અને પછીના પ્રત્યેક દિવસ દીઠ અતિરિક્ત ભાડું લે છે. સરિતા 7 દિવસ માટે ₹27 અને સૂઝી 5 દિવસ માટે ₹21 ચૂકવે છે.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક પ્રતિષ્ઠિત પુસ્તકાલય પ્રથમ 3 દિવસનું એક પુસ્તકનું નિશ્ચિત ભાડું લે છે અને પછીના પ્રત્યેક દિવસ દીઠ અતિરિક્ત (વધારાનું) ભાડું લે છે. સરિતા 7 દિવસ પુસ્તક રાખવાના ₹ 27 ચૂકવે છે. સૂઝી 5 દિવસ પુસ્તક રાખવાના ₹ 21 ચૂકવે છે. તો નિશ્ચિત ભાડું અને પ્રત્યેક વધારાના દિવસનું ભાડું શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2020 અને મે 2021 માં પૂછાયેલ મોસ્ટ IMP દાખલો</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમીકરણની માસ્ટર ટ્રીક:</b><br>
                            અહીં <b>પ્રથમ 3 દિવસનું ભાડું ફિક્સ (નિશ્ચિત)</b> છે. <br>
                            એટલે જો કોઈ 7 દિવસ પુસ્તક રાખે, તો <b>(3 ફિક્સ દિવસ + 4 વધારાના દિવસ)</b> ગણાય!<br>
                            જો કોઈ 5 દિવસ રાખે, તો <b>(3 ફિક્સ દિવસ + 2 વધારાના દિવસ)</b> ગણાય!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            ધારો કે પ્રથમ 3 દિવસનું નિશ્ચિત ભાડું = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> છે.<br>
                            અને 3 દિવસ પછીના પ્રત્યેક વધારાના દિવસનું ભાડું = ₹ <i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>y</i> છે.<br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <b style='color:#14532d;'>શરત 1: સરિતા 7 દિવસ માટે ₹ 27 ચૂકવે છે.</b><br>
                                (3 દિવસનું ફિક્સ ભાડું) + (બાકીના 4 દિવસનું ભાડું) = 27<br>
                                <b style='color:#15803d; background-color:#dcfce7; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 4<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 27</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 1)
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>શરત 2: સૂઝી 5 દિવસ માટે ₹ 21 ચૂકવે છે.</b><br>
                                (3 દિવસનું ફિક્સ ભાડું) + (બાકીના 2 દિવસનું ભાડું) = 21<br>
                                <b style='color:#1d4ed8; background-color:#dbeafe; padding:2px 8px; border-radius:4px;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 2<i style='font-family:"Times New Roman",serif; font-size:18px;'>y</i> = 21</b> &nbsp;&nbsp;&nbsp; ... (સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 2: લોપની રીત (સીધી બાદબાકી)</b><br>
                            બંને સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> સમાન છે, એટલે કોઈ ગુણાકારની જરૂર નથી.
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#16a34a;'>+ 4<i style='font-family:"Times New Roman",serif;'>y</i></b> = 27 &nbsp;&nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 1 મોટું છે)</i></span><br>
                                -&nbsp; &nbsp;<b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> <b style='color:#dc2626;'>- 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = -21 &nbsp;&nbsp;<span style='color:#64748b; font-size:14px;'><i>(સમીકરણ 2 ની નિશાની બદલી: -x, -2y, -21)</i></span><br>
                                --------------------<br>
                                &nbsp;&nbsp; 0 <b style='color:#16a34a;'>+ 2<i style='font-family:"Times New Roman",serif;'>y</i></b> = 6<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2 ભાગાકારમાં જશે)</i></span><br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i style='font-family:"Times New Roman",serif;'>y</i> = 6 / 2<br>
                                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i> = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: y ની કિંમત સમીકરણ 2 માં મૂકતાં (તે સહેલું છે)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + 2<b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>y</i></b> = 21<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + 2<b style='color:#be123c;'>(3)</b> = 21<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + 6 = 21<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+6) સામે જતાં માઇનસ થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = 21 <b style='color:#dc2626;'>- 6</b><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 15</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:15px; border-radius:8px; margin-top:15px; border-left:6px solid #16a34a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                                <b style='color:#15803d; font-size:18px;'>🏆 અંતિમ જવાબ:</b><br>
                                પુસ્તકાલયનું <b>પ્રથમ 3 દિવસનું નિશ્ચિત ભાડું <span style='color:#1d4ed8;'>₹ 15</span></b> છે.<br>
                                અને 3 દિવસ પછીના <b>પ્રત્યેક વધારાના દિવસનું ભાડું <span style='color:#be123c;'>₹ 3</span></b> છે.<br>
                                <span style='font-size:14px; color:#64748b;'>(તાળો: સરિતાના 7 દિવસ = 15 + (4 &times; 3) = 15 + 12 = 27 રૂપિયા કમ્પ્લીટ!)</span>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 4: દ્વિઘાત સમીકરણ
        // ------------------------------------
        "4": {
            "chapterName": "પ્રકરણ 4 (સ્વાધ્યાય 4.1 - ભાગ 1)",
            "chapterTitle": "દ્વિઘાત સમીકરણની ઓળખ (પ્રશ્ન 1 ના દાખલા 1 અને 2)",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: દ્વિઘાત સમીકરણ કોને કહેવાય? (પાયાની સમજૂતી)",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>પ્રકરણ 4 શરૂ કરતાં પહેલાં આટલું મગજમાં ફિટ કરી લો:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#be123c;'>દ્વિઘાત એટલે શું?</b> જે સમીકરણમાં ચલ (જેમ કે x) ની <b>સૌથી મોટી ઘાત 2 હોય</b>, તેને દ્વિઘાત સમીકરણ કહેવાય. જો મોટી ઘાત 3 હોય કે માત્ર 1 જ હોય, તો તે દ્વિઘાત નથી!</li>
                                <li><b style='color:#1d4ed8;'>પ્રમાણિત રૂપ:</b> <b>a<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + b<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + c = 0</b> (અહીં 'a' ક્યારેય ઝીરો ન હોવો જોઈએ, બાકી b કે c ઝીરો હોય તો ચાલે).</li>
                                <li><b style='color:#16a34a;'>અગત્યના 2 સૂત્રો (જે વારંવાર આવશે):</b><br>
                                1. (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup><br>
                                2. (a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup></li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 1(i): ચકાસો કે નીચે આપેલ સમીકરણ દ્વિઘાત સમીકરણ છે કે નહિ: (x + 1)² = 2(x - 3)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1)<sup>2</sup> = 2(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3)</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: કૌંસ છોડીને સાદું રૂપ આપતાં</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>ડાબી બાજુ (a+b)<sup>2</sup> નું સૂત્ર વાપરીશું અને જમણી બાજુ 2 નો અંદર ગુણાકાર કરીશું.</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>2</sup> + 2(<i style='font-family:"Times New Roman",serif;'>x</i>)(1) + (1)<sup>2</sup> = 2(<i style='font-family:"Times New Roman",serif;'>x</i>) - 2(3)<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i> + 1</b> = <b style='color:#be123c;'>2<i style='font-family:"Times New Roman",serif;'>x</i> - 6</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ ભેગા કરતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુના (+2x) આ બાજુ આવતાં (-2x) થશે અને (-6) આ બાજુ આવતાં (+6) થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i> + 1 <b style='color:#dc2626;'>- 2<i style='font-family:"Times New Roman",serif;'>x</i> + 6</b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+2x અને -2x ઉડી જશે. અને 1 + 6 = 7 થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 7 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં મળેલા સમીકરણ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + 7 = 0 માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની <b>મહત્તમ (સૌથી મોટી) ઘાત 2 છે</b>. <br>
                            આને પ્રમાણિત રૂપ મુજબ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + 0<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 7 = 0 લખી શકાય.
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> હા, આપેલ સમીકરણ <b>દ્વિઘાત સમીકરણ છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 1(ii): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: x² - 2x = (-2)(3 - x)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> = (-2)(3 - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i>)</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: જમણી બાજુ કૌંસનો ગુણાકાર કરતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2<i style='font-family:"Times New Roman",serif;'>x</i> = <b style='color:#dc2626;'>(-2)</b>(3) - <b style='color:#dc2626;'>(-2)</b>(<i style='font-family:"Times New Roman",serif;'>x</i>)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ ગુણ્યા માઇનસ પ્લસ થાય: -2 &times; -x = +2x)</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2<i style='font-family:"Times New Roman",serif;'>x</i></b> = <b style='color:#be123c;'>-6 + 2<i style='font-family:"Times New Roman",serif;'>x</i></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુના (-6) આ બાજુ આવતાં (+6) થશે અને (+2x) આ બાજુ આવતાં (-2x) થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2<i style='font-family:"Times New Roman",serif;'>x</i> <b style='color:#16a34a;'>+ 6 - 2<i style='font-family:"Times New Roman",serif;'>x</i></b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-2x અને -2x ભેગા મળીને -4x થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i> + 6 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં મળેલા સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની સૌથી મોટી ઘાત 2 છે. <br>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> હા, આપેલ સમીકરણ <b>દ્વિઘાત સમીકરણ છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 1(iii): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: (x - 2)(x + 1) = (x - 1)(x + 3)", 
                    question_desc: "બે કૌંસના ગુણાકાર વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2)(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1) = (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 1)(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3)</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 કૌંસ છોડવાની ટ્રીક:</b><br>
                            પહેલા કૌંસનું પહેલું પદ લેવાનું અને આખા બીજા કૌંસ સાથે ગુણાકાર કરવાનો. પછી પહેલા કૌંસનું બીજું પદ (નિશાની સાથે) લેવાનું અને આખા બીજા કૌંસ સાથે ગુણાકાર કરવાનો.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બંને બાજુ કૌંસનો ગુણાકાર કરતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> + 1) <b style='color:#dc2626;'>- 2</b>(<i style='font-family:"Times New Roman",serif;'>x</i> + 1) = <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> + 3) <b style='color:#dc2626;'>- 1</b>(<i style='font-family:"Times New Roman",serif;'>x</i> + 3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કૌંસની અંદર ગુણાકાર કરતા)</i></span><br>
                                (<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 1<i style='font-family:"Times New Roman",serif;'>x</i>) - (2<i style='font-family:"Times New Roman",serif;'>x</i> + 2) = (<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif;'>x</i>) - (1<i style='font-family:"Times New Roman",serif;'>x</i> + 3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(વચ્ચેના સજાતીય પદોની બાદબાકી: +1x - 2x = -1x અને +3x - 1x = +2x)</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <span style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i></span> - 2</b> = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <span style='color:#16a34a;'>+ 2<i style='font-family:"Times New Roman",serif;'>x</i></span> - 3</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુથી ડાબી બાજુ આવતા બધાની નિશાની બદલાઈ જશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif;'>x</i> - 2 <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2<i style='font-family:"Times New Roman",serif;'>x</i> + 3</b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અહીં +x<sup>2</sup> અને -x<sup>2</sup> ઉડી જશે (ઝીરો થઈ જશે)</i></span><br>
                                - <i style='font-family:"Times New Roman",serif;'>x</i> - 2<i style='font-family:"Times New Roman",serif;'>x</i> - 2 + 3 = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'>- 3<i style='font-family:"Times New Roman",serif;'>x</i> + 1 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં સાદું રૂપ આપ્યા પછી મળેલ સમીકરણ <b>- 3<i style='font-family:"Times New Roman",serif;'>x</i> + 1 = 0</b> માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની સૌથી મોટી ઘાત માત્ર 1 જ છે, (એટલે કે વર્ગવાળું <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> વાળું પદ ઉડી ગયું છે).
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> ના, આપેલ સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની 2 ઘાત ન હોવાથી તે <b>દ્વિઘાત સમીકરણ નથી</b>. (તે સુરેખ સમીકરણ છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 1(iv): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: (x - 3)(2x + 1) = x(x + 5)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3)(2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1) = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i>(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 5)</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: બંને બાજુ કૌંસનો ગુણાકાર કરતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(ડાબી બાજુ: x નો આખા કૌંસ સાથે અને -3 નો આખા કૌંસ સાથે ગુણાકાર)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(2<i style='font-family:"Times New Roman",serif;'>x</i> + 1) <b style='color:#dc2626;'>- 3</b>(2<i style='font-family:"Times New Roman",serif;'>x</i> + 1) = <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i>) + <i style='font-family:"Times New Roman",serif;'>x</i>(5)<br>
                                (2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i>) - (6<i style='font-family:"Times New Roman",serif;'>x</i> + 3) = <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 5<i style='font-family:"Times New Roman",serif;'>x</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(ડાબી બાજુ વચ્ચેના પદો: +1x - 6x = -5x થશે)</i></span><br>
                                <b style='color:#1d4ed8;'>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <span style='color:#dc2626;'>- 5<i style='font-family:"Times New Roman",serif;'>x</i></span> - 3</b> = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 5<i style='font-family:"Times New Roman",serif;'>x</i></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુના (+x<sup>2</sup>) અને (+5x) આ બાજુ આવતાં માઇનસ થશે</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 5<i style='font-family:"Times New Roman",serif;'>x</i> - 3 <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 5<i style='font-family:"Times New Roman",serif;'>x</i></b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2x<sup>2</sup> માંથી 1x<sup>2</sup> જાય તો 1x<sup>2</sup> વધે, અને -5x - 5x = -10x થાય)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 10<i style='font-family:"Times New Roman",serif;'>x</i> - 3 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            સાદું રૂપ આપ્યા પછી મળેલ સમીકરણ <b><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 10<i style='font-family:"Times New Roman",serif;'>x</i> - 3 = 0</b> માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની <b>સૌથી મોટી ઘાત 2 છે</b>. <br>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> હા, આપેલ સમીકરણ <b>દ્વિઘાત સમીકરણ છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 1(v): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: (2x - 1)(x - 3) = (x + 5)(x - 1)", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> (2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 1)(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 3) = (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 5)(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 1)</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બંને બાજુ કૌંસનો ગુણાકાર કરતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(પહેલા પદનો આખા કૌંસ સાથે અને બીજા પદનો આખા કૌંસ સાથે ગુણાકાર)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> - 3) <b style='color:#dc2626;'>- 1</b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 3) = <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> - 1) <b style='color:#16a34a;'>+ 5</b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 1)<br>
                                (2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 6<i style='font-family:"Times New Roman",serif;'>x</i>) - (1<i style='font-family:"Times New Roman",serif;'>x</i> - 3) = (<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 1<i style='font-family:"Times New Roman",serif;'>x</i>) + (5<i style='font-family:"Times New Roman",serif;'>x</i> - 5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(ડાબી બાજુ: -6x - 1x = -7x થશે. જમણી બાજુ: -1x + 5x = +4x થશે)</i></span><br>
                                <b style='color:#1d4ed8;'>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <span style='color:#dc2626;'>- 7<i style='font-family:"Times New Roman",serif;'>x</i></span> + 3</b> = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <span style='color:#16a34a;'>+ 4<i style='font-family:"Times New Roman",serif;'>x</i></span> - 5</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુથી ડાબી બાજુ આવતા બધાની નિશાની બદલાઈ જશે (+ નું - અને - નું +)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 7<i style='font-family:"Times New Roman",serif;'>x</i> + 3 <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i> + 5</b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2x<sup>2</sup> - 1x<sup>2</sup> = 1x<sup>2</sup>), (-7x - 4x = -11x), (+3 + 5 = +8)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 11<i style='font-family:"Times New Roman",serif;'>x</i> + 8 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં સાદું રૂપ આપ્યા પછી મળેલ સમીકરણ <b><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 11<i style='font-family:"Times New Roman",serif;'>x</i> + 8 = 0</b> માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની <b>સૌથી મોટી ઘાત 2 છે</b>.
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> હા, આપેલ સમીકરણ <b>દ્વિઘાત સમીકરણ છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 1(vi): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: x² + 3x + 1 = (x - 2)²", 
                    question_desc: "(a-b)² ના સૂત્ર વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1 = (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2)<sup>2</sup></p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સૂત્ર યાદ કરો:</b><br>
                            <b>(a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup></b><br>
                            તેથી, (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 2)<sup>2</sup> = (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>)<sup>2</sup> - 2(<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>)(2) + (2)<sup>2</sup> = <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> - 4<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 4</b> થશે.
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: જમણી બાજુ કૌંસ છોડતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif;'>x</i> + 1 = <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i> + 4</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુના પદો ડાબી બાજુ આવતા નિશાની બદલાશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif;'>x</i> + 1 <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 4<i style='font-family:"Times New Roman",serif;'>x</i> - 4</b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>અહીં +x<sup>2</sup> અને -x<sup>2</sup> ઉડી જશે!</i></span><br>
                                3<i style='font-family:"Times New Roman",serif;'>x</i> + 1 + 4<i style='font-family:"Times New Roman",serif;'>x</i> - 4 = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'>7<i style='font-family:"Times New Roman",serif;'>x</i> - 3 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં સાદું રૂપ આપ્યા પછી મળેલ સમીકરણ <b>7<i style='font-family:"Times New Roman",serif;'>x</i> - 3 = 0</b> માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની 2 ઘાત વાળું પદ ઉડી ગયું છે. <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની સૌથી મોટી ઘાત માત્ર 1 જ છે.
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> ના, આપેલ સમીકરણમાં <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની 2 ઘાત ન હોવાથી તે <b>દ્વિઘાત સમીકરણ નથી</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                {
                    question: "🎯 માસ્ટર ચાવી: 3 ઘાત (Cube) વાળા અગત્યના સૂત્રો",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>આ દાખલા ગણતા પહેલા આ 2 સૂત્રો ખાસ યાદ રાખી લો:</p>
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:16px; color:#0f172a;'>
                                <li><b style='color:#1d4ed8;'>સરવાળાનો ઘન:</b> <b>(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></b></li>
                                <li><b style='color:#be123c;'>બાદબાકીનો ઘન:</b> <b>(a - b)<sup>3</sup> = a<sup>3</sup> - 3a<sup>2</sup>b + 3ab<sup>2</sup> - b<sup>3</sup></b></li>
                            </ul>
                            <span style='color:#64748b; font-size:14px;'><i>(યાદ રાખવાની ટ્રીક: માઇનસ વાળા સૂત્રમાં પહેલું પદ પ્લસ, બીજું માઇનસ, ત્રીજું પ્લસ અને ચોથું પદ માઇનસ આવે છે.)</i></span>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 1(vii): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: (x + 2)³ = 2x(x² - 1)", 
                    question_desc: "નવી પેપર સ્ટાઈલ મુજબ 1 માર્ક માટે અગત્યનો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 2)<sup>3</sup> = 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i>(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 1)</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2024 (નવી પેપર સ્ટાઈલ) માં હેતુલક્ષી પ્રશ્નમાં પૂછાયેલ મોડેલ દાખલો</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બંને બાજુ કૌંસ છોડીને સાદું રૂપ આપતાં</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>ડાબી બાજુ (a+b)<sup>3</sup> નું સૂત્ર અને જમણી બાજુ 2x નો અંદર ગુણાકાર</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>3</sup> + 3(<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>2</sup>(2) + 3(<i style='font-family:"Times New Roman",serif;'>x</i>)(2)<sup>2</sup> + (2)<sup>3</sup> = 2<i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup>) - 2<i style='font-family:"Times New Roman",serif;'>x</i>(1)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(ગણતરી: 3 &times; x<sup>2</sup> &times; 2 = 6x<sup>2</sup> અને 3 &times; x &times; 4 = 12x)</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> + 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 12<i style='font-family:"Times New Roman",serif;'>x</i> + 8</b> = <b style='color:#be123c;'>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> - 2<i style='font-family:"Times New Roman",serif;'>x</i></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુથી 2x<sup>3</sup> આ બાજુ આવતાં માઇનસ થશે અને -2x આ બાજુ આવતાં પ્લસ થશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> + 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 12<i style='font-family:"Times New Roman",serif;'>x</i> + 8 <b style='color:#dc2626;'>- 2<i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i></b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(1x<sup>3</sup> - 2x<sup>3</sup> = -1x<sup>3</sup> થશે, અને 12x + 2x = 14x થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'>-<i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> + 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 14<i style='font-family:"Times New Roman",serif;'>x</i> + 8 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં સાદું રૂપ આપ્યા પછી મળેલ સમીકરણમાં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની <b>સૌથી મોટી ઘાત 3 છે</b>. (યાદ રાખો, દ્વિઘાત સમીકરણમાં મોટી ઘાત 2 જ હોવી જોઈએ, 3 નહિ).
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> ના, અહીં ઘાત 3 હોવાથી તે <b>દ્વિઘાત સમીકરણ નથી</b>. (તે ત્રિઘાત સમીકરણ છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 1(viii): ચકાસો કે દ્વિઘાત સમીકરણ છે કે નહિ: x³ - 4x² - x + 1 = (x - 2)³", 
                    question_desc: "બોર્ડની પરીક્ષાનો ફેવરિટ અને ટ્રીકી દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>3</sup> - 4<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1 = (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2)<sup>3</sup></p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#15803d; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2025 ની બ્લુપ્રિન્ટ મુજબનો મોસ્ટ IMP ટ્રીકી દાખલો</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ક્યાં ભૂલ પડે છે?</b><br>
                            વિદ્યાર્થીઓ રકમમાં ડાબી બાજુ <i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> જોઈને સીધું જ લખી નાખે છે કે "આ દ્વિઘાત સમીકરણ નથી". પણ ના! ગણતરી કર્યા પછી તે ઉડી જશે. ચાલો જોઈએ!
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: જમણી બાજુ (a-b)³ નું સૂત્ર વાપરતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif;'>x</i> + 1 = (<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>3</sup> - 3(<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>2</sup>(2) + 3(<i style='font-family:"Times New Roman",serif;'>x</i>)(2)<sup>2</sup> - (2)<sup>3</sup><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif;'>x</i> + 1</b> = <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> - 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 12<i style='font-family:"Times New Roman",serif;'>x</i> - 8</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બધા પદોને ડાબી બાજુ લાવતાં (= 0 બનાવતાં)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જમણી બાજુના પદો ડાબી બાજુ આવતા બધાની નિશાનીઓ બદલાશે</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> - 4<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif;'>x</i> + 1 <b style='color:#dc2626;'>- <i style='font-family:"Times New Roman",serif;'>x</i><sup>3</sup> + 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 12<i style='font-family:"Times New Roman",serif;'>x</i> + 8</b> = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>જુઓ! અહીં શરૂઆતનો +x<sup>3</sup> અને પાછળનો -x<sup>3</sup> ઉડી જશે! 💥</i></span><br>
                                (-4<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 6<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup>) + (-<i style='font-family:"Times New Roman",serif;'>x</i> - 12<i style='font-family:"Times New Roman",serif;'>x</i>) + (1 + 8) = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 13<i style='font-family:"Times New Roman",serif;'>x</i> + 9 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 3: ચકાસણી</b><br>
                            અહીં 3 ઘાત વાળું પદ ઉડી ગયું અને છેલ્લે મળેલ સમીકરણ <b>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 13<i style='font-family:"Times New Roman",serif;'>x</i> + 9 = 0</b> માં ચલ <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ની સૌથી મોટી ઘાત 2 છે.
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> હા, આપેલ સમીકરણ <b>દ્વિઘાત સમીકરણ છે</b>.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                {
                    question: "🎯 નોંધ: પ્રશ્ન 2 માટે ખાસ સૂચના",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>વિદ્યાર્થી મિત્રો ધ્યાન આપો:</p>
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <p style='margin:0; color:#0f172a; line-height:1.6;'>સ્વાધ્યાય 4.1 ના પ્રશ્ન 2 માં આપણે માત્ર આપેલ પરિસ્થિતિને <b>દ્વિઘાત સમીકરણ સ્વરૂપે દર્શાવવાની જ છે</b>. અહીં ઉકેલ (જવાબ) શોધવાની જરૂર નથી, ફક્ત સાચું સમીકરણ બની જાય એટલે દાખલો પૂરો!</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.1 પ્રશ્ન 2(i): એક લંબચોરસ પ્લોટનું ક્ષેત્રફળ 528 મી² છે. પ્લોટની લંબાઈ...", 
                    question_desc: "તેની પહોળાઈના બમણાથી 1 મીટર જેટલી વધુ છે. આ માટે દ્વિઘાત સમીકરણની રચના કરો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક લંબચોરસ પ્લોટનું ક્ષેત્રફળ 528 મી<sup>2</sup> છે. પ્લોટની લંબાઈ (મીટરમાં) તેની પહોળાઈના બમણાથી 1 મીટર જેટલી વધુ છે. આપણે પ્લોટની લંબાઈ અને પહોળાઈ શોધવી છે. (આ પરિસ્થિતિ માટે દ્વિઘાત સમીકરણ બનાવો).</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2024 ની નવી પેપર સ્ટાઈલ મુજબ 2 માર્ક્સ માટે મોસ્ટ IMP</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમીકરણ કેવી રીતે બનશે? (માસ્ટર ટ્રીક)</b><br>
                            આવા દાખલામાં જે વસ્તુ <b>નાની</b> હોય તેને હંમેશા <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ધારવી. અહીં લંબાઈ એ પહોળાઈ કરતાં મોટી છે, એટલે આપણે <b>પહોળાઈ ને <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ધારીશું</b>. બીજું, લંબચોરસના ક્ષેત્રફળનું સૂત્ર (લંબાઈ &times; પહોળાઈ) યાદ રાખવું!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: લંબાઈ અને પહોળાઈ ધારવી</b><br>
                            ધારો કે લંબચોરસ પ્લોટની પહોળાઈ = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> મીટર</b> છે.<br>
                            રકમ મુજબ, લંબાઈ એ પહોળાઈના બમણા (2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) થી 1 વધુ (+1) છે.<br>
                            તેથી, પ્લોટની લંબાઈ = <b style='color:#1d4ed8;'>(2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1) મીટર</b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ક્ષેત્રફળના સૂત્ર પરથી સમીકરણ બનાવવું</b><br>
                            આપણને આપેલ છે કે પ્લોટનું ક્ષેત્રફળ 528 મી<sup>2</sup> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                લંબાઈ &times; પહોળાઈ = ક્ષેત્રફળ<br>
                                <b style='color:#1d4ed8;'>(2<i style='font-family:"Times New Roman",serif;'>x</i> + 1)</b> &times; <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i></b> = 528<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x નો કૌંસમાં ગુણાકાર: x &times; 2x = 2x<sup>2</sup> અને x &times; 1 = 1x)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i> = 528<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(528 ને ડાબી બાજુ લાવતાં નિશાની માઇનસ થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'>2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i> - 528 = 0</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ નિષ્કર્ષ:</b> આમ, માંગેલ દ્વિઘાત સમીકરણ <b>2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 528 = 0</b> છે. 
                                <span style='color:#64748b; font-size:14px;'>(અહીં દાખલો પૂરો થાય છે!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 2(ii): બે ક્રમિક ધન પૂર્ણાંકોનો ગુણાકાર 306 છે. આ માટે દ્વિઘાત સમીકરણ બનાવો.", 
                    question_desc: "બેઝિક ગણિત માટે સૌથી સહેલો અને અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે <b>ક્રમિક</b> ધન પૂર્ણાંકોનો ગુણાકાર 306 છે. આપણે આ પૂર્ણાંકો શોધવા છે. (આ પરિસ્થિતિને દ્વિઘાત સમીકરણ સ્વરૂપે દર્શાવો).</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#15803d; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2025 ની બ્લુપ્રિન્ટ મુજબ બેઝિક ગણિત (Basic Math) માટે 100% પૂછાવા લાયક!</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 'ક્રમિક' એટલે શું? (દેશી ભાષામાં):</b><br>
                            'ક્રમિક' એટલે એક પછી તરત આવતી બીજી સંખ્યા. જેમ કે 5 પછી 6, 12 પછી 13. <br>
                            કોઈપણ સંખ્યાની પછીની સંખ્યા જોઈતી હોય, તો તેમાં <b>1 ઉમેરવો પડે (+1)</b>.
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: ક્રમિક સંખ્યાઓ ધારવી</b><br>
                            ધારો કે પહેલો ધન પૂર્ણાંક = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b> છે.<br>
                            તેથી, તેની પછીનો તરત આવતો ક્રમિક પૂર્ણાંક = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1</b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ગુણાકાર પરથી સમીકરણ બનાવવું</b><br>
                            રકમ મુજબ આ બંને સંખ્યાઓનો ગુણાકાર 306 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                (પહેલી સંખ્યા) &times; (બીજી સંખ્યા) = 306<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &times; <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + 1)</b> = 306<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x નો કૌંસમાં ગુણાકાર: x &times; x = x<sup>2</sup> અને x &times; 1 = 1x)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i> = 306<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(306 ડાબી બાજુ લાવતાં માઇનસ થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i> - 306 = 0</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ નિષ્કર્ષ:</b> આમ, માંગેલ દ્વિઘાત સમીકરણ <b><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 306 = 0</b> છે. 
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 2(iii): રોહનની માતા તેના કરતાં 26 વર્ષ મોટા છે...", 
                    question_desc: "આજથી 3 વર્ષ પછી તેમની ઉંમર દર્શાવતી સંખ્યાઓનો ગુણાકાર 360 હશે. તો સમીકરણ બનાવો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> રોહનની માતા તેના કરતાં 26 વર્ષ મોટા છે. આજથી 3 વર્ષ પછી તેમની ઉંમર (વર્ષમાં) દર્શાવતી સંખ્યાઓનો ગુણાકાર 360 હશે. આપણે રોહનની હાલની ઉંમર શોધવી છે. (આ પરિસ્થિતિ માટે દ્વિઘાત સમીકરણ બનાવો).</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#15803d; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2025 ની નવી પેપર સ્ટાઈલ મુજબ બેઝિક ગણિત માટે 3 માર્ક્સમાં પૂછાઈ શકે!</b>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: હાલની ઉંમર ધારવી</b><br>
                            ધારો કે રોહનની હાલની ઉંમર = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> વર્ષ</b> છે.<br>
                            રકમ મુજબ, માતા તેના કરતા 26 વર્ષ મોટા છે (એટલે કે પ્લસ 26 કરવાના).<br>
                            તેથી, માતાની હાલની ઉંમર = <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 26) વર્ષ</b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 3 વર્ષ પછીની ઉંમર શોધવી</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(3 વર્ષ પછી કીધું છે, એટલે બંનેની ઉંમરમાં 3 ઉમેરવા પડશે)</i></span><br>
                            રોહનની ઉંમર = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3</b> થશે.<br>
                            માતાની ઉંમર = (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 26) + 3 = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 29</b> થશે.
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ગુણાકાર પરથી સમીકરણ બનાવવું</b><br>
                            રકમ મુજબ 3 વર્ષ પછી બંનેની ઉંમરનો ગુણાકાર 360 થાય છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (રોહનની નવી ઉંમર) &times; (માતાની નવી ઉંમર) = 360<br>
                                <b style='color:#1d4ed8;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + 3)</b><b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + 29)</b> = 360<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કૌંસનો ગુણાકાર: x નો આખા કૌંસ સાથે અને +3 નો આખા કૌંસ સાથે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> + 29) + 3(<i style='font-family:"Times New Roman",serif;'>x</i> + 29) = 360<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 29<i style='font-family:"Times New Roman",serif;'>x</i> + 3<i style='font-family:"Times New Roman",serif;'>x</i> + 87 = 360<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(વચ્ચે 29x + 3x = 32x થશે, અને 360 ને ડાબી બાજુ લાવતાં -360 થશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 32<i style='font-family:"Times New Roman",serif;'>x</i> + 87 <b style='color:#dc2626;'>- 360</b> = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 32<i style='font-family:"Times New Roman",serif;'>x</i> - 273 = 0</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ નિષ્કર્ષ:</b> આમ, માંગેલ દ્વિઘાત સમીકરણ <b><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> + 32<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 273 = 0</b> છે. 
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.1 પ્રશ્ન 2(iv): એક ટ્રેન 480 કિમીનું અંતર અચળ ઝડપે કાપે છે...", 
                    question_desc: "જો ઝડપ 8 કિમી/કલાક ઓછી હોય તો આટલું જ અંતર કાપવા 3 કલાક વધુ લે છે. (સુપર IMP ટ્રેન વાળો દાખલો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક ટ્રેન 480 કિમીનું અંતર અચળ ઝડપે કાપે છે. જો ઝડપ 8 કિમી/કલાક ઓછી હોય, તો આટલું જ અંતર કાપવા તે 3 કલાક વધુ લે છે. તો ટ્રેનની ઝડપ શોધવા માટે દ્વિઘાત સમીકરણની રચના કરો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: સ્ટાન્ડર્ડ ગણિત (Standard Math) માટે શિક્ષકોનો સૌથી ફેવરિટ 3 અથવા 4 માર્ક્સનો દાખલો!</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 ટ્રેનના દાખલાની માસ્ટર ટ્રીક (દેશી ભાષામાં):</b><br>
                            આવા દાખલામાં હંમેશા <b>સમય = અંતર / ઝડપ</b> નું સૂત્ર વપરાય છે.<br>
                            ટ્રીક યાદ રાખો: <b>"મોટો સમય - નાનો સમય = તફાવત (કલાક)"</b><br>
                            <i>(જો ટ્રેન ધીમી ચાલે તો સમય મોટો થાય, અને જો ટ્રેન ફાસ્ટ ચાલે તો સમય નાનો થાય!)</i>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: ઝડપ અને સમય ધારવો</b><br>
                            કુલ અંતર = 480 કિમી.<br>
                            ધારો કે ટ્રેનની સામાન્ય ઝડપ = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> કિમી/કલાક</b> છે.<br>
                            તેથી, <b>સામાન્ય સમય (નાનો સમય)</b> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>અંતર</span><span>ઝડપ</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>480</span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></span></span></b><br><br>
                            હવે, જો ઝડપ 8 કિમી/કલાક ઓછી થાય, તો નવી ઝડપ = <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 8) કિમી/કલાક</b> થશે.<br>
                            તેથી, <b>નવો સમય (મોટો સમય)</b> = <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>480</span><span><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 8</span></span></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: માસ્ટર ટ્રીક વાપરી સમીકરણ બનાવવું</b><br>
                            રકમ મુજબ, ધીમી ટ્રેન 3 કલાક વધુ લે છે. એટલે કે (મોટો સમય - નાનો સમય = 3).
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>480</span><span><i style='font-family:"Times New Roman",serif;'>x</i> - 8</span></span></b> - <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>480</span><span><i style='font-family:"Times New Roman",serif;'>x</i></span></span></b> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બંનેમાંથી 480 સામાન્ય (કોમન) કાઢતાં ગણતરી સહેલી થશે</i></span><br>
                                480 <span style='font-size:24px;'>[</span> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><i style='font-family:"Times New Roman",serif;'>x</i> - 8</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><i style='font-family:"Times New Roman",serif;'>x</i></span></span> <span style='font-size:24px;'>]</span> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>કૌંસની અંદર ચોકડી ગુણાકાર અને છેદમાં બંનેનો ગુણાકાર કરતાં</i></span><br>
                                480 <span style='font-size:24px;'>[</span> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif;'>x</i> - (<i style='font-family:"Times New Roman",serif;'>x</i> - 8)</span><span><i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> - 8)</span></span> <span style='font-size:24px;'>]</span> = 3<br>
                                480 <span style='font-size:24px;'>[</span> <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><i style='font-family:"Times New Roman",serif;'>x</i> - <i style='font-family:"Times New Roman",serif;'>x</i> + 8</span><span><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i></span></span> <span style='font-size:24px;'>]</span> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+x અને -x ઉડી જશે, ફક્ત 8 વધશે)</i></span><br>
                                480 &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8</span><span><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i></span></span> = 3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(480 ગુણ્યા 8 = 3840. અને છેદનું પદ સામે 3 ના ગુણાકારમાં જશે)</i></span><br>
                                3840 = 3(<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i>)<br>
                                3840 = 3<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 24<i style='font-family:"Times New Roman",serif;'>x</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(આખા સમીકરણને 3 વડે ભાગતાં નાનું બનશે)</i></span><br>
                                1280 = <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+1280 સામે લઈ જતાં -1280 થશે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i> - 1280 = 0</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ નિષ્કર્ષ:</b> આમ, માંગેલ દ્વિઘાત સમીકરણ <b><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 1280 = 0</b> છે. 
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                {
                    question: "🎯 માસ્ટર ચાવી: અવયવીકરણની રીત (વચ્ચેના પદના ભાગ પાડવાની રીત)",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>આ 3 સ્ટેપ યાદ રાખો એટલે કોઈ પણ દાખલો રમતા-રમતા આવડી જશે:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#be123c;'>સ્ટેપ 1 (ગુણાકાર):</b> સમીકરણ <b>ax² + bx + c = 0</b> માં પ્રથમ પદના સહગુણક (a) અને છેલ્લા પદ (c) નો ગુણાકાર કરો.</li>
                                <li><b style='color:#1d4ed8;'>સ્ટેપ 2 (ભાગ પાડવા):</b> આ ગુણાકારના એવા બે ભાગ (અવયવ) પાડો, જેનો સરવાળો કે બાદબાકી <b>વચ્ચેના પદ (b)</b> જેટલો થાય! <br>
                                <span style='color:#64748b; font-size:14px;'><i>(ટ્રીક: જો છેલ્લું પદ + હોય તો સરવાળો કરીને વચ્ચેનું પદ લાવવું, અને જો છેલ્લું પદ - હોય તો બાદબાકી કરીને લાવવું.)</i></span></li>
                                <li><b style='color:#16a34a;'>સ્ટેપ 3 (સામાન્ય કાઢવું):</b> વચ્ચેના પદની જગ્યાએ આ બે નવા ભાગ મૂકી દો. પછી બબ્બેની જોડી બનાવી સામાન્ય (Common) કાઢો એટલે બે કૌંસ મળશે. તેને 0 સાથે સરખાવી દો!</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.2 પ્રશ્ન 1(i): નીચે આપેલ સમીકરણના ઉકેલ અવયવીકરણની રીતે મેળવો: x² - 3x - 10 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 10 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: વચ્ચેના પદના ભાગ પાડવા</b><br>
                            અહીં પ્રથમ પદનો સહગુણક 1 છે અને છેલ્લું પદ -10 છે. (1 &times; 10 = 10).<br>
                            આપણે <b>10 ના એવા ભાગ પાડવાના છે જેની બાદબાકી 3 આવે</b> (કારણ કે છેલ્લે માઇનસ છે).<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>10 ના ભાગ: 5 &times; 2 = 10, અને 5 માંથી 2 જાય તો 3 વધે!</i></span><br>
                            હવે નિશાની: આપણે <b>-3<i style='font-family:"Times New Roman",serif;'>x</i></b> લાવવાના છે, તેથી મોટી સંખ્યાને માઇનસ અને નાનીને પ્લસ આપીશું: <b>-5<i style='font-family:"Times New Roman",serif;'>x</i> + 2<i style='font-family:"Times New Roman",serif;'>x</i></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કિંમત મૂકી સામાન્ય (Common) કાઢતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 3<i style='font-family:"Times New Roman",serif;'>x</i></b> - 10 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>વચ્ચેના પદની જગ્યાએ બે ભાગ મૂકતા</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 5<i style='font-family:"Times New Roman",serif;'>x</i> + 2<i style='font-family:"Times New Roman",serif;'>x</i></b> - 10 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી x સામાન્ય અને છેલ્લા બે માંથી 2 સામાન્ય કાઢતા</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 5) <b style='color:#16a34a;'>+ 2</b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 5) = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બંને કૌંસ સરખા આવવા જ જોઈએ! હવે તે કૌંસને સામાન્ય કાઢો</i></span><br>
                                <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> - 5)</b>(<i style='font-family:"Times New Roman",serif;'>x</i> + 2) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બંને કૌંસને 0 સાથે સરખાવી ઉકેલ મેળવવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> - 5) = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; (<i style='font-family:"Times New Roman",serif;'>x</i> + 2) = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-5) સામે જતાં પ્લસ થશે અને (+2) સામે જતાં માઇનસ થશે</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 5</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = -2</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના ઉકેલ (બીજ) <b style='color:#1d4ed8;'>5</b> અને <b style='color:#be123c;'>-2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 1(ii): અવયવીકરણની રીતે ઉકેલ મેળવો: 2x² + x - 6 = 0", 
                    question_desc: "બોર્ડની પરીક્ષા માટે બેઝિક ગણિતનો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 6 = 0</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: વચ્ચેના પદના ભાગ પાડવા</b><br>
                            અહીં પ્રથમ પદ 2 અને છેલ્લું પદ -6 છે. (2 &times; 6 = 12).<br>
                            આપણે <b>12 ના એવા ભાગ પાડવાના છે જેની બાદબાકી 1 આવે</b> (કારણ કે વચ્ચે માત્ર +x છે એટલે કે 1x છે).<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>12 ના ભાગ: 4 &times; 3 = 12, અને 4 માંથી 3 જાય તો 1 વધે!</i></span><br>
                            હવે નિશાની: આપણે <b>+1<i style='font-family:"Times New Roman",serif;'>x</i></b> લાવવાના છે, તેથી મોટી સંખ્યાને પ્લસ અને નાનીને માઇનસ આપીશું: <b>+4<i style='font-family:"Times New Roman",serif;'>x</i> - 3<i style='font-family:"Times New Roman",serif;'>x</i></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કિંમત મૂકી સામાન્ય (Common) કાઢતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ <i style='font-family:"Times New Roman",serif;'>x</i></b> - 6 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>વચ્ચેના પદની જગ્યાએ બે ભાગ મૂકતા</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ 4<i style='font-family:"Times New Roman",serif;'>x</i> - 3<i style='font-family:"Times New Roman",serif;'>x</i></b> - 6 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી 2x સામાન્ય અને છેલ્લા બે માંથી -3 સામાન્ય કાઢતા</i></span><br>
                                <b style='color:#1d4ed8;'>2<i style='font-family:"Times New Roman",serif;'>x</i></b>(<i style='font-family:"Times New Roman",serif;'>x</i> + 2) <b style='color:#dc2626;'>- 3</b>(<i style='font-family:"Times New Roman",serif;'>x</i> + 2) = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(નોંધ: બહાર માઇનસ કાઢ્યું એટલે અંદરની નિશાની પ્લસ થઈ ગઈ!)</i></span><br>
                                <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + 2)</b>(2<i style='font-family:"Times New Roman",serif;'>x</i> - 3) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બંને કૌંસને 0 સાથે સરખાવી ઉકેલ મેળવવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> + 2) = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; (2<i style='font-family:"Times New Roman",serif;'>x</i> - 3) = 0<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = -2</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2<i style='font-family:"Times New Roman",serif;'>x</i> = 3<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&#10551; <i>(2 છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>3</span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના ઉકેલ <b style='color:#be123c;'>-2</b> અને <b style='color:#1d4ed8;'>3/2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 1(iii): અવયવીકરણની રીતે ઉકેલ મેળવો: &radic;2x² + 7x + 5&radic;2 = 0", 
                    question_desc: "વર્ગમૂળ (&radic;) વાળો બોર્ડનો સૌથી ફેવરિટ અને મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> &radic;2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> + 7<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 5&radic;2 = 0</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2020 અને જુલાઈ 2022 માં પૂછાયેલ મોસ્ટ IMP દાખલો</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વર્ગમૂળની માસ્ટર ટ્રીક:</b><br>
                            યાદ રાખો કે, <b>&radic;2 &times; &radic;2 = 2</b> થાય.<br>
                            તેથી જો આપણે 2 માંથી સામાન્ય કાઢવું હોય, તો આપણે <b>2 ને (&radic;2 &times; &radic;2)</b> તરીકે વિચારી શકીએ!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: ગુણાકાર કરી ભાગ પાડવા</b><br>
                            પ્રથમ પદનો સહગુણક = &radic;2 અને છેલ્લું પદ = 5&radic;2<br>
                            ગુણાકાર: &radic;2 &times; 5&radic;2 = 5 &times; (&radic;2 &times; &radic;2) = 5 &times; 2 = <b>10</b><br>
                            હવે, <b>10 ના એવા ભાગ પાડો જેનો સરવાળો 7 થાય</b> (કારણ કે છેલ્લે પ્લસ છે).<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>10 ના ભાગ: 5 &times; 2 = 10, અને 5 + 2 = 7 થાય!</i></span><br>
                            વચ્ચે +7 છે, એટલે બંને પદોને પ્લસ આપીશું: <b>+5<i style='font-family:"Times New Roman",serif;'>x</i> + 2<i style='font-family:"Times New Roman",serif;'>x</i></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કિંમત મૂકી સામાન્ય (Common) કાઢતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &radic;2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ 7<i style='font-family:"Times New Roman",serif;'>x</i></b> + 5&radic;2 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>સરળતા માટે આપણે 2x ને આગળ અને 5x ને પાછળ લખીશું</i></span><br>
                                &radic;2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ 2<i style='font-family:"Times New Roman",serif;'>x</i> + 5<i style='font-family:"Times New Roman",serif;'>x</i></b> + 5&radic;2 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી &radic;2x સામાન્ય નીકળશે (કારણ કે 2 = &radic;2 &times; &radic;2) અને છેલ્લા બે માંથી 5 સામાન્ય નીકળશે</i></span><br>
                                <b style='color:#be123c;'>&radic;2<i style='font-family:"Times New Roman",serif;'>x</i></b>(<i style='font-family:"Times New Roman",serif;'>x</i> + &radic;2) <b style='color:#16a34a;'>+ 5</b>(<i style='font-family:"Times New Roman",serif;'>x</i> + &radic;2) = 0<br>
                                <b style='color:#dc2626;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + &radic;2)</b>(&radic;2<i style='font-family:"Times New Roman",serif;'>x</i> + 5) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બંને કૌંસને 0 સાથે સરખાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> + &radic;2) = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; (&radic;2<i style='font-family:"Times New Roman",serif;'>x</i> + 5) = 0<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = -&radic;2</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &radic;2<i style='font-family:"Times New Roman",serif;'>x</i> = -5<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&#10551; <i>(&radic;2 છેદમાં જશે)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>-5</span><span>&radic;2</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના ઉકેલ <b style='color:#be123c;'>-&radic;2</b> અને <b style='color:#1d4ed8;'>-5 / &radic;2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 1(iv): અવયવીકરણની રીતે ઉકેલ મેળવો: 2x² - x + 1/8 = 0", 
                    question_desc: "છેદ ઉડાડવાની ટ્રીક વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>8</span></span> = 0</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 છેદ ઉડાડવાની ટ્રીક:</b><br>
                            અહીં છેદમાં 8 છે. તેથી <b>આખા સમીકરણને 8 વડે ગુણી નાખો</b>, જેથી છેદ ગાયબ થઈ જાય અને સમીકરણ સાદું બની જાય!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણને સાદું બનાવવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                8 &times; (2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup>) - 8 &times; (<i style='font-family:"Times New Roman",serif;'>x</i>) + 8 &times; (<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>8</span></span>) = 8 &times; 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'>16<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 8<i style='font-family:"Times New Roman",serif;'>x</i> + 1 = 0</b> &nbsp;&nbsp; <span style='color:#64748b; font-size:14px;'><i>(હવે આ નવું સમીકરણ ઉકેલીશું)</i></span>
                            </div>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 2: વચ્ચેના પદના ભાગ પાડવા</b><br>
                            પ્રથમ પદ 16 અને છેલ્લું પદ 1 છે. (16 &times; 1 = 16).<br>
                            આપણે <b>16 ના એવા ભાગ પાડવાના છે જેનો સરવાળો 8 આવે</b> (કારણ કે છેલ્લે પ્લસ છે).<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>16 ના ભાગ: 4 &times; 4 = 16, અને 4 + 4 = 8 થાય!</i></span><br>
                            વચ્ચે -8 લાવવાના છે, તેથી બંનેને માઇનસ આપીશું: <b>-4<i style='font-family:"Times New Roman",serif;'>x</i> - 4<i style='font-family:"Times New Roman",serif;'>x</i></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: કિંમત મૂકી સામાન્ય (Common) કાઢતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                16<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 8<i style='font-family:"Times New Roman",serif;'>x</i></b> + 1 = 0<br>
                                16<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 4<i style='font-family:"Times New Roman",serif;'>x</i> - 4<i style='font-family:"Times New Roman",serif;'>x</i></b> + 1 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી 4x અને છેલ્લા બે માંથી -1 સામાન્ય કાઢતા</i></span><br>
                                <b style='color:#1d4ed8;'>4<i style='font-family:"Times New Roman",serif;'>x</i></b>(4<i style='font-family:"Times New Roman",serif;'>x</i> - 1) <b style='color:#dc2626;'>- 1</b>(4<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0<br>
                                <b style='color:#be123c;'>(4<i style='font-family:"Times New Roman",serif;'>x</i> - 1)</b>(4<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 4: બંને કૌંસને 0 સાથે સરખાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (4<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; (4<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0<br>
                                4<i style='font-family:"Times New Roman",serif;'>x</i> = 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4<i style='font-family:"Times New Roman",serif;'>x</i> = 1<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>4</span></span></b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>1</span><span>4</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના ઉકેલ <b style='color:#1d4ed8;'>1/4</b> અને <b style='color:#be123c;'>1/4</b> છે. (બંને બીજ સમાન છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                        

                { 
                    question: "સ્વા. 4.2 પ્રશ્ન 1(v): અવયવીકરણની રીતે ઉકેલ મેળવો: 100x² - 20x + 1 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 100<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 20<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 1 = 0</p>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: વચ્ચેના પદના ભાગ પાડવા</b><br>
                            અહીં પ્રથમ પદ 100 અને છેલ્લું પદ 1 છે. (100 &times; 1 = 100).<br>
                            આપણે <b>100 ના એવા ભાગ પાડવાના છે જેનો સરવાળો 20 આવે</b> (કારણ કે છેલ્લે પ્લસ છે).<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>100 ના ભાગ: 10 &times; 10 = 100, અને 10 + 10 = 20 થાય!</i></span><br>
                            વચ્ચે -20 લાવવાના છે, તેથી બંનેને માઇનસ આપીશું: <b>-10<i style='font-family:"Times New Roman",serif;'>x</i> - 10<i style='font-family:"Times New Roman",serif;'>x</i></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કિંમત મૂકી સામાન્ય (Common) કાઢતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                100<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 20<i style='font-family:"Times New Roman",serif;'>x</i></b> + 1 = 0<br>
                                100<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 10<i style='font-family:"Times New Roman",serif;'>x</i> - 10<i style='font-family:"Times New Roman",serif;'>x</i></b> + 1 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી 10x અને છેલ્લા બે માંથી -1 સામાન્ય કાઢતા</i></span><br>
                                <b style='color:#1d4ed8;'>10<i style='font-family:"Times New Roman",serif;'>x</i></b>(10<i style='font-family:"Times New Roman",serif;'>x</i> - 1) <b style='color:#dc2626;'>- 1</b>(10<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ સામાન્ય કાઢ્યું એટલે અંદર નિશાની બદલાઈ ગઈ)</i></span><br>
                                <b style='color:#be123c;'>(10<i style='font-family:"Times New Roman",serif;'>x</i> - 1)</b>(10<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બંને કૌંસને 0 સાથે સરખાવતાં</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                (10<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; (10<i style='font-family:"Times New Roman",serif;'>x</i> - 1) = 0<br>
                                10<i style='font-family:"Times New Roman",serif;'>x</i> = 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10<i style='font-family:"Times New Roman",serif;'>x</i> = 1<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>10</span></span></b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>1</span><span>10</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના ઉકેલ <b style='color:#1d4ed8;'>1/10</b> અને <b style='color:#be123c;'>1/10</b> છે. 
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 3: બે એવી સંખ્યાઓ શોધો કે જેનો સરવાળો 27 અને ગુણાકાર 182 હોય.", 
                    question_desc: "બોર્ડ પરીક્ષામાં અવારનવાર પૂછાતો 3 માર્ક્સનો કૂટપ્રશ્ન",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે એવી સંખ્યાઓ શોધો કે જેનો સરવાળો 27 અને ગુણાકાર 182 હોય.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 અને 2025 ની પેપર સ્ટાઈલ મુજબ બેઝિક ગણિત માટે મોસ્ટ IMP</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સંખ્યા ધારવાની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે બે સંખ્યાનો "સરવાળો" આપ્યો હોય, ત્યારે <b>પહેલી સંખ્યા x ધારવી</b> અને <b>બીજી સંખ્યા (સરવાળો - x) ધારવી</b>. <br>
                            દા.ત. સરવાળો 27 છે, તો બીજી સંખ્યા <b>(27 - x)</b> થાય!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ બનાવવું</b><br>
                            ધારો કે પહેલી સંખ્યા = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b> છે.<br>
                            બંનેનો સરવાળો 27 હોવાથી, બીજી સંખ્યા = <b style='color:#be123c;'>(27 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>)</b> થશે.<br><br>
                            રકમ મુજબ, તેમનો ગુણાકાર 182 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (પહેલી સંખ્યા) &times; (બીજી સંખ્યા) = 182<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &times; <b style='color:#be123c;'>(27 - <i style='font-family:"Times New Roman",serif;'>x</i>)</b> = 182<br>
                                27<i style='font-family:"Times New Roman",serif;'>x</i> - <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> = 182<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બધા પદોને જમણી બાજુ લઈ જતાં (જેથી x<sup>2</sup> પ્લસ થઈ જાય)</i></span><br>
                                0 = <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 27<i style='font-family:"Times New Roman",serif;'>x</i> + 182<br>
                                <b style='color:#15803d;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 27<i style='font-family:"Times New Roman",serif;'>x</i> + 182 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: અવયવીકરણથી ઉકેલ</b><br>
                            આપણે <b>182 ના એવા ભાગ પાડવાના છે જેનો સરવાળો 27 આવે</b>.<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>182 ના ભાગ: 13 &times; 14 = 182, અને 13 + 14 = 27 થાય!</i></span><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 13<i style='font-family:"Times New Roman",serif;'>x</i> - 14<i style='font-family:"Times New Roman",serif;'>x</i></b> + 182 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી x અને છેલ્લા બે માંથી -14 સામાન્ય કાઢતા</i></span><br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 13) <b style='color:#dc2626;'>- 14</b>(<i style='font-family:"Times New Roman",serif;'>x</i> - 13) = 0<br>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> - 13)(<i style='font-family:"Times New Roman",serif;'>x</i> - 14) = 0
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બંને સંખ્યાઓ શોધવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 13 = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>x</i> - 14 = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 13</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>x</i> = 14</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                જો પહેલી સંખ્યા 13 હોય, તો બીજી સંખ્યા (27 - 13) = 14 થશે.<br>
                                તેથી, <b>માંગેલ બે સંખ્યાઓ 13 અને 14 છે.</b>
                                <span style='color:#64748b; font-size:14px;'>(તાળો: 13 + 14 = 27 અને 13 &times; 14 = 182 કમ્પ્લીટ!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 4: જેના વર્ગોનો સરવાળો 365 થાય એવી બે ક્રમિક ધન પૂર્ણાંક સંખ્યાઓ શોધો.", 
                    question_desc: "બેઝિક ગણિત માટે 3 માર્ક્સનો સુપર IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> જેના <b>વર્ગોનો સરવાળો 365</b> થાય એવી બે <b>ક્રમિક</b> ધન પૂર્ણાંક સંખ્યાઓ શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 અને 2025 ની બ્લુપ્રિન્ટ મુજબ બેઝિક ગણિતમાં અવારનવાર પૂછાતો દાખલો</b>
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: બે ક્રમિક સંખ્યાઓ ધારવી</b><br>
                            આપણે અગાઉ શીખ્યા તેમ 'ક્રમિક' એટલે એક પછી એક તરત આવતી સંખ્યા.<br>
                            ધારો કે પહેલી ધન પૂર્ણાંક સંખ્યા = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b> છે.<br>
                            તેથી, તેની પછીની ક્રમિક ધન પૂર્ણાંક સંખ્યા = <b style='color:#be123c;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 1</b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વર્ગોના સરવાળા પરથી સમીકરણ બનાવવું</b><br>
                            રકમ મુજબ, આ બંને સંખ્યાઓના <b>વર્ગોનો સરવાળો</b> 365 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                (પહેલી સંખ્યા)<sup>2</sup> + (બીજી સંખ્યા)<sup>2</sup> = 365<br>
                                <b style='color:#1d4ed8;'>(<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>2</sup></b> + <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> + 1)<sup>2</sup></b> = 365<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>((a+b)<sup>2</sup> નું સૂત્ર વાપરતાં: a<sup>2</sup> + 2ab + b<sup>2</sup>)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + (<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i> + 1) = 365<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x<sup>2</sup> + x<sup>2</sup> = 2x<sup>2</sup> થશે, અને 365 આ બાજુ લાવતાં માઇનસ થશે)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i> + 1 <b style='color:#dc2626;'>- 365</b> = 0<br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 2<i style='font-family:"Times New Roman",serif;'>x</i> - 364 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(સમીકરણને નાનું બનાવવા બધાને 2 વડે ભાગી નાખો!)</i></span><br>
                                <b style='color:#15803d;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + <i style='font-family:"Times New Roman",serif;'>x</i> - 182 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: અવયવીકરણથી ઉકેલ (182 ના ભાગ)</b><br>
                            આપણે 182 ના એવા ભાગ પાડવાના છે જેની બાદબાકી 1 આવે.<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>182 ના ભાગ: 14 &times; 13 = 182, અને 14 - 13 = 1 થાય!</i></span><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ 14<i style='font-family:"Times New Roman",serif;'>x</i> - 13<i style='font-family:"Times New Roman",serif;'>x</i></b> - 182 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી x અને છેલ્લા બે માંથી -13 સામાન્ય કાઢતા</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> + 14) - 13(<i style='font-family:"Times New Roman",serif;'>x</i> + 14) = 0<br>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> + 14)(<i style='font-family:"Times New Roman",serif;'>x</i> - 13) = 0<br><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> + 14 = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>x</i> - 13 = 0<br>
                                <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif;'>x</i> = -14</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 13</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                રકમમાં <b>ધન પૂર્ણાંક</b> કહ્યા છે, તેથી <i style='font-family:"Times New Roman",serif;'>x</i> = -14 શક્ય નથી.<br>
                                તેથી પહેલી સંખ્યા <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 13</b> થશે.<br>
                                અને બીજી ક્રમિક સંખ્યા <i style='font-family:"Times New Roman",serif;'>x</i> + 1 = 13 + 1 = <b style='color:#be123c;'>14</b> થશે.<br>
                                <b>માંગેલ બે સંખ્યાઓ 13 અને 14 છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 5: એક કાટકોણ ત્રિકોણનો વેધ તેના પાયા કરતાં 7 સેમી નાનો છે...", 
                    question_desc: "પાયથાગોરસના પ્રમેય અને આકૃતિવાળો 100% મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક કાટકોણ ત્રિકોણનો વેધ તેના પાયા કરતાં 7 સેમી નાનો છે. જો કર્ણની લંબાઈ 13 સેમી હોય, તો બાકીની બે બાજુનાં માપ શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2023, જુલાઈ 2024 માં પૂછાયેલ સ્ટાન્ડર્ડ ગણિતનો સૌથી ફેવરિટ દાખલો!</b>
                        </div>

                        

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:15px; border-radius:8px; margin-bottom:15px; text-align:center;'>
    <b style='color:#b45309;'>💡 આકૃતિથી સમજીએ (કાટકોણ ત્રિકોણ):</b><br>
    
    <div style='position:relative; width:150px; height:120px; margin:40px auto 30px auto; border-left:3px solid #be123c; border-bottom:3px solid #1d4ed8;'>
        
        <div style='position:absolute; top:0; left:0; width:192px; border-top:3px solid #16a34a; transform-origin:top left; transform:rotate(38.66deg);'></div>
        
        <div style='position:absolute; top:100%; left:50%; margin-top:8px; transform:translateX(-50%); color:#1d4ed8; font-weight:bold; white-space:nowrap;'>પાયો (<i style='font-family:"Times New Roman",serif;'>x</i>)</div>
        
        <div style='position:absolute; top:50%; right:100%; margin-right:8px; transform:translateY(-50%); color:#be123c; font-weight:bold; white-space:nowrap;'>વેધ (<i style='font-family:"Times New Roman",serif;'>x</i> - 7)</div>
        
        <div style='position:absolute; top:40%; left:50%; margin-left:15px; color:#16a34a; font-weight:bold; white-space:nowrap;'>કર્ણ (13)</div>
        
        <div style='position:absolute; bottom:0; left:0; width:15px; height:15px; border-top:2px solid #0f172a; border-right:2px solid #0f172a;'></div>
        
    </div>
</div>


                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: પાયો અને વેધ ધારવો</b><br>
                            રકમમાં વેધની સરખામણી પાયા સાથે કરી છે, તેથી <b>પાયાને <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ધારીશું</b>.<br>
                            ધારો કે કાટકોણ ત્રિકોણનો <b>પાયો = <i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> સેમી</b> છે.<br>
                            વેધ પાયા કરતાં 7 સેમી નાનો છે, તેથી <b>વેધ = (<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>x</i> - 7) સેમી</b> થશે.<br>
                            અને <b>કર્ણ = 13 સેમી</b> આપેલ છે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પાયથાગોરસનો પ્રમેય વાપરતાં</b><br>
                            માસ્ટર સૂત્ર: <b>(પાયો)<sup>2</sup> + (વેધ)<sup>2</sup> = (કર્ણ)<sup>2</sup></b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>(<i style='font-family:"Times New Roman",serif;'>x</i>)<sup>2</sup></b> + <b style='color:#be123c;'>(<i style='font-family:"Times New Roman",serif;'>x</i> - 7)<sup>2</sup></b> = <b style='color:#16a34a;'>(13)<sup>2</sup></b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>((a-b)<sup>2</sup> નું સૂત્ર વાપરતાં: a<sup>2</sup> - 2ab + b<sup>2</sup>)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + (<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 14<i style='font-family:"Times New Roman",serif;'>x</i> + 49) = 169<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x<sup>2</sup> + x<sup>2</sup> = 2x<sup>2</sup> થશે, અને 169 ને ડાબી બાજુ લાવતાં માઇનસ થશે)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 14<i style='font-family:"Times New Roman",serif;'>x</i> + 49 <b style='color:#dc2626;'>- 169</b> = 0<br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 14<i style='font-family:"Times New Roman",serif;'>x</i> - 120 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(સમીકરણને સહેલું બનાવવા આખા સમીકરણને 2 વડે ભાગી નાખો)</i></span><br>
                                <b style='color:#15803d;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 7<i style='font-family:"Times New Roman",serif;'>x</i> - 60 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: અવયવીકરણથી ઉકેલ (60 ના ભાગ)</b><br>
                            આપણે 60 ના એવા ભાગ પાડવાના છે જેની બાદબાકી 7 આવે.<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>60 ના ભાગ: 12 &times; 5 = 60, અને 12 - 5 = 7 થાય!</i></span><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#dc2626;'>- 12<i style='font-family:"Times New Roman",serif;'>x</i> + 5<i style='font-family:"Times New Roman",serif;'>x</i></b> - 60 = 0<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i> - 12) + 5(<i style='font-family:"Times New Roman",serif;'>x</i> - 12) = 0<br>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> - 12)(<i style='font-family:"Times New Roman",serif;'>x</i> + 5) = 0<br><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 12 = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>x</i> + 5 = 0<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 12</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif;'>x</i> = -5</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                કોઈપણ ત્રિકોણની બાજુનું માપ ઋણ (માઇનસ) ન હોઈ શકે, તેથી <i style='font-family:"Times New Roman",serif;'>x</i> = -5 શક્ય નથી.<br>
                                તેથી, <b>પાયો = <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='color:#1d4ed8;'>12 સેમી</span></b> થશે.<br>
                                અને <b>વેધ = <i style='font-family:"Times New Roman",serif;'>x</i> - 7 = 12 - 7 = <span style='color:#be123c;'>5 સેમી</span></b> થશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                { 
                    question: "🌟 સ્વા. 4.2 પ્રશ્ન 6: એક કુટીર ઉદ્યોગ એક દિવસમાં કેટલાક માટીના વાસણો બનાવે છે...", 
                    question_desc: "પ્રત્યેક વાસણની ઉત્પાદન કિંમત વાસણોની સંખ્યાના બમણા કરતાં 3 વધુ છે. બોર્ડ માટે 3 માર્ક્સનો IMP દાખલો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> એક કુટીર ઉદ્યોગ એક દિવસમાં કેટલાક માટીના વાસણો બનાવે છે. એક નિશ્ચિત દિવસે જણાયું કે પ્રત્યેક વાસણની ઉત્પાદન કિંમત (₹ માં) તે દિવસે ઉત્પાદિત વાસણોની સંખ્યાના બમણા કરતાં 3 વધુ હતી. જો તે દિવસે <b>કુલ ઉત્પાદન ખર્ચ ₹ 90</b> હોય, તો ઉત્પાદિત વાસણોની સંખ્યા અને પ્રત્યેક વાસણની ઉત્પાદન કિંમત શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 અને 2025 ની બ્લુપ્રિન્ટ મુજબ સ્ટાન્ડર્ડ ગણિતમાં 3 માર્ક્સ માટે પૂછાતો મોસ્ટ IMP કૂટપ્રશ્ન!</b>
                        </div>

                        

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમીકરણની માસ્ટર ટ્રીક:</b><br>
                            આવા દાખલામાં હંમેશા <b>કુલ ખર્ચ = (કુલ વસ્તુની સંખ્યા) &times; (એક વસ્તુની કિંમત)</b> આ સૂત્ર મગજમાં રાખવું. <br>
                            (જેમ કે 5 પેન હોય અને એક પેન 10 રૂપિયાની હોય, તો કુલ ખર્ચ 5 &times; 10 = 50 થાય!)
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: વાસણની સંખ્યા અને કિંમત ધારવી</b><br>
                            ધારો કે તે દિવસે ઉત્પાદિત <b>માટીના વાસણોની સંખ્યા = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i></b></b> છે.<br>
                            હવે રકમ મુજબ, પ્રત્યેક વાસણની ઉત્પાદન કિંમત એ સંખ્યાના બમણા (2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) કરતાં 3 વધુ (+3) છે.<br>
                            તેથી, <b>એક વાસણની ઉત્પાદન કિંમત = <b style='color:#be123c;'>(2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> + 3) ₹</b></b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કુલ ખર્ચ પરથી સમીકરણ બનાવવું</b><br>
                            રકમમાં આપેલ છે કે તે દિવસનો <b>કુલ ઉત્પાદન ખર્ચ ₹ 90</b> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                (વાસણોની સંખ્યા) &times; (એક વાસણની કિંમત) = કુલ ખર્ચ<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &times; <b style='color:#be123c;'>(2<i style='font-family:"Times New Roman",serif;'>x</i> + 3)</b> = 90<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x નો કૌંસમાં અંદર ગુણાકાર કરતાં)</i></span><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif;'>x</i> = 90<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(90 ને ડાબી બાજુ લાવતાં માઇનસ થશે)</i></span><br>
                                <b style='color:#15803d;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 3<i style='font-family:"Times New Roman",serif;'>x</i> - 90 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: અવયવીકરણથી ઉકેલ (180 ના ભાગ)</b><br>
                            પ્રથમ પદ 2 અને છેલ્લું પદ -90 છે (2 &times; 90 = 180).<br>
                            આપણે 180 ના એવા ભાગ પાડવાના છે જેની બાદબાકી 3 આવે.<br>
                            <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>180 ના ભાગ: 15 &times; 12 = 180, અને 15 - 12 = 3 થાય!</i></span><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> <b style='color:#1d4ed8;'>+ 15<i style='font-family:"Times New Roman",serif;'>x</i> - 12<i style='font-family:"Times New Roman",serif;'>x</i></b> - 90 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પહેલા બે માંથી માત્ર x અને છેલ્લા બે માંથી -6 સામાન્ય કાઢતા</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i>(2<i style='font-family:"Times New Roman",serif;'>x</i> + 15) - 6(2<i style='font-family:"Times New Roman",serif;'>x</i> + 15) = 0<br>
                                (2<i style='font-family:"Times New Roman",serif;'>x</i> + 15)(<i style='font-family:"Times New Roman",serif;'>x</i> - 6) = 0<br><br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> + 15 = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; <i style='font-family:"Times New Roman",serif;'>x</i> - 6 = 0<br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i> = -15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 6</b><br>
                                <b style='color:#dc2626;'><i style='font-family:"Times New Roman",serif;'>x</i> = -15 / 2</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                વાસણોની સંખ્યા ક્યારેય ઋણ કે અપૂર્ણાંકમાં હોઈ શકે નહિ, તેથી <i style='font-family:"Times New Roman",serif;'>x</i> = -15/2 <b>શક્ય નથી</b>.<br>
                                તેથી, <b>માટીના વાસણોની સંખ્યા = <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='color:#1d4ed8;'>6</span></b> થશે.<br>
                                અને <b>પ્રત્યેક વાસણની ઉત્પાદન કિંમત = 2<i style='font-family:"Times New Roman",serif;'>x</i> + 3 = 2(6) + 3 = 12 + 3 = <span style='color:#be123c;'>₹ 15</span></b> થશે.<br>
                                <span style='color:#64748b; font-size:14px;'>(તાળો: 6 વાસણો &times; ₹ 15 = ₹ 90 કુલ ખર્ચ થઈ ગયો!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                {
                    question: "🎯 ગોલ્ડન માસ્ટર ચાવી: વિવેચક (D) અને દ્વિઘાત સૂત્ર (શ્રીધર આચાર્યનું સૂત્ર)",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>આખા પ્રકરણના સૌથી સહેલા અને રોકડા માર્ક્સ આ 3 નિયમોમાં છુપાયેલા છે:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:10px; border-radius:5px;'>
                            <b style='color:#be123c; font-size:16px;'>1. વિવેચક (Discriminant) શોધવાનું સૂત્ર:</b><br>
                            <b style='font-size:20px; color:#1d4ed8; background-color:#e0f2fe; padding:2px 8px; border-radius:4px;'>D = b<sup>2</sup> - 4ac</b>
                            <ul style='line-height:2.2; margin-top:10px; font-size:15px; color:#0f172a;'>
                                <li>જો <b>D > 0</b> (D પ્લસમાં આવે): સમીકરણને બે <b>ભિન્ન અને વાસ્તવિક બીજ</b> મળે.</li>
                                <li>જો <b>D = 0</b> (D ઝીરો આવે): સમીકરણને બે <b>સમાન અને વાસ્તવિક બીજ</b> મળે.</li>
                                <li>જો <b>D < 0</b> (D માઇનસમાં આવે): સમીકરણને <b>વાસ્તવિક બીજ ન મળે</b>. (અહીં દાખલો પૂરો!)</li>
                            </ul>
                            
                            <hr style='border-top:1px solid #f0abfc; margin:15px 0;'>
                            
                            <b style='color:#16a34a; font-size:16px;'>2. દ્વિઘાત સૂત્ર (જ્યારે D ની કિંમત 0 કે પ્લસ હોય ત્યારે):</b><br>
                            <div style='font-size:22px; color:#15803d; background-color:#dcfce7; padding:10px; border-radius:4px; margin-top:5px; text-align:center;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>-b &plusmn; <span style='font-size:24px;'>&radic;</span><span style='text-decoration:overline;'>D</span></span><span>2a</span></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 4.3 પ્રશ્ન 1(i): નીચેના સમીકરણના બીજના સ્વરૂપ શોધો. જો વાસ્તવિક બીજ હોય તો તે શોધો: 2x² - 3x + 5 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 5 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, b અને c ની કિંમતો લખવી</b><br>
                            સમીકરણને <b>a<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + b<i style='font-family:"Times New Roman",serif;'>x</i> + c = 0</b> સાથે સરખાવતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>a = 2</b>, &nbsp; <b style='color:#be123c;'>b = -3</b>, &nbsp; <b style='color:#16a34a;'>c = 5</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વિવેચક (D) શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                D = b<sup>2</sup> - 4ac<br>
                                D = (-3)<sup>2</sup> - 4(2)(5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કોઈપણ માઇનસ સંખ્યાનો વર્ગ હંમેશા પ્લસ જ થાય, એટલે (-3)<sup>2</sup> = 9)</i></span><br>
                                D = 9 - 40<br>
                                <b style='font-size:22px; color:#dc2626;'>D = -31</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: બીજનું સ્વરૂપ નક્કી કરવું</b><br>
                            અહીં વિવેચક <b style='color:#dc2626;'>D = -31</b> છે, જે શૂન્ય કરતાં નાનો છે (એટલે કે D < 0).
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> અહીં D ની કિંમત ઋણ (માઇનસ) હોવાથી આપેલ દ્વિઘાત સમીકરણના <b>વાસ્તવિક બીજ અસ્તિત્વ ધરાવતા નથી.</b> <span style='color:#64748b; font-size:14px;'>(દાખલો અહીં જ પૂરો!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 1(ii): બીજના સ્વરૂપ શોધો: 3x² - 4&radic;3x + 4 = 0", 
                    question_desc: "વર્ગમૂળ અને સમાન બીજ વાળો 100% મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 3<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 4<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span><i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 4 = 0</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 અને 2025 ની બ્લુપ્રિન્ટ મુજબ બેઝિક અને સ્ટાન્ડર્ડ બંને માટે મોસ્ટ IMP!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, b અને c ની કિંમતો લખવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>a = 3</b>, &nbsp; <b style='color:#be123c;'>b = -4<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></b>, &nbsp; <b style='color:#16a34a;'>c = 4</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વિવેચક (D) શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                D = b<sup>2</sup> - 4ac<br>
                                D = (-4<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span>)<sup>2</sup> - 4(3)(4)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(ધ્યાન આપો: 4 નો વર્ગ 16 થાય અને &radic;3 નો વર્ગ 3 થાય. તેથી 16 &times; 3 = 48)</i></span><br>
                                D = 48 - 48<br>
                                <b style='font-size:22px; color:#1d4ed8;'>D = 0</b>
                            </div>
                            <div style='margin-top:10px; font-size:15px;'>અહીં <b style='color:#1d4ed8;'>D = 0</b> છે, તેથી સમીકરણને <b>બે સમાન અને વાસ્તવિક બીજ</b> મળશે.</div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: દ્વિઘાત સૂત્ર વાપરીને બીજ શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>D</span></span><span>2a</span></span><br><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-4<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span>) &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>0</span></span><span>2(3)</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ માઇનસ પ્લસ થાય અને ઝીરો નું વર્ગમૂળ ઝીરો જ થાય)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>6</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2 વડે છેદ ઉડાડતા: 2 દૂ 4 અને 2 તેરી 6)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>3</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(છેદના 3 ને આપણે &radic;3 &times; &radic;3 લખી શકીએ, જેથી ઉપર-નીચે એક &radic;3 ઉડી જાય)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span><span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span> &times; <span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>2</span><span><span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> અહીં D = 0 હોવાથી બંને બીજ સમાન હશે. <br>
                                તેથી, આપેલ દ્વિઘાત સમીકરણના બીજ <b style='color:#1d4ed8;'>2 / &radic;<span style='text-decoration:overline;'>3</span></b> અને <b style='color:#be123c;'>2 / &radic;<span style='text-decoration:overline;'>3</span></b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 4.3 પ્રશ્ન 1(iii): દ્વિઘાત સૂત્રની રીતે ઉકેલ મેળવો: 2x² - 6x + 3 = 0", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> - 6<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> + 3 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, b અને c ની કિંમતો લખવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>a = 2</b>, &nbsp; <b style='color:#be123c;'>b = -6</b>, &nbsp; <b style='color:#16a34a;'>c = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વિવેચક (D) શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                D = b<sup>2</sup> - 4ac<br>
                                D = (-6)<sup>2</sup> - 4(2)(3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ 6 નો વર્ગ પ્લસ 36 થશે)</i></span><br>
                                D = 36 - 24<br>
                                <b style='font-size:22px; color:#1d4ed8;'>D = 12</b>
                            </div>
                            <div style='margin-top:10px; font-size:15px;'>અહીં <b style='color:#1d4ed8;'>D > 0</b> છે (પ્લસમાં છે), તેથી સમીકરણને <b>બે ભિન્ન અને વાસ્તવિક બીજ</b> મળશે.</div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: દ્વિઘાત સૂત્ર વાપરીને બીજ શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-b &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>D</span></span><span>2a</span></span><br><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-(-6) &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>12</span></span><span>2(2)</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(&radic;12 ને આપણે &radic;(4 &times; 3) એટલે કે 2&radic;3 લખી શકીએ)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6 &plusmn; 2<span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>4</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(અંશમાંથી 2 સામાન્ય (Common) કાઢતા)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2(3 &plusmn; <span style='font-size:18px;'>&radic;</span><span style='text-decoration:overline;'>3</span>)</span><span>4</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(છેદના 4 સાથે છેદ ઉડાડતા: 2 દૂ 4)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>3 &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>2</span></span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ દ્વિઘાત સમીકરણના બે બીજ નીચે મુજબ છે:<br>
                                <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3 + <span style='font-size:16px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>2</span></span></b> &nbsp; અને &nbsp; <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3 - <span style='font-size:16px;'>&radic;</span><span style='text-decoration:overline;'>3</span></span><span>2</span></span></b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 2(i): નીચેના દ્વિઘાત સમીકરણના બીજ સમાન હોય તો k નું મૂલ્ય શોધો: 2x² + kx + 3 = 0", 
                    question_desc: "બોર્ડની પરીક્ષામાં 100% પૂછાતી k ની કિંમત શોધવાની રીત",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 2<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i><sup>2</sup> + k<i style='font-family:"Times New Roman",serif; font-size:18px; color:#be123c; font-weight:bold;'>x</i> + 3 = 0</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2024 અને 2025 ની પેપર સ્ટાઈલ મુજબ હેતુલક્ષીમાં અવારનવાર પૂછાતો દાખલો!</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર શરત:</b><br>
                            રકમમાં સ્પષ્ટ લખ્યું છે કે <b>"બીજ સમાન હોય"</b>. દ્વિઘાત સમીકરણના બીજ સમાન ત્યારે જ હોય જ્યારે <b>વિવેચક D = 0</b> હોય!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, b અને c ની કિંમતો લખવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>a = 2</b>, &nbsp; <b style='color:#be123c;'>b = k</b>, &nbsp; <b style='color:#16a34a;'>c = 3</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: D = 0 મૂકીને ગણતરી કરવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                b<sup>2</sup> - 4ac = 0<br>
                                (k)<sup>2</sup> - 4(2)(3) = 0<br>
                                k<sup>2</sup> - 24 = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-24) સામે જતાં પ્લસ (+24) થશે</i></span><br>
                                k<sup>2</sup> = 24<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(વર્ગ સામે જતાં વર્ગમૂળ &plusmn;&radic; થશે)</i></span><br>
                                k = &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>24</span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(24 ના ભાગ 4 &times; 6 પાડી શકાય, અને 4 નું વર્ગમૂળ 2 થાય)</i></span><br>
                                k = &plusmn; <span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>(4 &times; 6)</span><br>
                                <b style='font-size:22px; color:#1d4ed8;'>k = &plusmn; 2<span style='font-size:20px;'>&radic;</span><span style='text-decoration:overline;'>6</span></b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલ k ની કિંમત <b style='color:#1d4ed8;'>+2&radic;6</b> અથવા <b style='color:#be123c;'>-2&radic;6</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 2(ii): બીજ સમાન હોય તો k નું મૂલ્ય શોધો: kx(x - 2) + 6 = 0", 
                    question_desc: "કૌંસવાળો અને બોર્ડમાં સૌથી વધુ ભૂલ કરાવતો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> k<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i>(<i style='font-family:"Times New Roman",serif; font-size:18px; color:#1d4ed8; font-weight:bold;'>x</i> - 2) + 6 = 0</p>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણને સાદું બનાવવું</b><br>
                            રકમ સીધી દ્વિઘાત સમીકરણ સ્વરૂપે નથી. પહેલા કૌંસની અંદર k<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> નો ગુણાકાર કરીશું.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                k<i style='font-family:"Times New Roman",serif;'>x</i>(<i style='font-family:"Times New Roman",serif;'>x</i>) - k<i style='font-family:"Times New Roman",serif;'>x</i>(2) + 6 = 0<br>
                                <b style='color:#1d4ed8;'>k<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2k<i style='font-family:"Times New Roman",serif;'>x</i> + 6 = 0</b>
                            </div>
                            હવે a, b અને c લખીએ:<br>
                            <b style='color:#1d4ed8;'>a = k</b>, &nbsp; <b style='color:#be123c;'>b = -2k</b>, &nbsp; <b style='color:#16a34a;'>c = 6</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: D = 0 મૂકીને ગણતરી કરવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                b<sup>2</sup> - 4ac = 0<br>
                                (-2k)<sup>2</sup> - 4(k)(6) = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-2k નો વર્ગ 4k<sup>2</sup> થાય)</i></span><br>
                                4k<sup>2</sup> - 24k = 0<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(બંનેમાંથી 4k સામાન્ય (Common) કાઢતા)</i></span><br>
                                <b style='color:#1d4ed8;'>4k(k - 6) = 0</b><br><br>
                                4k = 0 &nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp; k - 6 = 0<br>
                                <b style='font-size:22px; color:#dc2626;'>k = 0</b> &nbsp;&nbsp;&nbsp;&nbsp; <b>અથવા</b> &nbsp;&nbsp;&nbsp;&nbsp; <b style='font-size:22px; color:#1d4ed8;'>k = 6</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી (માસ્ટર ટ્રીક)</b><br>
                            જો આપણે k = 0 લઈએ, તો આપેલું સમીકરણ <b>k<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 2k<i style='font-family:"Times New Roman",serif;'>x</i> + 6 = 0</b> માં પ્રથમ પદ જ ઝીરો થઈ જાય, તેથી તે <b>દ્વિઘાત સમીકરણ રહે જ નહિ!</b> <br>
                            આથી k = 0 <b>શક્ય નથી</b>.
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલ <b style='color:#1d4ed8;'>k ની કિંમત 6</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 3: જેની લંબાઈ પહોળાઈ કરતાં બમણી હોય અને ક્ષેત્રફળ 800 મી² હોય...", 
                    question_desc: "તેવું લંબચોરસ આંબાવાડિયું બનાવવું શક્ય છે? જો હા, તો લંબાઈ-પહોળાઈ શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> શું એવું લંબચોરસ આંબાવાડિયું બનાવવું શક્ય છે, જેની લંબાઈ તેની પહોળાઈ કરતાં બમણી હોય અને ક્ષેત્રફળ 800 મી<sup>2</sup> હોય? જો તમારો ઉત્તર હામાં હોય, તો તેની લંબાઈ અને પહોળાઈ શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની નવી બ્લુપ્રિન્ટ મુજબ 2 કે 3 માર્ક્સમાં પૂછાતો સહેલો દાખલો</b>
                        </div>

                        

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: લંબાઈ અને પહોળાઈ ધારવી</b><br>
                            આપણે અગાઉ શીખ્યા તેમ જે નાનું હોય તેને <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> ધારવું.<br>
                            ધારો કે આંબાવાડિયાની <b>પહોળાઈ = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> મીટર</b></b> છે.<br>
                            રકમ મુજબ લંબાઈ એ પહોળાઈ કરતાં બમણી (ડબલ) છે.<br>
                            તેથી <b>લંબાઈ = <b style='color:#be123c;'>2<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> મીટર</b></b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ક્ષેત્રફળ પરથી સમીકરણ બનાવવું</b><br>
                            લંબચોરસનું ક્ષેત્રફળ = 800 મી<sup>2</sup> આપેલ છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                લંબાઈ &times; પહોળાઈ = ક્ષેત્રફળ<br>
                                <b style='color:#be123c;'>(2<i style='font-family:"Times New Roman",serif;'>x</i>)</b> &times; <b style='color:#1d4ed8;'>(<i style='font-family:"Times New Roman",serif;'>x</i>)</b> = 800<br>
                                2<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> = 800<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2 છેદમાં જશે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> = 800 / 2<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> = 400<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(વર્ગ સામે જાય તો વર્ગમૂળ થાય. 400 નું વર્ગમૂળ 20 થાય)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> = &plusmn; 20
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: શક્યતા ચકાસવી અને જવાબ લખવો</b><br>
                            <i style='font-family:"Times New Roman",serif;'>x</i> ની બે કિંમત મળી: +20 અને -20.<br>
                            પરંતુ, લંબાઈ કે પહોળાઈ ક્યારેય ઋણ (માઇનસ) ન હોઈ શકે. તેથી <b><i style='font-family:"Times New Roman",serif;'>x</i> = -20 શક્ય નથી</b>. <br>
                            આમ, <i style='font-family:"Times New Roman",serif;'>x</i> = 20 શક્ય છે, એટલે કે <b>આવું આંબાવાડિયું બનાવવું શક્ય છે!</b>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                આંબાવાડિયાની <b>પહોળાઈ = <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='color:#1d4ed8;'>20 મીટર</span></b><br>
                                અને <b>લંબાઈ = 2<i style='font-family:"Times New Roman",serif;'>x</i> = 2(20) = <span style='color:#be123c;'>40 મીટર</span></b> થશે.
                                <span style='color:#64748b; font-size:14px;'>(તાળો: 20 &times; 40 = 800 ક્ષેત્રફળ આવી ગયું!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 4: બે મિત્રોની ઉંમરનો સરવાળો 20 વર્ષ છે. 4 વર્ષ પહેલાં...", 
                    question_desc: "તેમની ઉંમરનો ગુણાકાર 48 હતો. શું આ શક્ય છે? (માઇનસ D વાળો દાખલો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> બે મિત્રોની ઉંમરનો સરવાળો 20 વર્ષ છે. 4 વર્ષ પહેલાં તેમની ઉંમર દર્શાવતી સંખ્યાઓનો ગુણાકાર (વર્ષમાં) 48 હતો. શું આ પરિસ્થિતિ શક્ય છે? જો હોય, તો તેમની અત્યારની ઉંમર શોધો.</p>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક યાદ કરો:</b><br>
                            જ્યારે "સરવાળો 20" આપ્યો હોય, ત્યારે <b>એકને <i style='font-family:"Times New Roman",serif;'>x</i></b> ધારવો અને <b>બીજાને (20 - <i style='font-family:"Times New Roman",serif;'>x</i>)</b> ધારવો!
                        </div>

                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: ઉંમર ધારવી અને સમીકરણ બનાવવું</b><br>
                            ધારો કે પ્રથમ મિત્રની હાલની ઉંમર = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> વર્ષ</b> છે.<br>
                            તેથી બીજા મિત્રની હાલની ઉંમર = <b style='color:#be123c;'>(20 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) વર્ષ</b> થશે.<br><br>
                            
                            <b>4 વર્ષ પહેલાં બંનેની ઉંમર:</b><br>
                            પ્રથમ મિત્ર = (<i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> - 4) વર્ષ<br>
                            બીજો મિત્ર = (20 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) - 4 = <b style='color:#16a34a;'>(16 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) વર્ષ</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ગુણાકાર પરથી સમીકરણનું સાદું રૂપ</b><br>
                            રકમ મુજબ 4 વર્ષ પહેલાં તેમની ઉંમરનો ગુણાકાર 48 હતો.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> - 4)(16 - <i style='font-family:"Times New Roman",serif;'>x</i>) = 48<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કૌંસનો ગુણાકાર: x નો બંને સાથે અને -4 નો બંને સાથે)</i></span><br>
                                16<i style='font-family:"Times New Roman",serif;'>x</i> - <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 64 + 4<i style='font-family:"Times New Roman",serif;'>x</i> = 48<br>
                                -<i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> + 20<i style='font-family:"Times New Roman",serif;'>x</i> - 64 = 48<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x<sup>2</sup> ને પ્લસ કરવા બધા પદોને જમણી બાજુ લઈ જતાં)</i></span><br>
                                0 = <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 20<i style='font-family:"Times New Roman",serif;'>x</i> + 64 + 48<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 20<i style='font-family:"Times New Roman",serif;'>x</i> + 112 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: શક્યતા ચકાસવી (વિવેચક D)</b><br>
                            અહીં a = 1, b = -20, c = 112 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                D = b<sup>2</sup> - 4ac<br>
                                D = (-20)<sup>2</sup> - 4(1)(112)<br>
                                D = 400 - 448<br>
                                <b style='font-size:22px; color:#dc2626;'>D = -48</b>
                            </div>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> અહીં વિવેચક D ઋણ (માઇનસ) મળે છે (D < 0).<br>
                                આથી આ દ્વિઘાત સમીકરણના વાસ્તવિક બીજ શક્ય નથી. <br>
                                તેથી <b>આપેલ પરિસ્થિતિ શક્ય નથી!</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 4.3 પ્રશ્ન 5: જેની પરિમિતિ 80 મીટર અને ક્ષેત્રફળ 400 મી² હોય...", 
                    question_desc: "તેવો લંબચોરસ બગીચો બનાવવો શક્ય છે? (પ્રકરણનો છેલ્લો દાખલો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> જેની પરિમિતિ 80 મીટર અને ક્ષેત્રફળ 400 મી<sup>2</sup> હોય તેવો લંબચોરસ બગીચો બનાવવો શક્ય છે? જો તે શક્ય હોય, તો તેની લંબાઈ અને પહોળાઈ શોધો.</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની નવી પેપર સ્ટાઈલમાં 3 માર્ક્સનો સૌથી અગત્યનો દાખલો!</b>
                        </div>

                        

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: પરિમિતિ પરથી લંબાઈ-પહોળાઈનો સંબંધ</b><br>
                            લંબચોરસની પરિમિતિનું સૂત્ર: <b>2(લંબાઈ + પહોળાઈ) = પરિમિતિ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                2(લંબાઈ + પહોળાઈ) = 80<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(2 સામે ભાગાકારમાં જશે)</i></span><br>
                                <b>લંબાઈ + પહોળાઈ = 40</b>
                            </div>
                            <br>
                            ધારો કે લંબચોરસની <b>લંબાઈ = <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i> મીટર</b></b> છે.<br>
                            બંનેનો સરવાળો 40 હોવાથી, <b>પહોળાઈ = <b style='color:#be123c;'>(40 - <i style='font-family:"Times New Roman",serif; font-size:18px;'>x</i>) મીટર</b></b> થશે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ક્ષેત્રફળ પરથી સમીકરણ</b><br>
                            બગીચાનું ક્ષેત્રફળ 400 મી<sup>2</sup> આપેલ છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                લંબાઈ &times; પહોળાઈ = ક્ષેત્રફળ<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i></b> &times; <b style='color:#be123c;'>(40 - <i style='font-family:"Times New Roman",serif;'>x</i>)</b> = 400<br>
                                40<i style='font-family:"Times New Roman",serif;'>x</i> - <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> = 400<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(x<sup>2</sup> ને પ્લસ કરવા બધા પદોને જમણી બાજુ લઈ જતાં)</i></span><br>
                                0 = <i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 40<i style='font-family:"Times New Roman",serif;'>x</i> + 400<br>
                                <b style='color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i><sup>2</sup> - 40<i style='font-family:"Times New Roman",serif;'>x</i> + 400 = 0</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: શક્યતા ચકાસવી અને બીજ શોધવા</b><br>
                            અહીં a = 1, b = -40, c = 400 છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                D = b<sup>2</sup> - 4ac<br>
                                D = (-40)<sup>2</sup> - 4(1)(400)<br>
                                D = 1600 - 1600<br>
                                <b style='color:#16a34a;'>D = 0</b>
                            </div>
                            <span style='color:#0f172a; font-size:15px;'>અહીં D શૂન્ય છે, એટલે કે બીજ સમાન અને વાસ્તવિક મળશે. તેથી <b>આ પરિસ્થિતિ શક્ય છે!</b></span><br><br>
                            
                            <b style='color:#c2410c; font-size:16px;'>બીજ શોધવા (અવયવની રીત સૌથી સહેલી છે):</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(આ પૂર્ણવર્ગ પદાવલિ છે, a<sup>2</sup> - 2ab + b<sup>2</sup>)</i></span><br>
                                (<i style='font-family:"Times New Roman",serif;'>x</i> - 20)<sup>2</sup> = 0<br>
                                <i style='font-family:"Times New Roman",serif;'>x</i> - 20 = 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>x</i> = 20</b>
                            </div>
                            
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:15px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>🏆 અંતિમ જવાબ:</b> <br>
                                હા, આવો બગીચો બનાવવો શક્ય છે.<br>
                                બગીચાની <b>લંબાઈ = <i style='font-family:"Times New Roman",serif;'>x</i> = <span style='color:#1d4ed8;'>20 મીટર</span></b> થશે.<br>
                                અને <b>પહોળાઈ = (40 - <i style='font-family:"Times New Roman",serif;'>x</i>) = 40 - 20 = <span style='color:#be123c;'>20 મીટર</span></b> થશે.<br>
                                <span style='color:#64748b; font-size:14px;'>(નોંધ: લંબાઈ અને પહોળાઈ સમાન છે, એટલે કે આ લંબચોરસ વાસ્તવમાં એક "ચોરસ" છે!)</span>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
            
        // ------------------------------------
        // પ્રકરણ 5: સમાંતર શ્રેણી (સ્વાધ્યાય 5.1 - ભાગ 1)
        // ------------------------------------
        "5": {
            "chapterName": "પ્રકરણ 5 (સ્વાધ્યાય 5.1 - ભાગ 1)",
            "chapterTitle": "સમાંતર શ્રેણીની ઓળખ (માસ્ટર ચાવી અને પ્રશ્ન 1)",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: સમાંતર શ્રેણી (A.P.) કોને કહેવાય? પાયાના સૂત્રો",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>પ્રકરણ 5 શરૂ કરતાં પહેલાં આ 3 શબ્દો મગજમાં ફિટ કરી લો:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#be123c;'>સમાંતર શ્રેણી એટલે શું?</b> એવી સંખ્યાઓની લાઈન કે જેમાં કોઈપણ બે પાસપાસેની સંખ્યાઓ વચ્ચેનો <b>ગેપ (તફાવત) હંમેશા સરખો જ હોય!</b> (દા.ત. 2, 4, 6, 8... અહીં બધે 2 નો ગેપ છે).</li>
                                <li><b style='color:#1d4ed8;'>પ્રથમ પદ (a):</b> શ્રેણીની સૌથી પહેલી સંખ્યાને <b>a</b> (અથવા a<sub>1</sub>) કહેવાય.</li>
                                <li><b style='color:#16a34a;'>સામાન્ય તફાવત (d):</b> બે પદો વચ્ચેના ગેપને <b>d</b> કહેવાય.</li>
                            </ul>
                            
                            <hr style='border-top:1px solid #fde047; margin:15px 0;'>
                            
                            <b style='color:#b45309; font-size:16px;'>અગત્યના સૂત્રો (સીધી લાઈનમાં જ વાંચવા સ્ક્રોલ કરો &#8596;):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:10px; line-height:2.5; background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #f59e0b;'>
                                <b style='color:#1d4ed8;'>તફાવત d શોધવા:</b> <b style='color:#dc2626;'>d = a<sub>2</sub> - a<sub>1</sub> = a<sub>3</sub> - a<sub>2</sub></b> &nbsp;&nbsp;&nbsp; <span style='color:#047857; font-size:14px;'><i>(પાછળના પદમાંથી આગળનું પદ બાદ કરવું)</i></span><br>
                                <b style='color:#1d4ed8;'>શ્રેણીનું વ્યાપક રૂપ:</b> <b style='color:#dc2626;'>a, &nbsp; a + d, &nbsp; a + 2d, &nbsp; a + 3d, &nbsp; ...</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 1(i): ટેક્સીનું ભાડું પ્રથમ કિલોમીટર માટે ₹ 15 અને પછીના વધારાના પ્રત્યેક કિમી માટે ₹ 8 છે...", 
                    question_desc: "શું આ પરિસ્થિતિ સમાંતર શ્રેણી બનાવે છે? કારણ આપો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> નીચે આપેલ સ્થિતિમાંથી કઈ સ્થિતિમાં સંખ્યાની યાદી સમાંતર શ્રેણી બને છે અને કેમ? <br>
                        (i) ટેક્સીનું ભાડું પ્રથમ કિલોમીટર માટે ₹ 15 અને પછીના વધારાના પ્રત્યેક કિલોમીટર માટે ₹ 8 છે.</p>

                        

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: શ્રેણીના પદો (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>) શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>પ્રથમ 1 કિમીનું ભાડું (a<sub>1</sub>)</b> = ₹ 15<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>હવે દર કિલોમીટરે ₹ 8 ઉમેરાતા જશે</i></span><br>
                                <b style='color:#1d4ed8;'>2 કિમીનું કુલ ભાડું (a<sub>2</sub>)</b> = 15 + 8 = <b style='color:#be123c;'>23</b><br>
                                <b style='color:#1d4ed8;'>3 કિમીનું કુલ ભાડું (a<sub>3</sub>)</b> = 23 + 8 = <b style='color:#be123c;'>31</b><br>
                                <b style='color:#1d4ed8;'>4 કિમીનું કુલ ભાડું (a<sub>4</sub>)</b> = 31 + 8 = <b style='color:#be123c;'>39</b><br>
                            </div>
                            <span style='font-size:15px;'>આમ, આપણને મળતી શ્રેણી: <b>15, 23, 31, 39, ...</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સામાન્ય તફાવત (d) ચકાસવો</b><br>
                            કોઈપણ બે પાસપાસેના પદો વચ્ચેનો ગેપ (d) ચેક કરીએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 23 - 15 = <b style='color:#16a34a;'>8</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 31 - 23 = <b style='color:#16a34a;'>8</b><br>
                                d = a<sub>4</sub> - a<sub>3</sub> = 39 - 31 = <b style='color:#16a34a;'>8</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કારણ અને અંતિમ જવાબ</b><br>
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:5px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                અહીં ક્રમિક પદો વચ્ચેનો સામાન્ય તફાવત (d) હંમેશા <b>સમાન (8)</b> રહે છે. <br>
                                તેથી, <b>હા, આ પરિસ્થિતિ સમાંતર શ્રેણી બનાવે છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 1(ii): નળાકારમાં રહેલ હવાનું પ્રમાણ હવા કાઢવાના પંપ દ્વારા...", 
                    question_desc: "દર વખતે નળાકારની બાકી રહેલ હવાનો 1/4 ભાગ બહાર કાઢે છે. શું આ સમાંતર શ્રેણી છે?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> નળાકારમાં રહેલ હવાનું પ્રમાણ હવા કાઢવાના પંપ દ્વારા દર વખતે નળાકારની બાકી રહેલ હવાનો 1/4 ભાગ બહાર કાઢે છે. (શું આ સમાંતર શ્રેણી બનાવે છે?)</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની પેપર સ્ટાઈલ મુજબ હેતુલક્ષી (ખરા-ખોટા) માં પૂછાતો અગત્યનો દાખલો!</b>
                        </div>

                        

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 દેશી માસ્ટર ટ્રીક (ગણતરી સહેલી બનાવવા):</b><br>
                            આ દાખલામાં $x$ ધારીને અપૂર્ણાંક કરવાથી ખૂબ અઘરું લાગે છે. તેના બદલે આપણે એવી સંખ્યા ધારીશું જેના 4 ભાગ આસાનીથી થઈ શકે. ધારો કે <b>શરૂઆતમાં 64 લીટર હવા છે!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: પદો (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>) શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>શરૂઆતની હવા (a<sub>1</sub>)</b> = <b style='color:#be123c;'>64</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>પ્રથમ વખત: 64 ના ચોથા ભાગની હવા બહાર કાઢતા (64 / 4 = 16 બહાર નીકળશે)</i></span><br>
                                <b style='color:#1d4ed8;'>પછી વધેલી હવા (a<sub>2</sub>)</b> = 64 - 16 = <b style='color:#be123c;'>48</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>બીજી વખત: હવે વધેલી હવા (48) નો ચોથો ભાગ કાઢવાનો છે! (48 / 4 = 12 બહાર નીકળશે)</i></span><br>
                                <b style='color:#1d4ed8;'>પછી વધેલી હવા (a<sub>3</sub>)</b> = 48 - 12 = <b style='color:#be123c;'>36</b>
                            </div>
                            <span style='font-size:15px;'>આમ, આપણને મળતી શ્રેણી: <b>64, 48, 36, ...</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સામાન્ય તફાવત (d) ચકાસવો</b><br>
                            કોઈપણ બે પાસપાસેના પદો વચ્ચેનો ગેપ (d) ચેક કરીએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 48 - 64 = <b style='color:#dc2626;'>-16</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 36 - 48 = <b style='color:#dc2626;'>-12</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કારણ અને અંતિમ જવાબ</b><br>
                            અહીં સ્પષ્ટ જોઈ શકાય છે કે તફાવત સમાન નથી. (-16 અને -12 બંને અલગ છે). <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                અહીં ક્રમિક પદો વચ્ચેનો સામાન્ય તફાવત (d) સમાન રહેતો નથી. <br>
                                તેથી, <b>ના, આ પરિસ્થિતિ સમાંતર શ્રેણી બનાવતી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 1(iii): પ્રત્યેક મીટરના ખોદકામ પછી, એક કૂવો ખોદવા માટે લાગતો ખર્ચ...", 
                    question_desc: "પ્રથમ મીટરના ₹ 150 અને પછીના પ્રત્યેક મીટર દીઠ ₹ 50 વધતો જાય છે. (ચકાસો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> પ્રત્યેક મીટરના ખોદકામ પછી, એક કૂવો ખોદવા માટે લાગતો ખર્ચ, પ્રથમ મીટરના ₹ 150 અને પછીના પ્રત્યેક મીટર દીઠ ₹ 50 વધતો જાય છે. (શું આ સમાંતર શ્રેણી છે?)</p>

                        

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: શ્રેણીના પદો (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>) શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>પ્રથમ 1 મીટરનો ખર્ચ (a<sub>1</sub>)</b> = ₹ 150<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>હવે દર મીટરે ₹ 50 વધતા જશે</i></span><br>
                                <b style='color:#1d4ed8;'>2 મીટરનો કુલ ખર્ચ (a<sub>2</sub>)</b> = 150 + 50 = <b style='color:#be123c;'>200</b><br>
                                <b style='color:#1d4ed8;'>3 મીટરનો કુલ ખર્ચ (a<sub>3</sub>)</b> = 200 + 50 = <b style='color:#be123c;'>250</b><br>
                                <b style='color:#1d4ed8;'>4 મીટરનો કુલ ખર્ચ (a<sub>4</sub>)</b> = 250 + 50 = <b style='color:#be123c;'>300</b><br>
                            </div>
                            <span style='font-size:15px;'>આમ, આપણને મળતી શ્રેણી: <b>150, 200, 250, 300, ...</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સામાન્ય તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 200 - 150 = <b style='color:#16a34a;'>50</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 250 - 200 = <b style='color:#16a34a;'>50</b><br>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કારણ અને અંતિમ જવાબ</b><br>
                            <div style='background-color:#dcfce7; padding:10px; border-radius:5px; margin-top:5px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                અહીં ક્રમિક પદો વચ્ચેનો સામાન્ય તફાવત (d) <b>સમાન (50)</b> રહે છે. <br>
                                તેથી, <b>હા, આ પરિસ્થિતિ સમાંતર શ્રેણી બનાવે છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 1(iv): 8 % ના વાર્ષિક ચક્રવૃદ્ધિ દરથી શરૂઆતની રકમ ₹ 10000 મુકેલ હોય...", 
                    question_desc: "તો દર વર્ષે ખાતામાં જમા થતી રકમ સમાંતર શ્રેણી બનાવે છે કે નહિ? ચકાસો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> 8 % ના વાર્ષિક ચક્રવૃદ્ધિ દરથી શરૂઆતની રકમ ₹ 10000 મુકેલ હોય, તો દર વર્ષે ખાતામાં જમા થતી રકમ. (શું આ સમાંતર શ્રેણી છે?)</p>

                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા શોર્ટકટ ટ્રીક: યાદ રાખો, 'ચક્રવૃદ્ધિ વ્યાજ' ક્યારેય સમાંતર શ્રેણી બનાવતું નથી! (માત્ર સાદું વ્યાજ જ બનાવે). ખાલી જગ્યા માટે આ ગોખી લેવું.</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: પદો (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>) શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b style='color:#1d4ed8;'>શરૂઆતની રકમ (a<sub>1</sub>)</b> = <b style='color:#be123c;'>10000</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>1 વર્ષના અંતે વ્યાજ = (10000 &times; 8) / 100 = 800 ઉમેરાશે</i></span><br>
                                <b style='color:#1d4ed8;'>1 વર્ષ પછી રકમ (a<sub>2</sub>)</b> = 10000 + 800 = <b style='color:#be123c;'>10800</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>ચક્રવૃદ્ધિ વ્યાજ એટલે વ્યાજનું વ્યાજ! હવે 10800 ના 8% વ્યાજ ગણાશે! (10800 &times; 8 / 100 = 864)</i></span><br>
                                <b style='color:#1d4ed8;'>2 વર્ષ પછી રકમ (a<sub>3</sub>)</b> = 10800 + 864 = <b style='color:#be123c;'>11664</b>
                            </div>
                            <span style='font-size:15px;'>આમ, આપણને મળતી શ્રેણી: <b>10000, 10800, 11664, ...</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સામાન્ય તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 10800 - 10000 = <b style='color:#dc2626;'>800</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 11664 - 10800 = <b style='color:#dc2626;'>864</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કારણ અને અંતિમ જવાબ</b><br>
                            અહીં તફાવત સમાન નથી. <b>800 &ne; 864</b> એટલે કે <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b>
                            
                            <div style='background-color:#fee2e2; padding:10px; border-radius:5px; margin-top:10px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                અહીં ક્રમિક પદો વચ્ચેનો તફાવત સમાન રહેતો નથી. <br>
                                તેથી, <b>ના, આ પરિસ્થિતિ સમાંતર શ્રેણી બનાવતી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                {
                    question: "🎯 પ્રશ્ન 2 માટે માસ્ટર ટ્રીક: શ્રેણીના 4 પદો કેવી રીતે શોધવા?",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>પ્રશ્ન 2 ના દાખલા ગણવા માટેની સાવ દેશી ટ્રીક:</p>
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <p style='margin:0; color:#0f172a; line-height:1.6;'>જ્યારે પ્રથમ પદ (a) અને તફાવત (d) આપ્યો હોય, ત્યારે <b>આગળના પદમાં ફક્ત d ઉમેરતા જાવ!</b><br>
                            - પહેલું પદ = a<br>
                            - બીજું પદ = પહેલું પદ + d<br>
                            - ત્રીજું પદ = બીજું પદ + d<br>
                            બસ, આ રીતે સરવાળો કરતા જાવ એટલે નવી સંખ્યા મળતી જશે!</p>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 2(i) & (ii): a અને d ના મૂલ્યો પરથી સમાંતર શ્રેણીના પ્રથમ 4 પદ શોધો.", 
                    question_desc: "(i) a = 10, d = 10  અને  (ii) a = -2, d = 0",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>દાખલો (i): a = 10, d = 10</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a<sub>1</sub>)</b> = a = <b style='color:#1d4ed8;'>10</b><br>
                                <b>બીજું પદ (a<sub>2</sub>)</b> = a<sub>1</sub> + d = 10 + 10 = <b style='color:#1d4ed8;'>20</b><br>
                                <b>ત્રીજું પદ (a<sub>3</sub>)</b> = a<sub>2</sub> + d = 20 + 10 = <b style='color:#1d4ed8;'>30</b><br>
                                <b>ચોથું પદ (a<sub>4</sub>)</b> = a<sub>3</sub> + d = 30 + 10 = <b style='color:#1d4ed8;'>40</b><br>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> માંગેલ પ્રથમ 4 પદો: <b>10, 20, 30, 40</b> છે.</div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>દાખલો (ii): a = -2, d = 0</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(અહીં તફાવત 0 છે, એટલે કે પદમાં કોઈ ફેરફાર થશે જ નહિ!)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a<sub>1</sub>)</b> = a = <b style='color:#be123c;'>-2</b><br>
                                <b>બીજું પદ (a<sub>2</sub>)</b> = -2 + 0 = <b style='color:#be123c;'>-2</b><br>
                                <b>ત્રીજું પદ (a<sub>3</sub>)</b> = -2 + 0 = <b style='color:#be123c;'>-2</b><br>
                                <b>ચોથું પદ (a<sub>4</sub>)</b> = -2 + 0 = <b style='color:#be123c;'>-2</b><br>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> માંગેલ પ્રથમ 4 પદો: <b>-2, -2, -2, -2</b> છે.</div>
                        </div>
                    </div>
                    `
                },
                        
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 2(iii): a = 4, d = -3 પરથી સમાંતર શ્રેણીના પ્રથમ 4 પદ શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ગણતરીના સ્ટેપ્સ:</b><br>
                            અહીં d માઇનસમાં છે, તેથી પ્લસ-માઇનસ માઇનસ થશે (એટલે કે સંખ્યા ઘટતી જશે).
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a<sub>1</sub>)</b> = a = <b style='color:#1d4ed8;'>4</b><br>
                                <b>બીજું પદ (a<sub>2</sub>)</b> = a<sub>1</sub> + d = 4 + (-3) = 4 - 3 = <b style='color:#1d4ed8;'>1</b><br>
                                <b>ત્રીજું પદ (a<sub>3</sub>)</b> = a<sub>2</sub> + d = 1 + (-3) = 1 - 3 = <b style='color:#dc2626;'>-2</b><br>
                                <b>ચોથું પદ (a<sub>4</sub>)</b> = a<sub>3</sub> + d = -2 + (-3) = -2 - 3 = <b style='color:#dc2626;'>-5</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પ્રથમ 4 પદો: <b style='color:#1d4ed8;'>4, 1, -2, -5</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 2(iv): a = -1, d = 1/2 પરથી સમાંતર શ્રેણીના 4 પદ શોધો.", 
                    question_desc: "અપૂર્ણાંક અને લ.સા.અ. ની ટ્રીક વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 અપૂર્ણાંકના સરવાળાની દેશી ટ્રીક:</b><br>
                            જ્યારે એક સંખ્યા સાદી હોય અને બીજી છેદવાળી હોય, ત્યારે સાદી સંખ્યાનો છેદ સાથે ગુણાકાર કરી આખાના છેદમાં તે સંખ્યા મૂકી દેવી! <br>
                            જેમ કે: <b style='color:#dc2626;'>-1</b> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &nbsp;&#10551;&nbsp; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>-2</b> + 1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>ગણતરીના સ્ટેપ્સ:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a<sub>1</sub>)</b> = a = <b style='color:#dc2626;'>-1</b><br>
                                
                                <b>બીજું પદ (a<sub>2</sub>)</b> = a<sub>1</sub> + d = -1 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2 + 1</span><span>2</span></span> = <b style='color:#dc2626;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>-1</span><span>2</span></span></b><br>
                                
                                <b>ત્રીજું પદ (a<sub>3</sub>)</b> = a<sub>2</sub> + d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(અહીં છેદ સરખા છે, એટલે સીધો અંશનો સરવાળો)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1 + 1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>0</span><span>2</span></span> = <b style='color:#16a34a;'>0</b><br>
                                
                                <b>ચોથું પદ (a<sub>4</sub>)</b> = a<sub>3</sub> + d = 0 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પ્રથમ 4 પદો: <b style='color:#dc2626;'>-1</b>, <b style='color:#dc2626;'>-1/2</b>, <b style='color:#16a34a;'>0</b>, <b style='color:#1d4ed8;'>1/2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 2(v): a = -1.25, d = -0.25 પરથી સમાંતર શ્રેણીના 4 પદ શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>ગણતરીના સ્ટેપ્સ:</b><br>
                            અહીં બંને સંખ્યા માઇનસ છે, એટલે માઇનસ-માઇનસ નો સરવાળો થશે પણ નિશાની માઇનસની જ રહેશે!
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a<sub>1</sub>)</b> = a = <b style='color:#dc2626;'>-1.25</b><br>
                                
                                <b>બીજું પદ (a<sub>2</sub>)</b> = a<sub>1</sub> + d = -1.25 + (-0.25)<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1.25 - 0.25 = <b style='color:#dc2626;'>-1.50</b><br>
                                
                                <b>ત્રીજું પદ (a<sub>3</sub>)</b> = a<sub>2</sub> + d = -1.50 + (-0.25)<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1.50 - 0.25 = <b style='color:#dc2626;'>-1.75</b><br>
                                
                                <b>ચોથું પદ (a<sub>4</sub>)</b> = a<sub>3</sub> + d = -1.75 + (-0.25)<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1.75 - 0.25 = <b style='color:#dc2626;'>-2.00</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પ્રથમ 4 પદો: <b style='color:#dc2626;'>-1.25, -1.50, -1.75, -2.00</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ટ્રીક: પ્રથમ પદ (a) અને તફાવત (d) શોધવાની સૌથી સહેલી રીત",
                    answer: `
                    <div style='background-color:#fefce8; padding:15px; border-radius:8px; border:2px solid #eab308; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#854d0e; font-weight:bold; font-size:16px;'>1 માર્કના પ્રશ્નો માટે આ ટ્રીક ગોખી જ લો:</p>
                        <div style='background-color:#ffffff; border:1px dashed #fde047; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li><b style='color:#1d4ed8;'>પ્રથમ પદ (a):</b> શ્રેણીમાં જે <b>સૌથી પહેલો આંકડો</b> દેખાય, તે જ આપણું પ્રથમ પદ!</li>
                                <li><b style='color:#be123c;'>સામાન્ય તફાવત (d):</b> હંમેશા <b>બીજા પદમાંથી પહેલું પદ બાદ કરવું</b>. (ભલે પહેલું પદ મોટું હોય કે નાનું, નિયમ નહિ બદલવાનો!)<br>
                                સૂત્ર: <b style='background-color:#fee2e2; padding:2px 6px; border-radius:4px; color:#dc2626;'>d = a<sub>2</sub> - a<sub>1</sub></b></li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 3(i) & (ii): નીચેની સમાંતર શ્રેણી માટે પ્રથમ પદ અને સામાન્ય તફાવત શોધો.", 
                    question_desc: "(i) 3, 1, -1, -3,...  અને  (ii) -5, -1, 3, 7,...",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>દાખલો (i): 3, 1, -1, -3, ...</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(સૌથી પહેલી સંખ્યા 3 છે)</i></span><br>
                                <b>પ્રથમ પદ (a)</b> = <b style='color:#1d4ed8;'>3</b><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(બીજું પદ 1 છે, અને પહેલું પદ 3 છે)</i></span><br>
                                <b>સામાન્ય તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 1 - 3 = <b style='color:#be123c;'>-2</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a = <b style='color:#1d4ed8;'>3</b>, d = <b style='color:#be123c;'>-2</b></div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>દાખલો (ii): -5, -1, 3, 7, ...</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(આ દાખલામાં માઇનસની નિશાનીમાં ખાસ ધ્યાન રાખવું!)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a)</b> = <b style='color:#1d4ed8;'>-5</b><br><br>
                                <b>સામાન્ય તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1 - (-5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ માઇનસ પ્લસ 5 થશે)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= -1 + 5 = <b style='color:#be123c;'>4</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a = <b style='color:#1d4ed8;'>-5</b>, d = <b style='color:#be123c;'>4</b></div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 3(iii) & (iv): નીચેની સમાંતર શ્રેણી માટે પ્રથમ પદ અને સામાન્ય તફાવત શોધો.", 
                    question_desc: "(iii) 1/3, 5/3, 9/3,...  અને  (iv) 0.6, 1.7, 2.8,...",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>દાખલો (iii): 1/3, 5/3, 9/3, 13/3, ...</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(અહીં છેદ સરખા છે, એટલે બાદબાકી બહુ જ સહેલી થશે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a)</b> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>3</span></span></b><br><br>
                                
                                <b>સામાન્ય તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>3</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 - 1</span><span>3</span></span> = <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>4</span><span>3</span></span></b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a = <b style='color:#1d4ed8;'>1/3</b>, d = <b style='color:#be123c;'>4/3</b></div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>દાખલો (iv): 0.6, 1.7, 2.8, 3.9, ...</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(પોઈન્ટ વાળી બાદબાકી)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a)</b> = <b style='color:#1d4ed8;'>0.6</b><br><br>
                                <b>સામાન્ય તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 1.7 - 0.6 = <b style='color:#be123c;'>1.1</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a = <b style='color:#1d4ed8;'>0.6</b>, d = <b style='color:#be123c;'>1.1</b></div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ચાવી: શ્રેણી સમાંતર છે કે નહિ તે કેવી રીતે ચકાસવું?",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>કોઈપણ શ્રેણી સમાંતર છે કે નહિ તે જાણવા માટેની ટ્રીક:</p>
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li>આપણે <b>ઓછામાં ઓછી બે વખત સામાન્ય તફાવત (d)</b> શોધવો પડે.</li>
                                <li>પહેલા <b style='color:#1d4ed8;'>(a<sub>2</sub> - a<sub>1</sub>)</b> કરો, અને પછી <b style='color:#be123c;'>(a<sub>3</sub> - a<sub>2</sub>)</b> કરો.</li>
                                <li>જો <b>બંનેના જવાબ સરખા આવે</b>, તો જ તે સમાંતર શ્રેણી છે! અને પછી જ આગળના 3 પદો શોધવાના.</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(i): નીચેનામાંથી કઈ શ્રેણી સમાંતર શ્રેણી છે? 2, 4, 8, 16, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(પ્રથમ તફાવત)</i></span><br>
                                d = a<sub>2</sub> - a<sub>1</sub> = 4 - 2 = <b style='color:#1d4ed8;'>2</b><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(બીજો તફાવત)</i></span><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 8 - 4 = <b style='color:#dc2626;'>4</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b> છે. (કારણ કે 2 અને 4 સરખા નથી).<br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b> <span style='font-size:14px;'>(દાખલો અહી જ પૂરો!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 4(ii): ચકાસો અને પછીના 3 પદ શોધો: 2, 5/2, 3, 7/2, ...", 
                    question_desc: "અપૂર્ણાંકવાળો બોર્ડમાં પૂછાઈ શકે તેવો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો (લ.સા.અ. ની ટ્રીક)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span> - 2 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 - (2 &times; 2)</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 - 4</span><span>2</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br>
                                
                                d = a<sub>3</sub> - a<sub>2</sub> = 3 - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>(3 &times; 2) - 5</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>6 - 5</span><span>2</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>2</span></span></b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સરખો મળે છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = 1/2</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            આપણને 4 પદો આપેલા છે (છેલ્લું પદ 7/2 છે). હવે તેમાં d (1/2) ઉમેરતા જઈએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> a<sub>4</sub> + d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8</span><span>2</span></span> = <b style='color:#be123c;'>4</b><br>
                                
                                <b>6ઠ્ઠું પદ:</b> a<sub>5</sub> + d = 4 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>(4 &times; 2) + 1</span><span>2</span></span> = <b style='color:#be123c;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>9</span><span>2</span></span></b><br>
                                
                                <b>7મું પદ:</b> a<sub>6</sub> + d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10</span><span>2</span></span> = <b style='color:#be123c;'>5</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>4, 9/2, 5</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(iii): ચકાસો અને પછીના 3 પદ શોધો: -1.2, -3.2, -5.2, -7.2, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(માઇનસ વાળી સંખ્યાની બાદબાકી ધ્યાનથી કરવી)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = -3.2 - (-1.2) = -3.2 + 1.2 = <b style='color:#1d4ed8;'>-2.0</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = -5.2 - (-3.2) = -5.2 + 3.2 = <b style='color:#1d4ed8;'>-2.0</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સરખો છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = -2</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ -7.2 છે. હવે તેમાં d (-2) ઉમેરતા જઈએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> -7.2 + (-2) = <b style='color:#be123c;'>-9.2</b><br>
                                <b>6ઠ્ઠું પદ:</b> -9.2 + (-2) = <b style='color:#be123c;'>-11.2</b><br>
                                <b>7મું પદ:</b> -11.2 + (-2) = <b style='color:#be123c;'>-13.2</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>-9.2, -11.2, -13.2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(iv): ચકાસો અને પછીના 3 પદ શોધો: -10, -6, -2, 2, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = -6 - (-10) = -6 + 10 = <b style='color:#1d4ed8;'>4</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = -2 - (-6) = -2 + 6 = <b style='color:#1d4ed8;'>4</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સરખો છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = 4</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ 2 છે. હવે તેમાં d (4) ઉમેરતા જઈએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> 2 + 4 = <b style='color:#be123c;'>6</b><br>
                                <b>6ઠ્ઠું પદ:</b> 6 + 4 = <b style='color:#be123c;'>10</b><br>
                                <b>7મું પદ:</b> 10 + 4 = <b style='color:#be123c;'>14</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>6, 10, 14</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        

                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 4(v): ચકાસો અને પછીના 3 પદ શોધો: 3, 3 + &radic;2, 3 + 2&radic;2, 3 + 3&radic;2, ...", 
                    question_desc: "બોર્ડની પરીક્ષામાં સૌથી વધુ પૂછાતો અને વિદ્યાર્થીઓને અઘરો લાગતો દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વર્ગમૂળની બાદબાકી માટે દેશી ટ્રીક:</b><br>
                            &radic;2 ને એક 'વસ્તુ' સમજી લો (જેમ કે પેન). <br>
                            જો તમારી પાસે 2&radic;2 (બે પેન) હોય, અને તેમાંથી 1&radic;2 (એક પેન) બાદ કરો, તો માત્ર 1&radic;2 (એક પેન) વધે! બસ આટલું જ સહેલું છે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(બીજા પદમાંથી પહેલું પદ બાદ કરતાં)</i></span><br>
                                d = a<sub>2</sub> - a<sub>1</sub> = (3 + &radic;2) - 3 <br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+3 અને -3 ઉડી જશે, માત્ર &radic;2 વધશે)</i></span><br>
                                d = <b style='color:#1d4ed8;'>&radic;2</b><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(ત્રીજા પદમાંથી બીજું પદ બાદ કરતાં)</i></span><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = (3 + 2&radic;2) - (3 + &radic;2)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કૌંસ છૂટો પાડતા માઇનસની નિશાની અંદર લાગશે)</i></span><br>
                                d = 3 + 2&radic;2 - 3 - &radic;2<br>
                                d = (3 - 3) + (2&radic;2 - 1&radic;2)<br>
                                d = 0 + 1&radic;2 = <b style='color:#1d4ed8;'>&radic;2</b>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = &radic;2</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ (3 + 3&radic;2) છે. હવે તેમાં આપણે એક-એક &radic;2 ઉમેરતા જઈશું:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> (3 + 3&radic;2) + 1&radic;2 = <b style='color:#be123c;'>3 + 4&radic;2</b><br>
                                <b>6ઠ્ઠું પદ:</b> (3 + 4&radic;2) + 1&radic;2 = <b style='color:#be123c;'>3 + 5&radic;2</b><br>
                                <b>7મું પદ:</b> (3 + 5&radic;2) + 1&radic;2 = <b style='color:#be123c;'>3 + 6&radic;2</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>3 + 4&radic;2, 3 + 5&radic;2, 3 + 6&radic;2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(vi): ચકાસો: 0.2, 0.22, 0.222, 0.2222, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(પોઈન્ટવાળી બાદબાકી માટે 0.2 ને 0.20 ગણવા જેથી ભૂલ ન પડે!)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 0.22 - 0.20 = <b style='color:#dc2626;'>0.02</b><br>
                                <span style='color:#047857; font-size:14px;'><i>(તેવી જ રીતે 0.22 ને 0.220 ગણીએ)</i></span><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 0.222 - 0.220 = <b style='color:#dc2626;'>0.002</b><br>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં 0.02 અને 0.002 સરખા નથી. <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b><br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(vii): ચકાસો અને પછીના 3 પદ શોધો: 0, -4, -8, -12, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = -4 - 0 = <b style='color:#1d4ed8;'>-4</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = -8 - (-4) = -8 + 4 = <b style='color:#1d4ed8;'>-4</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = -4</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> -12 + (-4) = -12 - 4 = <b style='color:#be123c;'>-16</b><br>
                                <b>6ઠ્ઠું પદ:</b> -16 + (-4) = -16 - 4 = <b style='color:#be123c;'>-20</b><br>
                                <b>7મું પદ:</b> -20 + (-4) = -20 - 4 = <b style='color:#be123c;'>-24</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>-16, -20, -24</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 4(viii): ચકાસો અને પછીના 3 પદ શોધો: -1/2, -1/2, -1/2, -1/2, ...", 
                    question_desc: "સમાન પદોવાળી અચળ શ્રેણી (બોર્ડમાં ભૂલ કરાવવા પૂછાઈ શકે)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(અહીં બધા જ પદો સરખા છે, એટલે તફાવત ઝીરો જ આવશે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> - <span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span><span style='font-size:24px;'>)</span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <b style='color:#1d4ed8;'>0</b><br>
                                
                                d = a<sub>3</sub> - a<sub>2</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> - <span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span><span style='font-size:24px;'>)</span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <b style='color:#1d4ed8;'>0</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન (0) છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = 0</b> છે. (આને અચળ સમાંતર શ્રેણી કહેવાય).</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            અહીં તફાવત ઝીરો હોવાથી આગળના બધા જ પદો સરખા જ રહેશે.<br>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>-1/2, -1/2, -1/2</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(ix): ચકાસો કે સમાંતર શ્રેણી છે કે નહિ: 1, 3, 9, 27, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 3 - 1 = <b style='color:#1d4ed8;'>2</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 9 - 3 = <b style='color:#dc2626;'>6</b><br>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં 2 અને 6 સરખા નથી. <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b><br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(x): ચકાસો અને પછીના 3 પદ શોધો: a, 2a, 3a, 4a, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(અહીં a એટલે એક વસ્તુ સમજવી. 2a માંથી 1a જાય તો 1a વધે!)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 2a - a = <b style='color:#1d4ed8;'>a</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 3a - 2a = <b style='color:#1d4ed8;'>a</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = a</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ 4a છે. હવે તેમાં d (એટલે કે a) ઉમેરતા જઈએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> 4a + a = <b style='color:#be123c;'>5a</b><br>
                                <b>6ઠ્ઠું પદ:</b> 5a + a = <b style='color:#be123c;'>6a</b><br>
                                <b>7મું પદ:</b> 6a + a = <b style='color:#be123c;'>7a</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>5a, 6a, 7a</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(xi): ચકાસો કે સમાંતર શ્રેણી છે કે નહિ: a, a², a³, a⁴, ...", 
                    question_desc: "બોર્ડમાં ભૂલ કરાવતો દાખલો (ઘાત અને ગુણાકારનો ભેદ)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(નોંધ: ઘાતવાળા પદોની સીધી બાદબાકી ન થાય, સામાન્ય કાઢવું પડે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = a<sup>2</sup> - a = <b style='color:#1d4ed8;'>a(a - 1)</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = a<sup>3</sup> - a<sup>2</sup> = <b style='color:#dc2626;'>a<sup>2</sup>(a - 1)</b><br>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં <b>a(a - 1)</b> અને <b>a<sup>2</sup>(a - 1)</b> સરખા નથી. <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b><br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 4(xii): ચકાસો અને પછીના 3 પદ શોધો: &radic;2, &radic;8, &radic;18, &radic;32, ...", 
                    question_desc: "બોર્ડ પરીક્ષાનો ઑલ-ટાઈમ ફેવરિટ અને સુપર IMP વર્ગમૂળવાળો દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક (વર્ગમૂળને સાદું રૂપ આપો):</b><br>
                            સીધી બાદબાકી ન કરો! પહેલા વર્ગમૂળની અંદર છુપાયેલા પૂર્ણવર્ગ (4, 9, 16) ને બહાર કાઢો.<br>
                            • &radic;8 = &radic;(4 &times; 2) = <b>2&radic;2</b><br>
                            • &radic;18 = &radic;(9 &times; 2) = <b>3&radic;2</b><br>
                            • &radic;32 = &radic;(16 &times; 2) = <b>4&radic;2</b><br>
                            એટલે કે આપણી શ્રેણી વાસ્તવમાં <b>&radic;2, 2&radic;2, 3&radic;2, 4&radic;2...</b> છે! (હવે સાવ સહેલું થઈ ગયું ને?)
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 2&radic;2 - &radic;2 = <b style='color:#1d4ed8;'>&radic;2</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 3&radic;2 - 2&radic;2 = <b style='color:#1d4ed8;'>&radic;2</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = &radic;2</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ 4&radic;2 છે. હવે તેમાં d (&radic;2) ઉમેરતા જઈએ, અને તેને ફરીથી આખા વર્ગમૂળમાં ફેરવીએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> 4&radic;2 + &radic;2 = <b style='color:#be123c;'>5&radic;2</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(5 ને વર્ગમૂળમાં લઈ જતાં 25 થાય: &radic;(25 &times; 2) = <b style='color:#be123c;'>&radic;50</b>)</i></span><br><br>
                                
                                <b>6ઠ્ઠું પદ:</b> 5&radic;2 + &radic;2 = <b style='color:#be123c;'>6&radic;2</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(6 અંદર જાય તો 36 થાય: &radic;(36 &times; 2) = <b style='color:#be123c;'>&radic;72</b>)</i></span><br><br>
                                
                                <b>7મું પદ:</b> 6&radic;2 + &radic;2 = <b style='color:#be123c;'>7&radic;2</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(7 અંદર જાય તો 49 થાય: &radic;(49 &times; 2) = <b style='color:#be123c;'>&radic;98</b>)</i></span><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>&radic;50, &radic;72, &radic;98</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(xiii): ચકાસો કે સમાંતર શ્રેણી છે કે નહિ: &radic;3, &radic;6, &radic;9, &radic;12, ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(અહીં &radic;6 માંથી &radic;3 સીધા બાદ ન થાય, એટલે આપણે સામાન્ય કાઢવા પડશે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = &radic;6 - &radic;3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(&radic;6 એટલે &radic;3 &times; &radic;2. બંનેમાંથી &radic;3 સામાન્ય કાઢતા)</i></span><br>
                                d = <b style='color:#1d4ed8;'>&radic;3(&radic;2 - 1)</b><br><br>
                                
                                d = a<sub>3</sub> - a<sub>2</sub> = &radic;9 - &radic;6<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(&radic;9 = 3 થાય. અને 3 એટલે &radic;3 &times; &radic;3)</i></span><br>
                                d = 3 - &radic;6 = <b style='color:#dc2626;'>&radic;3(&radic;3 - &radic;2)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં બંને તફાવત અલગ-અલગ છે. <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b><br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.1 પ્રશ્ન 4(xiv): ચકાસો કે સમાંતર શ્રેણી છે કે નહિ: 1², 3², 5², 7², ...", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક:</b><br>
                            જ્યારે પણ વર્ગ (Square) આપ્યો હોય, ત્યારે <b>પહેલા તેનો વર્ગ કરીને સાદી સંખ્યામાં ફેરવી દેવું!</b><br>
                            શ્રેણી 1<sup>2</sup>, 3<sup>2</sup>, 5<sup>2</sup>, 7<sup>2</sup>... વાસ્તવમાં <b>1, 9, 25, 49...</b> છે! (હવે બાદબાકી સહેલી થઈ જશે).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 9 - 1 = <b style='color:#1d4ed8;'>8</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 25 - 9 = <b style='color:#dc2626;'>16</b><br>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            અહીં 8 અને 16 સરખા નથી. <b>(a<sub>2</sub> - a<sub>1</sub>) &ne; (a<sub>3</sub> - a<sub>2</sub>)</b><br>
                            <div style='margin-top:5px; background-color:#fee2e2; padding:8px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c;'>તેથી, આપેલ શ્રેણી સમાંતર શ્રેણી નથી.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.1 પ્રશ્ન 4(xv): ચકાસો અને પછીના 3 પદ શોધો: 1², 5², 7², 73, ...", 
                    question_desc: "બોર્ડમાં ભૂલ કરાવતો અને સ્વાધ્યાયનો છેલ્લો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક:</b><br>
                            પહેલા વર્ગ છોડીને શ્રેણીને સાદી બનાવીએ: <br>
                            1<sup>2</sup> = 1, &nbsp; 5<sup>2</sup> = 25, &nbsp; 7<sup>2</sup> = 49, &nbsp; 73 (આને એમ જ રાખીશું).<br>
                            એટલે કે આપણી શ્રેણી <b>1, 25, 49, 73...</b> છે.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: તફાવત (d) ચકાસવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                d = a<sub>2</sub> - a<sub>1</sub> = 25 - 1 = <b style='color:#1d4ed8;'>24</b><br>
                                d = a<sub>3</sub> - a<sub>2</sub> = 49 - 25 = <b style='color:#1d4ed8;'>24</b><br>
                                d = a<sub>4</sub> - a<sub>3</sub> = 73 - 49 = <b style='color:#1d4ed8;'>24</b><br>
                            </div>
                            <span style='color:#047857; font-size:14px;'>અહીં તફાવત સમાન છે, તેથી <b>આ સમાંતર શ્રેણી છે</b> અને <b style='color:#1d4ed8;'>d = 24</b> છે.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પછીના 3 પદો શોધવા</b><br>
                            ચોથું પદ 73 છે. હવે તેમાં d (24) ઉમેરતા જઈએ:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>5મું પદ:</b> 73 + 24 = <b style='color:#be123c;'>97</b><br>
                                <b>6ઠ્ઠું પદ:</b> 97 + 24 = <b style='color:#be123c;'>121</b><br>
                                <b>7મું પદ:</b> 121 + 24 = <b style='color:#be123c;'>145</b><br>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> માંગેલ પછીના 3 પદો: <b style='color:#be123c;'>97, 121, 145</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                {
                    question: "🎯 માસ્ટર ચાવી: સમાંતર શ્રેણીનું n મું પદ શોધવાનું બ્રહ્માસ્ત્ર સૂત્ર!",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>આખા સ્વાધ્યાય 5.2 ના બધા જ દાખલા માત્ર આ એક જ સૂત્રથી સોલ્વ થઈ જશે:</p>
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:15px; border-radius:5px; text-align:center;'>
                            <b style='font-size:24px; color:#1d4ed8; background-color:#e0f2fe; padding:5px 15px; border-radius:8px;'><i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i></b>
                        </div>
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:10px; border-radius:5px; margin-top:10px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:16px; color:#0f172a;'>
                                <li><b style='color:#be123c;'><i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i></b> = શ્રેણીનું n મું પદ (અથવા <b>છેલ્લું પદ</b>)</li>
                                <li><b style='color:#16a34a;'><i style='font-family:"Times New Roman",serif;'>a</i></b> = પ્રથમ પદ (શરૂઆતનો આંકડો)</li>
                                <li><b style='color:#ea580c;'><i style='font-family:"Times New Roman",serif;'>n</i></b> = પદોની <b>સંખ્યા</b> (જેમ કે 5મું પદ, 10મું પદ)</li>
                                <li><b style='color:#8b5cf6;'><i style='font-family:"Times New Roman",serif;'>d</i></b> = સામાન્ય તફાવત (ગેપ)</li>
                            </ul>
                            <div style='margin-top:10px; font-size:14px; color:#64748b;'><i>(નોંધ: આ 4 માંથી કોઈપણ 3 ની કિંમત આપેલી હશે, અને આપણે ચોથી કિંમત શોધવાની છે!)</i></div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 1 (i & ii): સૂત્રની મદદથી ખાલી જગ્યા પૂરો.", 
                    question_desc: "(i) a=7, d=3, n=8 તો an શોધો. (ii) a=-18, n=10, an=0 તો d શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>દાખલો (i): a = 7, d = 3, n = 8, તો a<sub>n</sub> = ?</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(અહીં આપણે 8મું પદ શોધવાનું છે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>8</sub></i> = 7 + (8 - 1)3<br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>8</sub></i> = 7 + (7)3<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(પહેલા ગુણાકાર કરવાનો: 7 &times; 3 = 21)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>8</sub></i> = 7 + 21<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>a<sub>8</sub></i> = 28</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a<sub>n</sub> ની કિંમત <b style='color:#1d4ed8;'>28</b> મળશે.</div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>દાખલો (ii): a = -18, n = 10, a<sub>n</sub> = 0, તો d = ?</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(અહીં આપણે તફાવત d શોધવાનો છે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                0 = -18 + (10 - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                0 = -18 + 9<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-18 ને ડાબી બાજુ લાવતાં પ્લસ +18 થશે)</i></span><br>
                                18 = 9<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(9 ભાગાકારમાં જશે: 18 / 9 = 2)</i></span><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>d</i> = 2</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> d ની કિંમત <b style='color:#be123c;'>2</b> મળશે.</div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 1 (iii & iv): સૂત્રની મદદથી ખાલી જગ્યા પૂરો.", 
                    question_desc: "(iii) d=-3, n=18, an=-5 તો a શોધો. (iv) પોઈન્ટવાળો દાખલો n શોધો.",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>દાખલો (iii): d = -3, n = 18, a<sub>n</sub> = -5, તો a = ?</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(અહીં આપણે પ્રથમ પદ a શોધવાનું છે)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                -5 = <i style='font-family:"Times New Roman",serif;'>a</i> + (18 - 1)(-3)<br>
                                -5 = <i style='font-family:"Times New Roman",serif;'>a</i> + (17)(-3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(પ્લસ-માઇનસ માઇનસ થશે: 17 &times; -3 = -51)</i></span><br>
                                -5 = <i style='font-family:"Times New Roman",serif;'>a</i> - 51<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-51 ને ડાબી બાજુ લાવતાં પ્લસ +51 થશે)</i></span><br>
                                -5 + 51 = <i style='font-family:"Times New Roman",serif;'>a</i><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>a</i> = 46</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a ની કિંમત <b style='color:#1d4ed8;'>46</b> મળશે.</div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>દાખલો (iv): a = -18.9, d = 2.5, a<sub>n</sub> = 3.6, તો n = ?</b><br>
                            <span style='color:#64748b; font-size:14px;'><i>(બોર્ડમાં પૂછાવા લાયક પોઈન્ટવાળી ગણતરી)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                3.6 = -18.9 + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(2.5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(સૌથી પહેલા -18.9 ને ડાબી બાજુ લાવીએ એટલે પ્લસ થશે)</i></span><br>
                                3.6 + 18.9 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(2.5)<br>
                                22.5 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(2.5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(હવે 2.5 છેદમાં એટલે કે ભાગાકારમાં જશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22.5</span><span>2.5</span></span> = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(બંનેમાં એક પોઈન્ટ છે, એટલે 225 / 25 કરીએ તો 9 આવે)</i></span><br>
                                9 = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-1 ડાબી બાજુ આવતા પ્લસ 1 થશે)</i></span><br>
                                9 + 1 = <i style='font-family:"Times New Roman",serif;'>n</i><br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>n</i> = 10</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> n ની કિંમત <b style='color:#be123c;'>10</b> મળશે.</div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 1 (v): a = 3.5, d = 0, n = 105, તો an શોધો.", 
                    question_desc: "બોર્ડમાં ભૂલ કરાવવા માટેનો ટ્રિકી (Trick) દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર શોર્ટકટ:</b><br>
                            જ્યારે પણ તફાવત <b>d = 0</b> હોય, ત્યારે શ્રેણીના બધા જ પદો સરખા હોય છે! એટલે ગણતરી કર્યા વગર જ કહી શકાય કે 105મું પદ પણ <b>3.5</b> જ હશે! ચાલો ગણતરી કરીને સાબિત કરીએ.
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ગણતરીના સ્ટેપ્સ:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>105</sub></i> = 3.5 + (105 - 1)(0)<br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>105</sub></i> = 3.5 + (104)(0)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કોઈપણ સંખ્યાનો 0 સાથે ગુણાકાર 0 જ થાય)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>105</sub></i> = 3.5 + 0<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>a<sub>105</sub></i> = 3.5</b>
                            </div>
                            <div style='margin-top:10px;'><b>જવાબ:</b> a<sub>n</sub> ની કિંમત <b style='color:#1d4ed8;'>3.5</b> મળશે.</div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 2(i): સમાંતર શ્રેણી 10, 7, 4, ... નું 30 મું પદ શોધો.", 
                    question_desc: "બોર્ડની પરીક્ષામાં સૌથી વધુ પૂછાતો 1 માર્કનો MCQ",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2024 ની નવી પેપર સ્ટાઈલ મુજબ 1 માર્કના હેતુલક્ષીમાં પૂછાયેલ મોસ્ટ IMP દાખલો!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>10</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(બીજા પદમાંથી પહેલું પદ બાદ કરતાં)</i></span><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = 7 - 10 = <b style='color:#dc2626;'>-3</b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>30</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>30</sub></i> = 10 + (30 - 1)(-3)<br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>30</sub></i> = 10 + (29)(-3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(પ્લસ-માઇનસ માઇનસ થશે: 29 &times; -3 = -87)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>30</sub></i> = 10 - 87<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>a<sub>30</sub></i> = -77</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> આ સમાંતર શ્રેણીનું 30મું પદ <b style='color:#be123c;'>-77</b> હશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 2(ii): સમાંતર શ્રેણી -3, -1/2, 2, ... નું 11 મું પદ શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>-3</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(બીજા પદમાંથી પહેલું પદ બાદ કરીએ. માઇનસ માઇનસ પ્લસ થશે!)</i></span><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> - (-3) = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>2</span></span> + 3 = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1 + 6</span><span>2</span></span> = <b style='color:#dc2626;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>5</span><span>2</span></span></b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>11</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>11</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (11 - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>11</sub></i> = -3 + (10)<span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(10 અને 2 નો છેદ ઉડશે: 2 પંચા 10)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>11</sub></i> = -3 + (5 &times; 5)<br>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>11</sub></i> = -3 + 25<br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>a<sub>11</sub></i> = 22</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 માસ્ટર ટ્રીક: ખાલી બોક્સ [ ] વાળા દાખલા કેવી રીતે ગણવા?",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>બોક્સ વાળા દાખલા માટેની સાવ દેશી ટ્રીક ગોખી લો:</p>
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:10px; border-radius:5px;'>
                            <ul style='line-height:2.2; margin-bottom:0; font-size:15px; color:#0f172a;'>
                                <li>જે બોક્સમાં <b>સંખ્યા આપેલી હોય</b>, તેનું સીધું સમીકરણ બનાવી લો!</li>
                                <li><span style='color:#1d4ed8;'>ઉદાહરણ:</span> જો <b>ત્રીજા</b> બોક્સમાં 26 લખ્યું હોય, તો તેનું સમીકરણ <b>a + 2d = 26</b> બને.</li>
                                <li>જો <b>પાંચમા</b> બોક્સમાં 50 લખ્યું હોય, તો સમીકરણ <b>a + 4d = 50</b> બને. (હંમેશા d નો આંકડો પદ કરતાં 1 નાનો લેવો).</li>
                                <li>પછી આ સમીકરણોને <b>લોપની રીત (પ્રકરણ 3)</b> થી ઉકેલી a અને d શોધી લો એટલે બધા બોક્સ ભરાઈ જશે!</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 3(i): સમાંતર શ્રેણીમાં ખાલી ખાનાના પદ શોધો: 2, [ ], 26", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: આપેલ માહિતી પરથી સમીકરણ</b><br>
                            અહીં પહેલું પદ આપેલ છે: <b style='color:#1d4ed8;'>a = 2</b><br>
                            અને ત્રીજું પદ 26 આપેલ છે: <b style='color:#be123c;'>a<sub>3</sub> = 26</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(ત્રીજા પદનું સૂત્ર a + 2d વાપરીએ)</i></span><br>
                                a + 2d = 26<br>
                                <span style='color:#047857; font-size:14px;'><i>(આમાં a = 2 મૂકી દઈએ)</i></span><br>
                                2 + 2d = 26<br>
                                2d = 26 - 2<br>
                                2d = 24<br>
                                d = 24 / 2 &nbsp;&#10551;&nbsp; <b style='color:#16a34a;'>d = 12</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ખાલી બોક્સ (બીજું પદ) શોધવું</b><br>
                            બીજા પદનું સૂત્ર: a<sub>2</sub> = a + d<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>2</sub> = 2 + 12 = <b style='color:#1d4ed8;'>14</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> શ્રેણી આ મુજબ બનશે:<br>
                                2, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>14</span>, &nbsp; 26
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 3(ii): ખાલી ખાનાના પદ શોધો: [ ], 13, [ ], 3", 
                    question_desc: "બોર્ડ પરીક્ષા માટે 2 માર્ક્સનો સૌથી ફેવરિટ દાખલો (લોપની રીત)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2025 ની પેપર સ્ટાઈલમાં 2 માર્ક્સમાં 100% પૂછાવા લાયક!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            અહીં <b>બીજું પદ 13</b> છે &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8; background-color:#e0f2fe; padding:2px 6px;'>a + d = 13</b> &nbsp; ...(સમીકરણ 1)<br>
                            અહીં <b>ચોથું પદ 3</b> છે &nbsp;&#10551;&nbsp; <b style='color:#be123c; background-color:#fee2e2; padding:2px 6px;'>a + 3d = 3</b> &nbsp; ...(સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d શોધવો</b><br>
                            સમીકરણ 1 માંથી 2 ની બાદબાકી કરતાં (નિશાની બદલવી):
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + d = 13<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 3d = <b style='color:#dc2626;'>-</b> 3</u><br>
                                <span style='color:#047857; font-size:14px;'><i>(a અને -a ઉડી જશે. d માંથી 3d જાય તો -2d વધે)</i></span><br>
                                &nbsp;&nbsp;&nbsp; -2d = 10<br>
                                &nbsp;&nbsp;&nbsp; d = 10 / -2 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = -5</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: a અને ખાલી બોક્સ શોધવા</b><br>
                            d = -5 ને સમીકરણ 1 માં મૂકતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                a + d = 13<br>
                                a + (-5) = 13<br>
                                a - 5 = 13<br>
                                a = 13 + 5 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = 18</b> (આ આપણું પહેલું બોક્સ મળી ગયું!)<br><br>
                                
                                <b>ત્રીજું બોક્સ (a<sub>3</sub>) શોધવા:</b><br>
                                a<sub>3</sub> = a + 2d = 18 + 2(-5) = 18 - 10 = <b style='color:#1d4ed8;'>8</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> શ્રેણી આ મુજબ બનશે:<br>
                                <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#1d4ed8; background-color:#eff6ff;'>18</span>, &nbsp; 13, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#1d4ed8; background-color:#eff6ff;'>8</span>, &nbsp; 3
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 3(iii): ખાલી ખાનાના પદ શોધો: 5, [ ], [ ], 9 1/2", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ બનાવવું</b><br>
                            અહીં પહેલું પદ આપેલ છે: <b style='color:#1d4ed8;'>a = 5</b><br>
                            અને <b>ચોથું પદ</b> મિશ્ર અપૂર્ણાંકમાં 9&frac12; છે. (9&frac12; એટલે <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>(9 &times; 2) + 1</span><span>2</span></span> = 19/2 થાય).<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                a<sub>4</sub> = 19/2<br>
                                a + 3d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>19</span><span>2</span></span><br>
                                5 + 3d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>19</span><span>2</span></span><br>
                                3d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>19</span><span>2</span></span> - 5<br>
                                <span style='color:#047857; font-size:14px;'><i>(5 નો 2 સાથે લ.સા.અ. લેતાં)</i></span><br>
                                3d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>19 - 10</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>2</span></span><br>
                                <span style='color:#047857; font-size:14px;'><i>(3 ભાગાકારમાં એટલે કે 2 ની જોડે નીચે જશે)</i></span><br>
                                d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>2 &times; 3</span></span> &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ખાલી બોક્સ શોધવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>બીજું બોક્સ (a<sub>2</sub>):</b> a + d = 5 + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10 + 3</span><span>2</span></span> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13</span><span>2</span></span> (અથવા 6&frac12;)</b><br>
                                
                                <b>ત્રીજું બોક્સ (a<sub>3</sub>):</b> a<sub>2</sub> + d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>13</span><span>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>16</span><span>2</span></span> = <b style='color:#1d4ed8;'>8</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> શ્રેણી આ મુજબ બનશે:<br>
                                5, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>6&frac12;</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>8</span>, &nbsp; 9&frac12;
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 3(iv): ખાલી ખાનાના પદ શોધો: -4, [ ], [ ], [ ], [ ], 6", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: આપેલ માહિતી પરથી સમીકરણ</b><br>
                            અહીં પહેલું પદ આપેલ છે: <b style='color:#1d4ed8;'>a = -4</b><br>
                            અને <b>છઠ્ઠું પદ</b> 6 આપેલ છે: <b style='color:#be123c;'>a<sub>6</sub> = 6</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(છઠ્ઠા પદનું સૂત્ર a + 5d વાપરીએ)</i></span><br>
                                a + 5d = 6<br>
                                <span style='color:#047857; font-size:14px;'><i>(આમાં a = -4 મૂકી દઈએ)</i></span><br>
                                -4 + 5d = 6<br>
                                <span style='color:#047857; font-size:14px;'><i>(-4 જમણી બાજુ જતાં પ્લસ થશે)</i></span><br>
                                5d = 6 + 4<br>
                                5d = 10<br>
                                d = 10 / 5 &nbsp;&#10551;&nbsp; <b style='color:#16a34a;'>d = 2</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 4 ખાલી બોક્સ શોધવા</b><br>
                            આપણને d = 2 મળી ગયો છે, એટલે કે પદમાં 2 ઉમેરતા જવાના છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>બીજું બોક્સ (a<sub>2</sub>):</b> a + d = -4 + 2 = <b style='color:#1d4ed8;'>-2</b><br>
                                <b>ત્રીજું બોક્સ (a<sub>3</sub>):</b> a<sub>2</sub> + d = -2 + 2 = <b style='color:#1d4ed8;'>0</b><br>
                                <b>ચોથું બોક્સ (a<sub>4</sub>):</b> a<sub>3</sub> + d = 0 + 2 = <b style='color:#1d4ed8;'>2</b><br>
                                <b>પાંચમું બોક્સ (a<sub>5</sub>):</b> a<sub>4</sub> + d = 2 + 2 = <b style='color:#1d4ed8;'>4</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> શ્રેણી આ મુજબ બનશે:<br>
                                -4, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>-2</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>0</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>2</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>4</span>, &nbsp; 6
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 3(v): ખાલી ખાનાના પદ શોધો: [ ], 38, [ ], [ ], [ ], -22", 
                    question_desc: "લોપની રીતવાળો અને બોર્ડમાં સૌથી વધુ પૂછાતો મોસ્ટ IMP દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024-25 ની બ્લુપ્રિન્ટ મુજબ 3 માર્ક્સમાં પૂછાવા માટે સૌથી ફેવરિટ!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણો બનાવવા</b><br>
                            અહીં <b>બીજું પદ 38</b> છે &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8; background-color:#e0f2fe; padding:2px 6px;'>a + d = 38</b> &nbsp; ...(સમીકરણ 1)<br>
                            અહીં <b>છઠ્ઠું પદ -22</b> છે &nbsp;&#10551;&nbsp; <b style='color:#be123c; background-color:#fee2e2; padding:2px 6px;'>a + 5d = -22</b> &nbsp; ...(સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d શોધવો</b><br>
                            સમીકરણ 1 માંથી 2 ની બાદબાકી કરતાં (નીચેના પદોની નિશાની બદલવી):
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + d = 38<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 5d = <b style='color:#16a34a;'>+</b> 22</u> &nbsp; <span style='color:#64748b; font-size:14px;'><i>(-22 નું +22 થઈ ગયું)</i></span><br>
                                <span style='color:#047857; font-size:14px;'><i>(a ઉડી જશે. 1d માંથી 5d જાય તો -4d વધે)</i></span><br>
                                &nbsp;&nbsp;&nbsp; -4d = 60<br>
                                &nbsp;&nbsp;&nbsp; d = 60 / -4 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = -15</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: a અને ખાલી બોક્સ શોધવા</b><br>
                            d = -15 ને સમીકરણ 1 માં મૂકતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                a + d = 38<br>
                                a + (-15) = 38<br>
                                a - 15 = 38<br>
                                a = 38 + 15 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = 53</b> (આ આપણું પહેલું બોક્સ મળી ગયું!)<br><br>
                                
                                <b>બાકીના બોક્સ શોધવા (d = -15 ઉમેરતા જાવ):</b><br>
                                <b>ત્રીજું બોક્સ (a<sub>3</sub>):</b> a<sub>2</sub> + d = 38 - 15 = <b style='color:#1d4ed8;'>23</b><br>
                                <b>ચોથું બોક્સ (a<sub>4</sub>):</b> a<sub>3</sub> + d = 23 - 15 = <b style='color:#1d4ed8;'>8</b><br>
                                <b>પાંચમું બોક્સ (a<sub>5</sub>):</b> a<sub>4</sub> + d = 8 - 15 = <b style='color:#1d4ed8;'>-7</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> શ્રેણી આ મુજબ બનશે:<br>
                                <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>53</span>, &nbsp; 38, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>23</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>8</span>, &nbsp; <span style='border:2px solid #0f172a; padding:4px 12px; display:inline-block; font-weight:bold; color:#be123c; background-color:#fef2f2;'>-7</span>, &nbsp; -22
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 4: સમાંતર શ્રેણી 3, 8, 13, 18, ... નું કેટલામું પદ 78 થાય?", 
                    question_desc: "n શોધવાવાળો બોર્ડનો સૌથી ફેવરિટ અને બેઝિક ગણિત માટેનો IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <p style='color:#0f172a; line-height:1.6;'><b>રકમ:</b> સમાંતર શ્રેણી 3, 8, 13, 18, ... નું કેટલામું પદ 78 થાય?</p>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 માં બેઝિક ગણિતમાં 2 માર્ક્સ માટે પૂછાયેલ મોસ્ટ IMP દાખલો!</b>
                        </div>

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક:</b><br>
                            જ્યારે રકમમાં <b>"કેટલામું પદ"</b> પૂછ્યું હોય, ત્યારે સમજી લેવું કે આપણે <b>n શોધવાનો છે</b>. અને જે આંકડો (જેમ કે 78) આપ્યો હોય, તેને <b>a<sub>n</sub> (છેલ્લું પદ)</b> ધારી લેવું!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને a<sub>n</sub> નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>3</b><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = 8 - 3 = <b style='color:#dc2626;'>5</b><br>
                                <b>અંતિમ પદ (<i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i>)</b> = <b style='color:#16a34a;'>78</b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b>?</b> (આપણે શોધવાનું છે)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                78 = 3 + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(પહેલા 3 ને ડાબી બાજુ લાવો એટલે માઇનસ થશે)</i></span><br>
                                78 - 3 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(5)<br>
                                75 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(5)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(હવે 5 ગુણાકારમાંથી ભાગાકારમાં જશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>75</span><span>5</span></span> = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                15 = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-1 ડાબી બાજુ આવે એટલે પ્લસ 1 થશે)</i></span><br>
                                15 + 1 = <i style='font-family:"Times New Roman",serif;'>n</i><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>n</i> = 16</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                આપેલ સમાંતર શ્રેણીનું <b>16 મું પદ 78 થશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 5(i): નીચેની સમાંતર શ્રેણીમાં પદોની સંખ્યા શોધો: 7, 13, 19, ..., 205", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક:</b><br>
                            જ્યારે પણ શ્રેણીની <b>સૌથી છેલ્લી સંખ્યા (જેમ કે 205)</b> આપેલી હોય, ત્યારે તેને <b>a<sub>n</sub> (અંતિમ પદ)</b> ધારી લેવું અને <b>n (પદોની સંખ્યા)</b> શોધવો!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને a<sub>n</sub> નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (a)</b> = <b style='color:#1d4ed8;'>7</b><br>
                                <b>તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub> = 13 - 7 = <b style='color:#dc2626;'>6</b><br>
                                <b>અંતિમ પદ (a<sub>n</sub>)</b> = <b style='color:#16a34a;'>205</b><br>
                                <b>પદોની સંખ્યા (n)</b> = <b>?</b> 
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                205 = 7 + (n - 1)(6)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+7 ને ડાબી બાજુ લાવો એટલે માઇનસ થશે)</i></span><br>
                                205 - 7 = (n - 1)(6)<br>
                                198 = (n - 1)(6)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(હવે 6 ગુણાકારમાંથી ભાગાકારમાં જશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>198</span><span>6</span></span> = n - 1<br>
                                33 = n - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-1 ડાબી બાજુ આવે એટલે પ્લસ 1 થશે)</i></span><br>
                                33 + 1 = n<br>
                                <b style='font-size:22px; color:#1d4ed8;'>n = 34</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ સમાંતર શ્રેણીમાં <b>કુલ 34 પદો છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 5(ii): પદોની સંખ્યા શોધો: 18, 15 1/2, 13, ..., -47", 
                    question_desc: "અપૂર્ણાંક વાળી બાદબાકીનો 100% IMP અને ભૂલ કરાવતો દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની બ્લુપ્રિન્ટ મુજબ સ્ટાન્ડર્ડ ગણિત માટે 2 માર્ક્સનો ફેવરિટ દાખલો!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને a<sub>n</sub> નક્કી કરવા (લ.સા.અ. ની ટ્રીક)</b><br>
                            અહીં <b>a = 18</b> અને છેલ્લું પદ <b>a<sub>n</sub> = -47</b> છે.<br>
                            બીજું પદ મિશ્ર અપૂર્ણાંકમાં 15&frac12; છે. (એટલે કે 31/2).<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>તફાવત (d)</b> = a<sub>2</sub> - a<sub>1</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>31</span><span>2</span></span> - 18<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(18 નો 2 સાથે ગુણાકાર કરી લ.સા.અ. લેતાં)</i></span><br>
                                d = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>31 - 36</span><span>2</span></span> = <b style='color:#dc2626;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>-5</span><span>2</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                -47 = 18 + (n - 1)<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-5</span><span>2</span></span><span style='font-size:24px;'>)</span><br>
                                -47 - 18 = (n - 1)<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-5</span><span>2</span></span><span style='font-size:24px;'>)</span><br>
                                -65 = (n - 1)<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-5</span><span>2</span></span><span style='font-size:24px;'>)</span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(હવે -5/2 ને ડાબી બાજુ લાવીશું તો તે ઉલટાઈને 2/-5 થઈ જશે!)</i></span><br>
                                -65 &times; <span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>-5</span></span><span style='font-size:24px;'>)</span> = n - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(માઇનસ માઇનસ પ્લસ થશે અને 13 પંચા 65 એટલે છેદ ઉડશે)</i></span><br>
                                13 &times; 2 = n - 1<br>
                                26 = n - 1<br>
                                <b style='font-size:22px; color:#1d4ed8;'>n = 27</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ સમાંતર શ્રેણીમાં <b>કુલ 27 પદો છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 6: શું સમાંતર શ્રેણી 11, 8, 5, 2... નું કોઈ પદ -150 હોઈ શકે? શા માટે?", 
                    question_desc: "બોર્ડમાં પૂછાતો 'રોલ નંબર' ની દેશી ટ્રીક વાળો સુપર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 "રોલ નંબર વાળી દેશી ટ્રીક" સમજો:</b><br>
                            શ્રેણીમાં પદનો ક્રમ એટલે કે <b>n</b> એ ક્લાસના <b>રોલ નંબર</b> જેવો હોય છે. કોઈ વિદ્યાર્થીનો રોલ નંબર 1, 2, 3... હોઈ શકે, પણ કોઈનો રોલ નંબર <b>5.5 (અપૂર્ણાંક) કે માઇનસમાં હોઈ શકે નહિ!</b><br>
                            તેથી જો આપણો જવાબ <b>n અપૂર્ણાંકમાં આવે</b>, તો સમજી જવાનું કે આ સંખ્યા આ શ્રેણીમાં બેસી જ ન શકે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: ધારી લઈએ કે -150 છેલ્લું પદ છે</b><br>
                            આપણે ચેક કરવું છે એટલે ધારો કે <b>a<sub>n</sub> = -150</b> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>a</b> = <b style='color:#1d4ed8;'>11</b><br>
                                <b>d</b> = 8 - 11 = <b style='color:#dc2626;'>-3</b><br>
                                <b>a<sub>n</sub></b> = <b style='color:#16a34a;'>-150</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: n ની કિંમત શોધીએ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                -150 = 11 + (n - 1)(-3)<br>
                                -150 - 11 = (n - 1)(-3)<br>
                                -161 = (n - 1)(-3)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(-3 ભાગાકારમાં જશે. માઇનસ માઇનસ પ્લસ થશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>161</span><span>3</span></span> = n - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(161 ને 3 વડે નિશેષ ભાગી શકાય નહિ!)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>161</span><span>3</span></span> + 1 = n<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>161 + 3</span><span>3</span></span> = n &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#be123c;'>n = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>164</span><span>3</span></span></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ચકાસણી અને અંતિમ જવાબ</b><br>
                            અહીં <b>n = 164/3</b> એ પૂર્ણાંક સંખ્યા નથી (અપૂર્ણાંક છે).<br>
                            શ્રેણીમાં પદનો ક્રમાંક (n) હંમેશા <b>ધન પૂર્ણાંક (1, 2, 3...)</b> જ હોવો જોઈએ.
                            
                            <div style='margin-top:10px; background-color:#fee2e2; padding:10px; border-radius:4px; border-left:4px solid #ef4444;'>
                                <b style='color:#b91c1c; font-size:18px;'>અંતિમ જવાબ:</b> <br>
                                ના, <b>-150 એ આપેલ સમાંતર શ્રેણીનું કોઈ પદ હોઈ શકે નહિ!</b>
                            </div>
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 7: સમાંતર શ્રેણીનું 11મું પદ 38 અને 16મું પદ 73 હોય તો તેનું 31મું પદ શોધો.", 
                    question_desc: "બોર્ડમાં 3 માર્ક્સ માટે પૂછાતો શિક્ષકોનો સૌથી ફેવરિટ દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: માર્ચ 2024 અને 2025 ની પેપર સ્ટાઈલમાં 3 માર્ક્સ માટે મોસ્ટ IMP!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બે સમીકરણો બનાવવા</b><br>
                            અહીં <b>11મું પદ 38</b> છે &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8; background-color:#e0f2fe; padding:2px 6px;'>a + 10d = 38</b> &nbsp; ...(સમીકરણ 1)<br>
                            અહીં <b>16મું પદ 73</b> છે &nbsp;&#10551;&nbsp; <b style='color:#be123c; background-color:#fee2e2; padding:2px 6px;'>a + 15d = 73</b> &nbsp; ...(સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d શોધવો</b><br>
                            સમીકરણ 1 માંથી 2 ની બાદબાકી કરતાં (નીચેના પદોની નિશાની બદલવી):
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + 10d = 38<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 15d = <b style='color:#dc2626;'>-</b> 73</u><br>
                                <span style='color:#047857; font-size:14px;'><i>(a ઉડી જશે. 10 માંથી 15 જાય તો -5 વધે, અને 38 માંથી 73 જાય તો -35 વધે)</i></span><br>
                                &nbsp;&nbsp;&nbsp; -5d = -35<br>
                                &nbsp;&nbsp;&nbsp; d = -35 / -5 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = 7</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: સમીકરણ 1 માં d મૂકી a શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                a + 10d = 38<br>
                                a + 10(7) = 38<br>
                                a + 70 = 38<br>
                                <span style='color:#047857; font-size:14px;'><i>(+70 જમણી બાજુ જતાં માઇનસ થશે)</i></span><br>
                                a = 38 - 70 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = -32</b>
                            </div>
                        </div>

                        <div style='background-color:#fdf4ff; border-left:4px solid #c026d3; padding:10px;'>
                            <b style='color:#86198f; font-size:16px;'>સ્ટેપ 4: 31મું પદ શોધવું</b><br>
                            હવે આપણી પાસે a અને d બંને છે. 31માં પદનું સૂત્ર <b style='color:#16a34a;'>a + 30d</b> થાય.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fae8ff; padding:10px; border-radius:5px;'>
                                a<sub>31</sub> = a + 30d<br>
                                a<sub>31</sub> = (-32) + 30(7)<br>
                                a<sub>31</sub> = -32 + 210<br>
                                <span style='color:#047857; font-size:14px;'><i>(210 માંથી 32 બાદ કરવાના)</i></span><br>
                                <b style='font-size:22px; color:#16a34a;'>a<sub>31</sub> = 178</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> શ્રેણીનું <b>31મું પદ 178 હશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 8: સમાંતર શ્રેણીમાં 50 પદ છે. જો ત્રીજું પદ 12 અને છેલ્લું પદ 106 હોય તો 29મું પદ શોધો.", 
                    question_desc: "છેલ્લા પદવાળી ટ્રીકનો ઉપયોગ કરી 3 માર્ક્સ મેળવો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 માસ્ટર ટ્રીક:</b><br>
                            રકમમાં કહ્યું છે કે <b>કુલ 50 પદ છે</b>, અને <b>છેલ્લું પદ 106 છે</b>. <br>
                            આનો સીધો અર્થ એ જ થયો કે <b>50મું પદ 106 છે!</b> (બસ આટલું પકડાઈ ગયું એટલે દાખલો પૂરો).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બે સમીકરણો બનાવવા</b><br>
                            અહીં <b>ત્રીજું પદ 12</b> છે &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8; background-color:#e0f2fe; padding:2px 6px;'>a + 2d = 12</b> &nbsp; ...(સમીકરણ 1)<br>
                            અહીં <b>50મું પદ 106</b> છે &nbsp;&#10551;&nbsp; <b style='color:#be123c; background-color:#fee2e2; padding:2px 6px;'>a + 49d = 106</b> &nbsp; ...(સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d અને a શોધવા</b><br>
                            સમીકરણ 1 માંથી 2 ની બાદબાકી કરતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + 2d = 12<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 49d = <b style='color:#dc2626;'>-</b> 106</u><br>
                                <span style='color:#047857; font-size:14px;'><i>(a ઉડી જશે. 2 માંથી 49 જાય તો -47 વધે)</i></span><br>
                                &nbsp;&nbsp;&nbsp; -47d = -94<br>
                                &nbsp;&nbsp;&nbsp; d = -94 / -47 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = 2</b>
                            </div><br>
                            <b>સમીકરણ 1 માં d = 2 મૂકતાં:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a + 2(2) = 12<br>
                                a + 4 = 12<br>
                                a = 12 - 4 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = 8</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: 29મું પદ શોધવું</b><br>
                            29માં પદનું સૂત્ર <b style='color:#16a34a;'>a + 28d</b> થાય.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                a<sub>29</sub> = a + 28d<br>
                                a<sub>29</sub> = (8) + 28(2)<br>
                                a<sub>29</sub> = 8 + 56<br>
                                <b style='font-size:22px; color:#16a34a;'>a<sub>29</sub> = 64</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> શ્રેણીનું <b>29મું પદ 64 હશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 9: જો સમાંતર શ્રેણીનું ત્રીજું અને નવમું પદ અનુક્રમે 4 અને -8 હોય, તો કયું પદ 0 હશે?", 
                    question_desc: "કયું પદ 0 હશે? વાળો મોસ્ટ IMP બોર્ડનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બે સમીકરણો બનાવવા</b><br>
                            અહીં <b>ત્રીજું પદ 4</b> છે &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8; background-color:#e0f2fe; padding:2px 6px;'>a + 2d = 4</b> &nbsp; ...(સમીકરણ 1)<br>
                            અહીં <b>નવમું પદ -8</b> છે &nbsp;&#10551;&nbsp; <b style='color:#be123c; background-color:#fee2e2; padding:2px 6px;'>a + 8d = -8</b> &nbsp; ...(સમીકરણ 2)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d અને a શોધવા</b><br>
                            સમીકરણ 1 માંથી 2 ની બાદબાકી કરતાં (નિશાની બદલતા -8 નું +8 થશે):<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + 2d = 4<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 8d = <b style='color:#16a34a;'>+</b> 8</u><br>
                                &nbsp;&nbsp;&nbsp; -6d = 12<br>
                                &nbsp;&nbsp;&nbsp; d = 12 / -6 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = -2</b>
                            </div><br>
                            <b>સમીકરણ 1 માં d = -2 મૂકતાં:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a + 2(-2) = 4<br>
                                a - 4 = 4<br>
                                a = 4 + 4 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = 8</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કયું પદ 0 હશે તે (n) શોધવો</b><br>
                            ધારો કે n મું પદ 0 છે. એટલે કે <b>a<sub>n</sub> = 0</b> લેતાં.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                0 = 8 + (n - 1)(-2)<br>
                                <span style='color:#047857; font-size:14px;'><i>(+8 ડાબી બાજુ આવે એટલે માઇનસ થશે)</i></span><br>
                                -8 = (n - 1)(-2)<br>
                                <span style='color:#047857; font-size:14px;'><i>(-2 ભાગાકારમાં જશે. માઇનસ માઇનસ પ્લસ થશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-8</span><span>-2</span></span> = n - 1<br>
                                4 = n - 1<br>
                                4 + 1 = n &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#16a34a;'>n = 5</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ સમાંતર શ્રેણીનું <b>5મું પદ શૂન્ય (0) હશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
    
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 10: કોઈ સમાંતર શ્રેણીમાં 17મું પદ 10મા પદ કરતાં 7 વધુ છે. તેનો સામાન્ય તફાવત શોધો.", 
                    question_desc: "2 માર્ક્સ માટે બોર્ડનો સૌથી સહેલો અને શોર્ટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 રમતવાત (Trick):</b><br>
                            રકમમાં કહ્યું છે કે 17મું પદ એ 10મા પદ કરતાં 7 મોટું છે. <br>
                            આનો સીધો મતલબ એ થાય કે જો <b>17મા પદમાંથી 10મું પદ બાદ કરીએ તો જવાબ 7 આવે!</b> <br>
                            એટલે કે: <b style='color:#dc2626;'>a<sub>17</sub> - a<sub>10</sub> = 7</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમીકરણ બનાવી કિંમત મૂકવી</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(આપણે જાણીએ છીએ કે 17મું પદ = a + 16d અને 10મું પદ = a + 9d થાય)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                a<sub>17</sub> - a<sub>10</sub> = 7<br>
                                (a + 16d) - (a + 9d) = 7<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(કૌંસ છોડીએ ત્યારે પાછળની નિશાનીઓ માઇનસ થશે)</i></span><br>
                                a + 16d - a - 9d = 7<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+a અને -a ઉડી જશે!)</i></span><br>
                                16d - 9d = 7<br>
                                7d = 7<br>
                                d = 7 / 7 &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#1d4ed8;'>d = 1</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            આપેલી સમાંતર શ્રેણીનો <b>સામાન્ય તફાવત (d) = 1</b> છે. (હતો ને સાવ સહેલો દાખલો!)
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 11: સમાંતર શ્રેણી 3, 15, 27, 39, ... નું કયું પદ 54મા પદ કરતાં 132 વધુ હશે?", 
                    question_desc: "'સીધો કુદકો મારવાની ટ્રીક' વાળો મોસ્ટ IMP દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f;'>💡 "સીધો કુદકો મારવાની" દેશી ટ્રીક:</b><br>
                            અહીં તફાવત <b>d = 12</b> છે. મતલબ કે દરેક પદે 12 નો વધારો થાય છે.<br>
                            રકમમાં પૂછ્યું છે કે <b>132 વધુ</b> ક્યારે થશે? <br>
                            સિમ્પલ! 132 ને 12 વડે ભાગી નાખો <b>(132 &divide; 12 = 11)</b>. એટલે કે આપણે 11 કુદકા આગળ મારવાના છે! <br>
                            54મા પદથી 11 કુદકા આગળ એટલે <b>54 + 11 = 65મું પદ!</b> (જવાબ આવી ગયો, હવે આપણે તેને ગણતરીથી સાબિત કરીશું).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: 54મું પદ શોધવું</b><br>
                            અહીં <b>a = 3</b> અને <b>d = 15 - 3 = 12</b> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                a<sub>54</sub> = a + 53d<br>
                                a<sub>54</sub> = 3 + 53(12)<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(ગુણાકાર: 53 &times; 12 = 636)</i></span><br>
                                a<sub>54</sub> = 3 + 636<br>
                                <b style='color:#1d4ed8;'>a<sub>54</sub> = 639</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: નવું પદ ધારીને n શોધવો</b><br>
                            ધારો કે માંગેલું પદ n મું પદ (a<sub>n</sub>) છે. જે 54મા પદ (639) કરતાં 132 વધુ છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = 639 + 132<br>
                                a<sub>n</sub> = <b style='color:#be123c;'>771</b><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(હવે a<sub>n</sub> = 771 માટે n શોધીએ)</i></span><br>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                771 = 3 + (n - 1)(12)<br>
                                771 - 3 = (n - 1)(12)<br>
                                768 = (n - 1)(12)<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>768</span><span>12</span></span> = n - 1<br>
                                64 = n - 1<br>
                                64 + 1 = n &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#16a34a;'>n = 65</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>અંતિમ જવાબ:</b><br>
                            આપેલી સમાંતર શ્રેણીનું <b>65 મું પદ</b> 54મા પદ કરતાં 132 વધુ હશે!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 12: બે સમાંતર શ્રેણીના સામાન્ય તફાવત સમાન છે. જો 100મા પદોનો તફાવત 100 હોય, તો 1000મા પદોનો તફાવત કેટલો હશે?", 
                    question_desc: "બોર્ડમાં માત્ર 1 માર્કની ખાલી જગ્યામાં પૂછાતો 'ટ્રેન' વાળો કોન્સેપ્ટ",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 "સમાંતર ટ્રેન" ની 1 સેકન્ડવાળી ટ્રીક:</b><br>
                            વિચારો કે બે ટ્રેન સમાંતર પાટા પર <b>એકસરખી સ્પીડથી (સામાન્ય તફાવત સમાન છે)</b> દોડી રહી છે.<br>
                            જો 1 કલાક પછી તેમની વચ્ચે 100 મીટરનું અંતર હોય, તો 10 કલાક પછી પણ અંતર 100 મીટર જ રહેવાનું છે!<br>
                            કારણ કે <b>સ્પીડ (d) સરખી છે!</b> તેથી 100મા પદનો તફાવત 100 હોય, તો 1000મા પદનો તફાવત પણ <b>100 જ રહે!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ગાણિતિક ગણતરી (જો 2 માર્ક્સમાં પૂછાય તો):</b><br>
                            ધારો કે બે સમાંતર શ્રેણીના પ્રથમ પદ <b>a</b> અને <b>A</b> છે. અને બંનેનો સામાન્ય તફાવત <b>d</b> છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(પહેલી શરત: 100મા પદોનો તફાવત 100 છે)</i></span><br>
                                (A + 99d) - (a + 99d) = 100<br>
                                A + 99d - a - 99d = 100<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(+99d અને -99d ઉડી જશે)</i></span><br>
                                <b style='color:#1d4ed8;'>A - a = 100</b> &nbsp;&nbsp;&nbsp; ...(સમીકરણ 1)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>1000મા પદોનો તફાવત શોધવા:</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                1000મા પદોનો તફાવત = (A + 999d) - (a + 999d)<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= A + 999d - a - 999d<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b style='color:#1d4ed8;'>A - a</b><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(સમીકરણ 1 મુજબ A - a = 100 જ છે)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b style='font-size:22px; color:#be123c;'>100</b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> 1000મા પદોનો તફાવત પણ <b>100 જ થશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                        
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 13: 3 અંકની કેટલી સંખ્યા 7 વડે વિભાજ્ય હશે?", 
                    question_desc: "બોર્ડમાં 3 માર્ક્સ માટે પૂછાતો શિક્ષકોનો ઑલ-ટાઈમ ફેવરિટ દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની બ્લુપ્રિન્ટ મુજબ બેઝિક અને સ્ટાન્ડર્ડ બંને માટે મોસ્ટ IMP દાખલો!</b>
                        </div>

                        [Image showing the first 3-digit number 105 and the last 3-digit number 994 divisible by 7]

                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 શ્રેણી બનાવવાની દેશી ટ્રીક:</b><br>
                            આપણને 3 અંકની સંખ્યા કહી છે. 3 અંક શરૂ થાય <b>100 થી</b> અને પૂરા થાય <b>999 એ</b>.<br>
                            • <b>પહેલી સંખ્યા શોધવા:</b> 100 ને 7 વડે ભાગો. (14 &times; 7 = 98 થાય, જે 2 અંકની છે. તો 15 &times; 7 = <b>105</b>). મળી ગઈ પહેલી સંખ્યા!<br>
                            • <b>છેલ્લી સંખ્યા શોધવા:</b> 999 ને 7 વડે ભાગો. શેષ 5 વધશે. બસ 999 માંથી એ 5 બાદ કરી દો (999 - 5 = <b>994</b>). મળી ગઈ છેલ્લી સંખ્યા!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: શ્રેણી અને પદો નક્કી કરવા</b><br>
                            આપણી સમાંતર શ્રેણી બનશે: <b>105, 112, 119, ..., 994</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>105</b><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = <b style='color:#dc2626;'>7</b> <span style='color:#047857; font-size:14px;'><i>(કારણ કે 7 વડે વિભાજ્ય છે)</i></span><br>
                                <b>અંતિમ પદ (<i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i>)</b> = <b style='color:#16a34a;'>994</b><br>
                                <b>પદોની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b>?</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                994 = 105 + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(7)<br>
                                994 - 105 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(7)<br>
                                889 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(7)<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>889</span><span>7</span></span> = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(889 નો 7 વડે ભાગાકાર: 127 આવે)</i></span><br>
                                127 = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                127 + 1 = <i style='font-family:"Times New Roman",serif;'>n</i><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>n</i> = 128</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> 3 અંકની <b>કુલ 128 સંખ્યાઓ</b> 7 વડે વિભાજ્ય હશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 14: 10 અને 250 વચ્ચે 4 ના કેટલા ગુણિત હશે?", 
                    question_desc: "પ્રશ્ન 13 જેવો જ બીજો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: શ્રેણી બનાવવી</b><br>
                            આપણે 10 અને 250 ની વચ્ચે 4 ના ઘડિયામાં આવતી (ગુણિત) સંખ્યાઓ શોધવાની છે.<br>
                            • 10 પછી 4 ના ઘડિયામાં <b>12</b> આવે (4 &times; 3 = 12). તેથી <b>પહેલી સંખ્યા 12</b>.<br>
                            • 250 ને 4 વડે ભાગીએ તો 2 શેષ વધે. 250 - 2 = <b>248</b>. તેથી <b>છેલ્લી સંખ્યા 248</b>.<br>
                            <br>
                            આપણી શ્રેણી: <b>12, 16, 20, ..., 248</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>a</b> = <b style='color:#1d4ed8;'>12</b>, &nbsp; <b>d</b> = <b style='color:#dc2626;'>4</b>, &nbsp; <b>a<sub>n</sub></b> = <b style='color:#16a34a;'>248</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>a<sub>n</sub></i> = <i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i><br>
                                248 = 12 + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(4)<br>
                                248 - 12 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(4)<br>
                                236 = (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)(4)<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>236</span><span>4</span></span> = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                59 = <i style='font-family:"Times New Roman",serif;'>n</i> - 1<br>
                                59 + 1 = <i style='font-family:"Times New Roman",serif;'>n</i><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>n</i> = 60</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> 10 અને 250 વચ્ચે 4 ના <b>કુલ 60 ગુણિત હશે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 15: n ના કયા મૂલ્ય માટે બે સમાંતર શ્રેણીઓ 63, 65, 67, ... અને 3, 10, 17, ... ના n માં પદ સમાન થાય?", 
                    question_desc: "બે અલગ-અલગ શ્રેણીઓને સરખાવવાવાળો જોરદાર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બંને શ્રેણીના a અને d લખવા</b><br>
                            <b>પહેલી શ્રેણી:</b> 63, 65, 67, ...<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                a = <b style='color:#1d4ed8;'>63</b>, &nbsp; d = 65 - 63 = <b style='color:#dc2626;'>2</b>
                            </div><br>
                            <b>બીજી શ્રેણી:</b> 3, 10, 17, ...<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                A = <b style='color:#1d4ed8;'>3</b>, &nbsp; D = 10 - 3 = <b style='color:#dc2626;'>7</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બંનેના n માં પદ સરખાવવા</b><br>
                            રકમ મુજબ બંનેના n માં પદ (a<sub>n</sub>) સમાન છે. એટલે કે:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b style='color:#1e3a8a;'>પહેલી શ્રેણીનું n મું પદ = બીજી શ્રેણીનું n મું પદ</b><br>
                                a + (n - 1)d = A + (n - 1)D<br>
                                63 + (n - 1)(2) = 3 + (n - 1)(7)<br>
                                <span style='color:#047857; font-size:14px;'><i>(કૌંસનો ગુણાકાર કરીએ)</i></span><br>
                                63 + 2n - 2 = 3 + 7n - 7<br>
                                <span style='color:#047857; font-size:14px;'><i>(સાદુરૂપ આપીએ)</i></span><br>
                                61 + 2n = -4 + 7n<br>
                                <span style='color:#047857; font-size:14px;'><i>(n વાળા પદો એક બાજુ અને સંખ્યા બીજી બાજુ)</i></span><br>
                                61 + 4 = 7n - 2n<br>
                                65 = 5n<br>
                                n = 65 / 5 &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#1d4ed8;'>n = 13</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> બંને શ્રેણીના <b>13 માં પદ</b> એકબીજાને સમાન હશે!
                            </div>
                        </div>
                    </div>
                    `
                },
                    
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 16: એવી સમાંતર શ્રેણી શોધો જેનું 3જું પદ 16 અને 7મું પદ 5મા પદથી 12 વધુ હોય.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: 7મા અને 5મા પદની સરખામણી પરથી d શોધવો</b><br>
                            રકમ મુજબ: 7મું પદ એ 5મા પદ કરતાં 12 મોટું છે. <br>
                            એટલે કે 7મા પદમાંથી 5મું પદ બાદ કરીએ તો 12 આવે: <b>a<sub>7</sub> - a<sub>5</sub> = 12</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (a + 6d) - (a + 4d) = 12<br>
                                a + 6d - a - 4d = 12<br>
                                <span style='color:#047857; font-size:14px;'><i>(+a અને -a ઉડી જશે)</i></span><br>
                                6d - 4d = 12<br>
                                2d = 12<br>
                                d = 12 / 2 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>d = 6</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ત્રીજા પદ પરથી a શોધવો</b><br>
                            રકમમાં 3જું પદ 16 આપેલ છે. એટલે કે <b>a + 2d = 16</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a + 2(6) = 16<br>
                                a + 12 = 16<br>
                                a = 16 - 12 &nbsp;&#10551;&nbsp; <b style='color:#be123c;'>a = 4</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: સમાંતર શ્રેણી બનાવવી</b><br>
                            આપણને a = 4 અને d = 6 મળી ગયા. હવે તેમાં 6-6 ઉમેરતા જઈએ:<br>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> માંગેલ સમાંતર શ્રેણી <b>4, 10, 16, 22...</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 17: સમાંતર શ્રેણી 3, 8, 13, ..., 253 હોય, તો તેનું છેલ્લેથી 20મું પદ શોધો.", 
                    question_desc: "છેલ્લેથી પદ શોધવાની 100% IMP 'દેશી ટ્રીક' વાળો દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષા: 2024 ની પેપર સ્ટાઈલમાં 2 માર્ક્સ માટે સૌથી ફેવરિટ અને કન્ફ્યુઝ કરતો દાખલો!</b>
                        </div>

                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f;'>💡 શ્રેણી ઉંધી કરવાની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે પણ <b>"છેલ્લેથી"</b> પદ પૂછે, ત્યારે શ્રેણીને જ ઉંધી કરી નાખવાની! <br>
                            અહીં શ્રેણી <b>3, 8, 13</b> છે એટલે કે <b>5</b> નો વધારો થાય છે. <br>
                            તો ઉંધી શ્રેણીમાં <b>5 નો ઘટાડો</b> થશે! અને છેલ્લું પદ (253) આપણું <b>પહેલું પદ</b> બની જશે!<br>
                            <b>નવી શ્રેણી:</b> 253, 248, 243, ...
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: નવી શ્રેણીના a અને d નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>નવો a</b> = <b style='color:#1d4ed8;'>253</b><br>
                                <b>નવો d</b> = <b style='color:#dc2626;'>-5</b> <span style='color:#047857; font-size:14px;'><i>(કારણ કે શ્રેણી ઉંધી કરી છે)</i></span><br>
                                <b>n</b> = <b>20</b> <span style='color:#047857; font-size:14px;'><i>(20મું પદ શોધવું છે)</i></span>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 20મું પદ (a<sub>20</sub>) શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>20</sub> = a + 19d<br>
                                a<sub>20</sub> = 253 + 19(-5)<br>
                                a<sub>20</sub> = 253 - 95<br>
                                <b style='font-size:22px; color:#1d4ed8;'>a<sub>20</sub> = 158</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> આપેલ સમાંતર શ્રેણીનું <b>છેલ્લેથી 20મું પદ 158</b> હશે. (હતી ને જોરદાર ટ્રીક!)
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 18: સમાંતર શ્રેણીના 4થા અને 8મા પદનો સરવાળો 24 છે, અને 6ઠ્ઠા અને 10મા પદનો સરવાળો 44 છે. તો પ્રથમ ત્રણ પદ શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બે સમીકરણો બનાવવા (લોપની રીત માટે)</b><br>
                            <b>પહેલી શરત:</b> 4થું પદ + 8મું પદ = 24<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (a + 3d) + (a + 7d) = 24<br>
                                2a + 10d = 24<br>
                                <span style='color:#047857; font-size:14px;'><i>(બધાને 2 વડે ભાગીને સમીકરણ નાનું બનાવીએ)</i></span><br>
                                <b style='color:#1d4ed8;'>a + 5d = 12</b> &nbsp; ...(સમીકરણ 1)
                            </div><br>
                            <b>બીજી શરત:</b> 6ઠ્ઠું પદ + 10મું પદ = 44<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                (a + 5d) + (a + 9d) = 44<br>
                                2a + 14d = 44<br>
                                <span style='color:#047857; font-size:14px;'><i>(બધાને 2 વડે ભાગીએ)</i></span><br>
                                <b style='color:#be123c;'>a + 7d = 22</b> &nbsp; ...(સમીકરણ 2)
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લોપની રીતથી d અને a શોધવા</b><br>
                            સમીકરણ 2 માંથી 1 ની બાદબાકી કરતાં:<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                &nbsp;&nbsp;&nbsp; a + 7d = 22<br>
                                <u><b style='color:#dc2626;'>-</b> a <b style='color:#dc2626;'>-</b> 5d = <b style='color:#dc2626;'>-</b> 12</u><br>
                                <span style='color:#047857; font-size:14px;'><i>(a ઉડી જશે)</i></span><br>
                                &nbsp;&nbsp;&nbsp; 2d = 10 &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>d = 5</b>
                            </div><br>
                            <b>સમીકરણ 1 માં d = 5 મૂકતાં:</b>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a + 5(5) = 12<br>
                                a + 25 = 12<br>
                                a = 12 - 25 &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>a = -13</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: પ્રથમ ત્રણ પદો લખવા</b><br>
                            a = -13 મળી ગયું, હવે તેમાં d (5) ઉમેરતા જઈએ:<br>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ:</b> માંગેલ પ્રથમ 3 પદો: <b style='color:#be123c;'>-13, -8, -3</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.2 પ્રશ્ન 19: સુબ્બારાવે 1995 માં ₹ 5000 ના વાર્ષિક વેતનથી કામ શરૂ કર્યું. દર વર્ષે ₹ 200 નો વધારો મળે છે. કયા વર્ષે તેમનું વેતન ₹ 7000 થશે?", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        [Image showing salary increments conceptually]
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમાંતર શ્રેણી બનાવવી</b><br>
                            પ્રથમ વર્ષનો પગાર = ₹ 5000 <b>(a = 5000)</b><br>
                            દર વર્ષે વધારો = ₹ 200 <b>(d = 200)</b><br>
                            અંતિમ પગાર = ₹ 7000 <b>(a<sub>n</sub> = 7000)</b><br>
                            કયા વર્ષે? એટલે કે <b>n = ?</b> શોધવાનો છે.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                7000 = 5000 + (n - 1)(200)<br>
                                7000 - 5000 = (n - 1)(200)<br>
                                2000 = (n - 1)(200)<br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2000</span><span>200</span></span> = n - 1<br>
                                10 = n - 1<br>
                                10 + 1 = n &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#1d4ed8;'>n = 11</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> 11મા વર્ષે તેમનું વેતન ₹ 7000 થશે. (વર્ષ = 1995 + 10 = <b>વર્ષ 2005 માં</b>).
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.2 પ્રશ્ન 20: રામકલી વર્ષના પ્રથમ અઠવાડિયે ₹ 5 ની બચત કરે છે અને પછી દર અઠવાડિયે ₹ 1.75 નો વધારો કરે છે. જો n મા અઠવાડિયે બચત ₹ 20.75 હોય, તો n શોધો.", 
                    question_desc: "બોર્ડમાં પોઈન્ટવાળી ગણતરીથી વિદ્યાર્થીઓને ડરાવતો દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 પોઈન્ટ કાઢવાની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે ડાબી અને જમણી બંને બાજુ પોઈન્ટ પછી 2 આંકડા હોય (જેમ કે 15.75 અને 1.75), તો બંને બાજુથી <b>પોઈન્ટ સીધા જ કાઢી નાખવા!</b> અને સાદો ભાગાકાર કરી લેવો (1575 &divide; 175).
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને a<sub>n</sub> લખવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>a</b> = <b style='color:#1d4ed8;'>5</b> <span style='color:#047857; font-size:14px;'><i>(પ્રથમ બચત)</i></span><br>
                                <b>d</b> = <b style='color:#dc2626;'>1.75</b> <span style='color:#047857; font-size:14px;'><i>(દર અઠવાડિયે વધારો)</i></span><br>
                                <b>a<sub>n</sub></b> = <b style='color:#16a34a;'>20.75</b> <span style='color:#047857; font-size:14px;'><i>(અંતિમ બચત)</i></span><br>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકી n શોધવો</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                a<sub>n</sub> = a + (n - 1)d<br>
                                20.75 = 5 + (n - 1)(1.75)<br>
                                20.75 - 5 = (n - 1)(1.75)<br>
                                15.75 = (n - 1)(1.75)<br>
                                <span style='color:#047857; font-size:14px;'><i>(1.75 ભાગાકારમાં જશે)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15.75</span><span>1.75</span></span> = n - 1<br>
                                <span style='color:#047857; font-size:14px;'><i>(ટ્રીક મુજબ પોઈન્ટ કાઢી નાખીએ)</i></span><br>
                                <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1575</span><span>175</span></span> = n - 1<br>
                                <span style='color:#047857; font-size:14px;'><i>(175 &times; 9 = 1575 થાય)</i></span><br>
                                9 = n - 1<br>
                                9 + 1 = n &nbsp;&#10551;&nbsp; <b style='font-size:22px; color:#1d4ed8;'>n = 10</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#dcfce7; padding:10px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:18px;'>અંતિમ જવાબ:</b> માંગેલ <b>n નું મૂલ્ય 10</b> છે. (એટલે કે 10મા અઠવાડિયે બચત 20.75 થશે).
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                {
                    question: "🎯 ગોલ્ડન માસ્ટર ચાવી: સમાંતર શ્રેણીના n પદોનો સરવાળો (Sn) શોધવાનાં 2 સૂત્રો",
                    answer: `
                    <div style='background-color:#fdf4ff; padding:15px; border-radius:8px; border:2px solid #d946ef; margin-bottom:15px;'>
                        <p style='margin-top:0; color:#86198f; font-weight:bold; font-size:16px;'>આખા સ્વાધ્યાય 5.3 માં માત્ર આ 2 જ સૂત્રોનો ખેલ છે. ક્યારે કયું વાપરવું તે બરાબર સમજી લો:</p>
                        
                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:15px; border-radius:5px; margin-bottom:15px;'>
                            <b style='color:#1d4ed8; font-size:16px;'>1. મોટું સૂત્ર (જ્યારે છેલ્લું પદ ન આપ્યું હોય ત્યારે):</b><br>
                            <div style='margin-top:10px; font-size:22px; color:#1d4ed8; background-color:#e0f2fe; padding:10px; border-radius:8px; text-align:center; font-family:"Times New Roman",serif; font-weight:bold;'>
                                S<sub>n</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>n</span><span>2</span></span> [ 2a + (n - 1)d ]
                            </div>
                        </div>

                        <div style='background-color:#ffffff; border:1px dashed #f0abfc; padding:15px; border-radius:5px;'>
                            <b style='color:#be123c; font-size:16px;'>2. શોર્ટકટ નાનું સૂત્ર (જ્યારે છેલ્લું પદ 'l' અથવા 'a<sub>n</sub>' આપેલું હોય ત્યારે જ વપરાય):</b><br>
                            <div style='margin-top:10px; font-size:22px; color:#be123c; background-color:#fee2e2; padding:10px; border-radius:8px; text-align:center; font-family:"Times New Roman",serif; font-weight:bold;'>
                                S<sub>n</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:2px solid #be123c; display:block; padding:0 3px;'>n</span><span>2</span></span> [ a + l ]
                            </div>
                            <div style='margin-top:5px; font-size:14px; color:#0f172a; text-align:center;'><i>(અહીં <b style='color:#be123c;'>l</b> એટલે લાસ્ટ ટર્મ (Last term) અથવા અંતિમ પદ).</i></div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "સ્વા. 5.3 પ્રશ્ન 1(i): સમાંતર શ્રેણી 2, 7, 12, ... ના 10 પદો સુધીનો સરવાળો શોધો.", 
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>2</b><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = 7 - 2 = <b style='color:#dc2626;'>5</b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>10</b> <span style='color:#047857; font-size:14px;'><i>(કારણ કે 10 પદોનો સરવાળો પૂછ્યો છે)</i></span>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: મોટા સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>n</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [ 2<i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i> ]<br><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>10</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10</span><span>2</span></span> [ 2(2) + (10 - 1)(5) ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(10 નો 2 વડે ભાગાકાર: 5 આવે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>10</sub></i> = 5 [ 4 + (9)(5) ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>10</sub></i> = 5 [ 4 + 45 ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>10</sub></i> = 5 [ 49 ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(49 &times; 5 = 245)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>S<sub>10</sub></i> = 245</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> આપેલ શ્રેણીના 10 પદોનો સરવાળો <b style='color:#1d4ed8;'>245</b> થશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.3 પ્રશ્ન 1(ii): સમાંતર શ્રેણી -37, -33, -29, ... ના 12 પદો સુધીનો સરવાળો શોધો.", 
                    question_desc: "માઇનસ વાળી ગણતરીનો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fef2f2; border-left:4px solid #ef4444; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b91c1c; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <span style='color:#047857; font-size:14px;'><i>(માઇનસની બાદબાકીમાં નિશાની ખાસ જોવી: માઇનસ માઇનસ પ્લસ થાય)</i></span>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#fee2e2; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#dc2626;'>-37</b><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = -33 - (-37) = -33 + 37 = <b style='color:#1d4ed8;'>4</b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>12</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>n</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [ 2<i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i> ]<br><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>12</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12</span><span>2</span></span> [ 2(-37) + (12 - 1)(4) ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>12</sub></i> = 6 [ -74 + (11)(4) ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>12</sub></i> = 6 [ -74 + 44 ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(74 માંથી 44 જાય તો 30 વધે, પણ મોટી સંખ્યાની નિશાની માઇનસ આવે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>12</sub></i> = 6 [ -30 ]<br>
                                <b style='font-size:22px; color:#be123c;'><i style='font-family:"Times New Roman",serif;'>S<sub>12</sub></i> = -180</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; padding:8px; border-radius:4px; border-left:4px solid #f59e0b;'>
                                <b style='color:#b45309;'>જવાબ:</b> આપેલ શ્રેણીના 12 પદોનો સરવાળો <b style='color:#be123c;'>-180</b> થશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                        
        
                { 
                    question: "સ્વા. 5.3 પ્રશ્ન 1(iii): સમાંતર શ્રેણી 0.6, 1.7, 2.8, ... ના 100 પદો સુધીનો સરવાળો શોધો.", 
                    question_desc: "બોર્ડ પરીક્ષામાં પૂછાતો પોઈન્ટવાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'>0.6</b><br>
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = 1.7 - 0.6 = <b style='color:#dc2626;'>1.1</b><br>
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>100</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.0; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>n</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [ 2<i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i> ]<br><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>100</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>100</span><span>2</span></span> [ 2(0.6) + (100 - 1)(1.1) ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>100</sub></i> = 50 [ 1.2 + (99)(1.1) ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(99 &times; 11 = 1089 થાય, 1 પોઈન્ટ કાપતાં 108.9 આવે)</i></span><br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>100</sub></i> = 50 [ 1.2 + 108.9 ]<br>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>100</sub></i> = 50 [ 110.1 ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(50 નો 0 અને 110.1 નો પોઈન્ટ ઉડી જશે, એટલે 5 &times; 1101 જ કરવાનું છે)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>S<sub>100</sub></i> = 5505</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 5.3 પ્રશ્ન 1(iv): સમાંતર શ્રેણી 1/15, 1/12, 1/10, ... ના 11 પદો સુધીનો સરવાળો શોધો.", 
                    question_desc: "લ.સા.અ. અને અપૂર્ણાંક વાળી ગણતરીનો સૌથી મોસ્ટ IMP દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 લ.સા.અ. લેવાની દેશી ટ્રીક:</b><br>
                            આ દાખલામાં છેદમાં 12 અને 15 છે. બંનેના ઘડિયામાં આવતી સૌથી પહેલી રકમ 60 છે (12 પંચા 60 અને 15 ચોક 60). એટલે આપણો <b>લ.સા.અ. 60</b> આવશે!
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: a, d અને n નક્કી કરવા</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.2; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>પ્રથમ પદ (<i style='font-family:"Times New Roman",serif;'>a</i>)</b> = <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>1</span><span>15</span></span></b><br>
                                
                                <b>તફાવત (<i style='font-family:"Times New Roman",serif;'>d</i>)</b> = a<sub>2</sub> - a<sub>1</sub> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>12</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>15</span></span><br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(લ.સા.અ. 60 લાવવા 12 ને 5 વડે અને 15 ને 4 વડે ગુણતા)</i></span><br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5 - 4</span><span>60</span></span> = <b style='color:#dc2626;'><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>1</span><span>60</span></span></b><br>
                                
                                <b>પદની સંખ્યા (<i style='font-family:"Times New Roman",serif;'>n</i>)</b> = <b style='color:#16a34a;'>11</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: મોટા સૂત્રમાં કિંમત મૂકવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:3.2; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <i style='font-family:"Times New Roman",serif;'>S<sub>n</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n</span><span>2</span></span> [ 2<i style='font-family:"Times New Roman",serif;'>a</i> + (<i style='font-family:"Times New Roman",serif;'>n</i> - 1)<i style='font-family:"Times New Roman",serif;'>d</i> ]<br><br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> [ 2<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>15</span></span><span style='font-size:24px;'>)</span> + (11 - 1)<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>60</span></span><span style='font-size:24px;'>)</span> ]<br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> [ <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>15</span></span> + 10<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>60</span></span><span style='font-size:24px;'>)</span> ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(10 અને 60 નો છેદ ઉડાડતા: 10 છક 60, એટલે 1/6 વધે)</i></span><br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> [ <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>15</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>6</span></span> ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(15 અને 6 નો લ.સા.અ. 30 થાય: 15 દૂ 30 અને 6 પંચા 30)</i></span><br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> [ <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4 + 5</span><span>30</span></span> ]<br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> [ <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>30</span></span> ]<br>
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(9 અને 30 બંને 3 ના ઘડિયામાં આવે: 3 તેરી 9 અને 3 દાન 30)</i></span><br>
                                
                                <i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 5px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>10</span></span><br>
                                
                                <span style='color:#047857; font-size:14px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10551; <i>(અંશનો અંશ સાથે અને છેદનો છેદ સાથે ગુણાકાર: 11 &times; 3 અને 2 &times; 10)</i></span><br>
                                <b style='font-size:22px; color:#1d4ed8;'><i style='font-family:"Times New Roman",serif;'>S<sub>11</sub></i> = <span style='display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>33</span><span>20</span></span></b>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        }
                
            
        
                
            
                                        
                    
};
