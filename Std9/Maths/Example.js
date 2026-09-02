var njMathsExamples = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ (ઉદાહરણો)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક પૂર્ણ સંખ્યા એ પ્રાકૃતિક સંખ્યા છે.\n(ii) દરેક પૂર્ણાંક એ સંમેય સંખ્યા છે.\n(iii) દરેક સંમેય સંખ્યા એ પૂર્ણાંક છે.", 
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચે આપેલી બહુપદીઓની ઘાત જણાવો:\n(i) x⁵ - x⁴ + 3\n(ii) 2 - y² - y³ + 2y⁸\n(iii) 2", 
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
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
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border:1px solid #fed7aa; border-radius:8px;'>
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
                answer: `
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
                answer: `
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
                answer: `
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આપેલ આકૃતિ જોઈને નીચેનાં વિધાનો પૂર્ણ કરો:\n(i) બિંદુ B ના કોટિ અને ભુજ અનુક્રમે ___ અને ___ છે. આથી B ના યામ (___, ___) છે.\n(ii) બિંદુ M ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી M ના યામ (___, ___) છે.\n(iii) બિંદુ L ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી L ના યામ (___, ___) છે.\n(iv) બિંદુ S ના x-યામ અને y-યામ અનુક્રમે ___ અને ___ છે. આથી S ના યામ (___, ___) છે.", 
                answer: `
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
                answer: `
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "નીચે દર્શાવેલ સમીકરણોને ax + by + c = 0 સ્વરૂપમાં દર્શાવો અને દરેક કિસ્સામાં a, b અને c ની કિંમતો જણાવો:\n(i) 2x + 3y = 4.37\n(ii) x - 4 = √3y\n(iii) 4 = 5x - 3y\n(iv) 2x = y", 
                answer: `
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
                answer: `
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
                answer: `
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
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>ઉકેલ કોષ્ટક (answer Table):</h4>
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
                answer: `
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "જો A, B અને C એક રેખા પર આવેલાં ત્રણ બિંદુઓ હોય અને B બિંદુ એ A અને C ની વચ્ચે આવેલું હોય, તો સાબિત કરો કે AB + BC = AC.", 
                answer: `
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
                answer: `
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આકૃતિમાં, રેખાઓ PQ અને RS પરસ્પર બિંદુ O માં છેદે છે. જો ∠POR : ∠ROQ = 5:7 હોય, તો તમામ ખૂણાઓ શોધો.", 
                answer: `
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
        "questionNumber": "ઉદાહરણ 2",
        "question": "આકૃતિમાં, કિરણ OS એ રેખા POQ પર આવેલું છે. કિરણ OR અને કિરણ OT અનુક્રમે ∠POS અને ∠SOQ ના દુભાગકો છે. જો ∠POS = x હોય, તો ∠ROT શોધો.", 
        "answer": `
        <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#9a3412; font-weight:bold;'>દુભાગક એટલે શું?</p>
            <p style='margin:0 0 10px 0; font-size:14px; color:#c2410c;'>દુભાગક એટલે ખૂણાના બરાબર <b>બે સરખા ભાગ</b> કરતું કિરણ. એટલે કે આખો ખૂણો $x$ હોય, તો બંને અડધા ભાગ $x/2$ થાય.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 280 180" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Line POQ -->
                    <line x1="20" y1="150" x2="260" y2="150" stroke="#1e3a8a" stroke-width="2.5"/>
                    
                    <!-- Ray OS -->
                    <!-- Coordinates for 60 degrees from Q -->
                    <line x1="140" y1="150" x2="190" y2="63.4" stroke="#047857" stroke-width="2.5"/>
                    
                    <!-- Bisector Ray OR (Bisecting POS which is 120 deg -> OR is at 120 from Q) -->
                    <line x1="140" y1="150" x2="90" y2="63.4" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                    
                    <!-- Bisector Ray OT (Bisecting SOQ which is 60 deg -> OT is at 30 from Q) -->
                    <line x1="140" y1="150" x2="226.6" y2="100" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                    
                    <!-- Right Angle Marker for ROT (120 deg to 30 deg = 90 deg) -->
                    <polyline points="132.5,137.0 145.5,129.5 153.0,142.5" fill="#fefce8" stroke="#be123c" stroke-width="1.5"/>

                    <!-- Angle Arcs for POS Bisector (Orange) -->
                    <path d="M 115 150 A 25 25 0 0 1 127.5 128.3" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <path d="M 127.5 128.3 A 25 25 0 0 1 152.5 128.3" fill="none" stroke="#ea580c" stroke-width="2"/>
                    
                    <!-- Angle Arcs for SOQ Bisector (Purple) -->
                    <path d="M 152.5 128.3 A 25 25 0 0 1 161.7 137.5" fill="none" stroke="#6d28d9" stroke-width="2"/>
                    <path d="M 161.7 137.5 A 25 25 0 0 1 165 150" fill="none" stroke="#6d28d9" stroke-width="2"/>

                    <!-- Points -->
                    <circle cx="140" cy="150" r="4" fill="#be123c"/>
                    <circle cx="20" cy="150" r="3" fill="#1e3a8a"/>
                    <circle cx="260" cy="150" r="3" fill="#1e3a8a"/>
                    
                    <!-- Labels -->
                    <text x="15" y="170" fill="#1e3a8a" font-weight="bold" font-size="15">P</text>
                    <text x="250" y="170" fill="#1e3a8a" font-weight="bold" font-size="15">Q</text>
                    <text x="135" y="170" fill="#be123c" font-weight="bold" font-size="15">O</text>
                    <text x="190" y="55" fill="#047857" font-weight="bold" font-size="15">S</text>
                    <text x="80" y="60" fill="#be123c" font-weight="bold" font-size="15">R</text>
                    <text x="233" y="98" fill="#be123c" font-weight="bold" font-size="15">T</text>
                </svg>
            </div>

            <b style='color:#1e3a8a;'>સ્ટેપ 1:</b> રૈખિક જોડના ખૂણા<br>
            &ang;POS + &ang;SOQ = 180&deg;<br>
            $x$ + &ang;SOQ = 180&deg;<br>
            તેથી, <b style='color:#047857;'>&ang;SOQ = 180&deg; - $x$</b><br><br>

            <b style='color:#1e3a8a;'>સ્ટેપ 2:</b> દુભાગકોનો ઉપયોગ<br>
            OR એ &ang;POS નો દુભાગક છે, તેથી:<br>
            &ang;ROS = &frac12;(&ang;POS) = <b style='color:#ea580c;'>$x$/2</b><br><br>
            
            OT એ &ang;SOQ નો દુભાગક છે, તેથી:<br>
            &ang;SOT = &frac12;(&ang;SOQ) = &frac12;(180&deg; - $x$) = <b style='color:#ea580c;'>90&deg; - $x$/2</b><br><br>

            <b style='color:#be123c; font-size:16px;'>સ્ટેપ 3:</b> &ang;ROT શોધવા બંનેનો સરવાળો<br>
            &ang;ROT = &ang;ROS + &ang;SOT<br>
            &ang;ROT = $x$/2 + (90&deg; - $x$/2)<br>
            <div style='text-align:center; background-color:#f0fdf4; padding:10px; border-radius:5px; border:2px dashed #16a34a; margin-top:10px; font-size:18px; font-weight:bold; color:#166534;'>
                &ang;ROT = 90&deg;
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ એક સનાતન સત્ય છે! કોઈપણ રૈખિક જોડના ખૂણાઓના બે દુભાગકો વચ્ચે હંમેશા <b>90&deg; નો કાટખૂણો</b> જ બને. જો હેતુલક્ષી (MCQ) પ્રશ્નમાં આ આકૃતિ આવે તો, કોઈ ગણતરી કર્યા વગર સીધો 90&deg; ટીક કરી દેવો.</p>
        </div>`
    },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "આકૃતિમાં, OP, OQ, OR અને OS ચાર કિરણો છે. સાબિત કરો કે ∠POQ + ∠QOR + ∠SOR + ∠POS = 360°.", 
                answer: `
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
                answer: `
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
                answer: `
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
        "questionNumber": "ઉદાહરણ 6",
        "question": "આકૃતિમાં, AB || CD અને CD || EF છે. વળી EA ⊥ AB છે. જો ∠BEF = 55° હોય, તો x, y અને z નાં મૂલ્યો શોધો.", 
        "answer": `
        <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#9f1239; font-weight:bold;'>લોજિક મેપ:</p>
            <p style='margin:0 0 5px 0; font-size:14px; color:#881337;'>ત્રણેય રેખાઓ એકબીજાને સમાંતર છે. આપણે Z (યુગ્મકોણ) અને C (અંતઃકોણ) ના આકાર શોધીશું.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 240" style="width:100%; max-width:340px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallel Lines -->
                    <line x1="80" y1="40" x2="300" y2="40" stroke="#1e3a8a" stroke-width="2.5"/>
                    <line x1="80" y1="120" x2="300" y2="120" stroke="#1e3a8a" stroke-width="2.5"/>
                    <line x1="80" y1="200" x2="300" y2="200" stroke="#1e3a8a" stroke-width="2.5"/>
                    
                    <!-- Transversal EA (Vertical, Perpendicular to AB) -->
                    <line x1="100" y1="40" x2="100" y2="200" stroke="#be123c" stroke-width="2.5"/>
                    
                    <!-- Transversal EB (At 55 degrees to EF) -->
                    <line x1="100" y1="200" x2="212" y2="40" stroke="#047857" stroke-width="2.5"/>
                    
                    <!-- Right Angle Marker at A -->
                    <polyline points="100,52 112,52 112,40" fill="#fefce8" stroke="#be123c" stroke-width="1.5"/>

                    <!-- Angle Arcs -->
                    <!-- 55 degrees (BEF) -->
                    <path d="M 125.0 200.0 A 25 25 0 0 0 114.3 179.5" fill="none" stroke="#6d28d9" stroke-width="2"/>
                    <!-- z degrees (AEB = 35) -->
                    <path d="M 117.2 175.4 A 30 30 0 0 0 100.0 170.0" fill="none" stroke="#be123c" stroke-width="2"/>
                    <!-- y degrees (Interior angle = 125) -->
                    <path d="M 176.0 120.0 A 20 20 0 0 1 144.5 136.4" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <!-- x degrees (Corresponding angle = 125) -->
                    <path d="M 232.0 40.0 A 20 20 0 0 1 200.6 56.4" fill="none" stroke="#ea580c" stroke-width="2"/>

                    <!-- Points -->
                    <circle cx="100" cy="40" r="4" fill="#be123c"/> <!-- A -->
                    <circle cx="212" cy="40" r="4" fill="#047857"/> <!-- B -->
                    <circle cx="156" cy="120" r="3" fill="#1e3a8a"/> <!-- Intersection on CD -->
                    <circle cx="100" cy="200" r="4" fill="#be123c"/> <!-- E -->
                    <circle cx="280" cy="200" r="3" fill="#1e3a8a"/> <!-- F -->
                    
                    <!-- Labels for lines -->
                    <text x="65" y="45" fill="#1e3a8a" font-weight="bold" font-size="14">A</text>
                    <text x="285" y="32" fill="#1e3a8a" font-weight="bold" font-size="14">B</text>
                    <text x="65" y="125" fill="#1e3a8a" font-weight="bold" font-size="14">C</text>
                    <text x="285" y="112" fill="#1e3a8a" font-weight="bold" font-size="14">D</text>
                    <text x="65" y="205" fill="#1e3a8a" font-weight="bold" font-size="14">E</text>
                    <text x="285" y="192" fill="#1e3a8a" font-weight="bold" font-size="14">F</text>
                    
                    <!-- Angle Labels -->
                    <text x="218" y="70" fill="#ea580c" font-weight="bold" font-size="16">x</text>
                    <text x="162" y="150" fill="#ea580c" font-weight="bold" font-size="16">y</text>
                    <text x="108" y="155" fill="#be123c" font-weight="bold" font-size="16">z</text>
                    <text x="135" y="195" fill="#6d28d9" font-weight="bold" font-size="14">55&deg;</text>
                </svg>
            </div>

            <div style='display:flex; flex-direction:column; gap:12px;'>
                <div style='border:1px solid #cbd5e1; background-color:#f8fafc; padding:12px; border-radius:8px;'>
                    <b style='color:#0369a1;'>સ્ટેપ 1: y ની કિંમત (અંતઃકોણનો C આકાર)</b><br>
                    અહીં CD || EF છે અને તેમની છેદિકા ED (અથવા BE નો ભાગ) છે.<br>
                    તેથી છેદિકાની એક જ તરફના અંતઃકોણો પૂરક હોય:<br>
                    y + 55&deg; = 180&deg;<br>
                    y = 180&deg; - 55&deg; = <b style='color:#ea580c; font-size:16px;'>125&deg;</b>
                </div>

                <div style='border:1px solid #cbd5e1; background-color:#ffffff; padding:12px; border-radius:8px;'>
                    <b style='color:#0369a1;'>સ્ટેપ 2: x ની કિંમત (અનુકોણનો F આકાર)</b><br>
                    અહીં AB || CD છે. <br>
                    તેથી તેમના અનુકોણો સમાન હોય:<br>
                    x = y<br>
                    તેથી <b style='color:#ea580c; font-size:16px;'>x = 125&deg;</b>
                </div>

                <div style='border:1px solid #cbd5e1; background-color:#f8fafc; padding:12px; border-radius:8px;'>
                    <b style='color:#0369a1;'>સ્ટેપ 3: z ની કિંમત શોધવી</b><br>
                    અહીં AB || EF છે (કારણ કે AB||CD અને CD||EF). EA તેમની છેદિકા છે.<br>
                    તેથી &ang;EAB + &ang;FEA = 180&deg; (અંતઃકોણો).<br>
                    પરંતુ EA &perp; AB હોવાથી &ang;EAB = 90&deg; છે. અને &ang;FEA આખો ખૂણો (z + 55&deg;) થી બનેલો છે.<br>
                    90&deg; + (z + 55&deg;) = 180&deg;<br>
                    145&deg; + z = 180&deg;<br>
                    z = 180&deg; - 145&deg; = <b style='color:#be123c; font-size:16px;'>35&deg;</b>
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જો આકૃતિમાં સીધો <b>Z આકાર</b> (યુગ્મકોણ) બનતો હોય તો બંને ખૂણા સરખા કરી દેવા, <b>F આકાર</b> (અનુકોણ) હોય તો પણ સરખા કરી દેવા, અને <b>C આકાર</b> (અંતઃકોણ) બનતો હોય તો બંનેનો સરવાળો હંમેશા 180&deg; કરી દેવો. બસ આ ત્રણ અંગ્રેજી મૂળાક્ષરો યાદ રાખો એટલે આખા પ્રકરણના દાખલા સોલ્વ!</p>
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
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "આકૃતિમાં, OA = OB અને OD = OC છે. સાબિત કરો કે:\n(i) ∆AOD ≅ ∆BOC અને\n(ii) AD || BC", 
                answer: `
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
                answer: `
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
        "questionNumber": "ઉદાહરણ 3",
        "question": "રેખાખંડ AB એ બીજા રેખાખંડ CD ને સમાંતર છે. O એ AD નું મધ્યબિંદુ છે. સાબિત કરો કે:\n(i) ∆AOB ≅ ∆DOC\n(ii) O એ BC નું પણ મધ્યબિંદુ છે.", 
        "answer": `
        <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#9f1239; font-weight:bold;'>મહત્વનો કન્સેપ્ટ:</p>
            <p style='margin:0; font-size:14px; color:#881337;'>અહીં સમાંતર રેખાઓ (AB || CD) આપેલી છે, એટલે <b>યુગ્મકોણો (Z આકાર)</b> નો ઉપયોગ ચોક્કસ થશે! અને શરત લાગશે <b>ખૂખૂબા (ખૂણો-ખૂણો-બાજુ)</b>.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 220" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Fills for Triangles -->
                    <polygon points="150,110 60,40 180,40" fill="#fef3c7" stroke="none"/>
                    <polygon points="150,110 240,180 120,180" fill="#e0f2fe" stroke="none"/>

                    <!-- Parallel Lines AB and CD -->
                    <line x1="40" y1="40" x2="200" y2="40" stroke="#1e3a8a" stroke-width="2"/>
                    <line x1="100" y1="180" x2="260" y2="180" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Intersecting Lines AD and BC -->
                    <line x1="60" y1="40" x2="240" y2="180" stroke="#047857" stroke-width="2"/>
                    <line x1="180" y1="40" x2="120" y2="180" stroke="#047857" stroke-width="2"/>
                    
                    <!-- Tick Marks for OA = OD -->
                    <!-- Midpoint of OA is (105, 75) -->
                    <line x1="99" y1="71" x2="111" y2="79" stroke="#be123c" stroke-width="2.5"/>
                    <line x1="103" y1="67" x2="115" y2="75" stroke="#be123c" stroke-width="2.5"/>
                    <!-- Midpoint of OD is (195, 145) -->
                    <line x1="189" y1="141" x2="201" y2="149" stroke="#be123c" stroke-width="2.5"/>
                    <line x1="193" y1="137" x2="205" y2="145" stroke="#be123c" stroke-width="2.5"/>
                    
                    <!-- Alternate Interior Angles Arcs (Z shape) -->
                    <!-- Angle A -->
                    <path d="M 85 40 A 25 25 0 0 0 79.7 55.3" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <!-- Angle D -->
                    <path d="M 215 180 A 25 25 0 0 0 220.3 164.7" fill="none" stroke="#ea580c" stroke-width="2"/>
                    
                    <!-- Vertically Opposite Angles Arcs -->
                    <path d="M 130.3 94.7 A 25 25 0 0 1 159.8 87.0" fill="none" stroke="#0284c7" stroke-width="2"/>
                    <path d="M 140.2 133.0 A 25 25 0 0 1 169.7 125.3" fill="none" stroke="#0284c7" stroke-width="2"/>

                    <!-- Points -->
                    <circle cx="60" cy="40" r="4" fill="#1e3a8a"/>
                    <circle cx="180" cy="40" r="4" fill="#1e3a8a"/>
                    <circle cx="120" cy="180" r="4" fill="#1e3a8a"/>
                    <circle cx="240" cy="180" r="4" fill="#1e3a8a"/>
                    <circle cx="150" cy="110" r="4" fill="#be123c"/>
                    
                    <!-- Labels -->
                    <text x="50" y="32" fill="#1e3a8a" font-weight="bold" font-size="15">A</text>
                    <text x="185" y="32" fill="#1e3a8a" font-weight="bold" font-size="15">B</text>
                    <text x="105" y="200" fill="#1e3a8a" font-weight="bold" font-size="15">C</text>
                    <text x="245" y="200" fill="#1e3a8a" font-weight="bold" font-size="15">D</text>
                    <text x="160" y="115" fill="#be123c" font-weight="bold" font-size="16">O</text>
                </svg>
            </div>

            <h4 style='color:#047857; margin:0 0 10px 0;'>(i) &Delta;AOB અને &Delta;DOC માં:</h4>
            <ul style='color:#334155; line-height:1.8; margin-top:0;'>
                <li><b>&ang;OAB = &ang;ODC</b> <span style='color:#64748b;'>(AB || CD અને AD તેમની છેદિકા હોવાથી બનતા યુગ્મકોણો)</span></li>
                <li><b>&ang;AOB = &ang;DOC</b> <span style='color:#64748b;'>(પરસ્પર છેદતી રેખાઓથી બનતા અભિકોણો સમાન હોય)</span></li>
                <li><b>OA = OD</b> <span style='color:#64748b;'>(કારણ કે O એ AD નું મધ્યબિંદુ છે)</span></li>
            </ul>
            <div style='background-color:#f0fdf4; padding:8px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d;'>
                તેથી, 'ખૂખૂબા' (AAS) શરત મુજબ, &Delta;AOB &cong; &Delta;DOC સાબિત થાય છે.
            </div>
            
            <h4 style='color:#be123c; margin:15px 0 10px 0;'>(ii) O એ BC નું મધ્યબિંદુ છે સાબિતી:</h4>
            <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ઉપર આપણે સાબિત કર્યું કે &Delta;AOB &cong; &Delta;DOC.</p>
            <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>તેથી, CPCT મુજબ તેમના અનુરૂપ અંગો સમાન થાય. એટલે કે <b>OB = OC</b> થાય.</p>
            <div style='background-color:#fff1f2; padding:8px; border-radius:5px; border-left:4px solid #be123c; font-weight:bold; color:#881337;'>
                જો OB = OC હોય, તો સાબિત થાય છે કે O એ BC નું પણ મધ્યબિંદુ છે.
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાની શોર્ટકટ ટ્રીક એટલે <b>"ડબલ Z આકાર"</b>! તમે ચાહો તો <b>ખૂબાખૂ (ASA)</b> શરત પણ વાપરી શકો છો: એક 'Z' આકારથી &ang;A = &ang;D, બીજા 'Z' આકારથી &ang;B = &ang;C અને વચ્ચેની બાજુ OA = OD. ગમે તે રીત વાપરો, ત્રિકોણ એકરૂપ થતા જ CPCT થી OB = OC સીધું જ સાબિત થઈ જશે.</p>
        </div>`
    },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "∆ABC માં ખૂણા A નો દુભાગક AD એ બાજુ BC ને લંબ છે. સાબિત કરો કે AB = AC અને ∆ABC સમદ્વિબાજુ ત્રિકોણ છે.", 
                answer: `
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
                answer: `
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
                answer: `
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
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 8: ચતુષ્કોણ (ઉદાહરણો)
    // ------------------------------------
    "8": {
        "chapterName": "પ્રકરણ 8",
        "chapterTitle": "ચતુષ્કોણ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "સાબિત કરો કે લંબચોરસનો દરેક ખૂણો કાટખૂણો છે.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>લંબચોરસની વ્યાખ્યા:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>જે સમાંતરબાજુ ચતુષ્કોણનો <b>કોઈ એક ખૂણો કાટખૂણો (90°)</b> હોય, તેને લંબચોરસ કહે છે. આપણે આ એક ખૂણા પરથી બાકીના ત્રણેય ખૂણા 90° સાબિત કરવાના છે.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="180" viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <rect x="50" y="40" width="180" height="100" fill="#f8fafc" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <rect x="50" y="40" width="15" height="15" fill="none" stroke="#be123c" stroke-width="2"/>
                            <rect x="215" y="40" width="15" height="15" fill="none" stroke="#047857" stroke-width="2" stroke-dasharray="3,3"/>
                            <rect x="50" y="125" width="15" height="15" fill="none" stroke="#047857" stroke-width="2" stroke-dasharray="3,3"/>
                            <rect x="215" y="125" width="15" height="15" fill="none" stroke="#047857" stroke-width="2" stroke-dasharray="3,3"/>
                            
                            <text x="35" y="35" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="235" y="35" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="235" y="160" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="35" y="160" fill="#1e3a8a" font-weight="bold">D</text>
                            
                            <text x="70" y="60" fill="#be123c" font-size="12" font-weight="bold">90°</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સાબિતીનાં સ્ટેપ્સ:</b>
                    <ol style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li>ધારો કે ABCD લંબચોરસ છે, જેમાં <b>∠A = 90°</b> છે.</li>
                        <li>લંબચોરસ એ સમાંતરબાજુ ચતુષ્કોણ છે, તેથી <b>AD || BC</b> થાય અને છેદિકા AB છે.</li>
                        <li>આથી છેદિકાની એક જ તરફના અંતઃકોણો પૂરક હોય: <b>∠A + ∠B = 180°</b>.</li>
                        <li>પરંતુ ∠A = 90° હોવાથી: 90° + ∠B = 180° &rArr; <b style='color:#be123c;'>∠B = 90°</b>.</li>
                        <li>વળી, સમાંતરબાજુ ચતુષ્કોણમાં સામસામેના ખૂણાઓ સમાન હોય છે.</li>
                        <li>તેથી, <b>∠C = ∠A = 90°</b> અને <b>∠D = ∠B = 90°</b>.</li>
                    </ol>
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d; margin-top:10px;'>
                        આમ, ∠A = ∠B = ∠C = ∠D = 90° સાબિત થાય છે.
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "સાબિત કરો કે સમબાજુ ચતુષ્કોણના વિકર્ણો પરસ્પર કાટખૂણે દુભાગે છે.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9a3412; font-weight:bold;'>મહત્વનો કન્સેપ્ટ:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#c2410c;'>અહીં આપણે બે પાસપાસેના ત્રિકોણો (દા.ત. ∆AOD અને ∆COD) ને <b>બાબાબા (SSS)</b> શરતથી એકરૂપ સાબિત કરીશું અને પછી રૈખિક જોડનો નિયમ લગાવીશું.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="240" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="140,20 240,120 140,220 40,120" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <line x1="140" y1="20" x2="140" y2="220" stroke="#047857" stroke-width="2"/>
                            <line x1="40" y1="120" x2="240" y2="120" stroke="#047857" stroke-width="2"/>
                            
                            <rect x="140" y="120" width="12" height="12" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            <rect x="128" y="120" width="12" height="12" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="85" y1="65" x2="95" y2="75" stroke="#ea580c" stroke-width="2"/>
                            <line x1="185" y1="65" x2="195" y2="75" stroke="#ea580c" stroke-width="2"/>
                            <line x1="85" y1="175" x2="95" y2="165" stroke="#ea580c" stroke-width="2"/>
                            <line x1="185" y1="175" x2="195" y2="165" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="135" y="15" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="250" y="125" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="135" y="235" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="25" y="125" fill="#1e3a8a" font-weight="bold">D</text>
                            <text x="145" y="115" fill="#be123c" font-weight="bold">O</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>∆AOD અને ∆COD માં સરખામણી:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li><b>OA = OC</b> <span style='color:#64748b;'>(કારણ કે સમાંતરબાજુ ચતુષ્કોણના વિકર્ણો પરસ્પર દુભાગે છે)</span></li>
                        <li><b>OD = OD</b> <span style='color:#64748b;'>(સામાન્ય બાજુ)</span></li>
                        <li><b>AD = CD</b> <span style='color:#64748b;'>(સમબાજુ ચતુષ્કોણની બધી બાજુઓ સમાન હોય છે)</span></li>
                    </ul>
                    
                    <div style='background-color:#f0fdf4; padding:8px; border-radius:5px; border-left:4px solid #16a34a; margin-bottom:10px;'>
                        'બાબાબા' (SSS) શરત મુજબ <b>∆AOD ≅ ∆COD</b> થાય.<br>
                        તેથી CPCT મુજબ: <b>∠AOD = ∠COD</b>.
                    </div>
                    
                    <b style='color:#be123c;'>રૈખિક જોડનો નિયમ:</b><br>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>આ બંને ખૂણાઓ એક સીધી રેખા (AC) પર આવેલા છે.</p>
                    <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold;'>∠AOD + ∠COD = 180°</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>બંને સમાન હોવાથી: 2(∠AOD) = 180° &rArr; <b style='color:#ea580c; font-size:16px;'>∠AOD = 90°</b></p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#14532d; font-weight:bold;'>આથી સાબિત થાય છે કે વિકર્ણો પરસ્પર કાટખૂણે દુભાગે છે.</p>
                </div>`
            },
        { 
        "questionNumber": "ઉદાહરણ 3",
        "question": "સમદ્વિબાજુ ત્રિકોણ ABC માં AB = AC છે. AD એ બહિષ્કોણ PAC નો દુભાગક છે અને CD || AB છે. સાબિત કરો કે:\n(i) ∠DAC = ∠BCA અને\n(ii) ABCD સમાંતરબાજુ ચતુષ્કોણ છે.", 
        "answer": `
        <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#9f1239; font-weight:bold;'>બહિષ્કોણનો પ્રમેય યાદ કરો:</p>
            <p style='margin:0; font-size:14px; color:#881337;'>ત્રિકોણના બહિષ્કોણનું માપ તેના બે <b>અંતઃસંમુખકોણના સરવાળા</b> જેટલું હોય છે. અહીં બહિષ્કોણ PAC નું માપ &ang;B + &ang;C જેટલું થશે.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 220" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Polygon Fills -->
                    <polygon points="100,80 40,180 160,180" fill="#e0f2fe" stroke="none"/>
                    <polygon points="100,80 160,180 220,80" fill="#f8fafc" stroke="none"/>
                    
                    <!-- Line P-A-B -->
                    <line x1="142" y1="10" x2="40" y2="180" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Line BC -->
                    <line x1="40" y1="180" x2="160" y2="180" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Line AC -->
                    <line x1="100" y1="80" x2="160" y2="180" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Line AD Extended -->
                    <line x1="100" y1="80" x2="230" y2="80" stroke="#047857" stroke-width="2"/>
                    
                    <!-- Line CD (Parallel to AB) -->
                    <line x1="160" y1="180" x2="220" y2="80" stroke="#047857" stroke-width="2" stroke-dasharray="5,5"/>
                    
                    <!-- Equal sides AB = AC Tick Marks -->
                    <line x1="62" y1="126" x2="76" y2="134" stroke="#be123c" stroke-width="2.5"/>
                    <line x1="124" y1="134" x2="138" y2="126" stroke="#be123c" stroke-width="2.5"/>
                    
                    <!-- Angle Arcs -->
                    <!-- Angle PAD -->
                    <path d="M 120 80 A 20 20 0 0 0 110.3 62.9" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <!-- Angle DAC -->
                    <path d="M 110.3 97.1 A 20 20 0 0 0 120 80" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <!-- Angle BCA -->
                    <path d="M 140 180 A 20 20 0 0 1 149.7 162.9" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <!-- Angle ABC (Base angle equal to BCA) -->
                    <path d="M 60 180 A 20 20 0 0 0 50.3 162.9" fill="none" stroke="#ea580c" stroke-width="2"/>

                    <!-- Points -->
                    <circle cx="100" cy="80" r="4" fill="#1e3a8a"/>
                    <circle cx="40" cy="180" r="4" fill="#1e3a8a"/>
                    <circle cx="160" cy="180" r="4" fill="#1e3a8a"/>
                    <circle cx="220" cy="80" r="4" fill="#047857"/>
                    <circle cx="142" cy="10" r="3.5" fill="#1e3a8a"/>
                    
                    <!-- Labels -->
                    <text x="75" y="85" fill="#1e3a8a" font-weight="bold" font-size="15">A</text>
                    <text x="25" y="195" fill="#1e3a8a" font-weight="bold" font-size="15">B</text>
                    <text x="165" y="195" fill="#1e3a8a" font-weight="bold" font-size="15">C</text>
                    <text x="225" y="75" fill="#047857" font-weight="bold" font-size="15">D</text>
                    <text x="125" y="18" fill="#1e3a8a" font-weight="bold" font-size="15">P</text>
                </svg>
            </div>

            <h4 style='color:#047857; margin:0 0 10px 0;'>(i) &ang;DAC = &ang;BCA સાબિતી:</h4>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>&Delta;ABC માં AB = AC છે, તેથી તેમની સામેના ખૂણા સમાન થાય: <b>&ang;B = &ang;BCA</b>.</p>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>બહિષ્કોણના નિયમ મુજબ: &ang;PAC = &ang;B + &ang;BCA = 2&ang;BCA.</p>
            <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>AD એ &ang;PAC નો દુભાગક હોવાથી: &ang;PAC = 2&ang;DAC.<br>
            તેથી, 2&ang;DAC = 2&ang;BCA &rArr; <b style='color:#be123c;'>&ang;DAC = &ang;BCA</b> સાબિત થયું.</p>
            
            <h4 style='color:#047857; margin:15px 0 10px 0;'>(ii) ABCD સમાંતરબાજુ ચતુષ્કોણ છે સાબિતી:</h4>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>ઉપર સાબિત કરેલા ખૂણાઓ &ang;DAC અને &ang;BCA એ રેખાઓ AD અને BC ની છેદિકા AC થી બનતા <b>યુગ્મકોણો (Z આકાર)</b> છે.</p>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>જો યુગ્મકોણો સમાન હોય, તો રેખાઓ સમાંતર થાય: <b>AD || BC</b>.</p>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>રકમમાં પહેલેથી જ <b>CD || AB</b> આપેલું છે.</p>
            <div style='background-color:#f0fdf4; padding:8px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d;'>
                જે ચતુષ્કોણની સામસામેની બાજુઓની બંને જોડ સમાંતર હોય, તેને સમાંતરબાજુ ચતુષ્કોણ કહેવાય છે. તેથી ABCD સમાંતરબાજુ ચતુષ્કોણ છે.
            </div>
        </div>`
    },
          { 
        "questionNumber": "ઉદાહરણ 4",
        "question": "સાબિત કરો કે સમાંતરબાજુ ચતુષ્કોણના ખૂણાઓના દુભાગકો લંબચોરસ બનાવે છે.", 
        "answer": `
        <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
            <b style='color:#0369a1;'>રચનાનો તર્ક:</b>
            <p style='margin:5px 0 0 0; color:#334155; font-size:14px;'>જ્યારે બે સમાંતર રેખાઓ વચ્ચે અંતઃકોણો બને, ત્યારે તેમનો સરવાળો 180&deg; થાય છે. તેમના <b>અડધા ભાગ (દુભાગક) નો સરવાળો 90&deg;</b> થાય. આ 90&deg; નો નિયમ વાપરીને આપણે અંદર બનતા ચતુષ્કોણને લંબચોરસ સાબિત કરીશું.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 220" style="width:100%; max-width:340px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram ABCD -->
                    <polygon points="80,40 280,40 220,160 20,160" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Angle Bisectors -->
                    <!-- Bisector A (Green) to P(135.3,129.4) -->
                    <line x1="80" y1="40" x2="145" y2="145" stroke="#047857" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <!-- Bisector B (Red) to Q(182.9,100.0) -->
                    <line x1="280" y1="40" x2="110" y2="145" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <!-- Bisector C (Green) to R(164.7,70.6) -->
                    <line x1="220" y1="160" x2="155" y2="55" stroke="#047857" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <!-- Bisector D (Red) to S(117.1,100.0) -->
                    <line x1="20" y1="160" x2="190" y2="55" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/>
                    
                    <!-- Inner Rectangle PQRS -->
                    <polygon points="135.3,129.4 182.9,100.0 164.7,70.6 117.1,100.0" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                    
                    <!-- Angle Bisector Arcs -->
                    <path d="M 105.0 40.0 A 25 25 0 0 0 68.8 62.4" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 255.0 40.0 A 25 25 0 0 1 268.8 62.4" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 231.2 137.6 A 25 25 0 0 0 195.0 160.0" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 45.0 160.0 A 25 25 0 0 1 31.2 137.6" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    
                    <!-- Right Angle Marker at S (Delta ASD) -->
                    <polyline points="121.3,106.8 128.1,102.6 123.9,95.8" fill="none" stroke="#be123c" stroke-width="1.5"/>

                    <!-- Points -->
                    <circle cx="80" cy="40" r="4" fill="#1e3a8a"/>
                    <circle cx="280" cy="40" r="4" fill="#1e3a8a"/>
                    <circle cx="220" cy="160" r="4" fill="#1e3a8a"/>
                    <circle cx="20" cy="160" r="4" fill="#1e3a8a"/>
                    
                    <!-- Inner Points PQRS -->
                    <circle cx="135.3" cy="129.4" r="3" fill="#ca8a04"/>
                    <circle cx="182.9" cy="100.0" r="3" fill="#ca8a04"/>
                    <circle cx="164.7" cy="70.6" r="3" fill="#ca8a04"/>
                    <circle cx="117.1" cy="100.0" r="3" fill="#ca8a04"/>
                    
                    <!-- Labels -->
                    <text x="65" y="35" fill="#1e3a8a" font-weight="bold" font-size="15">A</text>
                    <text x="285" y="35" fill="#1e3a8a" font-weight="bold" font-size="15">B</text>
                    <text x="230" y="170" fill="#1e3a8a" font-weight="bold" font-size="15">C</text>
                    <text x="5" y="170" fill="#1e3a8a" font-weight="bold" font-size="15">D</text>
                    
                    <text x="135" y="145" fill="#ca8a04" font-weight="bold" font-size="14">P</text>
                    <text x="190" y="105" fill="#ca8a04" font-weight="bold" font-size="14">Q</text>
                    <text x="155" y="62" fill="#ca8a04" font-weight="bold" font-size="14">R</text>
                    <text x="100" y="105" fill="#ca8a04" font-weight="bold" font-size="14">S</text>
                </svg>
            </div>

            <b style='color:#1e3a8a;'>સાબિતી:</b><br>
            <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>ધારો કે સમાંતરબાજુ ચતુષ્કોણ ABCD ના ખૂણાઓના દુભાગકો છેદવાથી ચતુષ્કોણ PQRS બને છે.</p>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>અહીં AD || BC હોવાથી, અંતઃકોણોનો સરવાળો પૂરક હોય:<br>
            &ang;A + &ang;D = 180&deg;</p>
            <p style='margin:5px 0; font-size:14px; color:#334155;'>બંને બાજુ 2 વડે ભાગતા (કારણ કે દુભાગક છે):<br>
            &frac12;&ang;A + &frac12;&ang;D = 90&deg; &rArr; <b style='color:#ea580c;'>&ang;DAS + &ang;ADS = 90&deg;</b></p>
            
            <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; margin-top:10px; margin-bottom:10px;'>
                હવે <b>&Delta;ASD</b> માં: ત્રિકોણના ત્રણેય ખૂણાનો સરવાળો 180&deg; હોય.<br>
                (&ang;DAS + &ang;ADS) + &ang;ASD = 180&deg;<br>
                90&deg; + &ang;ASD = 180&deg; &rArr; <b style='color:#be123c;'>&ang;ASD = 90&deg;</b>
            </div>
            
            <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>અભિકોણો સમાન હોવાથી, ચતુષ્કોણ PQRS નો ખૂણો <b>&ang;PSR = 90&deg;</b> થાય.</p>
            <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>આ જ રીતે, ચતુષ્કોણ PQRS ના બાકીના ત્રણેય ખૂણા (P, Q, R) પણ 90&deg; સાબિત કરી શકાય.</p>
            <p style='margin:5px 0 0 0; font-size:14px; font-weight:bold; color:#1e3a8a;'>જે ચતુષ્કોણના ચારેય ખૂણા કાટખૂણા હોય તે લંબચોરસ છે.</p>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જો પરીક્ષામાં આકૃતિ યાદ ન રહે તો, માત્ર એક ત્રિકોણ <b>&Delta;ASD</b> પકડી લો. સમાંતર રેખાઓ વચ્ચેના અંતઃકોણોનો સરવાળો 180&deg; થાય, તો તેમના અડધા (દુભાગકો) નો સરવાળો <b>90&deg;</b> થાય. ત્રિકોણના બે ખૂણાનો સરવાળો 90&deg; હોય, તો ત્રીજો ખૂણો આપોઆપ <b>90&deg;</b> થઈ જાય! આ રીતે ચારેય ખૂણા 90&deg; સાબિત થવાથી લંબચોરસ બની જશે.</p>
        </div>`
    },
                    { 
                questionNumber: "ઉદાહરણ 6 (IMP)",
                question: "મધ્યબિંદુ પ્રમેયનો ઉપયોગ: ∆ABC માં D, E અને F એ અનુક્રમે બાજુઓ AB, BC અને CA નાં મધ્યબિંદુઓ છે. સાબિત કરો કે D, E અને F ને જોડવાથી ∆ABC નું ચાર એકરૂપ ત્રિકોણોમાં વિભાજન થાય છે.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#c2410c; font-weight:bold;'>મધ્યબિંદુ પ્રમેય શું છે?</p>
                    <p style='margin:0; font-size:14px; color:#9a3412;'>ત્રિકોણની બે બાજુઓના મધ્યબિંદુઓને જોડતો રેખાખંડ ત્રીજી બાજુને <b>સમાંતર</b> હોય છે અને તેનાથી <b>અડધો</b> હોય છે.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="220" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="140,20 40,180 240,180" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <polygon points="90,100 190,100 140,180" fill="#f0fdf4" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="135" y="15" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="25" y="190" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="245" y="190" fill="#1e3a8a" font-weight="bold">C</text>
                            
                            <text x="70" y="100" fill="#be123c" font-weight="bold">D</text>
                            <text x="200" y="100" fill="#be123c" font-weight="bold">F</text>
                            <text x="135" y="200" fill="#be123c" font-weight="bold">E</text>
                            
                            <text x="135" y="70" fill="#047857" font-weight="bold" font-size="16">1</text>
                            <text x="95" y="150" fill="#047857" font-weight="bold" font-size="16">2</text>
                            <text x="135" y="130" fill="#047857" font-weight="bold" font-size="16">3</text>
                            <text x="180" y="150" fill="#047857" font-weight="bold" font-size="16">4</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સાબિતી:</b>
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li>અહીં D અને F એ બાજુઓ AB અને AC ના મધ્યબિંદુઓ છે. મધ્યબિંદુ પ્રમેય મુજબ, <b>DF || BC</b> (એટલે કે DF || BE).</li>
                        <li>તેવી જ રીતે, E અને F મધ્યબિંદુઓ હોવાથી <b>EF || AB</b> (એટલે કે EF || DB).</li>
                    </ul>
                    
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>આમ, ચતુષ્કોણ <b>DBEF</b> માં સામસામેની બાજુઓ સમાંતર હોવાથી તે <b>સમાંતરબાજુ ચતુષ્કોણ</b> છે.</p>
                    
                    <div style='background-color:#fff1f2; padding:10px; border-radius:5px; border-left:4px solid #be123c; margin-bottom:10px;'>
                        આપણે જાણીએ છીએ કે સમાંતરબાજુ ચતુષ્કોણનો વિકર્ણ તેનું <b>બે એકરૂપ ત્રિકોણોમાં</b> વિભાજન કરે છે.<br>
                        ચતુષ્કોણ DBEF માટે DE વિકર્ણ છે &rArr; <b style='color:#1e3a8a;'>∆BDE ≅ ∆FED</b>.
                    </div>
                    
                    <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>તે જ પ્રમાણે સાબિત કરી શકાય કે ચતુષ્કોણ DFCB અને ADEF પણ સમાંતરબાજુ ચતુષ્કોણ છે.</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#334155;'>તેથી, <b style='color:#1e3a8a;'>∆DAF ≅ ∆FED</b> અને <b style='color:#1e3a8a;'>∆EFC ≅ ∆FED</b> મળે.</p>
                    <p style='margin:10px 0 0 0; font-size:15px; font-weight:bold; color:#047857;'>આમ, ચારેય ત્રિકોણો (1, 2, 3, અને 4) એકબીજાને એકરૂપ છે.</p>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 9: વર્તુળ (ઉદાહરણો)
    // ------------------------------------
    "9": {
        "chapterName": "પ્રકરણ 9",
        "chapterTitle": "વર્તુળ (ઉદાહરણો)",
        "qa_list": [
        { 
        "questionNumber": "ઉદાહરણ 1",
        "question": "જો વર્તુળની બે છેદતી જીવાઓ તેમના છેદબિંદુમાંથી પસાર થતા વ્યાસ સાથે સમાન ખૂણા બનાવે, તો સાબિત કરો કે તે જીવાઓ સમાન છે.", 
        "answer": `
        <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#0369a1; font-weight:bold;'>સાબિતીનો તર્ક:</p>
            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં આપણે કેન્દ્રમાંથી જીવાઓ પર લંબ દોરીશું અને બંને નાના ત્રિકોણોને <b>ખૂખૂબા (AAS)</b> શરતથી એકરૂપ સાબિત કરીશું. જો લંબ અંતર સમાન હોય, તો જીવાઓ પણ સમાન હોય.</p>
        </div>
        
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 240" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle -->
                    <circle cx="160" cy="120" r="100" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Diameter PQ -->
                    <line x1="40" y1="120" x2="280" y2="120" stroke="#047857" stroke-width="2" stroke-dasharray="4,4"/>
                    
                    <!-- Chords AB and CD -->
                    <line x1="62.4" y1="141.7" x2="227.6" y2="46.3" stroke="#be123c" stroke-width="2.5"/>
                    <line x1="62.4" y1="98.3" x2="227.6" y2="193.7" stroke="#ea580c" stroke-width="2.5"/>
                    
                    <!-- Perpendiculars OL and OM -->
                    <line x1="160" y1="120" x2="145" y2="94" stroke="#6d28d9" stroke-width="2" stroke-dasharray="3,3"/>
                    <line x1="160" y1="120" x2="145" y2="146" stroke="#6d28d9" stroke-width="2" stroke-dasharray="3,3"/>
                    
                    <!-- Right Angle Markers -->
                    <polyline points="138.1,98 142.1,104.9 149,100.9" fill="none" stroke="#6d28d9" stroke-width="1.5"/>
                    <polyline points="138.1,142 142.1,135.1 149,139.1" fill="none" stroke="#6d28d9" stroke-width="1.5"/>
                    
                    <!-- Angle Arcs for AEO and DEO -->
                    <path d="M 125 120 A 25 25 0 0 0 121.6 107.5" fill="none" stroke="#047857" stroke-width="2"/>
                    <path d="M 125 120 A 25 25 0 0 1 121.6 132.5" fill="none" stroke="#047857" stroke-width="2"/>

                    <!-- Points -->
                    <circle cx="160" cy="120" r="4" fill="#1e3a8a"/> <!-- O -->
                    <circle cx="100" cy="120" r="4" fill="#1e3a8a"/> <!-- E -->
                    <circle cx="145" cy="94" r="3.5" fill="#6d28d9"/> <!-- L -->
                    <circle cx="145" cy="146" r="3.5" fill="#6d28d9"/> <!-- M -->
                    
                    <!-- Labels -->
                    <text x="165" y="125" fill="#1e3a8a" font-weight="bold" font-size="14">O</text>
                    <text x="95" y="113" fill="#1e3a8a" font-weight="bold" font-size="14">E</text>
                    <text x="235" y="45" fill="#be123c" font-weight="bold" font-size="14">A</text>
                    <text x="45" y="150" fill="#be123c" font-weight="bold" font-size="14">B</text>
                    <text x="45" y="95" fill="#ea580c" font-weight="bold" font-size="14">C</text>
                    <text x="235" y="205" fill="#ea580c" font-weight="bold" font-size="14">D</text>
                    <text x="133" y="85" fill="#6d28d9" font-weight="bold" font-size="14">L</text>
                    <text x="133" y="165" fill="#6d28d9" font-weight="bold" font-size="14">M</text>
                    <text x="40" y="113" fill="#047857" font-weight="bold" font-size="14">P</text>
                    <text x="275" y="113" fill="#047857" font-weight="bold" font-size="14">Q</text>
                </svg>
            </div>
            
            <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                <b style='color:#1e3a8a;'>આપેલ છે:</b><br>
                વર્તુળની બે છેદતી જીવાઓ AB અને CD બિંદુ E માં છેદે છે. વ્યાસ PQ એ E માંથી પસાર થાય છે અને <b>&ang;AEO = &ang;DEO</b> આપેલ છે.<br><br>
                
                <b style='color:#047857;'>રચના:</b><br>
                કેન્દ્ર O માંથી જીવા AB પર લંબ OL અને જીવા CD પર લંબ OM દોરો. (માટે &ang;OLE = 90&deg; અને &ang;OME = 90&deg;).<br><br>

                <b style='color:#be123c;'>&Delta;OLE અને &Delta;OME માં સરખામણી:</b>
                <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                    <li><b>&ang;LEO = &ang;MEO</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે, સમાન ખૂણા બનાવે છે)</span></li>
                    <li><b>&ang;OLE = &ang;OME = 90&deg;</b> <span style='color:#64748b;'>(રચના મુજબ)</span></li>
                    <li><b>OE = OE</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span></li>
                </ul>
                
                <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d; margin-top:10px;'>
                    'ખૂખૂબા' (AAS) શરત મુજબ, &Delta;OLE &cong; &Delta;OME સાબિત થાય છે.<br>
                    તેથી CPCT મુજબ: <b>OL = OM</b> થશે.
                </div>
                
                <p style='margin:10px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>નિયમ: જો બે જીવાઓ વર્તુળના કેન્દ્રથી સમાન અંતરે આવેલી હોય (OL = OM), તો તે બે જીવાઓ સમાન જ હોય છે. આથી AB = CD સાબિત થાય છે.</p>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ પ્રમેયમાં ટાર્ગેટ <b>"કેન્દ્રથી અંતર સમાન" (OL = OM)</b> સાબિત કરવાનું છે. કાટકોણ ત્રિકોણ દોરો અને <b>'ખૂખૂબા (AAS)'</b> એકરૂપતા વાપરો. એકવાર અંતર સમાન સાબિત થાય, એટલે સીધો જ નિયમ લગાવી દો કે <i>"જે જીવાઓ કેન્દ્રથી સરખા અંતરે હોય, તે હંમેશા સમાન જ હોય!"</i></p>
        </div>`
    },
        { 
        "questionNumber": "ઉદાહરણ 2",
        "question": "આકૃતિમાં, AB એ વર્તુળનો વ્યાસ છે, CD એ વર્તુળની ત્રિજ્યા જેટલી જીવા છે. AC અને BD ને લંબાવતા તેઓ બિંદુ E માં છેદે છે. સાબિત કરો કે ∠AEB = 60°.", 
        "answer": `
        <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#9a3412; font-weight:bold;'>ખૂણા શોધવાનો નકશો:</p>
            <p style='margin:0 0 5px 0; font-size:14px; color:#c2410c;'>1) સમબાજુ ત્રિકોણ પરથી 60° નો ખૂણો મળશે.<br> 2) વર્તુળના કેન્દ્ર આગળના ખૂણા કરતાં પરિઘ પરનો ખૂણો અડધો હોય છે.<br> 3) અર્ધવર્તુળમાં બનેલો ખૂણો હંમેશા 90° હોય છે.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 280" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle -->
                    <circle cx="160" cy="180" r="80" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Diameter AB -->
                    <line x1="80" y1="180" x2="240" y2="180" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Lines extending to E (Intersecting Lines AE and BE) -->
                    <!-- Coordinates calculated to form 60 degree at E and proper intersections -->
                    <line x1="80" y1="180" x2="160" y2="41.4" stroke="#be123c" stroke-width="2"/> <!-- A to E through C -->
                    <line x1="240" y1="180" x2="160" y2="41.4" stroke="#be123c" stroke-width="2"/> <!-- B to E through D -->
                    
                    <!-- Line CB -->
                    <line x1="240" y1="180" x2="120" y2="110.7" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/>
                    
                    <!-- Chord CD -->
                    <line x1="120" y1="110.7" x2="200" y2="110.7" stroke="#047857" stroke-width="3"/>
                    
                    <!-- Radii OC and OD -->
                    <line x1="160" y1="180" x2="120" y2="110.7" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <line x1="160" y1="180" x2="200" y2="110.7" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                    
                    <!-- Right Angle at C (Angle in Semicircle) -->
                    <!-- Coordinates adjusted to match the angle of line AC -->
                    <polyline points="127,114.7 131.5,106.9 123.7,102.4" fill="none" stroke="#0f172a" stroke-width="1.5"/>

                    <!-- Arcs for angles -->
                    <path d="M 148 160 A 25 25 0 0 1 172 160" fill="none" stroke="#047857" stroke-width="1.5"/>
                    <text x="150" y="152" fill="#047857" font-size="11" font-weight="bold">60&deg;</text>

                    <path d="M 216 166 A 20 20 0 0 0 220 176" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                    <text x="193" y="171" fill="#ea580c" font-size="11" font-weight="bold">30&deg;</text>

                    <!-- Points -->
                    <circle cx="160" cy="180" r="4" fill="#1e3a8a"/> <!-- O -->
                    <circle cx="80" cy="180" r="4" fill="#1e3a8a"/> <!-- A -->
                    <circle cx="240" cy="180" r="4" fill="#1e3a8a"/> <!-- B -->
                    <circle cx="160" cy="41.4" r="4" fill="#be123c"/> <!-- E -->
                    <circle cx="120" cy="110.7" r="4" fill="#047857"/> <!-- C -->
                    <circle cx="200" cy="110.7" r="4" fill="#047857"/> <!-- D -->
                    
                    <!-- Labels -->
                    <text x="60" y="185" fill="#1e3a8a" font-weight="bold" font-size="15">A</text>
                    <text x="250" y="185" fill="#1e3a8a" font-weight="bold" font-size="15">B</text>
                    <text x="155" y="200" fill="#1e3a8a" font-weight="bold" font-size="15">O</text>
                    <text x="155" y="32" fill="#be123c" font-weight="bold" font-size="15">E</text>
                    <text x="100" y="105" fill="#047857" font-weight="bold" font-size="15">C</text>
                    <text x="210" y="105" fill="#047857" font-weight="bold" font-size="15">D</text>
                </svg>
            </div>

            <b style='color:#1e3a8a;'>સ્ટેપ 1:</b><br>
            અહીં <b>CD = વર્તુળની ત્રિજ્યા (OC અને OD)</b> આપેલ છે. આથી &Delta;OCD માં ત્રણેય બાજુઓ સમાન હોવાથી તે સમબાજુ ત્રિકોણ છે.<br>
            તેથી, <b>&ang;COD = 60&deg;</b>.<br><br>

            <div style='border-left:4px solid #047857; padding-left:10px; margin-bottom:10px;'>
                <b style='color:#047857;'>સ્ટેપ 2: વર્તુળનો પ્રમેય</b><br>
                ચાપ CD દ્વારા કેન્દ્ર આગળ બનેલો ખૂણો (&ang;COD) એ પરિઘ પરના બાકીના ભાગમાં બનેલા ખૂણા (&ang;CBD) કરતાં બમણો હોય છે.<br>
                &ang;CBD = &frac12;(&ang;COD) = &frac12;(60&deg;) = <b style='color:#be123c;'>30&deg;</b>
            </div>

            <b style='color:#1e3a8a;'>સ્ટેપ 3:</b><br>
            અહીં AB વ્યાસ છે. વ્યાસ દ્વારા અર્ધવર્તુળમાં અંતરાયેલો ખૂણો 90&deg; હોય છે.<br>
            તેથી <b>&ang;ACB = 90&deg;</b>.<br>
            રૈખિક જોડના નિયમ મુજબ, તેની બહારનો ખૂણો <b>&ang;ECB પણ 90&deg;</b> જ થાય.<br><br>

            <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border:1px dashed #0284c7; margin-bottom:10px;'>
                <b style='color:#0369a1;'>સ્ટેપ 4: &Delta;BCE માં સરવાળો કરો</b><br>
                કોઈપણ ત્રિકોણના ત્રણેય ખૂણાનો સરવાળો 180&deg; હોય છે.<br>
                &ang;CEB + &ang;ECB + &ang;CBE = 180&deg;<br>
                &ang;CEB + 90&deg; + 30&deg; = 180&deg;<br>
                &ang;CEB + 120&deg; = 180&deg; &rArr; <b style='color:#ea580c; font-size:18px;'>&ang;CEB = 60&deg;</b> (જે જ &ang;AEB છે). સાબિત થયું!
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખો દાખલો ઉકેલવા ફક્ત <b>"ત્રિકોણ BCE"</b> પર નજર રાખો! આપણે તેમાં CEB શોધવાનો છે. બાકીના બે ખૂણા મળી જાય એટલે કામ પૂરું. ખૂણો C રૈખિક જોડથી <b>90&deg;</b> (અર્ધવર્તુળનો કાટખૂણો) થાય અને ખૂણો B એ સમબાજુ ત્રિકોણના 60&deg; નો અડધો એટલે <b>30&deg;</b> થાય. 90+30=120, તો બાકી બચ્યો <b>60&deg;</b>, બસ આવી ગયો જવાબ!</p>
        </div>`
    },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "આકૃતિમાં ચક્રીય ચતુષ્કોણ ABCD ના વિકર્ણો AC અને BD છે. જો ∠DBC = 55° અને ∠BAC = 45° હોય, તો ∠BCD શોધો.", 
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#9f1239; font-weight:bold;'>બે પાવરફુલ નિયમો:</p>
                    <ul style='color:#881337; font-size:14px; margin:0; padding-left:20px; line-height:1.8;'>
                        <li>એક જ વૃત્તખંડમાં આવેલા ખૂણાઓ સમાન હોય.</li>
                        <li>ચક્રીય ચતુષ્કોણમાં સામસામેના ખૂણાઓનો સરવાળો 180° થાય.</li>
                    </ul>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:280px; text-align:center;'>
                        <svg width="280" height="260" viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <circle cx="140" cy="130" r="100" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <polygon points="80,50 220,70 190,216 60,190" fill="none" stroke="#047857" stroke-width="2"/>
                            
                            <line x1="80" y1="50" x2="190" y2="216" stroke="#be123c" stroke-width="1.5"/>
                            <line x1="220" y1="70" x2="60" y2="190" stroke="#be123c" stroke-width="1.5"/>
                            
                            <text x="60" y="40" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="235" y="65" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="200" y="235" fill="#1e3a8a" font-weight="bold">C</text>
                            <text x="40" y="200" fill="#1e3a8a" font-weight="bold">D</text>
                            
                            <text x="175" y="95" fill="#ea580c" font-size="12" font-weight="bold">55°</text>
                            <text x="95" y="80" fill="#ea580c" font-size="12" font-weight="bold">45°</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>સ્ટેપ 1: સમાન વૃત્તખંડનો નિયમ</b><br>
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>જીવા CD દ્વારા વર્તુળ પર બે ખૂણા બને છે: <b>∠CAD</b> અને <b>∠CBD</b>.<br>
                    તેથી, <b>∠CAD = ∠CBD</b> થાય.<br>
                    પરંતુ ∠CBD (એટલે કે ∠DBC) = 55° આપેલ છે. આથી <b style='color:#be123c;'>∠CAD = 55°</b> મળે.</p>

                    <b style='color:#1e3a8a;'>સ્ટેપ 2: આખો ખૂણો A શોધવો</b><br>
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>આખો ખૂણો ∠DAB = ∠CAD + ∠BAC.<br>
                    ∠DAB = 55° + 45° = <b style='color:#ea580c;'>100°</b></p>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d;'>
                        <b style='color:#047857;'>સ્ટેપ 3: ચક્રીય ચતુષ્કોણનો નિયમ</b><br>
                        ચક્રીય ચતુષ્કોણના સામસામેના ખૂણાઓ પૂરક (સરવાળો 180°) હોય છે.<br>
                        ∠DAB + ∠BCD = 180°<br>
                        100° + ∠BCD = 180°<br>
                        ∠BCD = 180° - 100° = <b style='color:#be123c; font-size:18px;'>80°</b>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> હેતુલક્ષી પ્રશ્ન માટે, આકૃતિમાં જે ખૂણા "X" આકારમાં એક જ લાઈનના છેડે બનતા હોય તેને સીધા જ સરખા કરી દેવા (જેમકે 55 ની સામે 55). પછી સામસામેનો સરવાળો 180° કરી જવાબ લાવી દેવો!
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "બે વર્તુળો બે બિંદુઓ A અને B માં છેદે છે. AD અને AC અનુક્રમે આ બે વર્તુળોના વ્યાસ છે. સાબિત કરો કે B એ રેખાખંડ DC પર આવેલું છે.", 
                answer: `
                <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#0369a1;'>લોજિક:</b>
                    <p style='margin:5px 0 0 0; color:#334155; font-size:14px;'>જો આપણે સાબિત કરી દઈએ કે બિંદુ B આગળ બનતા બે ખૂણાઓનો સરવાળો બરાબર <b>180° (એક સીધી રેખા)</b> થાય છે, તો સાબિત થઈ જશે કે B એ રેખા DC પર જ આવેલું છે.</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <circle cx="110" cy="100" r="70" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                            <circle cx="210" cy="100" r="70" fill="#fff1f2" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="160" y1="50" x2="60" y2="150" stroke="#047857" stroke-width="2.5"/> <line x1="160" y1="50" x2="260" y2="150" stroke="#047857" stroke-width="2.5"/> <line x1="60" y1="150" x2="260" y2="150" stroke="#ea580c" stroke-width="2"/>
                            
                            <line x1="160" y1="50" x2="160" y2="150" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <rect x="150" y="140" width="10" height="10" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                            <rect x="160" y="140" width="10" height="10" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                            
                            <text x="155" y="40" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="155" y="170" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="45" y="155" fill="#047857" font-weight="bold">D</text>
                            <text x="270" y="155" fill="#047857" font-weight="bold">C</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a;'>રચના:</b> રેખાખંડ AB દોરો.<br><br>
                    
                    <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                        <li>અહીં <b>AD</b> એ પહેલા વર્તુળનો વ્યાસ છે. વ્યાસ દ્વારા અર્ધવર્તુળમાં બનેલો ખૂણો હંમેશા 90° હોય છે.<br>
                        તેથી, <b style='color:#be123c;'>∠ABD = 90°</b> --- (1)</li>
                        
                        <li>તેવી જ રીતે, <b>AC</b> એ બીજા વર્તુળનો વ્યાસ છે.<br>
                        તેથી, <b style='color:#be123c;'>∠ABC = 90°</b> --- (2)</li>
                    </ul>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d; margin-top:10px;'>
                        હવે પરિણામ 1 અને 2 નો સરવાળો કરતાં:<br>
                        ∠ABD + ∠ABC = 90° + 90° = <b>180°</b>
                    </div>
                    
                    <p style='margin:10px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>જો બે પાસપાસેના ખૂણાઓનો સરવાળો 180° થાય, તો તેનો અર્થ એ છે કે તેઓ <b>રૈખિક જોડના ખૂણા</b> બનાવે છે અને તેથી DBC એ એક સીધી રેખા છે. આથી સાબિત થાય છે કે બિંદુ B એ રેખાખંડ DC પર જ આવેલું છે.</p>
                </div>`
            },
             { 
        "questionNumber": "ઉદાહરણ 5",
        "question": "સાબિત કરો કે કોઈપણ ચતુષ્કોણના ખૂણાઓના દુભાગકોથી બનતો ચતુષ્કોણ (જો બને તો) ચક્રીય ચતુષ્કોણ છે.", 
        "answer": `
        <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
            <p style='margin-top:0; color:#c2410c; font-weight:bold;'>ચક્રીય ચતુષ્કોણ સાબિત કરવાની શરત:</p>
            <p style='margin:0; font-size:14px; color:#9a3412;'>અંદર બનતા નવા ચતુષ્કોણ (EFGH) ના <b>સામસામેના ખૂણાઓનો સરવાળો 180°</b> બતાવી દઈશું, એટલે તે આપોઆપ ચક્રીય ચતુષ્કોણ સાબિત થઈ જશે.</p>
        </div>

        <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1; margin-bottom:15px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 260" style="width:100%; max-width:340px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Main Quadrilateral ABCD -->
                    <polygon points="40,220 280,220 250,40 70,40" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                    
                    <!-- Bisectors A and B (Green) -->
                    <line x1="40" y1="220" x2="165" y2="114" stroke="#047857" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <line x1="280" y1="220" x2="155" y2="114" stroke="#047857" stroke-width="1.5" stroke-dasharray="4,4"/>
                    
                    <!-- Bisectors C and D (Red) -->
                    <line x1="250" y1="40" x2="155" y2="152" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <line x1="70" y1="40" x2="165" y2="152" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/>
                    
                    <!-- Cyclic Circle (Dashed Orange) demonstrating it is indeed a cyclic quad! -->
                    <circle cx="160" cy="132.3" r="13.9" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/>
                    
                    <!-- Inner Cyclic Quadrilateral EFGH -->
                    <polygon points="146.3,130 160,118.4 173.7,130 160,146.2" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                    
                    <!-- Angle Bisector Arcs -->
                    <path d="M 65 220 A 25 25 0 0 0 44 195.4" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 255 220 A 25 25 0 0 1 275.9 195.4" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 225 40 A 25 25 0 0 0 254.1 64.6" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
                    <path d="M 95 40 A 25 25 0 0 1 65.9 64.6" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>

                    <!-- Vertices ABCD -->
                    <circle cx="40" cy="220" r="4" fill="#1e3a8a"/>
                    <circle cx="280" cy="220" r="4" fill="#1e3a8a"/>
                    <circle cx="250" cy="40" r="4" fill="#1e3a8a"/>
                    <circle cx="70" cy="40" r="4" fill="#1e3a8a"/>
                    
                    <!-- Vertices EFGH -->
                    <circle cx="146.3" cy="130" r="3" fill="#ca8a04"/>
                    <circle cx="160" cy="146.2" r="3" fill="#ca8a04"/>
                    <circle cx="173.7" cy="130" r="3" fill="#ca8a04"/>
                    <circle cx="160" cy="118.4" r="3" fill="#ca8a04"/>
                    
                    <!-- Labels -->
                    <text x="25" y="230" fill="#1e3a8a" font-weight="bold" font-size="15">A</text>
                    <text x="285" y="230" fill="#1e3a8a" font-weight="bold" font-size="15">B</text>
                    <text x="255" y="35" fill="#1e3a8a" font-weight="bold" font-size="15">C</text>
                    <text x="55" y="35" fill="#1e3a8a" font-weight="bold" font-size="15">D</text>
                    
                    <text x="131" y="135" fill="#ca8a04" font-weight="bold" font-size="13">E</text>
                    <text x="156" y="161" fill="#ca8a04" font-weight="bold" font-size="13">F</text>
                    <text x="180" y="135" fill="#ca8a04" font-weight="bold" font-size="13">G</text>
                    <text x="156" y="112" fill="#ca8a04" font-weight="bold" font-size="13">H</text>
                </svg>
            </div>

            <b style='color:#1e3a8a;'>સાબિતીનાં સ્ટેપ્સ:</b>
            <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>ધારો કે ચતુષ્કોણ ABCD ના ખૂણાઓના દુભાગકો અંદરની બાજુએ છેદીને <b>ચતુષ્કોણ EFGH</b> બનાવે છે.</p>
            
            <ul style='color:#334155; line-height:1.8; margin-top:5px;'>
                <li><b>&Delta;AHB માં:</b> ત્રણેય ખૂણાનો સરવાળો 180&deg; થાય.<br>
                &ang;AHB = 180&deg; - (&frac12;&ang;A + &frac12;&ang;B)<br>
                અભિકોણો સમાન હોવાથી, <b>&ang;EHG = 180&deg; - &frac12;(&ang;A + &ang;B)</b> ......(1)</li>
                
                <li><b>&Delta;CFD માં:</b> તેવી જ રીતે,<br>
                <b>&ang;EFG = 180&deg; - &frac12;(&ang;C + &ang;D)</b> ......(2)</li>
            </ul>
            
            <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; font-weight:bold; color:#14532d; margin-top:10px;'>
                હવે અંદરના ચતુષ્કોણ EFGH ના સામસામેના ખૂણાઓ (&ang;EHG અને &ang;EFG) નો સરવાળો કરતાં:<br>
                &ang;EHG + &ang;EFG = [180&deg; - &frac12;(&ang;A + &ang;B)] + [180&deg; - &frac12;(&ang;C + &ang;D)]<br>
                = 360&deg; - &frac12;(&ang;A + &ang;B + &ang;C + &ang;D)
            </div>
            
            <p style='margin:10px 0 0 0; font-size:14px; color:#334155;'>આપણે જાણીએ છીએ કે મોટા ચતુષ્કોણ ABCD ના ચારેય ખૂણાનો સરવાળો <b>360&deg;</b> થાય છે.<br>
            તેથી, &ang;EHG + &ang;EFG = 360&deg; - &frac12;(360&deg;) = 360&deg; - 180&deg; = <b style='color:#be123c;'>180&deg;</b>.</p>
            <p style='margin:5px 0 0 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>જે ચતુષ્કોણના સામસામેના ખૂણાઓનો સરવાળો 180&deg; થાય, તે <b>ચક્રીય ચતુષ્કોણ</b> છે. સાબિત થયું!</p>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ પ્રમેયની સૌથી મોટી શોર્ટકટ ટ્રીક: અંદરના ચતુષ્કોણના બે સામસામેના ખૂણા (EHG અને EFG) પકડો. આ બંને ખૂણાઓ બે અલગ-અલગ ત્રિકોણો (&Delta;AHB અને &Delta;CFD) માં આવે છે. બંને ત્રિકોણનો કુલ સરવાળો <b>360&deg; (180+180)</b> થાય. તેમાંથી મોટા ચતુષ્કોણના અડધા ખૂણા (360 ના અડધા = 180) બાદ કરી દો. <b>360 - 180 = 180&deg;</b>. સામસામેના ખૂણા 180 એટલે ચતુષ્કોણ સીધો ચક્રીય સાબિત!</p>
        </div>`
    }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 10: હેરોનનું સૂત્ર (ઉદાહરણો)
    // ------------------------------------
    "10": {
        "chapterName": "પ્રકરણ 10",
        "chapterTitle": "હેરોનનું સૂત્ર (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "એક ત્રિકોણની બે બાજુઓ 8 સેમી અને 11 સેમી છે અને તેની પરિમિતિ 32 સેમી છે. તે ત્રિકોણનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>દાખલાનો નકશો:</p>
                    <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>ત્રિકોણનું ક્ષેત્રફળ શોધવા માટે ત્રણેય બાજુઓ હોવી જરૂરી છે. અહીં 2 બાજુઓ અને પરિમિતિ આપી છે, તો પહેલા આપણે <b>ત્રીજી બાજુ</b> શોધીશું અને પછી <b>હેરોનનું સૂત્ર</b> લગાવીશું.</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="150,30 50,160 250,160" fill="#f8fafc" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <text x="75" y="95" fill="#be123c" font-weight="bold" font-size="16">a = 8</text>
                            <text x="185" y="95" fill="#047857" font-weight="bold" font-size="16">b = 11</text>
                            <text x="125" y="185" fill="#ea580c" font-weight="bold" font-size="16">c = ?</text>
                            
                            <text x="150" y="20" fill="#1e3a8a" font-weight="bold" font-size="14">A</text>
                            <text x="35" y="170" fill="#1e3a8a" font-weight="bold" font-size="14">B</text>
                            <text x="260" y="170" fill="#1e3a8a" font-weight="bold" font-size="14">C</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: ત્રીજી બાજુ (c) શોધવી</b>
                    <div style='background-color:#fff1f2; padding:10px; border-radius:5px; border-left:4px solid #be123c; margin:10px 0;'>
                        પરિમિતિ = a + b + c<br>
                        32 = 8 + 11 + c<br>
                        32 = 19 + c &rArr; <b>c = 32 - 19 = <span style='color:#be123c;'>13 સેમી</span></b>
                    </div>
                    
                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: અર્ધપરિમિતિ (s) શોધવી</b>
                    <p style='margin:5px 0 10px 0; font-size:15px; color:#334155;'>s = પરિમિતિ / 2 = 32 / 2 = <b style='color:#047857;'>16 સેમી</b></p>
                    
                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: હેરોનનું સૂત્ર</b>
                    <div style='overflow-x:auto;'>
                        <div style='min-width:280px; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px dashed #16a34a; margin-top:5px;'>
                            ક્ષેત્રફળ = &radic;[ s(s - a)(s - b)(s - c) ]<br>
                            = &radic;[ 16 &times; (16 - 8) &times; (16 - 11) &times; (16 - 13) ]<br>
                            = &radic;[ 16 &times; 8 &times; 5 &times; 3 ]<br>
                            <span style='color:#64748b; font-size:14px;'>(હવે વર્ગમૂળ કાઢવા અવયવો પાડીશું)</span><br>
                            = &radic;[ (4 &times; 4) &times; (4 &times; 2) &times; 5 &times; 3 ]<br>
                            = 4 &times; 2 &times; &radic;(2 &times; 5 &times; 3)<br>
                            <span style='color:#ea580c; font-size:20px;'>= 8&radic;30 સેમી&sup2;</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "એક ત્રિકોણાકાર બગીચો ABC ની બાજુઓ 120 મી, 80 મી અને 50 મી છે. એક માળી ધનિયાને તેની ચારે તરફ વાડ કરવાની છે અને અંદર ઘાસ વાવવાનું છે. તેને કેટલા ક્ષેત્રફળમાં વાવણી કરવાની રહેશે? એક બાજુએ 3 મીટર પહોળા દરવાજા માટેની જગ્યા છોડીને તેને ફરતે કાંટાળી તારની વાડ કરવાનો ખર્ચ ₹20 પ્રતિ મીટરના દરે શોધો.", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#9a3412;'>અહીં બે પ્રશ્નો પૂછ્યા છે:</b>
                    <ol style='color:#c2410c; margin:5px 0 0 0; font-size:14px; padding-left:20px;'>
                        <li><b>ઘાસ વાવવાનું ક્ષેત્રફળ:</b> હેરોનના સૂત્રથી ત્રિકોણનું ક્ષેત્રફળ શોધીશું.</li>
                        <li><b>વાડ કરવાનો ખર્ચ:</b> પરિમિતિમાંથી 3 મીટર (દરવાજો) બાદ કરી, 20 વડે ગુણીશું.</li>
                    </ol>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:320px; text-align:center;'>
                        <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="160,30 50,180 270,180" fill="#dcfce7" stroke="none"/>
                            
                            <line x1="160" y1="30" x2="50" y2="180" stroke="#be123c" stroke-width="3"/> <line x1="160" y1="30" x2="270" y2="180" stroke="#be123c" stroke-width="3"/> <line x1="50" y1="180" x2="220" y2="180" stroke="#be123c" stroke-width="3"/>
                            <line x1="250" y1="180" x2="270" y2="180" stroke="#be123c" stroke-width="3"/>
                            
                            <rect x="220" y="175" width="30" height="10" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
                            <text x="225" y="170" fill="#ca8a04" font-weight="bold" font-size="12">Gate (3m)</text>
                            
                            <text x="155" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                            <text x="35" y="190" fill="#1e3a8a" font-weight="bold">B</text>
                            <text x="280" y="190" fill="#1e3a8a" font-weight="bold">C</text>
                            
                            <text x="80" y="105" fill="#1e3a8a" font-weight="bold" font-size="14">120 m</text>
                            <text x="225" y="105" fill="#1e3a8a" font-weight="bold" font-size="14">80 m</text>
                            <text x="130" y="205" fill="#1e3a8a" font-weight="bold" font-size="14">50 m</text>
                            
                            <text x="145" y="120" fill="#166534" font-weight="bold" font-size="14">ઘાસ</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <h4 style='color:#047857; margin:0 0 10px 0;'>ભાગ 1: ઘાસ વાવવાનું ક્ષેત્રફળ</h4>
                    <p style='margin:5px 0; font-size:14px; color:#334155;'>અહીં a = 120, b = 80, c = 50 છે.</p>
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>અર્ધપરિમિતિ <b>s</b> = (120 + 80 + 50) / 2 = 250 / 2 = <b style='color:#be123c;'>125 મી</b>.</p>
                    
                    <div style='overflow-x:auto; margin-bottom:15px;'>
                        <div style='min-width:300px; font-size:15px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            ક્ષેત્રફળ = &radic;[ 125(125 - 120)(125 - 80)(125 - 50) ]<br>
                            = &radic;[ 125 &times; 5 &times; 45 &times; 75 ]<br>
                            <span style='color:#64748b; font-size:13px;'>(સરળતા માટે અવયવો પાડીએ)</span><br>
                            = &radic;[ (25 &times; 5) &times; 5 &times; (9 &times; 5) &times; (25 &times; 3) ]<br>
                            = 25 &times; 5 &times; 3 &times; &radic;(5 &times; 3)<br>
                            <span style='color:#047857; font-size:18px;'>= 375&radic;15 મી&sup2;</span>
                        </div>
                    </div>

                    <h4 style='color:#be123c; margin:15px 0 10px 0;'>ભાગ 2: વાડ કરવાનો ખર્ચ</h4>
                    <div style='background-color:#fff1f2; padding:10px; border-radius:5px; border-left:4px solid #be123c;'>
                        <p style='margin:0 0 5px 0; font-size:14px;'>કુલ પરિમિતિ = 250 મીટર.</p>
                        <p style='margin:0 0 5px 0; font-size:14px;'>વાડની લંબાઈ = પરિમિતિ - દરવાજાની જગ્યા = 250 - 3 = <b>247 મીટર</b>.</p>
                        <p style='margin:0; font-size:16px; font-weight:bold; color:#9f1239;'>કુલ ખર્ચ = 247 &times; 20 = <span style='font-size:20px;'>₹ 4940</span></p>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3",
                question: "એક ત્રિકોણાકાર જમીનના ટુકડાની બાજુઓનો ગુણોત્તર 3:5:7 છે અને તેની પરિમિતિ 300 મીટર છે. તેનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#14532d;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#166534;'>જ્યારે પણ દાખલામાં <b>"ગુણોત્તર"</b> આપેલો હોય, ત્યારે તેની પાછળ <b>'x'</b> લગાવીને બાજુઓ ધારી લેવી. (જેમ કે 3x, 5x, 7x). પછી બધાનો સરવાળો પરિમિતિ જેટલો બતાવીને x શોધી લેવો!</p>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="300" height="180" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <polygon points="100,20 40,150 260,150" fill="#f8fafc" stroke="#ea580c" stroke-width="3"/>
                            
                            <text x="45" y="80" fill="#1e3a8a" font-weight="bold" font-size="16">3x</text>
                            <text x="140" y="170" fill="#1e3a8a" font-weight="bold" font-size="16">7x</text>
                            <text x="200" y="80" fill="#1e3a8a" font-weight="bold" font-size="16">5x</text>
                            
                            <rect x="10" y="10" width="80" height="30" fill="#fefce8" stroke="#ca8a04" stroke-width="1" rx="5"/>
                            <text x="15" y="30" fill="#ca8a04" font-weight="bold" font-size="12">P = 300 m</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a; font-size:15px;'>સ્ટેપ 1: ત્રણેય બાજુઓ શોધવી</b>
                    <div style='background-color:#fffbeb; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin:10px 0;'>
                        ધારો કે બાજુઓ a = 3x, b = 5x અને c = 7x છે.<br>
                        પરિમિતિ = 3x + 5x + 7x = 300<br>
                        15x = 300 &rArr; <b style='color:#b45309;'>x = 20</b><br><br>
                        <span style='color:#334155;'>હવે કિંમતો મૂકતાં:</span><br>
                        a = 3(20) = <b style='color:#1e3a8a;'>60 મી</b><br>
                        b = 5(20) = <b style='color:#1e3a8a;'>100 મી</b><br>
                        c = 7(20) = <b style='color:#1e3a8a;'>140 મી</b>
                    </div>
                    
                    <b style='color:#1e3a8a; font-size:15px;'>સ્ટેપ 2: અર્ધપરિમિતિ (s)</b>
                    <p style='margin:5px 0 10px 0; font-size:14px; color:#334155;'>s = 300 / 2 = <b style='color:#047857;'>150 મી</b>.</p>
                    
                    <b style='color:#1e3a8a; font-size:15px;'>સ્ટેપ 3: હેરોનનું સૂત્ર લગાવવું</b>
                    <div style='overflow-x:auto;'>
                        <div style='min-width:300px; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px dashed #16a34a; margin-top:5px;'>
                            ક્ષેત્રફળ = &radic;[ 150(150 - 60)(150 - 100)(150 - 140) ]<br>
                            = &radic;[ 150 &times; 90 &times; 50 &times; 10 ]<br>
                            <span style='color:#64748b; font-size:13px;'>(મીંડા વાળી સંખ્યાઓ અલગ કરીએ)</span><br>
                            = &radic;[ 15 &times; 9 &times; 5 &times; 1 &times; 10000 ]<br>
                            = &radic;[ (5 &times; 3) &times; (3 &times; 3) &times; 5 &times; 10000 ]<br>
                            = 5 &times; 3 &times; 100 &times; &radic;3<br>
                            <span style='color:#ea580c; font-size:20px;'>= 1500&radic;3 મી&sup2;</span>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 11: પૃષ્ઠફળ અને ઘનફળ (ઉદાહરણો)
    // ------------------------------------
    "11": {
        "chapterName": "પ્રકરણ 11",
        "chapterTitle": "પૃષ્ઠફળ અને ઘનફળ (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1",
                question: "જેની ત્રાંસી ઊંચાઈ 10 સેમી અને પાયાની ત્રિજ્યા 7 સેમી હોય, તેવા લંબવૃત્તીય શંકુની વક્ર સપાટીનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>માહિતીનું વર્ગીકરણ:</p>
                    <p style='margin:0; font-size:14px; color:#334155;'>ત્રિજ્યા (r) = 7 સેમી, ત્રાંસી ઊંચાઈ (l) = 10 સેમી.<br>શંકુની વક્ર સપાટીનું ક્ષેત્રફળ = &pi;rl</p>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="250" height="220" viewBox="0 0 250 220" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <ellipse cx="125" cy="180" rx="70" ry="20" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <path d="M 55 180 L 125 30 L 195 180" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <line x1="125" y1="30" x2="125" y2="180" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="125" y1="180" x2="195" y2="180" stroke="#047857" stroke-width="2"/>
                            
                            <rect x="125" y="170" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <text x="160" y="195" fill="#047857" font-weight="bold">r = 7 cm</text>
                            <text x="165" y="100" fill="#ea580c" font-weight="bold">l = 10 cm</text>
                            <text x="90" y="115" fill="#be123c" font-weight="bold">h</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a; font-size:16px;'>ગણતરી:</b>
                    <div style='overflow-x:auto;'>
                        <div style='min-width:280px; font-size:16px; font-weight:bold; color:#334155; line-height:2; background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px dashed #16a34a; margin-top:10px;'>
                            વક્ર સપાટીનું ક્ષેત્રફળ = &pi;rl<br>
                            = (22 / 7) &times; 7 &times; 10<br>
                            <span style='color:#64748b; font-size:14px;'>(અહીં 7 અને 7 ના છેદ ઊડી જશે)</span><br>
                            = 22 &times; 10<br>
                            <span style='color:#ea580c; font-size:20px;'>= 220 સેમી&sup2;</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2",
                question: "એક શંકુની ઊંચાઈ 16 સેમી અને પાયાની ત્રિજ્યા 12 સેમી છે. આ શંકુની વક્ર સપાટીનું ક્ષેત્રફળ અને કુલ પૃષ્ઠફળ શોધો. (&pi; = 3.14 લો).", 
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#9f1239;'>અગત્યનું ધ્યાન:</b>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#881337;'>અહીં લંબ ઊંચાઈ (h) આપી છે, પરંતુ સૂત્રમાં ત્રાંસી ઊંચાઈ (l) ની જરૂર પડે છે. તેથી પહેલા <b>પાયથાગોરસના પ્રમેયથી 'l' શોધીશું</b>.</p>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 1: ત્રાંસી ઊંચાઈ (l) શોધવી</b>
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #0369a1; margin:10px 0;'>
                        l&sup2; = r&sup2; + h&sup2;<br>
                        l&sup2; = (12)&sup2; + (16)&sup2;<br>
                        l&sup2; = 144 + 256 = 400<br>
                        તેથી, <b style='color:#be123c;'>l = 20 સેમી</b>
                    </div>
                    
                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 2: વક્ર સપાટીનું ક્ષેત્રફળ (CSA)</b>
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #047857; margin:10px 0;'>
                        CSA = &pi;rl<br>
                        = 3.14 &times; 12 &times; 20<br>
                        = 3.14 &times; 240<br>
                        = <b style='color:#047857;'>753.6 સેમી&sup2;</b>
                    </div>

                    <b style='color:#1e3a8a; font-size:16px;'>સ્ટેપ 3: કુલ પૃષ્ઠફળ (TSA)</b>
                    <div style='overflow-x:auto;'>
                        <div style='min-width:280px; font-size:15px; font-weight:bold; color:#334155; line-height:2; background-color:#fffbeb; padding:12px; border-radius:5px; border-left:4px solid #ca8a04; margin-top:10px;'>
                            TSA = &pi;rl + &pi;r&sup2; <span style='color:#64748b; font-size:13px;'>(વક્ર સપાટી + પાયાનું ક્ષેત્રફળ)</span><br>
                            TSA = 753.6 + (3.14 &times; 12 &times; 12)<br>
                            TSA = 753.6 + (3.14 &times; 144)<br>
                            TSA = 753.6 + 452.16<br>
                            <span style='color:#ea580c; font-size:20px;'>= 1205.76 સેમી&sup2;</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> ત્રાંસી ઊંચાઈ શોધવા માટે પાયથાગોરસની ત્રિપુટીઓ યાદ રાખો! (જેમ કે 3-4-5 ની ત્રિપુટી છે, તેને 4 વડે ગુણો તો <b>12-16-20</b> સીધું જ મળી જાય, ગણતરી ન કરવી પડે!)
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4",
                question: "7 સેમી ત્રિજ્યાવાળા ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 15px 0; font-size:14px; color:#334155;'>ગોલકની સપાટીનું ક્ષેત્રફળ એટલે <b>4 વર્તુળના ક્ષેત્રફળ (&pi;r&sup2;) જેટલું</b> થાય.</p>

                    <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                        <div style='min-width:250px; text-align:center;'>
                            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="background-color:#f8fafc; border-radius:10px; border:1px solid #e2e8f0; max-width:100%; height:auto;">
                                <circle cx="100" cy="100" r="80" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                                
                                <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,4"/>
                                <path d="M 20 100 A 80 25 0 0 0 180 100" fill="none" stroke="#0284c7" stroke-width="2"/>
                                
                                <line x1="100" y1="100" x2="180" y2="100" stroke="#ea580c" stroke-width="2.5"/>
                                <circle cx="100" cy="100" r="4" fill="#1e3a8a"/>
                                
                                <text x="130" y="90" fill="#ea580c" font-weight="bold">r = 7</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div style='overflow-x:auto;'>
                        <div style='min-width:280px; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#fff7ed; padding:12px; border-radius:5px; border-left:5px solid #ea580c;'>
                            ગોલકનું પૃષ્ઠફળ = 4&pi;r&sup2;<br>
                            = 4 &times; (22 / 7) &times; 7 &times; 7<br>
                            <span style='color:#64748b; font-size:14px;'>(એક 7 અને 7 ઊડી જશે)</span><br>
                            = 4 &times; 22 &times; 7<br>
                            = 88 &times; 7<br>
                            <span style='color:#047857; font-size:20px;'>= 616 સેમી&sup2;</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 5",
                question: "21 સેમી ત્રિજ્યાવાળા અર્ધગોલકની (i) વક્ર સપાટીનું ક્ષેત્રફળ અને (ii) કુલ પૃષ્ઠફળ શોધો.", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#0369a1;'>સૂત્રોનો તફાવત સમજો:</b>
                    <ul style='color:#334155; font-size:14px; margin:5px 0 0 0; padding-left:20px;'>
                        <li>અર્ધગોલકની <b>વક્ર સપાટી</b> એટલે માત્ર ગોળાકાર ભાગ (સૂત્ર: 2&pi;r&sup2;)</li>
                        <li>અર્ધગોલકનું <b>કુલ પૃષ્ઠફળ</b> એટલે વક્ર સપાટી + ઉપરનું ઢાંકણ (વર્તુળ). (સૂત્ર: 2&pi;r&sup2; + &pi;r&sup2; = 3&pi;r&sup2;)</li>
                    </ul>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:300px; text-align:center;'>
                        <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <ellipse cx="125" cy="50" rx="80" ry="25" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                            
                            <path d="M 45 50 A 80 80 0 0 0 205 50" fill="#fffbeb" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="125" y1="50" x2="205" y2="50" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="125" cy="50" r="4" fill="#1e3a8a"/>
                            
                            <text x="150" y="40" fill="#be123c" font-weight="bold">r = 21</text>
                            
                            <text x="125" y="110" fill="#b45309" font-weight="bold" font-size="12" text-anchor="middle">વક્ર સપાટી (2πr²)</text>
                            <text x="125" y="25" fill="#ca8a04" font-weight="bold" font-size="12" text-anchor="middle">મથાળું (πr²)</text>
                        </svg>
                    </div>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:15px; border-radius:8px;'>
                        <h4 style='color:#047857; margin:0 0 10px 0;'>(i) વક્ર સપાટીનું ક્ષેત્રફળ (CSA)</h4>
                        <div style='font-size:15px; font-weight:bold; color:#14532d; line-height:1.8;'>
                            CSA = 2&pi;r&sup2;<br>
                            = 2 &times; (22 / 7) &times; 21 &times; 21<br>
                            = 2 &times; 22 &times; 3 &times; 21 <span style='color:#64748b; font-size:12px;'>(7 થી 21 ના છેદ ઉડાડ્યા)</span><br>
                            = 44 &times; 63<br>
                            = <span style='color:#ea580c; font-size:18px;'>2772 સેમી&sup2;</span>
                        </div>
                    </div>

                    <div style='border:1px solid #fecdd3; background-color:#fff1f2; padding:15px; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) કુલ પૃષ્ઠફળ (TSA)</h4>
                        <div style='font-size:15px; font-weight:bold; color:#881337; line-height:1.8;'>
                            TSA = 3&pi;r&sup2;<br>
                            = 3 &times; (22 / 7) &times; 21 &times; 21<br>
                            = 3 &times; 22 &times; 3 &times; 21<br>
                            = 66 &times; 63<br>
                            = <span style='color:#ea580c; font-size:18px;'>4158 સેમી&sup2;</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 8",
                question: "જેની ત્રિજ્યા 6 સેમી અને ઊંચાઈ 7 સેમી હોય, તેવા શંકુનું ઘનફળ શોધો.", 
                answer: `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>યાદ રાખો:</b> નળાકારનું ઘનફળ &pi;r&sup2;h છે, જ્યારે શંકુનું ઘનફળ તેનાથી ત્રીજા ભાગનું (1/3) હોય છે.</p>

                    <div style='overflow-x:auto;'>
                        <div style='min-width:280px; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2; background-color:#fffbeb; padding:15px; border-radius:5px; border-left:5px solid #ca8a04;'>
                            શંકુનું ઘનફળ = (1/3) &pi;r&sup2;h<br>
                            = (1/3) &times; (22 / 7) &times; 6 &times; 6 &times; 7<br>
                            <span style='color:#64748b; font-size:14px;'>(અહીં 7 અને 7 ઉડી જશે. 3 થી 6 નો છેદ ઉડાડતાં 2 મળશે.)</span><br>
                            = 22 &times; 2 &times; 6<br>
                            = 44 &times; 6<br>
                            <span style='color:#047857; font-size:22px;'>= 264 સેમી&sup3;</span>
                        </div>
                    </div>
                </div>
                <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-top:10px;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> જ્યારે ઘનફળ શોધવાનું હોય ત્યારે એકમમાં હંમેશા <b>ઘન (³ - cube)</b> લખવું ભૂલવું નહીં. માર્ક્સ કપાઈ શકે છે!
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 13",
                question: "એક અર્ધગોળાકાર વાટકાની ત્રિજ્યા 3.5 સેમી છે. તો તેમાં કેટલા ઘનફળ જેટલું પાણી સમાવી શકાય?", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>ગણતરીની ટિપ્સ:</p>
                    <p style='margin:0; font-size:14px; color:#334155;'>અહીં ત્રિજ્યા 3.5 સેમી છે. દશાંશ ચિહ્ન દૂર કરવા માટે તેને <b>35/10</b> લખીશું, જેથી છેદ ઉડાડવામાં ખૂબ જ સરળતા રહે.</p>
                </div>

                <div style='background-color:#ffffff; padding:15px; border-radius:8px; border:1px solid #cbd5e1;'>
                    <b style='color:#1e3a8a; font-size:16px;'>અર્ધગોલકનું ઘનફળ = (2/3) &pi;r&sup3;</b>
                    
                    <div style='overflow-x:auto; margin-top:10px;'>
                        <div style='min-width:300px; font-size:16px; font-weight:bold; color:#334155; line-height:2; background-color:#f8fafc; padding:15px; border-radius:5px; border:1px dashed #64748b;'>
                            = (2/3) &times; (22 / 7) &times; (35 / 10) &times; (35 / 10) &times; (35 / 10)<br>
                            <span style='color:#ea580c; font-size:14px;'>(7 થી 35 નો છેદ ઉડાડતાં 5 આવશે. 5 દુ 10 થી એક 10 ઉડી જશે.)</span><br>
                            = (1/3) &times; 22 &times; (35 / 10) &times; (35 / 10)<br>
                            = (1/3) &times; 22 &times; 3.5 &times; 3.5<br>
                            = (1/3) &times; 269.5<br>
                            <span style='color:#047857; font-size:20px;'>&asymp; 89.83 સેમી&sup3; (આશરે)</span>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 12: આંકડાશાસ્ત્ર (ઉદાહરણો)
    // ------------------------------------
    "12": {
        "chapterName": "પ્રકરણ 12",
        "chapterTitle": "આંકડાશાસ્ત્ર (ઉદાહરણો)",
        "qa_list": [
            { 
                questionNumber: "ઉદાહરણ 1 (લંબાલેખ)",
                question: `
<p style='margin:0 0 10px 0; color:#334155; font-size:15px; line-height:1.6;'>ધોરણ 9 ના 40 વિદ્યાર્થીઓને તેમના જન્મનો મહિનો જણાવવાનું કહેવામાં આવ્યું. આ માહિતી પરથી નીચેનો લંબાલેખ (Bar Graph) તૈયાર કરો.</p>
<div style='overflow-x:auto; margin-bottom:10px;'>
    <table style='width:100%; min-width:600px; border-collapse: collapse; text-align:center; border:1px solid #cbd5e1; background-color:#ffffff;'>
        <tr style='background-color:#1e3a8a; color:white;'>
            <th style='padding:10px; border:1px solid #cbd5e1;'>જન્મનો મહિનો</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>જાન્યુ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ફેબ્રુ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>માર્ચ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>એપ્રિલ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>મે</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>જૂન</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>જુલાઈ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ઓગસ્ટ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>સપ્ટે</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ઓક્ટો</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>નવે</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ડિસે</th>
        </tr>
        <tr style='background-color:#f8fafc; font-weight:bold; color:#334155;'>
            <th style='padding:10px; border:1px solid #cbd5e1; color:#ea580c;'>વિદ્યાર્થીઓની સંખ્યા</th>
            <td style='padding:10px; border:1px solid #cbd5e1;'>3</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>4</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>2</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>2</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>5</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>1</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>2</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>6</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>3</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>4</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>4</td>
            <td style='padding:10px; border:1px solid #cbd5e1;'>4</td>
        </tr>
    </table>
</div>`,
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold;'>લંબાલેખ (Bar Graph) ના નિયમો:</p>
                    <ul style='margin:0; font-size:14px; color:#334155; padding-left:20px; line-height:1.8;'>
                        <li>X-અક્ષ પર ગુણાત્મક માહિતી (મહિનાના નામ) અને Y-અક્ષ પર સંખ્યાત્મક માહિતી (વિદ્યાર્થીઓની સંખ્યા) લેવામાં આવે છે.</li>
                        <li>દરેક સ્તંભની પહોળાઈ સમાન હોવી જોઈએ અને બે સ્તંભ વચ્ચેનું અંતર પણ સમાન હોવું જોઈએ.</li>
                    </ul>
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:550px; text-align:center;'>
                        <svg width="550" height="300" viewBox="0 0 550 300" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <g stroke="#f1f5f9" stroke-width="1.5">
                                <line x1="50" y1="50" x2="520" y2="50"/>  <line x1="50" y1="80" x2="520" y2="80"/>  <line x1="50" y1="110" x2="520" y2="110"/> <line x1="50" y1="140" x2="520" y2="140"/> <line x1="50" y1="170" x2="520" y2="170"/> <line x1="50" y1="200" x2="520" y2="200"/> </g>

                            <line x1="50" y1="20" x2="50" y2="230" stroke="#1e3a8a" stroke-width="2.5"/> <line x1="50" y1="230" x2="530" y2="230" stroke="#1e3a8a" stroke-width="2.5"/> <g fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="end">
                                <text x="40" y="235">0</text>
                                <text x="40" y="205">1</text>
                                <text x="40" y="175">2</text>
                                <text x="40" y="145">3</text>
                                <text x="40" y="115">4</text>
                                <text x="40" y="85">5</text>
                                <text x="40" y="55">6</text>
                                <text x="40" y="25">7</text>
                            </g>
                            <text x="15" y="130" fill="#1e3a8a" font-size="12" font-weight="bold" transform="rotate(-90 15,130)">વિદ્યાર્થીઓની સંખ્યા</text>

                            <g fill="#3b82f6" stroke="#1d4ed8" stroke-width="1">
                                <rect x="65" y="140" width="20" height="90"/> <rect x="100" y="110" width="20" height="120"/> <rect x="135" y="170" width="20" height="60"/> <rect x="170" y="170" width="20" height="60"/> <rect x="205" y="80" width="20" height="150" fill="#ea580c"/> <rect x="240" y="200" width="20" height="30"/> <rect x="275" y="170" width="20" height="60"/> <rect x="310" y="50" width="20" height="180" fill="#047857"/> <rect x="345" y="140" width="20" height="90"/> <rect x="380" y="110" width="20" height="120"/> <rect x="415" y="110" width="20" height="120"/> <rect x="450" y="110" width="20" height="120"/> </g>

                            <g fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">
                                <text x="75" y="250">Jan</text>
                                <text x="110" y="250">Feb</text>
                                <text x="145" y="250">Mar</text>
                                <text x="180" y="250">Apr</text>
                                <text x="215" y="250">May</text>
                                <text x="250" y="250">Jun</text>
                                <text x="285" y="250">Jul</text>
                                <text x="320" y="250">Aug</text>
                                <text x="355" y="250">Sep</text>
                                <text x="390" y="250">Oct</text>
                                <text x="425" y="250">Nov</text>
                                <text x="460" y="250">Dec</text>
                            </g>
                            <text x="280" y="280" fill="#1e3a8a" font-size="14" font-weight="bold">જન્મનો મહિનો</text>
                        </svg>
                    </div>
                </div>

                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04;'>
                    <b>🎯 Nitesh Sir ની ટ્રીક:</b> લંબાલેખ દોરતી વખતે સ્કેલમાપ (Scale) લખવું ફરજિયાત છે! અહીં આપણે <b>Y-અક્ષ પર 1 સેમી = 1 વિદ્યાર્થી</b> લીધેલ છે. આલેખમાં જોઈ શકાય છે કે સૌથી વધુ વિદ્યાર્થીઓનો જન્મ ઓગસ્ટ મહિનામાં (6) થયો છે.
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 2 (સ્તંભાલેખ - સમાન વર્ગલંબાઈ)",
               question: `
<p style='margin:0 0 10px 0; color:#334155; font-size:15px; line-height:1.6;'>ધોરણ 9 ના 36 વિદ્યાર્થીઓના વજન (કિગ્રા) ની માહિતી નીચે મુજબ છે. તેનો સ્તંભાલેખ (Histogram) દોરો.</p>
<div style='overflow-x:auto; margin-bottom:10px;'>
    <table style='width:100%; min-width:300px; border-collapse: collapse; text-align:center; border:1px solid #cbd5e1; background-color:#ffffff;'>
        <tr style='background-color:#1e3a8a; color:white;'>
            <th style='padding:10px; border:1px solid #cbd5e1;'>વજન (કિગ્રામાં)</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>વિદ્યાર્થીઓની સંખ્યા</th>
        </tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>30.5 - 35.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>9</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>35.5 - 40.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>6</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>40.5 - 45.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>15</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>45.5 - 50.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>3</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>50.5 - 55.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>1</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>55.5 - 60.5</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>2</td></tr>
    </table>
</div>`,
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#c2410c; font-weight:bold;'>સ્તંભાલેખ (Histogram) ના નિયમો:</p>
                    <ul style='margin:0; font-size:14px; color:#9a3412; padding-left:20px; line-height:1.8;'>
                        <li>અહીં વર્ગો સતત છે (Continuous classes), તેથી સ્તંભો એકબીજાને <b>અડીને (જોડાયેલા)</b> આવશે. કોઈ ખાલી જગ્યા નહિ રહે.</li>
                        <li>આલેખની શરૂઆત 0 થી થતી નથી પરંતુ 30.5 થી થાય છે. તેથી X-અક્ષ પર <b>ખંડિત રેખા (Kink / નિક)</b> દોરવી ફરજિયાત છે.</li>
                    </ul>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px; margin-bottom:15px;'>
                    <div style='min-width:500px; text-align:center;'>
                        <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <g stroke="#f1f5f9" stroke-width="1.5">
                                <line x1="50" y1="40" x2="480" y2="40"/>  <line x1="50" y1="88" x2="480" y2="88"/>  <line x1="50" y1="136" x2="480" y2="136"/> <line x1="50" y1="184" x2="480" y2="184"/> </g>

                            <line x1="50" y1="20" x2="50" y2="232" stroke="#1e3a8a" stroke-width="2.5"/> <line x1="50" y1="232" x2="480" y2="232" stroke="#1e3a8a" stroke-width="2.5"/> <polyline points="50,232 60,225 70,240 80,232" fill="none" stroke="#1e3a8a" stroke-width="2.5"/>
                            <line x1="80" y1="232" x2="90" y2="232" stroke="#1e3a8a" stroke-width="2.5"/>

                            <g fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="end">
                                <text x="40" y="236">0</text>
                                <text x="40" y="212">2</text>
                                <text x="40" y="188">4</text>
                                <text x="40" y="164">6</text>
                                <text x="40" y="140">8</text>
                                <text x="40" y="116">10</text>
                                <text x="40" y="92">12</text>
                                <text x="40" y="68">14</text>
                                <text x="40" y="44">16</text>
                            </g>
                            <text x="15" y="130" fill="#1e3a8a" font-size="12" font-weight="bold" transform="rotate(-90 15,130)">વિદ્યાર્થીઓની સંખ્યા</text>

                            <g fill="#10b981" stroke="#047857" stroke-width="2" opacity="0.85">
                                <rect x="90" y="124" width="50" height="108"/> <rect x="140" y="160" width="50" height="72"/> <rect x="190" y="52" width="50" height="180" fill="#f59e0b"/> <rect x="240" y="196" width="50" height="36"/> <rect x="290" y="220" width="50" height="12"/> <rect x="340" y="208" width="50" height="24"/> </g>

                            <g fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">
                                <text x="90" y="250">30.5</text>
                                <text x="140" y="250">35.5</text>
                                <text x="190" y="250">40.5</text>
                                <text x="240" y="250">45.5</text>
                                <text x="290" y="250">50.5</text>
                                <text x="340" y="250">55.5</text>
                                <text x="390" y="250">60.5</text>
                            </g>
                            <text x="240" y="280" fill="#1e3a8a" font-size="14" font-weight="bold">વજન (કિગ્રામાં)</text>
                        </svg>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 3 (સ્તંભાલેખ - અસમાન વર્ગલંબાઈ)",
              question: `
<p style='margin:0 0 10px 0; color:#334155; font-size:15px; line-height:1.6;'>વિદ્યાર્થીઓએ મેળવેલા ગુણનું આવૃત્તિ વિતરણ નીચે મુજબ છે. તેનો સ્તંભાલેખ દોરો.</p>
<div style='overflow-x:auto; margin-bottom:10px;'>
    <table style='width:100%; min-width:300px; border-collapse: collapse; text-align:center; border:1px solid #cbd5e1; background-color:#ffffff;'>
        <tr style='background-color:#1e3a8a; color:white;'>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ગુણ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>વિદ્યાર્થીઓની સંખ્યા</th>
        </tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>0 - 20</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>7</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>20 - 30</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>10</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>30 - 40</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>10</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>40 - 50</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>20</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>50 - 60</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>20</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>60 - 70</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>15</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>70 - 100</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#047857;'>8</td></tr>
    </table>
</div>
<p style='margin:0; font-size:14px; font-weight:bold; color:#be123c;'>(આ દાખલો પરીક્ષા માટે મોસ્ટ IMP છે).</p>`,
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#9f1239;'>ચેતવણી (મોટી ભૂલ થવાની શક્યતા):</b>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#881337;'>અહીં વર્ગલંબાઈ સમાન નથી! (પહેલા વર્ગમાં 20 નો ગેપ છે, વચ્ચે 10 નો ગેપ છે, અને છેલ્લામાં 30 નો ગેપ છે). જો તમે સીધો આલેખ દોરશો તો ખોટો પડશે. આપણે <b>લંબચોરસની પ્રમાણસર લંબાઈ (સુધારેલી આવૃત્તિ)</b> શોધવી પડશે.</p>
                </div>

                <div style='overflow-x:auto; margin-bottom:15px;'>
                    <table style='width:100%; min-width:500px; border-collapse: collapse; text-align:center; background-color:#ffffff; border-radius:8px; border:1px solid #cbd5e1;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>ગુણ (વર્ગ)</th>
                            <th style='padding:12px; border:1px solid #cbd5e1;'>આવૃત્તિ (વિદ્યાર્થી)</th>
                            <th style='padding:12px; border:1px solid #cbd5e1; background-color:#be123c;'>વર્ગલંબાઈ</th>
                            <th style='padding:12px; border:1px solid #cbd5e1; background-color:#047857;'>પ્રમાણસર આવૃત્તિ (આલેખ માટે)</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>0 - 20</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>7</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>20</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(7 / 20) &times; 10 = 3.5</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>20 - 30</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(10 / 10) &times; 10 = 10</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>30 - 40</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(10 / 10) &times; 10 = 10</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>40 - 50</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>20</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(20 / 10) &times; 10 = 20</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>50 - 60</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>20</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(20 / 10) &times; 10 = 20</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>60 - 70</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>15</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>10</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(15 / 10) &times; 10 = 15</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>70 - 100</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>8</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>30</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#047857; font-weight:bold;'>(8 / 30) &times; 10 = 2.67</td>
                        </tr>
                    </table>
                </div>

                <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-bottom:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> પ્રમાણસર આવૃત્તિ શોધવાનું સૂત્ર: <b>(આપેલ આવૃત્તિ / તે વર્ગની વર્ગલંબાઈ) &times; સૌથી નાની વર્ગલંબાઈ</b>. (અહીં સૌથી નાની વર્ગલંબાઈ 10 છે, તેથી બધાને 10 વડે ગુણ્યા છે). આલેખ દોરતી વખતે Y-અક્ષ પર આ <b>લીલા રંગવાળા</b> નવા માપ જ લેવા!
                </div>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:550px; text-align:center;'>
                        <svg width="550" height="300" viewBox="0 0 550 300" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="40" y1="20" x2="40" y2="250" stroke="#1e3a8a" stroke-width="2.5"/> <line x1="40" y1="250" x2="520" y2="250" stroke="#1e3a8a" stroke-width="2.5"/> <g fill="#8b5cf6" stroke="#5b21b6" stroke-width="2" opacity="0.85">
                                <rect x="40" y="215" width="80" height="35"/> 
                                <rect x="120" y="150" width="40" height="100"/>
                                <rect x="160" y="150" width="40" height="100"/>
                                <rect x="200" y="50" width="40" height="200" fill="#f43f5e"/> <rect x="240" y="50" width="40" height="200" fill="#f43f5e"/> <rect x="280" y="100" width="40" height="150"/>
                                <rect x="320" y="223.3" width="120" height="26.7"/>
                            </g>

                            <g fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">
                                <text x="40" y="265">0</text>
                                <text x="80" y="265">10</text>
                                <text x="120" y="265">20</text>
                                <text x="160" y="265">30</text>
                                <text x="200" y="265">40</text>
                                <text x="240" y="265">50</text>
                                <text x="280" y="265">60</text>
                                <text x="320" y="265">70</text>
                                <text x="360" y="265">80</text>
                                <text x="400" y="265">90</text>
                                <text x="440" y="265">100</text>
                            </g>
                        </svg>
                    </div>
                </div>`
            },
            { 
                questionNumber: "ઉદાહરણ 4 (આવૃત્તિ બહુકોણ)",
              question: `
<p style='margin:0 0 10px 0; color:#334155; font-size:15px; line-height:1.6;'>એક પરીક્ષામાં વિદ્યાર્થીઓએ મેળવેલા ગુણનું આવૃત્તિ બહુકોણ (Frequency Polygon) દોરો.</p>
<div style='overflow-x:auto; margin-bottom:10px;'>
    <table style='width:100%; min-width:300px; border-collapse: collapse; text-align:center; border:1px solid #cbd5e1; background-color:#ffffff;'>
        <tr style='background-color:#1e3a8a; color:white;'>
            <th style='padding:10px; border:1px solid #cbd5e1;'>ગુણ</th>
            <th style='padding:10px; border:1px solid #cbd5e1;'>વિદ્યાર્થીઓની સંખ્યા</th>
        </tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>0 - 10</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>5</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>10 - 20</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>10</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>20 - 30</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>4</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>30 - 40</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>6</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>40 - 50</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>7</td></tr>
        <tr><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>50 - 60</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>3</td></tr>
        <tr style='background-color:#f8fafc;'><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#334155;'>60 - 70</td><td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>2</td></tr>
    </table>
</div>`,
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#c2410c; font-weight:bold;'>આવૃત્તિ બહુકોણ દોરવાના સ્ટેપ્સ:</p>
                    <ul style='margin:0; font-size:14px; color:#9a3412; padding-left:20px; line-height:1.8;'>
                        <li>સૌપ્રથમ દરેક વર્ગની <b>મધ્યકિંમત (Class mark)</b> શોધવી પડે. <br>સૂત્ર: મધ્યકિંમત = (ઉર્ધ્વસીમા + અધઃસીમા) / 2.</li>
                        <li>આલેખને X-અક્ષ સાથે જોડવા માટે આગળ એક કાલ્પનિક વર્ગ (-10 થી 0) અને પાછળ એક કાલ્પનિક વર્ગ (70 થી 80) ધારીને તેમની આવૃત્તિ શૂન્ય (0) લેવી.</li>
                    </ul>
                </div>

                <div style='overflow-x:auto; margin-bottom:15px;'>
                    <table style='width:100%; min-width:350px; border-collapse: collapse; text-align:center; background-color:#ffffff; border-radius:8px; border:1px solid #cbd5e1;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>ગુણ (વર્ગ)</th>
                            <th style='padding:8px; border:1px solid #cbd5e1; background-color:#ea580c;'>મધ્યકિંમત (X-અક્ષ)</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>આવૃત્તિ (Y-અક્ષ)</th>
                        </tr>
                        <tr style='background-color:#f1f5f9; color:#64748b;'>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>-10 - 0 (કાલ્પનિક)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>-5</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>0</td>
                        </tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>0 - 10</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>5</td><td style='padding:8px; border:1px solid #cbd5e1;'>5</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>10 - 20</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>15</td><td style='padding:8px; border:1px solid #cbd5e1;'>10</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>20 - 30</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>25</td><td style='padding:8px; border:1px solid #cbd5e1;'>4</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>30 - 40</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>35</td><td style='padding:8px; border:1px solid #cbd5e1;'>6</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>40 - 50</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>45</td><td style='padding:8px; border:1px solid #cbd5e1;'>7</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>50 - 60</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>55</td><td style='padding:8px; border:1px solid #cbd5e1;'>3</td></tr>
                        <tr><td style='padding:8px; border:1px solid #cbd5e1;'>60 - 70</td><td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>65</td><td style='padding:8px; border:1px solid #cbd5e1;'>2</td></tr>
                        <tr style='background-color:#f1f5f9; color:#64748b;'>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>70 - 80 (કાલ્પનિક)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>75</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>0</td>
                        </tr>
                    </table>
                </div>

                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:550px; text-align:center;'>
                        <svg width="550" height="250" viewBox="0 0 550 250" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1; max-width:100%; height:auto;">
                            <line x1="80" y1="20" x2="80" y2="200" stroke="#1e3a8a" stroke-width="2.5"/> <line x1="30" y1="200" x2="520" y2="200" stroke="#1e3a8a" stroke-width="2.5"/> <polyline points="55,200 105,125 155,50 205,140 255,110 305,95 355,155 405,170 455,200" fill="none" stroke="#ea580c" stroke-width="3"/>
                            
                            <g fill="#be123c">
                                <circle cx="55" cy="200" r="5"/>
                                <circle cx="105" cy="125" r="5"/>
                                <circle cx="155" cy="50" r="5"/>
                                <circle cx="205" cy="140" r="5"/>
                                <circle cx="255" cy="110" r="5"/>
                                <circle cx="305" cy="95" r="5"/>
                                <circle cx="355" cy="155" r="5"/>
                                <circle cx="405" cy="170" r="5"/>
                                <circle cx="455" cy="200" r="5"/>
                            </g>

                            <g fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">
                                <text x="55" y="220">-5</text>
                                <text x="105" y="220">5</text>
                                <text x="155" y="220">15</text>
                                <text x="205" y="220">25</text>
                                <text x="255" y="220">35</text>
                                <text x="305" y="220">45</text>
                                <text x="355" y="220">55</text>
                                <text x="405" y="220">65</text>
                                <text x="455" y="220">75</text>
                            </g>
                            <text x="255" y="245" fill="#1e3a8a" font-size="14" font-weight="bold">ગુણ (મધ્યકિંમત)</text>
                        </svg>
                    </div>
                </div>`
            }
        ]
    }

};

