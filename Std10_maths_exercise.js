var njMathsExercise = {
    // ------------------------------------
    // પ્રકરણ 1: વાસ્તવિક સંખ્યાઓ (સ્વાધ્યાય 1.1 અને 1.2)
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
            "chapterName": "પ્રકરણ 2 (સ્વાધ્યાય 2.1)",
            "chapterTitle": "બહુપદીઓ - આલેખ પરથી શૂન્યોની સંખ્યા",
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
                }
            ]
        }
                
        
                
            
        
    
};
