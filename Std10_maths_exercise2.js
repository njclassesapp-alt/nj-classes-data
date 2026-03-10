var njMathsExercise = {
        
        // ------------------------------------
        // પ્રકરણ 5: સમાંતર શ્રેણી 
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
                }
            ]
        }
  



  };
