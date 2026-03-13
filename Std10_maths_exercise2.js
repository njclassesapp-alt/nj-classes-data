 var njMathsExercise2 = { 
        // ------------------------------------
        // પ્રકરણ 10: વર્તુળ (સ્વાધ્યાય 10.1 - ભાગ 1A)
        // ------------------------------------
        "10": {
            "chapterName": "પ્રકરણ 10 (સ્વાધ્યાય 10.1 - ભાગ 1A)",
            "chapterTitle": "સ્પર્શક અને છેદિકાનો કન્સેપ્ટ અને પાયાના પ્રશ્નો (પ્રશ્ન 1 અને 2)",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: વર્તુળનો સ્પર્શક (Tangent) અને છેદિકા (Secant) કોને કહેવાય?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 કન્સેપ્ટ સમજો (સાવ દેશી ભાષામાં):</b><br>
                            કોઈપણ રેખા અને વર્તુળ વચ્ચે ૩ પરિસ્થિતિ બની શકે:<br>
                            1. <b>અસ્પર્શક રેખા:</b> જે વર્તુળને અડ્યા વગર જ દૂરથી જતી રહે.<br>
                            2. <b>છેદિકા (Secant):</b> જે વર્તુળની આરપાર નીકળી જાય (વર્તુળને <b>2 બિંદુમાં</b> કાપે).<br>
                            3. <b>સ્પર્શક (Tangent):</b> જે વર્તુળને માત્ર બહારથી હળવેકથી અડીને જતી રહે (વર્તુળને <b>માત્ર 1 જ બિંદુમાં</b> છેદે). જ્યાં અડે તેને <b>'સ્પર્શબિંદુ'</b> કહેવાય.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="160" cy="100" r="70" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="160" cy="100" r="4" fill="#0f172a"/>
                                <text x="155" y="120" font-size="14" font-weight="bold">O (કેન્દ્ર)</text>

                                <line x1="40" y1="60" x2="280" y2="60" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="102" cy="60" r="4" fill="#1d4ed8"/>
                                <circle cx="218" cy="60" r="4" fill="#1d4ed8"/>
                                <text x="285" y="65" font-size="14" font-weight="bold" fill="#1d4ed8">છેદિકા</text>

                                <line x1="40" y1="170" x2="280" y2="170" stroke="#dc2626" stroke-width="2"/>
                                <circle cx="160" cy="170" r="5" fill="#dc2626"/>
                                <text x="145" y="190" font-size="14" font-weight="bold" fill="#dc2626">P (સ્પર્શબિંદુ)</text>
                                <text x="285" y="175" font-size="14" font-weight="bold" fill="#dc2626">સ્પર્શક</text>

                                <line x1="160" y1="100" x2="160" y2="170" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                <polyline points="160,160 170,160 170,170" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <text x="165" y="140" font-size="12" font-weight="bold" fill="#16a34a">ત્રિજ્યા</text>
                            </svg>
                        </div>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 પ્રમેય 10.1 (મોસ્ટ IMP નિયમ):</b> સ્પર્શબિંદુમાંથી દોરેલી ત્રિજ્યા, તે સ્પર્શકને <b>લંબ (90&deg; નો ખૂણો)</b> હોય છે! આ નિયમથી જ બધા દાખલા ગણાશે.
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 10.1 પ્રશ્ન 1: વર્તુળને કેટલા સ્પર્શક હોય છે?", 
                    question_desc: "1 માર્ક માટે બોર્ડમાં વારંવાર પૂછાતો પ્રશ્ન",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:18px;'>જવાબ: અસંખ્ય (અનંત) સ્પર્શકો હોય છે.</b><br><br>
                            <span style='color:#0f172a; font-size:14px;'><b>કારણ:</b> વર્તુળની કિનારી (પરિઘ) પર અસંખ્ય બિંદુઓ આવેલા હોય છે. અને દરેક એક બિંદુ પરથી એક સ્પર્શક દોરી શકાય. તેથી વર્તુળને કુલ <b>અસંખ્ય સ્પર્શકો</b> હોય છે.</span>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 10.1 પ્રશ્ન 2: ખાલી જગ્યા પૂરો.", 
                    question_desc: "બોર્ડની પરીક્ષા માટે હેતુલક્ષી પ્રશ્નો (MCQ) ની ખાલી જગ્યાઓ",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='margin-bottom:10px; background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; border-radius:4px;'>
                            <b>(i) સ્પર્શક વર્તુળને _______ બિંદુમાં છેદે છે.</b><br>
                            <b style='color:#1d4ed8; font-size:18px;'>જવાબ: 1 (એક અને માત્ર એક)</b><br>
                            <span style='color:#0f172a; font-size:13px;'><i>(જે રેખા વર્તુળને માત્ર અડીને જાય તેને જ સ્પર્શક કહેવાય).</i></span>
                        </div>

                        <div style='margin-bottom:10px; background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; border-radius:4px;'>
                            <b>(ii) વર્તુળને બે બિંદુમાં છેદતી રેખાને _______ કહે છે.</b><br>
                            <b style='color:#c2410c; font-size:18px;'>જવાબ: છેદિકા (Secant)</b><br>
                            <span style='color:#0f172a; font-size:13px;'><i>(જે આરપાર નીકળી જાય તે છેદિકા).</i></span>
                        </div>

                        <div style='margin-bottom:10px; background-color:#f3e8ff; border-left:4px solid #9333ea; padding:10px; border-radius:4px;'>
                            <b>(iii) વર્તુળને વધુમાં વધુ _______ સમાંતર સ્પર્શક હોય.</b><br>
                            <b style='color:#7e22ce; font-size:18px;'>જવાબ: 2 (બે)</b><br>
                            <span style='color:#0f172a; font-size:13px;'><i>(જો એક સ્પર્શક નીચે હોય, તો તેને બરાબર સમાંતર હોય તેવો બીજો સ્પર્શક ઉપર જ દોરી શકાય, ત્રીજો નહિ).</i></span>
                        </div>

                        <div style='margin-bottom:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:10px; border-radius:4px;'>
                            <b>(iv) વર્તુળ અને સ્પર્શકના સામાન્ય બિંદુને _______ કહે છે.</b><br>
                            <b style='color:#15803d; font-size:18px;'>જવાબ: સ્પર્શબિંદુ (Point of Contact)</b><br>
                            <span style='color:#0f172a; font-size:13px;'><i>(જ્યાં વર્તુળ અને રેખા ભેગા થાય તે બિંદુ).</i></span>
                        </div>

                    </div>
                    `
                },
                      
  
                { 
                    question: "🌟 સ્વા. 10.1 પ્રશ્ન 3: 5 સેમી ત્રિજ્યાવાળા વર્તુળના કોઈ બિંદુ P આગળ દોરેલ એક સ્પર્શક PQ, કેન્દ્ર O માંથી પસાર થતી રેખાને Q બિંદુએ છેદે છે. જો OQ = 12 સેમી હોય, તો PQ ની લંબાઈ શોધો.", 
                    question_desc: "2024 અને 2025 બોર્ડ માટે 2 માર્ક્સનો પાયથાગોરસના પ્રમેય વાળો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની માસ્ટર ટ્રીક:</b><br>
                            પ્રમેય 10.1 મુજબ, ત્રિજ્યા અને સ્પર્શક વચ્ચે હંમેશા <b>90&deg; નો કાટખૂણો</b> બને છે. એટલે અહીં કાટકોણ ત્રિકોણ બનશે, જેમાં આપણે માત્ર <b>પાયથાગોરસનો પ્રમેય</b> વાપરવાનો છે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="200" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 120 20 A 80 80 0 0 0 40 100 A 80 80 0 0 0 120 180" fill="none" stroke="#94a3b8" stroke-width="2"/>
                                
                                <polygon points="120,100 120,180 230,180" fill="#eff6ff" stroke="#0f172a" stroke-width="2"/>
                                
                                <polyline points="120,170 130,170 130,180" fill="none" stroke="#dc2626" stroke-width="2"/>
                                
                                <circle cx="120" cy="100" r="4" fill="#0f172a"/>
                                <text x="105" y="95" font-size="14" font-weight="bold">O</text>
                                
                                <circle cx="120" cy="180" r="4" fill="#0f172a"/>
                                <text x="105" y="195" font-size="14" font-weight="bold">P</text>
                                
                                <circle cx="230" cy="180" r="4" fill="#0f172a"/>
                                <text x="235" y="195" font-size="14" font-weight="bold">Q</text>
                                
                                <text x="90" y="145" font-size="14" fill="#16a34a" font-weight="bold">5 cm</text>
                                <text x="160" y="130" font-size="14" fill="#1d4ed8" font-weight="bold">12 cm (OQ)</text>
                                <text x="160" y="195" font-size="14" fill="#dc2626" font-weight="bold">? (PQ)</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            અહીં, <b>ત્રિજ્યા OP = 5 સેમી</b> છે.<br>
                            કેન્દ્રથી બિંદુ Q નું અંતર <b>OQ = 12 સેમી</b> છે. (જે કર્ણ બનશે).<br>
                            પ્રમેય 10.1 મુજબ, &ang;OPQ = 90&deg; થાય.
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: પાયથાગોરસના પ્રમેયથી ગણતરી</b><br>
                            કાટકોણ &Delta;OPQ માં પાયથાગોરસ મુજબ:
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.8; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                OQ² = OP² + PQ²<br>
                                (12)² = (5)² + PQ²<br>
                                144 = 25 + PQ²<br><br>

                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(25 ને સામે માઇનસમાં લઈ જતા)</i></span><br>
                                PQ² = 144 - 25<br>
                                PQ² = 119<br><br>

                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(119 નું કોઈ વર્ગમૂળ ન નીકળે, એટલે નિશાની એમને એમ રહેશે)</i></span><br>
                                <b style='color:#dc2626; font-size:22px;'>PQ = &radic;<span style='border-top:2px solid #dc2626; display:inline-block; padding-top:1px;'>&nbsp;119&nbsp;</span> સેમી</b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> સ્પર્શક PQ ની લંબાઈ <b style='color:#be123c;'>&radic;119 સેમી</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 10.1 પ્રશ્ન 4: એક વર્તુળ દોરો. વર્તુળના સમતલમાં આપેલી કોઈ એક રેખાને સમાંતર હોય તેવી બે રેખાઓ દોરો જે પૈકી એક વર્તુળનો સ્પર્શક હોય અને બીજી વર્તુળની છેદિકા હોય.", 
                    question_desc: "ફક્ત આકૃતિ દ્વારા સમજૂતી આપતો પ્રશ્ન",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 સમજૂતી:</b><br>
                            આપણે એક એવી આકૃતિ બનાવવાની છે જેમાં 3 રેખાઓ હોય અને ત્રણેય એકબીજાને <b>સમાંતર (Parallel - રેલવેના પાટા જેવી)</b> હોય.<br>
                            1. કાળા રંગની: <b>આપેલી રેખા</b> (વર્તુળની બહાર)<br>
                            2. લીલા રંગની: <b>સ્પર્શક</b> (વર્તુળને 1 બિંદુમાં અડતી)<br>
                            3. વાદળી રંગની: <b>છેદિકા</b> (વર્તુળની આરપાર જતી)
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="140" cy="120" r="80" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="140" cy="120" r="4" fill="#0f172a"/>
                                <text x="135" y="110" font-size="14" font-weight="bold">O</text>

                                <line x1="20" y1="240" x2="260" y2="240" stroke="#0f172a" stroke-width="3"/>
                                <text x="270" y="245" font-size="12" font-weight="bold">આપેલી રેખા</text>

                                <line x1="20" y1="200" x2="260" y2="200" stroke="#16a34a" stroke-width="3"/>
                                <circle cx="140" cy="200" r="5" fill="#16a34a"/>
                                <text x="270" y="205" font-size="12" font-weight="bold" fill="#16a34a">સ્પર્શક</text>

                                <line x1="20" y1="150" x2="260" y2="150" stroke="#1d4ed8" stroke-width="3"/>
                                <circle cx="65" cy="150" r="4" fill="#1d4ed8"/>
                                <circle cx="215" cy="150" r="4" fill="#1d4ed8"/>
                                <text x="270" y="155" font-size="12" font-weight="bold" fill="#1d4ed8">છેદિકા</text>
                            </svg>
                        </div>
                    </div>
                    `
                },
                      
    
                {
                    question: "🎯 માસ્ટર ચાવી: સ્વાધ્યાય 10.2 ના દાખલા ગણવા માટે કયો એક નિયમ (પ્રમેય 10.2) યાદ રાખવો?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 પ્રમેય 10.2 (આખા ચેપ્ટરનો બાપ!):</b><br>
                            "વર્તુળની બહારના કોઈ પણ બિંદુમાંથી વર્તુળને <b>વધુમાં વધુ 2 સ્પર્શક</b> દોરી શકાય, અને આ <b>બંને સ્પર્શકોની લંબાઈ હંમેશા સમાન જ હોય છે!</b>"<br>
                            વળી, પ્રમેય 10.1 મુજબ, ત્રિજ્યા હંમેશા સ્પર્શક સાથે <b>90&deg; નો ખૂણો (કાટખૂણો)</b> બનાવે છે.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="80" cy="100" r="60" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="80" cy="100" r="4" fill="#0f172a"/>
                                <text x="65" y="105" font-size="14" font-weight="bold">O</text>

                                <circle cx="250" cy="100" r="5" fill="#dc2626"/>
                                <text x="255" y="105" font-size="14" font-weight="bold" fill="#dc2626">P</text>
                                <text x="220" y="125" font-size="12" fill="#0f172a">બહારનું બિંદુ</text>

                                <line x1="250" y1="100" x2="105" y2="45" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="250" y1="100" x2="105" y2="155" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <circle cx="105" cy="45" r="4" fill="#1d4ed8"/>
                                <text x="100" y="35" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                                <circle cx="105" cy="155" r="4" fill="#1d4ed8"/>
                                <text x="100" y="175" font-size="14" font-weight="bold" fill="#1d4ed8">B</text>

                                <line x1="170" y1="65" x2="180" y2="80" stroke="#dc2626" stroke-width="2"/>
                                <line x1="170" y1="135" x2="180" y2="120" stroke="#dc2626" stroke-width="2"/>
                                <text x="185" y="105" font-size="14" font-weight="bold" fill="#dc2626">PA = PB</text>

                                <line x1="80" y1="100" x2="105" y2="45" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                <line x1="80" y1="100" x2="105" y2="155" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <polyline points="95,50 100,58 110,54" fill="none" stroke="#16a34a" stroke-width="1.5"/>
                                <polyline points="95,150 100,142 110,146" fill="none" stroke="#16a34a" stroke-width="1.5"/>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>3 ગોલ્ડન રૂલ્સ:</b><br>
                            1. સ્પર્શકો <b>PA = PB</b> થાય.<br>
                            2. <b>&ang;A અને &ang;B બંને કાટખૂણા (90&deg;)</b> થાય.<br>
                            3. ચતુષ્કોણ OAPB ના સામસામેના ખૂણા <b>(&ang;O અને &ang;P) નો સરવાળો હંમેશા 180&deg;</b> થાય!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 1: બિંદુ Q માંથી દોરેલા વર્તુળના સ્પર્શકની લંબાઈ 24 સેમી અને વર્તુળના કેન્દ્રથી તેનું અંતર 25 સેમી હોય, તો વર્તુળની ત્રિજ્યા શોધો.", 
                    question_desc: "વિકલ્પો: (A) 7 સેમી  (B) 12 સેમી  (C) 15 સેમી  (D) 24.5 સેમી (1 માર્કનો મોસ્ટ IMP)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            જ્યારે પણ 'કેન્દ્ર', 'સ્પર્શક' અને 'ત્રિજ્યા' આ 3 શબ્દો ભેગા થાય, એટલે સમજી લેવું કે ત્યાં <b>કાટકોણ ત્રિકોણ</b> બનશે! અને કાટકોણ ત્રિકોણ આવે એટલે <b>પાયથાગોરસનો પ્રમેય</b> જ વાપરવાનો હોય.
                        </div>

                        <div style='text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 10 A 60 60 0 0 0 20 70 A 60 60 0 0 0 80 130" fill="none" stroke="#94a3b8" stroke-width="2"/>
                                
                                <polygon points="80,70 80,20 240,20" fill="#eff6ff" stroke="#0f172a" stroke-width="2"/>
                                
                                <polyline points="80,30 90,30 90,20" fill="none" stroke="#dc2626" stroke-width="2"/>
                                
                                <circle cx="80" cy="70" r="4" fill="#0f172a"/>
                                <text x="65" y="85" font-size="14" font-weight="bold">O</text>
                                
                                <circle cx="80" cy="20" r="4" fill="#0f172a"/>
                                <text x="65" y="15" font-size="14" font-weight="bold">P</text>
                                
                                <circle cx="240" cy="20" r="4" fill="#0f172a"/>
                                <text x="245" y="25" font-size="14" font-weight="bold">Q</text>
                                
                                <text x="20" y="50" font-size="14" fill="#dc2626" font-weight="bold">r (ત્રિજ્યા)</text>
                                <text x="140" y="15" font-size="14" fill="#1d4ed8" font-weight="bold">24 cm (સ્પર્શક)</text>
                                <text x="140" y="65" font-size="14" fill="#16a34a" font-weight="bold">25 cm (કર્ણ)</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ગણતરી (પાયથાગોરસના પ્રમેયથી):</b><br>
                            આકૃતિમાં, &ang;OPQ = 90&deg; છે. (કારણ કે ત્રિજ્યા સ્પર્શકને લંબ હોય છે).<br>
                            તેથી OQ કર્ણ બનશે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.5; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                OQ² = OP² + PQ²<br>
                                (25)² = r² + (24)²<br>
                                625 = r² + 576<br><br>
                                
                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(576 ને ડાબી બાજુ લાવતા બાદબાકી થશે)</i></span><br>
                                r² = 625 - 576<br>
                                r² = 49<br>
                                <b>r = &radic;<span style='border-top:1.5px solid black; display:inline-block; padding-top:1px;'>&nbsp;49&nbsp;</span></b><br>
                                <b style='color:#dc2626; font-size:22px;'>r = 7 સેમી</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; border-left:4px solid #f59e0b; padding:8px; border-radius:4px;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ: (A) 7 સેમી</b> (નોંધ: 7-24-25 ની પાયથાગોરસની ત્રિપુટી યાદ રાખવી)
                            </div>
                        </div>
                    </div>
                    `
                },
                      

                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 2: આપેલ આકૃતિમાં, જો TP અને TQ એ O કેન્દ્રવાળા વર્તુળના સ્પર્શકો હોય અને &ang;POQ = 110&deg; હોય, તો &ang;PTQ શોધો.", 
                    question_desc: "વિકલ્પો: (A) 60&deg;  (B) 70&deg;  (C) 80&deg;  (D) 90&deg;",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની જાદુઈ ટ્રીક:</b><br>
                            કોઈ ગણતરી કરવાની જરૂર નથી! માત્ર એટલું યાદ રાખો કે કેન્દ્ર આગળ બનતો ખૂણો (અંદરનો) અને બહારના બિંદુ આગળ બનતો ખૂણો (બહારનો), આ બંનેનો <b>સરવાળો હંમેશા 180&deg;</b> થાય છે! (એટલે કે બંને એકબીજાના પૂરકકોણ હોય છે).
                        </div>

                        <div style='text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="60" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="100" cy="100" r="4" fill="#0f172a"/>
                                <text x="80" y="105" font-size="14" font-weight="bold">O</text>

                                <circle cx="260" cy="100" r="5" fill="#dc2626"/>
                                <text x="265" y="105" font-size="14" font-weight="bold" fill="#dc2626">T</text>

                                <line x1="260" y1="100" x2="125" y2="45" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="260" y1="100" x2="125" y2="155" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <circle cx="125" cy="45" r="4" fill="#1d4ed8"/>
                                <text x="120" y="35" font-size="14" font-weight="bold" fill="#1d4ed8">P</text>
                                <circle cx="125" cy="155" r="4" fill="#1d4ed8"/>
                                <text x="120" y="175" font-size="14" font-weight="bold" fill="#1d4ed8">Q</text>

                                <line x1="100" y1="100" x2="125" y2="45" stroke="#16a34a" stroke-width="2"/>
                                <line x1="100" y1="100" x2="125" y2="155" stroke="#16a34a" stroke-width="2"/>
                                
                                <path d="M 120 90 A 25 25 0 0 1 120 110" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <text x="125" y="105" font-size="12" font-weight="bold" fill="#ea580c">110&deg;</text>
                                
                                <path d="M 235 90 A 30 30 0 0 0 235 110" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="205" y="105" font-size="12" font-weight="bold" fill="#dc2626">?</text>
                                
                                <polyline points="115,50 120,58 130,54" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <polyline points="115,150 120,142 130,146" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>ગણતરી (વગર પેન ઉપાડીને!):</b><br>
                            આપણે જાણીએ છીએ કે ચતુષ્કોણ OPTQ માં <b>&ang;POQ + &ang;PTQ = 180&deg;</b> થાય.<br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                110&deg; + &ang;PTQ = 180&deg;<br><br>
                                
                                &ang;PTQ = 180&deg; - 110&deg;<br>
                                <b style='color:#dc2626; font-size:22px;'>&ang;PTQ = 70&deg;</b>
                            </div>
                            <div style='margin-top:10px; background-color:#fffbeb; border-left:4px solid #f59e0b; padding:8px; border-radius:4px;'>
                                <b style='color:#b45309;'>અંતિમ જવાબ: (B) 70&deg;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
             
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 3: જો O કેન્દ્રવાળા વર્તુળને બિંદુ P માંથી દોરેલા સ્પર્શકો PA અને PB વચ્ચે 80&deg; નો ખૂણો રચાતો હોય, તો &ang;POA = ____", 
                    question_desc: "વિકલ્પો: (A) 50&deg;  (B) 60&deg;  (C) 70&deg;  (D) 80&deg; (અડધા ખૂણાવાળો ટ્વિસ્ટેડ દાખલો)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            આ દાખલામાં આપણે આખો ખૂણો નહિ, પણ <b>અડધો ખૂણો (&ang;POA)</b> શોધવાનો છે! <br>
                            કેન્દ્ર O અને બહારના બિંદુ P ને જોડતી લાઈન, બંને ખૂણાઓના બરાબર બે <b>અડધા-અડધા (સરખા)</b> ભાગ કરે છે.
                        </div>

                        <div style='text-align:center; margin-bottom:15px; background-color:#f3e8ff; border:1px solid #d8b4fe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="80" cy="100" r="60" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="80" cy="100" r="4" fill="#0f172a"/>
                                <text x="65" y="105" font-size="14" font-weight="bold">O</text>

                                <circle cx="250" cy="100" r="5" fill="#dc2626"/>
                                <text x="255" y="105" font-size="14" font-weight="bold" fill="#dc2626">P</text>

                                <line x1="250" y1="100" x2="105" y2="45" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="250" y1="100" x2="105" y2="155" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <circle cx="105" cy="45" r="4" fill="#1d4ed8"/>
                                <text x="100" y="35" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                                <circle cx="105" cy="155" r="4" fill="#1d4ed8"/>
                                <text x="100" y="175" font-size="14" font-weight="bold" fill="#1d4ed8">B</text>

                                <line x1="80" y1="100" x2="105" y2="45" stroke="#16a34a" stroke-width="2"/>
                                <line x1="80" y1="100" x2="105" y2="155" stroke="#16a34a" stroke-width="2"/>
                                <line x1="80" y1="100" x2="250" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>

                                <path d="M 215 85 A 40 40 0 0 0 215 115" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="225" y="105" font-size="12" font-weight="bold" fill="#dc2626">80&deg;</text>
                                
                                <path d="M 95 90 A 20 20 0 0 0 100 100" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="110" y="95" font-size="12" font-weight="bold" fill="#1d4ed8">?</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>ગણતરીનાં સ્ટેપ્સ:</b><br>
                            <span style='color:#0f172a; font-size:14px;'>1. આખો ખૂણો &ang;APB = 80&deg; છે. <br>
                            2. <b>OP રેખા</b> તેના બરાબર બે અડધા ભાગ કરે છે, તેથી અડધો ખૂણો <b>&ang;APO = 80/2 = 40&deg;</b> થાય.<br>
                            3. હવે ઉપરના નાના ત્રિકોણ &Delta;OAP માં ત્રણેય ખૂણાનો સરવાળો 180&deg; થાય.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                &ang;A + &ang;APO + &ang;POA = 180&deg;<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(&ang;A કાટખૂણો હોવાથી 90&deg; મૂકતા)</i></span><br>
                                90&deg; + 40&deg; + &ang;POA = 180&deg;<br>
                                130&deg; + &ang;POA = 180&deg;<br><br>

                                &ang;POA = 180&deg; - 130&deg;<br>
                                <b style='color:#dc2626; font-size:22px;'>&ang;POA = 50&deg;</b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d;'>અંતિમ જવાબ: (A) 50&deg;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                      
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 4: સાબિત કરો કે વર્તુળના વ્યાસના અંત્યબિંદુઓએ દોરેલા સ્પર્શકો પરસ્પર સમાંતર હોય છે.", 
                    question_desc: "2025 બોર્ડ માટે 2 કે 3 માર્ક્સનો સૌથી વધુ પૂછાતો સાબિતીવાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            કોઈપણ બે રેખાઓને સમાંતર સાબિત કરવા માટે આપણે ધોરણ 9 નો નિયમ વાપરીશું: જો <b>અંતઃયુગ્મકોણો (Z આકારના ખૂણાઓ) સમાન થાય</b>, તો તે બે રેખાઓ એકબીજાને સમાંતર જ હોય! અહીં પ્રમેય 10.1 (ત્રિજ્યા અને સ્પર્શક વચ્ચે 90&deg; નો ખૂણો બને છે) નો ઉપયોગ થશે.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="110" r="70" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="150" cy="110" r="4" fill="#0f172a"/>
                                <text x="145" y="95" font-size="14" font-weight="bold">O</text>

                                <line x1="80" y1="110" x2="220" y2="110" stroke="#16a34a" stroke-width="2"/>
                                <circle cx="80" cy="110" r="4" fill="#16a34a"/>
                                <circle cx="220" cy="110" r="4" fill="#16a34a"/>
                                <text x="65" y="105" font-size="14" font-weight="bold">A</text>
                                <text x="230" y="105" font-size="14" font-weight="bold">B</text>

                                <line x1="80" y1="30" x2="80" y2="190" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="65" y="40" font-size="14" font-weight="bold" fill="#1d4ed8">P</text>
                                <text x="65" y="185" font-size="14" font-weight="bold" fill="#1d4ed8">Q</text>

                                <line x1="220" y1="30" x2="220" y2="190" stroke="#dc2626" stroke-width="2"/>
                                <text x="230" y="40" font-size="14" font-weight="bold" fill="#dc2626">R</text>
                                <text x="230" y="185" font-size="14" font-weight="bold" fill="#dc2626">S</text>

                                <polyline points="80,100 90,100 90,110" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <polyline points="220,120 210,120 210,110" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                
                                <path d="M 80 40 L 80 110 L 220 110 L 220 180" fill="none" stroke="#ea580c" stroke-width="3" stroke-dasharray="4,4" opacity="0.6"/>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>પક્ષ (Given):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>ધારો કે O કેન્દ્રવાળા વર્તુળનો એક વ્યાસ AB છે. <b>AB ના અંત્યબિંદુઓ A અને B</b> આગળ દોરેલા સ્પર્શકો અનુક્રમે <b>PQ</b> અને <b>RS</b> છે.</span>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સાધ્ય (To Prove):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>સ્પર્શકો એકબીજાને સમાંતર છે, એટલે કે <b>PQ || RS</b></span>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. આપણે જાણીએ છીએ કે, <b>વર્તુળના કોઈ બિંદુએ દોરેલો સ્પર્શક સ્પર્શબિંદુમાંથી પસાર થતી ત્રિજ્યાને લંબ (90&deg;) હોય છે. (પ્રમેય 10.1)</b><br><br>
                                
                                2. અહીં <b>OA</b> એ ત્રિજ્યા છે અને <b>PQ</b> એ A બિંદુએ સ્પર્શક છે.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, OA &perp; PQ  &nbsp;&#10551;&nbsp; <b style='color:#1d4ed8;'>&ang;OAP = 90&deg;</b> &nbsp;... (પરિણામ 1)<br><br>

                                3. તે જ રીતે, <b>OB</b> એ ત્રિજ્યા છે અને <b>RS</b> એ B બિંદુએ સ્પર્શક છે.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, OB &perp; RS  &nbsp;&#10551;&nbsp; <b style='color:#dc2626;'>&ang;OBS = 90&deg;</b> &nbsp;... (પરિણામ 2)<br><br>

                                4. પરિણામ 1 અને 2 પરથી કહી શકાય કે:<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#ea580c; font-size:18px;'>&ang;OAP = &ang;OBS (બંને 90&deg; છે)</b><br><br>

                                5. આકૃતિમાં ધ્યાનથી જુઓ, રેખા PQ અને RS માટે <b>રેખા AB એ છેદિકા</b> તરીકે વર્તે છે.<br>
                                &nbsp;&nbsp;&nbsp;અને &ang;OAP અને &ang;OBS એ છેદિકાની સામસામેની બાજુએ બનેલા <b>અંતઃયુગ્મકોણો (Z આકારના ખૂણા)</b> છે.<br><br>
                                
                                6. <b>નિયમ:</b> જ્યારે કોઈ બે રેખાઓની છેદિકાથી બનતા અંતઃયુગ્મકોણો સમાન હોય, તો તે બે <b>રેખાઓ હંમેશા સમાંતર હોય છે.</b><br><br>
                                
                                <b style='color:#15803d; font-size:18px;'>તેથી, PQ || RS સાબિત થાય છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                    
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 5: સાબિત કરો કે વર્તુળના સ્પર્શકના સ્પર્શબિંદુમાંથી દોરેલો લંબ વર્તુળના કેન્દ્રમાંથી પસાર થાય છે.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે વિરોધાભાસની રીત (Proof by Contradiction) વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આ દાખલો <b>'વિરોધાભાસની રીત'</b> થી ગણાય છે. એટલે કે આપણે પહેલા એવું <b>ખોટું ધારીશું</b> કે લંબ કેન્દ્રમાંથી નહિ, પણ કોઈ બીજા બિંદુમાંથી પસાર થાય છે. પછી છેલ્લે આપણી જ ધારણા ખોટી સાબિત કરી દઈશું!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="140" cy="90" r="70" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
                                
                                <circle cx="140" cy="90" r="4" fill="#0f172a"/>
                                <text x="125" y="85" font-size="14" font-weight="bold">O</text>

                                <circle cx="170" cy="90" r="4" fill="#dc2626"/>
                                <text x="175" y="85" font-size="14" font-weight="bold" fill="#dc2626">O'</text>

                                <line x1="40" y1="160" x2="240" y2="160" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="45" y="180" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                                <text x="230" y="180" font-size="14" font-weight="bold" fill="#1d4ed8">B</text>

                                <circle cx="140" cy="160" r="5" fill="#16a34a"/>
                                <text x="145" y="185" font-size="14" font-weight="bold" fill="#16a34a">P</text>

                                <line x1="140" y1="90" x2="140" y2="160" stroke="#0f172a" stroke-width="2"/>
                                <polyline points="140,150 150,150 150,160" fill="none" stroke="#0f172a" stroke-width="1.5"/>

                                <line x1="170" y1="90" x2="140" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,5"/>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>પક્ષ (Given):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>ધારો કે <b>O કેન્દ્રવાળા</b> વર્તુળનો એક સ્પર્શક <b>AB</b> છે, અને તેનું <b>સ્પર્શબિંદુ P</b> છે.</span>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સાધ્ય (To Prove):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>સ્પર્શબિંદુ P આગળ દોરેલો લંબ વર્તુળના <b>કેન્દ્ર O માંથી જ પસાર થાય છે.</b></span>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. ધારો કે સ્પર્શબિંદુ P આગળ દોરેલો <b>લંબ કેન્દ્ર O માંથી પસાર થતો નથી</b>, પરંતુ કોઈ બીજા <b>બિંદુ O'</b> માંથી પસાર થાય છે.<br><br>
                                
                                2. આપણી ધારણા મુજબ <b>O'P એ સ્પર્શક AB ને લંબ છે</b>.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#dc2626;'>&ang;O'PB = 90&deg;</b> &nbsp;... (પરિણામ 1)<br><br>

                                3. પરંતુ, પ્રમેય 10.1 ના નિયમ મુજબ આપણે જાણીએ છીએ કે <b>સ્પર્શબિંદુમાંથી દોરેલી સાચી ત્રિજ્યા (OP) એ સ્પર્શકને લંબ હોય છે.</b><br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#1d4ed8;'>&ang;OPB = 90&deg;</b> &nbsp;... (પરિણામ 2)<br><br>

                                4. પરિણામ 1 અને 2 ને સરખાવતાં:<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#ea580c; font-size:18px;'>&ang;O'PB = &ang;OPB = 90&deg;</b><br><br>

                                5. આકૃતિ જોતાં સ્પષ્ટ થાય છે કે &ang;O'PB એ &ang;OPB નો એક ભાગ છે. એક નાનો ખૂણો આખા 90&deg; ના ખૂણા બરાબર ક્યારેય ન હોઈ શકે!<br>
                                &nbsp;&nbsp;&nbsp;આ <b>ફક્ત અને ફક્ત ત્યારે જ શક્ય બને, જ્યારે રેખા O'P અને OP એક જ હોય!</b> (એટલે કે O અને O' એક જ બિંદુ પર સંપાતી હોય).<br><br>
                                
                                6. તેથી, <b>આપણી ધારણા ખોટી છે.</b><br>
                                <b style='color:#15803d; font-size:18px;'>આમ સાબિત થાય છે કે સ્પર્શબિંદુ આગળ દોરેલો લંબ હંમેશા કેન્દ્ર O માંથી જ પસાર થાય છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                      
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 6: વર્તુળના કેન્દ્રથી 5 સેમી અંતરે આવેલા બિંદુ A થી દોરેલા સ્પર્શકની લંબાઈ 4 સેમી છે. વર્તુળની ત્રિજ્યા શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 2 માર્ક્સનો સૌથી સ્કોરિંગ અને સહેલો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            આખા ચેપ્ટરમાં આ ગોલ્ડન રૂલ યાદ રાખો: <b>"કેન્દ્ર, ત્રિજ્યા અને સ્પર્શક"</b> આ 3 શબ્દો ભેગા થાય એટલે ત્યાં <b>કાટકોણ ત્રિકોણ</b> જ બને! અને કાટકોણ ત્રિકોણ આવે એટલે <b>પાયથાગોરસ દાદા</b> જ યાદ આવે. બસ સૂત્ર મૂકો એટલે જવાબ સીધો હાથમાં!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="150" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 10 A 60 60 0 0 0 20 70 A 60 60 0 0 0 80 130" fill="none" stroke="#94a3b8" stroke-width="2"/>
                                
                                <polygon points="80,70 80,20 240,20" fill="#eff6ff" stroke="#0f172a" stroke-width="2"/>
                                
                                <polyline points="80,30 90,30 90,20" fill="none" stroke="#dc2626" stroke-width="2"/>
                                
                                <circle cx="80" cy="70" r="4" fill="#0f172a"/>
                                <text x="60" y="85" font-size="14" font-weight="bold">O (કેન્દ્ર)</text>
                                
                                <circle cx="80" cy="20" r="4" fill="#0f172a"/>
                                <text x="65" y="15" font-size="14" font-weight="bold">B</text>
                                
                                <circle cx="240" cy="20" r="4" fill="#0f172a"/>
                                <text x="245" y="25" font-size="14" font-weight="bold">A</text>
                                
                                <text x="20" y="50" font-size="14" fill="#dc2626" font-weight="bold">r = ?</text>
                                <text x="130" y="15" font-size="14" fill="#1d4ed8" font-weight="bold">4 cm (સ્પર્શક)</text>
                                <text x="140" y="65" font-size="14" fill="#16a34a" font-weight="bold">5 cm (અંતર)</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            આકૃતિ મુજબ ધારો કે O કેન્દ્રિત વર્તુળ છે. <b>A એ બહારનું બિંદુ</b> છે.<br>
                            • કેન્દ્રથી અંતર (કર્ણ) <b>OA = 5 સેમી</b><br>
                            • સ્પર્શકની લંબાઈ (પાયો) <b>AB = 4 સેમી</b><br>
                            • ત્રિજ્યા (વેધ) <b>OB = r (શોધવાની છે)</b><br>
                            <span style='color:#0f172a; font-size:14px;'>પ્રમેય 10.1 મુજબ, ત્રિજ્યા સ્પર્શકને લંબ હોય છે, તેથી &ang;OBA = 90&deg; થાય.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પાયથાગોરસના પ્રમેયથી ગણતરી</b><br>
                            કાટકોણ &Delta;OBA માં પાયથાગોરસના નિયમ મુજબ:
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.0; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                કર્ણ² = પાબા² + વેધ²<br>
                                OA² = AB² + OB²<br>
                                (5)² = (4)² + r²<br>
                                25 = 16 + r²<br><br>
                                
                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(16 ને ડાબી બાજુ લાવતા બાદબાકી થશે)</i></span><br>
                                r² = 25 - 16<br>
                                r² = 9<br><br>

                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(9 નું વર્ગમૂળ કાઢતા)</i></span><br>
                                r = &radic;<span style='border-top:1.5px solid black; display:inline-block; padding-top:1px;'>&nbsp;9&nbsp;</span><br>
                                <b style='color:#dc2626; font-size:22px;'>r = 3 સેમી</b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> વર્તુળની ત્રિજ્યા <b><span style='color:#be123c;'>3 સેમી</span></b> છે. <span style='color:#0f172a; font-size:14px;'>(યાદ રાખો: 3-4-5 ની પાયથાગોરસ ત્રિપુટી છે!)</span>
                            </div>
                        </div>
                    </div>
                    `
                },
                      
        
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 7: બે સમકેન્દ્રી વર્તુળોની ત્રિજ્યાઓ 5 સેમી અને 3 સેમી છે. મોટા વર્તુળની જીવા નાના વર્તુળને સ્પર્શે છે, તો તેની લંબાઈ શોધો.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો 100% પૂછાતો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની માસ્ટર ટ્રીક:</b><br>
                            <b>સમકેન્દ્રી વર્તુળો (Concentric Circles)</b> એટલે એકની અંદર બીજું વર્તુળ (જેમ કે ડુંગળીના પડ!). <br>
                            અહીં મોટા વર્તુળની જીવા એ નાના વર્તુળ માટે 'સ્પર્શક' બની જાય છે. ધોરણ 9 ના નિયમ મુજબ, કેન્દ્રમાંથી દોરેલો લંબ જીવાના <b>બે સરખા ભાગ</b> કરે છે. એટલે આપણે પાયથાગોરસથી અડધો ભાગ શોધીને તેને બમણો (Double) કરીશું!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="90" r="75" fill="#f0f9ff" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="150" cy="90" r="45" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
                                
                                <circle cx="150" cy="90" r="4" fill="#0f172a"/>
                                <text x="145" y="80" font-size="14" font-weight="bold">O</text>

                                <line x1="90" y1="135" x2="210" y2="135" stroke="#dc2626" stroke-width="3"/>
                                <circle cx="90" cy="135" r="4" fill="#dc2626"/>
                                <circle cx="210" cy="135" r="4" fill="#dc2626"/>
                                <circle cx="150" cy="135" r="4" fill="#0f172a"/>
                                
                                <text x="75" y="140" font-size="14" font-weight="bold" fill="#dc2626">A</text>
                                <text x="220" y="140" font-size="14" font-weight="bold" fill="#dc2626">B</text>
                                <text x="145" y="155" font-size="14" font-weight="bold">P (સ્પર્શબિંદુ)</text>

                                <line x1="150" y1="90" x2="150" y2="135" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="150,125 160,125 160,135" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="155" y="115" font-size="14" font-weight="bold" fill="#16a34a">3</text>

                                <line x1="150" y1="90" x2="90" y2="135" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,4"/>
                                <text x="110" y="105" font-size="14" font-weight="bold" fill="#1d4ed8">5</text>

                                <line x1="120" y1="130" x2="120" y2="140" stroke="#0f172a" stroke-width="2"/>
                                <line x1="180" y1="130" x2="180" y2="140" stroke="#0f172a" stroke-width="2"/>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: આકૃતિ પરથી માહિતી</b><br>
                            ધારો કે O કેન્દ્રવાળા બે સમકેન્દ્રી વર્તુળો છે.<br>
                            • નાના વર્તુળની ત્રિજ્યા <b>OP = 3 સેમી</b> છે.<br>
                            • મોટા વર્તુળની ત્રિજ્યા (કર્ણ) <b>OA = 5 સેમી</b> છે.<br>
                            • મોટા વર્તુળની જીવા <b>AB</b> એ નાના વર્તુળને બિંદુ <b>P</b> આગળ સ્પર્શે છે.<br>
                            <span style='color:#0f172a; font-size:14px;'>પ્રમેય 10.1 મુજબ, ત્રિજ્યા OP એ સ્પર્શક AB ને લંબ છે. તેથી &ang;OPA = 90&deg; થાય.</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કાટકોણ ત્રિકોણમાં પાયથાગોરસ</b><br>
                            કાટકોણ &Delta;OPA માં પાયથાગોરસના પ્રમેય મુજબ:
                            <div style='overflow-x:auto; white-space:nowrap; font-family:monospace; font-size:18px; margin-top:5px; line-height:2.0; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                OA² = OP² + AP²<br>
                                (5)² = (3)² + AP²<br>
                                25 = 9 + AP²<br><br>
                                
                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(9 ને ડાબી બાજુ લાવતા બાદબાકી થશે)</i></span><br>
                                AP² = 25 - 9<br>
                                AP² = 16<br><br>

                                <span style='color:#047857; font-size:14px; font-family:sans-serif;'><i>(16 નું વર્ગમૂળ કાઢતા)</i></span><br>
                                AP = &radic;<span style='border-top:1.5px solid black; display:inline-block; padding-top:1px;'>&nbsp;16&nbsp;</span><br>
                                <b style='color:#1d4ed8; font-size:22px;'>AP = 4 સેમી</b> <span style='color:#0f172a; font-size:14px; font-family:sans-serif;'>(આ જીવાનો અડધો ભાગ મળ્યો)</span>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: આખી જીવાની લંબાઈ શોધવી</b><br>
                            ધોરણ 9 ના નિયમ મુજબ: કેન્દ્રમાંથી જીવા પર દોરેલો લંબ જીવાને દુભાગે છે (બે સરખા ભાગ કરે છે).<br>
                            તેથી, <b>આખી જીવા AB = 2 &times; AP</b> થાય.
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                AB = 2 &times; 4<br>
                                <b>AB = <b style='color:#dc2626; font-size:24px;'>8 સેમી</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> મોટા વર્તુળની જીવાની લંબાઈ <b style='color:#be123c;'>8 સેમી</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                            
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 8: ચતુષ્કોણ ABCD એક વર્તુળને પરિગત છે (એટલે કે વર્તુળની ચારેય બાજુઓને અડે છે). સાબિત કરો કે: AB + CD = AD + BC.", 
                    question_desc: "2024 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો સૌથી સહેલો અને વારંવાર પૂછાતો સાબિતીવાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - મેજિક ટ્રીક:</b><br>
                            આખા દાખલામાં માત્ર આપણો <b>માસ્ટર નિયમ (પ્રમેય 10.2)</b> જ વાપરવાનો છે! <br>
                            ચતુષ્કોણના 4 ખૂણાઓ (A, B, C, D) ને 4 <b>"બહારના બિંદુઓ"</b> માની લો. દરેક બિંદુમાંથી વર્તુળ પર 2 સ્પર્શક નીકળશે, જે બંનેની લંબાઈ સમાન હશે (જેમ કે AP = AS). બસ, ચારેય બિંદુઓ માટે આવા 4 સમીકરણ બનાવીને તેમનો <b>સીધો સરવાળો</b> કરી દો એટલે જવાબ 100% આવી જશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="140" cy="130" r="70" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="140" cy="130" r="4" fill="#0f172a"/>
                                <text x="135" y="150" font-size="14" font-weight="bold">O</text>

                                <polygon points="70,200 210,200 210,60 70,60" fill="none" stroke="#0f172a" stroke-width="2"/>

                                <text x="50" y="215" font-size="16" font-weight="bold" fill="#dc2626">A</text>
                                <text x="215" y="215" font-size="16" font-weight="bold" fill="#dc2626">B</text>
                                <text x="215" y="55" font-size="16" font-weight="bold" fill="#dc2626">C</text>
                                <text x="50" y="55" font-size="16" font-weight="bold" fill="#dc2626">D</text>

                                <circle cx="140" cy="200" r="5" fill="#16a34a"/>
                                <text x="135" y="220" font-size="14" font-weight="bold" fill="#16a34a">P</text>

                                <circle cx="210" cy="130" r="5" fill="#16a34a"/>
                                <text x="220" y="135" font-size="14" font-weight="bold" fill="#16a34a">Q</text>

                                <circle cx="140" cy="60" r="5" fill="#16a34a"/>
                                <text x="135" y="50" font-size="14" font-weight="bold" fill="#16a34a">R</text>

                                <circle cx="70" cy="130" r="5" fill="#16a34a"/>
                                <text x="50" y="135" font-size="14" font-weight="bold" fill="#16a34a">S</text>

                                <line x1="70" y1="200" x2="140" y2="200" stroke="#ea580c" stroke-width="4"/> <line x1="70" y1="200" x2="70" y2="130" stroke="#ea580c" stroke-width="4"/> <text x="80" y="180" font-size="12" font-weight="bold" fill="#ea580c">સમાન</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>પક્ષ (Given):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>ચતુષ્કોણ ABCD એક વર્તુળને પરિગત છે (વર્તુળ ચારેય બાજુઓને અડે છે).<br>
                            વર્તુળ ચતુષ્કોણની બાજુઓ AB, BC, CD અને AD ને અનુક્રમે <b>P, Q, R અને S બિંદુએ સ્પર્શે છે.</b></span>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સાધ્ય (To Prove):</b><br>
                            <span style='color:#0f172a; font-size:15px;'><b style='color:#dc2626;'>AB + CD = AD + BC</b></span>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. <b>પ્રમેય 10.2 મુજબ:</b> "વર્તુળની બહારના બિંદુમાંથી દોરેલા સ્પર્શકોની લંબાઈ સમાન હોય છે."<br><br>
                                
                                2. આ નિયમ ચારેય ખૂણાઓ (A, B, C, D) માટે લગાડતાં:<br>
                                &nbsp;&nbsp;&nbsp;બિંદુ A માંથી: <b style='color:#1d4ed8;'>AP = AS</b> &nbsp;&nbsp;&nbsp;... (સમીકરણ 1)<br>
                                &nbsp;&nbsp;&nbsp;બિંદુ B માંથી: <b style='color:#1d4ed8;'>BP = BQ</b> &nbsp;&nbsp;&nbsp;... (સમીકરણ 2)<br>
                                &nbsp;&nbsp;&nbsp;બિંદુ C માંથી: <b style='color:#1d4ed8;'>CR = CQ</b> &nbsp;&nbsp;&nbsp;... (સમીકરણ 3)<br>
                                &nbsp;&nbsp;&nbsp;બિંદુ D માંથી: <b style='color:#1d4ed8;'>DR = DS</b> &nbsp;&nbsp;&nbsp;... (સમીકરણ 4)<br><br>

                                3. હવે <b>ચારેય સમીકરણોનો સરવાળો</b> કરતાં (ડાબી બાજુનો સરવાળો ડાબી બાજુ, જમણી બાજુનો જમણી બાજુ):<br>
                                &nbsp;&nbsp;&nbsp;(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)<br><br>

                                4. <b>આકૃતિમાં ધ્યાનથી જુઓ:</b><br>
                                &nbsp;&nbsp;&nbsp;• AP અને BP ભેગા મળીને <b>AB</b> બનાવે છે.<br>
                                &nbsp;&nbsp;&nbsp;• CR અને DR ભેગા મળીને <b>CD</b> બનાવે છે.<br>
                                &nbsp;&nbsp;&nbsp;• AS અને DS ભેગા મળીને <b>AD</b> બનાવે છે.<br>
                                &nbsp;&nbsp;&nbsp;• BQ અને CQ ભેગા મળીને <b>BC</b> બનાવે છે.<br><br>
                                
                                5. ઉપરની કિંમતો મૂકતાં:<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#15803d; font-size:22px;'>AB + CD = AD + BC</b><br><br>
                                
                                <b>આમ, સાબિત થાય છે!</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 9: આકૃતિમાં, O કેન્દ્રવાળા વર્તુળના બે સમાંતર સ્પર્શકો XY અને X'Y' છે. સ્પર્શબિંદુ C વાળો ત્રીજો સ્પર્શક AB એ XY ને A અને X'Y' ને B બિંદુમાં છેદે છે. સાબિત કરો કે &ang;AOB = 90&deg;.", 
                    question_desc: "2025 બોર્ડ માટે 4 માર્ક્સનો સૌથી લાંબો અને લોજિકલ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આ દાખલાને આપણે <b>"ત્રિકોણોની એકરૂપતા (Congruency)"</b> ની મદદથી ગણીશું. <br>
                            સૌથી પહેલા કેન્દ્ર O ને સ્પર્શબિંદુ C સાથે જોડી દો. પછી ઉપર બનતા બે ત્રિકોણોને "જુડવા (એકરૂપ)" બતાવી દો, એટલે તેમના ખૂણા સરખા થઈ જશે. એ જ રીતે નીચેના બે ત્રિકોણ પણ સરખા થશે. છેલ્લે સીધી લાઈનનો 180&deg; વાળો નિયમ વાપરશો એટલે 90&deg; આપોઆપ આવી જશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="300" height="280" viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="150" cy="140" r="60" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="150" cy="140" r="4" fill="#0f172a"/>
                                <text x="135" y="145" font-size="14" font-weight="bold">O</text>

                                <line x1="90" y1="140" x2="210" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                <circle cx="90" cy="140" r="4" fill="#16a34a"/>
                                <text x="75" y="145" font-size="14" font-weight="bold" fill="#16a34a">P</text>
                                <circle cx="210" cy="140" r="4" fill="#16a34a"/>
                                <text x="220" y="145" font-size="14" font-weight="bold" fill="#16a34a">Q</text>

                                <line x1="90" y1="40" x2="90" y2="240" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="75" y="50" font-size="14" font-weight="bold" fill="#1d4ed8">X</text>
                                <text x="75" y="235" font-size="14" font-weight="bold" fill="#1d4ed8">Y</text>

                                <line x1="210" y1="40" x2="210" y2="240" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="220" y="50" font-size="14" font-weight="bold" fill="#1d4ed8">X'</text>
                                <text x="220" y="235" font-size="14" font-weight="bold" fill="#1d4ed8">Y'</text>

                                <line x1="90" y1="80" x2="210" y2="80" stroke="#dc2626" stroke-width="2"/>
                                <circle cx="90" cy="80" r="5" fill="#dc2626"/>
                                <text x="70" y="85" font-size="14" font-weight="bold" fill="#dc2626">A</text>
                                
                                <circle cx="210" cy="80" r="5" fill="#dc2626"/>
                                <text x="220" y="85" font-size="14" font-weight="bold" fill="#dc2626">B</text>

                                <circle cx="150" cy="80" r="4" fill="#0f172a"/>
                                <text x="145" y="70" font-size="14" font-weight="bold">C</text>

                                <line x1="150" y1="140" x2="150" y2="80" stroke="#ea580c" stroke-width="2"/> <line x1="150" y1="140" x2="90" y2="80" stroke="#9333ea" stroke-width="2"/> <line x1="150" y1="140" x2="210" y2="80" stroke="#9333ea" stroke-width="2"/> <path d="M 125 140 A 25 25 0 0 1 135 125" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="110" y="130" font-size="10" font-weight="bold">1</text>
                                
                                <path d="M 140 115 A 25 25 0 0 1 150 115" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="135" y="110" font-size="10" font-weight="bold">2</text>
                                
                                <path d="M 150 115 A 25 25 0 0 1 160 115" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="160" y="110" font-size="10" font-weight="bold">3</text>
                                
                                <path d="M 165 125 A 25 25 0 0 1 175 140" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="175" y="130" font-size="10" font-weight="bold">4</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>પક્ષ અને સાધ્ય:</b><br>
                            <span style='color:#0f172a; font-size:14px;'><b>પક્ષ:</b> O કેન્દ્રવાળા વર્તુળના સમાંતર સ્પર્શકો XY અને X'Y' છે. સ્પર્શબિંદુ C વાળો ત્રીજો સ્પર્શક AB તેમને છેદે છે.<br>
                            <b>સાધ્ય:</b> <b>&ang;AOB = 90&deg;</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. સૌથી પહેલા <b>કેન્દ્ર O અને સ્પર્શબિંદુ C ને જોડો</b> (OC દોરો).<br><br>
                                
                                2. હવે ડાબી બાજુના બે ત્રિકોણો <b>&Delta;OPA</b> અને <b>&Delta;OCA</b> માં જુઓ:<br>
                                &nbsp;&nbsp;&nbsp;• OP = OC &nbsp;<i>(એક જ વર્તુળની ત્રિજ્યાઓ)</i><br>
                                &nbsp;&nbsp;&nbsp;• AP = AC &nbsp;<i>(બહારના બિંદુ A માંથી દોરેલા સ્પર્શકો - પ્રમેય 10.2)</i><br>
                                &nbsp;&nbsp;&nbsp;• OA = OA &nbsp;<i>(બંનેની સામાન્ય બાજુ)</i><br><br>

                                3. <b>બા-બા-બા (SSS)</b> એકરૂપતાની શરત મુજબ, આ બંને ત્રિકોણો બરાબર સરખા (જુડવા) છે!<br>
                                &nbsp;&nbsp;&nbsp;તેથી, તેમના ખૂણા પણ સરખા થાય: <b style='color:#1d4ed8;'>&ang;POA = &ang;COA</b> &nbsp;... (પરિણામ 1)<br><br>

                                4. બિલકુલ આ જ રીતે, જમણી બાજુના બે ત્રિકોણો <b>&Delta;OQB</b> અને <b>&Delta;OCB</b> પણ એકરૂપ થાય.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#1d4ed8;'>&ang;QOB = &ang;COB</b> &nbsp;... (પરિણામ 2)<br><br>

                                5. હવે, POQ એ સીધી રેખા (વ્યાસ) છે. એટલે તેના બધા ખૂણાઓનો <b>કુલ સરવાળો 180&deg;</b> થાય.<br>
                                &nbsp;&nbsp;&nbsp;&ang;POA + &ang;COA + &ang;COB + &ang;QOB = 180&deg;<br><br>

                                6. <b>પરિણામ 1 અને 2 નો ઉપયોગ કરતા:</b> (&ang;POA ની જગ્યાએ &ang;COA અને &ang;QOB ની જગ્યાએ &ang;COB મૂકતા)<br>
                                &nbsp;&nbsp;&nbsp;(&ang;COA) + &ang;COA + &ang;COB + (&ang;COB) = 180&deg;<br>
                                &nbsp;&nbsp;&nbsp;2 &ang;COA + 2 &ang;COB = 180&deg;<br>
                                &nbsp;&nbsp;&nbsp;2 (&ang;COA + &ang;COB) = 180&deg;<br><br>

                                7. 2 ને સામે ભાગાકારમાં મોકલતા:<br>
                                &nbsp;&nbsp;&nbsp;&ang;COA + &ang;COB = 180&deg; / 2<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#ea580c;'>&ang;COA + &ang;COB = 90&deg;</b><br><br>

                                8. આકૃતિમાં ધ્યાનથી જુઓ, &ang;COA અને &ang;COB બંને ભેગા મળીને આખો <b>&ang;AOB</b> બનાવે છે!<br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#15803d; font-size:22px;'>&ang;AOB = 90&deg;</b><br><br>
                                
                                <b>આમ, સાબિત થાય છે!</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                            

                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 10: સાબિત કરો કે વર્તુળની બહારના બિંદુમાંથી વર્તુળને દોરેલા બે સ્પર્શકો વચ્ચેનો ખૂણો અને સ્પર્શબિંદુઓને કેન્દ્ર સાથે જોડતા રેખાખંડ વચ્ચેનો ખૂણો એકબીજાના પૂરક હોય છે.", 
                    question_desc: "2024 બોર્ડ માટે 2 કે 3 માર્ક્સનો સૌથી સહેલો સાબિતીવાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - મેજિક ટ્રીક:</b><br>
                            આપણે જાણીએ છીએ કે ચતુષ્કોણના <b>ચારેય ખૂણાઓનો સરવાળો 360&deg;</b> થાય છે.<br>
                            આકૃતિમાં પ્રમેય 10.1 મુજબ, ત્રિજ્યા અને સ્પર્શક વચ્ચેના 2 ખૂણા કાટખૂણા (90&deg; + 90&deg; = 180&deg;) બની જશે. તો હવે 360 માંથી 180 જાય, તો બાકીના 2 ખૂણાઓનો સરવાળો પણ <b>180&deg; (એટલે કે પૂરકકોણ)</b> જ વધશે ને! બસ આ જ સાબિત કરવાનું છે.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="110" r="60" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="100" cy="110" r="4" fill="#0f172a"/>
                                <text x="85" y="115" font-size="14" font-weight="bold">O</text>

                                <circle cx="260" cy="110" r="5" fill="#dc2626"/>
                                <text x="270" y="115" font-size="14" font-weight="bold" fill="#dc2626">P</text>

                                <line x1="260" y1="110" x2="125" y2="55" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="260" y1="110" x2="125" y2="165" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <circle cx="125" cy="55" r="4" fill="#1d4ed8"/>
                                <text x="115" y="45" font-size="14" font-weight="bold" fill="#1d4ed8">A</text>
                                
                                <circle cx="125" cy="165" r="4" fill="#1d4ed8"/>
                                <text x="115" y="185" font-size="14" font-weight="bold" fill="#1d4ed8">B</text>

                                <line x1="100" y1="110" x2="125" y2="55" stroke="#16a34a" stroke-width="2"/>
                                <line x1="100" y1="110" x2="125" y2="165" stroke="#16a34a" stroke-width="2"/>

                                <polyline points="115,60 120,68 130,64" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <polyline points="115,160 120,152 130,156" fill="none" stroke="#dc2626" stroke-width="2"/>
                                
                                <path d="M 120 100 A 25 25 0 0 1 120 120" fill="none" stroke="#ea580c" stroke-width="3"/>
                                <path d="M 235 100 A 30 30 0 0 0 235 120" fill="none" stroke="#ea580c" stroke-width="3"/>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>પક્ષ (Given):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>ધારો કે O કેન્દ્રવાળા વર્તુળની બહારના બિંદુ P માંથી દોરેલા બે સ્પર્શકો <b>PA અને PB</b> છે.<br>
                            તેમના સ્પર્શબિંદુઓ અનુક્રમે A અને B છે.</span>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સાધ્ય (To Prove):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>સ્પર્શકો વચ્ચેનો ખૂણો <b>(&ang;APB)</b> અને કેન્દ્ર આગળ બનતો ખૂણો <b>(&ang;AOB)</b> એકબીજાના પૂરક છે.<br>
                            એટલે કે: <b style='color:#dc2626;'>&ang;APB + &ang;AOB = 180&deg;</b></span>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. આપણે જાણીએ છીએ કે, વર્તુળના કોઈ બિંદુએ દોરેલો સ્પર્શક, સ્પર્શબિંદુમાંથી પસાર થતી ત્રિજ્યાને લંબ હોય છે (પ્રમેય 10.1).<br>
                                &nbsp;&nbsp;&nbsp;અહીં <b>OA &perp; PA</b> અને <b>OB &perp; PB</b> છે.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#1d4ed8;'>&ang;OAP = 90&deg;</b> અને <b style='color:#1d4ed8;'>&ang;OBP = 90&deg;</b> થશે.<br><br>

                                2. હવે, <b>ચતુષ્કોણ OAPB</b> માં વિચારો.<br>
                                &nbsp;&nbsp;&nbsp;ચતુષ્કોણના ચારેય ખૂણાઓનો સરવાળો <b>360&deg;</b> થાય છે.<br>
                                &nbsp;&nbsp;&nbsp;&ang;AOB + &ang;OAP + &ang;APB + &ang;OBP = 360&deg;<br><br>

                                3. ઉપરની કિંમતો (90&deg;) મૂકતાં:<br>
                                &nbsp;&nbsp;&nbsp;&ang;AOB + <b>90&deg;</b> + &ang;APB + <b>90&deg;</b> = 360&deg;<br>
                                &nbsp;&nbsp;&nbsp;&ang;AOB + &ang;APB + 180&deg; = 360&deg;<br><br>

                                4. 180&deg; ને બરાબરની પેલી બાજુ લઈ જતાં (માઇનસ થશે):<br>
                                &nbsp;&nbsp;&nbsp;&ang;AOB + &ang;APB = 360&deg; - 180&deg;<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#15803d; font-size:22px;'>&ang;AOB + &ang;APB = 180&deg;</b><br><br>
                                
                                <b>આમ સાબિત થાય છે કે, કેન્દ્ર આગળનો ખૂણો અને સ્પર્શકો વચ્ચેનો ખૂણો પૂરક હોય છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                            
        
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 11: સાબિત કરો કે વર્તુળને પરિગત સમાંતરબાજુ ચતુષ્કોણ એ સમબાજુ ચતુષ્કોણ છે.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો મોસ્ટ ફેવરિટ દાખલો (પ્રશ્ન 8 ની કોપી!)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આ દાખલાને જોઇને ગભરાશો નહિ! આ <b>90% દાખલો તો આપણે આગળ ગણેલો "પ્રશ્ન 8" જ છે!</b> પહેલા પ્રશ્ન 8 ની જેમ (AB + CD = AD + BC) સાબિત કરી દેવાનું. પછી "સમાંતરબાજુ" ની શરત (સામસામેની બાજુ સરખી) મૂકશો એટલે બધી બાજુઓ આપોઆપ સમાન (સમબાજુ) થઈ જશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="130" r="70" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="130" cy="130" r="4" fill="#0f172a"/>
                                <text x="125" y="150" font-size="14" font-weight="bold">O</text>

                                <polygon points="130,230 230,130 130,30 30,130" fill="none" stroke="#16a34a" stroke-width="2"/>

                                <text x="125" y="250" font-size="16" font-weight="bold" fill="#dc2626">A</text>
                                <text x="240" y="135" font-size="16" font-weight="bold" fill="#dc2626">B</text>
                                <text x="125" y="20" font-size="16" font-weight="bold" fill="#dc2626">C</text>
                                <text x="10" y="135" font-size="16" font-weight="bold" fill="#dc2626">D</text>

                                <circle cx="180" cy="180" r="4" fill="#0f172a"/>
                                <text x="190" y="195" font-size="14" font-weight="bold">P</text>

                                <circle cx="180" cy="80" r="4" fill="#0f172a"/>
                                <text x="190" y="75" font-size="14" font-weight="bold">Q</text>

                                <circle cx="80" cy="80" r="4" fill="#0f172a"/>
                                <text x="65" y="75" font-size="14" font-weight="bold">R</text>

                                <circle cx="80" cy="180" r="4" fill="#0f172a"/>
                                <text x="65" y="195" font-size="14" font-weight="bold">S</text>
                                
                                <line x1="175" y1="200" x2="185" y2="210" stroke="#ea580c" stroke-width="2"/>
                                <line x1="200" y1="100" x2="210" y2="110" stroke="#ea580c" stroke-width="2"/>
                                <line x1="100" y1="50" x2="110" y2="60" stroke="#ea580c" stroke-width="2"/>
                                <line x1="50" y1="150" x2="60" y2="160" stroke="#ea580c" stroke-width="2"/>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>પક્ષ (Given):</b><br>
                            <span style='color:#0f172a; font-size:15px;'><b>ABCD એક સમાંતરબાજુ ચતુષ્કોણ છે</b> જે વર્તુળને પરિગત છે. <br>
                            (સમાંતરબાજુની શરત: તેની સામસામેની બાજુઓ સમાન હોય, એટલે કે <b>AB = CD</b> અને <b>AD = BC</b> છે).</span>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સાધ્ય (To Prove):</b><br>
                            <span style='color:#0f172a; font-size:15px;'>ચતુષ્કોણ ABCD <b>સમબાજુ ચતુષ્કોણ</b> છે. (એટલે કે ચારેય બાજુઓ <b>AB = BC = CD = DA</b> સરખી છે).</span>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                <span style='color:#047857;'><i>(પહેલા પ્રશ્ન 8 ની જેમ જ લખીશું)</i></span><br>
                                1. પ્રમેય 10.2 મુજબ, બહારના બિંદુમાંથી દોરેલા સ્પર્શકો સમાન હોય છે.<br>
                                &nbsp;&nbsp;&nbsp;AP = AS &nbsp;(A માંથી)<br>
                                &nbsp;&nbsp;&nbsp;BP = BQ &nbsp;(B માંથી)<br>
                                &nbsp;&nbsp;&nbsp;CR = CQ &nbsp;(C માંથી)<br>
                                &nbsp;&nbsp;&nbsp;DR = DS &nbsp;(D માંથી)<br><br>

                                2. ચારેય નો સરવાળો કરતાં:<br>
                                &nbsp;&nbsp;&nbsp;(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#1d4ed8;'>AB + CD = AD + BC</b> &nbsp;&nbsp;&nbsp;... (પરિણામ 1)<br><br>

                                3. હવે પક્ષ મુજબ, ABCD <b>સમાંતરબાજુ ચતુષ્કોણ</b> છે. એટલે કે:<br>
                                &nbsp;&nbsp;&nbsp;<b>AB = CD</b> અને <b>AD = BC</b> થાય. &nbsp;&nbsp;&nbsp;... (પરિણામ 2)<br><br>

                                4. પરિણામ 1 માં કિંમતો મૂકતાં (CD ની જગ્યાએ AB, અને AD ની જગ્યાએ BC મૂકતાં):<br>
                                &nbsp;&nbsp;&nbsp;AB + <b style='color:#dc2626;'>AB</b> = <b style='color:#dc2626;'>BC</b> + BC<br>
                                &nbsp;&nbsp;&nbsp;2AB = 2BC<br><br>

                                5. બંને બાજુથી 2 ઉડી જશે:<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#ea580c; font-size:18px;'>AB = BC</b><br><br>

                                6. જો <b>AB = BC</b> થાય, અને આપણને પહેલેથી જ ખબર છે કે <b>AB = CD</b> અને <b>BC = AD</b> છે, તો તેનો અર્થ એ થયો કે ચારેય બાજુઓ એકબીજાને સમાન છે!<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#15803d; font-size:22px;'>AB = BC = CD = DA</b><br><br>
                                
                                <b>આમ સાબિત થાય છે કે, વર્તુળને પરિગત સમાંતરબાજુ ચતુષ્કોણ એ સમબાજુ ચતુષ્કોણ જ હોય છે!</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                            
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 12: 4 સેમી ત્રિજ્યાવાળા વર્તુળને પરિગત ત્રિકોણ ABC દોર્યો છે. રેખાખંડ BD અને DC ની લંબાઈ અનુક્રમે 8 સેમી અને 6 સેમી છે. બાજુઓ AB અને AC શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો સૌથી લાંબો અને માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની માસ્ટર ટ્રીક:</b><br>
                            આ દાખલાને ગણવા માટે આપણે ત્રિકોણનું ક્ષેત્રફળ <b>બે અલગ-અલગ રીતે</b> શોધીશું અને પછી બંનેને સામસામે સરખાવીશું.<br>
                            1. <b>હેરોનનું સૂત્ર:</b> (ધોરણ 9 વાળું: &radic;s(s-a)(s-b)(s-c))<br>
                            2. <b>સામાન્ય સૂત્ર:</b> (1/2 &times; પાયો &times; વેધ)
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="320" height="260" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="160,20 40,220 280,220" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                
                                <circle cx="160" cy="155" r="65" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="160" cy="155" r="4" fill="#0f172a"/>
                                <text x="155" y="145" font-size="14" font-weight="bold">O</text>

                                <circle cx="160" cy="220" r="4" fill="#dc2626"/>
                                <text x="155" y="240" font-size="14" font-weight="bold" fill="#dc2626">D</text>

                                <circle cx="215" cy="120" r="4" fill="#dc2626"/>
                                <text x="225" y="115" font-size="14" font-weight="bold" fill="#dc2626">E</text>

                                <circle cx="105" cy="120" r="4" fill="#dc2626"/>
                                <text x="85" y="115" font-size="14" font-weight="bold" fill="#dc2626">F</text>

                                <line x1="160" y1="155" x2="160" y2="20" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="160" y1="155" x2="40" y2="220" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="160" y1="155" x2="280" y2="220" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/>

                                <line x1="160" y1="155" x2="160" y2="220" stroke="#16a34a" stroke-width="2"/> <text x="165" y="195" font-size="14" font-weight="bold" fill="#16a34a">r=4</text>
                                
                                <line x1="160" y1="155" x2="105" y2="120" stroke="#16a34a" stroke-width="2"/> <line x1="160" y1="155" x2="215" y2="120" stroke="#16a34a" stroke-width="2"/> <text x="155" y="15" font-size="16" font-weight="bold">A</text>
                                <text x="25" y="230" font-size="16" font-weight="bold">B</text>
                                <text x="285" y="230" font-size="16" font-weight="bold">C</text>

                                <text x="90" y="235" font-size="14" font-weight="bold" fill="#1d4ed8">8 cm</text>
                                <text x="210" y="235" font-size="14" font-weight="bold" fill="#1d4ed8">6 cm</text>
                                
                                <text x="50" y="160" font-size="14" font-weight="bold" fill="#1d4ed8">8 cm</text>
                                <text x="250" y="160" font-size="14" font-weight="bold" fill="#1d4ed8">6 cm</text>

                                <text x="110" y="60" font-size="14" font-weight="bold" fill="#dc2626">x</text>
                                <text x="200" y="60" font-size="14" font-weight="bold" fill="#dc2626">x</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: બાજુઓની લંબાઈ ધારવી (પ્રમેય 10.2 મુજબ)</b><br>
                            <span style='color:#0f172a; font-size:14px;'>બહારના બિંદુમાંથી દોરેલા સ્પર્શકો સમાન હોય છે. તેથી:<br>
                            • <b>B માંથી:</b> BD = BF = <b style='color:#1d4ed8;'>8 સેમી</b><br>
                            • <b>C માંથી:</b> CD = CE = <b style='color:#1d4ed8;'>6 સેમી</b><br>
                            • <b>A માંથી:</b> ધારો કે AF = AE = <b style='color:#dc2626;'>x સેમી</b><br><br>
                            હવે ત્રિકોણની ત્રણેય બાજુઓ (a, b, c) ની લંબાઈ:<br>
                            <b>a (BC)</b> = 8 + 6 = 14 સેમી<br>
                            <b>b (AC)</b> = 6 + x સેમી<br>
                            <b>c (AB)</b> = 8 + x સેમી<br>
                            </span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: હેરોનના સૂત્રથી &Delta;ABC નું ક્ષેત્રફળ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <span style='color:#047857; font-size:14px;'><i>(સૌથી પહેલા અર્ધપરિમિતિ 's' શોધીએ)</i></span><br>
                                <b>s =</b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>a + b + c</span><span>2</span></span> 
                                <b> = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14 + (6 + x) + (8 + x)</span><span>2</span></span><br><br>
                                
                                <b>s =</b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>28 + 2x</span><span>2</span></span> <b> = <b style='color:#1d4ed8;'>14 + x</b></b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે હેરોનનું સૂત્ર)</i></span><br>
                                <b>ક્ષેત્રફળ = &radic;[ s(s-a)(s-b)(s-c) ]</b><br><br>
                                
                                • s - a = (14 + x) - 14 = <b>x</b><br>
                                • s - b = (14 + x) - (6 + x) = <b>8</b><br>
                                • s - c = (14 + x) - (8 + x) = <b>6</b><br><br>

                                ક્ષેત્રફળ = &radic;[ (14 + x) (x) (8) (6) ]<br>
                                <b style='color:#ea580c; font-size:18px;'>ક્ષેત્રફળ = &radic;[ 48x (14 + x) ]</b> &nbsp;&nbsp;&nbsp;... (પરિણામ 1)
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ત્રણેય નાના ત્રિકોણોના સરવાળાથી ક્ષેત્રફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>આકૃતિમાં જુઓ, આખો &Delta;ABC ત્રણ નાના ત્રિકોણોનો બનેલો છે: &Delta;OBC, &Delta;OCA અને &Delta;OAB. ત્રણેયનો વેધ (ત્રિજ્યા r) = 4 સેમી છે.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                ક્ષેત્રફળ = ક્ષે.(OBC) + ક્ષે.(OCA) + ક્ષે.(OAB)<br><br>
                                
                                = [ 1/2 &times; BC &times; r ] + [ 1/2 &times; AC &times; r ] + [ 1/2 &times; AB &times; r ]<br><br>

                                = [ 1/2 &times; 14 &times; 4 ] + [ 1/2 &times; (6+x) &times; 4 ] + [ 1/2 &times; (8+x) &times; 4 ]<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(દરેકમાં છેદ ઉડાડતા 4 ની જગ્યાએ 2 વધશે)</i></span><br>
                                = (14 &times; 2) + [(6+x) &times; 2] + [(8+x) &times; 2]<br>
                                = 28 + 12 + 2x + 16 + 2x<br>
                                = 56 + 4x<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(4 સામાન્ય કાઢતા)</i></span><br>
                                <b style='color:#1d4ed8; font-size:18px;'>ક્ષેત્રફળ = 4(14 + x)</b> &nbsp;&nbsp;&nbsp;... (પરિણામ 2)
                            </div>
                        </div>

                        <div style='background-color:#f3e8ff; border-left:4px solid #9333ea; padding:10px;'>
                            <b style='color:#7e22ce; font-size:16px;'>સ્ટેપ 4: બંને સમીકરણો સરખાવવા (અંતિમ ગણતરી)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffffff; border:1px solid #d8b4fe; padding:15px; border-radius:5px;'>
                                પરિણામ 1 = પરિણામ 2<br>
                                &radic;[ 48x (14 + x) ] = 4(14 + x)<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(વર્ગમૂળ કાઢવા બંને બાજુ વર્ગ (Square) કરતા)</i></span><br>
                                48x (14 + x) = 16 (14 + x)²<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંને બાજુથી એકવાર (14 + x) અને 16 નો ઘડિયો ઉડી જશે)</i></span><br>
                                3x = 14 + x<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(x ડાબી બાજુ માઇનસ થશે)</i></span><br>
                                3x - x = 14<br>
                                2x = 14<br>
                                <b style='color:#dc2626; font-size:22px;'>x = 7 સેમી</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે બાજુઓની લંબાઈ શોધીએ)</i></span><br>
                                • <b style='color:#15803d; font-size:18px;'>AB = 8 + x = 8 + 7 = 15 સેમી</b><br>
                                • <b style='color:#15803d; font-size:18px;'>AC = 6 + x = 6 + 7 = 13 સેમી</b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> માંગેલ બાજુઓ <b>AB = 15 સેમી</b> અને <b>AC = 13 સેમી</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 10.2 પ્રશ્ન 13: સાબિત કરો કે વર્તુળને પરિગત ચતુષ્કોણની સામસામેની બાજુઓ વર્તુળના કેન્દ્ર આગળ પૂરકકોણ આંતરે છે.", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો કેન્દ્ર આગળ 8 ખૂણાઓ વાળો મોસ્ટ IMP સાબિતીનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આ આકૃતિમાં <b>કેન્દ્ર O આગળ 1 થી 8 એમ કુલ 8 ખૂણાઓ</b> બને છે. <br>
                            આપણને ખબર છે કે વર્તુળના કેન્દ્ર આગળના બધા જ ખૂણાઓનો સરવાળો <b>360&deg;</b> થાય છે. આપણે સામસામેની જોડીઓ (જેમ કે ખૂણો 1 અને 2, 3 અને 4) ને એકરૂપતાથી સમાન સાબિત કરીને અડધા-અડધા કરી નાખીશું, એટલે જવાબ 180&deg; (પૂરકકોણ) આવી જશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="140" cy="140" r="80" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="140" cy="140" r="4" fill="#0f172a"/>
                                <text x="135" y="130" font-size="14" font-weight="bold">O</text>

                                <polygon points="60,220 220,220 220,60 60,60" fill="none" stroke="#0f172a" stroke-width="2"/>

                                <text x="40" y="235" font-size="16" font-weight="bold" fill="#dc2626">A</text>
                                <text x="230" y="235" font-size="16" font-weight="bold" fill="#dc2626">B</text>
                                <text x="230" y="50" font-size="16" font-weight="bold" fill="#dc2626">C</text>
                                <text x="40" y="50" font-size="16" font-weight="bold" fill="#dc2626">D</text>

                                <circle cx="140" cy="220" r="4" fill="#16a34a"/>
                                <text x="135" y="240" font-size="14" font-weight="bold" fill="#16a34a">P</text>

                                <circle cx="220" cy="140" r="4" fill="#16a34a"/>
                                <text x="230" y="145" font-size="14" font-weight="bold" fill="#16a34a">Q</text>

                                <circle cx="140" cy="60" r="4" fill="#16a34a"/>
                                <text x="135" y="50" font-size="14" font-weight="bold" fill="#16a34a">R</text>

                                <circle cx="60" cy="140" r="4" fill="#16a34a"/>
                                <text x="40" y="145" font-size="14" font-weight="bold" fill="#16a34a">S</text>

                                <line x1="140" y1="140" x2="60" y2="220" stroke="#ea580c" stroke-width="1.5"/>
                                <line x1="140" y1="140" x2="220" y2="220" stroke="#ea580c" stroke-width="1.5"/>
                                <line x1="140" y1="140" x2="220" y2="60" stroke="#ea580c" stroke-width="1.5"/>
                                <line x1="140" y1="140" x2="60" y2="60" stroke="#ea580c" stroke-width="1.5"/>

                                <line x1="140" y1="140" x2="140" y2="220" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="140" y1="140" x2="220" y2="140" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="140" y1="140" x2="140" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="140" y1="140" x2="60" y2="140" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>

                                <text x="120" y="170" font-size="12" font-weight="bold">1</text>
                                <text x="100" y="150" font-size="12" font-weight="bold">8</text>
                                <text x="100" y="130" font-size="12" font-weight="bold">7</text>
                                <text x="120" y="110" font-size="12" font-weight="bold">6</text>
                                <text x="150" y="110" font-size="12" font-weight="bold">5</text>
                                <text x="170" y="130" font-size="12" font-weight="bold">4</text>
                                <text x="170" y="150" font-size="12" font-weight="bold">3</text>
                                <text x="150" y="170" font-size="12" font-weight="bold">2</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>પક્ષ અને સાધ્ય:</b><br>
                            <span style='color:#0f172a; font-size:14px;'><b>પક્ષ:</b> ચતુષ્કોણ ABCD એક વર્તુળને પરિગત છે. વર્તુળનું કેન્દ્ર O છે.<br>
                            <b>સાધ્ય:</b> સામસામેની બાજુઓએ કેન્દ્ર આગળ બનાવેલા ખૂણાઓ પૂરક છે.<br>
                            એટલે કે: <b>&ang;AOB + &ang;COD = 180&deg;</b> અને <b>&ang;AOD + &ang;BOC = 180&deg;</b></span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સાબિતી (Proof):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; font-size:15px; line-height:1.8;'>
                                1. કેન્દ્ર O ને ચારેય સ્પર્શબિંદુઓ (P, Q, R, S) અને ચારેય શિરોબિંદુઓ (A, B, C, D) સાથે જોડો.<br><br>

                                2. ત્રિકોણોની એકરૂપતા મુજબ (જેમ પ્રશ્ન 9 માં કર્યું હતું), બહારના બિંદુ A માંથી બનતા બે ત્રિકોણો <b>&Delta;OAP</b> અને <b>&Delta;OAS</b> એકરૂપ થાય છે.<br>
                                &nbsp;&nbsp;&nbsp;તેથી તેમના કેન્દ્ર આગળના ખૂણા સરખા થાય: <b style='color:#1d4ed8;'>&ang;1 = &ang;8</b><br><br>

                                3. આ જ રીતે બાકીના બધા ખૂણાઓ માટે:<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#1d4ed8;'>&ang;2 = &ang;3</b> &nbsp;&nbsp;(B આગળથી)<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#1d4ed8;'>&ang;4 = &ang;5</b> &nbsp;&nbsp;(C આગળથી)<br>
                                &nbsp;&nbsp;&nbsp;<b style='color:#1d4ed8;'>&ang;6 = &ang;7</b> &nbsp;&nbsp;(D આગળથી)<br><br>

                                4. હવે, વર્તુળના કેન્દ્ર આગળ બનતા <b>બધા જ 8 ખૂણાઓનો સરવાળો 360&deg;</b> થાય છે.<br>
                                &nbsp;&nbsp;&nbsp;&ang;1 + &ang;2 + &ang;3 + &ang;4 + &ang;5 + &ang;6 + &ang;7 + &ang;8 = 360&deg;<br><br>

                                5. ઉપરના પરિણામો મૂકતાં (&ang;8 ની જગ્યાએ &ang;1, &ang;3 ની જગ્યાએ &ang;2 વગેરે મૂકતાં):<br>
                                &nbsp;&nbsp;&nbsp;(&ang;1 + &ang;1) + (&ang;2 + &ang;2) + (&ang;5 + &ang;5) + (&ang;6 + &ang;6) = 360&deg;<br>
                                &nbsp;&nbsp;&nbsp;2(&ang;1) + 2(&ang;2) + 2(&ang;5) + 2(&ang;6) = 360&deg;<br>
                                &nbsp;&nbsp;&nbsp;2 (&ang;1 + &ang;2 + &ang;5 + &ang;6) = 360&deg;<br><br>

                                6. 2 ને સામે ભાગાકારમાં મોકલતાં:<br>
                                &nbsp;&nbsp;&nbsp;(&ang;1 + &ang;2) + (&ang;5 + &ang;6) = 180&deg;<br><br>

                                7. આકૃતિમાં જુઓ:<br>
                                &nbsp;&nbsp;&nbsp;(&ang;1 + &ang;2) મળીને <b>&ang;AOB</b> બનાવે છે.<br>
                                &nbsp;&nbsp;&nbsp;(&ang;5 + &ang;6) મળીને <b>&ang;COD</b> બનાવે છે.<br>
                                &nbsp;&nbsp;&nbsp;તેથી, <b style='color:#15803d; font-size:22px;'>&ang;AOB + &ang;COD = 180&deg;</b><br><br>
                                
                                <b>આમ સાબિત થાય છે કે સામસામેની બાજુઓ કેન્દ્ર આગળ પૂરકકોણ બનાવે છે.</b>
                            </div>
                        </div>
                    </div>
                    `
                 }
          ]
     },
          
        // ------------------------------------
        // પ્રકરણ 11: વર્તુળ સંબંધિત ક્ષેત્રફળ (સ્વાધ્યાય 11.1 - ભાગ 1A)
        // ------------------------------------
        "11": {
            "chapterName": "પ્રકરણ 11 (સ્વાધ્યાય 11.1 - ભાગ 1A)",
            "chapterTitle": "ચેપ્ટરની માસ્ટર ચાવી (સૂત્રો) અને બેઝિક કન્સેપ્ટ",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: લઘુવૃત્તાંશ (Sector) અને લઘુવૃત્તખંડ (Segment) એટલે શું? કયા 3 સૂત્રો યાદ રાખવા?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 કન્સેપ્ટ સમજો (NJ Classes ની પિઝા ટ્રીક 🍕):</b><br>
                            1. <b>લઘુવૃત્તાંશ (Sector):</b> કેન્દ્રમાંથી કાપેલો પિઝાનો ટુકડો! (બે ત્રિજ્યા અને ચાપથી ઘેરાયેલો ભાગ).<br>
                            2. <b>લઘુવૃત્તખંડ (Segment):</b> પિઝાની સ્લાઈસ ખાધા પછી વધેલી પાછળની કડક કિનારી (Crust)! (જીવા અને ચાપ વચ્ચેનો ભાગ).
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="100" cy="100" r="4" fill="#0f172a"/>
                                <text x="85" y="105" font-size="14" font-weight="bold">O</text>

                                <path d="M 100 100 L 169 140 A 80 80 0 0 1 100 180 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <line x1="100" y1="100" x2="169" y2="140" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="100" y1="100" x2="100" y2="180" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <path d="M 100 130 A 30 30 0 0 0 125 115" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="110" y="135" font-size="14" font-weight="bold" fill="#dc2626">&theta;</text>

                                <line x1="169" y1="140" x2="100" y2="180" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                <path d="M 169 140 A 80 80 0 0 1 100 180 Z" fill="#bbf7d0"/> <text x="175" y="140" font-size="14" font-weight="bold">A</text>
                                <text x="95" y="195" font-size="14" font-weight="bold">B</text>
                                
                                <line x1="200" y1="50" x2="140" y2="140" stroke="#ea580c" stroke-width="1.5" marker-end="url(#arrow)"/>
                                <text x="210" y="45" font-size="14" font-weight="bold" fill="#ea580c">લઘુવૃત્તાંશ (આખી સ્લાઈસ)</text>

                                <line x1="200" y1="180" x2="150" y2="165" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrow)"/>
                                <text x="210" y="185" font-size="14" font-weight="bold" fill="#16a34a">લઘુવૃત્તખંડ (Crust)</text>

                                <defs>
                                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                      <path d="M0,0 L0,6 L9,3 z" fill="#0f172a" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>3 ગોલ્ડન સૂત્રો (તમામ દાખલા માટે):</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; line-height:2.0;'>
                                1. <b>લઘુચાપની લંબાઈ (l)</b> = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360&deg;</span></span> &times; 2&pi;r<br>
                                
                                2. <b style='color:#dc2626;'>લઘુવૃત્તાંશનું ક્ષેત્રફળ</b> = 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360&deg;</span></span> &times; &pi;r&sup2;<br>

                                3. <b style='color:#16a34a;'>લઘુવૃત્તખંડનું ક્ષેત્રફળ</b> = (લઘુવૃત્તાંશનું ક્ષેત્રફળ) - (ત્રિકોણનું ક્ષેત્રફળ)
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 1: 6 સેમી ત્રિજ્યાવાળા વર્તુળના વૃત્તાંશ દ્વારા કેન્દ્ર આગળ બનતો ખૂણો 60&deg; હોય, તો વૃત્તાંશનું ક્ષેત્રફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 2 માર્ક્સનો માત્ર સૂત્રમાં કિંમત મૂકીને ગણવાનો સ્કોરિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            અહીં સ્પષ્ટ રીતે ત્રિજ્યા (r) અને ખૂણો (&theta;) આપેલા છે. આપણે સીધું <b>લઘુવૃત્તાંશના ક્ષેત્રફળનું સૂત્ર</b> વાપરવાનું છે. છેદ ઉડાડવામાં ખાસ ધ્યાન રાખવું!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="220" height="180" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="110" cy="90" r="70" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                                <circle cx="110" cy="90" r="4" fill="#0f172a"/>
                                <text x="95" y="95" font-size="14" font-weight="bold">O</text>

                                <path d="M 110 90 L 170 55 A 70 70 0 0 0 110 20 Z" fill="#fef08a" stroke="#dc2626" stroke-width="2"/>
                                
                                <path d="M 110 65 A 25 25 0 0 1 130 75" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="115" y="80" font-size="12" font-weight="bold" fill="#1d4ed8">60&deg;</text>

                                <text x="135" y="55" font-size="12" font-weight="bold" fill="#dc2626">r = 6</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            • ત્રિજ્યા <b>r = 6 સેમી</b><br>
                            • કેન્દ્ર આગળનો ખૂણો <b>&theta; = 60&deg;</b><br>
                            • &pi; ની કિંમત આપી નથી, તેથી <b>&pi; = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>22</span><span>7</span></span></b> લઈશું.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>વૃત્તાંશનું ક્ષેત્રફળ = </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360&deg;</span></span> &times; &pi;r&sup2;<br><br>
                                
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>60</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 6 &times; 6<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(60 વડે 360 નો ભાગ ચલાવતા નીચે 6 વધશે: 60 &times; 6 = 360)</i></span><br>
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>6</b></span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <b style='color:#dc2626;'>6</b> &times; 6<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(નીચેનો 6 અને ઉપરનો એક 6 ઉડી જશે)</i></span><br>
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 6</span><span>7</span></span><br><br>

                                <b>= <b style='color:#dc2626; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>132</span><span>7</span></span> સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> વૃત્તાંશનું ક્ષેત્રફળ <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>132</span><span>7</span></span> સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 2: 22 સેમી પરિઘવાળા વર્તુળના ચતુર્થાંશ (Quadrant) નું ક્ષેત્રફળ શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 2 માર્ક્સનો પરિઘ પરથી ત્રિજ્યા શોધવા વાળો ટ્વિસ્ટેડ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - 2 સ્ટેપ નો જાદુ:</b><br>
                            અહીં ત્રિજ્યા (r) સીધી નથી આપી, પણ <b>પરિઘ (કિનારીની લંબાઈ)</b> આપી છે. એટલે પહેલા પરિઘના સૂત્ર પરથી ત્રિજ્યા શોધીશું.<br>
                            પછી <b>"ચતુર્થાંશ (Quadrant)"</b> એટલે વર્તુળનો ચોથો ભાગ (જેમાં હંમેશા <b>90&deg; નો કાટખૂણો</b> બને). બસ, પછી તો સીધું સૂત્ર જ છે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="220" height="180" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="110" cy="90" r="70" fill="#ffffff" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
                                <circle cx="110" cy="90" r="4" fill="#0f172a"/>
                                <text x="95" y="105" font-size="14" font-weight="bold">O</text>

                                <path d="M 110 90 L 180 90 A 70 70 0 0 0 110 20 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                
                                <polyline points="110,80 120,80 120,90" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="125" y="75" font-size="12" font-weight="bold" fill="#dc2626">90&deg;</text>

                                <text x="125" y="45" font-size="12" font-weight="bold" fill="#16a34a">ચતુર્થાંશ</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: પરિઘ પરથી ત્રિજ્યા (r) શોધવી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                <b>વર્તુળનો પરિઘ = 2&pi;r</b><br>
                                22 = 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; r<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(r ને કર્તા બનાવવા: 7 સામે ઉપર જશે અને 2 તથા 22 નીચે જશે)</i></span><br>
                                r = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 7</span><span>2 &times; 22</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર અને નીચેથી 22 ઉડી જશે)</i></span><br>
                                <b style='color:#1d4ed8; font-size:20px;'>r = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>7</span><span>2</span></span> સેમી</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ચતુર્થાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>ચતુર્થાંશ એટલે વર્તુળનો <b>ચોથો ભાગ (1/4)</b>. એટલે ખૂણો &theta; = 90&deg; થાય. આપણે સીધું 1/4 વાળું શોર્ટકટ સૂત્ર પણ વાપરી શકીએ:</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; &pi;r&sup2;<br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>2</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(એક 7 ઉપર-નીચે ઉડી જશે. અને 22 ને 2 વડે ભાગતા 11 આવશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1 &times; 11 &times; 7</span><span>4 &times; 2</span></span><br><br>

                                <b>= <b style='color:#dc2626; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>77</span><span>8</span></span> સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> વર્તુળના ચતુર્થાંશનું ક્ષેત્રફળ <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>77</span><span>8</span></span> સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 3: એક ઘડિયાળના મિનિટ કાંટાની લંબાઈ 14 સેમી છે. મિનિટ કાંટો 5 મિનિટમાં પરિભ્રમણ કરીને જે ક્ષેત્રફળ રચે તે શોધો.", 
                    question_desc: "2024 અને 2025 બોર્ડ માટે 2 માર્ક્સનો ખૂણો શોધવાની ટ્રીક વાળો સુપર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - ઘડિયાળની જાદુઈ ટ્રીક:</b><br>
                            આપણને ત્રિજ્યા (મિનિટ કાંટાની લંબાઈ) આપેલી છે, પણ <b>ખૂણો (&theta;) નથી આપ્યો</b>.<br>
                            આપણે જાણીએ છીએ કે આખી ઘડિયાળ એટલે 360&deg; નું વર્તુળ અને તેમાં 60 મિનિટ હોય.<br>
                            એટલે <b>1 મિનિટ બરાબર (360/60) = 6&deg; નો ખૂણો બને!</b> <br>
                            બસ, જેટલી મિનિટ આપી હોય તેને 6 વડે ગુણી નાખો એટલે તમારો ખૂણો &theta; મળી જશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="110" cy="110" r="90" fill="#f8fafc" stroke="#0f172a" stroke-width="4"/>
                                <circle cx="110" cy="110" r="4" fill="#0f172a"/>
                                
                                <text x="102" y="35" font-size="14" font-weight="bold">12</text>
                                <text x="165" y="55" font-size="14" font-weight="bold">1</text>
                                <text x="185" y="115" font-size="14" font-weight="bold">3</text>
                                <text x="105" y="195" font-size="14" font-weight="bold">6</text>
                                <text x="30" y="115" font-size="14" font-weight="bold">9</text>
                                
                                <path d="M 110 110 L 110 30 A 80 80 0 0 1 150 41 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <line x1="110" y1="110" x2="110" y2="30" stroke="#1d4ed8" stroke-width="3"/>
                                <line x1="110" y1="110" x2="150" y2="41" stroke="#1d4ed8" stroke-width="3" stroke-dasharray="4,4"/>
                                
                                <path d="M 110 75 A 35 35 0 0 1 127 80" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="115" y="95" font-size="12" font-weight="bold" fill="#dc2626">30&deg;</text>
                                
                                <text x="70" y="70" font-size="12" font-weight="bold" fill="#1d4ed8">r = 14 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: ત્રિજ્યા અને ખૂણો શોધવો</b><br>
                            • ત્રિજ્યા <b>r = મિનિટ કાંટાની લંબાઈ = 14 સેમી</b><br>
                            • 1 મિનિટમાં રચાતો ખૂણો = 360&deg; / 60 = 6&deg;<br>
                            • 5 મિનિટમાં રચાતો ખૂણો <b>&theta; = 5 &times; 6&deg; = 30&deg;</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લઘુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>રચાયેલું ક્ષેત્રફળ = લઘુવૃત્તાંશનું ક્ષેત્રફળ</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360&deg;</span></span> &times; &pi;r&sup2;<br><br>
                                
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>30</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 14 &times; 14<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(30 વડે 360 ઉડાડતા 1/12 વધે, અને 7 વડે 14 ઉડાડતા 2 વધે)</i></span><br>
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>12</b></span></span> &times; 22 &times; <b style='color:#dc2626;'>2</b> &times; 14<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(2 વડે 12 ઉડાડતા નીચે 6 વધશે)</i></span><br>
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 14</span><span>6</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંનેને 2 વડે ભાગતા 11 અને 3 થાય)</i></span><br>
                                <b>= </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11 &times; 14</span><span>3</span></span><br><br>

                                <b>= <b style='color:#dc2626; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>154</span><span>3</span></span> સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> કાંટા દ્વારા 5 મિનિટમાં રચાયેલ ક્ષેત્રફળ <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>154</span><span>3</span></span> સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                   
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 4: 10 સેમી ત્રિજ્યાવાળા વર્તુળની જીવા કેન્દ્ર આગળ કાટખૂણો આંતરે છે. તે પરથી (i) લઘુવૃત્તખંડ અને (ii) ગુરુવૃત્તાંશનું ક્ષેત્રફળ શોધો. (&pi; = 3.14 લો).", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો બે વસ્તુઓ શોધવાનો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે કેન્દ્ર આગળ <b>કાટખૂણો (90&deg;)</b> હોય, ત્યારે અંદર બનતો ત્રિકોણ <b>કાટકોણ ત્રિકોણ</b> બની જાય છે.<br>
                            આવા ત્રિકોણનું ક્ષેત્રફળ સાવ સહેલું: <b>1/2 &times; પાયો &times; વેધ</b> (અહીં પાયો અને વેધ બંને ત્રિજ્યા 'r' જ થશે!).<br>
                            અને ગુરુવૃત્તાંશ એટલે લઘુવૃત્તાંશ સિવાયનો આખો પીળો ભાગ! 
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="140" cy="140" r="100" fill="#fef08a" stroke="#0f172a" stroke-width="2"/> 
                                
                                <path d="M 140 140 L 240 140 A 100 100 0 0 1 140 240 Z" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/> 
                                
                                <path d="M 240 140 A 100 100 0 0 1 140 240 L 240 140" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                
                                <line x1="240" y1="140" x2="140" y2="240" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>

                                <circle cx="140" cy="140" r="4" fill="#0f172a"/>
                                <text x="125" y="135" font-size="14" font-weight="bold">O</text>
                                
                                <line x1="140" y1="140" x2="240" y2="140" stroke="#0f172a" stroke-width="2"/>
                                <line x1="140" y1="140" x2="140" y2="240" stroke="#0f172a" stroke-width="2"/>

                                <polyline points="140,155 155,155 155,140" fill="none" stroke="#dc2626" stroke-width="2"/>
                                
                                <text x="245" y="135" font-size="14" font-weight="bold">A</text>
                                <text x="135" y="255" font-size="14" font-weight="bold">B</text>
                                <text x="175" y="135" font-size="12" font-weight="bold" fill="#1d4ed8">10 cm</text>
                                <text x="100" y="190" font-size="12" font-weight="bold" fill="#1d4ed8">10 cm</text>
                                
                                <text x="40" y="60" font-size="14" font-weight="bold" fill="#ea580c">ગુરુવૃત્તાંશ (પીળો ભાગ)</text>
                                <text x="195" y="210" font-size="12" font-weight="bold" fill="#16a34a">લઘુવૃત્તખંડ</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            • ત્રિજ્યા <b>r = 10 સેમી</b><br>
                            • કાટખૂણો હોવાથી <b>&theta; = 90&deg;</b><br>
                            • <b>&pi; = 3.14</b> લેવાના છે (એટલે કે 314/100).
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: (i) લઘુવૃત્તખંડ (Crust) નું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>આ માટે પહેલા લઘુવૃત્તાંશનું ક્ષેત્રફળ શોધીએ:</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>વૃત્તાંશનું ક્ષેત્રફળ = </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>90</span><span>360</span></span> &times; 3.14 &times; (10)&sup2;<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; 100<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(100 અને 100 ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>4</span></span> <b>= <b style='color:#1d4ed8;'>78.5 સેમી&sup2;</b></b>
                            </div>
                            
                            <span style='color:#0f172a; font-size:14px; margin-top:10px; display:inline-block;'>હવે કાટકોણ ત્રિકોણ OAB નું ક્ષેત્રફળ શોધીએ:</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:10px; border-radius:5px;'>
                                <b>&Delta;OAB નું ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; પાયો &times; વેધ<br><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; 10 &times; 10<br><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>100</span><span>2</span></span> <b>= <b style='color:#dc2626;'>50 સેમી&sup2;</b></b>
                            </div>

                            <span style='color:#0f172a; font-size:14px; margin-top:10px; display:inline-block;'>બંનેની બાદબાકી કરતા:</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>લઘુવૃત્તખંડનું ક્ષેત્રફળ = </b> વૃત્તાંશનું ક્ષે. - ત્રિકોણનું ક્ષે.<br>
                                = 78.5 - 50<br>
                                <b>= <b style='color:#15803d; font-size:22px;'>28.5 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: (ii) ગુરુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>ગુરુવૃત્તાંશ એટલે બાકીનો આખો ભાગ. તેનો <b>ખૂણો = 360&deg; - 90&deg; = 270&deg;</b> થશે.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>ગુરુવૃત્તાંશનું ક્ષેત્રફળ = </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>270</span><span>360</span></span> &times; 3.14 &times; (10)&sup2;<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(270/360 છેદ ઉડાડતા 3/4 થાય, 90 ના ઘડિયાથી)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; 100<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(100 અને 100 ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3 &times; 314</span><span>4</span></span><br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>942</span><span>4</span></span> <b>= <b style='color:#dc2626; font-size:22px;'>235.5 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) લઘુવૃત્તખંડનું ક્ષેત્રફળ = <b>28.5 સેમી&sup2;</b><br>
                                (ii) ગુરુવૃત્તાંશનું ક્ષેત્રફળ = <b>235.5 સેમી&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                   
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 5: 21 સેમી ત્રિજ્યાવાળા વર્તુળનું એક ચાપ કેન્દ્ર આગળ 60&deg; નો ખૂણો આંતરે છે. તો શોધો: (i) ચાપની લંબાઈ (ii) ચાપ વડે બનતા વૃત્તાંશનું ક્ષેત્રફળ (iii) અનુરૂપ જીવા વડે બનતા વૃત્તખંડનું ક્ષેત્રફળ.", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો ત્રણેય સૂત્રોનો ઉપયોગ કરાવતો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - સમબાજુ ત્રિકોણની ટ્રીક:</b><br>
                            જ્યારે પણ કેન્દ્ર આગળ <b>60&deg; નો ખૂણો</b> બને, ત્યારે સમજવું કે અંદર બનતો ત્રિકોણ <b>સમબાજુ ત્રિકોણ (Equilateral Triangle)</b> જ હોય! <br>
                            આવા ત્રિકોણના ક્ષેત્રફળનું સીધું સૂત્ર છે: <b style='color:#dc2626;'>(&radic;3 / 4) &times; (બાજુ)&sup2;</b>. આપણે વૃત્તખંડ શોધવા આ જ સૂત્ર વાપરીશું.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="220" viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="110" r="90" fill="#f0f9ff" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
                                <circle cx="130" cy="110" r="4" fill="#0f172a"/>
                                <text x="125" y="100" font-size="14" font-weight="bold">O</text>

                                <path d="M 130 110 L 175 188 A 90 90 0 0 1 85 188 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <path d="M 175 188 A 90 90 0 0 1 85 188 L 175 188" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>

                                <line x1="130" y1="110" x2="175" y2="188" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="130" y1="110" x2="85" y2="188" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="85" y1="188" x2="175" y2="188" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/> <path d="M 115 136 A 30 30 0 0 0 145 136" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="120" y="150" font-size="12" font-weight="bold" fill="#dc2626">60&deg;</text>

                                <text x="70" y="200" font-size="14" font-weight="bold">A</text>
                                <text x="180" y="200" font-size="14" font-weight="bold">B</text>
                                
                                <text x="80" y="145" font-size="12" font-weight="bold" fill="#1d4ed8">r = 21</text>
                                <text x="155" y="145" font-size="12" font-weight="bold" fill="#1d4ed8">21</text>
                                
                                <text x="130" y="215" font-size="12" font-weight="bold" fill="#16a34a">લઘુચાપ (l)</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: (i) ચાપની લંબાઈ (l) શોધવી</b><br>
                            <span style='color:#0f172a; font-size:14px;'>અહીં <b>r = 21 સેમી</b> અને <b>&theta; = 60&deg;</b> છે. (&pi; = 22/7 લઈશું)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ચાપની લંબાઈ (l) = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; 2&pi;r<br><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>60</span><span>360</span></span> &times; 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 21<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(60 વડે 360 નો ભાગ ચલાવતા 1/6 વધશે, અને 7 &times; 3 = 21 ઉડશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>6</b></span></span> &times; 2 &times; 22 &times; <b style='color:#dc2626;'>3</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર 2 &times; 3 = 6 થાય, જે નીચેના 6 સાથે ઉડી જશે)</i></span><br>
                                <b>= <b style='color:#1d4ed8; font-size:22px;'>22 સેમી</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: (ii) વૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>વૃત્તાંશનું ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; &pi;r&sup2;<br><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>60</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 21 &times; 21<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ફરી 1/6 વધશે અને 7 &times; 3 = 21 ઉડશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>6</b></span></span> &times; 22 &times; <b style='color:#dc2626;'>3</b> &times; 21<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(3 વડે 6 ને ઉડાડતા નીચે 2 વધે. અને 2 વડે 22 ને ઉડાડતા 11 વધે)</i></span><br>
                                <b>= </b> 11 &times; 21<br>
                                <b>= <b style='color:#dc2626; font-size:22px;'>231 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 3: (iii) વૃત્તખંડ (Crust) નું ક્ષેત્રફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                <span style='color:#0f172a; font-size:14px;'>અહીં &theta; = 60&deg; હોવાથી &Delta;OAB <b>સમબાજુ ત્રિકોણ</b> છે. (બાજુ a = 21)<br>
                                સમબાજુ ત્રિકોણનું ક્ષેત્રફળ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>4</span></span> &times; (a)&sup2;</span><br><br>

                                <b>વૃત્તખંડનું ક્ષેત્રફળ = </b> વૃત્તાંશનું ક્ષે. - ત્રિકોણનું ક્ષે.<br><br>
                                <b>= </b> 231 - [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>4</span></span> &times; (21)&sup2; ]<br><br>
                                <b>= </b> 231 - [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>4</span></span> &times; 441 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ચોપડી મુજબ આ જ અંતિમ જવાબ છે, વધુ સાદું રૂપ આપવાની જરૂર નથી)</i></span><br>
                                <b>= <span style='font-size:22px; color:#15803d; font-weight:bold;'><span style='font-size:30px;'>(</span> 231 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>441&radic;3</span><span>4</span></span> <span style='font-size:30px;'>)</span> સેમી&sup2;</span></b>
                            </div>
                        </div>
                    </div>
                    `
                },
                   
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 6: 15 સેમી ત્રિજ્યાવાળા વર્તુળની જીવા કેન્દ્ર આગળ 60&deg; નો ખૂણો આંતરે છે. તેને અનુરૂપ લઘુવૃત્તખંડ અને ગુરુવૃત્તખંડનું ક્ષેત્રફળ શોધો. (&pi; = 3.14 અને &radic;3 = 1.73 લો).", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો લાંબી ગણતરી (Calculations) વાળો સૌથી અઘરો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ચેતવણી:</b><br>
                            આ દાખલામાં પોઈન્ટ (Decimals) વાળા ગુણાકાર સૌથી વધુ છે! ઉતાવળ કરવી નહિ. <br>
                            <b>ગુરુવૃત્તખંડ</b> = આખા વર્તુળનું ક્ષેત્રફળ - લઘુવૃત્તખંડનું ક્ષેત્રફળ.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="130" r="100" fill="#fef08a" stroke="#0f172a" stroke-width="2"/> 
                                
                                <polygon points="130,130 180,216 80,216" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <path d="M 180 216 A 100 100 0 0 1 80 216 L 180 216" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                
                                <circle cx="130" cy="130" r="4" fill="#0f172a"/>
                                <text x="125" y="120" font-size="14" font-weight="bold">O</text>

                                <path d="M 120 148 A 20 20 0 0 0 140 148" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="122" y="165" font-size="12" font-weight="bold" fill="#dc2626">60&deg;</text>
                                
                                <text x="65" y="225" font-size="14" font-weight="bold">A</text>
                                <text x="185" y="225" font-size="14" font-weight="bold">B</text>
                                <text x="85" y="170" font-size="12" font-weight="bold" fill="#1d4ed8">15 cm</text>
                                
                                <text x="40" y="60" font-size="14" font-weight="bold" fill="#ea580c">ગુરુવૃત્તખંડ (મોટો પીળો ભાગ)</text>
                                <text x="130" y="245" font-size="12" font-weight="bold" fill="#16a34a">લઘુવૃત્તખંડ</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: વૃત્તાંશ અને ત્રિકોણનું અલગ-અલગ ક્ષેત્રફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>r = 15 સેમી, &theta; = 60&deg;</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px; margin-bottom:10px;'>
                                <b>(A) વૃત્તાંશનું ક્ષેત્રફળ:</b><br>
                                = (60 / 360) &times; 3.14 &times; (15)&sup2;<br>
                                = (1 / 6) &times; 3.14 &times; 225<br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>706.5</span><span>6</span></span> <b>= <b style='color:#1d4ed8;'>117.75 સેમી&sup2;</b></b>
                            </div>

                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                <b>(B) સમબાજુ ત્રિકોણ OAB નું ક્ષેત્રફળ:</b><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>4</span></span> &times; (15)&sup2;<br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1.73 &times; 225</span><span>4</span></span><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>389.25</span><span>4</span></span> <b>= <b style='color:#dc2626;'>97.3125 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લઘુવૃત્તખંડનું ક્ષેત્રફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>લઘુવૃત્તખંડ = </b> વૃત્તાંશનું ક્ષે. - ત્રિકોણનું ક્ષે.<br>
                                = 117.75 - 97.3125<br>
                                <b>= <b style='color:#15803d; font-size:22px;'>20.4375 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ગુરુવૃત્તખંડનું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>આ માટે પહેલા આખા વર્તુળનું ક્ષેત્રફળ શોધીએ:</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px; margin-bottom:10px;'>
                                <b>વર્તુળનું ક્ષેત્રફળ = </b> &pi;r&sup2;<br>
                                = 3.14 &times; 15 &times; 15<br>
                                = 3.14 &times; 225 = <b style='color:#dc2626;'>706.5 સેમી&sup2;</b>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>ગુરુવૃત્તખંડ = </b> આખું વર્તુળ - લઘુવૃત્તખંડ<br>
                                = 706.5 - 20.4375<br>
                                <b>= <b style='color:#9333ea; font-size:24px;'>686.0625 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) લઘુવૃત્તખંડ = <b>20.4375 સેમી&sup2;</b><br>
                                (ii) ગુરુવૃત્તખંડ = <b>686.0625 સેમી&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 7: 12 સેમી ત્રિજ્યાવાળા વર્તુળની જીવા કેન્દ્ર આગળ 120&deg; નો ખૂણો આંતરે છે. તેને અનુરૂપ લઘુવૃત્તખંડનું ક્ષેત્રફળ શોધો. (&pi; = 3.14 અને &radic;3 = 1.73 લો).", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો 120&deg; ના ખૂણાની શોર્ટકટ ટ્રીક વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - 120&deg; ની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે કેન્દ્ર આગળ 120&deg; નો ખૂણો હોય, ત્યારે વચ્ચેથી લંબ દોરીને 60&deg; ના બે કાટકોણ ત્રિકોણ બનાવવા પડે. પરંતુ <b>એક શોર્ટકટ યાદ રાખો:</b> 120&deg; વાળા ત્રિકોણનું ક્ષેત્રફળ <b>બરાબર 60&deg; વાળા સમબાજુ ત્રિકોણ જેટલું જ થાય છે!</b><br>
                            એટલે કે ત્રિકોણનું ક્ષેત્રફળ = <b style='color:#dc2626;'>(&radic;3 / 4) &times; r&sup2;</b> જ વાપરવું!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 40 50 A 100 100 0 0 0 240 50" fill="#f0f9ff" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <path d="M 140 100 L 226 150 A 100 100 0 0 1 54 150 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <path d="M 226 150 A 100 100 0 0 1 54 150 L 226 150" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>

                                <circle cx="140" cy="100" r="4" fill="#0f172a"/>
                                <text x="135" y="85" font-size="14" font-weight="bold">O</text>

                                <line x1="140" y1="100" x2="54" y2="150" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="140" y1="100" x2="226" y2="150" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="54" y1="150" x2="226" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="2,2"/>
                                
                                <line x1="140" y1="100" x2="140" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>

                                <path d="M 115 115 A 30 30 0 0 0 165 115" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="125" y="132" font-size="12" font-weight="bold" fill="#dc2626">120&deg;</text>

                                <text x="40" y="165" font-size="14" font-weight="bold">A</text>
                                <text x="235" y="165" font-size="14" font-weight="bold">B</text>
                                <text x="75" y="115" font-size="12" font-weight="bold" fill="#1d4ed8">12</text>
                                <text x="200" y="115" font-size="12" font-weight="bold" fill="#1d4ed8">12</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: લઘુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>અહીં ત્રિજ્યા <b>r = 12 સેમી</b> અને <b>&theta; = 120&deg;</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                <b>વૃત્તાંશનું ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>120</span><span>360</span></span> &times; 3.14 &times; (12)&sup2;<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(120 &times; 3 = 360 થાય, એટલે છેદમાં 3 વધશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; 144<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(3 વડે 144 ને ભાગતા 48 આવે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314 &times; 48</span><span>100</span></span><br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15072</span><span>100</span></span> <b>= <b style='color:#1d4ed8;'>150.72 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ત્રિકોણ OAB નું ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>120&deg; ના ખૂણા માટે શોર્ટકટ સૂત્ર: <b>(&radic;3 / 4) &times; r&sup2;</b></span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ત્રિકોણનું ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&radic;3</span><span>4</span></span> &times; (12)&sup2;<br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1.73</span><span>4</span></span> &times; 144<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(4 વડે 144 ને ભાગતા 36 આવે)</i></span><br>
                                <b>= </b> 1.73 &times; 36<br>
                                <b>= <b style='color:#dc2626;'>62.28 સેમી&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: લઘુવૃત્તખંડનું ક્ષેત્રફળ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>લઘુવૃત્તખંડ = </b> વૃત્તાંશનું ક્ષે. - ત્રિકોણનું ક્ષે.<br>
                                = 150.72 - 62.28<br>
                                <b>= <b style='color:#15803d; font-size:24px;'>88.44 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> લઘુવૃત્તખંડનું ક્ષેત્રફળ <b style='color:#be123c;'>88.44 સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                   
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 8: 15 મીટર બાજુવાળા ચોરસ આકારના ઘાસના ખેતરના એક ખૂણે ઘોડાને 5 મીટર લાંબા દોરડાથી ખીલા સાથે બાંધેલો છે. તો: (i) ઘોડો ખેતરના જેટલા ભાગમાં ચરી શકે તેનું ક્ષેત્રફળ શોધો. (ii) દોરડું 5 મીટરને બદલે 10 મીટર લાંબુ રાખ્યું હોત તો ચરવાના ક્ષેત્રફળમાં થતો વધારો શોધો. (&pi; = 3.14)", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો બે ચતુર્થાંશ વાળો સૌથી ઇન્ટરેસ્ટિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            ખેતર <b>ચોરસ</b> છે, એટલે તેનો દરેક ખૂણો <b>90&deg; નો કાટખૂણો</b> જ હોય! <br>
                            જ્યારે ખૂણો 90&deg; હોય, ત્યારે તે વર્તુળનો ચોથો ભાગ એટલે કે <b>"ચતુર્થાંશ (Quadrant)"</b> બની જાય છે. બસ આપણે માત્ર ચતુર્થાંશનું ક્ષેત્રફળ શોધવાનું છે.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="240" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg">
                                <rect x="30" y="30" width="200" height="200" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/>
                                <text x="120" y="20" font-size="14" font-weight="bold" fill="#16a34a">ખેતર (15m બાજુ)</text>

                                <path d="M 30 230 L 160 230 A 130 130 0 0 0 30 100 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <path d="M 30 230 L 95 230 A 65 65 0 0 0 30 165 Z" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>

                                <circle cx="30" cy="230" r="6" fill="#0f172a"/>
                                <text x="10" y="245" font-size="12" font-weight="bold">ખીલો</text>

                                <line x1="30" y1="230" x2="85" y2="195" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="70" y="215" font-size="12" font-weight="bold">5m</text>

                                <line x1="30" y1="230" x2="140" y2="160" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="100" y="195" font-size="12" font-weight="bold">10m દોરડું</text>
                                
                                <polyline points="45,230 45,215 30,215" fill="none" stroke="#dc2626" stroke-width="2"/>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: (i) 5 મીટર દોરડાથી ચરી શકાતો ભાગ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>અહીં ત્રિજ્યા <b>r = 5 મીટર</b> અને ખૂણો <b>&theta; = 90&deg;</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; &pi;r&sup2;<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; 3.14 &times; 5 &times; 5<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; 25<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(25 &times; 4 = 100 ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>16</span></span> <span style='color:#047857; font-size:13px;'><i>(કારણ કે 4 &times; 4 = 16)</i></span><br><br>

                                <b>= <b style='color:#1d4ed8; font-size:22px;'>19.625 મીટર&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 10 મીટર લાંબા દોરડાથી ચરી શકાતો નવો ભાગ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>હવે નવી ત્રિજ્યા <b>R = 10 મીટર</b> લઈએ.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>નવું ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; 3.14 &times; 10 &times; 10<br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; 100<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(100 અને 100 ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>4</span></span><br>
                                <b>= <b style='color:#ea580c; font-size:22px;'>78.5 મીટર&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: (ii) ચરવાના ક્ષેત્રફળમાં થતો વધારો</b><br>
                            <span style='color:#0f172a; font-size:14px;'>વધારો શોધવા માટે મોટા ક્ષેત્રફળમાંથી નાનું ક્ષેત્રફળ બાદ કરો.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>વધારો = </b> 78.5 - 19.625<br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>58.875 મીટર&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) 5m દોરડાથી ચરી શકાતો ભાગ = <b>19.625 મીટર&sup2;</b><br>
                                (ii) ક્ષેત્રફળમાં થતો વધારો = <b>58.875 મીટર&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                   
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 9: ચાંદીના તારથી 35 મીમી (mm) વ્યાસવાળું વર્તુળ આકારનું એક બ્રોચ (Brooch) બનાવેલું છે. આ તારનો ઉપયોગ વર્તુળના 10 સમાન વૃત્તાંશ બનાવે તેવા 5 વ્યાસ બનાવવામાં પણ થયો છે. તો: (i) જરૂરી ચાંદીના તારની કુલ લંબાઈ શોધો. (ii) બ્રોચના દરેક વૃત્તાંશનું ક્ષેત્રફળ શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો તારની લંબાઈ અને ક્ષેત્રફળ વાળો બમણો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            <b>તાર ક્યાં ક્યાં વપરાયો છે?</b><br>
                            1. આખા વર્તુળની કિનારી બનાવવા (એટલે કે <b>પરિઘ = &pi;d</b>).<br>
                            2. અંદરના <b>5 વ્યાસ</b> બનાવવા (એટલે કે 5 &times; 35).<br>
                            આ બંનેનો સરવાળો કરો એટલે કુલ તાર મળી જાય! અને બીજા પ્રશ્નમાં, 10 સરખા ભાગ થાય છે એટલે <b>ખૂણો &theta; = 360&deg; / 10 = 36&deg;</b> થશે.
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="130" r="100" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/>
                                <circle cx="130" cy="130" r="4" fill="#0f172a"/>
                                <text x="135" y="125" font-size="14" font-weight="bold">O</text>

                                <line x1="30" y1="130" x2="230" y2="130" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="49" y1="71" x2="211" y2="189" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="99" y1="35" x2="161" y2="225" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="161" y1="35" x2="99" y2="225" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="211" y1="71" x2="49" y2="189" stroke="#94a3b8" stroke-width="2"/>

                                <path d="M 130 130 L 230 130 A 100 100 0 0 0 211 71 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <path d="M 160 130 A 30 30 0 0 0 155 110" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="165" y="115" font-size="12" font-weight="bold" fill="#dc2626">36&deg;</text>

                                <text x="25" y="145" font-size="12" font-weight="bold" fill="#1d4ed8">d = 35 mm</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: (i) જરૂરી ચાંદીના તારની કુલ લંબાઈ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>અહીં <b>વ્યાસ (d) = 35 મીમી</b> છે. તેથી ત્રિજ્યા <b>r = 35/2 મીમી</b> થાય.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>કુલ તાર = </b> વર્તુળનો પરિઘ + (5 &times; વ્યાસ ની લંબાઈ)<br><br>
                                
                                <b>પરિઘ = </b> &pi;d 
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 35<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(7 &times; 5 = 35 ઉડી જશે)</i></span><br>
                                પરિઘ = 22 &times; 5 = <b style='color:#dc2626;'>110 મીમી</b><br><br>

                                <b>5 વ્યાસની લંબાઈ = </b> 5 &times; 35 = <b style='color:#dc2626;'>175 મીમી</b><br><br>

                                <b>કુલ લંબાઈ = </b> 110 + 175 = <b style='color:#1d4ed8; font-size:22px;'>285 મીમી</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: (ii) બ્રોચના દરેક વૃત્તાંશનું ક્ષેત્રફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>વર્તુળના 10 સરખા ભાગ થયા છે. એટલે ખૂણો <b>&theta; = 360&deg; / 10 = 36&deg;</b> થશે.<br>
                            ત્રિજ્યા r = 35/2 લેવી.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; &pi;r&sup2;<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>36</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>2</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(36 વડે 360 ઉડાડતા નીચે 10 વધે. 7 વડે 35 ઉડાડતા ઉપર 5 વધે. 2 વડે 22 ઉડાડતા ઉપર 11 વધે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>10</b></span></span> &times; <b style='color:#dc2626;'>11</b> &times; <b style='color:#dc2626;'>5</b> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>2</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(5 અને 10 ઉડાડતા નીચે 2 વધશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11 &times; 35</span><span>2 &times; 2</span></span><br><br>

                                <b>= <b style='color:#15803d; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>385</span><span>4</span></span> મીમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) કુલ તારની લંબાઈ = <b>285 મીમી</b><br>
                                (ii) દરેક વૃત્તાંશનું ક્ષેત્રફળ = <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>385</span><span>4</span></span> મીમી&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 10: એક છત્રીમાં સમાન અંતરે 8 તાડીઓ (Ribs) આવેલી છે. છત્રીને 45 સેમી ત્રિજ્યાવાળું સપાટ વર્તુળ ધારીને, બે ક્રમિક તાડીઓ વચ્ચેના ભાગનું ક્ષેત્રફળ શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 2 માર્ક્સનો ખૂણો શોધીને સીધું ક્ષેત્રફળ કાઢવાનો મસ્ત દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            છત્રીને જ્યારે ઉપરથી જોઈએ, ત્યારે તે એક <b>ગોળ વર્તુળ</b> જેવી દેખાય. અહીં 8 તાડીઓ છે, એટલે વર્તુળના <b>8 એકસરખા ભાગ (વૃત્તાંશ)</b> થાય છે! <br>
                            કોઈ લાંબુ સૂત્ર ન વાપરવું હોય તો આખા વર્તુળનું ક્ષેત્રફળ (&pi;r&sup2;) શોધીને તેને <b>સીધું 8 વડે ભાગી નાખો (1/8)</b>, તો પણ તમારો જવાબ સાચો જ આવશે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="130" r="100" fill="#f0f9ff" stroke="#0f172a" stroke-width="3"/>
                                
                                <circle cx="130" cy="130" r="4" fill="#0f172a"/>
                                <text x="115" y="125" font-size="14" font-weight="bold">O</text>

                                <line x1="30" y1="130" x2="230" y2="130" stroke="#1d4ed8" stroke-width="2"/> <line x1="130" y1="30" x2="130" y2="230" stroke="#1d4ed8" stroke-width="2"/> <line x1="59" y1="59" x2="201" y2="201" stroke="#1d4ed8" stroke-width="2"/> <line x1="59" y1="201" x2="201" y2="59" stroke="#1d4ed8" stroke-width="2"/> <path d="M 130 130 L 230 130 A 100 100 0 0 0 201 59 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>

                                <path d="M 160 130 A 30 30 0 0 0 151 109" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="165" y="115" font-size="12" font-weight="bold" fill="#dc2626">45&deg;</text>

                                <text x="175" y="145" font-size="12" font-weight="bold" fill="#16a34a">r = 45 cm</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: ત્રિજ્યા અને ખૂણો નક્કી કરવો</b><br>
                            • ત્રિજ્યા <b>r = 45 સેમી</b><br>
                            • છત્રીના 8 સરખા ભાગ થાય છે. તેથી એક ભાગનો ખૂણો <b>&theta; = 360&deg; / 8 = 45&deg;</b> થશે.<br>
                            <span style='color:#0f172a; font-size:14px;'>(બે ક્રમિક તાડીઓ વચ્ચેનો ભાગ એટલે કે એક લઘુવૃત્તાંશ).</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લઘુવૃત્તાંશનું ક્ષેત્રફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>બે તાડીઓ વચ્ચેનું ક્ષેત્રફળ = </b> 
                                <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; &pi;r&sup2;<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>45</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 45 &times; 45<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(45 વડે 360 ઉડાડતા નીચે 8 વધે. કારણ કે 45 &times; 8 = 360)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span><b style='color:#dc2626;'>8</b></span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 45 &times; 45<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(8 અને 22 ને 2 વડે ઉડાડતા 4 અને 11 વધશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11 &times; 45 &times; 45</span><span>4 &times; 7</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપરનો ગુણાકાર: 45 &times; 45 = 2025, અને 2025 &times; 11 = 22275. નીચે: 4 &times; 7 = 28)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>22275</span><span>28</span></span> સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> બે ક્રમિક તાડીઓ વચ્ચેના ભાગનું ક્ષેત્રફળ <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>22275</span><span>28</span></span> સેમી&sup2;</b> છે. (આ જ ફાઇનલ જવાબ છે, પોઈન્ટમાં ફેરવવાની જરૂર નથી).
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 11: કારને બે વાઇપર છે, જે ક્યારેય એકબીજા પર આચ્છાદિત થતા (ભેગા થતા) નથી. દરેક વાઇપરના બ્લેડની લંબાઈ 25 સેમી છે અને તે 115&deg; ના ખૂણા સુધી ફરીને કાચ સાફ કરે છે. તો બંને બ્લેડના એક જ વખતના સફાઈથી સાફ થતા ભાગનું કુલ ક્ષેત્રફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો બે વૃત્તાંશ વાળો (Double Sector) દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            કારનો વાઇપર જ્યારે કાચ પર ફરે છે, ત્યારે તે એક <b>લઘુવૃત્તાંશ (Sector)</b> નો આકાર બનાવે છે. <br>
                            અહીં <b>બે વાઇપર</b> છે, એટલે આપણે એક વૃત્તાંશનું ક્ષેત્રફળ શોધીને તેને <b>2 વડે ગુણી</b> નાખીશું (અથવા સૂત્રની આગળ જ 2 લગાવી દઈશું)!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="340" height="200" viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 180 L 170 140 A 100 100 0 0 0 20 100 Z" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="80" cy="180" r="4" fill="#0f172a"/>
                                <line x1="80" y1="180" x2="170" y2="140" stroke="#0f172a" stroke-width="3"/> <path d="M 80 150 A 30 30 0 0 0 65 155" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="75" y="145" font-size="12" font-weight="bold" fill="#dc2626">115&deg;</text>
                                <text x="110" y="175" font-size="12" font-weight="bold">25 cm</text>
                                <text x="60" y="195" font-size="14" font-weight="bold" fill="#1d4ed8">વાઇપર 1</text>

                                <path d="M 240 180 L 330 140 A 100 100 0 0 0 180 100 Z" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <circle cx="240" cy="180" r="4" fill="#0f172a"/>
                                <line x1="240" y1="180" x2="330" y2="140" stroke="#0f172a" stroke-width="3"/> <path d="M 240 150 A 30 30 0 0 0 225 155" fill="none" stroke="#dc2626" stroke-width="2"/>
                                <text x="235" y="145" font-size="12" font-weight="bold" fill="#dc2626">115&deg;</text>
                                <text x="270" y="175" font-size="12" font-weight="bold">25 cm</text>
                                <text x="220" y="195" font-size="14" font-weight="bold" fill="#1d4ed8">વાઇપર 2</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            • વાઇપરની લંબાઈ (ત્રિજ્યા) <b>r = 25 સેમી</b><br>
                            • કેન્દ્ર આગળનો ખૂણો <b>&theta; = 115&deg;</b><br>
                            • વાઇપરની કુલ સંખ્યા = <b>2</b>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: બંને વાઇપર વડે સાફ થતું કુલ ક્ષેત્રફળ</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>કુલ ક્ષેત્રફળ = </b> <b style='color:#dc2626;'>2 &times;</b> [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; &pi;r&sup2; ]<br><br>

                                <b>= </b> 2 &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>115</span><span>360</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 25 &times; 25 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(115 અને 360 ને 5 વડે ભાગતા: 23 અને 72 આવશે)</i></span><br>
                                <b>= </b> 2 &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>23</b></span><span><b style='color:#dc2626;'>72</b></span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 625 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(આગળનો 2 અને 72 ઉડાડતા નીચે 36 વધશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>23</span><span>36</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 625<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(22 અને 36 ને 2 વડે ભાગતા 11 અને 18 વધશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>23 &times; 11 &times; 625</span><span>18 &times; 7</span></span><br><br>

                                <b>= <b style='color:#15803d; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #15803d; display:block; padding:0 3px;'>158125</span><span>126</span></span> સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> બંને વાઇપર દ્વારા એક વખતમાં સાફ થતો કુલ ભાગ <b><span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>158125</span><span>126</span></span> સેમી&sup2;</b> છે. (આ જ ફાઇનલ જવાબ છે).
                            </div>
                        </div>
                    </div>
                    `
                },
                    
                { 
                    question: "🌟 સ્વા. 11.1 પ્રશ્ન 12: પાણીની નીચેના ખડકોથી જહાજને ચેતવણી આપવા માટે, એક દીવાદાંડી (Lighthouse) 16.5 કિમી અંતર સુધી 80&deg; વૃત્તાંશના ખૂણામાં લાલ રંગનો પ્રકાશ પાથરે છે. સમુદ્રના જેટલા વિસ્તારમાં જહાજને ચેતવણી અપાતી હોય તે શોધવા માટે ક્ષેત્રફળ શોધો. (&pi; = 3.14 લો)", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો પોઈન્ટ વાળી ગણતરી (દશાંશ) વાળો ખાસ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            જ્યારે દીવાદાંડીમાંથી પ્રકાશ નીકળે છે, ત્યારે તે સીધો નથી જતો પણ એક <b>લઘુવૃત્તાંશ</b> આકારે ફેલાય છે.<br>
                            અહીં આપણે માત્ર લઘુવૃત્તાંશનું ક્ષેત્રફળ જ શોધવાનું છે, પણ <b>&pi; = 3.14</b> લેવાના છે એટલે પોઇન્ટ દૂર કરીને ગણતરી કરશો તો ભૂલ નહિ પડે!
                        </div>

                        <div style='overflow-x:auto; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="180" x2="290" y2="180" stroke="#0ea5e9" stroke-width="4"/>
                                
                                <rect x="30" y="80" width="20" height="100" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
                                <polygon points="25,80 55,80 40,50" fill="#0f172a"/>
                                <circle cx="40" cy="70" r="5" fill="#fef08a"/> <path d="M 40 70 L 260 20 A 240 240 0 0 1 260 120 Z" fill="#fecaca" stroke="#ef4444" stroke-width="2" opacity="0.8"/>
                                
                                <line x1="40" y1="70" x2="260" y2="20" stroke="#dc2626" stroke-width="2"/>
                                <line x1="40" y1="70" x2="260" y2="120" stroke="#dc2626" stroke-width="2"/>

                                <path d="M 80 60 A 40 40 0 0 1 80 80" fill="none" stroke="#b91c1c" stroke-width="2"/>
                                <text x="90" y="75" font-size="12" font-weight="bold" fill="#b91c1c">80&deg;</text>

                                <text x="130" y="35" font-size="14" font-weight="bold" fill="#dc2626">r = 16.5 km</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માહિતી ગોઠવવી</b><br>
                            • પ્રકાશનું અંતર (ત્રિજ્યા) <b>r = 16.5 કિમી</b><br>
                            • કેન્દ્ર આગળનો ખૂણો <b>&theta; = 80&deg;</b><br>
                            • <b>&pi; = 3.14</b> એટલે કે 314/100
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: લઘુવૃત્તાંશનું ક્ષેત્રફળ અને ગણતરી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&theta;</span><span>360</span></span> &times; &pi;r&sup2;<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>80</span><span>360</span></span> &times; 3.14 &times; 16.5 &times; 16.5<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(80 અને 360 ને 40 વડે ભાગતા 2/9 વધશે. અને પોઈન્ટ દૂર કરીએ)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>2</b></span><span><b style='color:#dc2626;'>9</b></span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>165</span><span>10</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>165</span><span>10</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(165 ને 3 વડે ભાગી શકાય: 165 / 3 = 55. એટલે 9 ના બંને 3 ઉડી જશે)</i></span><br>
                                <b>= </b> 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>314</span><span>100</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>55</b></span><span>10</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>55</b></span><span>10</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે ઉપરનો ગુણાકાર: 2 &times; 314 = 628, અને 55 &times; 55 = 3025. અને 628 &times; 3025 = 1899700)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1899700</span><span>10000</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(છેદના 10000 માટે 4 પોઇન્ટ કાપતા)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>189.97 કિમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; border-left:4px solid #16a34a; padding:8px; border-radius:4px;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> સમુદ્રના <b>189.97 કિમી&sup2;</b> વિસ્તારમાં જહાજને લાલ પ્રકાશ દ્વારા ચેતવણી અપાતી હશે.
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
          
        // ------------------------------------
        // પ્રકરણ 12: પૃષ્ઠફળ અને ઘનફળ (સ્વાધ્યાય 12.1 - ભાગ 1A)
        // ------------------------------------
        "12": {
            "chapterName": "પ્રકરણ 12 (સ્વાધ્યાય 12.1 - ભાગ 1A)",
            "chapterTitle": "ચેપ્ટરની માસ્ટર ચાવી (સૂત્રો) અને બે સમઘન જોડવાનો દાખલો (પ્રશ્ન 1)",
            "qa_list": [
                {
                    question: "🎯 માસ્ટર ચાવી: પૃષ્ઠફળ એટલે શું? કયા 4 આકારોના સૂત્રો સૌથી વધુ વપરાશે?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 કન્સેપ્ટ સમજો (સાવ દેશી ભાષામાં):</b><br>
                            <b>પૃષ્ઠફળ (Surface Area)</b> એટલે કોઈપણ વસ્તુની બહારની સપાટી (જેને આપણે હાથ લગાડી શકીએ અથવા રંગ કરી શકીએ). <br>
                            આ ચેપ્ટરમાં આપણે 2 આકારોને ભેગા કરીને નવો આકાર બનાવીશું (જેમ કે નળાકાર પર અર્ધગોલક મૂકવો).
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                            <svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="60" cy="40" rx="30" ry="10" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="30" y1="40" x2="30" y2="100" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="90" y1="40" x2="90" y2="100" stroke="#1d4ed8" stroke-width="2"/>
                                <path d="M 30 100 A 30 10 0 0 0 90 100" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="45" y="130" font-size="14" font-weight="bold" fill="#1d4ed8">નળાકાર</text>
                                <text x="40" y="145" font-size="12" fill="#0f172a">2&pi;rh</text>

                                <ellipse cx="160" cy="100" rx="30" ry="10" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 130 100 A 30 10 0 0 0 190 100" fill="#fef08a"/>
                                <line x1="160" y1="30" x2="130" y2="100" stroke="#ea580c" stroke-width="2"/>
                                <line x1="160" y1="30" x2="190" y2="100" stroke="#ea580c" stroke-width="2"/>
                                <text x="145" y="130" font-size="14" font-weight="bold" fill="#ea580c">શંકુ</text>
                                <text x="145" y="145" font-size="12" fill="#0f172a">&pi;rl</text>

                                <ellipse cx="260" cy="60" rx="35" ry="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                <path d="M 225 60 A 35 35 0 0 0 295 60" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                                <text x="235" y="130" font-size="14" font-weight="bold" fill="#16a34a">અર્ધગોલક</text>
                                <text x="245" y="145" font-size="12" fill="#0f172a">2&pi;r&sup2;</text>

                                <rect x="330" y="50" width="40" height="50" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
                                <polygon points="330,50 350,30 390,30 370,50" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
                                <polygon points="370,50 390,30 390,80 370,100" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
                                <text x="340" y="130" font-size="14" font-weight="bold" fill="#dc2626">લંબઘન</text>
                                <text x="325" y="145" font-size="10" fill="#0f172a">2(lb+bh+hl)</text>
                            </svg>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 1: બે ઘન પૈકી પ્રત્યેકનું ઘનફળ 64 સેમી&sup3; હોય, તેવા બે ઘનને જોડવાથી બનતા લંબઘનનું પૃષ્ઠફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 2 માર્ક્સનો બે સમઘનને જોડીને લંબઘન બનાવતો સ્કોરિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            જ્યારે આપણે પાસા જેવા બે સરખા સમઘન (Cubes) ને બાજુ-બાજુમાં જોડીએ, ત્યારે તેની <b>લંબાઈ બમણી (Double)</b> થઈ જાય છે, પણ તેની પહોળાઈ અને ઊંચાઈ તો એની એ જ રહે છે! 
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
                                <rect x="50" y="80" width="60" height="60" fill="#bae6fd" stroke="#0f172a" stroke-width="2"/>
                                <polygon points="50,80 70,60 130,60 110,80" fill="#7dd3fc" stroke="#0f172a" stroke-width="2"/>
                                
                                <rect x="110" y="80" width="60" height="60" fill="#bae6fd" stroke="#0f172a" stroke-width="2"/>
                                <polygon points="110,80 130,60 190,60 170,80" fill="#7dd3fc" stroke="#0f172a" stroke-width="2"/>
                                <polygon points="170,80 190,60 190,120 170,140" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>

                                <line x1="50" y1="155" x2="170" y2="155" stroke="#dc2626" stroke-width="2"/>
                                <text x="100" y="170" font-size="14" font-weight="bold" fill="#dc2626">l = 4 + 4 = 8 cm</text>
                                
                                <line x1="35" y1="80" x2="35" y2="140" stroke="#16a34a" stroke-width="2"/>
                                <text x="5" y="115" font-size="14" font-weight="bold" fill="#16a34a">h=4</text>
                                
                                <line x1="180" y1="145" x2="200" y2="125" stroke="#ea580c" stroke-width="2"/>
                                <text x="205" y="140" font-size="14" font-weight="bold" fill="#ea580c">b=4</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: સમઘનની બાજુ (a) શોધવી</b><br>
                            અહીં સમઘનનું ઘનફળ = 64 સેમી&sup3; આપેલું છે.<br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <b>a&sup3; = 64</b><br>
                                <span style='color:#047857; font-size:14px;'><i>(કઈ સંખ્યાનો ઘન 64 થાય? 4 &times; 4 &times; 4 = 64)</i></span><br>
                                <b>a = 4 સેમી</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: નવા લંબઘનનાં માપ નક્કી કરવા</b><br>
                            બે સમઘનને જોડવાથી નવો લંબઘન બને છે.<br>
                            • <b>લંબાઈ (l)</b> = 4 + 4 = <b style='color:#dc2626;'>8 સેમી</b><br>
                            • <b>પહોળાઈ (b)</b> = એની એ જ રહેશે = <b style='color:#ea580c;'>4 સેમી</b><br>
                            • <b>ઊંચાઈ (h)</b> = એની એ જ રહેશે = <b style='color:#16a34a;'>4 સેમી</b>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: લંબઘનનું પૃષ્ઠફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 2 (lb + bh + hl)</b><br><br>
                                
                                <b>= </b> 2 [ (8 &times; 4) + (4 &times; 4) + (4 &times; 8) ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંદર ગુણાકાર કરતા)</i></span><br>
                                <b>= </b> 2 [ 32 + 16 + 32 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(કૌંસનો સરવાળો કરતા)</i></span><br>
                                <b>= </b> 2 [ 80 ]<br><br>
                                
                                <b>= <b style='color:#dc2626; font-size:24px;'>160 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> બનતા લંબઘનનું પૃષ્ઠફળ <b style='color:#be123c;'>160 સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 2: એક અર્ધગોલક ઉપર એક પોલો નળાકાર બેસાડેલો હોય તેવું એક પાત્ર (Vessel) છે. અર્ધગોલકનો વ્યાસ 14 સેમી છે અને પાત્રની કુલ ઊંચાઈ 13 સેમી છે, તો પાત્રની અંદરની સપાટીનું પૃષ્ઠફળ શોધો.", 
                    question_desc: "2025 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો બે આકારોના સરવાળા વાળો બોર્ડનો ફેવરિટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની માસ્ટર ટ્રીક:</b><br>
                            અહીં <b>કુલ ઊંચાઈ 13</b> આપી છે, જેમાંથી નળાકારની ઊંચાઈ અલગ કાઢવી પડે! <br>
                            કેવી રીતે? અર્ધગોલકની ઊંચાઈ હંમેશા તેની ત્રિજ્યા (r) જેટલી જ હોય છે. એટલે કુલ ઊંચાઈમાંથી અર્ધગોલકની ત્રિજ્યા બાદ કરો એટલે નળાકારની ઊંચાઈ (h) મળી જાય.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="220" viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 130 A 50 50 0 0 0 180 130" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                <ellipse cx="130" cy="130" rx="50" ry="15" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <line x1="80" y1="50" x2="80" y2="130" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="180" y1="50" x2="180" y2="130" stroke="#1d4ed8" stroke-width="2"/>
                                <ellipse cx="130" cy="50" rx="50" ry="15" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <circle cx="130" cy="130" r="4" fill="#0f172a"/>
                                <line x1="130" y1="130" x2="180" y2="130" stroke="#0f172a" stroke-width="2"/>
                                <text x="145" y="125" font-size="12" font-weight="bold">r=7</text>

                                <line x1="130" y1="130" x2="130" y2="180" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                <text x="135" y="160" font-size="12" font-weight="bold" fill="#16a34a">r=7</text>

                                <line x1="210" y1="50" x2="210" y2="130" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="215" y="95" font-size="14" font-weight="bold" fill="#1d4ed8">h = 6</text>

                                <line x1="50" y1="50" x2="50" y2="180" stroke="#dc2626" stroke-width="2"/>
                                <text x="10" y="120" font-size="14" font-weight="bold" fill="#dc2626">કુલ 13</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ છૂટા પાડવા</b><br>
                            • વ્યાસ = 14 સેમી છે, તેથી <b>ત્રિજ્યા r = 7 સેમી</b> થશે. (નળાકાર અને અર્ધગોલક બંને માટે સમાન).<br>
                            • નળાકારની ઊંચાઈ (h) = કુલ ઊંચાઈ - અર્ધગોલકની ત્રિજ્યા<br>
                            &nbsp;&nbsp;&nbsp;<b>h = 13 - 7 = <b style='color:#1d4ed8;'>6 સેમી</b></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પાત્રનું કુલ પૃષ્ઠફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ પૃષ્ઠફળ = નળાકારની વક્રસપાટી + અર્ધગોલકની વક્રસપાટી</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 2&pi;rh + 2&pi;r&sup2;</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા માટે બંનેમાંથી <b>2&pi;r</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>= 2&pi;r (h + r)</b><br><br>
                                
                                <b>= </b> 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 7 &times; (6 + 7)<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર-નીચેથી 7 ઉડી જશે, અને કૌંસનો સરવાળો 13 થશે)</i></span><br>
                                <b>= </b> 2 &times; 22 &times; (13)<br><br>
                                
                                <b>= </b> 44 &times; 13<br><br>

                                <b>= <b style='color:#dc2626; font-size:24px;'>572 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> પાત્રની અંદરની સપાટીનું પૃષ્ઠફળ <b style='color:#be123c;'>572 સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        }
             
            
        
  
             
            
        
             
            
        
             
            
        
             
     
  
                    
   };         
            
                    
            
            
                
            
            
                
            
            
                
            
            
                
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
        

