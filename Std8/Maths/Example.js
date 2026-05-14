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
    }
};

