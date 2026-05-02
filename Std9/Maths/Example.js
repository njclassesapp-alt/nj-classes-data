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
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 2: બહુપદીઓ (ઉદાહરણો)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "બહુપદીઓ (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચે આપેલી બહુપદીઓની ઘાત જણાવો:\n(i) x⁵ - x⁴ + 3\n(ii) 2 - y² - y³ + 2y⁸\n(iii) 2", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>નિયમ:</b> બહુપદીમાં ચલના સૌથી મોટા (મહત્તમ) ઘાતાંકને બહુપદીની ઘાત કહે છે.</p>
                    
                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='border:1px solid #bae6fd; background-color:#ffffff; padding:10px; border-radius:5px;'>
                            <h4 style='color:#ea580c; margin:0 0 5px 0;'>(i) x⁵ - x⁴ + 3</h4>
                            <p style='margin:0; font-size:14px;'>અહીં ચલ x નો મહત્તમ ઘાતાંક <b>5</b> છે. તેથી બહુપદીની ઘાત <b>5</b> છે.</p>
                        </div>
                        
                        <div style='border:1px solid #bae6fd; background-color:#ffffff; padding:10px; border-radius:5px;'>
                            <h4 style='color:#ea580c; margin:0 0 5px 0;'>(ii) 2 - y² - y³ + 2y⁸</h4>
                            <p style='margin:0; font-size:14px;'>અહીં ચલ y નો મહત્તમ ઘાતાંક <b>8</b> છે. તેથી બહુપદીની ઘાત <b>8</b> છે.</p>
                        </div>

                        <div style='border:1px solid #bae6fd; background-color:#ffffff; padding:10px; border-radius:5px;'>
                            <h4 style='color:#ea580c; margin:0 0 5px 0;'>(iii) 2</h4>
                            <p style='margin:0; font-size:14px;'>2 એ અચળ બહુપદી છે. 2 ને 2x⁰ સ્વરૂપે લખી શકાય. તેથી અચળ બહુપદીની ઘાત હંમેશા <b>0 (શૂન્ય)</b> હોય છે.</p>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "ચલની આપેલી કિંમતો માટે બહુપદીઓનાં મૂલ્ય શોધો:\n(i) x = 1 માટે p(x) = 5x² - 3x + 7 નું મૂલ્ય.\n(ii) y = 2 માટે q(y) = 3y³ - 4y + √11 નું મૂલ્ય.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='margin-bottom:15px; padding-bottom:15px; border-bottom:1px dashed #cbd5e1;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) x = 1 માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#64748b;'>બહુપદી p(x) = 5x² - 3x + 7 માં x ની જગ્યાએ 1 મૂકતાં,</p>
                        <div style='font-size:16px; font-weight:bold; color:#047857; margin-top:5px; background-color:#f0fdf4; padding:8px; border-radius:5px; display:inline-block;'>
                            p(1) = 5(1)² - 3(1) + 7<br>
                            p(1) = 5(1) - 3 + 7<br>
                            p(1) = 5 - 3 + 7 = <span style='color:#be123c;'>9</span>
                        </div>
                    </div>

                    <div>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) y = 2 માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#64748b;'>બહુપદી q(y) = 3y³ - 4y + √11 માં y ની જગ્યાએ 2 મૂકતાં,</p>
                        <div style='font-size:16px; font-weight:bold; color:#047857; margin-top:5px; background-color:#f0fdf4; padding:8px; border-radius:5px; display:inline-block;'>
                            q(2) = 3(2)³ - 4(2) + √11<br>
                            q(2) = 3(8) - 8 + √11<br>
                            q(2) = 24 - 8 + √11 = <span style='color:#be123c;'>16 + √11</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "ચકાસો કે -2 અને 2 એ બહુપદી x + 2 નાં શૂન્યો છે કે નહિ?", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <p style='margin-top:0; color:#9a3412; font-size:14px;'><b>રીત:</b> આપેલ કિંમતને બહુપદીમાં મૂકો. જો જવાબ 0 આવે, તો તે શૂન્ય કહેવાય.</p>
                    
                    <p style='margin:5px 0; font-size:15px; color:#334155;'>ધારો કે p(x) = x + 2</p>
                    
                    <div style='display:flex; gap:15px; flex-wrap:wrap; margin-top:10px;'>
                        <div style='flex:1; min-width:200px; background-color:#ffffff; padding:10px; border:1px solid #fed7aa; border-radius:5px;'>
                            <b style='color:#1e3a8a;'>x = -2 મૂકતાં:</b><br>
                            p(-2) = -2 + 2 = <b>0</b><br>
                            <span style='color:#16a34a; font-size:14px;'>જવાબ શૂન્ય આવ્યો, તેથી -2 એ બહુપદીનું શૂન્ય છે.</span>
                        </div>
                        <div style='flex:1; min-width:200px; background-color:#ffffff; padding:10px; border:1px solid #fed7aa; border-radius:5px;'>
                            <b style='color:#1e3a8a;'>x = 2 મૂકતાં:</b><br>
                            p(2) = 2 + 2 = <b>4</b><br>
                            <span style='color:#dc2626; font-size:14px;'>અહીં 4 ≠ 0, તેથી 2 એ બહુપદીનું શૂન્ય નથી.</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "બહુપદી p(x) = 2x + 1 નું શૂન્ય શોધો.", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border:1px solid #bbf7d0; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#14532d;'>બહુપદીનું શૂન્ય શોધવા માટે આપણે <b>p(x) = 0</b> લેવું પડે.</p>
                    
                    <div style='text-align:center; font-size:18px; font-weight:bold; color:#166534; margin:15px 0;'>
                        2x + 1 = 0<br>
                        2x = -1<br>
                        <div style='display:inline-block; border:2px dashed #16a34a; padding:5px 15px; margin-top:5px; border-radius:5px; background-color:#ffffff;'>
                            x = -1/2
                        </div>
                    </div>
                    <p style='margin:0; text-align:center; color:#14532d; font-size:14px;'>આમ, -1/2 એ આપેલી બહુપદીનું શૂન્ય છે.</p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5",
                question: "ચકાસો કે 2 અને 0 એ બહુપદી x² - 2x નાં શૂન્યો છે.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>ધારો કે p(x) = x² - 2x</p>
                    
                    <ul style='list-style-type:none; padding:0; margin:0;'>
                        <li style='margin-bottom:10px; padding:10px; background-color:#f8fafc; border-left:4px solid #0284c7;'>
                            <b style='color:#0369a1;'>x = 2 લેતાં:</b><br>
                            p(2) = (2)² - 2(2) = 4 - 4 = <b>0</b>
                        </li>
                        <li style='padding:10px; background-color:#f8fafc; border-left:4px solid #ea580c;'>
                            <b style='color:#9a3412;'>x = 0 લેતાં:</b><br>
                            p(0) = (0)² - 2(0) = 0 - 0 = <b>0</b>
                        </li>
                    </ul>
                    
                    <p style='margin:10px 0 0 0; font-size:14px; font-weight:bold; color:#16a34a;'>બંને કિસ્સામાં જવાબ 0 મળે છે, તેથી 2 અને 0 બંને બહુપદી x² - 2x ના શૂન્યો છે.</p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "ચકાસો કે x + 2 એ બહુપદી x³ + 3x² + 5x + 6 અને 2x + 4 નો અવયવ છે કે નહિ.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>અવયવ પ્રમેયની રીત:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>x + 2 નું શૂન્ય શોધવા: x + 2 = 0 &rArr; <b>x = -2</b>.</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>જો બહુપદીમાં x ની જગ્યાએ -2 મૂકવાથી જવાબ 0 આવે, તો તે અવયવ છે.</p>
                    
                    <div style='background-color:#ffffff; padding:12px; border:1px solid #bae6fd; border-radius:5px; margin-bottom:10px;'>
                        <b style='color:#0369a1;'>પહેલી બહુપદી: p(x) = x³ + 3x² + 5x + 6</b><br>
                        p(-2) = (-2)³ + 3(-2)² + 5(-2) + 6<br>
                        = -8 + 3(4) - 10 + 6<br>
                        = -8 + 12 - 10 + 6<br>
                        = 18 - 18 = <b style='color:#16a34a; font-size:16px;'>0</b> <span style='color:#64748b; font-size:12px;'>(તેથી, x+2 એ અવયવ છે)</span>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #bae6fd; border-radius:5px;'>
                        <b style='color:#ea580c;'>બીજી બહુપદી: s(x) = 2x + 4</b><br>
                        s(-2) = 2(-2) + 4<br>
                        = -4 + 4 = <b style='color:#16a34a; font-size:16px;'>0</b> <span style='color:#64748b; font-size:12px;'>(તેથી, x+2 એ આનો પણ અવયવ છે)</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 7",
                question: "જો x - 1 એ બહુપદી 4x³ + 3x² - 4x + k નો અવયવ હોય, તો k ની કિંમત શોધો. (Most IMP)", 
                solution: `
                <div style='background-color:#fff1f2; padding:15px; border:2px solid #be123c; border-radius:10px;'>
                    <p style='margin-top:0; font-size:15px; color:#9f1239;'>અહીં પહેલેથી જ કહી દીધું છે કે <b>(x - 1) એ અવયવ છે.</b></p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#9f1239;'>તેથી, x - 1 = 0 &rArr; <b>x = 1</b> લેતાં, બહુપદીનું મૂલ્ય શૂન્ય (0) જ થવું જોઈએ. એટલે કે <b>p(1) = 0</b> થાય.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:8px; text-align:center; font-size:18px; font-weight:bold; color:#1e3a8a;'>
                        p(x) = 4x³ + 3x² - 4x + k<br>
                        <span style='color:#ea580c;'>p(1) = 4(1)³ + 3(1)² - 4(1) + k = 0</span><br>
                        4(1) + 3(1) - 4 + k = 0<br>
                        4 + 3 - 4 + k = 0<br>
                        3 + k = 0<br>
                        <div style='display:inline-block; background-color:#fefce8; border:2px dashed #ca8a04; padding:5px 20px; color:#b45309; margin-top:10px; border-radius:5px;'>
                            k = -3
                        </div>
                    </div>
                </div>
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> k શોધવાના દાખલા પરીક્ષામાં ખૂબ પૂછાય છે. બસ જે અવયવ આપ્યો હોય તેની વિરુદ્ધ નિશાની વાળી કિંમત (જો x-1 હોય તો x=1) બહુપદીમાં મૂકી, બરાબરની સામે 0 મૂકીને ગણતરી કરી લેવી.
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 8",
                question: "મધ્યમ પદના ભાગ પાડીને 6x² + 17x + 5 ના અવયવ પાડો.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સ્ટેપ 1:</b> પ્રથમ પદનો સહગુણક (6) અને અંતિમ પદ (5) નો ગુણાકાર કરો: 6 &times; 5 = <b>30</b>.</p>
                    <p style='margin:0 0 15px 0; font-size:14px; color:#334155;'><b>સ્ટેપ 2:</b> 30 ના એવા બે ભાગ પાડો જેનો સરવાળો મધ્યમ પદ (17) થાય. (15 અને 2).</p>
                    
                    <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                        <svg width="250" height="150" xmlns="http://www.w3.org/2000/svg">
                            <rect x="75" y="10" width="100" height="40" rx="5" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <text x="125" y="35" fill="#0369a1" font-weight="bold" font-size="16" text-anchor="middle">30</text>
                            
                            <line x1="125" y1="50" x2="70" y2="90" stroke="#0284c7" stroke-width="2"/>
                            <line x1="125" y1="50" x2="180" y2="90" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="70" cy="110" r="20" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="70" y="115" fill="#c2410c" font-weight="bold" font-size="14" text-anchor="middle">15</text>
                            
                            <text x="125" y="115" fill="#1e3a8a" font-weight="bold" font-size="18" text-anchor="middle">+</text>
                            
                            <circle cx="180" cy="110" r="20" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="180" y="115" fill="#c2410c" font-weight="bold" font-size="14" text-anchor="middle">2</text>
                            
                            <text x="125" y="145" fill="#be123c" font-weight="bold" font-size="14" text-anchor="middle">= 17 (મધ્યમ પદ)</text>
                        </svg>
                    </div>

                    <div style='font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#f8fafc; padding:15px; border-radius:5px;'>
                        6x² + <span style='color:#ea580c;'>17x</span> + 5<br>
                        = 6x² + <span style='color:#ea580c;'>(15 + 2)x</span> + 5<br>
                        = <span style='border-bottom:2px solid #047857;'>6x² + 15x</span> + <span style='border-bottom:2px solid #be123c;'>2x + 5</span> <span style='font-size:12px; color:#64748b; font-weight:normal;'>(જોડકાં બનાવ્યા)</span><br>
                        = 3x(2x + 5) + 1(2x + 5)<br>
                        = <span style='color:#047857; font-size:18px;'>(2x + 5)(3x + 1)</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 9",
                question: "y² - 5y + 6 ના અવયવ પાડો.", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; color:#14532d; font-size:14px;'>આ દાખલો મધ્યમ પદના ભાગ પાડીને પણ સરળતાથી ગણી શકાય.</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>અંતિમ પદ 6 ના એવા બે ભાગ પાડો જેનો સરવાળો મધ્યમ પદ (-5) થાય. (-3 અને -2).</p>
                    
                    <div style='font-size:16px; font-weight:bold; color:#1e3a8a; background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0;'>
                        y² - 5y + 6<br>
                        = y² - 3y - 2y + 6<br>
                        = y(y - 3) - 2(y - 3)<br>
                        = <span style='color:#ea580c;'>(y - 3)(y - 2)</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 10",
                question: "અવયવ પાડો: x³ - 23x² + 142x - 120", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:14px; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી (3 ઘાત વાળી) ના અવયવ પાડવાની ખાસ રીત:</p>
                    
                    <div style='margin-bottom:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 1: પહેલો અવયવ શોધો (પ્રયત્ન અને ભૂલની રીત).</b><br>
                        <span style='font-size:14px; color:#475569;'>બધા સહગુણકોનો સરવાળો: 1 - 23 + 142 - 120 = 143 - 143 = 0.</span><br>
                        <span style='font-size:14px; color:#047857; font-weight:bold;'>નિયમ: જો સહગુણકોનો સરવાળો 0 થાય, તો (x - 1) એ એક અવયવ છે.</span>
                    </div>

                    <div style='margin-bottom:15px;'>
                        <b style='color:#1e3a8a;'>સ્ટેપ 2: બહુપદીને (x - 1) વડે ભાગો.</b><br>
                        <span style='font-size:14px; color:#475569;'>(ભાગાકાર કરતાં ભાગફળમાં દ્વિઘાત બહુપદી મળશે).</span><br>
                        ભાગફળ = x² - 22x + 120
                    </div>

                    <div>
                        <b style='color:#1e3a8a;'>સ્ટેપ 3: ભાગફળના મધ્યમ પદથી અવયવ પાડો.</b><br>
                        <span style='font-size:14px; color:#475569;'>120 ના ભાગ જેનો સરવાળો 22 થાય (12 &times; 10).</span><br>
                        x² - 22x + 120<br>
                        = x² - 12x - 10x + 120<br>
                        = x(x - 12) - 10(x - 12)<br>
                        = (x - 12)(x - 10)
                    </div>

                    <div style='background-color:#fffbeb; padding:10px; text-align:center; border:2px dashed #ca8a04; border-radius:8px; margin-top:15px;'>
                        <b style='color:#b45309;'>આખરી જવાબ (ત્રણેય અવયવ):</b><br>
                        <span style='font-size:18px; font-weight:bold; color:#ea580c;'>(x - 1)(x - 10)(x - 12)</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 11",
                question: "યોગ્ય નિત્યસમનો ઉપયોગ કરીને ગુણાકાર મેળવો:\n(i) (x + 3)(x + 3)\n(ii) (x - 3)(x + 5)", 
                solution: `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #bae6fd; padding:12px; border-radius:8px; background-color:#f0f9ff;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0;'>(i) (x + 3)(x + 3) = (x + 3)²</h4>
                        <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>નિત્યસમ: (a + b)² = a² + 2ab + b²</p>
                        <div style='font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (x)² + 2(x)(3) + (3)²<br>
                            = <span style='color:#ea580c;'>x² + 6x + 9</span>
                        </div>
                    </div>

                    <div style='border:1px solid #bae6fd; padding:12px; border-radius:8px; background-color:#f0f9ff;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0;'>(ii) (x - 3)(x + 5)</h4>
                        <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>નિત્યસમ: (x + a)(x + b) = x² + (a + b)x + ab</p>
                        <div style='font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            અહીં a = -3 અને b = 5<br>
                            = (x)² + (-3 + 5)x + (-3)(5)<br>
                            = x² + (2)x - 15<br>
                            = <span style='color:#ea580c;'>x² + 2x - 15</span>
                        </div>
                    </div>
                </div>`
            },
                 { 
                questionNumber: "ઉદાહરણ 12",
                question: "સીધો ગુણાકાર કર્યા સિવાય 105 × 106 ની કિંમત શોધો.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#9a3412;'>અહીં સંખ્યાઓને 100 ના આધારે (બેઝ) છૂટી પાડવાની છે.</p>
                    
                    <div style='font-size:16px; font-weight:bold; color:#1e3a8a; line-height:1.8; background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #fed7aa;'>
                        105 &times; 106<br>
                        = (100 + 5) (100 + 6)<br><br>
                        <span style='font-size:14px; color:#64748b; font-weight:normal;'>(નિત્યસમ: (x+a)(x+b) = x² + (a+b)x + ab મુજબ)</span><br>
                        = (100)² + (5 + 6)(100) + (5 &times; 6)<br>
                        = 10000 + (11)(100) + 30<br>
                        = 10000 + 1100 + 30<br>
                        = <span style='color:#047857; font-size:20px;'>11130</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 13",
                question: "અવયવ પાડો:\n(i) 49a² + 70ab + 25b²\n(ii) 25/4 x² - y²/9", 
                solution: `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#ffffff;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(i) 49a² + 70ab + 25b²</h4>
                        <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>ઊલટું નિત્યસમ: x² + 2xy + y² = (x + y)²</p>
                        <div style='font-size:15px; font-weight:bold; color:#334155;'>
                            અહીં 49a² = (7a)² અને 25b² = (5b)² છે.<br>
                            = (7a)² + 2(7a)(5b) + (5b)²<br>
                            = <span style='color:#ea580c;'>(7a + 5b)²</span> અથવા <span style='color:#ea580c;'>(7a + 5b)(7a + 5b)</span>
                        </div>
                    </div>

                    <div style='border:1px solid #cbd5e1; padding:12px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(ii) 25/4 x² - y²/9</h4>
                        <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>પૂર્ણવર્ગ તફાવતનું નિત્યસમ: x² - y² = (x - y)(x + y)</p>
                        <div style='font-size:15px; font-weight:bold; color:#334155;'>
                            = (5/2 x)² - (y/3)²<br>
                            = <span style='color:#047857;'>(5/2 x - y/3) (5/2 x + y/3)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 14",
                question: "નિત્યસમનો ઉપયોગ કરી વિસ્તરણ કરો: (3a + 4b + 5c)²", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#be123c;'><b>નિત્યસમ:</b> (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx</p>
                    
                    <div style='font-size:15px; font-weight:bold; color:#1e3a8a; line-height:1.8; background-color:#ffffff; padding:12px; border-radius:5px; border:1px solid #bbf7d0;'>
                        અહીં x = 3a, y = 4b અને z = 5c છે.<br><br>
                        = (3a)² + (4b)² + (5c)² + 2(3a)(4b) + 2(4b)(5c) + 2(5c)(3a)<br>
                        = <span style='color:#ea580c; font-size:16px;'>9a² + 16b² + 25c² + 24ab + 40bc + 30ac</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 15",
                question: "વિસ્તરણ કરો: (4a - 2b - 3c)²", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આગળના ઉદાહરણ જેવું જ નિત્યસમ વપરાશે, માત્ર <b>માઈનસ (-) ની નિશાની કૌંસની અંદર</b> લેવાની છે.</p>
                    
                    <div style='font-size:15px; font-weight:bold; color:#1e3a8a; line-height:1.8;'>
                        અહીં x = 4a, y = -2b અને z = -3c છે.<br>
                        = (4a)² + (-2b)² + (-3c)² + 2(4a)(-2b) + 2(-2b)(-3c) + 2(-3c)(4a)<br>
                        = <span style='color:#047857; font-size:16px;'>16a² + 4b² + 9c² - 16ab + 12bc - 24ac</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 16",
                question: "અવયવ પાડો: 4x² + y² + z² - 4xy - 2yz + 4xz", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-1px solid #fed7aa; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#be123c; font-weight:bold;'>ઊલટું નિત્યસમ (વિસ્તરણ પરથી અવયવ):</p>
                    
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>ટ્રીક:</b> જુઓ કે કયા પદો માઈનસ (-) છે. અહીં -4xy અને -2yz માં <b>'y'</b> ચલ સામાન્ય છે. એટલે કે 'y' વાળું પદ ઋણ હશે.</p>
                    
                    <div style='font-size:15px; font-weight:bold; color:#1e3a8a; line-height:1.8; background-color:#ffffff; padding:12px; border-radius:5px;'>
                        = (2x)² + (-y)² + (z)² + 2(2x)(-y) + 2(-y)(z) + 2(z)(2x)<br>
                        = <span style='color:#ea580c; font-size:18px;'>(2x - y + z)²</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 17",
                question: "ઘનનું વિસ્તરણ કરો:\n(i) (3a + 4b)³\n(ii) (5p - 3q)³", 
                solution: `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='border:1px solid #bae6fd; padding:15px; border-radius:8px; background-color:#f0f9ff;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0;'>(i) (3a + 4b)³</h4>
                        <p style='margin:0 0 10px 0; font-size:13px; color:#be123c;'>નિત્યસમ: (x + y)³ = x³ + y³ + 3xy(x + y)</p>
                        <div style='font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (3a)³ + (4b)³ + 3(3a)(4b)(3a + 4b)<br>
                            = 27a³ + 64b³ + 36ab(3a + 4b)<br>
                            = <span style='color:#ea580c;'>27a³ + 64b³ + 108a²b + 144ab²</span>
                        </div>
                    </div>

                    <div style='border:1px solid #bae6fd; padding:15px; border-radius:8px; background-color:#ffffff;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0;'>(ii) (5p - 3q)³</h4>
                        <p style='margin:0 0 10px 0; font-size:13px; color:#be123c;'>નિત્યસમ: (x - y)³ = x³ - y³ - 3xy(x - y)</p>
                        <div style='font-size:15px; font-weight:bold; color:#1e3a8a;'>
                            = (5p)³ - (3q)³ - 3(5p)(3q)(5p - 3q)<br>
                            = 125p³ - 27q³ - 45pq(5p - 3q)<br>
                            = <span style='color:#047857;'>125p³ - 27q³ - 225p²q + 135pq²</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 18",
                question: "યોગ્ય નિત્યસમનો ઉપયોગ કરી કિંમત શોધો:\n(i) (104)³\n(ii) (999)³", 
                solution: `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='border:1px solid #cbd5e1; padding:15px; border-radius:8px; background-color:#ffffff;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(i) (104)³ = (100 + 4)³</h4>
                        <div style='font-size:15px; font-weight:bold; color:#334155; line-height:1.8;'>
                            = (100)³ + (4)³ + 3(100)(4)(100 + 4)<br>
                            = 1000000 + 64 + 1200(104)<br>
                            = 1000000 + 64 + 124800<br>
                            = <span style='color:#ea580c; font-size:18px;'>1124864</span>
                        </div>
                    </div>

                    <div style='border:1px solid #cbd5e1; padding:15px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(ii) (999)³ = (1000 - 1)³</h4>
                        <div style='font-size:15px; font-weight:bold; color:#334155; line-height:1.8;'>
                            = (1000)³ - (1)³ - 3(1000)(1)(1000 - 1)<br>
                            = 1000000000 - 1 - 3000(999)<br>
                            = 1000000000 - 1 - 2997000<br>
                            = <span style='color:#047857; font-size:18px;'>997002999</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 19",
                question: "અવયવ પાડો: 8x³ + 27y³ + 36x²y + 54xy²", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; font-size:14px; color:#14532d;'>અહીં ચાર પદો છે અને પ્રથમ બે પદો પૂર્ણઘન છે. આ <b>(x + y)³</b> ના વિસ્તરણનું ઊલટું છે.</p>
                    
                    <div style='font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #bbf7d0;'>
                        <span style='color:#64748b; font-size:14px;'>(પહેલાં પૂર્ણઘન પદોને ઘનના સ્વરૂપમાં ગોઠવો)</span><br>
                        8x³ = (2x)³ અને 27y³ = (3y)³<br><br>
                        
                        = (2x)³ + (3y)³ + 3(2x)²(3y) + 3(2x)(3y)²<br>
                        
                        <div style='text-align:center; font-size:22px; color:#047857; margin-top:10px; border-top:2px dashed #16a34a; padding-top:10px;'>
                            = (2x + 3y)³
                        </div>
                        <p style='margin:0; text-align:center; font-size:14px; color:#ea580c;'>(અથવા (2x+3y)(2x+3y)(2x+3y) લખી શકાય).</p>
                    </div>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 3: યામ ભૂમિતિ (ઉદાહરણો)
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "યામ ભૂમિતિ (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આપેલ આકૃતિ જોઈને નીચેનાં વિધાનો પૂર્ણ કરો:\n(i) બિંદુ B ના કોટિ અને ભુજ અનુક્રમે ___ અને ___ છે. આથી B ના યામ (___, ___) છે.\n(ii) બિંદુ M ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી M ના યામ (___, ___) છે.\n(iii) બિંદુ L ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી L ના યામ (___, ___) છે.\n(iv) બિંદુ S ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી S ના યામ (___, ___) છે.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલની સમજૂતી:</p>
                    <p style='margin:0; font-size:14px; color:#334155;'><b>યાદ રાખો:</b> x-યામ એટલે કોટિ અને y-યામ એટલે ભુજ. યામ હંમેશા <b>(x, y)</b> સ્વરૂપમાં જ લખાય છે.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="340" height="340" viewBox="-170 -170 340 340" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <g stroke="#f1f5f9" stroke-width="1.5">
                                <line x1="-150" y1="-120" x2="150" y2="-120"/> <line x1="-150" y1="-90" x2="150" y2="-90"/>
                                <line x1="-150" y1="-60" x2="150" y2="-60"/> <line x1="-150" y1="-30" x2="150" y2="-30"/>
                                <line x1="-150" y1="30" x2="150" y2="30"/> <line x1="-150" y1="60" x2="150" y2="60"/>
                                <line x1="-150" y1="90" x2="150" y2="90"/> <line x1="-150" y1="120" x2="150" y2="120"/>
                                
                                <line x1="-120" y1="-150" x2="-120" y2="150"/> <line x1="-90" y1="-150" x2="-90" y2="150"/>
                                <line x1="-60" y1="-150" x2="-60" y2="150"/> <line x1="-30" y1="-150" x2="-30" y2="150"/>
                                <line x1="30" y1="-150" x2="30" y2="150"/> <line x1="60" y1="-150" x2="60" y2="150"/>
                                <line x1="90" y1="-150" x2="90" y2="150"/> <line x1="120" y1="-150" x2="120" y2="150"/>
                            </g>

                            <line x1="-150" y1="0" x2="150" y2="0" stroke="#1e3a8a" stroke-width="2.5"/>
                            <line x1="0" y1="-150" x2="0" y2="150" stroke="#1e3a8a" stroke-width="2.5"/>
                            
                            <text x="135" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X</text>
                            <text x="-145" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X'</text>
                            <text x="10" y="-135" fill="#1e3a8a" font-weight="bold" font-size="14">Y</text>
                            <text x="10" y="145" fill="#1e3a8a" font-weight="bold" font-size="14">Y'</text>
                            
                            <g fill="#64748b" font-size="10" font-weight="bold">
                                <text x="25" y="15">1</text> <text x="55" y="15">2</text> <text x="85" y="15">3</text> <text x="115" y="15">4</text>
                                <text x="-35" y="15">-1</text> <text x="-65" y="15">-2</text> <text x="-95" y="15">-3</text> <text x="-125" y="15">-4</text>
                                <text x="5" y="-25">1</text> <text x="5" y="-55">2</text> <text x="5" y="-85">3</text> <text x="5" y="-115">4</text>
                                <text x="5" y="35">-1</text> <text x="5" y="65">-2</text> <text x="5" y="95">-3</text> <text x="5" y="125">-4</text>
                            </g>

                            <circle cx="0" cy="0" r="4" fill="#ea580c"/>

                            <line x1="120" y1="0" x2="120" y2="-90" stroke="#047857" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="0" y1="-90" x2="120" y2="-90" stroke="#047857" stroke-width="2" stroke-dasharray="4,4"/>
                            <circle cx="120" cy="-90" r="5" fill="#047857"/>
                            <text x="130" y="-95" fill="#047857" font-weight="bold" font-size="14">B</text>

                            <line x1="-90" y1="0" x2="-90" y2="-120" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="0" y1="-120" x2="-90" y2="-120" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <circle cx="-90" cy="-120" r="5" fill="#be123c"/>
                            <text x="-110" y="-125" fill="#be123c" font-weight="bold" font-size="14">M</text>

                            <line x1="-150" y1="0" x2="-150" y2="120" stroke="#b45309" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="0" y1="120" x2="-150" y2="120" stroke="#b45309" stroke-width="2" stroke-dasharray="4,4"/>
                            <circle cx="-150" cy="120" r="5" fill="#b45309"/>
                            <text x="-140" y="135" fill="#b45309" font-weight="bold" font-size="14">L</text>

                            <line x1="90" y1="0" x2="90" y2="120" stroke="#6d28d9" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="0" y1="120" x2="90" y2="120" stroke="#6d28d9" stroke-width="2" stroke-dasharray="4,4"/>
                            <circle cx="90" cy="120" r="5" fill="#6d28d9"/>
                            <text x="100" y="135" fill="#6d28d9" font-weight="bold" font-size="14">S</text>
                        </svg>
                        <p style='font-size:12px; color:#64748b; margin-top:5px;'>આકૃતિ: યામ સમતલમાં બિંદુઓનું નિરૂપણ</p>
                    </div>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0;'>(i) બિંદુ B માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#14532d;'>બિંદુ B નો x-અક્ષ પરનો લંબ 4 પર અને y-અક્ષ પરનો લંબ 3 પર મળે છે.<br>
                        તેથી, કોટિ = <b>4</b> અને ભુજ = <b>3</b> છે. આથી <b>B ના યામ (4, 3)</b> છે.</p>
                    </div>

                    <div style='border:1px solid #fecdd3; background-color:#fff1f2; padding:12px; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 5px 0;'>(ii) બિંદુ M માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#881337;'>બિંદુ M નો x-અક્ષ પરનો લંબ -3 પર અને y-અક્ષ પરનો લંબ 4 પર મળે છે.<br>
                        તેથી, x-યામ = <b>-3</b> અને y-યામ = <b>4</b> છે. આથી <b>M ના યામ (-3, 4)</b> છે.</p>
                    </div>

                    <div style='border:1px solid #fde68a; background-color:#fffbeb; padding:12px; border-radius:8px;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0;'>(iii) બિંદુ L માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#78350f;'>બિંદુ L નો x-અક્ષ પરનો લંબ -5 પર અને y-અક્ષ પરનો લંબ -4 પર મળે છે.<br>
                        તેથી, x-યામ = <b>-5</b> અને y-યામ = <b>-4</b> છે. આથી <b>L ના યામ (-5, -4)</b> છે.</p>
                    </div>

                    <div style='border:1px solid #ddd6fe; background-color:#f5f3ff; padding:12px; border-radius:8px;'>
                        <h4 style='color:#6d28d9; margin:0 0 5px 0;'>(iv) બિંદુ S માટે:</h4>
                        <p style='margin:0; font-size:14px; color:#4c1d95;'>બિંદુ S નો x-અક્ષ પરનો લંબ 3 પર અને y-અક્ષ પરનો લંબ -4 પર મળે છે.<br>
                        તેથી, x-યામ = <b>3</b> અને y-યામ = <b>-4</b> છે. આથી <b>S ના યામ (3, -4)</b> છે.</p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "આકૃતિમાં અક્ષો પર દર્શાવેલાં બિંદુઓના યામ લખો.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#c2410c; font-weight:bold;'>મહત્વનો નિયમ (અક્ષ પર આવેલા બિંદુઓ માટે):</p>
                    <ul style='margin:0; font-size:14px; color:#9a3412; padding-left:20px; line-height:1.8;'>
                        <li>જો બિંદુ <b>X-અક્ષ</b> પર હોય, તો તેનો <b>y-યામ હંમેશા શૂન્ય (0)</b> હોય છે. એટલે કે યામ (x, 0) સ્વરૂપમાં હોય.</li>
                        <li>જો બિંદુ <b>Y-અક્ષ</b> પર હોય, તો તેનો <b>x-યામ હંમેશા શૂન્ય (0)</b> હોય છે. એટલે કે યામ (0, y) સ્વરૂપમાં હોય.</li>
                    </ul>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="340" height="240" viewBox="-170 -120 340 240" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <g stroke="#f8fafc" stroke-width="1">
                                <line x1="-150" y1="-90" x2="150" y2="-90"/> <line x1="-150" y1="-60" x2="150" y2="-60"/>
                                <line x1="-150" y1="-30" x2="150" y2="-30"/> <line x1="-150" y1="30" x2="150" y2="30"/>
                                <line x1="-150" y1="60" x2="150" y2="60"/> <line x1="-150" y1="90" x2="150" y2="90"/>
                                
                                <line x1="-120" y1="-100" x2="-120" y2="100"/> <line x1="-90" y1="-100" x2="-90" y2="100"/>
                                <line x1="-60" y1="-100" x2="-60" y2="100"/> <line x1="-30" y1="-100" x2="-30" y2="100"/>
                                <line x1="30" y1="-100" x2="30" y2="100"/> <line x1="60" y1="-100" x2="60" y2="100"/>
                                <line x1="90" y1="-100" x2="90" y2="100"/> <line x1="120" y1="-100" x2="120" y2="100"/>
                            </g>

                            <line x1="-150" y1="0" x2="150" y2="0" stroke="#1e3a8a" stroke-width="2.5"/>
                            <line x1="0" y1="-100" x2="0" y2="100" stroke="#1e3a8a" stroke-width="2.5"/>
                            
                            <text x="135" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X</text>
                            <text x="-145" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X'</text>
                            <text x="10" y="-85" fill="#1e3a8a" font-weight="bold" font-size="14">Y</text>
                            <text x="10" y="95" fill="#1e3a8a" font-weight="bold" font-size="14">Y'</text>

                            <circle cx="0" cy="0" r="4" fill="#64748b"/>
                            <text x="5" y="15" fill="#64748b" font-weight="bold" font-size="12">O</text>

                            <circle cx="120" cy="0" r="6" fill="#be123c"/>
                            <text x="115" y="-10" fill="#be123c" font-weight="bold" font-size="14">A</text>

                            <circle cx="0" cy="-90" r="6" fill="#047857"/>
                            <text x="10" y="-90" fill="#047857" font-weight="bold" font-size="14">B</text>

                            <circle cx="-150" cy="0" r="6" fill="#b45309"/>
                            <text x="-155" y="-10" fill="#b45309" font-weight="bold" font-size="14">C</text>

                            <circle cx="0" cy="120" r="6" fill="#6d28d9"/>
                            <text x="10" y="125" fill="#6d28d9" font-weight="bold" font-size="14">D</text>

                            <circle cx="20" cy="0" r="5" fill="#ea580c"/>
                            <text x="15" y="-10" fill="#ea580c" font-weight="bold" font-size="14">E</text>
                        </svg>
                    </div>
                </div>

                <div style='overflow-x:auto;'>
                    <table style='width:100%; min-width:320px; border-collapse: collapse; text-align:left; background-color:#ffffff; border-radius:8px; border:1px solid #cbd5e1;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>બિંદુ</th>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>સ્થાન (અક્ષ)</th>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>યામ (Coordinates)</th>
                        </tr>
                        <tr>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>બિંદુ A</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; color:#334155;'>X-અક્ષની ધન દિશામાં +4 અંતરે છે.</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:16px; font-weight:bold; color:#be123c;'>(4, 0)</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>બિંદુ B</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; color:#334155;'>Y-અક્ષની ધન દિશામાં +3 અંતરે છે.</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:16px; font-weight:bold; color:#047857;'>(0, 3)</td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>બિંદુ C</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; color:#334155;'>X-અક્ષની ઋણ દિશામાં -5 અંતરે છે.</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:16px; font-weight:bold; color:#b45309;'>(-5, 0)</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#6d28d9;'>બિંદુ D</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; color:#334155;'>Y-અક્ષની ઋણ દિશામાં -4 અંતરે છે.</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:16px; font-weight:bold; color:#6d28d9;'>(0, -4)</td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>બિંદુ E</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; color:#334155;'>X-અક્ષ પર (ધન દિશામાં 2/3 અંતરે).</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:16px; font-weight:bold; color:#ea580c;'>(2/3, 0)</td>
                        </tr>
                    </table>
                </div>
                
                <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> જો પરીક્ષામાં આકૃતિ વગર માત્ર પ્રશ્ન પૂછાય કે <b>"બિંદુ (0, -7) કયા અક્ષ પર આવેલું છે?"</b> <br>
                    -> સાવ સહેલું છે! યામમાં <b>જે સંખ્યા શૂન્ય (0) હોય તેને ભૂલી જાવ</b>. અહીં x-યામ 0 છે. સંખ્યા ક્યાં દેખાય છે? y ની જગ્યાએ (-7). તો જવાબ આવે: <b>Y-અક્ષ પર!</b>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 4: દ્વિચલ સુરેખ સમીકરણો (ઉદાહરણો)
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "દ્વિચલ સુરેખ સમીકરણો (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચે દર્શાવેલ સમીકરણોને ax + by + c = 0 સ્વરૂપમાં દર્શાવો અને દરેક કિસ્સામાં a, b અને c ની કિંમતો જણાવો:\n(i) 2x + 3y = 4.37\n(ii) x - 4 = √3y\n(iii) 4 = 5x - 3y\n(iv) 2x = y", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલની સમજૂતી:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>પ્રમાણિત સ્વરૂપ (ax + by + c = 0):</b> આનો અર્થ એ છે કે બરાબર (=) ની જમણી બાજુએ માત્ર શૂન્ય (0) જ રહેવો જોઈએ. બાકીના બધા જ પદોને ડાબી બાજુ લઈ જવા.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <table style='width:100%; min-width:450px; border-collapse: collapse; text-align:left; background-color:#ffffff; border-radius:8px; border:1px solid #cbd5e1;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>પ્રશ્ન (સમીકરણ)</th>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>પ્રમાણિત સ્વરૂપ (ax + by + c = 0)</th>
                            <th style='padding:12px; border:1px solid #cbd5e1; text-align:center;'>a</th>
                            <th style='padding:12px; border:1px solid #cbd5e1; text-align:center;'>b</th>
                            <th style='padding:12px; border:1px solid #cbd5e1; text-align:center;'>c</th>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#0f766e;'>(i) 2x + 3y = 4.37</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:15px; font-weight:bold; color:#be123c;'>2x + 3y - 4.37 = 0</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>2</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>3</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-4.37</td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#0f766e;'>(ii) x - 4 = &radic;3y</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:15px; font-weight:bold; color:#be123c;'>x - &radic;3y - 4 = 0</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>1</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-&radic;3</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-4</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#0f766e;'>(iii) 4 = 5x - 3y</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:15px; font-weight:bold; color:#be123c;'>5x - 3y - 4 = 0</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>5</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-3</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-4</td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-weight:bold; color:#0f766e;'>(iv) 2x = y</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; font-size:15px; font-weight:bold; color:#be123c;'>2x - y + 0 = 0</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>2</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>-1</td>
                            <td style='padding:12px; border:1px solid #cbd5e1; text-align:center; font-weight:bold;'>0</td>
                        </tr>
                    </table>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🧠 Nitesh Sir ની ટ્રીક:</b> જો સમીકરણમાં કોઈ પદ ગાયબ હોય (જેમ કે દાખલા iv માં અચળ પદ 'c' નથી), તો તેની જગ્યાએ ફરજિયાત <b>શૂન્ય (0)</b> લખી દેવો.
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "નીચે દર્શાવેલ પ્રત્યેક સમીકરણને દ્વિચલ સુરેખ સમીકરણના સ્વરૂપમાં દર્શાવો:\n(i) x = -5\n(ii) y = 2\n(iii) 2x = 3\n(iv) 5y = 2", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <p style='margin-top:0; color:#14532d; font-size:14px;'>અહીં આપેલા સમીકરણોમાં <b>માત્ર એક જ ચલ</b> છે. તેને બે ચલ (દ્વિચલ) વાળા સમીકરણમાં ફેરવવા માટે, જે ચલ ગાયબ છે તેનો સહગુણક <b>શૂન્ય (0)</b> લઈને ઉમેરવો પડે.</p>
                    
                    <div style='display:flex; flex-direction:column; gap:10px; margin-top:15px;'>
                        <div style='border:1px solid #bbf7d0; background-color:#ffffff; padding:12px; border-radius:5px;'>
                            <h4 style='color:#047857; margin:0 0 5px 0;'>(i) x = -5</h4>
                            <p style='margin:0; font-size:14px; color:#334155;'>અહીં 'y' ચલ નથી. તેથી 0y ઉમેરીશું.</p>
                            <p style='margin:5px 0 0 0; font-size:16px; font-weight:bold; color:#1e3a8a;'>x + 0y = -5 <span style='color:#ea580c;'> &nbsp;&rArr;&nbsp; x + 0y + 5 = 0</span></p>
                        </div>
                        
                        <div style='border:1px solid #bbf7d0; background-color:#ffffff; padding:12px; border-radius:5px;'>
                            <h4 style='color:#047857; margin:0 0 5px 0;'>(ii) y = 2</h4>
                            <p style='margin:0; font-size:14px; color:#334155;'>અહીં 'x' ચલ નથી. તેથી 0x ઉમેરીશું.</p>
                            <p style='margin:5px 0 0 0; font-size:16px; font-weight:bold; color:#1e3a8a;'>0x + y = 2 <span style='color:#ea580c;'> &nbsp;&rArr;&nbsp; 0x + y - 2 = 0</span></p>
                        </div>

                        <div style='border:1px solid #bbf7d0; background-color:#ffffff; padding:12px; border-radius:5px;'>
                            <h4 style='color:#047857; margin:0 0 5px 0;'>(iii) 2x = 3</h4>
                            <p style='margin:0; font-size:14px; color:#334155;'>અહીં પણ 'y' ચલ નથી.</p>
                            <p style='margin:5px 0 0 0; font-size:16px; font-weight:bold; color:#1e3a8a;'>2x + 0y = 3 <span style='color:#ea580c;'> &nbsp;&rArr;&nbsp; 2x + 0y - 3 = 0</span></p>
                        </div>

                        <div style='border:1px solid #bbf7d0; background-color:#ffffff; padding:12px; border-radius:5px;'>
                            <h4 style='color:#047857; margin:0 0 5px 0;'>(iv) 5y = 2</h4>
                            <p style='margin:0; font-size:14px; color:#334155;'>અહીં 'x' ચલ નથી.</p>
                            <p style='margin:5px 0 0 0; font-size:16px; font-weight:bold; color:#1e3a8a;'>0x + 5y = 2 <span style='color:#ea580c;'> &nbsp;&rArr;&nbsp; 0x + 5y - 2 = 0</span></p>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "સમીકરણ x + 2y = 6 ના ચાર ભિન્ન ઉકેલ શોધો.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપેલ સમીકરણ: <b>x + 2y = 6</b></p>
                    <p style='margin:0 0 15px 0; font-size:14px; color:#334155;'>ઉકેલ શોધવા માટે આપણે વારાફરતી x અથવા y ની કોઈ પણ સહેલી કિંમત ધારી શકીએ છીએ.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:10px; margin-bottom:15px;'>
                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:12px; border-radius:5px; border-left:3px solid #0284c7;'>
                            <b style='color:#0369a1;'>ઉકેલ 1 (x = 0 લેતાં):</b><br>
                            0 + 2y = 6 &rArr; 2y = 6 &rArr; <b>y = 3</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>&rArr; (0, 3)</span>
                        </div>
                        
                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:12px; border-radius:5px; border-left:3px solid #047857;'>
                            <b style='color:#047857;'>ઉકેલ 2 (y = 0 લેતાં):</b><br>
                            x + 2(0) = 6 &rArr; x + 0 = 6 &rArr; <b>x = 6</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>&rArr; (6, 0)</span>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:12px; border-radius:5px; border-left:3px solid #b45309;'>
                            <b style='color:#b45309;'>ઉકેલ 3 (x = 2 લેતાં):</b><br>
                            2 + 2y = 6 &rArr; 2y = 4 &rArr; <b>y = 2</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>&rArr; (2, 2)</span>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:12px; border-radius:5px; border-left:3px solid #6d28d9;'>
                            <b style='color:#6d28d9;'>ઉકેલ 4 (y = 1 લેતાં):</b><br>
                            x + 2(1) = 6 &rArr; x + 2 = 6 &rArr; <b>x = 4</b><br>
                            <span style='color:#ea580c; font-weight:bold;'>&rArr; (4, 1)</span>
                        </div>
                    </div>

                    <div style='text-align:center; overflow-x:auto;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>ઉકેલ કોષ્ટક (Solution Table):</h4>
                        <table style='margin:auto; border-collapse: collapse; text-align:center; min-width:250px;'>
                            <tr style='background-color:#1e3a8a; color:white;'>
                                <th style='padding:10px; border:1px solid #cbd5e1; width:50px;'>x</th>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>0</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>6</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>4</td>
                            </tr>
                            <tr style='background-color:#f0f9ff;'>
                                <th style='padding:10px; border:1px solid #cbd5e1; background-color:#ea580c; color:white;'>y</th>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>3</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>0</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>2</td>
                                <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>1</td>
                            </tr>
                        </table>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "નીચે આપેલા પ્રત્યેક સમીકરણના બે ઉકેલ શોધો:\n(i) 4x + 3y = 12\n(ii) 2x + 5y = 0\n(iii) 3y + 4 = 0", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#c2410c;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> જ્યારે માત્ર 2 જ ઉકેલ પૂછ્યા હોય, ત્યારે સૌથી સહેલી રીત એ છે કે એકવાર <b>x = 0</b> લેવું અને બીજી વાર <b>y = 0</b> લેવું!
                </div>

                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:15px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 4x + 3y = 12</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px;'>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                                <b style='color:#047857;'>x = 0 લેતાં:</b><br>
                                4(0) + 3y = 12<br>
                                3y = 12 &rArr; <b>y = 4</b><br>
                                <span style='color:#ea580c; font-weight:bold;'>ઉકેલ 1: (0, 4)</span>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                                <b style='color:#be123c;'>y = 0 લેતાં:</b><br>
                                4x + 3(0) = 12<br>
                                4x = 12 &rArr; <b>x = 3</b><br>
                                <span style='color:#ea580c; font-weight:bold;'>ઉકેલ 2: (3, 0)</span>
                            </div>
                        </div>
                    </div>

                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:15px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) 2x + 5y = 0</h4>
                        <p style='margin:0 0 10px 0; font-size:13px; color:#64748b;'>અહીં અચળ પદ 'c' શૂન્ય છે, એટલે (0,0) તો એક ઉકેલ થશે જ. બીજો ઉકેલ શોધવા કોઈ બીજી કિંમત ધારીએ.</p>
                        <div style='display:flex; flex-wrap:wrap; gap:10px;'>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                                <b style='color:#047857;'>x = 0 લેતાં:</b><br>
                                2(0) + 5y = 0<br>
                                5y = 0 &rArr; <b>y = 0</b><br>
                                <span style='color:#ea580c; font-weight:bold;'>ઉકેલ 1: (0, 0)</span>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                                <b style='color:#be123c;'>x = 5 લેતાં:</b><br>
                                2(5) + 5y = 0<br>
                                10 + 5y = 0 &rArr; 5y = -10 &rArr; <b>y = -2</b><br>
                                <span style='color:#ea580c; font-weight:bold;'>ઉકેલ 2: (5, -2)</span>
                            </div>
                        </div>
                    </div>

                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:15px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) 3y + 4 = 0</h4>
                        <p style='margin:0 0 10px 0; font-size:13px; color:#64748b;'>અહીં સમીકરણમાં 'x' જ નથી! આનો અર્થ એ કે x ની કોઈ પણ કિંમત લઈ શકાય, પણ y ની કિંમત ફિક્સ રહેશે.</p>
                        <div style='display:flex; flex-wrap:wrap; gap:10px;'>
                            <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px;'>
                                <b style='color:#1e3a8a;'>y ની ફિક્સ કિંમત શોધીએ:</b><br>
                                3y = -4 &rArr; <b style='color:#be123c;'>y = -4/3</b><br><br>
                                હવે x ની કોઈ પણ બે કિંમતો ધારી લો (દા.ત. 0 અને 1).<br>
                                <span style='color:#047857; font-weight:bold;'>ઉકેલ 1: (0, -4/3)</span><br>
                                <span style='color:#ea580c; font-weight:bold;'>ઉકેલ 2: (1, -4/3)</span>
                            </div>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 5: યુક્લિડની ભૂમિતિનો પરિચય (ઉદાહરણો)
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "યુક્લિડની ભૂમિતિનો પરિચય (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "જો A, B અને C એક રેખા પર આવેલાં ત્રણ બિંદુઓ હોય અને B બિંદુ એ A અને C ની વચ્ચે આવેલું હોય, તો સાબિત કરો કે AB + BC = AC.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>સાબિતીની સમજૂતી:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે યુક્લિડના સ્વયંસિદ્ધ સત્યોનો ઉપયોગ કરીને આ સાબિત કરીશું.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="320" height="100" viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="20" y1="50" x2="300" y2="50" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <circle cx="50" cy="50" r="5" fill="#be123c"/>
                            <text x="45" y="35" fill="#be123c" font-weight="bold" font-size="14">A</text>
                            
                            <circle cx="160" cy="50" r="5" fill="#047857"/>
                            <text x="155" y="35" fill="#047857" font-weight="bold" font-size="14">B</text>
                            
                            <circle cx="270" cy="50" r="5" fill="#ea580c"/>
                            <text x="265" y="35" fill="#ea580c" font-weight="bold" font-size="14">C</text>

                            <path d="M 50 65 L 50 70 L 160 70 L 160 65" fill="none" stroke="#64748b" stroke-width="1.5"/>
                            <text x="95" y="85" fill="#64748b" font-size="12" font-weight="bold">AB</text>

                            <path d="M 160 65 L 160 70 L 270 70 L 270 65" fill="none" stroke="#64748b" stroke-width="1.5"/>
                            <text x="205" y="85" fill="#64748b" font-size="12" font-weight="bold">BC</text>
                        </svg>
                    </div>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:12px; border-radius:8px;'>
                        <ul style='margin:0; font-size:14px; color:#334155; padding-left:20px; line-height:1.8;'>
                            <li>ઉપરની આકૃતિમાં જોઈ શકાય છે કે, રેખાખંડ <b>AC</b> એ બે રેખાખંડો <b>AB</b> અને <b>BC</b> થી બનેલો છે.</li>
                            <li>એટલે કે, AB અને BC નો સરવાળો કરતાં મળતો રેખાખંડ, આખા રેખાખંડ AC પર સંપૂર્ણપણે બંધબેસતો આવે છે (સંપાતી છે).</li>
                        </ul>
                    </div>

                    <div style='border:1px solid #fed7aa; background-color:#fff7ed; padding:15px; border-radius:8px;'>
                        <h4 style='color:#c2410c; margin:0 0 5px 0;'>યુક્લિડનું સ્વયંસિદ્ધ સત્ય 4:</h4>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#9a3412; font-weight:bold; font-style:italic;'>"એકબીજા પર બંધબેસતી આવતી વસ્તુઓ એકબીજાને સમાન હોય છે."</p>
                        <p style='margin:0; font-size:14px; color:#334155;'>આ સત્ય મુજબ, જો (AB + BC) એ AC પર બંધબેસતું હોય, તો તે બંને સમાન થાય.</p>
                    </div>

                    <div style='text-align:center; padding:10px; background-color:#f0fdf4; border:2px dashed #16a34a; border-radius:8px;'>
                        <span style='font-size:18px; font-weight:bold; color:#166534;'>તેથી સાબિત થાય છે કે, AB + BC = AC</span>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "સાબિત કરો કે આપેલા કોઈ પણ રેખાખંડ પર એક સમબાજુ ત્રિકોણની રચના કરી શકાય છે.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે યુક્લિડની <b>પૂર્વધારણા 3</b> નો ઉપયોગ કરીને આપેલ રેખાખંડ AB પર સમબાજુ ત્રિકોણ રચીશું.</p>
                    <p style='margin:0; font-size:14px; color:#1e3a8a; font-weight:bold;'>પૂર્વધારણા 3: "કોઈપણ બિંદુને કેન્દ્ર લઈ તથા કોઈપણ લંબાઈની ત્રિજ્યા લઈ વર્તુળ દોરી શકાય છે."</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="340" height="240" viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" style="background-color:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            
                            <circle cx="120" cy="150" r="100" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,5"/>
                            
                            <circle cx="220" cy="150" r="100" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="5,5"/>

                            <line x1="120" y1="150" x2="220" y2="150" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="120" y1="150" x2="170" y2="63.4" stroke="#047857" stroke-width="3"/>
                            <line x1="220" y1="150" x2="170" y2="63.4" stroke="#be123c" stroke-width="3"/>

                            <circle cx="120" cy="150" r="5" fill="#1e3a8a"/>
                            <text x="100" y="165" fill="#1e3a8a" font-weight="bold" font-size="14">A</text>
                            
                            <circle cx="220" cy="150" r="5" fill="#1e3a8a"/>
                            <text x="230" y="165" fill="#1e3a8a" font-weight="bold" font-size="14">B</text>

                            <circle cx="170" cy="63.4" r="5" fill="#1e3a8a"/>
                            <text x="165" y="50" fill="#1e3a8a" font-weight="bold" font-size="14">C</text>

                            <text x="160" y="170" fill="#1e3a8a" font-weight="bold" font-size="12">પાયો</text>
                        </svg>
                    </div>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>એક રેખાખંડ <b>AB</b> લો.</li>
                            <li>બિંદુ <b>A</b> ને કેન્દ્ર લઈ અને <b>AB</b> જેટલી ત્રિજ્યા લઈ એક વર્તુળ દોરો. <span style='color:#64748b;'>(ભૂરા રંગનું વર્તુળ)</span></li>
                            <li>તેવી જ રીતે, બિંદુ <b>B</b> ને કેન્દ્ર લઈ અને <b>BA (એટલે કે AB)</b> જેટલી જ ત્રિજ્યા લઈ બીજું વર્તુળ દોરો. <span style='color:#64748b;'>(કેસરી રંગનું વર્તુળ)</span></li>
                            <li>આ બંને વર્તુળો એકબીજાને જ્યાં છેદે, તે બિંદુને <b>C</b> નામ આપો.</li>
                            <li>હવે A થી C અને B થી C ને જોડી દો. આથી ત્રિકોણ &Delta;ABC તૈયાર થશે.</li>
                        </ol>
                    </div>

                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:12px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>સાબિતી:</h4>
                        <ul style='margin:0; font-size:14px; color:#334155; padding-left:20px; line-height:1.8;'>
                            <li>અહીં <b>AB = AC</b> થશે. (કારણ: બંને એક જ વર્તુળની ત્રિજ્યા છે). --- (પરિણામ 1)</li>
                            <li>તે જ રીતે, <b>AB = BC</b> થશે. (કારણ: બંને બીજા વર્તુળની ત્રિજ્યા છે). --- (પરિણામ 2)</li>
                        </ul>
                    </div>

                    <div style='border:1px solid #fecdd3; background-color:#fff1f2; padding:15px; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 5px 0;'>યુક્લિડનું સ્વયંસિદ્ધ સત્ય 1:</h4>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#9f1239; font-weight:bold; font-style:italic;'>"એક વસ્તુને સમાન હોય તેવી વસ્તુઓ એકબીજાને સમાન થાય."</p>
                        <p style='margin:0; font-size:14px; color:#881337;'>અહીં AC અને BC બંને એક જ વસ્તુ (AB) ને સમાન છે.<br>
                        તેથી, <b>AB = BC = AC</b> થાય.</p>
                    </div>
                </div>

                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> આ સાબિતીમાં માત્ર બે જ વસ્તુ યાદ રાખવાની છે: (1) બંને વર્તુળની ત્રિજ્યા સરખી છે (કારણ કે પાયો કોમન છે) અને (2) યુક્લિડનો પહેલો નિયમ લખવાનો છે.
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 6: રેખાઓ અને ખૂણાઓ (ઉદાહરણો)
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "રેખાઓ અને ખૂણાઓ (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આકૃતિમાં, રેખાઓ PQ અને RS પરસ્પર બિંદુ O માં છેદે છે. જો ∠POR : ∠ROQ = 5:7 હોય, તો તમામ ખૂણાઓ શોધો.", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ઉકેલની સમજૂતી:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>અહીં રેખા PQ પર કિરણ OR આવેલું છે. તેથી <b>રૈખિક જોડના ખૂણા</b> નો નિયમ લાગુ પડશે (સરવાળો 180°).</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="30" y1="90" x2="250" y2="90" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="80" y1="20" x2="200" y2="160" stroke="#047857" stroke-width="3"/>
                            
                            <text x="15" y="95" fill="#1e3a8a" font-weight="bold">P</text>
                            <text x="255" y="95" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="70" y="25" fill="#047857" font-weight="bold">R</text>
                            <text x="205" y="165" fill="#047857" font-weight="bold">S</text>
                            
                            <circle cx="140" cy="90" r="5" fill="#be123c"/>
                            <text x="145" y="80" fill="#be123c" font-weight="bold">O</text>
                            
                            <path d="M 120 90 A 20 20 0 0 1 128 75" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="100" y="70" fill="#ea580c" font-weight="bold" font-size="12">5x</text>
                            
                            <path d="M 152 75 A 20 20 0 0 1 160 90" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="165" y="70" fill="#ea580c" font-weight="bold" font-size="12">7x</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>ગુણોત્તર આપેલો છે:</b> ∠POR : ∠ROQ = 5:7<br>
                    ધારો કે ∠POR = 5x અને ∠ROQ = 7x<br><br>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:10px;'>
                        <b>રૈખિક જોડનો નિયમ:</b><br>
                        ∠POR + ∠ROQ = 180°<br>
                        5x + 7x = 180°<br>
                        12x = 180° &nbsp; &rArr; &nbsp; <b style='color:#be123c;'>x = 15°</b>
                    </div>
                    
                    <b style='color:#047857;'>ખૂણાઓનાં માપ:</b><br>
                    ∠POR = 5x = 5(15°) = <b style='color:#ea580c; font-size:16px;'>75°</b><br>
                    ∠ROQ = 7x = 7(15°) = <b style='color:#ea580c; font-size:16px;'>105°</b><br><br>
                    
                    <b style='color:#1e3a8a;'>અભિકોણો સમાન હોય છે:</b><br>
                    ∠POS = ∠ROQ = <b style='color:#ea580c;'>105°</b><br>
                    ∠SOQ = ∠POR = <b style='color:#ea580c;'>75°</b>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "આકૃતિમાં, કિરણ OS એ રેખા POQ પર આવેલું છે. કિરણ OR અને કિરણ OT અનુક્રમે ∠POS અને ∠SOQ ના દુભાગકો છે. જો ∠POS = x હોય, તો ∠ROT શોધો.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9a3412; font-weight:bold;'>દુભાગક એટલે શું?</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#c2410c;'>દુભાગક એટલે ખૂણાના બરાબર <b>બે સરખા ભાગ</b> કરતું કિરણ. એટલે કે આખો ખૂણો $x$ હોય, તો બંને અડધા ભાગ $x/2$ થાય.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="20" y1="150" x2="260" y2="150" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="140" y1="150" x2="80" y2="30" stroke="#047857" stroke-width="3"/>
                            
                            <line x1="140" y1="150" x2="30" y2="70" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="140" y1="150" x2="220" y2="50" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <text x="15" y="165" fill="#1e3a8a" font-weight="bold">P</text>
                            <text x="250" y="165" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="135" y="165" fill="#be123c" font-weight="bold">O</text>
                            <text x="70" y="25" fill="#047857" font-weight="bold">S</text>
                            <text x="20" y="65" fill="#be123c" font-weight="bold">R</text>
                            <text x="225" y="45" fill="#be123c" font-weight="bold">T</text>
                            
                            <path d="M 120 150 A 20 20 0 0 1 127 125" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 127 125 A 20 20 0 0 1 110 90" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <path d="M 155 125 A 20 20 0 0 1 160 150" fill="none" stroke="#6d28d9" stroke-width="2"/>
                            <path d="M 125 90 A 20 20 0 0 1 155 125" fill="none" stroke="#6d28d9" stroke-width="2"/>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સ્ટેપ 1:</b> રૈખિક જોડના ખૂણા<br>
                    ∠POS + ∠SOQ = 180°<br>
                    $x$ + ∠SOQ = 180°<br>
                    તેથી, <b style='color:#047857;'>∠SOQ = 180° - x</b><br><br>

                    <b style='color:#1e3a8a;'>સ્ટેપ 2:</b> દુભાગકોનો ઉપયોગ<br>
                    OR એ ∠POS નો દુભાગક છે, તેથી:<br>
                    ∠ROS = ½(∠POS) = <b style='color:#ea580c;'>x/2</b><br><br>
                    
                    OT એ ∠SOQ નો દુભાગક છે, તેથી:<br>
                    ∠SOT = ½(∠SOQ) = ½(180° - x) = <b style='color:#ea580c;'>90° - x/2</b><br><br>

                    <b style='color:#be123c; font-size:16px;'>સ્ટેપ 3:</b> ∠ROT શોધવા બંનેનો સરવાળો<br>
                    ∠ROT = ∠ROS + ∠SOT<br>
                    ∠ROT = $x/2$ + (90° - $x/2$)<br>
                    <div style='text-align:center; background-color:#f0fdf4; padding:10px; border-radius:5px; border:2px dashed #16a34a; margin-top:10px; font-size:18px; font-weight:bold; color:#166534;'>
                        ∠ROT = 90°
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> આ એક સનાતન સત્ય છે! કોઈપણ રૈખિક જોડના ખૂણાઓના બે દુભાગકો વચ્ચે હંમેશા <b>90° નો કાટખૂણો</b> જ બને. હેતુલક્ષી પ્રશ્નમાં સીધો 90° ટીક કરવો.
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "આકૃતિમાં, OP, OQ, OR અને OS ચાર કિરણો છે. સાબિત કરો કે ∠POQ + ∠QOR + ∠SOR + ∠POS = 360°.", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#14532d; font-weight:bold;'>સાબિતીની સમજૂતી:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે રૈખિક જોડનો નિયમ લગાવવા માટે એક <b>સીધી રેખા</b> ની જરૂર પડે. તેથી કોઈ એક કિરણને પાછળની તરફ લંબાવીને સીધી રેખા બનાવીશું.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            
                            <line x1="140" y1="100" x2="260" y2="100" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="140" y1="100" x2="20" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="140" y1="100" x2="180" y2="20" stroke="#047857" stroke-width="3"/>
                            <line x1="140" y1="100" x2="200" y2="180" stroke="#ea580c" stroke-width="3"/>
                            <line x1="140" y1="100" x2="80" y2="170" stroke="#be123c" stroke-width="3"/>
                            
                            <circle cx="140" cy="100" r="5" fill="#1e3a8a"/>
                            <text x="135" y="115" fill="#1e3a8a" font-weight="bold">O</text>
                            
                            <text x="255" y="90" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="15" y="90" fill="#64748b" font-weight="bold">T (લંબાવેલું)</text>
                            <text x="175" y="15" fill="#047857" font-weight="bold">P</text>
                            <text x="205" y="185" fill="#ea580c" font-weight="bold">R</text>
                            <text x="65" y="175" fill="#be123c" font-weight="bold">S</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>રચના:</b> કિરણ OQ ને પાછળની તરફ બિંદુ T સુધી લંબાવો, જેથી <b>TOQ એક સીધી રેખા</b> બને.<br><br>
                    
                    <div style='border-left:4px solid #047857; padding-left:10px; margin-bottom:10px;'>
                        <b style='color:#047857;'>રેખા TOQ ની ઉપરના ખૂણા (રૈખિક જોડ):</b><br>
                        ∠TOP + ∠POQ = 180° --- (સમીકરણ 1)
                    </div>
                    
                    <div style='border-left:4px solid #ea580c; padding-left:10px; margin-bottom:10px;'>
                        <b style='color:#ea580c;'>રેખા TOQ ની નીચેના ખૂણા (ત્રણ ખૂણાનો સરવાળો 180° થાય):</b><br>
                        ∠TOS + ∠SOR + ∠ROQ = 180° --- (સમીકરણ 2)
                    </div>

                    <b style='color:#be123c;'>સમીકરણ 1 અને 2 નો સરવાળો કરતાં:</b><br>
                    ∠TOP + ∠POQ + ∠TOS + ∠SOR + ∠ROQ = 360°<br><br>
                    
                    પરંતુ આકૃતિ પરથી સ્પષ્ટ છે કે, <b>∠TOP + ∠TOS = ∠POS</b> થાય છે. કિંમત મૂકતાં:<br>
                    <div style='background-color:#f0f9ff; border:1px dashed #0284c7; text-align:center; font-weight:bold; color:#0369a1; padding:10px; border-radius:5px;'>
                        ∠POS + ∠POQ + ∠SOR + ∠QOR = 360°
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "આકૃતિમાં, જો PQ || RS, ∠MXQ = 135° અને ∠MYR = 40° હોય, તો ∠XMY શોધો.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#c2410c; font-weight:bold;'>મહત્વની રચના:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#9a3412;'>અહીં બિંદુ M આગળ કોઈ સીધી રેખા નથી. દાખલો ગણવા માટે આપણે બિંદુ <b>M માંથી પસાર થતી અને PQ ને સમાંતર હોય તેવી એક કાલ્પનિક રેખા AB દોરવી પડશે.</b></p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="40" y1="40" x2="260" y2="40" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="40" y1="160" x2="260" y2="160" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="40" y1="100" x2="260" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="120" y1="40" x2="160" y2="100" stroke="#047857" stroke-width="3"/>
                            <line x1="160" y1="100" x2="200" y2="160" stroke="#047857" stroke-width="3"/>
                            
                            <text x="30" y="45" fill="#1e3a8a" font-weight="bold">P</text>
                            <text x="265" y="45" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="30" y="165" fill="#1e3a8a" font-weight="bold">R</text>
                            <text x="265" y="165" fill="#1e3a8a" font-weight="bold">S</text>
                            
                            <text x="30" y="105" fill="#ea580c" font-weight="bold">A</text>
                            <text x="265" y="105" fill="#ea580c" font-weight="bold">B</text>
                            
                            <circle cx="120" cy="40" r="5" fill="#be123c"/>
                            <text x="115" y="30" fill="#be123c" font-weight="bold">X</text>
                            
                            <circle cx="160" cy="100" r="5" fill="#be123c"/>
                            <text x="140" y="105" fill="#be123c" font-weight="bold">M</text>
                            
                            <circle cx="200" cy="160" r="5" fill="#be123c"/>
                            <text x="195" y="180" fill="#be123c" font-weight="bold">Y</text>
                            
                            <text x="135" y="55" fill="#1e3a8a" font-size="12" font-weight="bold">135°</text>
                            <text x="210" y="150" fill="#1e3a8a" font-size="12" font-weight="bold">40°</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સ્ટેપ 1:</b> M માંથી પસાર થતી રેખા AB || PQ દોરો. (તેથી AB || RS પણ થાય).<br><br>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #0369a1; margin-bottom:10px;'>
                        <b style='color:#0369a1;'>ઉપરના ભાગ માટે (C આકાર - અંતઃકોણો):</b><br>
                        PQ || AB અને XM છેદિકા છે.<br>
                        ∠QXM + ∠XMB = 180°<br>
                        135° + ∠XMB = 180° &nbsp; &rArr; &nbsp; <b style='color:#be123c;'>∠XMB = 45°</b>
                    </div>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #047857; margin-bottom:10px;'>
                        <b style='color:#047857;'>નીચેના ભાગ માટે (Z આકાર - યુગ્મકોણો):</b><br>
                        AB || RS અને MY છેદિકા છે.<br>
                        <b style='color:#be123c;'>∠BMY = ∠MYR = 40°</b> (યુગ્મકોણો સમાન હોય છે).
                    </div>

                    <b style='color:#1e3a8a;'>સ્ટેપ 3:</b> આખો ખૂણો શોધવા સરવાળો કરો:<br>
                    ∠XMY = ∠XMB + ∠BMY<br>
                    ∠XMY = 45° + 40° = <b style='color:#ea580c; font-size:18px;'>85°</b>
                </div>`
            },
               { 
                questionNumber: "ઉદાહરણ 5",
                question: "જો એક છેદિકા બે રેખાઓને એવી રીતે છેદે કે જેથી અનુકોણની એક જોડના દુભાગકો પરસ્પર સમાંતર હોય, તો સાબિત કરો કે તે બંને રેખાઓ પણ સમાંતર છે.", 
                solution: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#14532d; font-weight:bold;'>સાબિતીનો તર્ક:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>બે રેખાઓ સમાંતર ત્યારે જ કહેવાય જો તેમના <b>અનુકોણો (F આકાર) સમાન</b> થાય.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="40" y1="70" x2="280" y2="70" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="40" y1="140" x2="280" y2="140" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="120" y1="20" x2="220" y2="190" stroke="#047857" stroke-width="2"/>
                            
                            <line x1="148" y1="70" x2="210" y2="40" stroke="#ea580c" stroke-width="2"/>
                            <line x1="190" y1="140" x2="252" y2="110" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="30" y="75" fill="#1e3a8a" font-weight="bold">P</text>
                            <text x="285" y="75" fill="#1e3a8a" font-weight="bold">Q</text>
                            <text x="30" y="145" fill="#1e3a8a" font-weight="bold">R</text>
                            <text x="285" y="145" fill="#1e3a8a" font-weight="bold">S</text>
                            
                            <text x="110" y="15" fill="#047857" font-weight="bold">A</text>
                            <text x="225" y="195" fill="#047857" font-weight="bold">D</text>
                            
                            <circle cx="149" cy="70" r="4" fill="#be123c"/>
                            <text x="135" y="65" fill="#be123c" font-weight="bold">B</text>
                            
                            <circle cx="190" cy="140" r="4" fill="#be123c"/>
                            <text x="175" y="135" fill="#be123c" font-weight="bold">C</text>
                            
                            <text x="215" y="35" fill="#ea580c" font-weight="bold">E</text>
                            <text x="260" y="105" fill="#ea580c" font-weight="bold">G</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>આપેલું છે:</b><br>
                    છેદિકા AD રેખાઓ PQ અને RS ને છેદે છે. BE અને CG એ અનુકોણો ∠ABQ અને ∠BCS ના દુભાગકો છે. વળી, <b>BE || CG</b> છે.<br><br>
                    
                    <b style='color:#047857;'>સાબિતીનાં સ્ટેપ્સ:</b><br>
                    <ol style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li>અહીં BE || CG છે અને AD તેમની છેદિકા છે.</li>
                        <li>તેથી તેમના અનુકોણો સમાન થાય: <b>∠ABE = ∠BCG</b> --- (1)</li>
                        <li>હવે, BE એ ∠ABQ નો દુભાગક હોવાથી: ∠ABE = ½(∠ABQ) --- (2)</li>
                        <li>તેવી જ રીતે, CG એ ∠BCS નો દુભાગક હોવાથી: ∠BCG = ½(∠BCS) --- (3)</li>
                        <li>સમીકરણ (1), (2) અને (3) પરથી:<br>
                            ½(∠ABQ) = ½(∠BCS)<br>
                            <b style='color:#be123c;'>∠ABQ = ∠BCS</b>
                        </li>
                    </ol>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>પરંતુ આ બંને ખૂણાઓ છેદિકા AD થી રેખાઓ PQ અને RS દ્વારા બનતા અનુકોણો છે. જો અનુકોણો સમાન હોય, તો <b>રેખાઓ સમાંતર હોય જ.</b> તેથી PQ || RS સાબિત થાય છે.</p>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "આકૃતિમાં, AB || CD અને CD || EF છે. વળી EA ⊥ AB છે. જો ∠BEF = 55° હોય, તો x, y અને z નાં મૂલ્યો શોધો.", 
                solution: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9f1239; font-weight:bold;'>લોજિક મેપ:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#881337;'>ત્રણેય રેખાઓ એકબીજાને સમાંતર છે. આપણે Z (યુગ્મકોણ) અને C (અંતઃકોણ) ના આકાર શોધીશું.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="300" height="240" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="100" y1="40" x2="280" y2="40" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="100" y1="120" x2="280" y2="120" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="100" y1="200" x2="280" y2="200" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="140" y1="40" x2="140" y2="200" stroke="#be123c" stroke-width="3"/>
                            <rect x="140" y="40" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="220" y1="40" x2="140" y2="200" stroke="#047857" stroke-width="2"/>
                            
                            <text x="80" y="45" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="285" y="45" fill="#1e3a8a" font-weight="bold">B</text>
                            
                            <text x="80" y="125" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="285" y="125" fill="#1e3a8a" font-weight="bold">D</text>
                            
                            <text x="80" y="205" fill="#1e3a8a" font-weight="bold">E</text>
                            <text x="285" y="205" fill="#1e3a8a" font-weight="bold">F</text>
                            
                            <text x="200" y="85" fill="#ea580c" font-weight="bold" font-size="16">x</text>
                            <text x="160" y="165" fill="#ea580c" font-weight="bold" font-size="16">y</text>
                            <text x="145" y="180" fill="#ea580c" font-weight="bold" font-size="14">z</text>
                            
                            <path d="M 165 200 A 20 20 0 0 1 150 180" fill="none" stroke="#6d28d9" stroke-width="2"/>
                            <text x="170" y="195" fill="#6d28d9" font-weight="bold" font-size="12">55°</text>
                        </svg>
                    </div>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #cbd5e1; background-color:#f8fafc; padding:12px; border-radius:8px;'>
                        <b style='color:#0369a1;'>સ્ટેપ 1: y ની કિંમત (અંતઃકોણનો C આકાર)</b><br>
                        અહીં CD || EF છે અને તેમની છેદિકા ED (અથવા BE નો ભાગ) છે.<br>
                        તેથી છેદિકાની એક જ તરફના અંતઃકોણો પૂરક હોય:<br>
                        y + 55° = 180°<br>
                        y = 180° - 55° = <b style='color:#ea580c; font-size:16px;'>125°</b>
                    </div>

                    <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:12px; border-radius:8px;'>
                        <b style='color:#0369a1;'>સ્ટેપ 2: x ની કિંમત (અનુકોણનો F આકાર)</b><br>
                        અહીં AB || CD છે. <br>
                        તેથી તેમના અનુકોણો સમાન હોય:<br>
                        x = y<br>
                        તેથી <b style='color:#ea580c; font-size:16px;'>x = 125°</b>
                    </div>

                    <div style='border:1px solid #cbd5e1; background-color:#f8fafc; padding:12px; border-radius:8px;'>
                        <b style='color:#0369a1;'>સ્ટેપ 3: z ની કિંમત શોધવી</b><br>
                        અહીં AB || EF છે (કારણ કે AB||CD અને CD||EF). EA તેમની છેદિકા છે.<br>
                        તેથી ∠EAB + ∠FEA = 180° (અંતઃકોણો).<br>
                        પરંતુ EA ⊥ AB હોવાથી ∠EAB = 90° છે. અને ∠FEA આખો ખૂણો (z + 55°) થી બનેલો છે.<br>
                        90° + (z + 55°) = 180°<br>
                        145° + z = 180°<br>
                        z = 180° - 145° = <b style='color:#ea580c; font-size:16px;'>35°</b>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> જો આકૃતિમાં સીધો <b>Z</b> બનતો હોય તો બંને ખૂણા સરખા કરી દેવા, અને <b>C</b> બનતો હોય તો બંનેનો સરવાળો 180° કરી દેવો. બસ આ જ ફંડા આખા પ્રકરણમાં ચાલશે!
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 7: ત્રિકોણ (ઉદાહરણો)
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "ત્રિકોણ (ઉદાહરણો)",
        "example_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આકૃતિમાં, OA = OB અને OD = OC છે. સાબિત કરો કે:\n(i) ∆AOD ≅ ∆BOC અને\n(ii) AD || BC", 
                solution: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>સાબિતીનો તર્ક:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં બે બાજુઓ સમાન આપેલી છે. તેમની વચ્ચેનો ખૂણો (અભિકોણ) સમાન બતાવીને આપણે <b>બાખૂબા (બાજુ-ખૂણો-બાજુ)</b> શરતનો ઉપયોગ કરીશું.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="40,40 140,100 40,160" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            <polygon points="240,40 140,100 240,160" fill="#fff1f2" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="40" y1="40" x2="240" y2="160" stroke="#1e3a8a" stroke-width="2"/>
                            <line x1="40" y1="160" x2="240" y2="40" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <line x1="85" y1="65" x2="95" y2="75" stroke="#ea580c" stroke-width="2"/>
                            <line x1="185" y1="125" x2="195" y2="135" stroke="#ea580c" stroke-width="2"/>
                            
                            <line x1="85" y1="135" x2="95" y2="125" stroke="#6d28d9" stroke-width="2"/>
                            <line x1="88" y1="138" x2="98" y2="128" stroke="#6d28d9" stroke-width="2"/>
                            
                            <line x1="185" y1="65" x2="195" y2="75" stroke="#6d28d9" stroke-width="2"/>
                            <line x1="188" y1="68" x2="198" y2="78" stroke="#6d28d9" stroke-width="2"/>
                            
                            <text x="25" y="35" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="250" y="170" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="25" y="170" fill="#1e3a8a" font-weight="bold">D</text>
                            <text x="250" y="35" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="135" y="90" fill="#be123c" font-weight="bold">O</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <h4 style='color:#16a34a; margin:0 0 10px 0;'>(i) ∆AOD અને ∆BOC માં:</h4>
                    <ul style='color:#334155; line-height:1.8; margin-top:0;'>
                        <li><b>OA = OB</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span></li>
                        <li><b>∠AOD = ∠BOC</b> <span style='color:#64748b;'>(પરસ્પર છેદતી રેખાઓથી બનતા અભિકોણો સમાન હોય)</span></li>
                        <li><b>OD = OC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span></li>
                    </ul>
                    <div style='background-color:#f0fdf4; padding:8px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d;'>
                        તેથી, 'બાખૂબા' (SAS) શરત મુજબ, ∆AOD ≅ ∆BOC સાબિત થાય છે.
                    </div>
                    
                    <h4 style='color:#be123c; margin:15px 0 10px 0;'>(ii) AD || BC સાબિતી:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>જો બે ત્રિકોણો એકરૂપ હોય, તો તેમના અનુરૂપ અંગો પણ સમાન હોય છે <b>(CPCT - Congruent Parts of Congruent Triangles)</b>.</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>તેથી, <b>∠OAD = ∠OBC</b> થશે.</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>પરંતુ આ બંને ખૂણાઓ રેખાઓ AD અને BC ની છેદિકા AB દ્વારા બનતા <b>યુગ્મકોણો (Z આકાર)</b> છે. જો યુગ્મકોણો સમાન હોય, તો તે રેખાઓ સમાંતર હોય છે.</p>
                    <div style='background-color:#fff1f2; padding:8px; border-radius:5px; border-left:4px solid #be123c; font-weight:bold; color:#881337;'>
                        તેથી, AD || BC સાબિત થાય છે.
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "AB એક રેખાખંડ છે અને રેખા <i>l</i> તેનો લંબદ્વિભાજક છે. જો કોઈ બિંદુ P એ રેખા <i>l</i> પર આવેલું હોય, તો સાબિત કરો કે P એ A અને B થી સમાન અંતરે આવેલું છે.", 
                solution: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9a3412; font-weight:bold;'>લંબદ્વિભાજક એટલે શું?</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#c2410c;'>લંબ એટલે <b>90° નો ખૂણો</b> બનાવે અને દ્વિભાજક એટલે રેખાખંડના <b>બે સરખા ભાગ</b> કરે. આ બે પોઈન્ટનો ઉપયોગ કરીને આપણે સાબિતી આપીશું.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="140,40 60,180 220,180" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
                            
                            <line x1="60" y1="180" x2="220" y2="180" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="140" y1="20" x2="140" y2="210" stroke="#047857" stroke-width="2" stroke-dasharray="6,4"/>
                            <text x="145" y="30" fill="#047857" font-weight="bold">l</text>
                            
                            <line x1="140" y1="40" x2="60" y2="180" stroke="#be123c" stroke-width="2"/>
                            <line x1="140" y1="40" x2="220" y2="180" stroke="#be123c" stroke-width="2"/>
                            
                            <rect x="140" y="170" width="10" height="10" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                            <rect x="130" y="170" width="10" height="10" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                            
                            <line x1="95" y1="175" x2="105" y2="185" stroke="#ea580c" stroke-width="2"/>
                            <line x1="175" y1="175" x2="185" y2="185" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="40" y="185" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="230" y="185" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="120" y="45" fill="#be123c" font-weight="bold">P</text>
                            <text x="145" y="195" fill="#047857" font-weight="bold">C</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ધારો કે રેખા <i>l</i> એ AB ને બિંદુ C માં છેદે છે.</p>
                    <b style='color:#1e3a8a;'>∆PCA અને ∆PCB માં:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li><b>AC = BC</b> <span style='color:#64748b;'>(કારણ કે <i>l</i> એ AB નો દ્વિભાજક છે, તેથી C મધ્યબિંદુ થાય)</span></li>
                        <li><b>∠PCA = ∠PCB = 90°</b> <span style='color:#64748b;'>(કારણ કે <i>l</i> એ લંબ છે)</span></li>
                        <li><b>PC = PC</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span></li>
                    </ul>
                    
                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border-left:4px solid #0284c7; margin-bottom:10px;'>
                        <b>પરિણામ:</b> 'બાખૂબા' (SAS) શરત મુજબ,<br>
                        ∆PCA ≅ ∆PCB
                    </div>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:2px dashed #16a34a; font-weight:bold; color:#14532d; text-align:center;'>
                        તેથી, CPCT મુજબ <b>PA = PB</b> થાય.<br>
                        (આનો અર્થ એ કે P એ A અને B થી સમાન અંતરે છે.)
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "રેખાખંડ AB એ બીજા રેખાખંડ CD ને સમાંતર છે. O એ AD નું મધ્યબિંદુ છે. સાબિત કરો કે:\n(i) ∆AOB ≅ ∆DOC\n(ii) O એ BC નું પણ મધ્યબિંદુ છે.", 
                solution: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9f1239; font-weight:bold;'>મહત્વનો કન્સેપ્ટ:</p>
                    <p style='margin:0; font-size:14px; color:#881337;'>અહીં સમાંતર રેખાઓ (AB || CD) આપેલી છે, એટલે <b>યુગ્મકોણો (Z આકાર)</b> નો ઉપયોગ ચોક્કસ થશે! અને શરત લાગશે <b>ખૂખૂબા (ખૂણો-ખૂણો-બાજુ)</b>.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="40" y1="40" x2="160" y2="40" stroke="#1e3a8a" stroke-width="3"/>
                            <line x1="120" y1="180" x2="240" y2="180" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <line x1="40" y1="40" x2="240" y2="180" stroke="#047857" stroke-width="2"/>
                            <line x1="160" y1="40" x2="120" y2="180" stroke="#047857" stroke-width="2"/>
                            
                            <path d="M 55 50 A 15 15 0 0 0 60 40" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 225 170 A 15 15 0 0 0 220 180" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <line x1="85" y1="105" x2="95" y2="115" stroke="#be123c" stroke-width="2"/>
                            <line x1="88" y1="108" x2="98" y2="118" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="185" y1="105" x2="195" y2="115" stroke="#be123c" stroke-width="2"/>
                            <line x1="188" y1="108" x2="198" y2="118" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="25" y="45" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="170" y="45" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="100" y="185" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="250" y="185" fill="#1e3a8a" font-weight="bold">D</text>
                            <text x="145" y="125" fill="#be123c" font-weight="bold">O</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <h4 style='color:#047857; margin:0 0 10px 0;'>(i) ∆AOB અને ∆DOC માં:</h4>
                    <ul style='color:#334155; line-height:1.8; margin-top:0;'>
                        <li><b>∠OAB = ∠ODC</b> <span style='color:#64748b;'>(AB || CD અને AD તેમની છેદિકા હોવાથી બનતા યુગ્મકોણો)</span></li>
                        <li><b>∠AOB = ∠DOC</b> <span style='color:#64748b;'>(પરસ્પર છેદતી રેખાઓથી બનતા અભિકોણો સમાન હોય)</span></li>
                        <li><b>OA = OD</b> <span style='color:#64748b;'>(કારણ કે O એ AD નું મધ્યબિંદુ છે)</span></li>
                    </ul>
                    <div style='background-color:#f0fdf4; padding:8px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d;'>
                        તેથી, 'ખૂખૂબા' (AAS) શરત મુજબ, ∆AOB ≅ ∆DOC સાબિત થાય છે.
                    </div>
                    
                    <h4 style='color:#be123c; margin:15px 0 10px 0;'>(ii) O એ BC નું મધ્યબિંદુ છે સાબિતી:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ઉપર આપણે સાબિત કર્યું કે ∆AOB ≅ ∆DOC.</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>તેથી, CPCT મુજબ તેમના અનુરૂપ અંગો સમાન થાય. એટલે કે <b>OB = OC</b> થાય.</p>
                    <div style='background-color:#fff1f2; padding:8px; border-radius:5px; border-left:4px solid #be123c; font-weight:bold; color:#881337;'>
                        જો OB = OC હોય, તો સાબિત થાય છે કે O એ BC નું પણ મધ્યબિંદુ છે.
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "∆ABC માં ખૂણા A નો દુભાગક AD એ બાજુ BC ને લંબ છે. સાબિત કરો કે AB = AC અને ∆ABC સમદ્વિબાજુ ત્રિકોણ છે.", 
                solution: `
                <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#0369a1;'>રકમ પરથી ડેટા અલગ કરો:</b>
                    <ol style='color:#334155; margin:5px 0 0 0; padding-left:20px; font-size:14px;'>
                        <li>AD એ ખૂણા A નો દુભાગક છે &rArr; <b>∠BAD = ∠CAD</b></li>
                        <li>AD એ BC ને લંબ છે &rArr; <b>∠ADB = ∠ADC = 90°</b></li>
                    </ol>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="140,30 60,180 220,180" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <line x1="140" y1="30" x2="140" y2="180" stroke="#be123c" stroke-width="2"/>
                            
                            <path d="M 135 50 A 20 20 0 0 0 125 58" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 145 50 A 20 20 0 0 1 155 58" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <rect x="140" y="170" width="10" height="10" fill="none" stroke="#047857" stroke-width="1.5"/>
                            <rect x="130" y="170" width="10" height="10" fill="none" stroke="#047857" stroke-width="1.5"/>
                            
                            <text x="135" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="40" y="190" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="230" y="190" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="135" y="200" fill="#be123c" font-weight="bold">D</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>∆ABD અને ∆ACD માં:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li><b>∠BAD = ∠CAD</b> <span style='color:#64748b;'>(કારણ કે AD એ ખૂણા A નો દુભાગક છે)</span></li>
                        <li><b>AD = AD</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span></li>
                        <li><b>∠ADB = ∠ADC</b> <span style='color:#64748b;'>(બંને કાટખૂણા છે - 90°)</span></li>
                    </ul>
                    
                    <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin-bottom:10px;'>
                        <b>પરિણામ:</b> 'ખૂબાખૂ' (ASA) શરત મુજબ,<br>
                        ∆ABD ≅ ∆ACD
                    </div>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:2px dashed #16a34a; font-weight:bold; color:#14532d; text-align:center;'>
                        તેથી, CPCT મુજબ <b>AB = AC</b> થાય.<br>
                        (અને જે ત્રિકોણની બે બાજુઓ સમાન હોય તેને સમદ્વિબાજુ ત્રિકોણ કહેવાય છે). સાબિત થયું!
                    </div>
                </div>
                
                <div style='background-color:#fff7ed; padding:10px; border-left:4px solid #ea580c; margin-top:10px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> જ્યાં પણ <b>"દુભાગક"</b> શબ્દ આવે, એટલે સમજી લેવાનું કે કોઈ બે વસ્તુ (ખૂણા કે બાજુ) ના બે સરખા ભાગ થઈ ગયા છે. બસ તેને સાબિતીના પહેલા સ્ટેપમાં લખી દેવું!
                </div>`
            },
                  { 
                questionNumber: "ઉદાહરણ 5",
                question: "E અને F અનુક્રમે ∆ABC ની સમાન બાજુઓ AB અને AC નાં મધ્યબિંદુઓ છે. સાબિત કરો કે BF = CE.", 
                solution: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે એવા બે ત્રિકોણ પસંદ કરીશું જેમાં <b>BF</b> અને <b>CE</b> આવતા હોય. અહીં આપણે <b>∆ABF</b> અને <b>∆ACE</b> પસંદ કરીશું.</p>

                    <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                        <div style='min-width:280px; text-align:center;'>
                            <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#f8fafc; border-radius:10px; border:1px solid #e2e8f0; max-width:100%; height:auto;">
                                <polygon points="140,30 60,180 220,180" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                                
                                <circle cx="100" cy="105" r="4" fill="#be123c"/>
                                <text x="80" y="110" fill="#be123c" font-weight="bold">E</text>
                                
                                <circle cx="180" cy="105" r="4" fill="#be123c"/>
                                <text x="195" y="110" fill="#be123c" font-weight="bold">F</text>
                                
                                <line x1="60" y1="180" x2="180" y2="105" stroke="#047857" stroke-width="2"/>
                                <line x1="220" y1="180" x2="100" y2="105" stroke="#ea580c" stroke-width="2"/>
                                
                                <text x="135" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                                <text x="40" y="190" fill="#1e3a8a" font-weight="bold">B</text>
                                <text x="230" y="190" fill="#1e3a8a" font-weight="bold">C</text>
                            </svg>
                        </div>
                    </div>
                    
                    <b style='color:#1e3a8a;'>આપેલ માહિતીનો ઉપયોગ:</b><br>
                    અહીં AB = AC આપેલ છે. તેમના અડધા ભાગ પણ સમાન થાય.<br>
                    તેથી, <b>½AB = ½AC</b> &rArr; <b>AE = AF</b> (કારણ કે E અને F મધ્યબિંદુઓ છે).<br><br>

                    <b style='color:#047857;'>∆ABF અને ∆ACE માં:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li><b>AB = AC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span></li>
                        <li><b>∠A = ∠A</b> <span style='color:#64748b;'>(બંને ત્રિકોણનો સામાન્ય ખૂણો)</span></li>
                        <li><b>AF = AE</b> <span style='color:#64748b;'>(ઉપર સાબિત કર્યું તેમ)</span></li>
                    </ul>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d; margin-top:10px;'>
                        'બાખૂબા' (SAS) શરત મુજબ, ∆ABF ≅ ∆ACE સાબિત થાય છે.<br>
                        તેથી CPCT મુજબ, <b>BF = CE</b> થશે.
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 6",
                question: "સમદ્વિબાજુ ત્રિકોણ ABC માં AB = AC છે. BC પર બિંદુઓ D અને E એવાં છે કે જેથી BE = CD થાય. સાબિત કરો કે AD = AE.", 
                solution: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9f1239; font-weight:bold;'>મહત્વનું લોજિક:</p>
                    <p style='margin:0; font-size:14px; color:#881337;'>અહીં BE = CD આપેલું છે. જો આપણે બંને બાજુમાંથી <b>વચ્ચેનો ભાગ (DE) બાદ કરીએ</b>, તો આપણને BD = CE મળી જશે, જે સાબિતી માટે ઉપયોગી થશે.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="140,30 60,180 220,180" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <circle cx="110" cy="180" r="4" fill="#047857"/>
                            <text x="105" y="200" fill="#047857" font-weight="bold">D</text>
                            
                            <circle cx="170" cy="180" r="4" fill="#047857"/>
                            <text x="165" y="200" fill="#047857" font-weight="bold">E</text>
                            
                            <line x1="140" y1="30" x2="110" y2="180" stroke="#be123c" stroke-width="2"/>
                            <line x1="140" y1="30" x2="170" y2="180" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="135" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="40" y="190" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="230" y="190" fill="#1e3a8a" font-weight="bold">C</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સ્ટેપ 1: આધાર તૈયાર કરવો</b><br>
                    <p style='margin:5px 0; font-size:14px; color:#334155;'>અહીં AB = AC છે, તેથી તેમની સામેના ખૂણાઓ પણ સમાન થાય. <br>&rArr; <b>∠B = ∠C</b> --- (1)</p>
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>આપેલ છે: BE = CD<br>બંને બાજુથી DE બાદ કરતાં:<br>
                    BE - DE = CD - DE<br>
                    &rArr; <b style='color:#ea580c;'>BD = CE</b> --- (2)</p>

                    <b style='color:#047857;'>સ્ટેપ 2: ∆ABD અને ∆ACE માં સરખામણી:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li><b>AB = AC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span></li>
                        <li><b>∠B = ∠C</b> <span style='color:#64748b;'>(પરિણામ 1 પરથી)</span></li>
                        <li><b>BD = CE</b> <span style='color:#64748b;'>(પરિણામ 2 પરથી)</span></li>
                    </ul>
                    
                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border-left:4px solid #0284c7; font-weight:bold; color:#0369a1; margin-top:10px;'>
                        'બાખૂબા' (SAS) શરત મુજબ, ∆ABD ≅ ∆ACE થાય.<br>
                        તેથી CPCT મુજબ તેમના અનુરૂપ અંગો સમાન થાય. &rArr; <b style='color:#be123c;'>AD = AE</b> સાબિત થાય છે.
                    </div>
                </div>`
            }
        ]
    }
      


};
