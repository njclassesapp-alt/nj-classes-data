var njMathsExamples_Std8 = {
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 1: સંમેય સંખ્યાઓ (ઉદાહરણો)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંમેય સંખ્યાઓ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "કિંમત શોધો: 3/7 + (-6/11) + (-8/21) + (5/22)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>અહીં આપણે <b>ક્રમ અને જૂથના ગુણધર્મનો</b> ઉપયોગ કરીને ગણતરી સરળ બનાવીશું. સમાન અથવા સંબંધિત છેદ વાળા પદોને પાસ-પાસે લાવીશું.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #ea580c; margin-bottom:10px; font-size:16px; color:#1e3a8a; line-height:2;'>
                        = [ 3/7 + (-8/21) ] + [ (-6/11) + 5/22 ] <br>
                        <span style='color:#64748b; font-size:14px;'>(7 અને 21 નો લ.સા.અ. 21 છે, તથા 11 અને 22 નો લ.સા.અ. 22 છે)</span><br><br>
                        
                        = [ (9 - 8)/21 ] + [ (-12 + 5)/22 ]<br>
                        = <b style='color:#be123c;'>1/21</b> + <b style='color:#047857;'>(-7/22)</b><br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(હવે 21 અને 22 નો લ.સા.અ. 21 &times; 22 = 462 લેતા)</span><br>
                        = (22 - 147) / 462 <br>
                        = <b style='color:#ea580c; font-size:18px;'>-125 / 462</b>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border:1px dashed #ca8a04;'>
                        💡 <b>યાદ રાખો:</b> સંમેય સંખ્યાઓના સરવાળા માટે <b>ક્રમનો ગુણધર્મ</b> (a+b = b+a) અને <b>જૂથનો ગુણધર્મ</b> (a+(b+c) = (a+b)+c) લાગુ પડે છે.
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "કિંમત શોધો: (-4/5) × (3/7) × (15/16) × (-14/9)", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>ગુણાકારમાં પણ <b>ક્રમ અને જૂથના ગુણધર્મનો</b> ઉપયોગ કરવાથી છેદ ઉડાડવા આસાન બની જાય છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2;'>
                        = [ (-4/5) &times; (15/16) ] &times; [ (3/7) &times; (-14/9) ]<br>
                        <span style='color:#64748b; font-size:14px;'>(સરળતાથી છેદ ઉડી શકે તેવા પદોનું જૂથ બનાવ્યું)</span><br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>પહેલા જૂથમાં છેદ ઉડાડતા: 5&times;3=15 અને 4&times;4=16</span><br>
                        = <b style='color:#be123c;'>(-3/4)</b> &times; [ (3/7) &times; (-14/9) ]<br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>બીજા જૂથમાં છેદ ઉડાડતા: 7&times;2=14 અને 3&times;3=9</span><br>
                        = <b style='color:#be123c;'>(-3/4)</b> &times; <b style='color:#047857;'>(-2/3)</b><br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>બે ઋણ સંખ્યાઓનો ગુણાકાર ધન (+) થાય:</span><br>
                        = (3 &times; 2) / (4 &times; 3)<br>
                        = 6 / 12<br>
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = 1/2
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "નીચે આપેલી સંખ્યાની વિરોધી સંખ્યા (Additive Inverse) લખો:\n(i) -7/19 \n(ii) 21/112", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#fff7ed; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:5px;'>
                        <b>વ્યાખ્યા:</b> જો બે સંખ્યાઓનો સરવાળો શૂન્ય (0) થાય, તો તે બે સંખ્યાઓ એકબીજાની વિરોધી સંખ્યા કહેવાય. [ <b>a + (-a) = 0</b> ]
                    </div>

                    <div style='border-left:5px solid #1e3a8a; background-color:#eff6ff; padding:12px; border-radius:0 8px 8px 0;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(i) -7/19 ની વિરોધી સંખ્યા</h4>
                        <p style='margin:0; font-size:18px; font-weight:bold; color:#0369a1;'>જવાબ: 7/19</p>
                        <p style='margin:5px 0 0 0; font-size:14px; color:#475569;'>કારણ કે, (-7/19) + 7/19 = 0 થાય છે.</p>
                    </div>
                    
                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:12px; border-radius:0 8px 8px 0;'>
                        <h4 style='color:#be123c; margin:0 0 5px 0;'>(ii) 21/112 ની વિરોધી સંખ્યા</h4>
                        <p style='margin:0; font-size:18px; font-weight:bold; color:#9f1239;'>જવાબ: -21/112</p>
                        <p style='margin:5px 0 0 0; font-size:14px; color:#475569;'>કારણ કે, 21/112 + (-21/112) = 0 થાય છે.</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "ચકાસણી કરો કે -(-x) = x : x = 13/17 માટે.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>ગાણિતિક સાબિતી:</h4>
                    <div style='font-size:16px; color:#334155; line-height:1.8; background-color:#f8fafc; padding:15px; border-radius:5px;'>
                        અહીં <b>x = 13/17</b> આપેલ છે.<br><br>
                        
                        13/17 ની વિરોધી સંખ્યા <b>-13/17</b> છે. એટલે કે,<br>
                        13/17 + (-13/17) = 0<br><br>
                        
                        સમાનતાના નિયમ મુજબ, આનો અર્થ એ પણ થાય કે <b>-13/17 ની વિરોધી સંખ્યા 13/17</b> છે.<br>
                        તેથી, <b>-(-13/17) = 13/17</b><br><br>
                        
                        હવે, x ની કિંમત પાછી મૂકતા:<br>
                        <b style='color:#047857; font-size:18px;'>-(-x) = x</b> (સાબિત થાય છે.)
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5",
                question: "કિંમત શોધો: 2/5 × (-3/7) - 1/14 - 3/7 × 3/5", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border:1px solid #f0abfc; border-radius:8px;'>
                    <p style='margin-top:0; color:#86198f; font-weight:bold;'>અહીં આપણે ગુણાકારનું સરવાળા પર 'વિભાજન' (Distributive Property) વાપરીશું.</p>
                    
                    <div style='font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        = 2/5 &times; (-3/7) - 1/14 - 3/7 &times; 3/5<br>
                        
                        <span style='color:#64748b; font-size:14px;'>(ક્રમના ગુણધર્મથી પદોને ગોઠવતા)</span><br>
                        = 2/5 &times; <b style='color:#be123c;'>(-3/7)</b> - <b style='color:#be123c;'>3/7</b> &times; 3/5 - 1/14<br>
                        = 2/5 &times; <b style='color:#be123c;'>(-3/7)</b> + <b style='color:#be123c;'>(-3/7)</b> &times; 3/5 - 1/14<br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(હવે <b>વિભાજનના ગુણધર્મનો</b> ઉપયોગ કરતા: a&times;b + a&times;c = a&times;(b+c) )</span><br>
                        = <b style='color:#be123c;'>(-3/7)</b> &times; [ 2/5 + 3/5 ] - 1/14<br>
                        = (-3/7) &times; [ (2+3)/5 ] - 1/14<br>
                        = (-3/7) &times; [ 5/5 ] - 1/14<br>
                        = (-3/7) &times; 1 - 1/14<br>
                        = -3/7 - 1/14<br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(7 અને 14 નો લ.સા.અ. 14 લેતા)</span><br>
                        = (-6 - 1) / 14<br>
                        = -7 / 14<br>
                        <div style='background-color:#fff; padding:10px; border:2px dashed #86198f; text-align:center; font-size:20px; font-weight:bold; color:#c026d3; border-radius:8px; margin-top:10px;'>
                            = -1/2
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 2: એક ચલ સુરેખ સમીકરણ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "એક ચલ સુરેખ સમીકરણ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "ઉકેલ શોધો: 2x - 3 = x + 2", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    
                    <div style='text-align:center; overflow-x:auto; margin:15px 0;'>
                        <svg width="240" height="120" viewBox="0 0 240 120">
                            <path d="M 110 100 L 130 100 L 120 20 Z" fill="#cbd5e1"/>
                            <line x1="40" y1="20" x2="200" y2="20" stroke="#1e3a8a" stroke-width="4"/>
                            <circle cx="120" cy="20" r="4" fill="#be123c"/>
                            <line x1="40" y1="20" x2="20" y2="70" stroke="#94a3b8"/>
                            <line x1="40" y1="20" x2="60" y2="70" stroke="#94a3b8"/>
                            <path d="M 15 70 Q 40 90 65 70 Z" fill="#ea580c"/>
                            <text x="40" y="60" text-anchor="middle" font-size="14" fill="#1e3a8a" font-weight="bold">2x - 3</text>
                            <line x1="200" y1="20" x2="180" y2="70" stroke="#94a3b8"/>
                            <line x1="200" y1="20" x2="220" y2="70" stroke="#94a3b8"/>
                            <path d="M 175 70 Q 200 90 225 70 Z" fill="#047857"/>
                            <text x="200" y="60" text-anchor="middle" font-size="14" fill="#1e3a8a" font-weight="bold">x + 2</text>
                        </svg>
                        <p style='margin:0; font-size:12px; color:#64748b;'>સમીકરણ એટલે બંને બાજુ સમાન વજનવાળું ત્રાજવું!</p>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #ea580c; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        અહીં <b>x</b> વાળા પદોને ડાબી બાજુ અને અચળ પદોને જમણી બાજુ ભેગા કરીશું.<br>
                        
                        <span style='color:#64748b; font-size:14px;'>(x ને ડાબી બાજુ લાવતા તે -x થશે)</span><br>
                        &there4; 2x - x - 3 = 2 <br>
                        &there4; x - 3 = 2 <br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(-3 ને જમણી બાજુ લઈ જતા તે +3 થશે)</span><br>
                        &there4; x = 2 + 3 <br>
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            x = 5
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #ca8a04; margin-top:15px;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>બરાબરની નિશાની (<b>=</b>) એ બોર્ડર છે. જ્યારે કોઈ પદ બોર્ડર કૂદીને બીજી બાજુ જાય, ત્યારે તેનો સ્વભાવ બદલાઈ જાય!<br><b>( + નું - થાય, - નું + થાય, ગુણાકાર ભાગાકારમાં જાય અને ભાગાકાર ગુણાકારમાં! )</b></p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "ઉકેલ શોધો: 5x + 7/2 = (3/2)x - 14", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>ચલ <b>x</b> વાળા પદો એક તરફ અને સંખ્યાઓ બીજી તરફ ગોઠવીએ.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; min-width:280px;'>
                        <div style='font-size:16px; color:#1e3a8a; line-height:2.5;'>
                            &there4; 5x - 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>3x</div>
                                <div style='padding:0 3px;'>2</div>
                            </div>
                            = -14 - 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>7</div>
                                <div style='padding:0 3px;'>2</div>
                            </div>
                            <br>
                            
                            <span style='color:#64748b; font-size:14px;'>(બંને બાજુ લ.સા.અ. 2 લઈને છેદ સમાન કરતા)</span><br>
                            
                            &there4; 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>(10x - 3x)</div>
                                <div style='padding:0 3px;'>2</div>
                            </div>
                            = 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>(-28 - 7)</div>
                                <div style='padding:0 3px;'>2</div>
                            </div>
                            <br>
                            
                            <span style='color:#64748b; font-size:14px;'>(બંને બાજુના છેદમાં 2 સમાન હોવાથી તે કેન્સલ થશે)</span><br>
                            &there4; 7x = -35 <br>
                            &there4; x = -35 / 7 <br>
                            <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                                &there4; x = -5
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'>છેદમાં રહેલા અપૂર્ણાંકો થી ગણતરી અઘરી લાગે છે? તો એક કામ કરો: આખા સમીકરણને <b>છેદના લ.સા.અ. (અહીં 2) વડે ગુણી નાખો!</b> છેદ ગાયબ થઈ જશે અને સમીકરણ એકદમ સરળ બની જશે!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "ઉકેલ શોધો: (6x + 1)/3 + 1 = (x - 3)/6", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:12px; overflow-x:auto;'>
                    <div style='background-color:#fff7ed; padding:15px; border-radius:8px; border:1px solid #fed7aa; min-width:300px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#9a3412;'><b>પદ્ધતિ:</b> અહીં છેદમાં 3 અને 6 છે. બંનેનો લ.સા.અ. 6 આવે. આખા સમીકરણને 6 વડે ગુણીશું.</p>
                        
                        <div style='font-size:16px; color:#1e3a8a; line-height:2.5; background-color:#ffffff; padding:15px; border-radius:8px;'>
                            <span style='color:#ea580c; font-weight:bold;'>બંને બાજુ 6 વડે ગુણતા:</span><br>
                            
                            &there4; 6 &times; 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>(6x + 1)</div>
                                <div style='padding:0 3px;'>3</div>
                            </div>
                            + 6 &times; (1) = 6 &times; 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>(x - 3)</div>
                                <div style='padding:0 3px;'>6</div>
                            </div>
                            <br>
                            
                            <span style='color:#64748b; font-size:14px;'>(છેદ ઉડાડતા: 3 દૂ 6, અને 6 એકા 6)</span><br>
                            &there4; 2(6x + 1) + 6 = 1(x - 3) <br>
                            
                            <span style='color:#64748b; font-size:14px;'>(કૌંસ છોડતા)</span><br>
                            &there4; 12x + 2 + 6 = x - 3 <br>
                            &there4; 12x + 8 = x - 3 <br><br>
                            
                            <span style='color:#64748b; font-size:14px;'>(હવે x વાળા પદો ભેગા કરતા)</span><br>
                            &there4; 12x - x = -3 - 8 <br>
                            &there4; 11x = -11 <br>
                            &there4; x = -11 / 11 <br>
                            
                            <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#9f1239;'>
                                &there4; x = -1
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "ઉકેલ શોધો: 5x - 2(2x - 7) = 2(3x - 1) + 7/2", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#334155;'>સૌપ્રથમ કૌંસ છોડીને સાદું રૂપ આપીશું.</p>
                    
                    <div style='background-color:#fffbeb; padding:10px; border-radius:8px; border-left:5px solid #eab308; margin-bottom:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>⚠️ Nitesh Sir ની ખાસ નોંધ:</h4>
                        <p style='margin:0; font-size:14px; color:#713f12;'>કૌંસની બહાર માઇનસ <b>(-)</b> ની નિશાની હોય, ત્યારે તે 'બોમ્બ' જેવી છે! કૌંસ ખૂલશે એટલે અંદરના બધા પદોની નિશાની બદલી નાખશે! <br><i>(દા.ત. -2 &times; -7 = +14 થશે)</i></p>
                    </div>

                    <div style='font-size:16px; color:#1e3a8a; line-height:2.2; background-color:#f8fafc; padding:15px; border-radius:8px; min-width:300px;'>
                        &there4; 5x - 4x <b style='color:#be123c;'>+ 14</b> = 6x - 2 + 7/2 <br>
                        <span style='color:#64748b; font-size:14px;'>(ડાબી બાજુ: 5x - 4x = x)</span><br>
                        &there4; x + 14 = 6x - 2 + 7/2 <br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(x વાળા પદો જમણી બાજુ અને અચળ પદો ડાબી બાજુ લઈ જતા સરળ પડશે)</span><br>
                        &there4; 14 + 2 - 7/2 = 6x - x <br>
                        &there4; 16 - 7/2 = 5x <br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(લ.સા.અ. 2 લેતા)</span><br>
                        &there4; (32 - 7) / 2 = 5x <br>
                        &there4; 25 / 2 = 5x <br><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(5 ગુણાકારમાંથી ભાગાકારમાં જશે)</span><br>
                        &there4; x = 25 / (2 &times; 5) <br>
                        &there4; x = 25 / 10 <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            &there4; x = 5/2
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 3: ચતુષ્કોણની સમજ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "ચતુષ્કોણની સમજ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આકૃતિમાં x નું માપ શોધો. (બહિષ્કોણો: 90°, 50°, 110° અને x)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:10px; border-radius:8px;'>
                        <svg width="220" height="200" viewBox="0 0 220 200">
                            <!-- Polygon lines -->
                            <line x1="50" y1="150" x2="150" y2="150" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="150" y1="150" x2="180" y2="80" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="180" y1="80" x2="100" y2="40" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="100" y1="40" x2="50" y2="150" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <!-- Extensions for exterior angles -->
                            <line x1="150" y1="150" x2="200" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
                            <line x1="180" y1="80" x2="200" y2="33" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
                            <line x1="100" y1="40" x2="40" y2="10" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
                            <line x1="50" y1="150" x2="20" y2="216" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>

                            <!-- Angles -->
                            <path d="M 170 150 A 20 20 0 0 0 162 122" fill="none" stroke="#be123c" stroke-width="2"/>
                            <text x="175" y="140" fill="#be123c" font-size="14" font-weight="bold">x</text>

                            <path d="M 188 60 A 20 20 0 0 0 163 70" fill="none" stroke="#047857" stroke-width="2"/>
                            <text x="190" y="55" fill="#047857" font-size="14" font-weight="bold">90°</text>
                            
                            <path d="M 80 30 A 20 20 0 0 0 115 50" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="60" y="30" fill="#ea580c" font-size="14" font-weight="bold">50°</text>

                            <path d="M 40 130 A 20 20 0 0 0 75 150" fill="none" stroke="#86198f" stroke-width="2"/>
                            <text x="20" y="140" fill="#86198f" font-size="14" font-weight="bold">110°</text>
                        </svg>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:15px; color:#334155; line-height:2;'>
                        આપણે જાણીએ છીએ કે કોઈપણ બહુકોણના બધા જ <b>બહિષ્કોણોનાં માપનો સરવાળો 360°</b> થાય છે.<br><br>
                        તેથી, x + 90° + 50° + 110° = 360° <br>
                        &there4; x + 250° = 360° <br>
                        &there4; x = 360° - 250° <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            &there4; x = 110°
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>બહુકોણ ગમે તેવડો મોટો હોય (ત્રિકોણ હોય, ચતુષ્કોણ હોય કે 100 બાજુ વાળો આકાર!), તેના <b>બહારના બધા ખૂણાઓ (બહિષ્કોણ) નો કુલ સરવાળો હંમેશા 360° જ થાય!</b> બસ બધાનો સરવાળો કરો અને 360 માંથી બાદ કરી દો.</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "એક નિયમિત બહુકોણના પ્રત્યેક બહિષ્કોણનું માપ 45° છે, તો તેની બાજુઓની સંખ્યા શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>અહીં, પ્રત્યેક બહિષ્કોણનું માપ <b>45°</b> આપેલું છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2;'>
                        બધા બહિષ્કોણોના માપનો કુલ સરવાળો = <b>360°</b> <br>
                        
                        <br>બાજુઓની સંખ્યા = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>બહિષ્કોણોનો કુલ સરવાળો</div>
                            <div style='padding:0 3px;'>એક બહિષ્કોણનું માપ</div>
                        </div>
                        <br><br>
                        
                        &there4; બાજુઓની સંખ્યા = 360 / 45 <br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            બાજુઓની સંખ્યા = 8
                        </div>
                        <p style='text-align:center; margin:5px 0 0 0; font-size:14px; color:#64748b;'>(આ <b>અષ્ટકોણ</b> છે.)</p>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'>આવા દાખલા માટે જાદુઈ સંખ્યા <b>360</b> છે! <br>👉 જો <b>બાજુ</b> આપી હોય અને ખૂણો શોધવો હોય તો 360 ને બાજુથી ભાગો.<br>👉 જો <b>ખૂણો</b> આપ્યો હોય અને બાજુ શોધવી હોય તો 360 ને ખૂણાથી ભાગો! <br>બંને એકબીજાના વ્યસ્ત છે!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "સમાંતરબાજુ ચતુષ્કોણ PQRS ની પરિમિતિ શોધો. (જો PQ = 12 cm અને QR = 7 cm હોય)", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:10px; border-radius:8px;'>
                        <svg width="240" height="120" viewBox="0 0 240 120">
                            <polygon points="40,100 200,100 220,20 60,20" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="30" y="115" fill="#1e3a8a" font-weight="bold">P</text>
                            <text x="205" y="115" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="225" y="15" fill="#1e3a8a" font-weight="bold">R</text>
                            <text x="45" y="15" fill="#1e3a8a" font-weight="bold">S</text>
                            
                            <text x="120" y="115" fill="#be123c" font-size="14" font-weight="bold">12 cm</text>
                            <text x="220" y="65" fill="#047857" font-size="14" font-weight="bold">7 cm</text>
                            <text x="130" y="35" fill="#be123c" font-size="12">12 cm</text>
                            <text x="20" y="65" fill="#047857" font-size="12">7 cm</text>
                        </svg>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:15px; color:#1e3a8a; line-height:2;'>
                        સમાંતરબાજુ ચતુષ્કોણમાં <b>સામસામેની બાજુઓ સમાન</b> હોય છે.<br>
                        તેથી, PQ = RS = <b>12 cm</b> અને QR = PS = <b>7 cm</b><br><br>
                        
                        ચતુષ્કોણની પરિમિતિ = બધી બાજુઓનો સરવાળો<br>
                        = PQ + QR + RS + PS<br>
                        = 12 + 7 + 12 + 7<br>
                        
                        <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#9f1239;'>
                            પરિમિતિ = 38 cm
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb; margin-top:15px;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>સમાંતરબાજુ ચતુષ્કોણની પરિમિતિનું સૂત્ર <b>લંબચોરસની પરિમિતિ</b> જેવું જ છે! <br><b>પરિમિતિ = 2 × (પાસપાસેની બે બાજુઓનો સરવાળો)</b><br>
                        = 2 × (12 + 7) = 2 × 19 = 38 સેમી. છે ને એકદમ સહેલું!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "આકૃતિમાં સમાંતરબાજુ ચતુષ્કોણ BEST આપેલ છે. જો ખૂણો B = 100° હોય, તો ખૂણો x, y અને z ના માપ શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <div style='background-color:#f8fafc; padding:10px; border-radius:8px; margin-bottom:15px; text-align:center;'>
                        <svg width="250" height="130" viewBox="0 0 250 130">
                            <polygon points="50,110 210,110 180,30 20,30" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="35" y="125" fill="#1e3a8a" font-weight="bold">B (100°)</text>
                            <text x="215" y="125" fill="#1e3a8a" font-weight="bold">E (x)</text>
                            <text x="185" y="20" fill="#1e3a8a" font-weight="bold">S (y)</text>
                            <text x="10" y="20" fill="#1e3a8a" font-weight="bold">T (z)</text>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2;'>
                        <b>1. x નું માપ (પાસપાસેના ખૂણા):</b><br>
                        સમાંતરબાજુ ચતુષ્કોણમાં પાસપાસેના ખૂણા <b>પૂરક</b> હોય છે (સરવાળો 180° થાય).<br>
                        &there4; B + E = 180° &rarr; 100° + x = 180° <br>
                        &there4; <b style='color:#ea580c;'>x = 80°</b><br><br>

                        <b>2. y નું માપ (સામસામેના ખૂણા):</b><br>
                        સમાંતરબાજુ ચતુષ્કોણમાં સામસામેના ખૂણા <b>સમાન</b> હોય છે.<br>
                        &there4; ખૂણો S (y) એ ખૂણા B (100°) ની સામે છે.<br>
                        &there4; <b style='color:#be123c;'>y = 100°</b><br><br>

                        <b>3. z નું માપ (સામસામેના ખૂણા):</b><br>
                        ખૂણો T (z) એ ખૂણા E (x) ની સામે છે.<br>
                        &there4; z = x <br>
                        &there4; <b style='color:#047857;'>z = 80°</b>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "સમાંતરબાજુ ચતુષ્કોણ HELP માં, વિકર્ણો એકબીજાને O બિંદુમાં દુભાગે છે. જો OE = 4 cm હોય, અને વિકર્ણ HL એ વિકર્ણ PE કરતાં 5 cm વધારે હોય, તો OH શોધો.", 
                answer: `
                <div style='background-color:#fef2f2; padding:15px; border-left:5px solid #ef4444; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#991b1b;'><b>ગુણધર્મ:</b> સમાંતરબાજુ ચતુષ્કોણના વિકર્ણો એકબીજાને <b>દુભાગે</b> છે. (એટલે કે બરાબર મધ્યમાંથી બે સરખા ટુકડા કરે છે).</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fca5a5; font-size:15px; color:#1e3a8a; line-height:2;'>
                        <b>સ્ટેપ 1: આખો વિકર્ણ PE શોધીએ.</b><br>
                        O એ PE નું મધ્યબિંદુ છે. જો અડધો ભાગ OE = 4 cm હોય, તો:<br>
                        આખો વિકર્ણ PE = 2 &times; 4 = <b style='color:#ea580c;'>8 cm</b>.<br><br>
                        
                        <b>સ્ટેપ 2: બીજો વિકર્ણ HL શોધીએ.</b><br>
                        રકમ મુજબ, વિકર્ણ HL એ PE કરતા 5 cm વધારે છે.<br>
                        &there4; HL = 8 + 5 = <b style='color:#047857;'>13 cm</b>.<br><br>

                        <b>સ્ટેપ 3: OH શોધીએ.</b><br>
                        O એ વિકર્ણ HL નું પણ મધ્યબિંદુ છે. તેથી OH એ HL થી અડધો હશે.<br>
                        &there4; OH = 13 / 2 <br>
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            &there4; OH = 6.5 cm
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>શબ્દ <b>'દુભાગે'</b> પકડી લો! 'દુ' એટલે બે અને 'ભાગ' એટલે ટુકડા. <br>વિકર્ણના દાખલામાં જો <b>અડધો ટુકડો આપ્યો હોય તો ડબલ કરો</b> (આખો વિકર્ણ મળશે) અને <b>આખો વિકર્ણ આપ્યો હોય તો અડધા કરો</b> (કટકો મળશે)!</p>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 4: માહિતીનું નિયમન (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "માહિતીનું નિયમન (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "એક દિવસના 24 કલાકમાંથી એક વિદ્યાર્થી નીચે મુજબ સમય પસાર કરે છે: ઊંઘ - 8 કલાક, શાળા - 6 કલાક. આ માહિતીને વર્તુળ આલેખ (પાય ચાર્ટ) માં દર્શાવવા માટે 'ઊંઘ' અને 'શાળા' ના વૃત્તાંશનો કેન્દ્ર આગળનો ખૂણો શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>પાય ચાર્ટ (વર્તુળ આલેખ) માં <b>કેન્દ્ર આગળના બધા જ ખૂણાઓનો સરવાળો 360°</b> થાય છે. તેથી આપણે અપૂર્ણાંક શોધીને તેને 360° વડે ગુણીશું.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #e0f2fe; min-width:300px;'>
                        <table style='width:100%; border-collapse: collapse; text-align:center; font-size:15px;'>
                            <tr style='background-color:#1e3a8a; color:white;'>
                                <th style='padding:10px; border:1px solid #cbd5e1;'>પ્રવૃત્તિ</th>
                                <th style='padding:10px; border:1px solid #cbd5e1;'>સમય (કલાક)</th>
                                <th style='padding:10px; border:1px solid #cbd5e1;'>અપૂર્ણાંક (ભાગ)</th>
                                <th style='padding:10px; border:1px solid #cbd5e1;'>કેન્દ્ર આગળનો ખૂણો</th>
                            </tr>
                            <tr>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>ઊંઘ</td>
                                <td style='padding:10px; border:1px solid #cbd5e1;'>8</td>
                                <td style='padding:10px; border:1px solid #cbd5e1;'>
                                    <div style='display:inline-block; vertical-align:middle;'>
                                        <div style='border-bottom:1px solid #334155; padding:0 3px;'>8</div>
                                        <div style='padding:0 3px;'>24</div>
                                    </div>
                                    = 
                                    <div style='display:inline-block; vertical-align:middle;'>
                                        <div style='border-bottom:1px solid #334155; padding:0 3px;'>1</div>
                                        <div style='padding:0 3px;'>3</div>
                                    </div>
                                </td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>
                                    (1/3) &times; 360° = <span style='font-size:18px;'>120°</span>
                                </td>
                            </tr>
                            <tr style='background-color:#f8fafc;'>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;'>શાળા</td>
                                <td style='padding:10px; border:1px solid #cbd5e1;'>6</td>
                                <td style='padding:10px; border:1px solid #cbd5e1;'>
                                    <div style='display:inline-block; vertical-align:middle;'>
                                        <div style='border-bottom:1px solid #334155; padding:0 3px;'>6</div>
                                        <div style='padding:0 3px;'>24</div>
                                    </div>
                                    = 
                                    <div style='display:inline-block; vertical-align:middle;'>
                                        <div style='border-bottom:1px solid #334155; padding:0 3px;'>1</div>
                                        <div style='padding:0 3px;'>4</div>
                                    </div>
                                </td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>
                                    (1/4) &times; 360° = <span style='font-size:18px;'>90°</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>કેન્દ્રનો ખૂણો શોધવામાં લાંબી ગણતરી નથી કરવી? એક મસ્ત ટ્રીક છે! <br>કુલ કલાક 24 છે અને કુલ ખૂણો 360° છે. <b>(360 &divide; 24 = 15)</b>.<br>બસ! 1 કલાક = 15° થાય. હવે જેનો ખૂણો શોધવો હોય તેને સીધા 15 વડે ગુણી નાખો!<br>ઊંઘ (8 કલાક): 8 &times; 15 = <b>120°</b> <br>શાળા (6 કલાક): 6 &times; 15 = <b>90°</b></p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "આકૃતિમાં એક શાળાના વિદ્યાર્થીઓના મનપસંદ વિષયનો પાય ચાર્ટ આપેલ છે. જો શાળામાં કુલ 400 વિદ્યાર્થીઓ હોય, તો ગણિત અને વિજ્ઞાન વિષય પસંદ કરનાર વિદ્યાર્થીઓની સંખ્યા શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#f8fafc; padding:10px; border-radius:8px; border:1px dashed #cbd5e1;'>
                        <svg width="220" height="220" viewBox="0 0 220 220">
                            <!-- Maths (50%) -->
                            <path d="M 110 110 L 110 10 A 100 100 0 0 1 110 210 Z" fill="#fca5a5" stroke="#ffffff" stroke-width="2"/>
                            <text x="145" y="115" fill="#991b1b" font-weight="bold" font-size="16">ગણિત (50%)</text>
                            
                            <!-- Science (25%) -->
                            <path d="M 110 110 L 110 210 A 100 100 0 0 1 10 110 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="2"/>
                            <text x="30" y="165" fill="#166534" font-weight="bold" font-size="12">વિજ્ઞાન (25%)</text>
                            
                            <!-- English (25%) -->
                            <path d="M 110 110 L 10 110 A 100 100 0 0 1 110 10 Z" fill="#bfdbfe" stroke="#ffffff" stroke-width="2"/>
                            <text x="25" y="65" fill="#1e40af" font-weight="bold" font-size="12">અંગ્રેજી (25%)</text>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2.2;'>
                        અહીં <b>કુલ વિદ્યાર્થીઓ = 400</b> છે.<br><br>
                        
                        <b style='color:#be123c;'>1. ગણિત વિષય પસંદ કરનાર:</b><br>
                        ગણિત માટે 50% આપેલ છે. (50% એટલે અડધો ભાગ).<br>
                        વિદ્યાર્થીઓની સંખ્યા = 400 ના 50% <br>
                        = 400 &times; (50 / 100) <br>
                        = <b style='color:#be123c; font-size:18px;'>200 વિદ્યાર્થીઓ</b><br><br>

                        <b style='color:#047857;'>2. વિજ્ઞાન વિષય પસંદ કરનાર:</b><br>
                        વિજ્ઞાન માટે 25% આપેલ છે. (25% એટલે ચોથો ભાગ).<br>
                        વિદ્યાર્થીઓની સંખ્યા = 400 ના 25% <br>
                        = 400 &times; (25 / 100) <br>
                        = 400 &times; (1 / 4) <br>
                        = <b style='color:#047857; font-size:18px;'>100 વિદ્યાર્થીઓ</b>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "એક થેલામાં 3 લાલ દડા અને 4 પીળા દડા છે. થેલામાં જોયા વગર એક દડો યાદચ્છિક રીતે પસંદ કરવામાં આવે છે. તો તે દડો (i) લાલ હોય તેની સંભાવના કેટલી? (ii) લાલ ન હોય તેની સંભાવના કેટલી?", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #f0abfc;'>
                        <svg width="200" height="150" viewBox="0 0 200 150">
                            <!-- Bag -->
                            <path d="M 40 40 Q 100 10 160 40 L 180 140 Q 100 160 20 140 Z" fill="#fef2f2" stroke="#fca5a5" stroke-width="3"/>
                            
                            <!-- Red Balls -->
                            <circle cx="80" cy="70" r="12" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
                            <circle cx="120" cy="80" r="12" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
                            <circle cx="100" cy="110" r="12" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
                            
                            <!-- Yellow Balls -->
                            <circle cx="60" cy="100" r="12" fill="#eab308" stroke="#a16207" stroke-width="2"/>
                            <circle cx="140" cy="100" r="12" fill="#eab308" stroke="#a16207" stroke-width="2"/>
                            <circle cx="100" cy="50" r="12" fill="#eab308" stroke="#a16207" stroke-width="2"/>
                            <circle cx="150" cy="65" r="12" fill="#eab308" stroke="#a16207" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#1e3a8a; line-height:2;'>
                        સૌ પ્રથમ કુલ પરિણામો શોધીએ.<br>
                        કુલ દડા = 3 લાલ + 4 પીળા = <b style='color:#be123c;'>7 કુલ દડા</b>.<br><br>
                        
                        <b>(i) પસંદ કરેલ દડો લાલ હોય:</b><br>
                        લાલ દડાની સંખ્યા = 3 <br>
                        સંભાવના P(લાલ) = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>લાલ દડાની સંખ્યા</div>
                            <div style='padding:0 3px;'>કુલ દડા</div>
                        </div>
                        <div style='background-color:#eff6ff; display:inline-block; padding:5px 10px; border-radius:5px; border:2px dashed #3b82f6; margin-left:10px; font-weight:bold; font-size:18px;'>= 3/7</div>
                        <br><br>

                        <b>(ii) પસંદ કરેલ દડો લાલ ન હોય:</b><br>
                        લાલ ન હોય એટલે કે તે દડો <b>પીળો</b> હોવો જોઈએ!<br>
                        પીળા દડાની સંખ્યા = 4 <br>
                        સંભાવના P(લાલ ન હોય) = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>પીળા દડાની સંખ્યા</div>
                            <div style='padding:0 3px;'>કુલ દડા</div>
                        </div>
                        <div style='background-color:#eff6ff; display:inline-block; padding:5px 10px; border-radius:5px; border:2px dashed #3b82f6; margin-left:10px; font-weight:bold; font-size:18px;'>= 4/7</div>
                    </div>

                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>સંભાવના એટલે બસ એક જ વસ્તુ મગજમાં ફિટ કરી લો: <br><b>સંભાવના = (આપણને જે જોઈએ છે તે) / (કુલ જે બધું જ છે તે)</b>. <br>અંશમાં માંગેલું મૂકો અને છેદમાં કુલ મૂકો. રમત પૂરી!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "આકૃતિમાં દર્શાવેલ એક સ્પિનિંગ વ્હીલ (ફરતું ચક્ર) છે. તેના પરથી: (i) લીલા રંગનો વૃત્તાંશ (Green Sector) મેળવવાની સંભાવના શોધો. (ii) લીલો રંગ ન હોય તેવો વૃત્તાંશ મેળવવાની સંભાવના શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0;'>
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <!-- Wheel -->
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#334155" stroke-width="4"/>
                            <!-- Lines splitting into 5 sectors (72 degrees each) -->
                            <path d="M 100 100 L 100 20 A 80 80 0 0 1 176 75 Z" fill="#bbf7d0" stroke="#334155" stroke-width="2"/> <!-- Green 1 -->
                            <path d="M 100 100 L 176 75 A 80 80 0 0 1 147 164 Z" fill="#bbf7d0" stroke="#334155" stroke-width="2"/> <!-- Green 2 -->
                            <path d="M 100 100 L 147 164 A 80 80 0 0 1 53 164 Z" fill="#bbf7d0" stroke="#334155" stroke-width="2"/> <!-- Green 3 -->
                            <path d="M 100 100 L 53 164 A 80 80 0 0 1 24 75 Z" fill="#fca5a5" stroke="#334155" stroke-width="2"/> <!-- Red 1 -->
                            <path d="M 100 100 L 24 75 A 80 80 0 0 1 100 20 Z" fill="#fca5a5" stroke="#334155" stroke-width="2"/> <!-- Red 2 -->
                            
                            <!-- Labels -->
                            <text x="135" y="65" fill="#166534" font-weight="bold" font-size="14">G</text>
                            <text x="145" y="125" fill="#166534" font-weight="bold" font-size="14">G</text>
                            <text x="95" y="160" fill="#166534" font-weight="bold" font-size="14">G</text>
                            <text x="45" y="125" fill="#991b1b" font-weight="bold" font-size="14">R</text>
                            <text x="55" y="65" fill="#991b1b" font-weight="bold" font-size="14">R</text>
                            
                            <!-- Pointer -->
                            <polygon points="100,5 90,25 110,25" fill="#1e3a8a"/>
                        </svg>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#64748b;'>(G = Green/લીલો, R = Red/લાલ)</p>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2.2;'>
                        અહીં સ્પિનિંગ વ્હીલના કુલ સમાન ભાગ ગણીએ તો: <br>
                        કુલ વૃત્તાંશ (ભાગ) = 5 (3 Green + 2 Red)<br><br>

                        <b>(i) લીલા રંગનો વૃત્તાંશ (G) મેળવવાની સંભાવના:</b><br>
                        અહીં લીલા રંગના 3 ભાગ છે.<br>
                        P(લીલો રંગ) = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #334155; padding:0 3px;'>3</div>
                            <div style='padding:0 3px;'>5</div>
                        </div>
                        <span style='color:#16a34a; font-weight:bold; font-size:18px; margin-left:10px;'>જવાબ: 3/5</span><br><br>

                        <b>(ii) લીલો રંગ ન હોય તેની સંભાવના:</b><br>
                        લીલો રંગ ન હોય એટલે કે તે 'લાલ' (Red) રંગ હશે. લાલ રંગના 2 ભાગ છે.<br>
                        P(લીલો ન હોય) = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #334155; padding:0 3px;'>2</div>
                            <div style='padding:0 3px;'>5</div>
                        </div>
                        <span style='color:#ea580c; font-weight:bold; font-size:18px; margin-left:10px;'>જવાબ: 2/5</span>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:10px; border-radius:5px; border-left:4px solid #3b82f6; margin-top:10px;'>
                        <b>નોંધ:</b> તમે આને બીજી રીતે પણ ગણી શકો છો: <br>
                        P(ઘટના ન બને) = 1 - P(ઘટના બને)<br>
                        P(લીલો ન હોય) = 1 - (3/5) = <b>2/5</b>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 5: વર્ગ અને વર્ગમૂળ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "વર્ગ અને વર્ગમૂળ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "જેની એક સંખ્યા 12 હોય તેવી પાયથાગોરિયન ત્રિપુટી (Pythagorean triplet) શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>સામાન્ય રીતે પાયથાગોરિયન ત્રિપુટી <b>2m, m&sup2; - 1, અને m&sup2; + 1</b> સ્વરૂપે હોય છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:16px; color:#1e3a8a; line-height:2;'>
                        ધારો કે <b>2m = 12</b> <br>
                        &there4; m = 12 / 2 = <b style='color:#be123c;'>6</b> <br><br>
                        
                        હવે, m ની આ કિંમત બાકીના બે સૂત્રોમાં મૂકીએ:<br>
                        <b>બીજી સંખ્યા (m&sup2; - 1):</b><br>
                        = (6)&sup2; - 1<br>
                        = 36 - 1 = <b style='color:#047857;'>35</b><br><br>
                        
                        <b>ત્રીજી સંખ્યા (m&sup2; + 1):</b><br>
                        = (6)&sup2; + 1<br>
                        = 36 + 1 = <b style='color:#ea580c;'>37</b><br>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:18px; color:#1d4ed8;'>
                            આમ, માંગેલી પાયથાગોરિયન ત્રિપુટી 12, 35 અને 37 છે.
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>પાયથાગોરિયન ત્રિપુટી માટે બસ 3 જ નામ યાદ રાખો: <b>2m, m&sup2;-1, m&sup2;+1</b>. જો પ્રશ્નમાં આપેલી સંખ્યા 'બેકી (Even)' હોય, તો તેને હંમેશા <b>2m</b> બરાબર જ ધારી લેવી, જેથી ગણતરી સહેલી થઈ જાય!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "અવિભાજ્ય અવયવીકરણની રીતે 6400 નું વર્ગમૂળ શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>અવિભાજ્ય અવયવો પાડીને આપણે બબ્બે (2-2) ની જોડી બનાવીશું.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:20px; align-items:center;'>
                        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; min-width:150px;'>
                            <table style='width:100%; text-align:center; border-collapse: collapse; font-family:monospace; font-size:16px;'>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>6400</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>3200</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>1600</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>800</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>400</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>200</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>100</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>50</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#ea580c;'>5</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>25</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; border-bottom:1px solid #cbd5e1; padding:3px; color:#ea580c;'>5</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>5</td></tr>
                                <tr><td style='border-right:2px solid #16a34a; padding:3px;'></td><td style='padding:3px;'>1</td></tr>
                            </table>
                        </div>
                        
                        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #16a34a; flex-grow:1; font-size:16px; color:#1e3a8a; line-height:2;'>
                            6400 = <u>2 &times; 2</u> &times; <u>2 &times; 2</u> &times; <u>2 &times; 2</u> &times; <u>2 &times; 2</u> &times; <u>5 &times; 5</u><br><br>
                            <span style='color:#64748b; font-size:14px;'>(દરેક જોડીમાંથી એક-એક સંખ્યા લેતા)</span><br>
                            &radic;6400 = 2 &times; 2 &times; 2 &times; 2 &times; 5<br>
                            <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                                &radic;6400 = 80
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir ની સુપર ફાસ્ટ ટ્રીક (હેતુલક્ષી પ્રશ્નો માટે):</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'>આવડો મોટો દાખલો ગણવાની જરૂર જ નથી! જો પાછળ <b>બે મીંડા (00)</b> હોય તો વર્ગમૂળમાં તેનું <b>એક મીંડું (0)</b> થઈ જાય. અને આગળ શું છે? <b>64</b>! 64 કોનો વર્ગ છે? <b>8</b> નો! <br>જવાબ સીધો: <b>8 અને 0 = 80!</b></p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5",
                question: "90 ને એવી નાનામાં નાની કઈ સંખ્યા વડે ગુણવાથી તે પૂર્ણવર્ગ બને? નવી પૂર્ણવર્ગ સંખ્યાનું વર્ગમૂળ પણ શોધો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>જો કોઈ સંખ્યા પૂર્ણવર્ગ ન હોય, તો તેના અવયવોમાં કોઈક સંખ્યાની <b>જોડી ખૂટતી</b> હશે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:16px; color:#1e3a8a; line-height:2;'>
                        પ્રથમ 90 ના અવયવો પાડીએ:<br>
                        90 = 2 &times; 45 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;= 2 &times; 3 &times; 15 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;= <b style='color:#be123c;'>2</b> &times; <u>3 &times; 3</u> &times; <b style='color:#be123c;'>5</b><br><br>

                        <span style='color:#64748b; font-size:14px;'>(અહીં 3 ની જોડી બને છે, પણ 2 અને 5 ની જોડી બનતી નથી.)</span><br>
                        પૂર્ણવર્ગ બનાવવા માટે એક '2' અને એક '5' ખૂટે છે.<br>
                        તેથી ગુણવી પડતી સંખ્યા = 2 &times; 5 = <b style='color:#047857;'>10</b><br><br>

                        <b>નવી પૂર્ણવર્ગ સંખ્યા:</b><br>
                        = 90 &times; 10 = <b style='color:#0284c7;'>900</b><br><br>
                        
                        <b>નવી સંખ્યાનું વર્ગમૂળ:</b><br>
                        &radic;900 = &radic;(3 &times; 3 &times; 10 &times; 10) = 3 &times; 10 = <b style='color:#1d4ed8;'>30</b>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 9",
                question: "ભાગાકારની રીતે 729 નું વર્ગમૂળ શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#334155;'><b>સ્ટેપ 1:</b> પાછળથી (જમણી બાજુથી) બબ્બે અંકોની જોડી પર બાર (&oline;) મૂકો. (અહીં $\\overline{7}$ $\\overline{29}$).</p>
                    <p style='margin:0 0 10px 0; color:#334155;'><b>સ્ટેપ 2:</b> 7 માટે એવો વર્ગ શોધો જે 7 થી વધે નહીં. (2&sup2; = 4 ચાલે, 3&sup2; = 9 વધી જાય).</p>

                    <div style='display:flex; justify-content:center; margin:20px 0;'>
                        <div style='font-family:monospace; font-size:18px; line-height:1.5; color:#1e3a8a; border:2px solid #94a3b8; padding:15px; border-radius:8px; background-color:#f8fafc;'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='color:#be123c;'>2&nbsp;&nbsp;&nbsp;7</b><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-------<br>
                            &nbsp;&nbsp;&nbsp;<b style='color:#be123c;'>2</b> |&nbsp;&nbsp;7&nbsp;&nbsp;29<br>
                            &nbsp;<b style='color:#047857;'>+ 2</b> | -4<br>
                            &nbsp;--- |-------<br>
                            &nbsp;&nbsp;<b style='color:#ea580c;'>4</b><b style='color:#be123c;'>7</b> |&nbsp;&nbsp;3&nbsp;&nbsp;29 &nbsp;&nbsp;<span style='font-family:sans-serif; font-size:12px; color:#64748b;'>(ઉપરથી આખી જોડી 29 નીચે ઉતારી)</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;-3&nbsp;&nbsp;29 &nbsp;&nbsp;<span style='font-family:sans-serif; font-size:12px; color:#64748b;'>(4 ની પાછળ 7 મૂકી 7 વડે ગુણતા 47 &times; 7 = 329)</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-------<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;0<br>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                        &radic;729 = 27
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 10",
                question: "5607 માંથી કઈ નાનામાં નાની સંખ્યા બાદ કરવાથી મળતી નવી સંખ્યા પૂર્ણવર્ગ બને? નવી પૂર્ણવર્ગ સંખ્યાનું વર્ગમૂળ પણ શોધો.", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#86198f;'><b>બાદબાકી કે સરવાળાની</b> વાત આવે ત્યારે હંમેશા <b>ભાગાકારની રીત</b> નો જ ઉપયોગ કરવો.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:20px; align-items:center;'>
                        <div style='font-family:monospace; font-size:16px; line-height:1.5; color:#1e3a8a; border:2px solid #f0abfc; padding:15px; border-radius:8px; background-color:#ffffff;'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='color:#be123c;'>7&nbsp;&nbsp;&nbsp;4</b><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-------<br>
                            &nbsp;&nbsp;&nbsp;<b style='color:#be123c;'>7</b> |&nbsp;56&nbsp;&nbsp;07<br>
                            &nbsp;<b style='color:#047857;'>+ 7</b> | -49<br>
                            &nbsp;--- |-------<br>
                            &nbsp;&nbsp;<b style='color:#ea580c;'>14</b><b style='color:#be123c;'>4</b>|&nbsp;&nbsp;7&nbsp;&nbsp;07 <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;-5&nbsp;&nbsp;76 &nbsp;&nbsp;<span style='font-family:sans-serif; font-size:12px; color:#64748b;'>(144 &times; 4 = 576)</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-------<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<b style='color:#eab308;'>1&nbsp;&nbsp;31</b> &nbsp;&nbsp;<span style='font-family:sans-serif; font-size:14px; color:#ca8a04; font-weight:bold;'>(શેષ)</span><br>
                        </div>

                        <div style='background-color:#ffffff; padding:15px; border-radius:8px; flex-grow:1; font-size:15px; color:#334155; line-height:2; border:1px dashed #d946ef;'>
                            અહીં ભાગાકાર કરતા શેષ <b>131</b> વધે છે. જો આ શેષ ન હોત તો સંખ્યા પૂર્ણવર્ગ હોત.<br>
                            &there4; બાદ કરવી પડતી સંખ્યા = <b style='color:#be123c;'>131</b><br><br>
                            
                            <b>નવી પૂર્ણવર્ગ સંખ્યા:</b><br>
                            = 5607 - 131 = <b style='color:#047857;'>5476</b><br><br>
                            
                            અને ભાગાકારમાં જે ઉપર જવાબ આવ્યો તે જ એનું વર્ગમૂળ કહેવાય!<br>
                            &there4; &radic;5476 = <b style='color:#1d4ed8;'>74</b>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 6: ઘન અને ઘનમૂળ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "ઘન અને ઘનમૂળ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "શું 243 પૂર્ણઘન સંખ્યા છે?", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:10px; border-radius:8px;'>
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <!-- 3D Cube representation -->
                            <polygon points="40,40 80,40 100,20 60,20" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="40,40 40,80 80,80 80,40" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="80,40 100,20 100,60 80,80" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
                            <text x="50" y="65" fill="#0369a1" font-size="14" font-weight="bold">n&sup3;</text>
                        </svg>
                    </div>

                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>કોઈપણ સંખ્યા પૂર્ણઘન ત્યારે જ બને, જ્યારે તેના અવિભાજ્ય અવયવોની <b>ત્રણ-ત્રણની જોડી</b> બનતી હોય.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:16px; color:#1e3a8a; line-height:2;'>
                        243 ના અવિભાજ્ય અવયવો પાડીએ:<br>
                        243 = 3 &times; 81 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3 &times; 3 &times; 27 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <u>3 &times; 3 &times; 3</u> &times; <b style='color:#be123c;'>3 &times; 3</b><br><br>
                        
                        અહીં પ્રથમ 3 ની ત્રણની એક જોડી બને છે, પરંતુ બાકીના 3 ની ત્રણની જોડી બનતી નથી (માત્ર બે જ વખત 3 છે).<br>
                        <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:18px; color:#9f1239;'>
                            તેથી, 243 એ પૂર્ણઘન સંખ્યા નથી.
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>વર્ગ અને ઘન ના દાખલા વચ્ચેનો સૌથી મોટો તફાવત: <br><b>વર્ગમાં</b> આપણે <b>બબ્બે (2)</b> ની જોડી બનાવીએ છીએ, જ્યારે <b>ઘનમાં</b> આપણે <b>ત્રણ-ત્રણ (3)</b> ની જોડી બનાવવી પડે!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "392 ને એવી કઈ નાનામાં નાની સંખ્યા વડે ગુણવાથી મળતી સંખ્યા પૂર્ણઘન બને?", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>જ્યારે ગુણવાની વાત આવે, ત્યારે આપણે એ જોવાનું કે ત્રણની જોડી પૂરી કરવામાં <b>શું ખૂટે છે?</b></p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2;'>
                        પ્રથમ 392 ના અવયવો પાડીએ:<br>
                        392 = 2 &times; 196 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 2 &times; 2 &times; 98 <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <u>2 &times; 2 &times; 2</u> &times; <b style='color:#ea580c;'>7 &times; 7</b><br><br>

                        <span style='color:#64748b; font-size:14px;'>(અહીં 2 ની ત્રણની જોડી બને છે, પણ 7 બે જ વખત છે, એટલે કે એક વખત 7 ખૂટે છે.)</span><br>
                        જો આપણે આ સંખ્યાને <b>7</b> વડે ગુણીએ, તો 7 ની પણ જોડી (7 &times; 7 &times; 7) પૂરી થઈ જાય.<br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:18px; color:#1d4ed8;'>
                            &there4; ગુણવી પડતી નાનામાં નાની સંખ્યા = 7
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "53240 ને એવી કઈ નાનામાં નાની સંખ્યા વડે ભાગવાથી મળતી સંખ્યા પૂર્ણઘન બને?", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>જ્યારે ભાગવાની વાત આવે, ત્યારે આપણે એ જોવાનું કે ત્રણની જોડી બન્યા પછી <b>વધારાનું (નડતરરૂપ) શું છે?</b></p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:16px; color:#1e3a8a; line-height:2;'>
                        53240 ના અવિભાજ્ય અવયવો:<br>
                        53240 = <u>2 &times; 2 &times; 2</u> &times; <u>11 &times; 11 &times; 11</u> &times; <b style='color:#be123c;'>5</b><br><br>

                        <span style='color:#64748b; font-size:14px;'>(અહીં 2 અને 11 ની ત્રણની જોડી બને છે, પરંતુ 5 ની જોડી બનતી નથી. આ 5 વધારાનો છે.)</span><br>
                        જો આપણે આ સંખ્યાને <b>5</b> વડે ભાગી નાખીએ, તો તે 5 દૂર થઈ જશે અને બાકી વધેલી સંખ્યા પૂર્ણઘન બની જશે.<br>
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:18px; color:#14532d;'>
                            &there4; ભાગવી પડતી નાનામાં નાની સંખ્યા = 5
                        </div>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir ની મસ્ત ટ્રીક યાદ રાખો:</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'>બંને પ્રકારના દાખલામાં લોચો ના પડે તે માટે આટલું યાદ રાખો: <br>👉 <b>ગુણવાનું</b> કહે તો: ત્રણ ની જોડી કરવામાં <b>જેટલા ખૂટતા હોય</b> તેટલા સામેથી આપી દો.<br>👉 <b>ભાગવાનું</b> કહે તો: ત્રણ ની જોડી પૂરી થયા પછી જે પણ છૂટક વધે (વધારાનું હોય) તે <b>બધું જ કાઢી નાખો</b>!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5",
                question: "અવિભાજ્ય અવયવીકરણની રીતે 8000 નું ઘનમૂળ શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:20px; align-items:center;'>
                        <div style='background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #cbd5e1; min-width:150px;'>
                            <table style='width:100%; text-align:center; border-collapse: collapse; font-family:monospace; font-size:16px;'>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>8000</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>4000</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#be123c;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>2000</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#047857;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>1000</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#047857;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>500</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#047857;'>2</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>250</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#ea580c;'>5</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>125</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#ea580c;'>5</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>25</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; border-bottom:1px solid #cbd5e1; padding:3px; color:#ea580c;'>5</td><td style='border-bottom:1px solid #cbd5e1; padding:3px;'>5</td></tr>
                                <tr><td style='border-right:2px solid #3b82f6; padding:3px;'></td><td style='padding:3px;'>1</td></tr>
                            </table>
                        </div>
                        
                        <div style='background-color:#ffffff; padding:15px; border-radius:8px; flex-grow:1; font-size:16px; color:#1e3a8a; line-height:2;'>
                            8000 ના અવયવોમાં ત્રણ-ત્રણ ની જોડી બનાવતા:<br>
                            8000 = <span style='color:#be123c;'><u>2 &times; 2 &times; 2</u></span> &times; <span style='color:#047857;'><u>2 &times; 2 &times; 2</u></span> &times; <span style='color:#ea580c;'><u>5 &times; 5 &times; 5</u></span><br><br>
                            
                            <span style='color:#64748b; font-size:14px;'>(ઘનમૂળ કાઢતી વખતે દરેક ત્રણની જોડીમાંથી માત્ર એક જ અંક લેવો)</span><br>
                            &there4; &sup3;&radic;8000 = <span style='color:#be123c;'>2</span> &times; <span style='color:#047857;'>2</span> &times; <span style='color:#ea580c;'>5</span><br>
                            
                            <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                                &sup3;&radic;8000 = 20
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની ડાયરેક્ટ શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>આટલો લાંબો દાખલો? જરાય નહિ! મીંડા વાળી સંખ્યા માટે સુપર ટ્રીક:<br>
                        પાછળ <b>ત્રણ મીંડા (000)</b> હોય તો તેનું ઘનમૂળ <b>એક મીંડું (0)</b> થઈ જાય. આગળ વધ્યા <b>8</b>. 8 એ કોનો ઘન છે? <b>2</b> નો.<br>
                        બસ તો જવાબ આવી ગયો: <b>2</b> અને <b>0</b> = <b>20</b>!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6 (પરીક્ષામાં વારંવાર પૂછાતી ટ્રીક)",
                question: "અનુમાનની રીતે (વગર ગણતરીએ) 17576 નું ઘનમૂળ શોધો.", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#86198f;'>મોટી સંખ્યાનું ઘનમૂળ માત્ર 2 સેકન્ડમાં શોધી શકાય છે! આ માટે 1 થી 10 ના ઘન મોઢે હોવા જોઈએ.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #f0abfc; font-size:16px; color:#1e3a8a; line-height:2;'>
                        <b>સ્ટેપ 1:</b> પાછળથી (જમણી બાજુથી) 3 અંકોનું એક જૂથ બનાવો. બાકી રહેલા અંકોનું બીજું જૂથ બનાવો.<br>
                        સંખ્યા: <b>17</b> &nbsp;&nbsp;|&nbsp;&nbsp; <b style='color:#ea580c;'>576</b><br><br>

                        <b>સ્ટેપ 2 (પાછળનો અંક શોધવા):</b><br>
                        પહેલું જૂથ <b style='color:#ea580c;'>576</b> છે. તેનો એકમનો અંક <b>6</b> છે.<br>
                        જે સંખ્યાના એકમનો અંક 6 હોય, તેના ઘનમૂળનો એકમનો અંક પણ હંમેશા <b>6</b> જ હોય!<br>
                        (તેથી ઘનમૂળનો પાછળનો અંક = <b style='color:#ea580c;'>6</b>)<br><br>

                        <b>સ્ટેપ 3 (આગળનો અંક શોધવા):</b><br>
                        બીજું જૂથ <b>17</b> છે.<br>
                        17 એ કોના-કોના ઘનની વચ્ચે આવે? <br>
                        2 નો ઘન (8) અને 3 નો ઘન (27) ની વચ્ચે આવે છે. (8 &lt; 17 &lt; 27).<br>
                        આ બંનેમાંથી નાની સંખ્યા કઈ? <b>2</b>.<br>
                        (તેથી ઘનમૂળનો આગળનો અંક = <b style='color:#0284c7;'>2</b>)<br>

                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            &sup3;&radic;17576 = 26
                        </div>
                    </div>

                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb; margin-top:15px;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની મેજિક ટ્રીક (એકમનો અંક યાદ રાખવા માટે):</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>
                        બધા અંકો યાદ રાખવાની જરૂર નથી! આ કવિતા યાદ રાખો:<br>
                        <b>"2 નો 8, અને 8 નો 2...<br>
                        3 નો 7, અને 7 નો 3...<br>
                        બાકી બધામાં એનો એ જ અંક!"</b><br>
                        <i>(એટલે કે 1, 4, 5, 6, 9 અને 0 જોડે એ જ અંક પાછો આવે!)</i> અહીં 57<b>6</b> માં 6 હતો, એટલે છેલ્લે 6 જ આવ્યો!</p>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 7: રાશિઓની તુલના (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "રાશિઓની તુલના (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "એક વસ્તુની છાપેલી કિંમત ₹ 840 છે અને તે ₹ 714 માં વેચાય છે. તો વળતર (Discount) અને વળતરની ટકાવારી શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <div style='text-align:center; margin-bottom:15px;'>
                        <svg width="220" height="120" viewBox="0 0 220 120">
                            <!-- Price Tag -->
                            <polygon points="10,60 50,20 180,20 180,100 50,100" fill="#fef2f2" stroke="#be123c" stroke-width="3"/>
                            <circle cx="45" cy="60" r="5" fill="#ffffff" stroke="#be123c"/>
                            <path d="M 10 60 Q -10 30 20 10" fill="none" stroke="#94a3b8" stroke-width="2"/>
                            
                            <text x="70" y="45" fill="#64748b" font-size="14" text-decoration="line-through">₹ 840</text>
                            <text x="70" y="75" fill="#be123c" font-size="22" font-weight="bold">₹ 714</text>
                            <text x="130" y="72" fill="#ea580c" font-size="14" font-weight="bold">SALE!</text>
                        </svg>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:15px; color:#1e3a8a; line-height:2;'>
                        <b style='color:#0369a1;'>સ્ટેપ 1: વળતર (Discount) શોધવું</b><br>
                        વળતર = છાપેલી કિંમત - વેચાણ કિંમત<br>
                        વળતર = 840 - 714 = <b style='color:#be123c;'>₹ 126</b><br><br>

                        <b style='color:#0369a1;'>સ્ટેપ 2: વળતરની ટકાવારી (%) શોધવી</b><br>
                        ટકાવારી = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>વળતર</div>
                            <div style='padding:0 3px;'>છાપેલી કિંમત</div>
                        </div>
                        &times; 100 <br>
                        
                        &there4; ટકાવારી = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>126</div>
                            <div style='padding:0 3px;'>840</div>
                        </div>
                        &times; 100 <br>
                        
                        <span style='color:#64748b; font-size:14px;'>(છેદ ઉડાડતા: શૂન્ય શૂન્ય કટ થશે, અને 14 ના ઘડિયાથી ભાગ ચાલશે)</span><br>
                        &there4; ટકાવારી = (126 / 84) &times; 10 = <b style='color:#047857;'>15 %</b>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:18px; color:#1d4ed8;'>
                            જવાબ: વળતર = ₹ 126, અને વળતરની ટકાવારી = 15%
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>ટકાવારી શોધતી વખતે એક વાત મગજમાં ફિટ કરી લો: <br><b>વળતર (Discount) હંમેશા 'છાપેલી કિંમત' પર જ ગણાય!</b> તેથી છેદમાં ક્યારેય વેચાણ કિંમત નહિ આવે, હંમેશા મોટી કિંમત (છાપેલી) જ છેદમાં બેસશે!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "એક દુકાનમાં એક જોડી રોલર સ્કેટ્સની કિંમત ₹ 450 હતી. તેના પર 5% GST લેવામાં આવ્યો. તો બિલની કુલ રકમ શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        રોલર સ્કેટ્સની કિંમત = ₹ 450 <br>
                        GST નો દર = 5% <br><br>

                        <b style='color:#047857;'>સ્ટેપ 1: GST ની રકમ શોધીએ</b><br>
                        GST = 450 ના 5% <br>
                        GST = 450 &times; 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>5</div>
                            <div style='padding:0 3px;'>100</div>
                        </div>
                        <br>
                        
                        <span style='color:#64748b; font-size:14px;'>(શૂન્ય ઉડાડીએ અને ગુણાકાર કરીએ)</span><br>
                        GST = (45 &times; 5) / 10 = 225 / 10 = <b style='color:#ea580c;'>₹ 22.50</b><br><br>

                        <b style='color:#047857;'>સ્ટેપ 2: બિલની કુલ રકમ શોધીએ</b><br>
                        કુલ રકમ = મૂળ કિંમત + GST <br>
                        કુલ રકમ = 450 + 22.50 <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            કુલ રકમ = ₹ 472.50
                        </div>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir ની કોન્સેપ્ટ ક્લિયર ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'><b>GST / Tax</b> એ સરકારને ચૂકવવાનો હોય છે, એટલે કે તે ખિસ્સામાંથી જતો વધારાનો ખર્ચ છે. તેથી તે હંમેશા મૂળ કિંમતમાં <b>ઉમેરાય (+)</b>. જ્યારે <b>વળતર (Discount)</b> આપણો ફાયદો છે, તેથી તે હંમેશા <b>બાદ (-)</b> થાય!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "₹ 12,600 પર 10% પ્રતિ વર્ષના દરે 2 વર્ષ માટે ચક્રવૃદ્ધિ વ્યાજ (Compound Interest) શોધો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'><b>ચક્રવૃદ્ધિ વ્યાજ</b> માટે આપણે વ્યાજમુદ્દલ (Amount - A) નું સૂત્ર વાપરીશું.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:15px; color:#1e3a8a; line-height:2.2;'>
                        અહીં મુદ્દલ (P) = 12,600 <br>
                        વ્યાજનો દર (R) = 10% <br>
                        મુદત (n) = 2 વર્ષ <br><br>

                        <b>સૂત્ર: A = P &times; (1 + R/100)<sup>n</sup></b><br>
                        A = 12600 &times; ( 1 + 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>10</div>
                            <div style='padding:0 3px;'>100</div>
                        </div>
                        )<sup>2</sup><br>
                        
                        <span style='color:#64748b; font-size:14px;'>(10/100 માંથી શૂન્ય ઉડાડતા 1/10 વધે. કૌંસનો લ.સા.અ. લેતા 11/10 થશે)</span><br>
                        A = 12600 &times; (11/10)<sup>2</sup> <br>
                        A = 12600 &times; 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>11</div>
                            <div style='padding:0 3px;'>10</div>
                        </div>
                        &times; 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>11</div>
                            <div style='padding:0 3px;'>10</div>
                        </div>
                        <br>
                        
                        <span style='color:#64748b; font-size:14px;'>(છેદના 2 મીંડા અને 12600 ના 2 મીંડા કટ થશે)</span><br>
                        A = 126 &times; 11 &times; 11 <br>
                        A = 126 &times; 121 = <b style='color:#0284c7;'>₹ 15,246</b> (આ વ્યાજમુદ્દલ છે)<br><br>

                        <b>ચક્રવૃદ્ધિ વ્યાજ (CI) = A - P</b><br>
                        CI = 15246 - 12600 <br>
                        <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#9f1239;'>
                            &there4; ચક્રવૃદ્ધિ વ્યાજ = ₹ 2,646
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb; margin-top:15px;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની 'સુપર 2-1' ટ્રીક (હેતુલક્ષી પ્રશ્નો માટે):</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>
                        જ્યારે પણ <b>2 વર્ષનું ચક્રવૃદ્ધિ વ્યાજ</b> શોધવાનું હોય, ત્યારે સૂત્રમાં સમય ન બગાડો! <b>2:1</b> નો રેશિયો યાદ રાખો!<br>
                        <b>સ્ટેપ 1:</b> 12600 ના 10% કાઢો &rarr; <b>1260</b><br>
                        <b>સ્ટેપ 2:</b> મળેલા 1260 ના ફરીથી 10% કાઢો &rarr; <b>126</b><br>
                        હવે પહેલાને <b>2</b> વડે અને બીજાને <b>1</b> વડે ગુણીને સરવાળો કરો!<br>
                        (1260 &times; 2) + (126 &times; 1) = 2520 + 126 = <b>2646</b>. સીધો જ જવાબ!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "એક ટીવી ₹ 21,000 માં ખરીદવામાં આવ્યું. 1 વર્ષ પછી તેની કિંમતમાં 5% નો ઘટાડો (Depreciation) થાય છે. તો 1 વર્ષ પછી ટીવીની કિંમત શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <div style='text-align:center; margin-bottom:15px; background-color:#f8fafc; padding:10px; border-radius:8px;'>
                        <svg width="150" height="120" viewBox="0 0 150 120">
                            <!-- TV shape -->
                            <rect x="20" y="20" width="110" height="70" rx="5" fill="#334155" stroke="#1e293b" stroke-width="3"/>
                            <rect x="30" y="30" width="90" height="50" fill="#bae6fd"/>
                            <!-- Stand -->
                            <polygon points="65,90 85,90 95,110 55,110" fill="#475569"/>
                            <line x1="75" y1="90" x2="75" y2="100" stroke="#1e293b" stroke-width="4"/>
                            <!-- Down Arrow indicating depreciation -->
                            <path d="M 110 55 L 110 85 L 100 85 L 115 105 L 130 85 L 120 85 L 120 55 Z" fill="#ef4444"/>
                            <text x="135" y="70" fill="#ef4444" font-weight="bold" font-size="14">-5%</text>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2;'>
                        <b style='color:#be123c;'>અવમૂલ્યન (ઘટાડો)</b> એટલે વસ્તુની કિંમત સમય જતાં ઓછી થવી. (જેમ કે વાહન કે ઇલેક્ટ્રોનિક્સ).<br>
                        
                        ટીવીની મૂળ કિંમત = ₹ 21,000 <br>
                        કિંમતમાં ઘટાડો = 5% <br><br>

                        <b>સ્ટેપ 1: ઘટાડાની રકમ શોધીએ</b><br>
                        ઘટાડો = 21,000 ના 5% <br>
                        = 21000 &times; (5 / 100) <br>
                        = 210 &times; 5 <br>
                        = <b style='color:#ea580c;'>₹ 1,050</b> (આટલા રૂપિયા કિંમત ઓછી થશે)<br><br>

                        <b>સ્ટેપ 2: 1 વર્ષ પછીની નવી કિંમત</b><br>
                        નવી કિંમત = મૂળ કિંમત - ઘટાડો <br>
                        નવી કિંમત = 21000 - 1050 <br>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            1 વર્ષ પછી ટીવીની કિંમત = ₹ 19,950
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 8: બૈજિક પદાવલિઓ અને નિત્યસમો (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "8": {
        "chapterName": "પ્રકરણ 8",
        "chapterTitle": "બૈજિક પદાવલિઓ અને નિત્યસમો (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "સરવાળો કરો: 7x² - 4x + 5 અને 9x - 10", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-size:15px;'>સરવાળો માત્ર <b>સજાતીય પદો (જેના ચલ અને ચલની ઘાત સરખા હોય)</b> વચ્ચે જ થાય છે. આપણે પદોને ઊભી હરોળમાં સરખા પદોની નીચે સરખા પદો આવે તેમ ગોઠવીશું.</p>
                    
                    <div style='font-family:monospace; font-size:18px; line-height:1.8; color:#1e3a8a; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8; display:inline-block; margin-top:10px;'>
                        &nbsp;&nbsp;7x&sup2; - &nbsp;4x + &nbsp;5<br>
                        <b style='color:#047857;'>+</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9x - 10<br>
                        -----------------<br>
                        <b style='color:#be123c;'>&nbsp;&nbsp;7x&sup2; + &nbsp;5x - &nbsp;5</b>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:10px; border-radius:8px; border-left:4px solid #ca8a04; margin-top:15px; font-size:14px; color:#854d0e;'>
                        <b>સમજૂતી:</b><br>
                        &rarr; 7x&sup2; ની નીચે કોઈ સજાતીય પદ નથી, તેથી તે એમને એમ રહેશે.<br>
                        &rarr; (-4x) અને (+9x) માં વિરુદ્ધ નિશાની હોવાથી બાદબાકી થશે. (9 - 4 = 5x). મોટા પદની નિશાની (+) આવશે.<br>
                        &rarr; (+5) અને (-10) ની પણ બાદબાકી થશે. (10 - 5 = -5).
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "બાદબાકી કરો: 7x² - 4xy + 8y² + 5x - 3y માંથી 5x² - 4y² + 6y - 3 બાદ કરો.", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px; overflow-x:auto;'>
                    <h4 style='color:#a21caf; margin:0 0 10px 0;'>🔥 Nitesh Sir નો બાદબાકીનો ગોલ્ડન રૂલ:</h4>
                    <p style='margin:0 0 15px 0; font-size:14px; color:#86198f;'>જ્યારે પણ બાદબાકી કરવાની હોય, ત્યારે <b>નીચે આવતી આખી બહુપદીની નિશાનીઓ બદલી નાખવાની!</b> (+ નું - અને - નું + કરી દેવાનું).</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #f0abfc;'>
                        <div style='font-family:monospace; font-size:16px; line-height:2; color:#1e3a8a; white-space:nowrap;'>
                            &nbsp;&nbsp;7x&sup2; - 4xy + 8y&sup2; + 5x - 3y + 0<br>
                            &nbsp;&nbsp;5x&sup2; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 4y&sup2; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 6y - 3<br>
                            <span style='color:#ea580c; font-weight:bold;'>( - ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( + ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( - )( + ) &nbsp;&nbsp;&larr; નવી નિશાનીઓ</span><br>
                            ------------------------------------<br>
                            <b style='color:#047857;'>&nbsp;&nbsp;2x&sup2; - 4xy + 12y&sup2; + 5x - 9y + 3</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "ગુણાકાર કરો: (3x) × (4y) × (5z)", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; color:#334155; font-size:15px;'>એકપદી નો એકપદી સાથે ગુણાકાર. <br><b>રીત:</b> સંખ્યા નો ગુણાકાર સંખ્યા સાથે અને ચલ (ABCD) નો ગુણાકાર ચલ સાથે કરવો.</p>
                    
                    <div style='font-size:16px; color:#1e3a8a; line-height:2.2; background-color:#f8fafc; padding:15px; border-radius:8px;'>
                        = (3 &times; 4 &times; 5) &times; (x &times; y &times; z)<br>
                        = (12 &times; 5) &times; (xyz)<br>
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = 60xyz
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "ગુણાકાર કરો: a(a² + a + 1) + 5 અને a = 0 માટે તેની કિંમત શોધો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <b style='color:#9a3412;'>સ્ટેપ 1: સાદું રૂપ (કૌંસ છોડવો)</b><br>
                    <p style='margin:5px 0 15px 0; font-size:15px; color:#334155;'>બહાર રહેલો 'a' કૌંસના ત્રણેય પદો સાથે વારાફરતી ગુણાશે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:16px; color:#1e3a8a; line-height:2;'>
                        = a(a&sup2;) + a(a) + a(1) + 5 <br>
                        = <b style='color:#be123c;'>a&sup3; + a&sup2; + a + 5</b><br><br>
                        
                        <b style='color:#047857;'>સ્ટેપ 2: a = 0 મૂકતા</b><br>
                        = (0)&sup3; + (0)&sup2; + (0) + 5 <br>
                        = 0 + 0 + 0 + 5 <br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = 5
                        </div>
                    </div>
                </div>`
            },
                        { 
                questionNumber: "ઉદાહરણ 10",
                question: "નિત્યસમ (I) નો ઉપયોગ કરી કિંમત શોધો: \n(i) (2x + 3y)² \n(ii) (103)²", 
                answer: `
                <div style='background-color:#ffffff; border:1px solid #cbd5e1; border-radius:10px; overflow-x:auto;'>
                    <div style='background-color:#f8fafc; padding:15px; border-bottom:1px solid #e2e8f0;'>
                        <p style='margin:0; color:#1e3a8a; font-weight:bold;'>નિત્યસમ (I): (a + b)² = a² + 2ab + b²</p>
                    </div>

                    <div style='padding:15px;'>
                        <div style='margin-bottom:25px;'>
                            <h4 style='color:#be123c; margin:0 0 10px 0;'>(i) (2x + 3y)²</h4>
                            <div style='font-size:16px; color:#334155; line-height:2.2; padding-left:10px; border-left:4px solid #be123c;'>
                                અહીં <b>a = 2x</b> અને <b>b = 3y</b> લેતા:<br>
                                = (2x)² + 2(2x)(3y) + (3y)² <br>
                                = <b style='color:#16a34a; font-size:18px;'>4x² + 12xy + 9y²</b>
                            </div>
                        </div>

                        <div style='text-align:center; margin:20px 0;'>
                            <svg width="200" height="150" viewBox="0 0 200 150">
                                <rect x="40" y="20" width="80" height="80" fill="#fee2e2" stroke="#be123c" stroke-width="2"/>
                                <rect x="120" y="20" width="40" height="80" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                                <rect x="40" y="100" width="80" height="30" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                                <rect x="120" y="100" width="40" height="30" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
                                <text x="75" y="65" fill="#be123c" font-size="14" font-weight="bold">a²</text>
                                <text x="130" y="65" fill="#166534" font-size="12">ab</text>
                                <text x="70" y="120" fill="#166534" font-size="12">ab</text>
                                <text x="130" y="120" fill="#1d4ed8" font-size="12" font-weight="bold">b²</text>
                            </svg>
                            <p style='font-size:12px; color:#64748b; margin-top:5px;'>વૈજ્ઞાનિક સમજૂતી: (a+b)² એટલે ક્ષેત્રફળ</p>
                        </div>

                        <div>
                            <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) (103)²</h4>
                            <div style='font-size:16px; color:#334155; line-height:2.2; padding-left:10px; border-left:4px solid #1d4ed8;'>
                                આપણે 103 ને <b>(100 + 3)</b> તરીકે લખી શકીએ.<br>
                                અહીં a = 100 અને b = 3 લેતા:<br>
                                = (100 + 3)² <br>
                                = (100)² + 2(100)(3) + (3)² <br>
                                = 10000 + 600 + 9 <br>
                                = <b style='color:#16a34a; font-size:18px;'>10,609</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#fffbeb; padding:15px; border-top:1px solid #fef3c7;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0;'>🔥 નિતેશ સર ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#92400e;'>
                            જ્યારે પણ ( + ) આખા નો વર્ગ હોય, ત્યારે બસ આટલું યાદ રાખો:<br>
                            <b>"પહેલા પદ નો વર્ગ કરી દો, છેલ્લા પદ નો વર્ગ કરી છેલ્લે મૂકો, અને વચ્ચે ત્રણેય (2, પહેલું અને બીજું પદ) નો ગુણાકાર કરી દો!"</b><br>
                            આ ટ્રીક થી ક્યારેય પદાવલિમાં ભૂલ નહીં પડે!
                        </p>
                    </div>
                </div>`
                  }
            ]
      },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 9: માપન (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "9": {
        "chapterName": "પ્રકરણ 9",
        "chapterTitle": "માપન (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "એક સમલંબ ચતુષ્કોણ આકારના બગીચાની સમાંતર બાજુઓનું માપ 10 મીટર અને 12 મીટર છે, અને તેમની વચ્ચેનું લંબઅંતર 8 મીટર છે. તો આ બગીચાનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; margin-bottom:15px; background-color:#ffffff; padding:15px; border-radius:8px;'>
                        <svg width="220" height="130" viewBox="0 0 220 130">
                            <!-- Trapezium -->
                            <polygon points="60,30 160,30 190,100 30,100" fill="#fef2f2" stroke="#be123c" stroke-width="3"/>
                            <!-- Height -->
                            <line x1="60" y1="30" x2="60" y2="100" stroke="#047857" stroke-width="2" stroke-dasharray="5,5"/>
                            <rect x="60" y="90" width="10" height="10" fill="none" stroke="#047857" stroke-width="1"/>
                            
                            <!-- Labels -->
                            <text x="95" y="20" fill="#1e3a8a" font-weight="bold">a = 10 m</text>
                            <text x="85" y="120" fill="#1e3a8a" font-weight="bold">b = 12 m</text>
                            <text x="25" y="70" fill="#047857" font-weight="bold">h=8 m</text>
                        </svg>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:15px; color:#1e3a8a; line-height:2.2;'>
                        અહીં <b>સમાંતર બાજુઓ</b>: a = 10 m, અને b = 12 m <br>
                        <b>લંબઅંતર (ઊંચાઈ)</b>: h = 8 m <br><br>

                        <b>સમલંબ ચતુષ્કોણનું ક્ષેત્રફળ = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                            <div style='padding:0 3px;'>2</div>
                        </div>
                        &times; h &times; (a + b)</b><br>
                        
                        = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                            <div style='padding:0 3px;'>2</div>
                        </div>
                        &times; 8 &times; (10 + 12)<br>
                        
                        <span style='color:#64748b; font-size:14px;'>(છેદ ઉડાડતા: 2 ચોક 8)</span><br>
                        = 4 &times; (22)<br>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = 88 ચો. મીટર (m&sup2;)
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "એક સમબાજુ ચતુષ્કોણના વિકર્ણોની લંબાઈ 10 cm અને 8 cm છે. તેનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>સમબાજુ ચતુષ્કોણમાં બંને વિકર્ણો એકબીજાને કાટખૂણે દુભાગે છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        અહીં પ્રથમ વિકર્ણ <b>(d&#8321;) = 10 cm</b> <br>
                        બીજો વિકર્ણ <b>(d&#8322;) = 8 cm</b> <br><br>

                        <b>સમબાજુ ચતુષ્કોણનું ક્ષેત્રફળ = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                            <div style='padding:0 3px;'>2</div>
                        </div>
                        &times; d&#8321; &times; d&#8322;</b><br>
                        
                        = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                            <div style='padding:0 3px;'>2</div>
                        </div>
                        &times; 10 &times; 8<br>
                        
                        = 5 &times; 8<br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = 40 cm&sup2;
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની ડાયરેક્ટ શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>આટલું મોટું સૂત્ર લખવાની કોઈ જરૂર નથી! <br>જ્યારે પણ <b>સમબાજુ ચતુષ્કોણના વિકર્ણો</b> આપ્યા હોય, ત્યારે બસ <b>બંનેનો ગુણાકાર કરી અડધા કરી દો!</b><br>
                        (10 &times; 8 = 80... અને 80 ના અડધા = <b>40</b>. રમત પૂરી!)</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "એક લંબઘન ડબ્બાની લંબાઈ 20 cm, પહોળાઈ 15 cm અને ઊંચાઈ 10 cm છે. તેનું કુલ પૃષ્ઠફળ શોધો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>પૃષ્ઠફળ એટલે ડબ્બાની બહારની બધી જ સપાટીઓનું ક્ષેત્રફળ.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:15px; color:#1e3a8a; line-height:2;'>
                        લંબાઈ <b>(l) = 20 cm</b> <br>
                        પહોળાઈ <b>(b) = 15 cm</b> <br>
                        ઊંચાઈ <b>(h) = 10 cm</b> <br><br>

                        <b>લંબઘનનું કુલ પૃષ્ઠફળ = 2(lb + bh + hl)</b><br>
                        = 2 [ (20 &times; 15) + (15 &times; 10) + (10 &times; 20) ]<br>
                        = 2 [ 300 + 150 + 200 ]<br>
                        = 2 [ 650 ]<br>
                        
                        <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#9f1239;'>
                            = 1300 cm&sup2;
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "એક સમઘનની બાજુની લંબાઈ 8 cm છે. તો આ સમઘનનું ઘનફળ (Volume) શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <div style='text-align:center; margin-bottom:15px; background-color:#f8fafc; padding:15px; border-radius:8px;'>
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <!-- 3D Cube -->
                            <polygon points="30,50 80,50 100,30 50,30" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
                            <polygon points="30,50 30,100 80,100 80,50" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
                            <polygon points="80,50 100,30 100,80 80,100" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
                            <text x="50" y="115" fill="#be123c" font-weight="bold">l = 8 cm</text>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2.2;'>
                        ઘનફળ એટલે અંદર સમાતી જગ્યા (કેપેસિટી). સમઘનમાં લંબાઈ, પહોળાઈ અને ઊંચાઈ સરખા જ હોય છે.<br>
                        અહીં <b>l = 8 cm</b><br><br>

                        <b>સમઘનનું ઘનફળ = l&sup3; (લંબાઈ નો ઘન)</b><br>
                        = (8)&sup3;<br>
                        = 8 &times; 8 &times; 8<br>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = 512 cm&sup3;
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "એક નળાકાર ટાંકીની ત્રિજ્યા 7 m અને ઊંચાઈ 10 m છે. તેમાં કેટલા ઘન મીટર પાણી સમાઈ શકે? (π = 22/7 લો)", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px; overflow-x:auto;'>
                    <div style='display:flex; flex-wrap:wrap; gap:20px; align-items:center;'>
                        <div style='background-color:#ffffff; padding:10px; border-radius:8px; border:1px solid #f0abfc; min-width:160px; text-align:center;'>
                            <svg width="140" height="180" viewBox="0 0 140 180">
                                <!-- Top Ellipse -->
                                <ellipse cx="70" cy="30" rx="50" ry="15" fill="#fbcfe8" stroke="#be123c" stroke-width="2"/>
                                <!-- Body -->
                                <path d="M 20 30 L 20 150 A 50 15 0 0 0 120 150 L 120 30" fill="#fdf2f8" stroke="#be123c" stroke-width="2"/>
                                <!-- Radius -->
                                <line x1="70" y1="30" x2="120" y2="30" stroke="#047857" stroke-width="2"/>
                                <text x="75" y="25" fill="#047857" font-weight="bold">r=7 m</text>
                                <!-- Height -->
                                <line x1="130" y1="30" x2="130" y2="150" stroke="#0284c7" stroke-width="2" stroke-dasharray="4"/>
                                <text x="135" y="95" fill="#0284c7" font-weight="bold" font-size="12">h=10</text>
                            </svg>
                        </div>
                        
                        <div style='background-color:#ffffff; padding:15px; border-radius:8px; flex-grow:1; font-size:16px; color:#1e3a8a; line-height:2.2; border:1px dashed #d946ef;'>
                            પાણી સમાવવાની વાત છે, એટલે આપણે <b>ઘનફળ</b> શોધવું પડે.<br>
                            ત્રિજ્યા <b>(r) = 7 m</b><br>
                            ઊંચાઈ <b>(h) = 10 m</b><br><br>

                            <b>નળાકારનું ઘનફળ = &pi;r&sup2;h</b><br>
                            = 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>22</div>
                                <div style='padding:0 3px;'>7</div>
                            </div>
                            &times; 7 &times; 7 &times; 10 <br>
                            
                            <span style='color:#64748b; font-size:14px;'>(એક 7 અંશમાં અને એક છેદમાં કેન્સલ થશે)</span><br>
                            = 22 &times; 7 &times; 10 <br>
                            = 154 &times; 10 <br>
                            
                            <div style='background-color:#fdf4ff; border:2px dashed #c026d3; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#86198f;'>
                                = 1540 m&sup3; 
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb; margin-top:15px;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની ફોર્મ્યુલા માસ્ટર ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>ઘનફળના સૂત્રો ગોખવા પડે છે? જરાય નહિ! <b>કોઈપણ સીધા આકારનું (પ્રિઝમ/નળાકાર) ઘનફળ = પાયાનું ક્ષેત્રફળ &times; ઊંચાઈ.</b><br>
                        નળાકારનો પાયો ગોળ (વર્તુળ) હોય. વર્તુળનું ક્ષેત્રફળ = <b>&pi;r&sup2;</b>.<br>બસ તેને ઊંચાઈ <b>(h)</b> વડે ગુણી નાખો એટલે <b>&pi;r&sup2;h</b> બની ગયું!</p>
                    </div>
                </div>`
            }
        ]
      },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 10: ઘાતાંક અને ઘાત (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "10": {
        "chapterName": "પ્રકરણ 10",
        "chapterTitle": "ઘાતાંક અને ઘાત (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "કિંમત શોધો: \n(i) 2⁻³ \n(ii) (1/3)⁻²", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border:1px solid #bbf7d0; border-radius:8px;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>(i) 2⁻³</h4>
                        <p style='margin:0; font-size:15px; color:#1e3a8a; line-height:2;'>
                            અહીં ઘાત ઋણ (-) છે. <b>(a⁻ᵐ = 1 / aᵐ)</b> ના નિયમ મુજબ:<br>
                            2⁻³ = 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                                <div style='padding:0 3px;'>2³</div>
                            </div>
                            <br>
                            = 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #1e3a8a; padding:0 3px;'>1</div>
                                <div style='padding:0 3px;'>2 &times; 2 &times; 2</div>
                            </div>
                            <br>
                            = <b style='color:#be123c; font-size:18px;'>1/8</b>
                        </p>
                    </div>

                    <div style='background-color:#eff6ff; padding:15px; border:1px solid #bfdbfe; border-radius:8px;'>
                        <h4 style='color:#1e40af; margin:0 0 5px 0;'>(ii) (1/3)⁻²</h4>
                        <p style='margin:0; font-size:15px; color:#1e3a8a; line-height:2;'>
                            અહીં આખો અપૂર્ણાંક કૌંસમાં છે અને ઘાત ઋણ છે.<br>
                            = (3/1)² <span style='color:#64748b; font-size:14px;'>(અંશ અને છેદ ઉલટાવી દીધા)</span><br>
                            = 3² <br>
                            = 3 &times; 3 = <b style='color:#ea580c; font-size:18px;'>9</b>
                        </p>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની 'પલટી મારો' ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>ઘાત ઋણ (માઇનસ) હોય અને તેને ધન (પ્લસ) કરવી હોય તો બસ આધાર ને <b>પલટી મરાવી દો!</b><br>
                        જો સંખ્યા અંશમાં હોય તો તેને છેદમાં લઈ જાવ, અને છેદમાં હોય તો અંશમાં લાવો. એટલે નિશાની ઓટોમેટિક બદલાઈ જશે!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "સાદું રૂપ આપો અને પરિણામને ધન ઘાતાંક સ્વરૂપે દર્શાવો: (-4)⁵ × (-4)⁻¹⁰", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#334155; font-size:15px;'><b>નિયમ:</b> જો આધાર સરખા હોય અને વચ્ચે ગુણાકારનો સંબંધ હોય, તો <b>ઘાતાંકોનો સરવાળો</b> થાય. <b>(aᵐ &times; aⁿ = aᵐ⁺ⁿ)</b></p>
                    
                    <div style='font-size:16px; color:#1e3a8a; line-height:2.2; background-color:#f8fafc; padding:15px; border-radius:8px;'>
                        અહીં આધાર <b>(-4)</b> સમાન છે.<br>
                        = (-4)<sup>5 + (-10)</sup> <br>
                        = (-4)<sup>5 - 10</sup> <br>
                        = <b style='color:#be123c;'>(-4)⁻⁵</b><br><br>

                        <span style='color:#64748b; font-size:14px;'>(હવે જવાબ <b>ધન ઘાતાંક</b> માં માંગ્યો છે, તેથી ઋણ ઘાત ને ધન કરવા છેદમાં લઈ જઈશું)</span><br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = 
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:2px solid #14532d; padding:0 3px;'>1</div>
                                <div style='padding:0 3px;'>(-4)⁵</div>
                            </div>
                        </div>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#ef4444; text-align:center;'>નોંધ: માત્ર ઘાતની નિશાની બદલાશે, આધાર (-4) તો માઇનસ જ રહેશે.</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "4⁻³ ને આધાર 2 હોય તેવા ઘાત સ્વરૂપમાં દર્શાવો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>આપણને આધાર <b>4</b> આપ્યો છે, અને તેને <b>2</b> ના આધારમાં ફેરવવો છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:16px; color:#1e3a8a; line-height:2;'>
                        આપણે જાણીએ છીએ કે <b>4 = 2²</b> થાય.<br>
                        તેથી, 4⁻³ માં 4 ની જગ્યાએ 2² મૂકતા:<br>
                        
                        = (2²)⁻³ <br><br>

                        <span style='color:#64748b; font-size:14px;'>(નિયમ: ઘાત ની ઘાત નો ગુણાકાર થાય: <b>(aᵐ)ⁿ = aᵐⁿ</b>)</span><br>
                        = 2<sup>(2 &times; -3)</sup> <br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = 2⁻⁶
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5 (પરીક્ષા માટે મોસ્ટ IMP)",
                question: "m શોધો, જેથી (-3)ᵐ⁺¹ × (-3)⁵ = (-3)⁷ થાય.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        પ્રથમ <b>ડાબી બાજુ (L.H.S)</b> નું સાદું રૂપ આપીએ:<br>
                        અહીં આધાર (-3) સમાન છે અને ગુણાકાર છે, તેથી ઘાતનો સરવાળો થશે.<br>
                        
                        (-3)<sup>(m+1) + 5</sup> = (-3)⁷ <br>
                        &there4; (-3)<sup>m + 6</sup> = (-3)⁷ <br><br>

                        <span style='color:#64748b; font-size:14px;'>(હવે બંને બાજુ આધાર (-3) સમાન છે, તેથી માત્ર ઘાતાંકોને જ સરખાવતા)</span><br>
                        &there4; m + 6 = 7 <br>
                        &there4; m = 7 - 6 <br>
                        
                        <div style='background-color:#fff1f2; border:2px dashed #be123c; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#9f1239;'>
                            &there4; m = 1
                        </div>
                    </div>
                    
                    <div style='background-color:#fdf4ff; padding:12px; border-radius:8px; border-left:5px solid #c026d3; margin-top:15px;'>
                        <h4 style='color:#a21caf; margin:0 0 5px 0;'>🔥 Nitesh Sir નો જાદુઈ નિયમ:</h4>
                        <p style='margin:0; font-size:14px; color:#86198f;'>જ્યારે પણ વચ્ચે <b>બરાબર (=)</b> ની નિશાની હોય અને બંને બાજુ <b>આધાર સરખા</b> થઈ જાય, ત્યારે <b>આધાર ને ભૂલી જાવ!</b> માત્ર ઉપર લટકતી ઘાત ને જ નીચે ઉતારીને સમીકરણ બનાવી લો!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 8 (પ્રમાણિત સ્વરૂપ - Standard Form)",
                question: "નીચેની સંખ્યાઓને પ્રમાણિત સ્વરૂપમાં દર્શાવો: \n(i) 0.000035 \n(ii) 4050000", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:12px; overflow-x:auto;'>
                    <div style='background-color:#f8fafc; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) 0.000035</h4>
                        <p style='margin:0; font-size:15px; color:#334155; line-height:2;'>
                            પ્રમાણિત સ્વરૂપમાં દશાંશ ચિહ્ન (પોઈન્ટ) <b>પ્રથમ શૂન્યતર અંક (અહીં 3)</b> પછી હોવું જોઈએ.<br>
                            આપણે પોઈન્ટ ને <b>જમણી બાજુ 5 કદમ</b> ખસેડવો પડશે (3 અને 5 ની વચ્ચે).<br>
                            
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e2e8f0; font-weight:bold; font-size:18px; color:#ea580c; text-align:center;'>
                                3.5 &times; 10⁻⁵
                            </div>
                        </p>
                    </div>

                    <div style='background-color:#f8fafc; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) 4050000</h4>
                        <p style='margin:0; font-size:15px; color:#334155; line-height:2;'>
                            અહીં ક્યાંય પોઈન્ટ નથી, એટલે તે સૌથી છેલ્લે ગણાય (4050000.0).<br>
                            આપણે પોઈન્ટ ને <b>ડાબી બાજુ 6 કદમ</b> ખસેડવો પડશે (4 અને 0 ની વચ્ચે).<br>
                            
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e2e8f0; font-weight:bold; font-size:18px; color:#047857; text-align:center;'>
                                4.05 &times; 10⁶
                            </div>
                        </p>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની 'L-P, R-N' શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>
                        પોઈન્ટ ખસેડવામાં માઇનસ-પ્લસ ની ભૂલ પડે છે? આ મંત્ર યાદ રાખો: <b>L-P, R-N</b>.<br>
                        👉 <b>L</b>eft (ડાબી) બાજુ પોઈન્ટ જાય તો ઘાત <b>P</b>ositive (ધન +) આવે.<br>
                        👉 <b>R</b>ight (જમણી) બાજુ પોઈન્ટ જાય તો ઘાત <b>N</b>egative (ઋણ -) આવે!</p>
                    </div>
                </div>`
            }
        ]
       },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 11: સમપ્રમાણ અને વ્યસ્ત પ્રમાણ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "11": {
        "chapterName": "પ્રકરણ 11",
        "chapterTitle": "સમપ્રમાણ અને વ્યસ્ત પ્રમાણ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "એક શિરોલંબ થાંભલાની ઊંચાઈ 5.6 m છે અને તેના પડછાયાની લંબાઈ 3.2 m છે. તે જ સમયે અન્ય એક થાંભલાના પડછાયાની લંબાઈ 5 m હોય, તો તેની ઊંચાઈ શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0- 10px 0; font-size:15px; color:#334155;'>અહીં જેમ થાંભલાની ઊંચાઈ વધશે, તેમ પડછાયો પણ વધશે. તેથી આ <b>સમપ્રમાણ (Direct Proportion)</b> નો દાખલો છે.</p>
                    
                    <div style='background-color:#ffffff; padding:10px; border-radius:8px; border:1px solid #e0f2fe; margin-bottom:15px;'>
                        <table style='width:100%; border-collapse: collapse; text-align:center;'>
                            <tr style='background-color:#1e3a8a; color:white;'>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>થાંભલાની ઊંચાઈ (m)</th>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>પડછાયાની લંબાઈ (m)</th>
                            </tr>
                            <tr>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>5.6 (x₁)</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>3.2 (y₁)</td>
                            </tr>
                            <tr>
                                <td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>x₂ = ?</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>5.0 (y₂)</td>
                            </tr>
                        </table>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        સમપ્રમાણ માટેનું સૂત્ર: <b>x₁/y₁ = x₂/y₂</b> <br>
                        &there4; 5.6 / 3.2 = x₂ / 5 <br>
                        &there4; x₂ = (5.6 &times; 5) / 3.2 <br>
                        
                        <span style='color:#64748b; font-size:14px;'>(દશાંશ ચિહ્ન દૂર કરતા: 56 &times; 5 / 32)</span><br>
                        &there4; x₂ = (7 &times; 5) / 4 <span style='color:#64748b; font-size:12px;'>(8 સત્તા 56, 8 ચોક 32)</span><br>
                        &there4; x₂ = 35 / 4 <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            ઊંચાઈ = 8.75 m
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "6 પાઈપ એક ટાંકીને 1 કલાક 20 મિનિટમાં ભરી શકે છે. જો તેની જગ્યાએ 5 પાઈપનો ઉપયોગ કરીએ, તો ટાંકી ભરાતા કેટલો સમય લાગશે?", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'><b>તર્ક:</b> જો પાઈપની સંખ્યા ઘટે, તો ટાંકી ભરાતા <b>વધારે સમય</b> લાગશે. એક રાશિ ઘટે અને બીજી વધે, એટલે આ <b>વ્યસ્ત પ્રમાણ (Inverse Proportion)</b> છે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        પ્રથમ સમયને મિનિટમાં ફેરવીએ:<br>
                        1 કલાક 20 મિનિટ = 60 + 20 = <b style='color:#be123c;'>80 મિનિટ</b><br><br>

                        <table style='width:100%; border-collapse: collapse; text-align:center; margin-bottom:15px;'>
                            <tr style='background-color:#16a34a; color:white;'>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>પાઈપની સંખ્યા (x)</th>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>સમય (મિનિટ) (y)</th>
                            </tr>
                            <tr><td style='padding:8px; border:1px solid #cbd5e1;'>6 (x₁)</td><td style='padding:8px; border:1px solid #cbd5e1;'>80 (y₁)</td></tr>
                            <tr><td style='padding:8px; border:1px solid #cbd5e1;'>5 (x₂)</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>y₂ = ?</td></tr>
                        </table>

                        વ્યસ્ત પ્રમાણ માટેનું સૂત્ર: <b>x₁ &times; y₁ = x₂ &times; y₂</b> <br>
                        &there4; 6 &times; 80 = 5 &times; y₂ <br>
                        &there4; y₂ = (6 &times; 80) / 5 <br>
                        &there4; y₂ = 6 &times; 16 <br>
                        
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            y₂ = 96 મિનિટ
                        </div>
                        <p style='text-align:center; margin:5px 0 0 0; color:#64748b;'>(એટલે કે 1 કલાક અને 36 મિનિટ)</p>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>આધાર કાર્ડ જેવું યાદ રાખો! <br>👉 <b>સમપ્રમાણ</b> હોય તો <b>ત્રાજવું (Cross)</b> ગુણાકાર કરો.<br>👉 <b>વ્યસ્ત પ્રમાણ</b> હોય તો <b>સામે-સામે</b> ગુણાકાર કરી ત્રીજી સંખ્યા નીચે મૂકી દો! <br>અહીં: (6 &times; 80) / 5. સીધો જવાબ 96!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "100 વિદ્યાર્થીઓ ધરાવતા છાત્રાલયમાં 20 દિવસ ચાલે તેટલી ભોજન સામગ્રી છે. જો 25 નવા વિદ્યાર્થીઓ આવે, તો આ સામગ્રી કેટલા દિવસ ચાલશે?", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <div style='text-align:center; margin-bottom:15px;'>
                        <svg width="240" height="120" viewBox="0 0 240 120">
                            <circle cx="40" cy="50" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="80" cy="50" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="60" y="85" fill="#1e3a8a" font-weight="bold" font-size="12">વધારે વિદ્યાર્થીઓ</text>
                            
                            <path d="M 110 50 L 140 50" stroke="#be123c" stroke-width="3" marker-end="url(#arrow)"/>
                            <defs>
                                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c"/>
                                </marker>
                            </defs>
                            
                            <rect x="160" y="35" width="60" height="30" fill="#fef2f2" stroke="#be123c" stroke-width="2"/>
                            <text x="190" y="85" fill="#be123c" font-weight="bold" font-size="12">ઓછા દિવસ</text>
                        </svg>
                    </div>

                    <p style='color:#334155;'>વિદ્યાર્થીઓ વધે તો ખોરાક <b>ઓછા દિવસ</b> ચાલે, એટલે કે આ <b>વ્યસ્ત પ્રમાણ</b> છે.</p>
                    
                    <div style='font-size:16px; color:#1e3a8a; line-height:2.2; background-color:#f8fafc; padding:15px; border-radius:8px;'>
                        શરૂઆતના વિદ્યાર્થીઓ (x₁) = 100 <br>
                        નવા આવ્યા પછી કુલ વિદ્યાર્થીઓ (x₂) = 100 + 25 = <b>125</b> <br>
                        પહેલાના દિવસો (y₁) = 20 <br><br>

                        &there4; x₁ &times; y₁ = x₂ &times; y₂ <br>
                        &there4; 100 &times; 20 = 125 &times; y₂ <br>
                        &there4; y₂ = (100 &times; 20) / 125 <br>
                        
                        <span style='color:#64748b; font-size:14px;'>(25 ચોક 100, 25 પંચા 125)</span><br>
                        &there4; y₂ = (4 &times; 20) / 5 <br>
                        &there4; y₂ = 4 &times; 4 <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            જવાબ = 16 દિવસ
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 12: અવયવીકરણ (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "12": {
        "chapterName": "પ્રકરણ 12",
        "chapterTitle": "અવયવીકરણ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આપેલી પદાવલિનું અવયવીકરણ કરો: 12a²b + 15ab²", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>આપણે બંને પદોમાંથી <b>સામાન્ય અવયવ (Common Factor)</b> બહાર કાઢીશું.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        બંને પદોના અલગ-અલગ અવયવો પાડીએ:<br>
                        12a&sup2;b = <span style='color:#be123c;'><b>3</b></span> &times; 4 &times; <span style='color:#be123c;'><b>a</b></span> &times; a &times; <span style='color:#be123c;'><b>b</b></span><br>
                        15ab&sup2; = <span style='color:#be123c;'><b>3</b></span> &times; 5 &times; <span style='color:#be123c;'><b>a</b></span> &times; <span style='color:#be123c;'><b>b</b></span> &times; b<br><br>

                        <span style='color:#64748b; font-size:14px;'>(બંનેમાં સમાન હોય તેવા પદો <b>3, a, અને b</b> છે. તેથી <b>3ab</b> સામાન્ય નીકળશે)</span><br>
                        
                        = 3ab (4a) + 3ab (5b) <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = 3ab (4a + 5b)
                        </div>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની ડાયરેક્ટ કોમન ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>આટલા બધા છૂટા અવયવ પાડવાની જરૂર નથી! <br>
                        1. <b>સંખ્યામાં:</b> 12 અને 15 બંને કયા મોટા ઘડિયામાં આવે? <b>3 ના ઘડિયામાં!</b> (તો 3 બહાર કાઢો).<br>
                        2. <b>ABCD (ચલ) માં:</b> જેની <b>ઘાત નાની</b> હોય તેને બહાર ખેંચી લો! અહી a&sup2; અને a માં નાનું કોણ? <b>a</b>. અને b તથા b&sup2; માં નાનું કોણ? <b>b</b>.<br>
                        બસ તો <b>3ab</b> બહાર! કૌંસમાં જે વધે તે લખી દો.</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "પદોની પુનઃ ગોઠવણી કરીને અવયવીકરણ કરો: xy + x + y + 1", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#86198f;'>જ્યારે <b>4 પદો</b> આપેલા હોય, ત્યારે હંમેશા <b>બબ્બે (2-2) ની જોડી</b> બનાવીને સામાન્ય કાઢવા.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #f0abfc; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        <u>xy + x</u> &nbsp;+&nbsp; <u>y + 1</u><br><br>

                        <b style='color:#be123c;'>પહેલી જોડી (xy + x) માંથી:</b> બંનેમાં <b>x</b> સમાન છે.<br>
                        &rarr; x (y + 1)<br><br>

                        <b style='color:#047857;'>બીજી જોડી (y + 1) માંથી:</b> બંનેમાં કંઈ સામાન્ય નથી, તેથી <b>+1</b> સામાન્ય નીકળશે.<br>
                        &rarr; +1 (y + 1)<br><br>

                        <span style='color:#64748b; font-size:14px;'>(હવે બંને કૌંસ <b>(y + 1)</b> સમાન થઈ ગયા. તેને એકવાર લખીશું અને બહારના પદોને બીજા કૌંસમાં લખીશું.)</span><br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = (y + 1) (x + 1)
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "અવયવ પાડો: 49p² - 36", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>અહીં બે પદો છે, વચ્ચે માઇનસ (-) છે અને બંને પદો પૂર્ણવર્ગ છે. તેથી <b>a&sup2; - b&sup2; = (a - b)(a + b)</b> નિત્યસમ લાગશે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        પ્રથમ બંને પદોના વર્ગમૂળ કાઢીને આખા કૌંસનો વર્ગ લખીએ:<br>
                        49p&sup2; નું વર્ગમૂળ = 7p <br>
                        36 નું વર્ગમૂળ = 6 <br><br>

                        = (7p)&sup2; - (6)&sup2; <br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#14532d;'>
                            = (7p - 6) (7p + 6)
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:8px; border-left:5px solid #2563eb; margin-top:15px;'>
                        <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔥 Nitesh Sir ની 'એકવાર માઇનસ, એકવાર પ્લસ' ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#1e40af;'>જ્યારે પણ <b>બે પૂર્ણવર્ગ સંખ્યાઓની વચ્ચે માઇનસ (-)</b> દેખાય, ત્યારે બસ બંનેના વર્ગમૂળ કાઢીને બે કૌંસ બનાવી દો: <br>એક કૌંસમાં બંનેની વચ્ચે <b>માઇનસ (-)</b> મૂકો અને બીજામાં <b>પ્લસ (+)</b> મૂકો. ફટાફટ જવાબ!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 10 (મધ્યમ પદના ભાગ પાડવાની રીત)",
                question: "અવયવ પાડો: x² + 5x + 6", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; overflow-x:auto;'>
                    <div style='background-color:#f8fafc; padding:15px; border-bottom:1px solid #e2e8f0; margin-bottom:15px;'>
                        <p style='margin:0; color:#1e3a8a; font-weight:bold; font-size:16px;'>આ <b>'ગુણાકાર અને સરવાળા'</b> વાળી રીત છે (Splitting the middle term).</p>
                    </div>

                    <div style='font-size:16px; color:#334155; line-height:2.2; padding-left:10px; border-left:4px solid #be123c;'>
                        અહીં <b>છેલ્લું પદ 6</b> છે અને <b>વચ્ચેનું પદ 5</b> છે.<br>
                        આપણે એવી બે સંખ્યા શોધવાની છે જેનો:<br>
                        &rarr; <b style='color:#047857;'>ગુણાકાર 6</b> થાય.<br>
                        &rarr; <b style='color:#ea580c;'>સરવાળો 5</b> થાય.<br><br>

                        વિચારો: 3 &times; 2 = 6, અને 3 + 2 = 5. (તેથી બે સંખ્યાઓ <b>3x અને 2x</b> મળશે).<br>
                        હવે મધ્યમ પદ (5x) ના સ્થાને આ બે ટુકડા મૂકીશું:<br>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #e2e8f0; font-family:monospace; font-size:18px; color:#1e3a8a; margin-top:15px;'>
                        = x&sup2; <b style='color:#be123c;'>+ 3x + 2x</b> + 6 <br>
                        <span style='color:#64748b; font-size:12px; font-family:sans-serif;'>(હવે બબ્બે ની જોડી બનાવીશું)</span><br>
                        = <u>x&sup2; + 3x</u> &nbsp;+&nbsp; <u>2x + 6</u><br>
                        = x(x + 3) + 2(x + 3)<br>
                        = (x + 3) (x + 2)
                    </div>

                    <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની હેતુલક્ષી શોર્ટ ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>જો વિકલ્પો (MCQ) માં આ પ્રશ્ન પૂછાય તો સીધો જવાબ લખી શકાય! <br>જે બે સંખ્યાઓ તમે મનમાં વિચારી (અહીં <b>+3 અને +2</b>), તેને સીધી <b>x</b> ની બાજુમાં કૌંસમાં મૂકી દો! <br>
                        સીધો જવાબ: <b>(x + 3) (x + 2)</b>. વચ્ચેના કોઈ સ્ટેપ કરવાની જરૂર જ નથી!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 13 (બહુપદીનો એકપદી વડે ભાગાકાર)",
                question: "ભાગાકાર કરો: 24(x²yz + xy²z + xyz²) ને 8xyz વડે ભાગો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; overflow-x:auto;'>
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        પ્રથમ <b>અંશ (અંદરના કૌંસ)</b> માંથી સામાન્ય પદ બહાર કાઢીએ.<br>
                        કૌંસમાં ત્રણેય પદો પાસે <b>x, y અને z</b> છે. તેથી <b>xyz</b> સામાન્ય નીકળશે.<br><br>

                        અંશ = 24 &times; <b style='color:#be123c;'>xyz</b> (x + y + z) <br>
                        છેદ = 8xyz <br><br>

                        ભાગાકારના સ્વરૂપમાં લખતા:<br>
                        = 
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:2px solid #1e3a8a; padding:0 3px;'>24 &times; xyz (x + y + z)</div>
                            <div style='padding:0 3px;'>8xyz</div>
                        </div>
                        <br><br>

                        <span style='color:#64748b; font-size:14px;'>(xyz અને xyz કેન્સલ થશે, 8 તેરી 24 છેદ ઉડશે)</span><br>
                        <div style='background-color:#eff6ff; border:2px dashed #3b82f6; padding:10px; border-radius:8px; margin-top:10px; text-align:center; font-weight:bold; font-size:20px; color:#1d4ed8;'>
                            = 3 (x + y + z)
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 13: આલેખનો પરિચય (નવો અભ્યાસક્રમ - ઉદાહરણો)
    // ------------------------------------
    "13": {
        "chapterName": "પ્રકરણ 13",
        "chapterTitle": "આલેખનો પરિચય (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આલેખપત્ર પર બિંદુઓ A(4, 3), B(4, 2), C(4, 6) અને D(4, 2.5) દર્શાવો. શું તેઓ એક જ રેખા પર છે?", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px; overflow-x:auto;'>
                    <div style='text-align:center; margin-bottom:15px; background-color:#ffffff; padding:15px; border-radius:8px;'>
                        <svg width="250" height="250" viewBox="0 0 250 250">
                            <!-- Grid Lines -->
                            <g stroke="#e2e8f0" stroke-width="1">
                                <line x1="40" y1="210" x2="230" y2="210"/><line x1="40" y1="180" x2="230" y2="180"/><line x1="40" y1="150" x2="230" y2="150"/><line x1="40" y1="120" x2="230" y2="120"/><line x1="40" y1="90" x2="230" y2="90"/><line x1="40" y1="60" x2="230" y2="60"/><line x1="40" y1="30" x2="230" y2="30"/>
                                <line x1="70" y1="210" x2="70" y2="30"/><line x1="100" y1="210" x2="100" y2="30"/><line x1="130" y1="210" x2="130" y2="30"/><line x1="160" y1="210" x2="160" y2="30"/><line x1="190" y1="210" x2="190" y2="30"/><line x1="220" y1="210" x2="220" y2="30"/>
                            </g>
                            
                            <!-- Axes -->
                            <line x1="40" y1="210" x2="230" y2="210" stroke="#1e293b" stroke-width="2"/> <!-- X Axis -->
                            <line x1="40" y1="210" x2="40" y2="20" stroke="#1e293b" stroke-width="2"/> <!-- Y Axis -->
                            
                            <!-- X Axis Labels -->
                            <text x="35" y="225" fill="#1e293b" font-size="12">0</text>
                            <text x="65" y="225" fill="#1e293b" font-size="12">1</text>
                            <text x="95" y="225" fill="#1e293b" font-size="12">2</text>
                            <text x="125" y="225" fill="#1e293b" font-size="12">3</text>
                            <text x="155" y="225" fill="#1e293b" font-size="12" font-weight="bold">4</text>
                            <text x="185" y="225" fill="#1e293b" font-size="12">5</text>
                            <text x="215" y="225" fill="#1e293b" font-size="12">6</text>
                            <text x="235" y="215" fill="#1e293b" font-weight="bold">X</text>

                            <!-- Y Axis Labels -->
                            <text x="25" y="185" fill="#1e293b" font-size="12">1</text>
                            <text x="25" y="155" fill="#1e293b" font-size="12">2</text>
                            <text x="25" y="125" fill="#1e293b" font-size="12">3</text>
                            <text x="25" y="95" fill="#1e293b" font-size="12">4</text>
                            <text x="25" y="65" fill="#1e293b" font-size="12">5</text>
                            <text x="25" y="35" fill="#1e293b" font-size="12">6</text>
                            <text x="35" y="15" fill="#1e293b" font-weight="bold">Y</text>

                            <!-- The Line connecting points -->
                            <line x1="160" y1="150" x2="160" y2="30" stroke="#be123c" stroke-width="2"/>

                            <!-- Points -->
                            <!-- B(4,2) -->
                            <circle cx="160" cy="150" r="4" fill="#0284c7"/>
                            <text x="170" y="155" fill="#0284c7" font-weight="bold" font-size="12">B(4,2)</text>
                            <!-- D(4,2.5) -->
                            <circle cx="160" cy="135" r="4" fill="#0284c7"/>
                            <text x="170" y="135" fill="#0284c7" font-weight="bold" font-size="12">D(4,2.5)</text>
                            <!-- A(4,3) -->
                            <circle cx="160" cy="120" r="4" fill="#0284c7"/>
                            <text x="170" y="115" fill="#0284c7" font-weight="bold" font-size="12">A(4,3)</text>
                            <!-- C(4,6) -->
                            <circle cx="160" cy="30" r="4" fill="#0284c7"/>
                            <text x="170" y="35" fill="#0284c7" font-weight="bold" font-size="12">C(4,6)</text>
                        </svg>
                    </div>

                    <div style='font-size:15px; color:#334155; line-height:2.2; background-color:#ffffff; padding:15px; border-radius:8px; border-left:4px solid #0284c7;'>
                        બધા જ બિંદુઓનો <b>X-યામ 4</b> છે. તેથી જ્યારે આપણે તેમને આલેખ પર દર્શાવીએ છીએ, ત્યારે તે બધા જ <b>Y-અક્ષને સમાંતર એક જ ઊભી રેખા પર</b> આવે છે.<br>
                        <b style='color:#16a34a; font-size:16px;'>હા, આ બધા બિંદુઓ એક જ રેખા પર આવેલા છે.</b>
                    </div>
                    
                    <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border-left:5px solid #eab308; margin-top:15px;'>
                        <h4 style='color:#a16207; margin:0 0 5px 0;'>🔥 Nitesh Sir ની 'ચાલવા અને ચઢવાની' ટ્રીક:</h4>
                        <p style='margin:0; font-size:14px; color:#854d0e;'>યામ (x, y) માં કોને ક્યાં લેવો એ ભૂલાઈ જાય છે?<br>
                        યાદ રાખો: <b>"પહેલા જમીન પર ચાલો, પછી સીડી ચઢો!"</b><br>
                        એટલે કે પહેલો અંક (X) આડી લાઈન પર ચાલવાનો, અને બીજો અંક (Y) હોય તેટલું ઊભી લાઈન પર (સીડીની જેમ) ચઢવાનું. ક્યારેય બિંદુ ખોટું નહિ મુકાય!</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "આકૃતિમાં દર્શાવેલા બિંદુઓ P, Q, R અને S ના યામ (Coordinates) લખો.", 
                answer: `
                <div style='background-color:#fdf4ff; padding:15px; border-left:5px solid #c026d3; border-radius:8px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:15px; color:#86198f;'>યામ લખવા માટે હંમેશા પહેલા <b>X-અક્ષ (આડી ધરી)</b> નો અંક જોવો અને પછી <b>Y-અક્ષ (ઊભી ધરી)</b> નો અંક જોવો.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #f0abfc; font-size:16px; color:#1e3a8a; line-height:2.2;'>
                        અહીં માની લો કે આલેખમાં બિંદુઓ નીચે મુજબ છે:<br><br>
                        
                        &rarr; <b style='color:#be123c;'>P ના યામ:</b> P થી આડી લીટી પર (X અક્ષ પર) જતાં 4 મળે છે, અને ઊભી લીટી પર (Y અક્ષ પર) જતાં 3 મળે છે. તેથી <b>P(4, 3)</b>.<br>
                        
                        &rarr; <b style='color:#047857;'>Q ના યામ:</b> Q નો X યામ 6 અને Y યામ 1 છે. તેથી <b>Q(6, 1)</b>.<br>
                        
                        &rarr; <b style='color:#ea580c;'>R ના યામ:</b> R નો X યામ 6 અને Y યામ 5 છે. તેથી <b>R(6, 5)</b>.<br>
                        
                        &rarr; <b style='color:#0284c7;'>S ના યામ:</b> S નો X યામ 4 અને Y યામ 7 છે. તેથી <b>S(4, 7)</b>.
                    </div>
                </div>`
            }
        ]
    }

                
        
};

