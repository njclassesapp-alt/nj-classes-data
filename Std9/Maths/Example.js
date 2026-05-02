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
    }
};
