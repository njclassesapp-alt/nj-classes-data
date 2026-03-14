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
                },
               
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 3: 3.5 સેમી ત્રિજ્યાવાળા અર્ધગોલક પર એક શંકુ બેસાડેલો હોય તેવું એક રમકડું છે. રમકડાની કુલ ઊંચાઈ 15.5 સેમી હોય, તો રમકડાનું કુલ પૃષ્ઠફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો ત્રાંસી ઊંચાઈ (l) શોધવા વાળો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            અહીં પણ <b>કુલ ઊંચાઈ 15.5</b> આપી છે, જેમાંથી અર્ધગોલકની ત્રિજ્યા (3.5) બાદ કરતા શંકુની ઊંચાઈ (h) મળશે. <br>
                            પણ ધ્યાન રાખો! શંકુનું પૃષ્ઠફળ શોધવા <b>ત્રાંસી ઊંચાઈ (l)</b> જોઈએ. તેથી પહેલા પાયથાગોરસ (l&sup2; = r&sup2; + h&sup2;) નો ઉપયોગ કરવો પડશે.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 150 A 50 50 0 0 0 180 150" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                <ellipse cx="130" cy="150" rx="50" ry="15" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                                
                                <path d="M 80 150 L 130 30 L 180 150 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <circle cx="130" cy="150" r="4" fill="#0f172a"/>
                                <line x1="130" y1="150" x2="180" y2="150" stroke="#0f172a" stroke-width="2"/>
                                <text x="145" y="145" font-size="12" font-weight="bold">r=3.5</text>

                                <line x1="130" y1="150" x2="130" y2="30" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                                <text x="135" y="100" font-size="12" font-weight="bold" fill="#ea580c">h = 12</text>

                                <text x="175" y="100" font-size="14" font-weight="bold" fill="#dc2626">l = ?</text>

                                <line x1="130" y1="150" x2="130" y2="200" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                <text x="135" y="180" font-size="12" font-weight="bold" fill="#16a34a">r=3.5</text>

                                <line x1="50" y1="30" x2="50" y2="200" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="5" y="120" font-size="12" font-weight="bold" fill="#1d4ed8">કુલ 15.5</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: શંકુની ઊંચાઈ (h) અને ત્રાંસી ઊંચાઈ (l) શોધવી</b><br>
                            • ત્રિજ્યા <b>r = 3.5 સેમી</b><br>
                            • શંકુની ઊંચાઈ (h) = કુલ ઊંચાઈ - અર્ધગોલકની ત્રિજ્યા<br>
                            &nbsp;&nbsp;&nbsp;<b>h = 15.5 - 3.5 = <b style='color:#ea580c;'>12 સેમી</b></b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#0f172a; font-size:14px;'><i>(પાયથાગોરસના સૂત્રથી ત્રાંસી ઊંચાઈ l શોધીએ)</i></span><br>
                                <b>l&sup2; = r&sup2; + h&sup2;</b><br>
                                l&sup2; = (3.5)&sup2; + (12)&sup2;<br>
                                l&sup2; = 12.25 + 144<br>
                                l&sup2; = 156.25<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(15625 નું વર્ગમૂળ 125 થાય, એટલે પોઈન્ટ મૂકતા 12.5 થશે)</i></span><br>
                                <b style='color:#dc2626; font-size:18px;'>l = 12.5 સેમી</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: રમકડાનું કુલ પૃષ્ઠફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ પૃષ્ઠફળ = શંકુની વક્રસપાટી + અર્ધગોલકની વક્રસપાટી</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = &pi;rl + 2&pi;r&sup2;</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા માટે <b>&pi;r</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>= &pi;r (l + 2r)</b><br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 3.5 &times; (12.5 + 2(3.5))<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(3.5 એટલે 7 ના અડધા. એટલે 7 વડે છેદ ઉડાડતા 0.5 આવે. 22 &times; 0.5 = 11 થશે)</i></span><br>
                                <b>= </b> 11 &times; (12.5 + 7)<br><br>
                                
                                <b>= </b> 11 &times; (19.5)<br><br>

                                <b>= <b style='color:#dc2626; font-size:24px;'>214.5 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> રમકડાનું કુલ પૃષ્ઠફળ <b style='color:#be123c;'>214.5 સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
               
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 4: 7 સેમી બાજુવાળા સમઘનની ઉપર અર્ધગોલક મૂકેલો છે. તો અર્ધગોલકનો મહત્તમ વ્યાસ શું હોઈ શકે? આ રીતે બનેલા પદાર્થનું કુલ પૃષ્ઠફળ શોધો.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો બેઝિક બાદબાકી વાળો સૌથી કન્ફ્યુઝિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આખા ચેપ્ટરનો સૌથી ટ્વિસ્ટેડ દાખલો! જ્યારે તમે ચોરસ પેટી (સમઘન) ની ઉપર અર્ધગોલક (વાટકો) ઊંધો મૂકો, ત્યારે પેટીની ઉપરની સપાટીનો થોડો ભાગ <b>વાટકાના ગોળ તળિયાથી ઢંકાઈ</b> જાય છે. જે ઢંકાઈ જાય તેને આપણે રંગ ન કરી શકીએ.<br>
                            એટલે સૂત્ર બનશે: <b>સમઘનનું પૃષ્ઠફળ + અર્ધગોલકની વક્રસપાટી - અર્ધગોલકનું તળિયું</b><br>
                            એટલે કે: 6a&sup2; + 2&pi;r&sup2; - &pi;r&sup2; = <b>6a&sup2; + &pi;r&sup2;</b>
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="240" viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg">
                                <rect x="70" y="120" width="80" height="80" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <polygon points="70,120 110,80 190,80 150,120" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="2"/>
                                <polygon points="150,120 190,80 190,160 150,200" fill="#38bdf8" stroke="#1d4ed8" stroke-width="2"/>

                                <text x="100" y="220" font-size="14" font-weight="bold" fill="#1d4ed8">a = 7 cm</text>

                                <ellipse cx="130" cy="100" rx="35" ry="12" fill="#fef08a" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                                <path d="M 95 100 A 35 35 0 0 1 165 100" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>

                                <line x1="95" y1="100" x2="165" y2="100" stroke="#dc2626" stroke-width="2"/>
                                <text x="110" y="95" font-size="12" font-weight="bold" fill="#dc2626">d = 7</text>

                                <line x1="40" y1="50" x2="110" y2="95" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="10" y="45" font-size="12" font-weight="bold">-&pi;r&sup2; (ઢંકાયેલ ભાગ)</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: મહત્તમ વ્યાસ અને ત્રિજ્યા નક્કી કરવી</b><br>
                            આકૃતિમાં જોતાં સ્પષ્ટ છે કે અર્ધગોલક સમઘનની ઉપર મુકાયેલ છે, તેથી તેનો <b>મહત્તમ વ્યાસ સમઘનની બાજુ જેટલો જ (એટલે કે 7 સેમી)</b> હોઈ શકે.<br>
                            • સમઘનની બાજુ <b>a = 7 સેમી</b><br>
                            • અર્ધગોલકનો વ્યાસ <b>d = 7 સેમી</b><br>
                            • અર્ધગોલકની ત્રિજ્યા <b>r = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>7</span><span>2</span></span> સેમી</b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: પદાર્થનું કુલ પૃષ્ઠફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ પૃષ્ઠફળ = સમઘનનું પૃષ્ઠફળ + અર્ધગોલકની વક્રસપાટી - <b>અર્ધગોલકના પાયાનું ક્ષેત્રફળ</b></span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 6a&sup2; + 2&pi;r&sup2; - &pi;r&sup2;</b><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(2&pi;r&sup2; માંથી 1 &pi;r&sup2; જાય તો 1 વધે)</i></span><br>
                                <b>= 6a&sup2; + &pi;r&sup2;</b><br><br>

                                <b>= </b> 6 &times; (7)&sup2; + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>2</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(7 અને 7 ઉડી જશે. 22 ને 2 વડે ભાગતા 11 આવશે)</i></span><br>
                                <b>= </b> 6(49) + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11 &times; 7</span><span>2</span></span><br><br>

                                <b>= </b> 294 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>77</span><span>2</span></span><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(77 ના અડધા 38.5 થાય)</i></span><br>
                                <b>= </b> 294 + 38.5<br><br>

                                <b>= <b style='color:#dc2626; font-size:24px;'>332.5 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) અર્ધગોલકનો મહત્તમ વ્યાસ = <b>7 સેમી</b><br>
                                (ii) પદાર્થનું કુલ પૃષ્ઠફળ = <b>332.5 સેમી&sup2;</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 5: એક સમઘન લાકડાના ટુકડાના એક પૃષ્ઠમાંથી એક અર્ધગોલક કાપવામાં આવે છે. અર્ધગોલકનો વ્યાસ 'l' એ સમઘનની બાજુ જેટલો છે. તો બાકી પદાર્થનું કુલ પૃષ્ઠફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો આંકડા વગરનો (માત્ર ચલ 'l' વાળો) માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            આ દાખલો બરાબર **પ્રશ્ન 4 ની કોપી** જ છે! પ્રશ્ન 4 માં આપણે સમઘન ઉપર અર્ધગોલક મૂક્યો હતો, અને અહીં આપણે સમઘનમાંથી અર્ધગોલક ખાડો કરીને કાપી લીધો છે.<br>
                            બંને પરિસ્થિતિમાં <b>પૃષ્ઠફળનું સૂત્ર એકસરખું જ રહે છે!</b><br>
                            કારણ કે ખાડો કરવાથી સમઘનનું ઉપરનું તળિયું (&pi;r&sup2;) દૂર થાય છે, પણ ખાડાની અંદર એક નવી વક્રસપાટી (2&pi;r&sup2;) બની જાય છે જેને આપણે રંગ કરી શકીએ.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="240" viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg">
                                <rect x="70" y="120" width="80" height="80" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <polygon points="70,120 110,80 190,80 150,120" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="2"/>
                                <polygon points="150,120 190,80 190,160 150,200" fill="#38bdf8" stroke="#1d4ed8" stroke-width="2"/>

                                <text x="105" y="220" font-size="14" font-weight="bold" fill="#1d4ed8">a = l</text>

                                <ellipse cx="130" cy="100" rx="35" ry="12" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
                                <path d="M 95 100 A 35 35 0 0 0 165 100" fill="none" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>

                                <line x1="95" y1="100" x2="165" y2="100" stroke="#dc2626" stroke-width="2"/>
                                <text x="120" y="95" font-size="14" font-weight="bold" fill="#f8fafc">d = l</text>

                                <line x1="40" y1="50" x2="120" y2="95" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="10" y="45" font-size="12" font-weight="bold">-&pi;r&sup2; (દૂર થયેલ ભાગ)</text>
                            </svg>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: બાજુ અને ત્રિજ્યા નક્કી કરવી</b><br>
                            આપેલ માહિતી મુજબ: <br>
                            • સમઘનની બાજુ <b>a = l</b> છે.<br>
                            • અર્ધગોલકનો વ્યાસ <b>d = l</b> છે.<br>
                            • તેથી અર્ધગોલકની ત્રિજ્યા <b>r = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:14px; margin:0 2px;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>l</span><span>2</span></span></b> થશે.
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 2: બાકી પદાર્થનું કુલ પૃષ્ઠફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>પૃષ્ઠફળ = સમઘનનું પૃષ્ઠફળ + અર્ધગોલકનો અંદરનો ખાડો (વક્રસપાટી) - અર્ધગોલકનું ઉપરનું કાણું (તળિયું)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 6a&sup2; + 2&pi;r&sup2; - &pi;r&sup2;</b><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(2&pi;r&sup2; માંથી 1 &pi;r&sup2; જાય તો 1 વધે)</i></span><br>
                                <b>= 6a&sup2; + &pi;r&sup2;</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે a અને r ની કિંમતો મૂકતા)</i></span><br>
                                <b>= </b> 6(l)&sup2; + &pi;<span style='font-size:24px;'>(</span><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>l</span><span>2</span></span><span style='font-size:24px;'>)</span>&sup2;<br><br>

                                <b>= </b> 6l&sup2; + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&pi;l&sup2;</span><span>4</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(લ.સા.અ. લેવા 4 નો 6 સાથે ચોકડી ગુણાકાર કરતા 24 થશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>24l&sup2; + &pi;l&sup2;</span><span>4</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંનેમાંથી l&sup2; સામાન્ય અને નીચેથી 4 બહાર કાઢતા)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:22px;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #dc2626; display:block; padding:0 3px;'>1</span><span>4</span></span> l&sup2; (24 + &pi;)</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> બાકી પદાર્થનું કુલ પૃષ્ઠફળ <b style='color:#be123c;'>&frac;14; l&sup2; (24 + &pi;)</b> એકમ&sup2; છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 6: દવાની એક કેપ્સુલનો આકાર નળાકારની બંને બાજુએ અર્ધગોલક લગાડેલા હોય તેવો છે. કેપ્સુલની કુલ લંબાઈ 14 મીમી (mm) છે અને તેનો વ્યાસ 5 મીમી છે. તો કેપ્સુલનું પૃષ્ઠફળ શોધો.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો 100% પૂછાતો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આખી કેપ્સુલ 3 ભાગની બનેલી છે: <b>વચ્ચે 1 નળાકાર + આજુબાજુ 2 અર્ધગોલક.</b><br>
                            બે અર્ધગોલક ભેગા થાય એટલે તે <b>1 આખો ગોલક (Sphere)</b> બની જાય! એટલે ગણતરી બહુ સહેલી થઈ જશે. ખાલી કુલ લંબાઈ 14 માંથી બંને બાજુની ત્રિજ્યા (2.5 + 2.5 = 5) બાદ કરવાનું ભૂલતા નહિ!
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 100 50 A 40 40 0 0 0 100 130" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
                                <path d="M 240 50 A 40 40 0 0 1 240 130" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
                                <rect x="100" y="50" width="140" height="80" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="100" y1="52" x2="100" y2="128" stroke="#bae6fd" stroke-width="3"/>
                                <line x1="240" y1="52" x2="240" y2="128" stroke="#bae6fd" stroke-width="3"/>

                                <line x1="100" y1="40" x2="100" y2="140" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="240" y1="40" x2="240" y2="140" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>

                                <line x1="40" y1="50" x2="40" y2="130" stroke="#0f172a" stroke-width="2"/>
                                <polyline points="35,50 45,50" fill="none" stroke="#0f172a" stroke-width="2"/>
                                <polyline points="35,130 45,130" fill="none" stroke="#0f172a" stroke-width="2"/>
                                <text x="10" y="95" font-size="12" font-weight="bold">d=5</text>

                                <text x="65" y="95" font-size="12" font-weight="bold" fill="#dc2626">r=2.5</text>
                                <text x="245" y="95" font-size="12" font-weight="bold" fill="#dc2626">r=2.5</text>

                                <line x1="100" y1="150" x2="240" y2="150" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="150" y="170" font-size="14" font-weight="bold" fill="#1d4ed8">h = 9 mm</text>

                                <line x1="60" y1="20" x2="280" y2="20" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="60,15 60,25" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="280,15 280,25" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <text x="140" y="15" font-size="14" font-weight="bold" fill="#16a34a">કુલ 14 mm</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ છૂટા પાડવા</b><br>
                            • વ્યાસ = 5 મીમી, તેથી <b>ત્રિજ્યા r = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>5</span><span>2</span></span> મીમી (અથવા 2.5)</b> થશે.<br>
                            • <b>નળાકારની લંબાઈ (h):</b> કુલ લંબાઈમાંથી બંને બાજુના અર્ધગોલકની ત્રિજ્યા (2.5 + 2.5 = 5) બાદ કરવી પડે.<br>
                            &nbsp;&nbsp;&nbsp;<b>h = 14 - 5 = <b style='color:#1d4ed8;'>9 મીમી</b></b>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કેપ્સુલનું કુલ પૃષ્ઠફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>પૃષ્ઠફળ = નળાકારની વક્રસપાટી + (2 &times; અર્ધગોલકની વક્રસપાટી)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 2&pi;rh + 2(2&pi;r&sup2;)</b><br><br>
                                
                                <b>= 2&pi;rh + 4&pi;r&sup2;</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા <b>2&pi;r</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>= 2&pi;r (h + 2r)</b><br><br>
                                
                                <b>= </b> 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>2</span></span> &times; (9 + 2(<span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>5</span><span>2</span></span>))<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બહાર 2 અને 2 ઉડી જશે. કૌંસમાં પણ 2 અને 2 ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 5</span><span>7</span></span> &times; (9 + 5)<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>110</span><span>7</span></span> &times; (14)<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(7 વડે 14 ઉડાડતા 2 વધે)</i></span><br>
                                <b>= </b> 110 &times; 2<br><br>

                                <b>= <b style='color:#dc2626; font-size:24px;'>220 મીમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> દવાની કેપ્સુલનું કુલ પૃષ્ઠફળ <b style='color:#be123c;'>220 મીમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                     
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 7: એક તંબુનો આકાર નળાકાર પર શંકુ મૂકવામાં આવેલો હોય તેવો છે. જો નળાકાર ભાગની ઊંચાઈ અને વ્યાસ અનુક્રમે 2.1 મીટર અને 4 મીટર હોય, તથા ઉપરના ભાગની ત્રાંસી ઊંચાઈ 2.8 મીટર હોય, તો આ તંબુ બનાવવા વપરાતા કેનવાસનું ક્ષેત્રફળ શોધો. જો કેનવાસનો ભાવ ₹500 પ્રતિ મીટર&sup2; હોય, તો તેમાં વપરાતા કેનવાસની કુલ કિંમત શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 4 માર્ક્સનો ક્ષેત્રફળ અને ખર્ચ બંને શોધવા વાળો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            તંબુ (Tent) બનાવવા માટે કાપડ (કેનવાસ) ક્યાં વપરાય? <br>
                            1. નીચેની <b>નળાકારની ગોળાઈમાં (વક્રસપાટી)</b>.<br>
                            2. ઉપરના <b>શંકુના છાપરામાં (વક્રસપાટી)</b>.<br>
                            <b>ખાસ નોંધ:</b> તંબુના તળિયે (ભોંયતળિયે) ક્યારેય કાપડ પાથરવામાં આવતું નથી! એટલે આપણે પાયાનું ક્ષેત્રફળ લેવાનું નથી. માત્ર બે વક્રસપાટીઓનો જ સરવાળો કરવાનો છે.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 180 A 50 15 0 0 0 180 180" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="80" y1="100" x2="80" y2="180" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="180" y1="100" x2="180" y2="180" stroke="#1d4ed8" stroke-width="2"/>
                                <ellipse cx="130" cy="100" rx="50" ry="15" fill="#e0f2fe" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,4"/>

                                <path d="M 80 100 L 130 20 L 180 100" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 80 100 A 50 15 0 0 0 180 100" fill="none" stroke="#ea580c" stroke-width="2"/>

                                <circle cx="130" cy="180" r="4" fill="#0f172a"/>
                                <line x1="80" y1="180" x2="180" y2="180" stroke="#0f172a" stroke-width="2"/>
                                <text x="115" y="210" font-size="14" font-weight="bold">d = 4 m</text>
                                <text x="135" y="175" font-size="12" font-weight="bold" fill="#dc2626">r=2</text>

                                <line x1="200" y1="100" x2="200" y2="180" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="210" y="145" font-size="14" font-weight="bold" fill="#1d4ed8">h = 2.1 m</text>

                                <line x1="190" y1="100" x2="140" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/>
                                <text x="180" y="50" font-size="14" font-weight="bold" fill="#ea580c">l = 2.8 m</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            • નળાકારનો વ્યાસ = 4 મીટર $\\Rightarrow$ <b>ત્રિજ્યા (r) = 2 મીટર</b><br>
                            • નળાકારની ઊંચાઈ <b>(h) = 2.1 મીટર</b><br>
                            • શંકુની ત્રાંસી ઊંચાઈ <b>(l) = 2.8 મીટર</b><br>
                            <span style='color:#0f172a; font-size:14px;'>(અહીં બંનેની ત્રિજ્યા 'r' સમાન જ રહેશે).</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: કેનવાસનું કુલ ક્ષેત્રફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>ક્ષેત્રફળ = નળાકારની વક્રસપાટી + શંકુની વક્રસપાટી</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ક્ષેત્રફળ = 2&pi;rh + &pi;rl</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંનેમાંથી <b>&pi;r</b> સામાન્ય કાઢતા ગણતરી સહેલી થશે)</i></span><br>
                                <b>= &pi;r (2h + l)</b><br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 2 &times; [2(2.1) + 2.8]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(2.1 ના ડબલ 4.2 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>44</span><span>7</span></span> &times; [4.2 + 2.8]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(કૌંસનો સરવાળો: 4.2 + 2.8 = 7.0 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>44</span><span>7</span></span> &times; <b style='color:#dc2626;'>7</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર અને નીચેથી 7 ઉડી જશે)</i></span><br>
                                <b>= <b style='color:#1d4ed8; font-size:24px;'>44 મીટર&sup2;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કેનવાસનો કુલ ખર્ચ શોધવો</b><br>
                            <span style='color:#0f172a; font-size:14px;'>1 મીટર&sup2; કેનવાસનો ભાવ = ₹ 500<br>
                            તો 44 મીટર&sup2; નો ભાવ = 44 &times; 500</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>કુલ ખર્ચ = </b> 44 &times; 500<br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>₹ 22,000</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબો:</b><br>
                                (i) કેનવાસનું ક્ષેત્રફળ = <b>44 મીટર&sup2;</b><br>
                                (ii) કુલ કિંમત = <b>₹ 22,000</b>
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 8: નળાકાર પદાર્થની ઊંચાઈ 2.4 સેમી અને વ્યાસ 1.4 સેમી છે. તેમાંથી તેટલી જ ઊંચાઈ અને વ્યાસવાળો શંકુ કાપી લેવામાં આવે છે. તો વધેલા પદાર્થનું કુલ પૃષ્ઠફળ નજીકના સેમી&sup2; માં શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો 3 અલગ-અલગ સપાટીઓના સરવાળા વાળો સૌથી ટ્વિસ્ટેડ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આ દાખલાને ગોખશો નહિ, માત્ર કલ્પના કરો! તમારી પાસે લાકડાનો એક નળાકાર ટુકડો છે. તમે ઉપરથી મશીન લગાવીને શંકુ આકારનો <b>ખાડો (Cavity)</b> કોતરીને કાઢી લીધો.<br>
                            હવે તમારી પાસે રંગ કરવા માટે કેટલી સપાટી બચી?<br>
                            1. <b>નળાકારની બહારની ગોળાઈ</b> (વક્રસપાટી: 2&pi;rh)<br>
                            2. <b>નીચેનું આખું તળિયું</b> (વર્તુળનું ક્ષેત્રફળ: &pi;r&sup2;)<br>
                            3. <b>અંદર પડેલો શંકુ આકારનો નવો ખાડો!</b> (શંકુની વક્રસપાટી: &pi;rl)<br>
                            <b>આ ત્રણેયનો સરવાળો કરવાનો છે!</b>
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 80 200 A 50 15 0 0 0 180 200" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <path d="M 80 200 A 50 15 0 0 1 180 200" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="80" y1="60" x2="80" y2="200" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="180" y1="60" x2="180" y2="200" stroke="#1d4ed8" stroke-width="2"/>
                                <ellipse cx="130" cy="60" rx="50" ry="15" fill="#f8fafc" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>

                                <path d="M 80 60 L 130 200 L 180 60" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 80 60 A 50 15 0 0 0 180 60" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>

                                <line x1="130" y1="60" x2="130" y2="200" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                
                                <line x1="130" y1="60" x2="180" y2="60" stroke="#0f172a" stroke-width="2"/>
                                <text x="140" y="50" font-size="12" font-weight="bold">r=0.7</text>

                                <line x1="210" y1="60" x2="210" y2="200" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="220" y="135" font-size="14" font-weight="bold" fill="#1d4ed8">h=2.4</text>

                                <line x1="100" y1="130" x2="60" y2="130" stroke="#ea580c" stroke-width="1.5"/>
                                <text x="10" y="135" font-size="14" font-weight="bold" fill="#dc2626">l = ?</text>
                                
                                <text x="130" y="235" font-size="12" font-weight="bold" fill="#16a34a">+ તળિયું બચ્યું છે (&pi;r&sup2;)</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા અને ત્રાંસી ઊંચાઈ (l) શોધવી</b><br>
                            • વ્યાસ = 1.4 સેમી $\\Rightarrow$ <b>ત્રિજ્યા r = 0.7 સેમી</b><br>
                            • ઊંચાઈ <b>h = 2.4 સેમી</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#dcfce7; padding:10px; border-radius:5px;'>
                                <span style='color:#0f172a; font-size:14px;'><i>(અંદર શંકુ બનતો હોવાથી પાયથાગોરસથી 'l' શોધવો પડે)</i></span><br>
                                <b>l&sup2; = r&sup2; + h&sup2;</b><br>
                                l&sup2; = (0.7)&sup2; + (2.4)&sup2;<br>
                                l&sup2; = 0.49 + 5.76<br>
                                l&sup2; = 6.25<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(625 નું વર્ગમૂળ 25 થાય, એટલે 1 પોઈન્ટ કપાશે)</i></span><br>
                                <b style='color:#dc2626; font-size:18px;'>l = 2.5 સેમી</b>
                            </div>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વધેલા પદાર્થનું કુલ પૃષ્ઠફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = </b> નળાકારની વક્રસપાટી + નળાકારનું તળિયું + શંકુની વક્રસપાટી<br><br>
                                <b>= 2&pi;rh + &pi;r&sup2; + &pi;rl</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ત્રણેયમાંથી <b>&pi;r</b> સામાન્ય કાઢતા ગણતરી બહુ સહેલી થશે!)</i></span><br>
                                <b>= &pi;r [ 2h + r + l ]</b><br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>10</span></span> &times; [ 2(2.4) + 0.7 + 2.5 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બહાર 7 અને 7 ઉડી જશે. અંદર: 2.4 ના ડબલ 4.8 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>10</span></span> &times; [ 4.8 + 0.7 + 2.5 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(કૌંસનો સરવાળો: 4.8 + 0.7 + 2.5 = 8.0 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>10</span></span> &times; 8<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>176</span><span>10</span></span> <b>= <b style='color:#1d4ed8; font-size:22px;'>17.6 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> વધેલા પદાર્થનું કુલ પૃષ્ઠફળ <b>17.6 સેમી&sup2;</b> થાય છે.<br>
                                <span style='color:#0f172a; font-size:14px;'><i>(જો પ્રશ્નમાં પૂછ્યા મુજબ <b>નજીકના પૂર્ણાંકમાં</b> લખવું હોય, તો 17.6 એ 18 ની વધુ નજીક હોવાથી, જવાબ <b><span style='color:#be123c;'>આશરે 18 સેમી&sup2;</span></b> પણ લખી શકાય).</i></span>
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.1 પ્રશ્ન 9: આકૃતિમાં દર્શાવ્યા પ્રમાણે, લાકડાના નળાકારમાંથી બંને બાજુએથી અર્ધગોલક કાઢીને એક લાકડાનો શો-પીસ બનાવ્યો છે. જો નળાકારની ઊંચાઈ 10 સેમી હોય અને પાયાની ત્રિજ્યા 3.5 સેમી હોય, તો આ શો-પીસનું કુલ પૃષ્ઠફળ શોધો.", 
                    question_desc: "2024 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો સ્વાધ્યાયનો છેલ્લો અને 100% પૂછાઈ શકે તેવો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            આ દાખલો <b>પ્રશ્ન 8 નો મોટો ભાઈ</b> છે! <br>
                            જ્યારે આપણે લાકડામાં બંને બાજુથી કોતરીને <b>બે અર્ધગોલક આકારના ખાડા</b> પાડીએ, ત્યારે લાકડાનું વજન ભલે ઘટે, પણ તેની અંદર <b>નવી 2 ગોળ સપાટીઓ</b> બની જાય છે જેને આપણે રંગ કરી શકીએ!<br>
                            એટલે <b>કુલ પૃષ્ઠફળ = નળાકારની બહારની ગોળાઈ + 2 (અર્ધગોલકની અંદરની ગોળાઈ)</b>.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg">
                                <line x1="80" y1="50" x2="80" y2="210" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="180" y1="50" x2="180" y2="210" stroke="#1d4ed8" stroke-width="2"/>

                                <path d="M 80 50 A 50 50 0 0 0 180 50" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                <ellipse cx="130" cy="50" rx="50" ry="12" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>

                                <path d="M 80 210 A 50 50 0 0 1 180 210" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                <ellipse cx="130" cy="210" rx="50" ry="12" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>

                                <line x1="130" y1="50" x2="130" y2="210" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                
                                <line x1="130" y1="50" x2="180" y2="50" stroke="#0f172a" stroke-width="2"/>
                                <text x="135" y="40" font-size="12" font-weight="bold">r=3.5</text>

                                <line x1="210" y1="50" x2="210" y2="210" stroke="#1d4ed8" stroke-width="2"/>
                                <polyline points="205,50 215,50" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <polyline points="205,210 215,210" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="220" y="135" font-size="14" font-weight="bold" fill="#1d4ed8">h=10</text>

                                <text x="15" y="135" font-size="12" font-weight="bold" fill="#1d4ed8">નળાકાર</text>
                                <text x="100" y="240" font-size="12" font-weight="bold" fill="#ea580c">અર્ધગોલક ખાડો</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            • નળાકાર અને અર્ધગોલક બંનેની ત્રિજ્યા <b>r = 3.5 સેમી</b> (અથવા 7/2 સેમી).<br>
                            • નળાકારની ઊંચાઈ <b>h = 10 સેમી</b>.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: શો-પીસનું કુલ પૃષ્ઠફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ પૃષ્ઠફળ = નળાકારની વક્રસપાટી + 2 &times; (અર્ધગોલકની વક્રસપાટી)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>પૃષ્ઠફળ = 2&pi;rh + 2(2&pi;r&sup2;)</b><br><br>

                                <b>= 2&pi;rh + 4&pi;r&sup2;</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા બંનેમાંથી <b>2&pi;r</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>= 2&pi;r (h + 2r)</b><br><br>
                                
                                <b>= </b> 2 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 3.5 &times; [ 10 + 2(3.5) ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(3.5 ના ડબલ 7 થાય. એટલે 2 &times; 3.5 = 7 મુકતા અને કૌંસમાં પણ 7 મુકતા)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <b style='color:#dc2626;'>7</b> &times; [ 10 + 7 ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બહારથી 7 અને 7 ઉડી જશે)</i></span><br>
                                <b>= </b> 22 &times; (17)<br><br>

                                <b>= <b style='color:#dc2626; font-size:24px;'>374 સેમી&sup2;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> લાકડાના શો-પીસનું કુલ પૃષ્ઠફળ <b style='color:#be123c;'>374 સેમી&sup2;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
               
                {
                    question: "🎯 માસ્ટર ચાવી: ઘનફળ (Volume) એટલે શું? તે પૃષ્ઠફળથી કઈ રીતે અલગ છે?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 કન્સેપ્ટ સમજો (સાવ દેશી ભાષામાં):</b><br>
                            • <b>પૃષ્ઠફળ (Surface Area):</b> એટલે વસ્તુની <b>બહારની સપાટી</b> (જ્યાં આપણે કલર કરી શકીએ).<br>
                            • <b>ઘનફળ (Volume / Capacity):</b> એટલે વસ્તુની અંદરની ક્ષમતા અથવા <b>વસ્તુ કેટલી જગ્યા રોકે છે</b> (જેમ કે ટાંકીમાં કેટલું પાણી સમાય, યા લાકડું કેટલું વપરાયું).<br><br>
                            <b>માસ્ટર ટ્રીક:</b><br>
                            જ્યારે 2 આકારો ભેગા થાય, ત્યારે <b>તેમના ઘનફળનો હંમેશા સીધો સરવાળો જ થાય!</b> (કોઈ બાદબાકી કે છૂપી સપાટી વિચારવાની નહિ, સાવ સીધો સરવાળો!).
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 1: એક ઘન પદાર્થ એ 1 સેમી ત્રિજ્યા ધરાવતા અર્ધગોલક ઉપર સમાન ત્રિજ્યાવાળો શંકુ ગોઠવીને બનાવાયો છે. જો શંકુની ઊંચાઈ એ તેની ત્રિજ્યા જેટલી હોય, તો આ ઘન પદાર્થનું ઘનફળ &pi; ના પદમાં શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 2 માર્ક્સનો માત્ર 1 મિનિટમાં ગણાઈ જતો સૌથી સહેલો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            રકમમાં સ્પષ્ટ લખ્યું છે કે <b>"&pi; ના પદમાં શોધો"</b>, એટલે ભૂલથી પણ &pi; ની કિંમત (22/7) મૂકવી નહિ! અને બધી જ કિંમત '1' હોવાથી ગણતરી રમત બની જશે!
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 60 130 A 50 50 0 0 0 160 130" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                                <ellipse cx="110" cy="130" rx="50" ry="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                
                                <path d="M 60 130 L 110 50 L 160 130 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2" opacity="0.9"/>
                                
                                <circle cx="110" cy="130" r="4" fill="#0f172a"/>
                                
                                <line x1="110" y1="130" x2="160" y2="130" stroke="#0f172a" stroke-width="2"/>
                                <text x="125" y="125" font-size="12" font-weight="bold">r = 1</text>

                                <line x1="110" y1="130" x2="110" y2="50" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                                <text x="115" y="90" font-size="12" font-weight="bold" fill="#ea580c">h = 1</text>

                                <line x1="110" y1="130" x2="110" y2="180" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,3"/>
                                <text x="115" y="165" font-size="12" font-weight="bold" fill="#16a34a">r = 1</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            • અર્ધગોલક અને શંકુની ત્રિજ્યા <b>r = 1 સેમી</b>.<br>
                            • શંકુની ઊંચાઈ એ ત્રિજ્યા જેટલી જ છે, એટલે <b>h = 1 સેમી</b>.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: ઘન પદાર્થનું કુલ ઘનફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ ઘનફળ = શંકુનું ઘનફળ + અર્ધગોલકનું ઘનફળ</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>ઘનફળ = </b> [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;r&sup2;h ] + [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span> &pi;r&sup3; ]<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(હવે r અને h ની જગ્યાએ 1 મૂકતા)</i></span><br>
                                <b>= </b> [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;(1)&sup2;(1) ] + [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span> &pi;(1)&sup3; ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(1 નો વર્ગ કે ઘન 1 જ થાય, એટલે ગુણાકારમાં 1 લખવાની જરૂર નથી)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1&pi;</span><span>3</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2&pi;</span><span>3</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(છેદ સમાન છે, એટલે અંશનો સીધો સરવાળો: 1&pi; + 2&pi; = 3&pi;)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3&pi;</span><span>3</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર-નીચે 3 ઉડી જશે)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>&pi; સેમી&sup3;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> આપેલ ઘન પદાર્થનું કુલ ઘનફળ <b style='color:#be123c;'>&pi; સેમી&sup3;</b> છે. (નોંધ: ઘનફળનો એકમ હંમેશા <b>સેમી&sup3;</b> કે <b>ઘન સેમી</b> લખવો).
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 2: એન્જિનિયરિંગના વિદ્યાર્થી રશેલને નળાકારના બંને છેડે પાતળી એલ્યુમિનિયમની શીટમાંથી બનેલો શંકુ બેસાડી એક મોડલ બનાવવાનું કહેવામાં આવ્યું. મોડલનો વ્યાસ 3 સેમી અને લંબાઈ 12 સેમી છે. જો શંકુની ઊંચાઈ 2 સેમી હોય, તો રશેલે બનાવેલ મોડલમાં કેટલી હવા સમાશે તે શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો નળાકાર અને 2 શંકુના ઘનફળનો સરવાળો કરાવતો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            કોઈપણ બંધ પાત્રમાં કેટલી હવા સમાય? તેના <b>ઘનફળ (Volume)</b> જેટલી!<br>
                            મોડલ 3 ભાગનું બનેલું છે: <b>વચ્ચે 1 નળાકાર + આજુબાજુ 2 શંકુ</b>.<br>
                            કુલ લંબાઈ 12 માંથી બંને બાજુના શંકુની ઊંચાઈ (2 + 2 = 4) બાદ કરીશું, એટલે વચ્ચેના નળાકારની ઊંચાઈ મળી જશે. પછી ત્રણેયના ઘનફળનો સીધો સરવાળો!
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="340" height="200" viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">
                                <rect x="90" y="70" width="160" height="60" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="90" y1="70" x2="90" y2="130" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                <line x1="250" y1="70" x2="250" y2="130" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
                                
                                <path d="M 90 70 L 50 100 L 90 130 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 250 70 L 290 100 L 250 130 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>

                                <line x1="30" y1="100" x2="310" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2,2"/>

                                <line x1="170" y1="70" x2="170" y2="130" stroke="#dc2626" stroke-width="2"/>
                                <text x="175" y="105" font-size="12" font-weight="bold" fill="#dc2626">d=3</text>

                                <line x1="50" y1="145" x2="90" y2="145" stroke="#ea580c" stroke-width="2"/>
                                <text x="60" y="165" font-size="12" font-weight="bold" fill="#ea580c">h₁=2</text>

                                <line x1="250" y1="145" x2="290" y2="145" stroke="#ea580c" stroke-width="2"/>
                                <text x="260" y="165" font-size="12" font-weight="bold" fill="#ea580c">h₁=2</text>

                                <line x1="90" y1="145" x2="250" y2="145" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="155" y="165" font-size="12" font-weight="bold" fill="#1d4ed8">h₂=8</text>

                                <line x1="50" y1="40" x2="290" y2="40" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="50,35 50,45" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="290,35 290,45" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <text x="145" y="30" font-size="14" font-weight="bold" fill="#16a34a">કુલ લંબાઈ 12</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ છૂટા પાડવા</b><br>
                            • વ્યાસ = 3 સેમી, તેથી ત્રિજ્યા <b>r = 3/2 સેમી</b> (નળાકાર અને શંકુ બંને માટે).<br>
                            • શંકુની ઊંચાઈ <b>h₁ = 2 સેમી</b>.<br>
                            • નળાકારની ઊંચાઈ <b>(h₂) = 12 - (2 + 2) = <b style='color:#1d4ed8;'>8 સેમી</b></b>.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: મોડલનું કુલ ઘનફળ (હવાનું કદ)</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ ઘનફળ = નળાકારનું ઘનફળ + 2 (શંકુનું ઘનફળ)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>કુલ ઘનફળ = </b> &pi;r&sup2;h₂ + 2 [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;r&sup2;h₁ ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા બંનેમાંથી <b>&pi;r&sup2;</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>= </b> &pi;r&sup2; [ h₂ + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2h₁</span><span>3</span></span> ]<br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3</span><span>2</span></span> &times; [ 8 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2(2)</span><span>3</span></span> ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(કૌંસની અંદર લ.સા.અ. લેતા: 8 &times; 3 = 24. અને 2(2) = 4)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 9</span><span>28</span></span> &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>24 + 4</span><span>3</span></span> ]<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>198</span><span>28</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>28</b></span><span><b style='color:#dc2626;'>3</b></span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર અને નીચેથી 28 ઉડી જશે! અને 198 ને 3 વડે ભાગતા 66 વધશે)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>66 સેમી&sup3;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> મોડલમાં સમાતી હવાનું ઘનફળ <b style='color:#be123c;'>66 સેમી&sup3;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 3: એક ગુલાબજાંબુમાં તેના ઘનફળના આશરે 30% જેટલી ખાંડની ચાસણી (Syrup) છે. દરેક ગુલાબજાંબુનો આકાર નળાકારના બંને છેડે અર્ધગોલક લગાવ્યા હોય તેવો છે. તેની કુલ લંબાઈ 5 સેમી અને વ્યાસ 2.8 સેમી છે. તો આવા 45 ગુલાબજાંબુમાં આશરે કેટલી ચાસણી હશે તે શોધો.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો 100% પૂછાતો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            આખા ગણિતનો સૌથી મોટા ગુણાકાર વાળો દાખલો! પણ આપણે તેને <b>અપૂર્ણાંક (Fractions)</b> માં ફેરવીને ગણીશું, જેથી 45 અને 30% ના છેદ આરામથી ઉડી જશે.<br>
                            1 ગુલાબજાંબુ = વચ્ચે 1 નળાકાર + આજુબાજુ 2 અર્ધગોલક (એટલે કે 1 આખો ગોલક).
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 110 60 A 30 30 0 0 0 110 120" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
                                <path d="M 230 60 A 30 30 0 0 1 230 120" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
                                <rect x="110" y="60" width="120" height="60" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
                                <line x1="110" y1="62" x2="110" y2="118" stroke="#fdba74" stroke-width="3"/>
                                <line x1="230" y1="62" x2="230" y2="118" stroke="#fdba74" stroke-width="3"/>

                                <line x1="110" y1="50" x2="110" y2="130" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>
                                <line x1="230" y1="50" x2="230" y2="130" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="3,3"/>

                                <line x1="170" y1="60" x2="170" y2="120" stroke="#0f172a" stroke-width="2"/>
                                <text x="175" y="95" font-size="12" font-weight="bold">d=2.8</text>

                                <text x="80" y="95" font-size="12" font-weight="bold" fill="#dc2626">r=1.4</text>
                                <text x="235" y="95" font-size="12" font-weight="bold" fill="#dc2626">r=1.4</text>

                                <line x1="110" y1="145" x2="230" y2="145" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="150" y="165" font-size="14" font-weight="bold" fill="#1d4ed8">h = 2.2</text>

                                <line x1="80" y1="30" x2="260" y2="30" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="80,25 80,35" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <polyline points="260,25 260,35" fill="none" stroke="#16a34a" stroke-width="2"/>
                                <text x="145" y="25" font-size="14" font-weight="bold" fill="#16a34a">કુલ લંબાઈ 5</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: 1 ગુલાબજાંબુનાં માપ શોધવા</b><br>
                            • વ્યાસ = 2.8 સેમી $\\Rightarrow$ <b>ત્રિજ્યા r = 1.4 સેમી</b> (એટલે કે 14/10 સેમી).<br>
                            • <b>નળાકારની લંબાઈ (h)</b> = કુલ લંબાઈ - બંને બાજુના અર્ધગોલક (1.4 + 1.4 = 2.8)<br>
                            &nbsp;&nbsp;&nbsp;<b>h = 5 - 2.8 = <b style='color:#1d4ed8;'>2.2 સેમી</b></b> (એટલે કે 22/10 સેમી).
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: 1 ગુલાબજાંબુનું ઘનફળ</b><br>
                            <span style='color:#0f172a; font-size:14px;'>ઘનફળ = નળાકારનું ઘનફળ + 2 (અર્ધગોલકનું ઘનફળ)</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>V = &pi;r&sup2;h + 2 [ (2/3)&pi;r&sup3; ]</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગણતરી સહેલી કરવા <b>&pi;r&sup2;</b> સામાન્ય કાઢતા)</i></span><br>
                                <b>V = &pi;r&sup2; [ h + (4/3)r ]</b><br><br>
                                
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>10</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>10</span></span> &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>10</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4(14)</span><span>3 &times; 10</span></span> ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બહાર: 7 વડે 14 ઉડાડતા 2 વધે. અંદર: 4 &times; 14 = 56)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22 &times; 2 &times; 14</span><span>100</span></span> &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>10</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>56</span><span>30</span></span> ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંદર લ.સા.અ. લેવા 22 ને 3 વડે ગુણતા 66 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>616</span><span>100</span></span> &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>66 + 56</span><span>30</span></span> ]<br><br>

                                <b>1 ગુલાબજાંબુનું ઘનફળ = <b style='color:#dc2626;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid #dc2626; display:block; padding:0 3px;'>616</span><span>100</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid #dc2626; display:block; padding:0 3px;'>122</span><span>30</span></span></b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: 45 ગુલાબજાંબુ અને 30% ચાસણી શોધવી</b><br>
                            <span style='color:#0f172a; font-size:14px;'>સીધી એક જ લાઇનમાં ગણતરી (બધા છેદ ઉડી જશે!):</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>કુલ ચાસણી = </b> 45 &times; (1 ગુલાબજાંબુનું ઘનફળ) &times; 30%<br><br>
                                
                                <b>= </b> 45 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>616</span><span>100</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>122</span><span>30</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>30</b></span><span>100</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ઉપર અને નીચેથી 30 અને 30 ઉડી જશે! આ જ આપણી ટ્રીક હતી!)</i></span><br>
                                <b>= </b> 45 &times; 616 &times; 122 / 10000<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે માત્ર ગુણાકાર: 45 &times; 616 = 27720. અને 27720 &times; 122 = 3381840)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3381840</span><span>10000</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(4 પોઈન્ટ કાપતા)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>338.184 સેમી&sup3;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> 45 ગુલાબજાંબુમાં આશરે <b>338 સેમી&sup3;</b> ચાસણી હશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 4: એક લાકડાનું લંબઘન પેન-સ્ટેન્ડ 4 શંકુ આકારના છિદ્રવાળું છે. લંબઘનનું માપ 15 સેમી &times; 10 સેમી &times; 3.5 સેમી છે. છિદ્રવાળા દરેક ભાગની ત્રિજ્યા 0.5 સેમી અને ઊંડાઈ 1.4 સેમી છે. તો લાકડાના આ સ્ટેન્ડનું ઘનફળ શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો લંબઘન અને 4 શંકુના ઘનફળની બાદબાકી વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            જ્યારે આપણે લાકડાના બ્લોકમાં પેન મૂકવા માટે ખાડા (છિદ્ર) પાડીએ, ત્યારે તેમાંથી લાકડું બહાર નીકળી જાય છે (એટલે લાકડું ઓછું થાય).<br>
                            આથી, <b>લાકડાનું ઘનફળ = આખા લંબઘનનું ઘનફળ - 4 (શંકુ આકારના ખાડાનું ઘનફળ)</b>.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="340" height="220" viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
                                <rect x="50" y="100" width="220" height="60" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                                <polygon points="50,100 80,60 250,60 220,100" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                                <polygon points="270,100 300,60 300,120 270,160" fill="#ca8a04" opacity="0" /> <polygon points="220,100 250,60 250,120 220,160" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>

                                <ellipse cx="90" cy="85" rx="10" ry="4" fill="#0f172a" stroke="#0f172a" stroke-width="1"/>
                                <path d="M 80 85 L 90 120 L 100 85" fill="#fef08a" stroke="#ca8a04" stroke-width="1" stroke-dasharray="2,2"/>
                                <ellipse cx="130" cy="85" rx="10" ry="4" fill="#0f172a" stroke="#0f172a" stroke-width="1"/>
                                <path d="M 120 85 L 130 120 L 140 85" fill="#fef08a" stroke="#ca8a04" stroke-width="1" stroke-dasharray="2,2"/>
                                <ellipse cx="170" cy="85" rx="10" ry="4" fill="#0f172a" stroke="#0f172a" stroke-width="1"/>
                                <path d="M 160 85 L 170 120 L 180 85" fill="#fef08a" stroke="#ca8a04" stroke-width="1" stroke-dasharray="2,2"/>
                                <ellipse cx="210" cy="85" rx="10" ry="4" fill="#0f172a" stroke="#0f172a" stroke-width="1"/>
                                <path d="M 200 85 L 210 120 L 220 85" fill="#fef08a" stroke="#ca8a04" stroke-width="1" stroke-dasharray="2,2"/>

                                <line x1="50" y1="180" x2="220" y2="180" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="110" y="200" font-size="14" font-weight="bold" fill="#1d4ed8">l = 15 cm</text>
                                
                                <line x1="30" y1="100" x2="30" y2="160" stroke="#16a34a" stroke-width="2"/>
                                <text x="5" y="135" font-size="12" font-weight="bold" fill="#16a34a">h=3.5</text>

                                <text x="250" y="80" font-size="12" font-weight="bold" fill="#ea580c">b=10</text>

                                <rect x="250" y="130" width="80" height="80" fill="#f8fafc" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
                                <ellipse cx="290" cy="140" rx="15" ry="5" fill="#e2e8f0" stroke="#0f172a" stroke-width="1"/>
                                <path d="M 275 140 L 290 190 L 305 140" fill="none" stroke="#0f172a" stroke-width="2"/>
                                <text x="270" y="135" font-size="10" font-weight="bold" fill="#dc2626">r=0.5</text>
                                <text x="310" y="170" font-size="10" font-weight="bold" fill="#dc2626">h=1.4</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ છૂટા પાડવા</b><br>
                            • <b>લંબઘન માટે:</b> l = 15, b = 10, અને H = 3.5 (એટલે કે 35/10)<br>
                            • <b>શંકુ માટે:</b> ત્રિજ્યા r = 0.5 (એટલે કે 1/2) અને ઊંડાઈ h = 1.4 (એટલે કે 14/10)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બંનેનું અલગ-અલગ ઘનફળ શોધવું</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px; margin-bottom:10px;'>
                                <b>(A) લંબઘનનું ઘનફળ = l &times; b &times; H</b><br>
                                = 15 &times; 10 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>10</span></span><br>
                                <span style='color:#047857; font-size:14px;'><i>(10 અને 10 ઉડી જશે)</i></span><br>
                                = 15 &times; 35 = <b style='color:#1d4ed8;'>525 સેમી&sup3;</b>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>(B) 4 શંકુનું ઘનફળ = 4 &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;r&sup2;h ]</b><br><br>
                                
                                = 4 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>10</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(જોઈએ: 2 &times; 2 = 4 થાય, જે આગળના 4 સાથે ઉડી જશે. 7 વડે 14 ઉડાડતા ઉપર 2 વધે)</i></span><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &times; 22 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'><b style='color:#dc2626;'>2</b></span><span>10</span></span><br><br>

                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>44</span><span>30</span></span><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(44 નો 30 વડે ભાગાકાર કરતા)</i></span><br>
                                <b>= <b style='color:#ea580c;'>1.47 સેમી&sup3; (આશરે)</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: લાકડાનું ઘનફળ શોધવું (બાદબાકી)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>લાકડાનું ઘનફળ = </b> લંબઘનનું ઘનફળ - 4 શંકુનું ઘનફળ<br>
                                = 525 - 1.47<br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>523.53 સેમી&sup3;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> લાકડાના આ સ્ટેન્ડનું ઘનફળ <b style='color:#be123c;'>523.53 સેમી&sup3;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
               
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 5: એક વાસણનું સ્વરૂપ ઊંધા શંકુ જેવું છે. તેની ઊંચાઈ 8 સેમી અને ઉપરના ખુલ્લા ભાગની ત્રિજ્યા 5 સેમી છે. તે ઉપરની ધાર સુધી પાણીથી ભરેલું છે. જ્યારે વાસણમાં 0.5 સેમી ત્રિજ્યાવાળી સીસાની ગોળીઓ નાખવામાં આવે છે, ત્યારે 1/4 (ચોથા ભાગનું) પાણી બહાર ઢોળાય છે. તો વાસણમાં નાખેલી ગોળીઓની સંખ્યા શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો બે ઘનફળ સરખાવવાનો મોસ્ટ ફેવરિટ અને સ્માર્ટ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની ખાસ ટ્રીક:</b><br>
                            વિજ્ઞાનનો નિયમ (આર્કિમિડીઝનો સિદ્ધાંત) યાદ કરો: તમે પાણીમાં જેટલી જગ્યા રોકતી વસ્તુ નાખો, બરાબર <b>તેટલું જ પાણી બહાર ઢોળાય!</b><br>
                            એટલે કે, <b>n ગોળીઓનું ઘનફળ = બહાર ઢોળાયેલું પાણી (જે શંકુના ઘનફળનો 1/4 ભાગ છે).</b><br>
                            અહીં આપણે &pi; ની કિંમત 22/7 મૂકીશું જ નહિ, તેને સામસામે સીધી <b>ઉડાડી દઈશું!</b>
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="340" height="240" viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 60 50 L 160 210 L 260 50 Z" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <ellipse cx="160" cy="50" rx="100" ry="20" fill="#7dd3fc" stroke="#1d4ed8" stroke-width="2"/>

                                <circle cx="160" cy="50" r="4" fill="#0f172a"/>
                                <line x1="160" y1="50" x2="260" y2="50" stroke="#0f172a" stroke-width="2"/>
                                <text x="190" y="45" font-size="12" font-weight="bold">R = 5</text>

                                <line x1="160" y1="50" x2="160" y2="210" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,4"/>
                                <text x="165" y="130" font-size="14" font-weight="bold" fill="#1d4ed8">H = 8</text>

                                <circle cx="160" cy="190" r="8" fill="#64748b" stroke="#0f172a"/>
                                <circle cx="150" cy="170" r="8" fill="#64748b" stroke="#0f172a"/>
                                <circle cx="170" cy="170" r="8" fill="#64748b" stroke="#0f172a"/>
                                <circle cx="160" cy="150" r="8" fill="#64748b" stroke="#0f172a"/>

                                <circle cx="160" cy="10" r="8" fill="#64748b" stroke="#0f172a"/>
                                <line x1="160" y1="20" x2="160" y2="40" stroke="#dc2626" stroke-width="2" stroke-dasharray="2,2"/>
                                <text x="175" y="15" font-size="10" font-weight="bold" fill="#dc2626">r = 0.5</text>

                                <path d="M 50 60 Q 30 100 40 150" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,5"/>
                                <path d="M 270 60 Q 290 100 280 150" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,5"/>
                                <text x="270" y="180" font-size="12" font-weight="bold" fill="#0284c7">1/4 પાણી બહાર</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            • <b>શંકુ માટે:</b> ત્રિજ્યા R = 5 સેમી, ઊંચાઈ H = 8 સેમી<br>
                            • <b>ગોળી (ગોલક) માટે:</b> ત્રિજ્યા r = 0.5 સેમી (એટલે કે 1/2 સેમી)
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બંનેના ઘનફળ સરખાવવા (માસ્ટર ઈક્વેશન)</b><br>
                            <span style='color:#0f172a; font-size:14px;'>ધારો કે ગોળીઓની સંખ્યા 'n' છે.</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>n &times; (ગોળીનું ઘનફળ) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; (શંકુનું ઘનફળ)</b><br><br>
                                
                                n &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span> &pi;r&sup3; ] = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;R&sup2;H ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંને બાજુથી <b>&pi;</b> અને છેદનો <b>3</b> સીધા જ ઉડી જશે! કેવી મસ્ત ટ્રીક!)</i></span><br>
                                n &times; [ 4 &times; r&sup3; ] = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; [ R&sup2;H ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે કિંમતો મૂકીએ: r=1/2, R=5, H=8)</i></span><br>
                                n &times; 4 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>4</span></span> &times; 5 &times; 5 &times; 8<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ડાબી બાજુ: 2 &times; 2 = 4 થાય જે ઉપરના 4 સાથે ઉડશે. માત્ર 1/2 વધશે.<br>
                                જમણી બાજુ: 4 વડે 8 ને ઉડાડતા 2 વધે. 5 &times; 5 &times; 2 = 50)</i></span><br>
                                n &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>2</span></span> = 50<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(છેદનો 2 સામે ગુણાકારમાં જશે)</i></span><br>
                                n = 50 &times; 2<br>
                                <b>n = <b style='color:#dc2626; font-size:24px;'>100</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> વાસણમાં નાખેલી ગોળીઓની સંખ્યા <b style='color:#be123c;'>100</b> હશે.
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 6: એક નક્કર લોખંડના થાંભલામાં 220 સેમી ઊંચાઈ અને 24 સેમી વ્યાસવાળા નળાકાર ઉપર 60 સેમી ઊંચાઈ અને 8 સેમી ત્રિજ્યાવાળો બીજો નળાકાર મૂકવામાં આવ્યો છે. થાંભલાનું દળ શોધો. (આપેલ છે કે 1 સેમી&sup3; લોખંડનું દળ આશરે 8 ગ્રામ છે). (&pi; = 3.14 લો)", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો બે નળાકારના ઘનફળ અને વજનની ગણતરી વાળો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic):</b><br>
                            કોઈપણ પદાર્થનું વજન (દળ) શોધવું હોય, તો પહેલા તેનું <b>કુલ ઘનફળ (Volume)</b> શોધવું પડે.<br>
                            અહીં મોટા નળાકારની ઉપર નાનો નળાકાર મૂકેલો છે. એટલે બંનેના ઘનફળનો <b>સરવાળો</b> કરીશું. છેલ્લે જે જવાબ આવે તેને 8 વડે ગુણીને 1000 વડે ભાગીશું એટલે જવાબ <b>કિલોગ્રામ (kg)</b> માં મળી જશે!
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:15px;'>
                            <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                                <rect x="80" y="100" width="120" height="130" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
                                <ellipse cx="140" cy="230" rx="60" ry="15" fill="#64748b" stroke="#0f172a" stroke-width="2"/>
                                <ellipse cx="140" cy="100" rx="60" ry="15" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>

                                <rect x="110" y="40" width="60" height="60" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/>
                                <ellipse cx="140" cy="40" rx="30" ry="8" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>

                                <line x1="140" y1="230" x2="200" y2="230" stroke="#0f172a" stroke-width="2"/>
                                <text x="150" y="225" font-size="12" font-weight="bold">R=12</text>
                                
                                <line x1="220" y1="100" x2="220" y2="230" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="225" y="170" font-size="14" font-weight="bold" fill="#1d4ed8">H=220</text>

                                <line x1="140" y1="40" x2="170" y2="40" stroke="#0f172a" stroke-width="2"/>
                                <text x="145" y="35" font-size="10" font-weight="bold">r=8</text>
                                
                                <line x1="190" y1="40" x2="190" y2="100" stroke="#ea580c" stroke-width="2"/>
                                <text x="195" y="75" font-size="12" font-weight="bold" fill="#ea580c">h=60</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ છૂટા પાડવા</b><br>
                            • <b>મોટો નળાકાર:</b> વ્યાસ = 24 સેમી $\\Rightarrow$ ત્રિજ્યા <b>R = 12 સેમી</b> અને ઊંચાઈ <b>H = 220 સેમી</b>.<br>
                            • <b>નાનો નળાકાર:</b> ત્રિજ્યા <b>r = 8 સેમી</b> અને ઊંચાઈ <b>h = 60 સેમી</b>.
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: થાંભલાનું કુલ ઘનફળ શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>કુલ ઘનફળ = મોટા નળાકારનું ઘનફળ + નાના નળાકારનું ઘનફળ</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>V = &pi;R&sup2;H + &pi;r&sup2;h</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(બંનેમાંથી <b>&pi;</b> સામાન્ય કાઢતા ગણતરી સહેલી થશે)</i></span><br>
                                <b>= &pi; [ R&sup2;H + r&sup2;h ]</b><br><br>
                                
                                <b>= </b> 3.14 &times; [ (12)&sup2;(220) + (8)&sup2;(60) ]<br><br>

                                <b>= </b> 3.14 &times; [ (144 &times; 220) + (64 &times; 60) ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગુણાકાર કરતા: 144 &times; 22 = 3168 અને પાછળ મીંડું. 64 &times; 6 = 384 અને પાછળ મીંડું)</i></span><br>
                                <b>= </b> 3.14 &times; [ 31680 + 3840 ]<br><br>

                                <b>= </b> 3.14 &times; 35520<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગુણાકાર: 314 &times; 3552 = 1115328, અને 1 પોઈન્ટ કાપતા)</i></span><br>
                                <b>= <b style='color:#1d4ed8; font-size:20px;'>111532.8 સેમી&sup3;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: થાંભલાનું દળ (વજન) શોધવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>1 સેમી&sup3; લોખંડનું દળ = 8 ગ્રામ<br>
                            તેથી કુલ દળ = 111532.8 &times; 8 ગ્રામ</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>દળ = </b> 111532.8 &times; 8<br>
                                <b>= 892262.4 ગ્રામ</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ગ્રામ ને કિલોગ્રામ (kg) માં ફેરવવા 1000 વડે ભાગતા, એટલે કે 3 પોઈન્ટ ડાબી બાજુ ખસેડતા)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>892.26 કિગ્રા (kg)</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> લોખંડના થાંભલાનું કુલ દળ આશરે <b>892.26 કિગ્રા</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                 
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 7: 60 સેમી ત્રિજ્યાવાળા અર્ધગોલક પર સ્થિત 120 સેમી ઊંચાઈ અને 60 સેમી ત્રિજ્યાવાળા શંકુના નક્કર પદાર્થને પાણીથી સંપૂર્ણ ભરેલા એક લંબવૃત્તીય નળાકારમાં તેના તળિયાને સ્પર્શે તે રીતે સીધો મૂકવામાં આવે છે. જો નળાકારની ત્રિજ્યા 60 સેમી અને ઊંચાઈ 180 સેમી હોય, તો નળાકારમાં બાકી રહેલા પાણીનું ઘનફળ શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 4 માર્ક્સનો 3 આકારોના ઘનફળની બાદબાકી વાળો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:8px; margin-bottom:15px; display:inline-block; border-radius:4px;'>
                            <b style='color:#991b1b; font-size:14px;'>🔥 બોર્ડ પરીક્ષાની જાદુઈ ટ્રીક:</b><br>
                            જ્યારે આપણે પાણી ભરેલા નળાકારમાં કોઈ પદાર્થ નાખીએ, ત્યારે પદાર્થ જેટલી જગ્યા રોકે એટલું પાણી બહાર ઢોળાઈ જાય! (આર્કિમિડીઝનો નિયમ).<br>
                            <b>બાકી રહેલું પાણી = નળાકારનું ઘનફળ - (અંદર મૂકેલા પદાર્થનું ઘનફળ)</b><br>
                            અહીં <b>બધા જ આકારોની ત્રિજ્યા (r) 60 સેમી સમાન જ છે!</b> એટલે આપણે <b>&pi;r&sup2;</b> સામાન્ય કાઢીને ગણતરી બહુ જ નાની કરી દઈશું.
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
                                <rect x="90" y="40" width="120" height="180" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                                <ellipse cx="150" cy="220" rx="60" ry="15" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
                                <ellipse cx="150" cy="40" rx="60" ry="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>

                                <path d="M 90 160 A 60 60 0 0 0 210 160" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>
                                
                                <path d="M 90 160 L 150 40 L 210 160 Z" fill="#fef08a" stroke="#ea580c" stroke-width="2"/>

                                <line x1="150" y1="160" x2="210" y2="160" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
                                <text x="160" y="155" font-size="12" font-weight="bold">r=60</text>

                                <line x1="150" y1="40" x2="150" y2="160" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                                <text x="100" y="110" font-size="12" font-weight="bold" fill="#ea580c">h=120</text>

                                <line x1="230" y1="40" x2="230" y2="220" stroke="#0284c7" stroke-width="2"/>
                                <text x="240" y="135" font-size="14" font-weight="bold" fill="#0284c7">H=180</text>

                                <path d="M 90 40 Q 60 70 70 120" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,5"/>
                                <path d="M 210 40 Q 240 70 230 120" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="5,5"/>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            અહીં બધા આકારોની ત્રિજ્યા સમાન છે: <b>r = 60 સેમી</b>.<br>
                            • નળાકારની ઊંચાઈ <b>H = 180 સેમી</b><br>
                            • શંકુની ઊંચાઈ <b>h = 120 સેમી</b><br>
                            <span style='color:#0f172a; font-size:14px;'>(નોંધ: શંકુની ઊંચાઈ 120 + અર્ધગોલકની ત્રિજ્યા 60 = કુલ 180 સેમી થાય છે, જે બરાબર નળાકારની ઊંચાઈ જેટલી જ છે. એટલે પદાર્થ બરાબર ફિટ બેસે છે).</span>
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બાકી રહેલા પાણીનું ઘનફળ (માસ્ટર ઇક્વેશન)</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>બાકી પાણી = નળાકારનું ઘનફળ - [ શંકુનું ઘનફળ + અર્ધગોલકનું ઘનફળ ]</b><br><br>

                                <b>V = &pi;r&sup2;H - [ <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span> &pi;r&sup2;h + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span> &pi;r&sup3; ]</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(ત્રણેય પદોમાંથી <b>&pi;r&sup2;</b> સામાન્ય કાઢતા ગણતરી રમત બની જશે!)</i></span><br>
                                <b>V = &pi;r&sup2; [ H - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span>h - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span>r ]</b><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(હવે કિંમતો મૂકીએ: r=60, H=180, h=120)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 60 &times; 60 &times; [ 180 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>3</span></span>(120) - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>3</span></span>(60) ]<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(કૌંસની અંદર: 3 વડે 120 ને ભાગતા 40 આવે. અને 3 વડે 60 ને ભાગતા 20 આવે, જેનો 2 સાથે ગુણાકાર 40 થાય)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 3600 &times; [ 180 - 40 - 40 ]<br><br>

                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>7</span></span> &times; 3600 &times; [ 100 ]<br><br>

                                <b>= <b style='color:#1d4ed8;'><span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:2px solid #1d4ed8; display:block; padding:0 3px;'>7920000</span><span>7</span></span> સેમી&sup3;</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: ઘનફળને મીટર&sup3; (m&sup3;) માં ફેરવવું</b><br>
                            <span style='color:#0f172a; font-size:14px;'>જ્યારે જવાબ લાખોમાં આવે, ત્યારે તેને મીટરમાં ફેરવી દેવો સારો. <br>
                            1 મીટર = 100 સેમી. તેથી 1 મીટર&sup3; = 100 &times; 100 &times; 100 = 10,00,000 સેમી&sup3; (એટલે કે 6 મીંડા વડે ભાગવું પડે).</span>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>V = </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7920000</span><span>7 &times; 1000000</span></span> મીટર&sup3;<br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(4 મીંડા ઉડી જશે)</i></span><br>
                                <b>= </b> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>792</span><span>700</span></span> મીટર&sup3;<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(792 નો 7 વડે ભાગાકાર કરતા 113.14 આવે, અને છેદના 100 માટે 2 પોઈન્ટ કાપતા)</i></span><br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>1.131 મીટર&sup3; (આશરે)</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> નળાકારમાં બાકી રહેલા પાણીનું ઘનફળ આશરે <b style='color:#be123c;'>1.13 મીટર&sup3;</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
            
                { 
                    question: "🌟 સ્વા. 12.2 પ્રશ્ન 8: એક ગોળાકાર કાચના વાસણની ઉપરનો ભાગ નળાકાર છે. તે નળાકારની ઊંચાઈ 8 સેમી અને વ્યાસ 2 સેમી છે. ગોળાકાર ભાગનો વ્યાસ 8.5 સેમી છે. એક બાળક માહિતી પ્રાપ્ત કરે છે કે તેમાં ભરેલા પાણીનું ઘનફળ 345 સેમી&sup3; છે. બાળકનો જવાબ સાચો છે કે નહિ તે ચકાસો. (&pi; = 3.14 લો).", 
                    question_desc: "2024 બોર્ડ માટે 4 માર્ક્સનો દશાંશની ગણતરી વાળો ચેપ્ટરનો છેલ્લો માસ્ટર દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fffbeb; border:2px dashed #f59e0b; padding:10px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 વિચારવાનો તર્ક (Logic) - માસ્ટર ટ્રીક:</b><br>
                            આ વાસણ <b>"રાઉન્ડ બોટમ ફ્લાસ્ક (Round Bottom Flask)"</b> જેવું છે. <br>
                            કુલ ઘનફળ = નળાકારનું ઘનફળ + ગોલકનું ઘનફળ.<br>
                            <b>શોર્ટકટ ટ્રીક:</b> ગોલકનો વ્યાસ 8.5 સેમી છે. 8.5 ને પોઈન્ટમાં ગણવાને બદલે <b>17/2</b> લખીશું, અને ત્રિજ્યા <b>17/4</b> લખીશું! 17 નો ઘન (4913) યાદ હોય તો દાખલો ચપટીમાં ગણાઈ જશે!
                        </div>

                        <div style='overflow-x:auto; white-space:nowrap; text-align:center; margin-bottom:15px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px;'>
                            <svg width="260" height="280" viewBox="0 0 260 280" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="130" cy="180" r="70" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                <rect x="110" y="40" width="40" height="80" fill="#bae6fd" stroke="#1d4ed8" stroke-width="2"/>
                                
                                <line x1="112" y1="120" x2="148" y2="120" stroke="#bae6fd" stroke-width="4"/>
                                
                                <ellipse cx="130" cy="40" rx="20" ry="6" fill="#e0f2fe" stroke="#1d4ed8" stroke-width="2"/>

                                <circle cx="130" cy="180" r="4" fill="#0f172a"/>
                                <line x1="60" y1="180" x2="200" y2="180" stroke="#dc2626" stroke-width="2"/>
                                <text x="105" y="175" font-size="14" font-weight="bold" fill="#dc2626">D = 8.5</text>

                                <line x1="110" y1="20" x2="150" y2="20" stroke="#0f172a" stroke-width="1.5"/>
                                <polyline points="110,15 110,25" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <polyline points="150,15 150,25" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                                <text x="115" y="12" font-size="12" font-weight="bold">d = 2</text>

                                <line x1="170" y1="40" x2="170" y2="120" stroke="#ea580c" stroke-width="2"/>
                                <text x="180" y="85" font-size="14" font-weight="bold" fill="#ea580c">h = 8</text>
                            </svg>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:10px; margin-bottom:15px;'>
                            <b style='color:#14532d; font-size:16px;'>સ્ટેપ 1: માપ ગોઠવવા</b><br>
                            • <b>નળાકાર માટે:</b> ઊંચાઈ h = 8 સેમી, વ્યાસ = 2 સેમી અને <b>ત્રિજ્યા r = 1 સેમી</b>.<br>
                            • <b>ગોલક માટે:</b> વ્યાસ = 8.5 સેમી (એટલે કે 85/10 અથવા 17/2).<br>
                            &nbsp;&nbsp;&nbsp;તેથી <b>ત્રિજ્યા R = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 2px;'>17</span><span>4</span></span> સેમી</b> (અથવા 4.25 સેમી).
                        </div>

                        <div style='background-color:#eff6ff; border-left:4px solid #3b82f6; padding:10px; margin-bottom:15px;'>
                            <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: બંનેનું અલગ-અલગ ઘનફળ શોધવું</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px; margin-bottom:10px;'>
                                <b>(A) નળાકારનું ઘનફળ = &pi;r&sup2;h</b><br>
                                = 3.14 &times; (1)&sup2; &times; 8<br>
                                = 3.14 &times; 8<br>
                                <b>= <b style='color:#1d4ed8;'>25.12 સેમી&sup3;</b></b>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#e0f2fe; padding:15px; border-radius:5px;'>
                                <b>(B) ગોલકનું ઘનફળ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span> &pi;R&sup3;</b><br><br>
                                
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>3</span></span> &times; 3.14 &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>17</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>17</span><span>4</span></span> &times; <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>17</span><span>4</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(એક 4 ઉપર-નીચે ઉડી જશે. અને 17 નો ઘન 17 &times; 17 &times; 17 = 4913 થાય)</i></span><br>
                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>3.14 &times; 4913</span><span>3 &times; 4 &times; 4</span></span><br><br>

                                = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>15426.82</span><span>48</span></span><br><br>
                                
                                <span style='color:#047857; font-size:14px;'><i>(15426.82 નો 48 વડે ભાગાકાર કરતા)</i></span><br>
                                <b>= <b style='color:#ea580c;'>321.39 સેમી&sup3; (આશરે)</b></b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:10px;'>
                            <b style='color:#c2410c; font-size:16px;'>સ્ટેપ 3: કુલ ઘનફળ અને બાળકના જવાબની ચકાસણી</b><br>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:5px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b>કુલ ઘનફળ = </b> નળાકારનું ઘનફળ + ગોલકનું ઘનફળ<br>
                                = 25.12 + 321.39<br>
                                <b>= <b style='color:#dc2626; font-size:24px;'>346.51 સેમી&sup3;</b></b>
                            </div>
                            <div style='margin-top:10px; background-color:#dcfce7; padding:8px; border-radius:4px; border-left:4px solid #16a34a;'>
                                <b style='color:#15803d; font-size:16px;'>અંતિમ જવાબ:</b> આપણી ગણતરી મુજબ વાસણનું ઘનફળ <b style='color:#be123c;'>346.51 સેમી&sup3;</b> આવે છે.<br> 
                                પરંતુ બાળકે 345 સેમી&sup3; જવાબ શોધ્યો હતો. તેથી <b>બાળકનો જવાબ સાચો નથી (ખોટો છે).</b>
                            </div>
                        </div>
                    </div>
                    `
                }
            ]
        },
          
        // ------------------------------------
        // પ્રકરણ 13: આંકડાશાસ્ત્ર (સ્વાધ્યાય 13.1 - પ્રશ્ન 1 - ભાગ 1)
        // ------------------------------------
        "13": {
            "chapterName": "પ્રકરણ 13 (સ્વાધ્યાય 13.1 - પ્રશ્ન 1 - ભાગ 1)",
            "chapterTitle": "મધ્યકની માસ્ટર ટિપ્સ અને પ્રશ્ન 1 (સીધી રીત)",
            "qa_list": [
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: મધ્યક (Mean) શોધવા કઈ રીતનો ઉપયોગ કરવો?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 પરીક્ષા માટે ગોલ્ડન રૂલ:</b><br>
                            બોર્ડની પરીક્ષામાં તમને જે રીત સૌથી વધુ ફાવતી હોય તે કોઈ પણ <b>એક જ રીતથી</b> દાખલો ગણી શકો છો, ત્રણેય રીતથી જવાબ હંમેશા સરખો જ આવે! પણ કઈ રીત ક્યારે વાપરવી એ નીચે મુજબ નક્કી કરો:<br><br>
                            1. <b>સીધી રીત (Direct Method):</b> જ્યારે વર્ગ અને આવૃત્તિના આંકડા <b>સાવ નાના (0 થી 20 સુધીના)</b> હોય, ત્યારે આ રીત સૌથી બેસ્ટ છે.<br>
                            2. <b>ધારેલા મધ્યકની રીત (Assumed Mean Method):</b> જ્યારે આંકડા મધ્યમ કદના હોય, પણ પોઇન્ટ વાળા ન હોય ત્યારે વાપરી શકાય.<br>
                            3. <b>પદ-વિચલનની રીત (Step-Deviation Method):</b> જ્યારે આંકડા <b>ખૂબ મોટા (100, 500 કે 1000 વાળા)</b> હોય, ત્યારે હંમેશા આ જ રીત વાપરવી. તેનાથી મોટા ગુણાકાર સાવ નાના (1, 2, 3) બની જશે અને ભૂલ પડવાની શક્યતા 0% થઈ જશે!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 1 (સીધી રીત): વિદ્યાર્થીઓના એક સમૂહ દ્વારા 20 ઘરોમાં વનસ્પતિના છોડની સંખ્યા વિશેની માહિતી એકઠી કરી. ઘરદીઠ છોડની સંખ્યાનો મધ્યક શોધો.", 
                    question_desc: "બોર્ડ માટે 2 માર્ક્સનો સૌથી બેઝિક દાખલો. (નાના આંકડા હોવાથી સીધી રીત શ્રેષ્ઠ છે).",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> અહીં છોડની સંખ્યા અને ઘરોની સંખ્યા (f<sub>i</sub>) ના આંકડા બહુ જ નાના (1, 2, 3 જેવા) છે. તેથી આ દાખલામાં <b>"સીધી રીત"</b> નો ઉપયોગ કરવો સૌથી સહેલો પડશે. છતાં તમારી સમજ માટે આના પછીના ભાગમાં બીજી બંને રીતો પણ આપી છે.
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>છોડની સંખ્યા (વર્ગ)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ઘરોની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0 - 2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>1</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2 - 4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>6</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4 - 6</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>5</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6 - 8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>35</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8 - 10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>9</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>54</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10 - 12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>11</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>22</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>12 - 14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>13</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>39</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 20</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 162</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>162</span><span>20</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(162 ના અડધા 81 થાય, અને છેદના 10 માટે 1 પોઈન્ટ કાપતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 8.1 છોડ</b>
                            </div>
                        </div>
                    </div>
                    
                      
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 7</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0 - 2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1 - 7 = -6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-6</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2 - 4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3 - 7 = -4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4 - 6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5 - 7 = -2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-2</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6 - 8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>7 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>7 - 7 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8 - 10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9 - 7 = 2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>12</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10 - 12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11 - 7 = 4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12 - 14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>13</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>13 - 7 = 6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>18</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>20</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = 22</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -16, અને + વાળાનો 38. એટલે 38 - 16 = 22)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 7 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22</span><span>20</span></span><br><br>
                                x̄ = 7 + 1.1<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 8.1 છોડ</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 7</b> છે. અહી વર્ગલંબાઈ <b>h = 2</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0 - 2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-3</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2 - 4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-4</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4 - 6</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-1</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>6 - 8</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>7 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>8 - 10</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>6</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>9</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>6</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>10 - 12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>11</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>4</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>12 - 14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>13</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>9</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>20</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 11</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -8, અને + વાળાનો 19. એટલે 19 - 8 = 11)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 7 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>20</span></span> <span style='font-size:24px;'>)</span> &times; 2<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(2 વડે 20 ઉડાડતા નીચે 10 વધશે)</i></span><br>
                                x̄ = 7 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>11</span><span>10</span></span><br><br>
                                x̄ = 7 + 1.1<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 8.1 છોડ</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> તમે જોયું ને! ત્રણેય રીતથી જવાબ <b>8.1 છોડ</b> જ આવે છે!
                        </div>
                    </div>
                    `
                },
                 
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: આંકડા મોટા હોય ત્યારે કઈ રીત વાપરવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 પદ-વિચલનની રીત (Step-Deviation) એ આંકડાશાસ્ત્રનો રાજા છે!</b><br>
                            જ્યારે વર્ગના આંકડા <b>500 થી 600</b> જેવા મોટા હોય, ત્યારે સીધી રીતમાં <b>590 &times; 10</b> જેવા મોટા ગુણાકાર કરવા પડે છે, જેમાં સમય બગડે છે અને ભૂલ પડવાની શક્યતા 90% વધી જાય છે.<br><br>
                            આવા સમયે જો તમે <b>પદ-વિચલનની રીત</b> વાપરો, તો મોટા આંકડાઓ જાદુઈ રીતે <b>-2, -1, 0, 1, 2</b> માં ફેરવાઈ જાય છે! એટલે બોર્ડની પરીક્ષામાં આવા મોટા દાખલા માટે હંમેશા 'પદ-વિચલનની રીત' જ પસંદ કરવી. 
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 2 (સીધી રીત): એક ફેક્ટરીમાં 50 કારીગરોના દૈનિક વેતનના નીચે આપેલા આવૃત્તિ-વિતરણનો વિચાર કરો. યોગ્ય રીતનો ઉપયોગ કરીને કારીગરોના દૈનિક વેતનનો મધ્યક શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો મોટા આંકડા (Large Numbers) વાળો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ ચેતવણી:</b> નીચે 'સીધી રીત' ગણીને બતાવી છે, પણ તેમાં જુઓ કે ગુણાકાર કેટલા મોટા થઈ જાય છે! પરીક્ષામાં સમય બચાવવા આ રીતનો ઉપયોગ આવા દાખલામાં <b>ટાળવો</b>.
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>) શોધવા: (નીચલી હદ + ઉપલી હદ) / 2. ઉદાહરણ: (500 + 520) / 2 = 510.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>દૈનિક વેતન (₹ માં)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>કારીગરોની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>500 - 520</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>510</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>6120</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>520 - 540</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>530</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>7420</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>540 - 560</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>550</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>4400</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>560 - 580</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>570</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>3420</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>580 - 600</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>590</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>5900</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 50</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 27260</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>27260</span><span>50</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(મીંડું-મીંડું ઉડી જશે. 2726 નો 5 વડે ભાગાકાર કરતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = ₹ 545.20</b>
                            </div>
                        </div>
                    </div>
                    
           
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 550</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>500 - 520</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>510</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>510 - 550 = -40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-480</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>520 - 540</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>530</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>530 - 550 = -20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-280</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>540 - 560</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>550 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>550 - 550 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>560 - 580</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>570</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>570 - 550 = 20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>120</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>580 - 600</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>590</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>590 - 550 = 40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>400</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>50</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = -240</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -760, અને + વાળાનો 520. એટલે 520 - 760 = -240)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 550 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-240</span><span>50</span></span> <span style='font-size:24px;'>)</span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(મીંડું-મીંડું ઉડશે, -24 / 5 = -4.8)</i></span><br>
                                x̄ = 550 - 4.8<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = ₹ 545.20</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 બોર્ડની પરીક્ષા માટે આ સૌથી બેસ્ટ રીત છે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 550</b> છે. અહી વર્ગલંબાઈ <b>h = 20</b> છે. </span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>500 - 520</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>510</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-24</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>520 - 540</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>530</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-14</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>540 - 560</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>8</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>550 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>560 - 580</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>6</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>570</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>6</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>580 - 600</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>10</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>590</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>20</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>50</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -12</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -38, અને + વાળાનો 26. એટલે 26 - 38 = -12)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 550 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-12</span><span>50</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(20 નો 0 અને છેદના 50 નો 0 ઉડી જશે)</i></span><br>
                                x̄ = 550 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12 &times; 2</span><span>5</span></span><br><br>
                                x̄ = 550 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>24</span><span>5</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(24 / 5 = 4.8)</i></span><br>
                                x̄ = 550 - 4.8<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = ₹ 545.20</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> કારીગરોના દૈનિક વેતનનો મધ્યક <b>₹ 545.20</b> છે.
                        </div>
                    </div>
                    `
                },
                  
                {
                    question: "🎯 NJ Classes ની જાદુઈ ટ્રીક: ખૂટતી આવૃત્તિ 'f' વાળા દાખલામાં કઈ રીત વાપરવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 બોર્ડની પરીક્ષા માટેની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે પણ દાખલામાં <b>મધ્યક (Mean) પહેલેથી આપેલો હોય</b> અને ખૂટતી આવૃત્તિ 'f' શોધવાની હોય, ત્યારે <b>"ધારેલા મધ્યકની રીત"</b> અથવા <b>"પદ-વિચલનની રીત"</b> વાપરવી સૌથી બેસ્ટ છે!<br><br>
                            <b>જાદુ (Magic):</b> જે મધ્યક આપેલો હોય (જેમ કે અહી 18 આપેલો છે), તો મધ્યકિંમતમાં બરાબર <b>18 ને જ 'A' ધારી લેવો!</b><br>
                            આમ કરવાથી ડાબી બાજુ અને જમણી બાજુ 18 અને 18 ઉડીને <b>"0" (Zero)</b> થઈ જશે, અને ગણતરી માત્ર 2 જ લાઈનમાં પૂરી થઈ જશે!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 3 (સીધી રીત): નીચેની આવૃત્તિ-વિતરણ વસ્તીના બાળકોનું દૈનિક ખિસ્સાભથ્થું દર્શાવે છે. ખિસ્સાભથ્થાનો મધ્યક ₹ 18 છે, તો ખૂટતી આવૃત્તિ f શોધો.", 
                    question_desc: "2024, 2025 અને 2026 બોર્ડ માટે 3 માર્ક્સનો 100% પૂછાતો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ સજેશન:</b> નીચે 'સીધી રીત' આપી છે, જેમાં <b>20f</b> નો સરવાળો અલગથી કરવો પડે છે અને ક્રોસ ગુણાકાર મોટો થાય છે. પરીક્ષામાં આ રીતને બદલે આના પછીના ભાગમાં આપેલી 'પદ-વિચલન' ની રીતનો ઉપયોગ કરવો.
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>નોંધ: કુલ આવૃત્તિમાં 'f' નો સરવાળો અલગથી + f તરીકે દર્શાવવો.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>દૈનિક ખિસ્સાભથ્થું</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>બાળકોની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>11 - 13</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>84</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>13 - 15</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>84</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>15 - 17</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>9</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>16</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>144</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>17 - 19</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>13</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>18</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>234</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px; background-color:#fef08a;'>19 - 21</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; background-color:#fef08a; font-weight:bold; color:#dc2626;'>f</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>20</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; font-weight:bold; color:#dc2626;'>20f</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>21 - 23</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>22</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>110</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>23 - 25</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>24</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>96</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 44 + f</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 752 + 20f</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                અહી મધ્યક <b>x̄ = 18</b> પહેલેથી આપેલો છે.<br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                18 = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>752 + 20f</span><span>44 + f</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(છેદનો (44 + f) ડાબી બાજુ ગુણાકારમાં જશે)</i></span><br>
                                18 (44 + f) = 752 + 20f<br><br>
                                792 + 18f = 752 + 20f<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(સંખ્યા એક બાજુ અને 'f' વાળા પદ એક બાજુ ભેગા કરતા)</i></span><br>
                                792 - 752 = 20f - 18f<br><br>
                                40 = 2f<br><br>
                                f = 40 / 2<br><br>
                                <b style='color:#15803d; font-size:20px;'>f = 20</b>
                            </div>
                        </div>
                    </div>
                     
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>અહી મધ્યક 18 છે, તેથી આપણે મધ્યકિંમતમાં પણ <b>A = 18</b> જ ધારીશું!</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11 - 13</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>7</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12 - 18 = -6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-42</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>13 - 15</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14 - 18 = -4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-24</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>15 - 17</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>16</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>16 - 18 = -2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-18</td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>17 - 19</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>13</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; font-weight:bold; color:#b45309;'>18 (A)</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>18 - 18 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>19 - 21</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; font-weight:bold; color:#dc2626;'>f</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20 - 18 = 2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; font-weight:bold; color:#2563eb;'>2f</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>21 - 23</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>22</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>22 - 18 = 4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>20</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>23 - 25</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>24</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>24 - 18 = 6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>24</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>44 + f</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = 2f - 40</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -84, અને + વાળાનો 44 + 2f. એટલે 2f + 44 - 84 = 2f - 40)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી (મેજિક જુઓ):</b><br>
                                મધ્યક (x̄) = 18 અને A = 18<br><br>
                                x̄ = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                18 = 18 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2f - 40</span><span>44 + f</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(18 ડાબી બાજુ જાય એટલે 18 - 18 = 0 થઈ જશે!)</i></span><br>
                                0 = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2f - 40</span><span>44 + f</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(છેદ સામે 0 સાથે ગુણાઈને 0 થઈ જશે)</i></span><br>
                                0 = 2f - 40<br><br>
                                40 = 2f<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>f = 20</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>અહીં પણ <b>A = 18</b> જ લઈશું. વર્ગલંબાઈ <b>h = 2</b> છે. </span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>11 - 13</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>7</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-21</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>13 - 15</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>6</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-12</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>15 - 17</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>9</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>16</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-9</td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>17 - 19</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>13</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; font-weight:bold; color:#b45309;'>18 (A)</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>19 - 21</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; font-weight:bold; color:#dc2626;'>f</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>20</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; font-weight:bold; color:#2563eb;'>f</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>21 - 23</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>22</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>10</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>23 - 25</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>24</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>12</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>44 + f</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = f - 20</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -42, અને + વાળાનો 22 + f. એટલે f + 22 - 42 = f - 20)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                18 = 18 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f - 20</span><span>44 + f</span></span> <span style='font-size:24px;'>)</span> &times; 2<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(18 ડાબી બાજુ જાય એટલે 0 થઈ જશે)</i></span><br>
                                0 = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2(f - 20)</span><span>44 + f</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(છેદ સામે 0 સાથે ગુણાઈને 0 થઈ જશે, અને ગુણાકારનો 2 પણ 0 ના છેદમાં જઈને 0 થશે)</i></span><br>
                                0 = f - 20<br><br>
                                <b style='color:#c2410c; font-size:20px;'>f = 20</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> ખૂટતી આવૃત્તિ <b>f = 20</b> છે. (પરીક્ષામાં A = 18 વાળી ટ્રીક વાપરવી સૌથી બેસ્ટ છે!)
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 4 (સીધી રીત): એક હોસ્પિટલમાં ડૉક્ટરે 30 સ્ત્રીઓની શારીરિક તપાસ કરી અને પ્રતિ મિનિટ હૃદયના ધબકારાની નોંધ કરી. યોગ્ય રીત પસંદ કરીને આ સ્ત્રીઓના પ્રતિ મિનિટ હૃદયના ધબકારાનો મધ્યક શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો પોઈન્ટ (દશાંશ) વાળી મધ્યકિંમત ધરાવતો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ ચેતવણી:</b> આ દાખલામાં મધ્યકિંમત (x<sub>i</sub>) પોઈન્ટ (Decimals) માં આવે છે (જેમ કે 66.5). જો તમે 'સીધી રીત' વાપરશો તો પોઈન્ટ વાળા ગુણાકાર બહુ મોટા થઈ જશે અને ભૂલ પડશે! <b>પરીક્ષામાં આ દાખલા માટે પદ-વિચલનની રીત (નીચેના ભાગમાં આપેલી) જ વાપરવી.</b>
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): (65 + 68) / 2 = 133 / 2 = 66.5</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ધબકારા પ્રતિ મિનિટ</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>સ્ત્રીઓની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>65 - 68</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>66.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>133.0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>68 - 71</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>69.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>278.0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>71 - 74</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>72.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>217.5</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>74 - 77</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>75.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>604.0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>77 - 80</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>78.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>549.5</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>80 - 83</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>81.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>326.0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>83 - 86</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>84.5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>169.0</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 30</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 2277</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2277</span><span>30</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(2277 નો 3 વડે ભાગાકાર 759 થાય, અને છેદના 10 માટે 1 પોઈન્ટ કાપતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 75.9 ધબકારા</b>
                            </div>
                        </div>
                    </div>
                    
                             
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 75.5</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>65 - 68</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>66.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-18</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>68 - 71</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>69.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-24</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>71 - 74</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>72.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-9</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>74 - 77</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>75.5 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>77 - 80</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>7</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>78.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>21</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>80 - 83</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>81.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>24</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>83 - 86</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>84.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>18</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>30</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = 12</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -51, અને + વાળાનો 63. એટલે 63 - 51 = 12)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 75.5 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12</span><span>30</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(12 / 3 = 4, અને છેદના 10 માટે પોઇન્ટ કાપતા 0.4)</i></span><br>
                                x̄ = 75.5 + 0.4<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 75.9 ધબકારા</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 પોઈન્ટ વાળા દાખલામાં આ રીત વાપરવી સૌથી શ્રેષ્ઠ છે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 75.5</b> અને વર્ગલંબાઈ <b>h = 3</b> છે. (68 - 65 = 3)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>65 - 68</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>66.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-6</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>68 - 71</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>69.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>71 - 74</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>72.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-3</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>74 - 77</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>8</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>75.5 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>77 - 80</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>7</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>78.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>7</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>80 - 83</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>81.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>83 - 86</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>84.5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>6</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>30</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 4</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -17, અને + વાળાનો 21. એટલે 21 - 17 = 4)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 75.5 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>30</span></span> <span style='font-size:24px;'>)</span> &times; 3<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(3 વડે 30 ઉડાડતા નીચે 10 વધશે)</i></span><br>
                                x̄ = 75.5 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>10</span></span><br><br>
                                x̄ = 75.5 + 0.4<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 75.9 ધબકારા</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> સ્ત્રીઓના પ્રતિ મિનિટ હૃદયના ધબકારાનો મધ્યક <b>75.9</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                {
                    question: "🎯 NJ Classes ની જાદુઈ ટ્રીક: અસતત વર્ગો (જેમ કે 50-52, 53-55) હોય ત્યારે વર્ગલંબાઈ (h) કઈ રીતે શોધવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 બોર્ડની પરીક્ષા માટેની માસ્ટર ટ્રીક:</b><br>
                            જ્યારે વર્ગો સળંગ ન હોય (દા.ત. 50-52 પૂરું થાય અને નવો વર્ગ 53 થી શરૂ થાય), ત્યારે <b>h</b> શોધવા માટે 52 - 50 = 2 <b>કરવું નહિ!</b> તે ખોટું પડશે.<br><br>
                            <b>શોર્ટકટ ટ્રીક:</b> <br>
                            બીજા વર્ગની અધઃસીમા માંથી પહેલા વર્ગની અધઃસીમા બાદ કરવી!<br>
                            એટલે કે <b>બીજો વર્ગ (53) - પહેલો વર્ગ (50) = 3</b>.<br>
                            આમ, અહીં વર્ગલંબાઈ <b>h = 3</b> લેવાની છે. બસ આટલું યાદ રાખશો એટલે દાખલો ક્યારેય ખોટો નહિ પડે! 
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 5 (સીધી રીત): એક છૂટક વેચાણ બજારમાં, ફળ વેચનારાઓ બંધ ખોખાઓમાં કેરીઓ વેચી રહ્યા હતા. આ ખોખાઓમાં કેરીઓની સંખ્યા જુદી-જુદી હતી. આવૃત્તિ-વિતરણ નીચે મુજબ હતું. બંધ ખોખામાં મૂકેલ કેરીઓની સંખ્યાનો મધ્યક શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો અસતત વર્ગ (Discontinuous Class) વાળો મોસ્ટ IMP દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ ચેતવણી:</b> આ દાખલામાં આવૃત્તિઓ (110, 135, 115) ખૂબ મોટી છે. જો તમે 'સીધી રીત' વાપરશો તો ગુણાકાર 7000-8000 માં જશે. <b>પરીક્ષામાં આ દાખલા માટે પદ-વિચલનની રીત (નીચેના ભાગમાં આપેલી) જ વાપરવી.</b>
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): (50 + 52) / 2 = 102 / 2 = 51.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>કેરીઓની સંખ્યા</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ખોખાઓની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>50 - 52</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>15</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>51</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>765</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>53 - 55</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>110</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>54</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>5940</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>56 - 58</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>135</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>57</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>7695</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>59 - 61</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>115</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>60</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>6900</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>62 - 64</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>25</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>63</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>1575</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 400</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 22875</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>22875</span><span>400</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(પહેલા 4 વડે ભાગાકાર કરતા 5718.75 આવે, અને છેદના 100 માટે પોઈન્ટ કાપતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 57.1875 &approx; 57.19 કેરીઓ</b>
                            </div>
                        </div>
                    </div>
                    

                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 57</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>50 - 52</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>15</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>51</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>51 - 57 = -6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-90</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>53 - 55</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>110</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>54</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>54 - 57 = -3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-330</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>56 - 58</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>135</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>57 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>57 - 57 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>59 - 61</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>115</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>60</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>60 - 57 = 3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>345</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>62 - 64</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>25</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>63</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>63 - 57 = 6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>150</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>400</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = 75</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -420, અને + વાળાનો 495. એટલે 495 - 420 = 75)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 57 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>75</span><span>400</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(75 ભાગ્યા 4 = 18.75, અને છેદના 100 માટે 2 પોઇન્ટ કાપતા 0.1875)</i></span><br>
                                x̄ = 57 + 0.1875<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 57.19 (આશરે)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 135 અને 115 જેવા મોટા આંકડા હોય ત્યારે આ રીત 100% ભૂલ વગર સાચો જવાબ આપશે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 57</b>. અહીં શોર્ટકટ ટ્રીક મુજબ: <b>h = 53 - 50 = 3</b> થશે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>50 - 52</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>15</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>51</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-30</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>53 - 55</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>110</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>54</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-110</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>56 - 58</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>135</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>57 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>59 - 61</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>115</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>60</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>115</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>62 - 64</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>25</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>63</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>50</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>400</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 25</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -140, અને + વાળાનો 165. એટલે 165 - 140 = 25)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 57 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>25</span><span>400</span></span> <span style='font-size:24px;'>)</span> &times; 3<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(25 નો 3 સાથે ગુણાકાર 75 થાય)</i></span><br>
                                x̄ = 57 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>75</span><span>400</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(75 / 4 = 18.75, અને છેદના 100 માટે 2 પોઈન્ટ કાપતા)</i></span><br>
                                x̄ = 57 + 0.1875<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 57.19 કેરીઓ (આશરે)</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> ખોખામાં મૂકેલ કેરીઓની સંખ્યાનો મધ્યક <b>57.19</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 6 (સીધી રીત): નીચેનું કોષ્ટક એક વિસ્તારના 25 પરિવારોના ખોરાકનો દૈનિક ઘરગથ્થુ ખર્ચ દર્શાવે છે. યોગ્ય રીતનો ઉપયોગ કરીને પરિવારના ખોરાકના દૈનિક ઘરગથ્થુ ખર્ચનો મધ્યક શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 3 માર્ક્સનો રોજિંદા ખર્ચ વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ ચેતવણી:</b> આ દાખલામાં મધ્યકિંમત (x<sub>i</sub>) 100 થી 300 ની વચ્ચે છે. જો તમે 'સીધી રીત' વાપરશો તો 225 &times; 12 જેવા મોટા ગુણાકાર કરવા પડશે. <b>પરીક્ષામાં સમય બચાવવા આ દાખલા માટે પદ-વિચલનની રીત (નીચેના ભાગમાં આપેલી) જ વાપરવી.</b>
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): (100 + 150) / 2 = 250 / 2 = 125.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>દૈનિક ખર્ચ (₹ માં)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>પરિવારોની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>100 - 150</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>125</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>500</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>150 - 200</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>175</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>875</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>200 - 250</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>225</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>2700</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>250 - 300</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>275</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>550</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>300 - 350</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>325</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>650</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 25</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 5275</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5275</span><span>25</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(5275 નો 25 વડે ભાગાકાર કરતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = ₹ 211</b>
                            </div>
                        </div>
                    </div>
                    
                                
                 
                    
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 225</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>100 - 150</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>125</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>125 - 225 = -100</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-400</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>150 - 200</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>175</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>175 - 225 = -50</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-250</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>200 - 250</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>225 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>225 - 225 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>250 - 300</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>275</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>275 - 225 = 50</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>100</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>300 - 350</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>325</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>325 - 225 = 100</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>200</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>25</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = -350</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -650, અને + વાળાનો 300. એટલે 300 - 650 = -350)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 225 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-350</span><span>25</span></span> <span style='font-size:24px;'>)</span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(350 / 25 = 14)</i></span><br>
                                x̄ = 225 - 14<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = ₹ 211</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 225 જેવા મોટા આંકડા હોય ત્યારે આ રીત 100% ભૂલ વગર સાચો જવાબ આપશે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 225</b>. અહીં વર્ગલંબાઈ <b>h = 50</b> છે. (150 - 100 = 50)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>100 - 150</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>125</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-8</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>150 - 200</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>175</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-5</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>200 - 250</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>225 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>250 - 300</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>275</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>2</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>300 - 350</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>325</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>4</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>25</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -7</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -13, અને + વાળાનો 6. એટલે 6 - 13 = -7)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 225 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-7</span><span>25</span></span> <span style='font-size:24px;'>)</span> &times; 50<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(25 ના ઘડિયાથી 50 સીધા જ ઉડી જશે: 25 &times; 2 = 50)</i></span><br>
                                x̄ = 225 + (-7 &times; 2)<br><br>
                                x̄ = 225 - 14<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = ₹ 211</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> ખોરાકના દૈનિક ઘરગથ્થુ ખર્ચનો મધ્યક <b>₹ 211</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 7 (સીધી રીત): એક ચોક્કસ શહેરમાં 30 વિસ્તારોમાં હવામાં SO₂ (સલ્ફર ડાયોક્સાઈડ) ની સાંદ્રતા (ppm માં) શોધવા માટે નીચે દર્શાવેલ માહિતી એકત્રિત કરવામાં આવી હતી. હવામાં SO₂ ની સાંદ્રતાનો મધ્યક શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 3 માર્ક્સનો પોઈન્ટ (દશાંશ) વાળી ગણતરીનો સૌથી અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fee2e2; border-left:4px solid #b91c1c; padding:10px; margin-bottom:15px;'>
                            <b style='color:#991b1b;'>⚠️ NJ ચેતવણી અને ટિપ્સ:</b> આ દાખલામાં વર્ગ અને મધ્યકિંમત <b>પોઈન્ટ (Decimals)</b> માં છે (જેમ કે 0.02, 0.06). જો તમે 'સીધી રીત' વાપરશો તો પોઈન્ટ વાળા ગુણાકારમાં ભૂલ થવાની શક્યતા રહેશે. <b>આ દાખલામાં પદ-વિચલનની રીત (નીચેના ભાગમાં આપેલી છે તે) વાપરવી સૌથી બેસ્ટ છે, કારણ કે તેમાં પોઈન્ટ જાદુઈ રીતે ગાયબ થઈ જશે!</b>
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): (0.00 + 0.04) / 2 = 0.02</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>SO₂ ની સાંદ્રતા (ppm માં)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.00 - 0.04</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.02</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.08</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.04 - 0.08</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>9</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.06</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.54</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.08 - 0.12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>9</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.90</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.12 - 0.16</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.28</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.16 - 0.20</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.18</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.72</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.20 - 0.24</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0.22</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>0.44</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 30</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 2.96</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2.96</span><span>30</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(2.96 નો 3 વડે ભાગાકાર કરતા 0.9866 આવે, અને છેદના 10 માટે 1 પોઈન્ટ વધુ કાપતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 0.0986... &approx; 0.099 ppm</b>
                            </div>
                        </div>
                    </div>
                    
                                
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 0.10</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.00 - 0.04</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.02</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-0.08</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-0.32</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.04 - 0.08</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.06</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-0.04</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-0.36</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.08 - 0.12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>0.10 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.12 - 0.16</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.04</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>0.08</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.16 - 0.20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.18</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.08</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>0.32</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.20 - 0.24</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.22</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0.12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>0.24</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>30</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = -0.04</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -0.68, અને + વાળાનો 0.64. એટલે 0.64 - 0.68 = -0.04)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 0.10 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-0.04</span><span>30</span></span> <span style='font-size:24px;'>)</span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(0.04 / 30 = 0.00133...)</i></span><br>
                                x̄ = 0.10 - 0.00133<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 0.0986... &approx; 0.099 ppm</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 પોઈન્ટ વાળા દાખલામાં પદ-વિચલનની રીત વાપરતા u<sub>i</sub> માંથી પોઈન્ટ ગાયબ થઈ જશે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 0.10</b>. અહીં વર્ગલંબાઈ <b>h = 0.04</b> છે. (0.04 - 0.00 = 0.04)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.00 - 0.04</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.02</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-8</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.04 - 0.08</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>9</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.06</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-9</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.08 - 0.12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>9</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>0.10 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.12 - 0.16</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>2</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.16 - 0.20</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.18</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>8</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.20 - 0.24</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0.22</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>6</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>30</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -1</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -17, અને + વાળાનો 16. એટલે 16 - 17 = -1)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 0.10 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-1</span><span>30</span></span> <span style='font-size:24px;'>)</span> &times; 0.04<br><br>
                                x̄ = 0.10 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>0.04</span><span>30</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(0.04 નો 30 વડે ભાગાકાર 0.00133... થાય)</i></span><br>
                                x̄ = 0.10 - 0.00133<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 0.0986... &approx; 0.099 ppm</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> હવામાં SO₂ ની સાંદ્રતાનો મધ્યક આશરે <b>0.099 ppm</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: અસમાન વર્ગલંબાઈ (વર્ગો વચ્ચે અલગ-અલગ ગેપ) હોય ત્યારે કઈ રીત વાપરવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 બોર્ડની પરીક્ષા માટેનો ગોલ્ડન રૂલ:</b><br>
                            આ દાખલામાં જુઓ: 0-6 (ગેપ 6), 6-10 (ગેપ 4), 28-38 (ગેપ 10)... એટલે કે <b>વર્ગલંબાઈ (h) સરખી નથી!</b><br><br>
                            જ્યારે વર્ગલંબાઈ સરખી ન હોય ત્યારે <b>પદ-વિચલનની રીત (Step-Deviation) નો ઉપયોગ કરવાનું ટાળવું જોઈએ!</b> કારણ કે પદ-વિચલન માટે આપણે એક સમાન 'h' વડે ભાગાકાર કરવો પડે છે, જે અહીં મળતો નથી.<br>
                            <b>આવા દાખલા માટે હંમેશા 'ધારેલા મધ્યકની રીત (Assumed Mean Method)' અથવા 'સીધી રીત' નો જ ઉપયોગ કરવો!</b> (છતાં જો પદ-વિચલન વાપરવી જ હોય, તો h = 1 લેવો પડે, જેની ગણતરી આગળ બતાવી છે).
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 8 (સીધી રીત): એક વર્ગશિક્ષકે પોતાના વર્ગના 40 વિદ્યાર્થીઓની આ સત્રની ગેરહાજરીની નોંધ રાખી છે. વિદ્યાર્થીઓની ગેરહાજર દિવસોની સંખ્યાનો મધ્યક શોધો.", 
                    question_desc: "2026 બોર્ડ માટે 3 માર્ક્સનો અસમાન વર્ગલંબાઈ (Unequal Class Size) વાળો સૌથી અલગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> આ દાખલામાં વર્ગલંબાઈ અસમાન છે, પરંતુ આંકડાઓ બહુ મોટા નથી. તેથી <b>'સીધી રીત'</b> અથવા <b>'ધારેલા મધ્યકની રીત'</b> વાપરવી સૌથી બેસ્ટ રહેશે.
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): દરેક વર્ગનો સરવાળો કરી અડધા કરવા. દા.ત. (0+6)/2 = 3, (6+10)/2 = 8.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ગેરહાજર દિવસો</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>વિદ્યાર્થીઓની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0 - 6</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>11</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>33</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6 - 10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>80</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10 - 14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>12</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>84</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>14 - 20</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>17</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>68</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>20 - 28</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>24</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>96</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>28 - 38</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>33</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>99</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>38 - 40</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>39</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>39</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 40</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 499</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>499</span><span>40</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(499 નો 4 વડે ભાગાકાર કરતા 124.75 આવે, અને છેદના 10 માટે 1 પોઈન્ટ કાપતા)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 12.475 &approx; 12.48 દિવસ</b>
                            </div>
                        </div>
                    </div>
                    
                                
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 અસમાન વર્ગલંબાઈ હોય ત્યારે આ રીત વાપરવી સૌથી શ્રેષ્ઠ છે!
                            </div>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 17</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0 - 6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3 - 17 = -14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-154</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6 - 10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8 - 17 = -9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-90</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10 - 14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>7</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>12 - 17 = -5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-35</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14 - 20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>17 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>17 - 17 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20 - 28</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>24</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>24 - 17 = 7</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>28</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>28 - 38</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>33</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>33 - 17 = 16</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>48</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>38 - 40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>39</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>39 - 17 = 22</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>22</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>40</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = -181</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -279, અને + વાળાનો 98. એટલે 98 - 279 = -181)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 17 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-181</span><span>40</span></span> <span style='font-size:24px;'>)</span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(181 / 4 = 45.25, અને છેદના 10 માટે 1 પોઈન્ટ કાપતા 4.525)</i></span><br>
                                x̄ = 17 - 4.525<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 12.475 &approx; 12.48 દિવસ</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef2f2; border:2px dashed #ef4444; padding:10px; border-radius:4px; margin-bottom:10px;'>
                                <b style='color:#b91c1c;'>🛑 અગત્યની નોંધ (NJ Classes):</b><br>
                                આ દાખલામાં વર્ગલંબાઈ સરખી નથી. d<sub>i</sub> ની કિંમતો (-14, -9, -5, 0, 7, 16, 22) જુઓ, તે કોઈ <b>એક જ ઘડિયામાં</b> આવતી નથી. <br>
                                તેથી પદ-વિચલન માટે આપણે કોઈ 'h' ધારી શકીએ નહિ. જો ફરજિયાત ગણવો જ હોય, તો <b>h = 1 લેવો પડે!</b> <br>
                                અને જો તમે h = 1 લો છો, તો u<sub>i</sub> ની લાઈન બરાબર d<sub>i</sub> જેવી જ બનશે. એટલે કે <b>આ રીત બરાબર "ધારેલા મધ્યક" જેવી જ બની જશે!</b>
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 17</b>. અહી કોઈ સામાન્ય અવયવ ન હોવાથી <b>h = 1</b> લઈશું.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/1</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0 - 6</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>11</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-154</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>6 - 10</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>10</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>8</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-9</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-90</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>10 - 14</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>7</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>12</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-5</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-35</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>14 - 20</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>17 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>20 - 28</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>4</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>24</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>7</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>28</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>28 - 38</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>33</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>16</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>48</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>38 - 40</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>39</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>22</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>22</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>40</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -181</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 17 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-181</span><span>40</span></span> <span style='font-size:24px;'>)</span> &times; 1<br><br>
                                x̄ = 17 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>181</span><span>40</span></span><br><br>
                                x̄ = 17 - 4.525<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 12.475 &approx; 12.48 દિવસ</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> વિદ્યાર્થીઓની ગેરહાજરીનો મધ્યક <b>12.48 દિવસ</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.1 પ્રશ્ન 9 (સીધી રીત): નીચેનું કોષ્ટક 35 શહેરોનો સાક્ષરતા દર (ટકામાં) આપે છે. સાક્ષરતા દરનો મધ્યક શોધો.", 
                    question_desc: "2025 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો ટકાવારી (%) વાળો અગત્યનો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> આ દાખલામાં મધ્યકિંમત (x<sub>i</sub>) 50, 60, 70 એવી શૂન્યવાળી આવે છે, એટલે 'સીધી રીત' થી પણ ગુણાકાર સહેલા જ પડશે. છતાં પણ <b>પદ-વિચલનની રીત વાપરવાથી ગણતરી માત્ર 1, 2, 3 માં જ પતી જશે!</b> (જે નીચેના ભાગમાં આપી છે).
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>રીત 1: સીધી રીત (Direct Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>મધ્યકિંમત (x<sub>i</sub>): (45 + 55) / 2 = 100 / 2 = 50.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>સાક્ષરતા દર (%)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>શહેરોની સંખ્યા (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>f<sub>i</sub>x<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>45 - 55</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>50</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>150</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>55 - 65</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>60</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>600</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>65 - 75</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>11</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>70</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>770</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>75 - 85</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>80</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>640</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>85 - 95</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>90</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626;'>270</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ (Total)</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#1d4ed8;'>&Sigma;f<sub>i</sub> = 35</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>x<sub>i</sub> = 2430</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>x<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2430</span><span>35</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(5 વડે ભાગાકાર કરતા ઉપર 486 અને નીચે 7 વધશે: 486 / 7)</i></span><br>
                                <b style='color:#15803d; font-size:20px;'>x̄ = 69.428... &approx; 69.43 %</b>
                            </div>
                        </div>
                    </div>
                    
                                
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>રીત 2: ધારેલા મધ્યકની રીત (Assumed Mean Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 70</b> છે. (વચ્ચેની મધ્યકિંમત)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>d<sub>i</sub> = x<sub>i</sub> - A</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>d<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>45 - 55</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>50</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>50 - 70 = -20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-60</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>55 - 65</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>60</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>60 - 70 = -10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-100</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>65 - 75</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>70 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>70 - 70 = 0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>75 - 85</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>80</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>80 - 70 = 10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>80</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>85 - 95</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>90</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>90 - 70 = 20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>60</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>35</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>d<sub>i</sub> = -20</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -160, અને + વાળાનો 140. એટલે 140 - 160 = -20)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>d<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span><br><br>
                                x̄ = 70 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-20</span><span>35</span></span> <span style='font-size:24px;'>)</span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(5 વડે ભાગતા 4/7 આવશે)</i></span><br>
                                x̄ = 70 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>7</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(4 / 7 = 0.57)</i></span><br>
                                x̄ = 70 - 0.57<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 69.43 %</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <div style='background-color:#fef08a; padding:5px; border-radius:4px; margin-bottom:10px; font-weight:bold; color:#b45309;'>
                                👑 બોર્ડની પરીક્ષામાં ઝડપથી ગણવા માટે આ રીત સૌથી બેસ્ટ છે!
                            </div>
                            <b style='color:#c2410c; font-size:18px;'>રીત 3: પદ-વિચલનની રીત (Step-Deviation Method)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે <b>A = 70</b>. અહીં વર્ગલંબાઈ <b>h = 10</b> છે. (55 - 45 = 10)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#ffedd5; color:#9a3412; font-weight:bold;'>
                                        <th style='border:1px solid #f97316; padding:8px;'>વર્ગ</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>x<sub>i</sub></th>
                                        <th style='border:1px solid #f97316; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/h</th>
                                        <th style='border:1px solid #f97316; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>45 - 55</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>50</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-6</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>55 - 65</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>10</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>60</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>-1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#dc2626;'>-10</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>65 - 75</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>11</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; background-color:#fef08a; border-radius:4px;'><b>70 (A)</b></td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>0</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>75 - 85</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>8</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>80</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>1</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>85 - 95</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>3</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>90</td>
                                        <td style='border:1px solid #fed7aa; padding:6px;'>2</td>
                                        <td style='border:1px solid #fed7aa; padding:6px; color:#2563eb;'>6</td>
                                    </tr>
                                    <tr style='background-color:#ffedd5; font-weight:bold;'>
                                        <td style='border:1px solid #f97316; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>35</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px;'>-</td>
                                        <td style='border:1px solid #f97316; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -2</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -16, અને + વાળાનો 14. એટલે 14 - 16 = -2)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 70 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-2</span><span>35</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(5 વડે 10 ને ઉડાડતા 2 અને નીચે 35 ને ઉડાડતા 7 આવે. અંશમાં 2 &times; 2 = 4 થશે)</i></span><br>
                                x̄ = 70 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>4</span><span>7</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(4 / 7 = 0.57)</i></span><br>
                                x̄ = 70 - 0.57<br><br>
                                <b style='color:#c2410c; font-size:20px;'>x̄ = 69.43 %</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> 35 શહેરોનો સાક્ષરતા દરનો મધ્યક <b>69.43%</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: બહુલક (Mode) ના દાખલામાં કિંમતો કઈ રીતે શોધવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 બહુલક શોધવાના 4 જાદુઈ સ્ટેપ્સ (ગોખવાની જરૂર નથી!):</b><br><br>
                            <b>સ્ટેપ 1:</b> નીચેની લાઈન (આવૃત્તિ) માં સૌથી મોટો આંકડો શોધો. તે તમારો <b>"રાજા" (f₁)</b> છે!<br>
                            <b>સ્ટેપ 2:</b> 1 ની પહેલા 0 આવે, એટલે રાજાની આગળનો આંકડો <b>f₀</b> બને.<br>
                            <b>સ્ટેપ 3:</b> 1 ની પછી 2 આવે, એટલે રાજાની પાછળનો આંકડો <b>f₂</b> બને.<br>
                            <b>સ્ટેપ 4:</b> રાજા (f₁) ની બરાબર ઉપર જે વર્ગ આપ્યો હોય, તેને <b>"બહુલક વર્ગ"</b> કહેવાય. તેની પહેલી સંખ્યા (અધઃસીમા) એટલે આપણો <b>'l'</b>.<br>
                            <span style='color:#0f172a; font-size:14px;'>(યાદ રાખો: આમાં કોઈ નવું ટેબલ બનાવવાનું હોતું નથી!)</span>
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 1 : નીચેનું કોષ્ટક એક વર્ષ દરમિયાન એક દવાખાનામાં દાખલ થયેલા દર્દીઓની ઉંમર દર્શાવે છે. ઉપર આપેલી માહિતી માટે બહુલક શોધો.", 
                    question_desc: "2024 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો બહુલક શોધવાનો સૌથી બેઝિક દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ઉંમર (વર્ષમાં)</th>
                                        <td style='border:1px solid #22c55e; padding:8px;'>5 - 15</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>15 - 25</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>25 - 35</td>
                                        <td style='border:1px solid #22c55e; padding:8px; background-color:#fef08a; border:2px solid #ea580c;'><b>35 - 45</b><br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>45 - 55</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>55 - 65</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <th style='border:1px solid #bbf7d0; padding:8px; color:#14532d;'>દર્દીઓની સંખ્યા</th>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>6</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>11</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#2563eb;'>21<br><b>(f₀)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; background-color:#fef08a; border:2px solid #ea580c; color:#dc2626; font-size:18px;'><b>23<br>(f₁)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#16a34a;'>14<br><b>(f₂)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>5</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>23</b> છે, તેથી <b>f₁ = 23</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 21</b> અને પાછળની આવૃત્તિ <b>f₂ = 14</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 23 ની ઉપરનો વર્ગ <b>35 - 45</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 35</b> થશે.</li>
                                    <li>વર્ગલંબાઈ (h) = 45 - 35 = <b>10</b>.</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 35 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>23 - 21</span><span>2(23) - 21 - 14</span></span> <span style='font-size:28px;'>)</span> &times; 10<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 23 - 21 = 2. છેદ: 2(23) = 46. અને -21 - 14 નો સરવાળો -35 થાય)</i></span><br>
                                Z = 35 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>46 - 35</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>

                                Z = 35 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>2</span><span>11</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>

                                Z = 35 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>20</span><span>11</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(20 નો 11 વડે ભાગાકાર કરતા 1.8181... આવશે)</i></span><br>
                                Z = 35 + 1.82<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 36.82 વર્ષ</b>
                            </div>
                        </div>
                    </div>
                    
                                
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન (મધ્યક માટે કઈ રીત?):</b><br>
                            અહીં ઉંમરના વર્ગની મધ્યકિંમત (x<sub>i</sub>) અનુક્રમે 10, 20, 30, 40... એમ શૂન્યવાળી આવે છે. તમે 'સીધી રીત' વાપરો તો પણ સહેલું પડે, પરંતુ જો <b>'પદ-વિચલનની રીત (Step-Deviation)'</b> વાપરશો તો u<sub>i</sub> સાવ નાના (1, 2, 3) થઈ જશે અને ગણતરી મોઢે થઈ જશે! એટલે આપણે પદ-વિચલનની રીત વાપરીશું.
                        </div>

                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>મધ્યકની ગણતરી (પદ-વિચલનની રીત)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 30</b> અને વર્ગલંબાઈ <b>h = 10</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>ઉંમર (વર્ગ)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>દર્દીઓ (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/10</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5 - 15</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>6</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-12</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>15 - 25</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>11</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-11</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>25 - 35</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>21</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>30 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>35 - 45</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>23</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>23</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>45 - 55</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>50</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>28</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>55 - 65</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>60</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>15</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>80</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 43</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -23, અને + વાળાનો 66. એટલે 66 - 23 = 43)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 30 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>43</span><span>80</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(10 અને 80 નો શૂન્ય ઉડી જશે)</i></span><br>
                                x̄ = 30 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>43</span><span>8</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(43 નો 8 વડે ભાગાકાર કરતા 5.375 આવે)</i></span><br>
                                x̄ = 30 + 5.375<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 35.375 &approx; 35.38 વર્ષ</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdfa; border-left:4px solid #0891b2; padding:10px;'>
                            <b style='color:#155e75; font-size:18px;'>બંને માપની સરખામણી (Comparison):</b><br>
                            <ul style='margin-bottom:0; color:#0f172a;'>
                                <li><b>બહુલક (36.82 વર્ષ):</b> તેનો અર્થ એ છે કે હોસ્પિટલમાં દાખલ થયેલા <b>મહત્તમ (સૌથી વધુ)</b> દર્દીઓની ઉંમર 36.82 વર્ષ છે.</li>
                                <li><b>મધ્યક (35.38 વર્ષ):</b> તેનો અર્થ એ છે કે હોસ્પિટલમાં દાખલ થયેલા બધા જ દર્દીઓની <b>સરેરાશ (Average)</b> ઉંમર 35.38 વર્ષ છે.</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 2: નીચે આપેલી માહિતી 225 વીજઉપકરણોના આયુષ્યની (કલાકોમાં) પ્રાપ્ત માહિતી દર્શાવે છે. ઉપકરણોના આયુષ્યનો બહુલક શોધો.", 
                    question_desc: "2025 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો માત્ર બહુલક શોધવાનો સહેલો અને સ્કોરિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> બહુલકના દાખલામાં આપણે કોઈ નવું કોષ્ટક બનાવવાનું નથી. સીધું જ રકમવાળા કોષ્ટકમાંથી સૌથી મોટો આંકડો (રાજા - f₁) શોધવાનો છે!
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>આયુષ્ય (કલાકોમાં)</th>
                                        <td style='border:1px solid #22c55e; padding:8px;'>0 - 20</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>20 - 40</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>40 - 60</td>
                                        <td style='border:1px solid #22c55e; padding:8px; background-color:#fef08a; border:2px solid #ea580c;'><b>60 - 80</b><br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>80 - 100</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>100 - 120</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <th style='border:1px solid #bbf7d0; padding:8px; color:#14532d;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>10</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>35</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#2563eb;'>52<br><b>(f₀)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; background-color:#fef08a; border:2px solid #ea580c; color:#dc2626; font-size:18px;'><b>61<br>(f₁)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#16a34a;'>38<br><b>(f₂)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>29</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>61</b> છે, તેથી <b>f₁ = 61</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 52</b> અને પાછળની આવૃત્તિ <b>f₂ = 38</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 61 ની બરાબર ઉપરનો વર્ગ <b>60 - 80</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 60</b> થશે.</li>
                                    <li>વર્ગલંબાઈ <b>h = 20</b> છે. (80 - 60 = 20)</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 60 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>61 - 52</span><span>2(61) - 52 - 38</span></span> <span style='font-size:28px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 61 - 52 = 9. છેદ: 2(61) = 122. અને -52 - 38 નો સરવાળો -90 થાય)</i></span><br>
                                Z = 60 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>122 - 90</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>

                                Z = 60 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9</span><span>32</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(20 અને 32 ને 4 વડે ઉડાડતા: ઉપર 5 અને નીચે 8 વધશે)</i></span><br>
                                Z = 60 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>9 &times; <b style='color:#dc2626;'>5</b></span><span><b style='color:#dc2626;'>8</b></span></span><br><br>

                                Z = 60 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>45</span><span>8</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(45 નો 8 વડે ભાગાકાર 5.625 થશે)</i></span><br>
                                Z = 60 + 5.625<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 65.625 કલાક</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> વીજઉપકરણોના આયુષ્યનો બહુલક <b>65.625 કલાક</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 3  નીચેની માહિતી એક ગામના 200 કુટુંબો માટે તેમના ઘર ચલાવવા માટે કુલ માસિક ખર્ચનું આવૃત્તિ-વિતરણ દર્શાવે છે. કુટુંબોના માસિક ખર્ચનો બહુલક શોધો.", 
                    question_desc: "2025 બોર્ડ માટે 4 માર્ક્સનો બહુલક અને મધ્યક બંને શોધવા વાળો મોટો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> બહુલક માટે કોઈ નવું કોષ્ટક બનાવવાનું નથી. નીચે આપેલા કોષ્ટકમાંથી સીધો જ સૌથી મોટો આંકડો (રાજા - f₁) શોધી લો!
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>માસિક ખર્ચ (₹ માં)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>કુટુંબોની સંખ્યા (f<sub>i</sub>)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1000 - 1500</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#2563eb;'>24 <b>(f₀)</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>1500 - 2000 <br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#dc2626; font-size:18px;'>40 (f₁)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2000 - 2500</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#16a34a;'>33 <b>(f₂)</b></td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2500 - 3000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>28</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3000 - 3500</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>30</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3500 - 4000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>22</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4000 - 4500</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>16</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4500 - 5000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>40</b> છે, તેથી <b>f₁ = 40</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 24</b> અને પાછળની આવૃત્તિ <b>f₂ = 33</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 40 ની સામેનો વર્ગ <b>1500 - 2000</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 1500</b> થશે.</li>
                                    <li>વર્ગલંબાઈ <b>h = 500</b> છે. (2000 - 1500 = 500)</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 1500 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>40 - 24</span><span>2(40) - 24 - 33</span></span> <span style='font-size:28px;'>)</span> &times; 500<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 40 - 24 = 16. છેદ: 2(40) = 80. અને -24 - 33 નો સરવાળો -57 થાય)</i></span><br>
                                Z = 1500 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>16</span><span>80 - 57</span></span> <span style='font-size:24px;'>)</span> &times; 500<br><br>

                                Z = 1500 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>16</span><span>23</span></span> <span style='font-size:24px;'>)</span> &times; 500<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(16 &times; 500 = 8000 થશે)</i></span><br>
                                Z = 1500 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8000</span><span>23</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(8000 નો 23 વડે ભાગાકાર કરતા 347.826... આવશે)</i></span><br>
                                Z = 1500 + 347.83<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = ₹ 1847.83</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>જવાબ 1:</b> કુટુંબોના માસિક ખર્ચનો બહુલક <b>₹ 1847.83</b> છે.
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન (મધ્યક માટે કઈ રીત?):</b><br>
                            અહીં માસિક ખર્ચ 1000 થી 5000 સુધીનો ખૂબ મોટો છે. જો તમે 'સીધી રીત' વાપરો, તો 4750 &times; 7 જેવા મોટા ગુણાકાર કરવા પડશે. એટલે આપણે <b>'પદ-વિચલનની રીત (Step-Deviation)'</b> નો ઉપયોગ કરીશું, જેથી ગુણાકાર સાવ નાના થઈ જાય!
                        </div>

                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>મધ્યકની ગણતરી (પદ-વિચલનની રીત)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 2750</b> અને વર્ગલંબાઈ <b>h = 500</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>માસિક ખર્ચ (વર્ગ)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>કુટુંબો (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/500</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1000 - 1500</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>24</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1250</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-72</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1500 - 2000</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1750</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-80</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2000 - 2500</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>33</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2250</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-33</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2500 - 3000</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>28</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>2750 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3000 - 3500</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>30</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3250</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>30</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3500 - 4000</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>22</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3750</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>44</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4000 - 4500</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>16</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4250</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>48</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4500 - 5000</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>7</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4750</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>28</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>200</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -35</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -185, અને + વાળાનો 150. એટલે 150 - 185 = -35)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 2750 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-35</span><span>200</span></span> <span style='font-size:24px;'>)</span> &times; 500<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(500 અને 200 ના બે શૂન્ય ઉડી જશે)</i></span><br>
                                x̄ = 2750 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35 &times; 5</span><span>2</span></span><br><br>
                                x̄ = 2750 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>175</span><span>2</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(175 ના અડધા 87.5 થાય)</i></span><br>
                                x̄ = 2750 - 87.5<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = ₹ 2662.50</b>
                            </div>
                        </div>

                        <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                            <b style='color:#0f172a; font-size:16px;'>જવાબ 2:</b> કુટુંબોના માસિક ખર્ચનો મધ્યક <b>₹ 2662.50</b> છે.
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 4 (ભાગ 1 - બહુલક): નીચેનું વિતરણ ભારતની ઉચ્ચતર માધ્યમિક શાળાઓમાં રાજ્યવાર શિક્ષક-વિદ્યાર્થી ગુણોત્તરનું વિતરણ આપે છે. આ માહિતીનો બહુલક શોધો.", 
                    question_desc: "2024 બોર્ડ માટે 4 માર્ક્સનો બહુલક અને મધ્યક બંને શોધવા વાળો મોટો દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> બહુલક માટે કોઈ નવું કોષ્ટક બનાવવાનું નથી. નીચે આપેલા કોષ્ટકમાંથી સીધો જ સૌથી મોટો આંકડો (રાજા - f₁) શોધી લો!
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>પ્રતિ શિક્ષક વિદ્યાર્થીઓની સંખ્યા</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>રાજ્યો/કે.શા.પ્રદેશની સંખ્યા (f<sub>i</sub>)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>15 - 20</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>20 - 25</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>25 - 30</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#2563eb;'>9 <b>(f₀)</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>30 - 35 <br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#dc2626; font-size:18px;'>10 (f₁)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>35 - 40</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#16a34a;'>3 <b>(f₂)</b></td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>40 - 45</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>45 - 50</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>50 - 55</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>2</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>10</b> છે, તેથી <b>f₁ = 10</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 9</b> અને પાછળની આવૃત્તિ <b>f₂ = 3</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 10 ની સામેનો વર્ગ <b>30 - 35</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 30</b> થશે.</li>
                                    <li>વર્ગલંબાઈ <b>h = 5</b> છે. (35 - 30 = 5)</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 30 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>10 - 9</span><span>2(10) - 9 - 3</span></span> <span style='font-size:28px;'>)</span> &times; 5<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 10 - 9 = 1. છેદ: 2(10) = 20. અને -9 - 3 નો સરવાળો -12 થાય)</i></span><br>
                                Z = 30 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>20 - 12</span></span> <span style='font-size:24px;'>)</span> &times; 5<br><br>

                                Z = 30 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>1</span><span>8</span></span> <span style='font-size:24px;'>)</span> &times; 5<br><br>

                                Z = 30 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>5</span><span>8</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(5 નો 8 વડે ભાગાકાર કરતા 0.625 આવશે)</i></span><br>
                                Z = 30 + 0.625<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 30.625 &approx; 30.6</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>જવાબ 1:</b> શિક્ષક-વિદ્યાર્થી ગુણોત્તરનો બહુલક <b>30.6</b> છે.
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન (મધ્યક માટે કઈ રીત?):</b><br>
                            અહીં મધ્યકિંમત (x<sub>i</sub>) 17.5, 22.5 વગેરે પોઈન્ટમાં આવશે. સીધી રીતમાં ગુણાકાર અઘરા પડે. તેથી <b>'પદ-વિચલનની રીત'</b> વાપરીશું, જેથી પોઈન્ટ ગાયબ થઈ જશે અને ગણતરી રમત બની જશે!
                        </div>

                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>મધ્યકની ગણતરી (પદ-વિચલનની રીત)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 32.5</b> અને વર્ગલંબાઈ <b>h = 5</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>વિદ્યાર્થી સંખ્યા</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>રાજ્યો (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/5</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>15 - 20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>17.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-9</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20 - 25</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>22.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-16</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>25 - 30</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>9</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>27.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-9</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>30 - 35</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>10</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>32.5 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>35 - 40</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>37.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>3</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>40 - 45</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>42.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>45 - 50</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>47.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>0</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>50 - 55</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>52.5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>8</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>35</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = -23</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -34, અને + વાળાનો 11. એટલે 11 - 34 = -23)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 32.5 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>-23</span><span>35</span></span> <span style='font-size:24px;'>)</span> &times; 5<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(5 વડે 35 ને ઉડાડતા છેદમાં 7 વધશે)</i></span><br>
                                x̄ = 32.5 - <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>23</span><span>7</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(23 નો 7 વડે ભાગાકાર કરતા 3.285... આવશે)</i></span><br>
                                x̄ = 32.5 - 3.28<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 29.22</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdfa; border-left:4px solid #0891b2; padding:10px;'>
                            <b style='color:#155e75; font-size:18px;'>બંને માપનું અર્થઘટન (Interpretation):</b><br>
                            <ul style='margin-bottom:0; color:#0f172a;'>
                                <li><b>બહુલક (30.6):</b> મોટાભાગનાં રાજ્યોમાં પ્રતિ શિક્ષક વિદ્યાર્થીઓની સંખ્યા 30.6 છે.</li>
                                <li><b>મધ્યક (29.22):</b> બધાં જ રાજ્યોમાં સરેરાશ પ્રતિ શિક્ષક વિદ્યાર્થીઓની સંખ્યા 29.22 છે.</li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 5: આપેલું વિતરણ વિશ્વના કેટલાક શ્રેષ્ઠ બેટ્સમેનો દ્વારા એકદિવસીય આંતરરાષ્ટ્રીય મેચોમાં નોંધાવેલા રનની સંખ્યા દર્શાવે છે. આ માહિતીનો બહુલક શોધો.", 
                    question_desc: "2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો બેટ્સમેનોના રન વાળો ફેવરિટ અને સ્કોરિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> બહુલકના દાખલામાં નવું કોઈ કોષ્ટક નથી બનાવવાનું. નીચેના કોષ્ટકમાંથી સીધો જ <b>સૌથી મોટો આંકડો (રાજા - f₁)</b> શોધી લો, એટલે દાખલો અડધો ત્યાં જ પૂરો!
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>નોંધાવેલા રન</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>બેટ્સમેનોની સંખ્યા (f<sub>i</sub>)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3000 - 4000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#2563eb;'>4 <b>(f₀)</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>4000 - 5000 <br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#dc2626; font-size:18px;'>18 (f₁)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5000 - 6000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#16a34a;'>9 <b>(f₂)</b></td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6000 - 7000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>7000 - 8000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>6</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8000 - 9000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>3</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>9000 - 10000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10000 - 11000</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>1</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>18</b> છે, તેથી <b>f₁ = 18</b>.</li>
                                    <li>તેની ઉપરની (આગળની) આવૃત્તિ <b>f₀ = 4</b> અને નીચેની (પાછળની) આવૃત્તિ <b>f₂ = 9</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 18 ની સામેનો વર્ગ <b>4000 - 5000</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 4000</b> થશે.</li>
                                    <li>વર્ગલંબાઈ <b>h = 1000</b> છે. (5000 - 4000 = 1000)</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 4000 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>18 - 4</span><span>2(18) - 4 - 9</span></span> <span style='font-size:28px;'>)</span> &times; 1000<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 18 - 4 = 14. છેદ: 2(18) = 36. અને -4 - 9 નો સરવાળો -13 થાય)</i></span><br>
                                Z = 4000 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>36 - 13</span></span> <span style='font-size:24px;'>)</span> &times; 1000<br><br>

                                Z = 4000 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14</span><span>23</span></span> <span style='font-size:24px;'>)</span> &times; 1000<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(14 &times; 1000 = 14000 થશે)</i></span><br>
                                Z = 4000 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>14000</span><span>23</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(14000 નો 23 વડે ભાગાકાર કરતા 608.695... આવશે)</i></span><br>
                                Z = 4000 + 608.7<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 4608.7 રન</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> આપેલ માહિતીનો બહુલક <b>4608.7 રન</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                             
                { 
                    question: "🌟 સ્વા. 13.2 પ્રશ્ન 6: એક વિદ્યાર્થીએ પ્રત્યેક 3 મિનિટનો એક એવા 100 સમયગાળા માટે રસ્તા પરની એક જગ્યાએથી પસાર થતી ગાડીઓની સંખ્યાની નોંધ કરી અને તેને નીચે આપેલા કોષ્ટકમાં સંક્ષિપ્ત સ્વરૂપમાં દર્શાવી છે. આ માહિતીનો બહુલક શોધો.", 
                    question_desc: "2024 અને 2026 બોર્ડ પરીક્ષા માટે 3 માર્ક્સનો સ્વાધ્યાય 13.2 નો છેલ્લો અને સૌથી સ્કોરિંગ દાખલો",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> બહુલક શોધવા માટે કોઈ નવું કોષ્ટક દોરવાની જરૂર નથી. ખાલી નીચે આપેલ આવૃત્તિની લાઈન જુઓ. તેમાંથી સૌથી મોટો આંકડો શોધીને તેને તમારો 'રાજા' (f₁) બનાવી લો!
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; padding-bottom:5px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ગાડીઓની સંખ્યા</th>
                                        <td style='border:1px solid #22c55e; padding:8px;'>0 - 10</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>10 - 20</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>20 - 30</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>30 - 40</td>
                                        <td style='border:1px solid #22c55e; padding:8px; background-color:#fef08a; border:2px solid #ea580c;'><b>40 - 50</b><br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>50 - 60</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>60 - 70</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>70 - 80</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <th style='border:1px solid #bbf7d0; padding:8px; color:#14532d;'>આવૃત્તિ (f<sub>i</sub>)</th>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>7</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>14</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>13</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#2563eb;'>12<br><b>(f₀)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; background-color:#fef08a; border:2px solid #ea580c; color:#dc2626; font-size:18px;'><b>20<br>(f₁)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px; color:#16a34a;'>11<br><b>(f₂)</b></td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>15</td>
                                        <td style='border:1px solid #bbf7d0; padding:8px;'>8</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>20</b> છે, તેથી <b>f₁ = 20</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 12</b> અને પાછળની આવૃત્તિ <b>f₂ = 11</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 20 ની બરાબર ઉપરનો વર્ગ <b>40 - 50</b> છે, જેને <b>બહુલક વર્ગ</b> કહેવાય.</li>
                                    <li>આથી તેની અધઃસીમા <b>l = 40</b> થશે.</li>
                                    <li>વર્ગલંબાઈ <b>h = 10</b> છે. (50 - 40 = 10)</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 40 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>20 - 12</span><span>2(20) - 12 - 11</span></span> <span style='font-size:28px;'>)</span> &times; 10<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 20 - 12 = 8. છેદ: 2(20) = 40. અને -12 - 11 નો સરવાળો -23 થાય)</i></span><br>
                                Z = 40 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8</span><span>40 - 23</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>

                                Z = 40 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>8</span><span>17</span></span> <span style='font-size:24px;'>)</span> &times; 10<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(8 &times; 10 = 80 થશે)</i></span><br>
                                Z = 40 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>80</span><span>17</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(80 નો 17 વડે ભાગાકાર કરતા 4.705... આવશે)</i></span><br>
                                Z = 40 + 4.705<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 44.7 ગાડીઓ (આશરે)</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>અંતિમ જવાબ:</b> આપેલ માહિતીનો બહુલક <b>44.7 ગાડીઓ</b> છે.
                            </div>
                        </div>
                    </div>
                    `
                },
                             
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: મધ્યસ્થ (Median) શોધવા માટે સંચયી આવૃત્તિ (cf) કઈ રીતે શોધવી?",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 મધ્યસ્થ શોધવાના 4 જાદુઈ સ્ટેપ્સ:</b><br><br>
                            <b>સ્ટેપ 1:</b> એક નવું ખાનું બનાવો જેને <b>સંચયી આવૃત્તિ (cf)</b> કહેવાય. આમાં આવૃત્તિઓનો ત્રાંસો સરવાળો (ઝિગઝેગ સરવાળો) કરતા જાવ.<br>
                            <b>સ્ટેપ 2:</b> કુલ આવૃત્તિ (n) ના અડધા કરો, એટલે કે <b>n/2</b> શોધો.<br>
                            <b>સ્ટેપ 3:</b> <b>cf</b> ના ખાનામાં જુઓ કે n/2 થી બરાબર મોટી હોય તેવી પહેલી સંખ્યા કઈ છે? તે આખી લાઈનને <b>"મધ્યસ્થ વર્ગ"</b> તરીકે બોક્સ બનાવી દો!<br>
                            <b>સ્ટેપ 4:</b> આ બોક્સની અધઃસીમા એટલે <b>l</b>, તેની આવૃત્તિ એટલે <b>f</b>, અને તેની <b>બરાબર ઉપરના ખાનાની cf</b> લેવાની (આ ખાસ યાદ રાખવું!).
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.3 પ્રશ્ન 1 (ભાગ 1 - મધ્યસ્થ): નીચેનું આવૃત્તિ-વિતરણ એક વિસ્તારમાં 68 ગ્રાહકોનો માસિક વીજવપરાશ આપે છે. આ માહિતીનો મધ્યસ્થ, મધ્યક અને બહુલક શોધો અને તેમને સરખાવો.", 
                    question_desc: "2025 બોર્ડ માટે 4 માર્ક્સનો ત્રણેય માપ શોધવા વાળો મોટો દાખલો (ભાગ 1: મધ્યસ્થ)",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન:</b> સૌથી પહેલા આપણે <b>મધ્યસ્થ (Median)</b> શોધીશું. આ માટે આપણે સંચયી આવૃત્તિ (cf) નું ખાનું બનાવવું પડશે.
                        </div>

                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી cf અને મધ્યસ્થ વર્ગ નક્કી કરવો</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>માસિક વપરાશ (એકમોમાં)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>ગ્રાહકોની સંખ્યા (f)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>સંચયી આવૃત્તિ (cf)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>65 - 85</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>4</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>85 - 105</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>4 + 5 = 9</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>105 - 125</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>13</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; font-weight:bold; color:#dc2626;'>9 + 13 = 22 (cf)</td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>125 - 145<br><span style='font-size:12px; color:#c2410c;'>(મધ્યસ્થ વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#2563eb;'>20 (f)</td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#1d4ed8;'>22 + 20 = 42</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>145 - 165</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>14</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>42 + 14 = 56</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>165 - 185</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>8</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>56 + 8 = 64</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>185 - 205</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>4</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>64 + 4 = 68</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#16a34a;'>n = 68</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>કુલ આવૃત્તિ <b>n = 68</b> છે. તેથી <b>n/2 = 68/2 = 34</b> થાય.</li>
                                    <li>cf ના ખાનામાં જુઓ: 34 થી તરત મોટી સંખ્યા <b>42</b> છે.</li>
                                    <li>તેથી <b>125 - 145</b> એ આપણો મધ્યસ્થ વર્ગ છે.</li>
                                    <li>અધઃસીમા <b>l = 125</b>, આવૃત્તિ <b>f = 20</b>.</li>
                                    <li><span style='color:#dc2626; font-weight:bold;'>ખાસ નોંધ:</span> <b>cf</b> હંમેશા ઉપરના ખાનાની લેવાની, એટલે <b>cf = 22</b> લેવી.</li>
                                    <li>વર્ગલંબાઈ <b>h = 20</b> છે. (85 - 65 = 20).</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>M = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>n/2 - cf</span><span>f</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                M = 125 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>34 - 22</span><span>20</span></span> <span style='font-size:28px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(34 માંથી 22 જાય તો 12 વધે)</i></span><br>
                                M = 125 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>12</span><span>20</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશનો 20 અને છેદનો 20 સીધા જ ઉડી જશે! કેવી મસ્ત ટ્રીક!)</i></span><br>
                                M = 125 + 12<br><br>

                                <b style='color:#dc2626; font-size:22px;'>M = 137 એકમો</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>જવાબ 1:</b> ગ્રાહકોના માસિક વપરાશનો <b>મધ્યસ્થ 137 એકમો</b> છે.
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>સ્ટેપ 1: કોષ્ટક પરથી કિંમતો નક્કી કરવી (બહુલક)</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>માસિક વપરાશ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>ગ્રાહકોની સંખ્યા (f<sub>i</sub>)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>65 - 85</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>85 - 105</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>105 - 125</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>13 <b>(f₀)</b></td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>125 - 145 <br><span style='font-size:12px; color:#c2410c;'>(બહુલક વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#dc2626; font-size:18px;'>20 (f₁)</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>145 - 165</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>14 <b>(f₂)</b></td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>165 - 185</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>185 - 205</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં સૌથી મોટી આવૃત્તિ <b>20</b> છે, તેથી <b>f₁ = 20</b>.</li>
                                    <li>તેની આગળની આવૃત્તિ <b>f₀ = 13</b> અને પાછળની આવૃત્તિ <b>f₂ = 14</b>.</li>
                                    <li>સૌથી મોટી આવૃત્તિ 20 ની સામેનો વર્ગ <b>125 - 145</b> છે, જે આપણો <b>બહુલક વર્ગ</b> છે.</li>
                                    <li>તેથી અધઃસીમા <b>l = 125</b> અને વર્ગલંબાઈ <b>h = 20</b> થશે.</li>
                                </ul>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: સૂત્ર અને ગણતરી</b>
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffedd5; padding:15px; border-radius:5px;'>
                                <b style='font-size:16px;'>Z = l + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>f₁ - f₀</span><span>2f₁ - f₀ - f₂</span></span> <span style='font-size:28px;'>)</span> &times; h</b><br><br>
                                
                                Z = 125 + <span style='font-size:28px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>20 - 13</span><span>2(20) - 13 - 14</span></span> <span style='font-size:28px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(અંશ: 20 - 13 = 7. છેદ: 2(20) = 40. અને -13 - 14 નો સરવાળો -27 થાય)</i></span><br>
                                Z = 125 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>40 - 27</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>

                                Z = 125 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>13</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>

                                <span style='color:#047857; font-size:14px;'><i>(7 &times; 20 = 140 થશે)</i></span><br>
                                Z = 125 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>140</span><span>13</span></span><br><br>

                                <span style='color:#047857; font-size:14px;'><i>(140 નો 13 વડે ભાગાકાર કરતા 10.769... આવશે)</i></span><br>
                                Z = 125 + 10.76<br><br>

                                <b style='color:#dc2626; font-size:22px;'>Z = 135.76 એકમો</b>
                            </div>
                            
                            <div style='margin-top:10px; background-color:#f1f5f9; padding:8px; border-radius:4px; border-left:4px solid #475569; text-align:center;'>
                                <b style='color:#0f172a; font-size:16px;'>જવાબ 2:</b> માસિક વીજવપરાશનો <b>બહુલક 135.76 એકમો</b> છે.
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#fffbeb; border-left:4px solid #f59e0b; padding:10px; margin-bottom:15px;'>
                            <b style='color:#b45309;'>💡 NJ સજેશન (મધ્યક માટે કઈ રીત?):</b><br>
                            અહીં મધ્યકિંમત (x<sub>i</sub>) 75, 95, 115 જેવી મોટી આવશે. એટલે આપણે <b>'પદ-વિચલનની રીત'</b> વાપરીશું, જેથી ગુણાકાર સાવ 1, 2, 3 ના ઘડિયા જેટલા જ થઈ જાય!
                        </div>

                        <div style='background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#1d4ed8; font-size:18px;'>મધ્યકની ગણતરી (પદ-વિચલનની રીત)</b><br>
                            <span style='font-size:14px; color:#0f172a;'>ધારો કે મધ્યક <b>A = 135</b> અને વર્ગલંબાઈ <b>h = 20</b> છે.</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dbeafe; color:#1e3a8a; font-weight:bold;'>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>માસિક વપરાશ</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>ગ્રાહકો (f<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>મધ્યકિંમત (x<sub>i</sub>)</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>u<sub>i</sub> = (x<sub>i</sub>-A)/20</th>
                                        <th style='border:1px solid #3b82f6; padding:8px;'>f<sub>i</sub>u<sub>i</sub></th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>65 - 85</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>75</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-12</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>85 - 105</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>5</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>95</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-10</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>105 - 125</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>13</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>115</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>-1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#dc2626;'>-13</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>125 - 145</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>20</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; background-color:#fef08a; border-radius:4px;'><b>135 (A)</b></td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>0</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#16a34a;'>0</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>145 - 165</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>14</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>155</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>1</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>14</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>165 - 185</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>8</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>175</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>2</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>16</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>185 - 205</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>4</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>195</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px;'>3</td>
                                        <td style='border:1px solid #bfdbfe; padding:6px; color:#2563eb;'>12</td>
                                    </tr>
                                    <tr style='background-color:#dbeafe; font-weight:bold;'>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>68</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px;'>-</td>
                                        <td style='border:1px solid #3b82f6; padding:8px; color:#b91c1c;'>&Sigma;f<sub>i</sub>u<sub>i</sub> = 7</td>
                                    </tr>
                                </table>
                            </div>
                            <span style='font-size:12px; color:#64748b;'>(- વાળાનો સરવાળો -35, અને + વાળાનો 42. એટલે 42 - 35 = 7)</span>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px; background-color:#ffffff; padding:10px; border-radius:5px;'>
                                <b style='color:#0f172a;'>સૂત્ર અને ગણતરી:</b><br>
                                મધ્યક (x̄) = A + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>&Sigma;f<sub>i</sub>u<sub>i</sub></span><span>&Sigma;f<sub>i</sub></span></span> <span style='font-size:24px;'>)</span> &times; h<br><br>
                                x̄ = 135 + <span style='font-size:24px;'>(</span> <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7</span><span>68</span></span> <span style='font-size:24px;'>)</span> &times; 20<br><br>
                                <span style='color:#047857; font-size:14px;'><i>(20 અને 68 ને 4 વડે ઉડાડતા: ઉપર 5 અને નીચે 17 વધશે)</i></span><br>
                                x̄ = 135 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>7 &times; 5</span><span>17</span></span><br><br>
                                x̄ = 135 + <span style='display:inline-block; vertical-align:middle; text-align:center;'><span style='border-bottom:1px solid black; display:block; padding:0 3px;'>35</span><span>17</span></span><br><br>
                                <span style='color:#047857; font-size:14px;'><i>(35 નો 17 વડે ભાગાકાર કરતા 2.05... આવશે)</i></span><br>
                                x̄ = 135 + 2.05<br><br>
                                <b style='color:#1d4ed8; font-size:20px;'>x̄ = 137.05 એકમો</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdfa; border-left:4px solid #0891b2; padding:10px;'>
                            <b style='color:#155e75; font-size:18px;'>ત્રણેય માપની સરખામણી (Comparison):</b><br>
                            <ul style='margin-bottom:0; color:#0f172a; line-height:1.6;'>
                                <li><b>મધ્યસ્થ = 137:</b> તેનો અર્થ એ કે અડધા ગ્રાહકોનો વપરાશ 137 થી ઓછો છે અને અડધા ગ્રાહકોનો 137 થી વધુ છે.</li>
                                <li><b>બહુલક = 135.76:</b> મહત્તમ ગ્રાહકોનો વપરાશ આશરે 135.76 એકમ છે.</li>
                                <li><b>મધ્યક = 137.05:</b> બધા ગ્રાહકોનો સરેરાશ વપરાશ 137.05 એકમ છે.</li>
                                <li><span style='color:#dc2626;'>અહીં ત્રણેય માપની કિંમતો લગભગ સમાન (આસપાસ) જ છે.</span></li>
                            </ul>
                        </div>
                    </div>
                    `
                },
                             
                {
                    question: "🎯 NJ Classes ની માસ્ટર ટિપ્સ: બે ખૂટતી આવૃત્તિ (x અને y) વાળા દાખલાની જાદુઈ ટ્રીક",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        <div style='background-color:#fdf4ff; border:2px dashed #d946ef; padding:15px; border-radius:8px; margin-bottom:15px;'>
                            <b style='color:#86198f; font-size:16px;'>💡 x અને y શોધવાના 3 ગોલ્ડન સ્ટેપ્સ:</b><br><br>
                            <b>સ્ટેપ 1 (સમીકરણ 1):</b> સૌથી પહેલા બધી આવૃત્તિઓનો સરવાળો કરીને તેને કુલ આવૃત્તિ (જે રકમમાં આપી હોય) સાથે સરખાવી દો. આનાથી તમને <b>x + y = કઈંક સંખ્યા</b> વાળું સમીકરણ 1 મળશે.<br>
                            <b>સ્ટેપ 2 (મધ્યસ્થ વર્ગ શોધવો):</b> આ દાખલામાં સૌથી મોટી ભૂલ વિદ્યાર્થીઓ એ કરે છે કે તેઓ n/2 પરથી વર્ગ શોધવા જાય છે, પણ x અને y હોવાથી તે ના મળે! <br>
                            <span style='color:#dc2626; font-weight:bold;'>જાદુઈ ટ્રીક:</span> <b>મધ્યસ્થ (Median) ની જે કિંમત આપી હોય (દા.ત. 28.5), તે કિંમત કયા વર્ગની વચ્ચે આવે છે તે જુઓ!</b> 28.5 એ 20 અને 30 ની વચ્ચે આવે, તેથી 20-30 એ જ આપણો મધ્યસ્થ વર્ગ!<br>
                            <b>સ્ટેપ 3:</b> સૂત્રમાં કિંમત મૂકતી વખતે <b>cf</b> ની આગળ માઇનસ (-) હોવાથી કૌંસની નિશાનીઓ બદલવાનું ખાસ ધ્યાન રાખવું!
                        </div>
                    </div>
                    `
                },
                { 
                    question: "🌟 સ્વા. 13.3 પ્રશ્ન 2 (ભાગ 1 - કોષ્ટક): જો નીચે આપેલ આવૃત્તિ-વિતરણનો મધ્યસ્થ 28.5 હોય, તો x અને y નાં મૂલ્યો શોધો. (આપેલ છે: કુલ આવૃત્તિ = 60)", 
                    question_desc: "🔥 માર્ચ 2024 બોર્ડ પરીક્ષામાં પૂછાયેલો 4 માર્ક્સનો 100% મોસ્ટ IMP દાખલો!",
                    answer: `
                    <div style='background-color:#ffffff; padding:10px; font-family:sans-serif;'>
                        
                        <div style='background-color:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:10px; margin-bottom:20px;'>
                            <b style='color:#16a34a; font-size:18px;'>સ્ટેપ 1: સમીકરણ 1 બનાવવું અને cf નું કોષ્ટક બનાવવું</b>
                            
                            <div style='overflow-x:auto; white-space:nowrap; margin-top:10px;'>
                                <table style='width:100%; border-collapse:collapse; text-align:center; font-size:15px;'>
                                    <tr style='background-color:#dcfce7; color:#14532d; font-weight:bold;'>
                                        <th style='border:1px solid #22c55e; padding:8px;'>વર્ગ અંતરાલ</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>આવૃત્તિ (f)</th>
                                        <th style='border:1px solid #22c55e; padding:8px;'>સંચયી આવૃત્તિ (cf)</th>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>0 - 10</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>5</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>10 - 20</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626; font-weight:bold;'>x</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; font-weight:bold; color:#dc2626;'>5 + x (cf)</td>
                                    </tr>
                                    <tr style='background-color:#fef08a;'>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold;'>20 - 30<br><span style='font-size:12px; color:#c2410c;'>(મધ્યસ્થ વર્ગ)</span></td>
                                        <td style='border:1px solid #ea580c; padding:6px; font-weight:bold; color:#2563eb;'>20 (f)</td>
                                        <td style='border:1px solid #ea580c; padding:6px; color:#1d4ed8;'>25 + x</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>30 - 40</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>15</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>40 + x</td>
                                    </tr>
                                    <tr>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>40 - 50</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#dc2626; font-weight:bold;'>y</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; color:#1d4ed8;'>40 + x + y</td>
                                    </tr>
                                    <tr style='background-color:#f8fafc;'>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>50 - 60</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px;'>5</td>
                                        <td style='border:1px solid #bbf7d0; padding:6px; font-weight:bold; color:#16a34a;'>45 + x + y</td>
                                    </tr>
                                    <tr style='background-color:#dcfce7; font-weight:bold;'>
                                        <td style='border:1px solid #22c55e; padding:8px;'>કુલ</td>
                                        <td style='border:1px solid #22c55e; padding:8px; color:#16a34a;'>n = 60 (આપેલ છે)</td>
                                        <td style='border:1px solid #22c55e; padding:8px;'>-</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style='background-color:#e0f2fe; padding:10px; border-radius:5px; margin-top:15px;'>
                                <b style='color:#1e3a8a;'>સમીકરણ 1 મેળવીએ:</b><br>
                                અહીં કુલ આવૃત્તિ n = 60 આપી છે. અને કોષ્ટકના છેલ્લા ખાનાનો સરવાળો 45 + x + y છે.<br>
                                45 + x + y = 60<br>
                                x + y = 60 - 45<br>
                                <b style='color:#dc2626; font-size:18px;'>x + y = 15 ----- (સમીકરણ 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #fed7aa; border-radius:8px; padding:10px;'>
                            <b style='color:#c2410c; font-size:18px;'>સ્ટેપ 2: મધ્યસ્થ વર્ગ અને સૂત્રની કિંમતો નક્કી કરવી</b>
                            <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-top:10px;'>
                                <ul style='margin:0; padding-left:20px; color:#0f172a; line-height:1.6;'>
                                    <li>અહીં મધ્યસ્થ <b>M = 28.5</b> આપેલો છે. 28.5 એ 20 અને 30 ની વચ્ચે આવે છે.</li>
                                    <li>તેથી આપણો <b>મધ્યસ્થ વર્ગ 20 - 30</b> થશે.</li>
                                    <li>અધઃસીમા <b>l = 20</b>.</li>
                                    <li>તે વર્ગની આવૃત્તિ <b>f = 20</b>.</li>
                                    <li><span style='color:#dc2626; font-weight:bold;'>ખાસ નોંધ:</span> <b>cf</b> હંમેશા ઉપરના ખાનાની લેવાની, એટલે <b>cf = 5 + x</b>.</li>
                                    <li>કુલ આવૃત્તિ 60 હોવાથી <b>n/2 = 30</b>.</li>
                                    <li>વર્ગલંબાઈ <b>h = 10</b> (30 - 20 = 10).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                }
             
             
             
             
             
             
             
             
             
             
             
             ]
        }
       
  
                    
   };         
            
                    
            
            
                
            
            
                
            
            
                
            
            
                
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
            
          
            
        

