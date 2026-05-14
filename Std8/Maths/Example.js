var njMathsExamples = {
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
    }
    
    
    
    
    
};

