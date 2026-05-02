var njMathsExamples = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ (ઉદાહરણો)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક પૂર્ણ સંખ્યા એ પ્રાકૃતિક સંખ્યા છે.\n(ii) દરેક પૂર્ણાંક એ સંમેય સંખ્યા છે.\n(iii) દરેક સંમેય સંખ્યા એ પૂર્ણાંક છે.", 
                solution: `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:12px; border-radius:0 8px 8px 0;'>
                        <h4 style='color:#be123c; margin:0 0 5px 0;'>(i) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337;'>કારણ કે શૂન્ય (0) એ પૂર્ણ સંખ્યા છે, પરંતુ પ્રાકૃતિક સંખ્યા નથી.</p>
                    </div>
                    
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:12px; border-radius:0 8px 8px 0;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>(ii) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d;'>કારણ કે કોઈપણ પૂર્ણાંક <i>m</i> ને <i>m/1</i> ના સ્વરૂપમાં લખી શકાય છે, તેથી તે સંમેય સંખ્યા બને છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:12px; border-radius:0 8px 8px 0;'>
                        <h4 style='color:#be123c; margin:0 0 5px 0;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337;'>કારણ કે દા.ત. 3/5 એ સંમેય સંખ્યા છે, પરંતુ તે પૂર્ણાંક સંખ્યા નથી (તે અપૂર્ણાંક છે).</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border:1px dashed #ca8a04; margin-top:15px;'>
                    💡 <b>યાદ રાખવાની ટ્રીક:</b> 
                    <br>N &rarr; W &rarr; Z &rarr; Q &rarr; R (નાના ગણથી મોટા ગણ તરફ જઈએ તો વિધાન <b>સત્ય</b>, પણ ઊંધા આવીએ તો વિધાન <b>અસત્ય</b>!)
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "1 અને 2 વચ્ચેની પાંચ સંમેય સંખ્યાઓ શોધો.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>આપણે 1 અને 2 વચ્ચેની <b>5</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#ffffff; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:10px;'>
                        <b>સ્ટેપ 1:</b> જેટલી સંખ્યા શોધવી હોય તેમાં 1 ઉમેરો. (અહીં 5 + 1 = <b>6</b>).<br>
                        <b>સ્ટેપ 2:</b> આપેલી બંને સંખ્યાઓના અંશ અને છેદને 6 વડે ગુણો.
                    </div>
                    
                    <div style='display:flex; justify-content:space-around; align-items:center; background-color:#e0f2fe; padding:15px; border-radius:8px;'>
                        <div style='text-align:center;'>
                            <b style='color:#1e3a8a; font-size:18px;'>1</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>= (1 &times; 6) / 6</span><br>
                            <b style='color:#047857; font-size:18px;'>= 6 / 6</b>
                        </div>
                        <div style='font-size:24px; color:#94a3b8;'>અને</div>
                        <div style='text-align:center;'>
                            <b style='color:#1e3a8a; font-size:18px;'>2</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>= (2 &times; 6) / 6</span><br>
                            <b style='color:#047857; font-size:18px;'>= 12 / 6</b>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 0 0; font-size:15px; color:#1e3a8a;'>હવે 6/6 અને 12/6 વચ્ચેની સંખ્યાઓ લખી નાખો:</p>
                    <p style='text-align:center; font-size:18px; font-weight:bold; color:#be123c; background-color:#ffedd5; padding:8px; border-radius:5px;'>
                        7/6, 8/6, 9/6, 10/6, 11/6
                    </p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "સંખ્યારેખા પર √2 દર્શાવો.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>રચનાના પગલાં (પાયથાગોરસના પ્રમેયનો ઉપયોગ):</h4>
                    <ul style='color:#334155; font-size:14px; margin:0; padding-left:20px; line-height:1.8;'>
                        <li>સંખ્યારેખા પર શૂન્ય (0) ને સંગત બિંદુ <b>O</b> લો.</li>
                        <li>O થી 1 એકમ અંતરે બિંદુ <b>A</b> લો. (OA = 1 એકમ).</li>
                        <li>બિંદુ A આગળ સંખ્યારેખાને લંબ હોય તેવો રેખાખંડ <b>AB</b> દોરો, જેની લંબાઈ 1 એકમ હોય. (AB = 1 એકમ).</li>
                        <li>O અને B ને જોડો. પાયથાગોરસના પ્રમેય મુજબ: OB&sup2; = OA&sup2; + AB&sup2; = (1)&sup2; + (1)&sup2; = 2. તેથી <b>OB = &radic;2</b>.</li>
                        <li>O ને કેન્દ્ર લઈ, OB જેટલી ત્રિજ્યા લઈ સંખ્યારેખા પર ચાપ મારો. આ ચાપ જ્યાં છેદે તે બિંદુ <b>P એ &radic;2</b> દર્શાવે છે.</li>
                    </ul>
                    
                    <div style='text-align:center; margin-top:20px; overflow-x:auto;'>
                        <svg width="320" height="150" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="120" x2="300" y2="120" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <circle cx="80" cy="120" r="4" fill="#1e3a8a"/>
                            <text x="75" y="140" fill="#1e3a8a" font-weight="bold">O (0)</text>
                            
                            <circle cx="160" cy="120" r="4" fill="#1e3a8a"/>
                            <text x="155" y="140" fill="#1e3a8a" font-weight="bold">A (1)</text>
                            
                            <circle cx="240" cy="120" r="4" fill="#1e3a8a"/>
                            <text x="235" y="140" fill="#1e3a8a" font-weight="bold">2</text>
                            
                            <line x1="160" y1="120" x2="160" y2="40" stroke="#be123c" stroke-width="2"/>
                            <circle cx="160" cy="40" r="4" fill="#be123c"/>
                            <text x="165" y="35" fill="#be123c" font-weight="bold">B</text>
                            
                            <line x1="80" y1="120" x2="160" y2="40" stroke="#047857" stroke-width="3"/>
                            
                            <path d="M 160 40 A 113.13 113.13 0 0 1 193 120" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>
                            <circle cx="193" cy="120" r="4" fill="#ea580c"/>
                            <text x="185" y="145" fill="#ea580c" font-weight="bold">P(√2)</text>
                            
                            <rect x="150" y="110" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1"/>
                            
                            <text x="110" y="135" fill="#64748b" font-size="12">1 એકમ</text>
                            <text x="165" y="80" fill="#be123c" font-size="12">1 એકમ</text>
                            <text x="100" y="70" fill="#047857" font-weight="bold" font-size="14">√2</text>
                        </svg>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "સાબિત કરો કે 3.142678 સંમેય સંખ્યા છે. બીજા શબ્દોમાં, 3.142678 ને p/q સ્વરૂપમાં દર્શાવો.", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>અહીં દશાંશ નિરૂપણ <b>શાંત (Terminating)</b> છે, એટલે કે તે અનંત સુધી ચાલતું નથી.</p>
                    <p style='margin:10px 0; font-size:15px; color:#14532d;'>જ્યારે શાંત દશાંશ હોય, ત્યારે દશાંશ ચિહ્ન (Point) પછી જેટલા અંકો હોય, છેદમાં 1 ની પાછળ એટલા મીંડા (0) મૂકવા.</p>
                    
                    <div style='text-align:center; background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #bbf7d0;'>
                        <span style='font-size:20px; color:#1e3a8a; font-weight:bold;'>3.142678 = </span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                            <div style='border-bottom:2px solid #be123c; padding:0 5px; font-size:20px; font-weight:bold; color:#be123c;'>3142678</div>
                            <div style='padding:0 5px; font-size:20px; font-weight:bold; color:#047857;'>1000000</div>
                        </div>
                    </div>
                    <p style='margin:10px 0 0 0; font-size:14px; text-align:center; color:#64748b;'>(અહીં દશાંશ પછી 6 અંકો છે, તેથી છેદમાં 10 લાખ આવ્યા). આ p/q સ્વરૂપ છે.</p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 7",
                question: "સાબિત કરો કે 0.3333... = 0.3̄ ને p/q સ્વરૂપમાં દર્શાવી શકાય.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#be123c; margin:0 0 10px 0;'>ગાણિતિક રીત (પરીક્ષા માટે):</h4>
                    <div style='font-size:15px; color:#1e3a8a; line-height:1.8; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                        ધારો કે <b>x = 0.3333...</b> &nbsp;&nbsp; --- (સમીકરણ 1)<br>
                        અહીં <b>એક જ અંક (3)</b> નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ <b>10</b> વડે ગુણતા:<br>
                        <b>10x = 3.3333...</b> &nbsp;&nbsp; --- (સમીકરણ 2)<br><br>
                        હવે, સમીકરણ 2 માંથી સમીકરણ 1 બાદ કરતા:<br>
                        <span style='color:#ea580c; font-family:monospace; margin-left:20px;'>10x = 3.3333...</span><br>
                        <span style='color:#ea580c; font-family:monospace; margin-left:20px;'>- x = 0.3333...</span><br>
                        <span style='color:#ea580c; font-family:monospace; margin-left:20px;'>----------------</span><br>
                        <span style='color:#ea580c; font-family:monospace; margin-left:20px; font-weight:bold;'> 9x = 3.0000...</span><br><br>
                        તેથી, 9x = 3<br>
                        <b>x = 3 / 9</b><br>
                        છેદ ઉડાડતા, <b style='color:#047857; font-size:18px;'>x = 1 / 3</b>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-left:4px solid #ca8a04; margin-top:15px; border-radius:0 8px 8px 0;'>
                    <h4 style='color:#b45309; margin:0 0 5px 0;'>🔥 હેતુલક્ષી પ્રશ્નો માટે સુપર શોર્ટકટ ટ્રીક:</h4>
                    <p style='margin:0; font-size:14px; color:#854d0e;'>0. પછી જેટલા અંક પર લીટી (બાર) હોય, તે સંખ્યા અંશમાં લખી, છેદમાં એટલા <b>9</b> મૂકી દેવા!<br>
                    દા.ત. 0.<b>3</b>̄ &rarr; 3 ના છેદમાં એક 9 &rarr; <b>3/9</b> = 1/3<br>
                    દા.ત. 0.<b>27</b>̄ &rarr; 27 ના છેદમાં બે 9 &rarr; <b>27/99</b></p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 12",
                question: "2√2 + 5√3 અને √2 - 3√3 નો સરવાળો કરો.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-size:14px;'>સરવાળો કે બાદબાકી <b>સજાતીય પદો (જેના વર્ગમૂળ સમાન હોય)</b> વચ્ચે જ થાય. (જેમ કે x વાળા પદનો સરવાળો x સાથે જ થાય).</p>
                    
                    <div style='font-size:16px; color:#1e3a8a; line-height:2;'>
                        = ( 2&radic;2 + 5&radic;3 ) + ( &radic;2 - 3&radic;3 )<br>
                        <span style='color:#64748b; font-size:14px;'>... સરખા વર્ગમૂળ વાળા પદોને પાસે લાવતા ...</span><br>
                        = ( <b style='color:#be123c;'>2&radic;2 + &radic;2</b> ) + ( <b style='color:#047857;'>5&radic;3 - 3&radic;3</b> )<br>
                        = <b style='color:#be123c;'>(2 + 1)&radic;2</b> + <b style='color:#047857;'>(5 - 3)&radic;3</b><br>
                        <div style='background-color:#fff; padding:10px; border:2px dashed #1e3a8a; text-align:center; font-size:20px; font-weight:bold; color:#ea580c; border-radius:8px; margin-top:10px;'>
                            = 3&radic;2 + 2&radic;3
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 15",
                question: "સાદું રૂપ આપો: \n(i) (5 + √7)(2 + √5) \n(ii) (5 + √5)(5 - √5) \n(iii) (√3 + √7)² \n(iv) (√11 - √7)(√11 + √7)", 
                solution: `
                <p style='color:#334155;'>અહીં અગાઉ શીખેલા બૈજિક નિત્યસમોનો સીધો ઉપયોગ કરવાનો છે.</p>
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    
                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#ffffff;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>(i) (5 + &radic;7)(2 + &radic;5)</h4>
                        <p style='margin:0; font-size:14px; color:#64748b;'>(સામાન્ય ગુણાકાર: પહેલા કૌંસનું દરેક પદ બીજા કૌંસ સાથે ગુણાશે)</p>
                        <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = 5(2 + &radic;5) + &radic;7(2 + &radic;5)<br>
                            = <span style='color:#047857;'>10 + 5&radic;5 + 2&radic;7 + &radic;35</span> (કોઈ સજાતીય પદ નથી એટલે આ જ જવાબ).
                        </p>
                    </div>

                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>(ii) (5 + &radic;5)(5 - &radic;5)</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'>નિત્યસમ: (a + b)(a - b) = a&sup2; - b&sup2;</p>
                        <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (5)&sup2; - (&radic;5)&sup2;<br>
                            = 25 - 5 = <span style='color:#047857;'>20</span>
                        </p>
                    </div>

                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#ffffff;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>(iii) (&radic;3 + &radic;7)&sup2;</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'>નિત્યસમ: (a + b)&sup2; = a&sup2; + 2ab + b&sup2;</p>
                        <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (&radic;3)&sup2; + 2(&radic;3)(&radic;7) + (&radic;7)&sup2;<br>
                            = 3 + 2&radic;21 + 7<br>
                            = <span style='color:#047857;'>10 + 2&radic;21</span>
                        </p>
                    </div>

                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>(iv) (&radic;11 - &radic;7)(&radic;11 + &radic;7)</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'>નિત્યસમ: (a - b)(a + b) = a&sup2; - b&sup2;</p>
                        <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (&radic;11)&sup2; - (&radic;7)&sup2;<br>
                            = 11 - 7 = <span style='color:#047857;'>4</span>
                        </p>
                    </div>

                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 18",
                question: "5 / (√3 - √5) ના છેદનું સંમેયીકરણ કરો.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <p style='margin-top:0; color:#9a3412; font-size:14px;'><b>રીત:</b> છેદમાં <b>(&radic;3 - &radic;5)</b> છે, તેથી તેની નિશાની બદલીને <b>(&radic;3 + &radic;5)</b> વડે અંશ અને છેદ બંનેને ગુણવા પડશે.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #fed7aa; text-align:center; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2.2;'>
                        = [ 5 / (&radic;3 - &radic;5) ] &times; [ <span style='color:#047857;'>(&radic;3 + &radic;5) / (&radic;3 + &radic;5)</span> ]<br>
                        
                        <span style='font-size:14px; color:#64748b; font-weight:normal;'>(છેદમાં (a-b)(a+b) = a&sup2; - b&sup2; લાગુ પડશે)</span><br>
                        
                        = 5(&radic;3 + &radic;5) / [ (&radic;3)&sup2; - (&radic;5)&sup2; ]<br>
                        = 5(&radic;3 + &radic;5) / (3 - 5)<br>
                        = 5(&radic;3 + &radic;5) / (-2)<br>
                        
                        <div style='background-color:#f0fdf4; border:2px dashed #16a34a; padding:10px; border-radius:8px; margin-top:10px;'>
                            જવાબ = -5/2 (&radic;3 + &radic;5)
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 20",
                question: "સાદું રૂપ આપો: \n(i) 2^(2/3) • 2^(1/3) \n(ii) (3^(1/5))^4 \n(iii) 7^(1/5) / 7^(1/3) \n(iv) 13^(1/5) • 17^(1/5)", 
                solution: `
                <p style='color:#334155;'>અહીં <b>ઘાતાંકના નિયમો</b> નો સીધો ઉપયોગ કરવાનો છે.</p>
                
                <div style='overflow-x:auto; background-color:#ffffff; border-radius:10px; border:1px solid #e2e8f0;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:400px; font-size:15px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:12px; border-bottom:2px solid #cbd5e1;'>પ્રશ્ન</th>
                            <th style='padding:12px; border-bottom:2px solid #cbd5e1;'>કયો નિયમ લાગ્યો?</th>
                            <th style='padding:12px; border-bottom:2px solid #cbd5e1;'>ગણતરી અને જવાબ</th>
                        </tr>
                        
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#ea580c;'>(i) 2<sup>2/3</sup> &times; 2<sup>1/3</sup></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#64748b; font-size:13px;'>આધાર સરખા, ગુણાકારનો સંબંધ &rarr; <b>ઘાતનો સરવાળો</b></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#1e3a8a;'>
                                = 2<sup>(2/3 + 1/3)</sup> <br>
                                = 2<sup>(3/3)</sup> <br>
                                = <span style='color:#047857; font-size:18px;'>2<sup>1</sup> = 2</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#ea580c;'>(ii) (3<sup>1/5</sup>)<sup>4</sup></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#64748b; font-size:13px;'>ઘાતની ઘાત નો નિયમ &rarr; <b>બંને ઘાતનો ગુણાકાર</b></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#1e3a8a;'>
                                = 3<sup>(1/5 &times; 4)</sup> <br>
                                = <span style='color:#047857; font-size:18px;'>3<sup>4/5</sup></span>
                            </td>
                        </tr>
                        
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#ea580c;'>(iii) 7<sup>1/5</sup> / 7<sup>1/3</sup></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#64748b; font-size:13px;'>આધાર સરખા, ભાગાકારનો સંબંધ &rarr; <b>ઘાતની બાદબાકી</b></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#1e3a8a;'>
                                = 7<sup>(1/5 - 1/3)</sup> <br>
                                <span style='font-size:12px; color:#ea580c;'>(લ.સા.અ. લેતાં)</span><br>
                                = 7<sup>(3 - 5)/15</sup> <br>
                                = <span style='color:#047857; font-size:18px;'>7<sup>-2/15</sup></span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#ea580c;'>(iv) 13<sup>1/5</sup> &times; 17<sup>1/5</sup></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#64748b; font-size:13px;'>ઘાત સરખી, આધાર અલગ &rarr; <b>આધારનો ગુણાકાર, ઘાત સામાન્ય</b></td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#1e3a8a;'>
                                = (13 &times; 17)<sup>1/5</sup> <br>
                                = <span style='color:#047857; font-size:18px;'>221<sup>1/5</sup></span>
                            </td>
                        </tr>
                    </table>
                </div>`
            }
        ]
    }
};
