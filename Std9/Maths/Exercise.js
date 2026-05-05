var njMathsExercise = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ (સ્વાધ્યાય)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "શું શૂન્ય એ એક સંમેય સંખ્યા છે? શું તમે તેને p પૂર્ણાંક અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે p/q સ્વરૂપમાં લખી શકો?", 
                "answer": `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <h4 style='color:#14532d; margin:0 0 10px 0; font-size:18px;'>હા, શૂન્ય (0) એ એક સંમેય સંખ્યા છે.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> કોઈપણ સંખ્યાને જો p/q સ્વરૂપમાં દર્શાવી શકાય (જ્યાં p અને q પૂર્ણાંક હોય અને q &ne; 0), તો તેને સંમેય સંખ્યા કહેવાય.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #bbf7d0;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'>શૂન્યને આપણે નીચે મુજબ p/q સ્વરૂપમાં લખી શકીએ છીએ:</p>
                        <div style='display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>1</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#be123c;'>-3</div>
                            </div>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:14px; text-align:center; color:#64748b;'>(અહીં p = 0 છે જે પૂર્ણાંક છે, અને q અનુક્રમે 1, 5, -3 છે જે શૂન્ય નથી).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "3 અને 4 વચ્ચેની છ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold; font-size:16px;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>આપણે 3 અને 4 વચ્ચેની <b>6</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#ffffff; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <b>સ્ટેપ 1:</b> જેટલી સંખ્યા શોધવી હોય તેમાં 1 ઉમેરો. (અહીં n = 6 છે, તેથી 6 + 1 = <b style='color:#be123c; font-size:18px;'>7</b>).<br>
                        <b>સ્ટેપ 2:</b> આપેલી બંને સંખ્યાઓના અંશ અને છેદને <b>7</b> વડે ગુણો.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#e0f2fe; padding:15px; border-radius:8px; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>3</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>3 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>21</div>
                                <div style='padding:0 5px; color:#047857;'>7</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>4</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #be123c; padding:0 5px; color:#be123c;'>28</div>
                                <div style='padding:0 5px; color:#be123c;'>7</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે 21/7 અને 28/7 વચ્ચેની 6 સંખ્યાઓ ક્રમમાં લખી નાખો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:10px; flex-wrap:wrap; background-color:#ffedd5; padding:12px; border-radius:8px; border:1px dashed #ea580c;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>22</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>23</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>24</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>25</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>26</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>27</div><div style='padding:0 5px; color:#9a3412;'>7</div></div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> જો પરીક્ષામાં હેતુલક્ષી પ્રશ્નમાં પૂછાય, તો સીધી જ 3 અને 4 ની પાછળ એક-એક મીંડું (0) લગાવી દો (એટલે 30 અને 40). હવે 30 અને 40 વચ્ચેની સંખ્યા લખી, બધાના છેદમાં 10 મૂકી દો! (31/10, 32/10... 39/10). આ જવાબ પણ સાચો જ ગણાય!
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "3/5 અને 4/5 વચ્ચેની પાંચ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'>અહીં છેદ સરખા (5) જ છે, પરંતુ 3 અને 4 વચ્ચે સીધી કોઈ પૂર્ણાંક સંખ્યા મળતી નથી. આપણે <b>5</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #0284c7; margin-bottom:15px;'>
                        નિયમ મુજબ, n = 5 હોવાથી, (5 + 1) = <b style='color:#1e3a8a;'>6</b> વડે અંશ અને છેદને ગુણીશું.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#f0fdf4; padding:15px; border-radius:8px; border:1px solid #bbf7d0; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>3</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>3 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#047857;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px; color:#16a34a;'>18</div>
                                <div style='padding:0 5px; color:#16a34a;'>30</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>4</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#ea580c;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>24</div>
                                <div style='padding:0 5px; color:#ea580c;'>30</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે અંશની સંખ્યા 18 અને 24 ની વચ્ચે આવતી સંખ્યાઓ લખી છેદમાં 30 મૂકો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:12px; flex-wrap:wrap; background-color:#f5f3ff; padding:15px; border-radius:8px; border:2px dashed #8b5cf6;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>19</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>20</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>21</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>22</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>23</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક પ્રાકૃતિક સંખ્યા એ પૂર્ણ સંખ્યા છે.\n(ii) દરેક પૂર્ણાંક એ પૂર્ણ સંખ્યા છે.\n(iii) દરેક સંમેય સંખ્યા એ પૂર્ણ સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> પ્રાકૃતિક સંખ્યાઓનો ગણ N = {1, 2, 3, ...} છે. જ્યારે પૂર્ણ સંખ્યાઓનો ગણ W = {0, 1, 2, 3, ...} છે. આથી બધી જ પ્રાકૃતિક સંખ્યાઓ પૂર્ણ સંખ્યાઓના ગણમાં આવી જાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> પૂર્ણાંક સંખ્યાઓ (Z) માં ઋણ સંખ્યાઓ (જેમ કે -1, -2, -3) નો પણ સમાવેશ થાય છે. પરંતુ પૂર્ણ સંખ્યાઓ (W) માં ઋણ સંખ્યાઓ હોતી નથી.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંમેય સંખ્યાઓ (Q) માં અપૂર્ણાંકો (દા.ત. 1/2, 3/5, 4/7) આવે છે, પરંતુ પૂર્ણ સંખ્યાઓ (W) એ આખી સંખ્યાઓ જ હોય છે, તેમાં અપૂર્ણાંક હોતા નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (પરીક્ષા માટે ગોલ્ડન રૂલ):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ ક્રમ યાદ રાખો: <b>N &rarr; W &rarr; Z &rarr; Q &rarr; R</b></p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px;'>
                        <li>જો પ્રશ્નમાં ડાબી બાજુથી જમણી બાજુ જવાનું હોય (દા.ત. N એ W છે?), તો વિધાન હંમેશા <b>સત્ય</b>.</li>
                        <li>જો જમણી બાજુથી ડાબી બાજુ આવવાનું હોય (દા.ત. Q એ W છે?), તો વિધાન હંમેશા <b>અસત્ય</b>.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક અસંમેય સંખ્યા એ વાસ્તવિક સંખ્યા છે.\n(ii) સંખ્યારેખા પરનું દરેક બિંદુ કોઈક પ્રાકૃતિક સંખ્યા m માટે √m સ્વરૂપનું હોય છે.\n(iii) દરેક વાસ્તવિક સંખ્યા એ અસંમેય સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓનો ગણ (R) એ સંમેય સંખ્યાઓ અને અસંમેય સંખ્યાઓ બંનેનો બનેલો છે. આથી બધી જ અસંમેય સંખ્યાઓ વાસ્તવિક સંખ્યાઓ કહેવાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંખ્યારેખા પર ઋણ સંખ્યાઓ (જેમ કે -2, -3) પણ આવેલી હોય છે. પરંતુ કોઈપણ પ્રાકૃતિક સંખ્યા (ધન સંખ્યા) નું વર્ગમૂળ ક્યારેય ઋણ હોઈ શકે નહીં.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓમાં સંમેય સંખ્યાઓ (જેમ કે 2, 5, 3/4) નો પણ સમાવેશ થાય છે, જે અસંમેય નથી. ઉદાહરણ તરીકે, 2 એ વાસ્તવિક સંખ્યા છે, પરંતુ તે અસંમેય નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ સમીકરણ મગજમાં ફિટ કરી દો: <b>R (વાસ્તવિક) = Q (સંમેય) + I (અસંમેય)</b></p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'>આનો અર્થ એ કે સંમેય અને અસંમેય બંને ભેગા થઈને વાસ્તવિક સંખ્યા બનાવે છે. એટલે બધી અસંમેય એ વાસ્તવિક છે (સત્ય), પણ બધી વાસ્તવિક એ અસંમેય નથી (કારણ કે તેમાં સંમેય પણ હોય છે).</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 2",
                "marks": 2,
                "question": "શું દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોય છે? જો ના, તો એવી એક સંખ્યાનું ઉદાહરણ આપો જેનું વર્ગમૂળ સંમેય સંખ્યા હોય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#be123c; margin:0 0 10px 0; font-size:18px;'>ના, દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોતું નથી.</h4>
                    
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1; font-weight:bold;'>ઉદાહરણ તરીકે પૂર્ણવર્ગ સંખ્યાઓ લઈએ:</p>
                        
                        <div style='display:flex; flex-wrap:wrap; gap:15px; align-items:center;'>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;4 = 2</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;9 = 3</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;16 = 4</span>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#334155;'>અહીં 4, 9, અને 16 એ ધન પૂર્ણાંક છે. પરંતુ તેમનાં વર્ગમૂળ (2, 3, 4) <b>સંમેય સંખ્યાઓ</b> છે, અસંમેય નથી. (કારણ કે 2 ને 2/1 સ્વરૂપે લખી શકાય છે).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સંખ્યારેખા પર √5 ને કેવી રીતે દર્શાવી શકાય તે બતાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પાયથાગોરસના પ્રમેયનો ઉપયોગ:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે જાણીએ છીએ કે <b>5 = 4 + 1</b>. એટલે કે <b>5 = (2)&sup2; + (1)&sup2;</b>.<br>
                    તેથી, આપણે કાટકોણ ત્રિકોણનો <b>પાયો 2 એકમ</b> અને <b>લંબ 1 એકમ</b> લઈશું.</p>
                    
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:15px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>સંખ્યારેખા પર શૂન્ય (0) ને સંગત બિંદુ <b>O</b> લો.</li>
                            <li>O થી ધન દિશામાં 2 એકમ અંતરે બિંદુ <b>A</b> લો. (OA = 2 એકમ).</li>
                            <li>બિંદુ A આગળ સંખ્યારેખાને લંબ હોય તેવો રેખાખંડ <b>AB</b> દોરો, જેની લંબાઈ 1 એકમ હોય. (AB = 1 એકમ).</li>
                            <li>O અને B ને જોડો. કાટકોણ ત્રિકોણ OAB માં પાયથાગોરસના પ્રમેય મુજબ:<br>
                            OB&sup2; = OA&sup2; + AB&sup2; = (2)&sup2; + (1)&sup2; = 4 + 1 = 5. તેથી <b>OB = &radic;5</b> થાય.</li>
                            <li>O ને કેન્દ્ર લઈ, OB જેટલી ત્રિજ્યા લઈ પરિકરની મદદથી સંખ્યારેખા પર એક ચાપ મારો. આ ચાપ સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>P એ &radic;5</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="340" height="180" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="140" x2="320" y2="140" stroke="#1e3a8a" stroke-width="2.5"/>
                            
                            <circle cx="50" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="45" y="165" fill="#1e3a8a" font-weight="bold">O (0)</text>
                            
                            <circle cx="110" cy="140" r="4" fill="#64748b"/>
                            <text x="105" y="165" fill="#64748b" font-weight="bold">1</text>
                            
                            <circle cx="170" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="165" y="165" fill="#1e3a8a" font-weight="bold">A (2)</text>
                            
                            <circle cx="230" cy="140" r="4" fill="#64748b"/>
                            <text x="225" y="165" fill="#64748b" font-weight="bold">3</text>
                            
                            <line x1="170" y1="140" x2="170" y2="80" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="170" cy="80" r="5" fill="#be123c"/>
                            <text x="175" y="70" fill="#be123c" font-weight="bold">B</text>
                            
                            <rect x="160" y="130" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="50" y1="140" x2="170" y2="80" stroke="#047857" stroke-width="3"/>
                            
                            <path d="M 170 80 A 134.16 134.16 0 0 1 184.16 140" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="6,4"/>
                            <circle cx="184.16" cy="140" r="5" fill="#ea580c"/>
                            <text x="180" y="165" fill="#ea580c" font-weight="bold">P(√5)</text>
                            
                            <text x="110" y="155" fill="#1e3a8a" font-size="12" font-weight="bold">2 એકમ</text>
                            <text x="180" y="115" fill="#be123c" font-size="12" font-weight="bold">1 એકમ</text>
                            <text x="90" y="100" fill="#047857" font-weight="bold" font-size="16">√5</text>
                        </svg>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    કોઈપણ વર્ગમૂળ દર્શાવવા માટે તે સંખ્યાની નજીકનો <b>પૂર્ણવર્ગ</b> શોધી કાઢો. જેમ કે 5 ની નજીક પૂર્ણવર્ગ 4 છે (જે 2 નો વર્ગ છે). એટલે પાયામાં સીધા 2 એકમ લઈ લેવા અને ઊભી લાઈન (લંબ) હંમેશા <b>1 એકમ</b> જ લેવી. દાખલો એકદમ આસાનીથી પૂરો!
                </div>`
            },            
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેની સંખ્યાઓને દશાંશ સ્વરૂપમાં લખો અને તે કેવા પ્રકારની દશાંશ અભિવ્યક્તિ ધરાવે છે તે જણાવો:\n(i) 36/100  (ii) 1/11", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:20px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(i) 36 / 100</h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; display:inline-block;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>36</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>100</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = 0.36</span>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>

                    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(ii) 1 / 11</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ચાલો 1 નો 11 વડે ભાગાકાર કરીએ (મોબાઈલમાં જોવા માટે ભાગાકારને ડાબી-જમણી બાજુ સ્ક્રોલ કરો):</p>
                        
                        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>
                            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>
                                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.0909...</div>
                                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>
                                <div style='display:flex;'>
                                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>11</div>
                                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                        <div>&nbsp;1.0000</div>
                                        <div style='color:#64748b;'>-0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;10</div>
                                        <div style='color:#64748b;'>-&nbsp;0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;100</div>
                                        <div style='color:#be123c;'>-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;100</div>
                                        <div style='color:#be123c;'>&nbsp;&nbsp;-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં શેષ વારંવાર 1 આવે છે. ભાગફળમાં 09 નું પુનરાવર્તન થાય છે.<br>
                        તેથી, <b>1/11 = 0.0909... = 0.<span style='text-decoration:overline;'>09</span></b></p>
                        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ અભિવ્યક્તિ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>ભાગાકાર કર્યા વગર પણ દશાંશનો પ્રકાર જાણી શકાય! જો છેદના અવયવો <b>ફક્ત 2 અથવા 5</b> જ હોય (અથવા બંને હોય), તો તે હંમેશા <b>શાંત દશાંશ</b> જ હોય. જો 2 કે 5 સિવાયનો કોઈ પણ અવયવ (જેમ કે 3, 7, 11) આવે, તો તે <b>અનંત આવૃત</b> જ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "p પૂર્ણાંક હોય અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે નીચેની સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવો:\n(i) 0.6̅ \n(ii) 0.47̅", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 0.<span style='text-decoration:overline;'>6</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        
                        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>
                            ધારો કે <b>x = 0.<span style='text-decoration:overline;'>6</span></b><br>
                            &there4; x = 0.6666... <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં 1 અંક (6) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 10 વડે ગુણતા:<br>
                            10x = 6.6666... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 6.6666...<br>
                                - &nbsp;x = 0.6666...<br>
                                <div style='border-top:1px solid #94a3b8; width:150px;'></div>
                                &nbsp;&nbsp;9x = 6.0000...
                            </div><br>
                            &there4; 9x = 6<br>
                            &there4; x = 6/9 <br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b> (છેદ ઉડાડતા)
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) 0.4<span style='text-decoration:overline;'>7</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>(નોંધ: અહીં માત્ર 7 પર જ બાર છે, 4 પર નથી)</p>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; font-size:15px; color:#881337; line-height:1.8;'>
                            ધારો કે <b>x = 0.4777...</b> <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં માત્ર 1 અંક (7) નું પુનરાવર્તન થાય છે, તેથી 10 વડે ગુણતા:<br>
                            10x = 4.7777... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 4.777...<br>
                                - &nbsp;x = 0.477...<br>
                                <div style='border-top:1px solid #fecdd3; width:150px;'></div>
                                &nbsp;&nbsp;9x = 4.300...
                            </div><br>
                            &there4; 9x = 4.3<br>
                            &there4; 9x = 43/10<br>
                            &there4; x = 43 / (10 &times; 9)<br>
                            &there4; <b style='color:#e11d48; font-size:16px;'>x = 43/90</b>
                        </div>
                    </div>
                </div>

                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Super Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી કર્યા વગર સીધો જ જવાબ લખો!</p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>
                        <li><b>ટ્રીક 1:</b> પોઈન્ટ પછી જેટલા આંકડા પર બાર (રેખા) હોય, તેટલા <b>9</b> છેદમાં મૂકી દો.<br>
                        દા.ત. 0.<span style='text-decoration:overline;'>6</span> &rarr; 6/9 (છેદ ઉડાડતા 2/3)<br>
                        0.<span style='text-decoration:overline;'>001</span> &rarr; 1/999 (કારણ કે 3 અંક પર બાર છે)</li>
                        <li><b>ટ્રીક 2:</b> જો અમુક અંક પર બાર ન હોય (જેમ કે 0.4<span style='text-decoration:overline;'>7</span>):<br>
                        સ્ટેપ 1: આખી સંખ્યા (47) માંથી બાર વગરની સંખ્યા (4) <b>બાદ કરો</b> &rarr; 47 - 4 = <b>43</b> (આ તમારો અંશ).<br>
                        સ્ટેપ 2: જેટલા અંક પર બાર છે તેટલા <b>9</b> અને જેટલા પર નથી તેટલા <b>0</b> છેદમાં લખો &rarr; એક 9 અને એક 0 એટલે <b>90</b>.<br>
                        જવાબ: <b style='color:#be123c;'>43/90</b> સીધો તૈયાર!</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "1/17 ની દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત અંકોની સંખ્યા વધુમાં વધુ કેટલી હશે? તમારો જવાબ ભાગાકાર કરીને ચકાસો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> કોઈપણ અપૂર્ણાંક 1/n માટે, પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા હંમેશા (n - 1) કરતાં ઓછી અથવા બરાબર હોય છે.</p>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-bottom:15px;'>
                        <p style='margin:0; font-size:15px; color:#14532d;'>અહીં n = 17 છે. તેથી પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા <b>17 - 1 = 16</b> હોઈ શકે.</p>
                    </div>
                    
                    <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>ભાગાકારની ચકાસણી (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો):</p>
                    
                    <div style='overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                         <div style='min-width:350px; font-family:monospace; font-size:14px; line-height:1.4; color:#0f172a;'>
                            <div style='color:#be123c; font-weight:bold; letter-spacing:1px;'>&nbsp;&nbsp;&nbsp;0.0588235294117647...</div>
                            <div style='border-top:2px solid #0f172a; width:190px; margin-left:30px;'></div>
                            <div style='display:flex;'>
                                <div style='width:30px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>17</div>
                                <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                    <div>&nbsp;1.0000000000000000</div>
                                    <div style='color:#64748b;'>-0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;10</div>
                                    <div style='color:#64748b;'>-&nbsp;0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;100</div>
                                    <div style='color:#ea580c;'>-&nbsp;85</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;150</div>
                                    <div style='color:#ea580c;'>-&nbsp;136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;140</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;-136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;-34</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60</div>
                                    <div style='color:#64748b;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(આ રીતે આગળ વધતા અંતે ફરીથી 1 શેષ વધશે...)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:5px; border:1px solid #bfdbfe; margin-top:15px;'>
                        <p style='margin:0; font-size:15px; color:#1e40af;'>સંપૂર્ણ ભાગાકાર કરતા આપણને ભાગફળ <b>0.<span style='text-decoration:overline;'>0588235294117647</span></b> મળે છે. અહીં 16 અંકો પછી ફરીથી પુનરાવર્તન ચાલુ થાય છે. તેથી પુનરાવર્તિત અંકોની સંખ્યા <b>16</b> છે.</p>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 1",
                "marks": 2,
                "question": "આપેલી સંખ્યાઓ સંમેય છે કે અસંમેય તે જણાવો:\n(i) 2 - √5 \n(ii) (3 + √23) - √23 \n(iii) 2√7 / 7√7 \n(iv) 1/√2 \n(v) 2π", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(i) 2 - &radic;5</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: સંમેય સંખ્યા 2 અને અસંમેય સંખ્યા &radic;5 ની બાદબાકી હંમેશા અસંમેય જ મળે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) (3 + &radic;23) - &radic;23</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: 3 + &radic;23 - &radic;23 = <b>3</b></p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: 3 ને 3/1 સ્વરૂપમાં લખી શકાય છે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) (2&radic;7) / (7&radic;7)</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: અંશ અને છેદમાંથી &radic;7 ઉડી જશે, એટલે <b>2/7</b> વધશે.</p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: તે p/q સ્વરૂપમાં છે.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 1 / &radic;2</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: શૂન્યેતર સંમેય અને અસંમેય સંખ્યાનો ભાગાકાર અસંમેય જ હોય.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 2&pi;</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: &pi; અસંમેય છે, તેથી 2 નો તેની સાથેનો ગુણાકાર પણ અસંમેય થાય.)</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "નીચેનાં સાદું રૂપ આપો:\n(i) (3 + √3)(2 + √2)\n(ii) (3 + √3)(3 - √3)\n(iii) (√5 + √2)²\n(iv) (√5 - √2)(√5 + √2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) (3 + &radic;3)(2 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            = 3(2 + &radic;2) + &radic;3(2 + &radic;2)<br>
                            = <b>6 + 3&radic;2 + 2&radic;3 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) (3 + &radic;3)(3 - &radic;3)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)(a-b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (3)&sup2; - (&radic;3)&sup2;<br>
                            = 9 - 3<br>
                            = <b>6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) (&radic;5 + &radic;2)&sup2;</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)&sup2; = a&sup2; + 2ab + b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; + 2(&radic;5)(&radic;2) + (&radic;2)&sup2;<br>
                            = 5 + 2&radic;10 + 2<br>
                            = <b>7 + 2&radic;10</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iv) (&radic;5 - &radic;2)(&radic;5 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a-b)(a+b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; - (&radic;2)&sup2;<br>
                            = 5 - 2<br>
                            = <b>3</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 3",
                "marks": 2,
                "question": "યાદ કરો કે π એ વર્તુળના પરિઘ (c) અને તેના વ્યાસ (d) ના ગુણોત્તર તરીકે દર્શાવવામાં આવે છે. એટલે કે π = c/d. તે એ હકીકતનો વિરોધાભાસ કરતો જણાય છે કે π એ અસંમેય છે. આ વિરોધાભાસનો ઉકેલ તમે કેવી રીતે લાવશો?", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                    <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:18px;'>આમાં કોઈ જ વિરોધાભાસ નથી.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b></p>
                    <ul style='margin:0; padding-left:20px; font-size:15px; color:#1e3a8a; line-height:1.6;'>
                        <li>જ્યારે આપણે માપપટ્ટી (Scale) કે અન્ય કોઈ સાધનથી લંબાઈ માપીએ છીએ, ત્યારે આપણને માત્ર એક <b>આશરે સંમેય કિંમત</b> (Approximate Rational Value) જ મળે છે.</li>
                        <li>આથી આપણે એ ચોક્કસ જાણી શકતા નથી કે પરિઘ (c) અથવા વ્યાસ (d) બંનેમાંથી કોઈ એક અસંમેય છે કે નહીં.</li>
                        <li>હકીકતમાં, વર્તુળના કિસ્સામાં c અથવા d બે માંથી એક ચોક્કસપણે <b>અસંમેય</b> હોય છે.</li>
                        <li>તેથી, તેમનો ગુણોત્તર (c/d) પણ અસંમેય જ બને છે, એટલે જ &pi; અસંમેય સંખ્યા છે.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "સંખ્યારેખા પર √9.3 દર્શાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:16px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>એક કિરણ દોરી તેના પર બિંદુ <b>A</b> અને <b>B</b> એવા લો કે જેથી <b>AB = 9.3 એકમ</b> થાય.</li>
                            <li>બિંદુ B થી આગળ એ જ રેખા પર <b>1 એકમ</b> ના અંતરે બિંદુ <b>C</b> લો (એટલે BC = 1 એકમ). તેથી AC = 9.3 + 1 = 10.3 એકમ થશે.</li>
                            <li>રેખાખંડ AC નો લંબદ્વિભાજક દોરી તેનું મધ્યબિંદુ <b>O</b> મેળવો.</li>
                            <li>O ને કેન્દ્ર અને OA (અથવા OC) જેટલી ત્રિજ્યા લઈ <b>અર્ધવર્તુળ</b> દોરો.</li>
                            <li>બિંદુ <b>B</b> આગળથી રેખા AC ને લંબ હોય તેવી રેખા દોરો, જે અર્ધવર્તુળને <b>D</b> બિંદુમાં છેદે. અહીં <b>BD ની લંબાઈ &radic;9.3</b> થશે.</li>
                            <li>હવે B ને શૂન્ય (0) માની, B ને કેન્દ્ર લઈ BD જેટલી ત્રિજ્યા લઈ પરિકરથી ચાપ મારો, જે સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>E એ &radic;9.3</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <p style='text-align:center; margin:0 0 10px 0; color:#1e3a8a; font-weight:bold;'>રચનાની આકૃતિ (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો)</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
                            <line x1="20" y1="160" x2="380" y2="160" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <circle cx="50" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="45" y="180" fill="#1e3a8a" font-weight="bold">A</text>
                            
                            <circle cx="236" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="230" y="180" fill="#1e3a8a" font-weight="bold">B (0)</text>
                            
                            <circle cx="256" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="252" y="180" fill="#1e3a8a" font-weight="bold">C (1)</text>
                            
                            <path d="M 50 190 L 50 185 L 236 185 L 236 190" fill="none" stroke="#64748b" stroke-width="1"/>
                            <text x="135" y="198" fill="#64748b" font-size="12">9.3 એકમ</text>
                            
                            <circle cx="153" cy="160" r="4" fill="#ea580c"/>
                            <text x="148" y="180" fill="#ea580c" font-weight="bold">O</text>
                            
                            <path d="M 50 160 A 103 103 0 0 1 256 160" fill="none" stroke="#047857" stroke-width="2"/>
                            
                            <line x1="236" y1="160" x2="236" y2="99" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="236" cy="99" r="4" fill="#be123c"/>
                            <text x="225" y="90" fill="#be123c" font-weight="bold">D</text>
                            <text x="242" y="130" fill="#be123c" font-weight="bold">√9.3</text>
                            
                            <path d="M 236 99 A 61 61 0 0 1 297 160" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>
                            <circle cx="297" cy="160" r="4" fill="#ea580c"/>
                            <text x="285" y="180" fill="#ea580c" font-weight="bold">E (√9.3)</text>
                        </svg>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "નીચે આપેલી સંખ્યાઓના છેદનું સંમેયીકરણ કરો:\n(i) 1/√7\n(ii) 1/(√7 - √6)\n(iii) 1/(√5 + √2)\n(iv) 1/(√7 - 2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 1 / &radic;7</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અંશ અને છેદ બંનેને <b>&radic;7</b> વડે ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>&radic;7</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>&radic;7</div>
                                <div style='padding:0 5px; color:#be123c;'>&radic;7</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7</div>
                                <div style='padding:0 5px; color:#16a34a;'>7</div>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(ii) 1 / (&radic;7 - &radic;6)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં માઇનસ (-) છે, તેથી વિરોધી ચિહ્ન <b>(&radic;7 + &radic;6)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - &radic;6)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (&radic;6)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>7 - 6</div>
                            </div>
                            = <b style='color:#16a34a; font-size:16px;'>&radic;7 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iii) 1 / (&radic;5 + &radic;2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં પ્લસ (+) છે, તેથી <b>(&radic;5 - &radic;2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;5 + &radic;2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px;'>(&radic;5)&sup2; - (&radic;2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>

            <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iv) 1 / (&radic;7 - 2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>વિરોધી ચિહ્ન <b>(&radic;7 + 2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - 2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે અંશમાં 1 હોય અને છેદમાં <b>&radic;a &plusmn; &radic;b</b> જેવું પદ હોય, ત્યારે હેતુલક્ષી પ્રશ્નમાં સીધો જવાબ લખવા માટે:</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'><b>સ્ટેપ 1:</b> છેદનું ચિહ્ન બદલીને પદને ઉપર (અંશમાં) મૂકી દો.<br><b>સ્ટેપ 2:</b> છેદમાં બંને સંખ્યાઓના વર્ગની બાદબાકી (મોટામાંથી નાનું) મૂકી દો.</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#b45309; font-weight:bold;'>ઉદાહરણ તરીકે: 1 / (&radic;5 + &radic;2) &rarr; ચિહ્ન બદલો: &radic;5 - &radic;2 (આ અંશ છે). નીચે 5 - 2 = 3 મૂકો. જવાબ: (&radic;5 - &radic;2) / 3</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 1",
                "marks": 2,
                "question": "કિંમત શોધો:\n(i) 64<sup>1/2</sup>\n(ii) 32<sup>1/5</sup>\n(iii) 125<sup>1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(i) 64<sup>1/2</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0;'>
                            <p style='margin:0; font-size:15px; color:#166534; line-height:1.6;'>
                                આપણે જાણીએ છીએ કે 64 એ 8 નો વર્ગ છે. એટલે કે 64 = 8<sup>2</sup><br>
                                &there4; (8<sup>2</sup>)<sup>1/2</sup><br>
                                <span style='color:#64748b; font-size:13px;'>[નિયમ: (a<sup>m</sup>)<sup>n</sup> = a<sup>m &times; n</sup> મુજબ ઘાતોનો ગુણાકાર થશે]</span><br>
                                = 8<sup>2 &times; (1/2)</sup><br>
                                = 8<sup>1</sup><br>
                                = <b style='font-size:18px; color:#15803d;'>8</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(ii) 32<sup>1/5</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd;'>
                            <p style='margin:0; font-size:15px; color:#0369a1; line-height:1.6;'>
                                32 ના અવયવો પાડીએ તો: 32 = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 2<sup>5</sup><br>
                                &there4; (2<sup>5</sup>)<sup>1/5</sup><br>
                                = 2<sup>5 &times; (1/5)</sup><br>
                                = 2<sup>1</sup><br>
                                = <b style='font-size:18px; color:#1d4ed8;'>2</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px;'>
                        <h4 style='color:#881337; margin:0 0 8px 0; font-size:16px;'>(iii) 125<sup>1/3</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3;'>
                            <p style='margin:0; font-size:15px; color:#be123c; line-height:1.6;'>
                                125 એ 5 નો ઘન છે. એટલે કે 125 = 5<sup>3</sup><br>
                                &there4; (5<sup>3</sup>)<sup>1/3</sup><br>
                                = 5<sup>3 &times; (1/3)</sup><br>
                                = 5<sup>1</sup><br>
                                = <b style='font-size:18px; color:#b91c1c;'>5</b>
                            </p>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 2",
                "marks": 3,
                "question": "કિંમત શોધો:\n(i) 9<sup>3/2</sup>\n(ii) 32<sup>2/5</sup>\n(iii) 16<sup>3/4</sup>\n(iv) 125<sup>-1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) 9<sup>3/2</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 9 = 3<sup>2</sup><br>
                            &there4; (3<sup>2</sup>)<sup>3/2</sup><br>
                            = 3<sup>2 &times; (3/2)</sup> <span style='color:#64748b; font-size:13px;'>(2 અને 2 ઊડી જશે)</span><br>
                            = 3<sup>3</sup><br>
                            = 3 &times; 3 &times; 3 = <b style='color:#047857; font-size:18px;'>27</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) 32<sup>2/5</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 32 = 2<sup>5</sup><br>
                            &there4; (2<sup>5</sup>)<sup>2/5</sup><br>
                            = 2<sup>5 &times; (2/5)</sup> <span style='color:#64748b; font-size:13px;'>(5 અને 5 ઊડી જશે)</span><br>
                            = 2<sup>2</sup><br>
                            = 2 &times; 2 = <b style='color:#047857; font-size:18px;'>4</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) 16<sup>3/4</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 16 = 2<sup>4</sup><br>
                            &there4; (2<sup>4</sup>)<sup>3/4</sup><br>
                            = 2<sup>4 &times; (3/4)</sup> <span style='color:#64748b; font-size:13px;'>(4 અને 4 ઊડી જશે)</span><br>
                            = 2<sup>3</sup><br>
                            = 2 &times; 2 &times; 2 = <b style='color:#047857; font-size:18px;'>8</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0;'>(iv) 125<sup>-1/3</sup></h4>
                        <div style='background-color:#fff1f2; padding:10px; border-radius:5px; color:#881337;'>
                            અહીં 125 = 5<sup>3</sup><br>
                            &there4; (5<sup>3</sup>)<sup>-1/3</sup><br>
                            = 5<sup>3 &times; (-1/3)</sup> <span style='color:#64748b; font-size:13px;'>(3 અને 3 ઊડી જશે)</span><br>
                            = 5<sup>-1</sup><br>
                            <span style='color:#64748b; font-size:13px;'>[નિયમ: a<sup>-n</sup> = 1/a<sup>n</sup> મુજબ]</span><br>
                            = <b style='color:#be123c; font-size:18px;'>1 / 5</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા ઘાતાંકનો <b>છેદ</b> જુઓ. જેમ કે 32<sup>2/5</sup> માં છેદમાં <b>5</b> છે. તો સમજી લેવું કે કૌંસની અંદર આપેલી સંખ્યા કોઈકની <b>5 ઘાત</b> જ હશે! (અહીં 32 એ 2 ની 5 ઘાત છે). આ ટ્રીકથી દાખલો કઈ દિશામાં ગણવો તેનો સીધો આઇડિયા આવી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સાદું રૂપ આપો:\n(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup>\n(ii) (1 / 3<sup>3</sup>)<sup>7</sup>\n(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup>\n(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ગુણાકાર હોય, તો ઘાતાંકનો સરવાળો થાય. (a<sup>m</sup> &cdot; a<sup>n</sup> = a<sup>m+n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 2<sup>(2/3 + 1/5)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(લ.સા.અ. 15 લેતા)</span><br>
                            = 2<sup>(10 + 3) / 15</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>2<sup>13/15</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) (1 / 3<sup>3</sup>)<sup>7</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> (a/b)<sup>m</sup> = a<sup>m</sup> / b<sup>m</sup></p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 1<sup>7</sup> / (3<sup>3</sup>)<sup>7</sup><br>
                            = 1 / 3<sup>(3 &times; 7)</sup><br>
                            = 1 / 3<sup>21</sup> <br>
                            = <b style='color:#1e3a8a; font-size:16px;'>3<sup>-21</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ભાગાકાર હોય, તો ઘાતાંકની બાદબાકી થાય. (a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 11<sup>(1/2 - 1/4)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(અડધામાંથી પા બાદ જાય તો પા વધે, અથવા લ.સા.અ. 4 લેતા)</span><br>
                            = 11<sup>(2 - 1) / 4</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>11<sup>1/4</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર અલગ હોય પરંતુ ઘાતાંક સરખો હોય, તો આધારનો ગુણાકાર થાય. (a<sup>m</sup> &cdot; b<sup>m</sup> = (ab)<sup>m</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = (7 &times; 8)<sup>1/2</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>56<sup>1/2</sup></b>
                        </div>
                    </div>
                </div>`
            }
            ]
    },
                
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 2: બહુપદીઓ (સ્વાધ્યાય)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "બહુપદીઓ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલી અભિવ્યક્તિઓ પૈકી કઈ બહુપદી એક ચલવાળી છે અને કઈ નથી? તમારા જવાબ માટે કારણ આપો.\n(i) 4x² - 3x + 7\n(ii) y² + √2\n(iii) 3√t + t√2\n(iv) y + 2/y\n(v) x¹⁰ + y³ + t⁵⁰", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>નિયમ: જો અભિવ્યક્તિમાં માત્ર એક જ પ્રકારનો અક્ષર (ચલ) હોય અને તેની ઘાત હંમેશા 'પૂર્ણ સંખ્યા' (0, 1, 2, 3...) હોય, તો જ તેને એક ચલવાળી બહુપદી કહેવાય.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:300px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 4x<sup>2</sup> - 3x + 7</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. કારણ કે તેમાં માત્ર એક જ ચલ '$x$' છે અને તેની તમામ ઘાત (2 અને 1) પૂર્ણ સંખ્યાઓ છે.</p>
                            </div>

                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) y<sup>2</sup> + &radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. ચલ '$y$' ની ઘાત 2 છે જે પૂર્ણ સંખ્યા છે. (અચળ પદ &radic;2 હોય તેનાથી કોઈ ફરક પડતો નથી).</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 3&radic;t + t&radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે &radic;t એટલે t ની 1/2 ઘાત. અહીં ઘાત 1/2 એ પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) y + <div style='display:inline-block; vertical-align:middle; text-align:center;'><div style='border-bottom:1px solid #be123c; padding:0 2px;'>2</div><div>y</div></div></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે છેદમાં રહેલા y ને અંશમાં લાવતા તેની ઘાત -1 (ઋણ) થઈ જાય છે, જે પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(v) x<sup>10</sup> + y<sup>3</sup> + t<sup>50</sup></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ 'એક ચલવાળી' બહુપદી નથી. આ બહુપદી છે, પરંતુ તેમાં ત્રણ અલગ અલગ ચલ (x, y, અને t) આવેલા છે.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ પદાવલિને જોતાં જ ઓળખી જાવ કે તે બહુપદી છે કે નહિ! બસ આ 3 વસ્તુ ચકાસો:<br>
                    1️⃣ ચલ (x કે y) ક્યારેય <b>છેદમાં</b> ન હોવો જોઈએ.<br>
                    2️⃣ ચલ ક્યારેય <b>વર્ગમૂળ (કે ઘનમૂળ)</b> માં ન હોવો જોઈએ.<br>
                    3️⃣ ચલની ઘાત ક્યારેય <b>માઇનસ (-)</b> કે <b>અપૂર્ણાંક</b> ન હોવી જોઈએ.<br>
                    જો આ ત્રણેય વસ્તુ પાસ થાય, તો તે બહુપદી કહેવાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "નીચેનામાં x² નો સહગુણક લખો:\n(i) 2 + x² + x\n(ii) 2 - x² + x³\n(iii) (π/2)x² + x\n(iv) √2x - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:14px;'>સમજૂતી આકૃતિ (બહુપદીના અંગો):</p>
                        <svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="60" y="60" fill="#be123c" font-size="24" font-weight="bold">- 5</text>
                            <text x="100" y="60" fill="#1e3a8a" font-size="24" font-weight="bold">x</text>
                            <text x="115" y="45" fill="#047857" font-size="16" font-weight="bold">2</text>
                            
                            <line x1="75" y1="65" x2="75" y2="85" stroke="#be123c" stroke-width="2"/>
                            <text x="50" y="98" fill="#be123c" font-size="12" font-weight="bold">સહગુણક</text>
                            
                            <line x1="105" y1="65" x2="105" y2="85" stroke="#1e3a8a" stroke-width="2"/>
                            <text x="95" y="98" fill="#1e3a8a" font-size="12" font-weight="bold">ચલ</text>
                            
                            <line x1="120" y1="30" x2="120" y2="15" stroke="#047857" stroke-width="2"/>
                            <text x="105" y="10" fill="#047857" font-size="12" font-weight="bold">ઘાતાંક</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(i) 2 + <b>x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ કોઈ સંખ્યા નથી, એટલે 1 ગણાય. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#16a34a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(ii) 2 <b>- x<sup>2</sup></b> + x<sup>3</sup></h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ માઇનસ (-) ની નિશાની છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#be123c; font-size:18px;'>-1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iii) <b>(&pi;/2)x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની સાથે ગુણાકારમાં &pi;/2 છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#1e3a8a; font-size:18px;'>&pi;/2</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iv) &radic;2x - 1</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> વાળું પદ <b>આપેલું જ નથી</b>. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#ea580c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જેનો પણ સહગુણક પૂછ્યો હોય (દા.ત. x<sup>2</sup>), તેની પર આંગળી મૂકી દો! હવે તેની <b>બરાબર આગળ</b> (ડાબી બાજુ) નિશાની સહિત જે દેખાય તે તમારો જવાબ. અને જો તે પદ હોય જ નહિ, તો સીધો ઝીરો (0) મૂકી દેવો!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 3",
                "marks": 2,
                "question": "35 ઘાતવાળી દ્વિપદીનું કોઈ પણ એક ઉદાહરણ અને 100 ઘાતવાળી એકપદીનું કોઈ પણ એક ઉદાહરણ આપો.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(1) 35 ઘાતવાળી દ્વિપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> દ્વિપદી એટલે જેમાં બે પદ હોય (વત્તા કે ઓછાથી જોડાયેલા). અને મોટી ઘાત 35 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#1d4ed8;'>3x<sup>35</sup> - 4</span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: y<sup>35</sup> + 10, 5t<sup>35</sup> - t<sup>2</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>

                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(2) 100 ઘાતવાળી એકપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> એકપદી એટલે જેમાં માત્ર એક જ પદ હોય. અને તેની ઘાત 100 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#15803d;'>&radic;2y<sup>100</sup></span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: 5x<sup>100</sup>, -t<sup>100</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 4",
                "marks": 2,
                "question": "નીચે આપેલી બહુપદીઓની ઘાત જણાવો:\n(i) 5x³ + 4x² + 7x\n(ii) 4 - y²\n(iii) 5t - √7\n(iv) 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(i) 5x<sup>3</sup> + 4x<sup>2</sup> + 7x</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ x ની સૌથી મોટી ઘાત 3 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>3</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(ii) 4 - y<sup>2</sup></h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ y ની સૌથી મોટી ઘાત 2 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>2</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iii) 5t - &radic;7</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ t ની ઉપર કોઈ ઘાત નથી દેખાતી, એટલે 1 હોય. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iv) 3</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં કોઈ ચલ જ નથી (આ અચળ પદ છે). તેથી અચળ બહુપદીની ઘાત = <b style='color:#be123c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીની ઘાત એટલે <b>"ક્લાસનો ડોન (Don)"</b>! આખી રકમમાં ચલના માથા પર જે આંકડો <b>સૌથી મોટો</b> દેખાય, એ જ આખી બહુપદીની ઘાત. અને જો ચલ હોય જ નહિ માત્ર આંકડો હોય, તો તેની ઘાત હંમેશા <b>ઝીરો (0)</b> લખી દેવી.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 5",
                "marks": 3,
                "question": "નીચે આપેલી બહુપદીઓને સુરેખ, દ્વિઘાત કે ત્રિઘાત બહુપદીમાં વર્ગીકૃત કરો:\n(i) x² + x  (ii) x - x³  (iii) y + y² + 4  (iv) 1 + x  (v) 3t  (vi) r²  (vii) 7x³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; min-width:400px; border-collapse:collapse; text-align:left; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>ક્રમ</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદી</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>મહત્તમ ઘાત</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદીનો પ્રકાર</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(i)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x<sup>2</sup> + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(ii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x - x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>y + y<sup>2</sup> + 4</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iv)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1 + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(v)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3t</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vi)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>r<sup>2</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>7x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીના પ્રકાર ઓળખવા માટે માત્ર તેની <b>સૌથી મોટી ઘાત</b> જ જોવાની, પદોની સંખ્યા નહિ!<br>
                    &bull; જો <b>1 ઘાત</b> હોય (કે કોઈ ઘાત ન દેખાય) &rarr; સુરેખ<br>
                    &bull; જો <b>2 ઘાત</b> હોય &rarr; દ્વિઘાત<br>
                    &bull; જો <b>3 ઘાત</b> હોય &rarr; ત્રિઘાત</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "x ની નીચેની કિંમતો માટે 5x - 4x² + 3 બહુપદીનું મૂલ્ય શોધો:\n(i) x = 0\n(ii) x = -1\n(iii) x = 2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: બહુપદી p(x) = 5x - 4x<sup>2</sup> + 3 માં જ્યાં પણ 'x' દેખાય, ત્યાં આપેલી કિંમત મૂકવાની છે.</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg width="280" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="40" width="40" height="40" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="30" y="65" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">x</text>
                            
                            <line x1="50" y1="60" x2="80" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="80" y="20" width="120" height="80" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            <text x="140" y="55" fill="#14532d" font-size="14" font-weight="bold" text-anchor="middle">p(x) મશીન</text>
                            <text x="140" y="80" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">5x - 4x&sup2; + 3</text>
                            
                            <line x1="200" y1="60" x2="230" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="230" y="40" width="40" height="40" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="250" y="65" fill="#ea580c" font-size="16" font-weight="bold" text-anchor="middle">જવાબ</text>
                            
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:15px;'>(i) x = 0 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bae6fd; font-size:15px; line-height:1.6;'>
                                p(0) = 5(0) - 4(0)<sup>2</sup> + 3<br>
                                p(0) = 0 - 4(0) + 3<br>
                                <b>p(0) = <span style='color:#0284c7; font-size:18px;'>3</span></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0; font-size:15px;'>(ii) x = -1 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #fecdd3; font-size:15px; line-height:1.6;'>
                                p(-1) = 5(-1) - 4(-1)<sup>2</sup> + 3<br>
                                <span style='color:#64748b; font-size:13px;'>(નોંધ: માઇનસ સંખ્યાનો વર્ગ હંમેશા પ્લસ થાય, એટલે (-1)<sup>2</sup> = 1)</span><br>
                                p(-1) = -5 - 4(1) + 3<br>
                                p(-1) = -5 - 4 + 3<br>
                                p(-1) = -9 + 3<br>
                                <b>p(-1) = <span style='color:#be123c; font-size:18px;'>-6</span></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0; font-size:15px;'>(iii) x = 2 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bbf7d0; font-size:15px; line-height:1.6;'>
                                p(2) = 5(2) - 4(2)<sup>2</sup> + 3<br>
                                p(2) = 10 - 4(4) + 3<br>
                                p(2) = 10 - 16 + 3<br>
                                p(2) = 13 - 16<br>
                                <b>p(2) = <span style='color:#16a34a; font-size:18px;'>-3</span></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે આપેલ દરેક બહુપદી માટે p(0), p(1) અને p(2) શોધો:\n(i) p(y) = y² - y + 1\n(ii) p(t) = 2 + t + 2t² - t³\n(iii) p(x) = x³\n(iv) p(x) = (x - 1)(x + 1)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) p(y) = y<sup>2</sup> - y + 1</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>y = 0 મૂકતાં:</b><br>
                                p(0) = (0)<sup>2</sup> - 0 + 1<br>
                                <b>p(0) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>y = 1 મૂકતાં:</b><br>
                                p(1) = (1)<sup>2</sup> - 1 + 1<br>
                                p(1) = 1 - 1 + 1<br>
                                <b>p(1) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>y = 2 મૂકતાં:</b><br>
                                p(2) = (2)<sup>2</sup> - 2 + 1<br>
                                p(2) = 4 - 2 + 1<br>
                                <b>p(2) = 3</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) p(t) = 2 + t + 2t<sup>2</sup> - t<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>t = 0 મૂકતાં:</b><br>
                                p(0) = 2 + 0 + 0 - 0<br>
                                <b>p(0) = 2</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>t = 1 મૂકતાં:</b><br>
                                p(1) = 2 + 1 + 2(1)<sup>2</sup> - (1)<sup>3</sup><br>
                                p(1) = 3 + 2 - 1<br>
                                <b>p(1) = 4</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>t = 2 મૂકતાં:</b><br>
                                p(2) = 2 + 2 + 2(2)<sup>2</sup> - (2)<sup>3</sup><br>
                                p(2) = 4 + 2(4) - 8<br>
                                p(2) = 4 + 8 - 8<br>
                                <b>p(2) = 4</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) p(x) = x<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                p(0) = (0)<sup>3</sup> = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                p(1) = (1)<sup>3</sup> = <b>1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                p(2) = (2)<sup>3</sup> = <b>8</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iv) p(x) = (x - 1)(x + 1)</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>x = 0 મૂકતાં:</b><br>
                                p(0) = (0 - 1)(0 + 1)<br>
                                p(0) = (-1)(1) = <b>-1</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>x = 1 મૂકતાં:</b><br>
                                p(1) = (1 - 1)(1 + 1)<br>
                                p(1) = (0)(2) = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>x = 2 મૂકતાં:</b><br>
                                p(2) = (2 - 1)(2 + 1)<br>
                                p(2) = (1)(3) = <b>3</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "નીચેની બહુપદીની સામે દર્શાવેલ x ની કિંમતો એ આપેલ બહુપદીનાં શૂન્યો છે કે નહિ તે ચકાસો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> x ની કિંમત બહુપદીમાં મૂકતાં જો છેલ્લો જવાબ <b>શૂન્ય (0)</b> આવે, તો તે બહુપદીનું શૂન્ય <b>છે</b>. જો શૂન્ય સિવાય કોઈ પણ સંખ્યા આવે, તો તે શૂન્ય <b>નથી</b>.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:350px;'>
                            
                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(i) p(x) = 3x + 1; x = -1/3</b><br>
                                p(-1/3) = 3(-1/3) + 1 = -1 + 1 = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(ii) p(x) = 5x - &pi;; x = 4/5</b><br>
                                p(4/5) = 5(4/5) - &pi; = 4 - &pi; (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iii) p(x) = x<sup>2</sup> - 1; x = 1, -1</b><br>
                                x = 1 લેતાં: p(1) = (1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                x = -1 લેતાં: p(-1) = (-1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, 1 અને -1 બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iv) p(x) = (x + 1)(x - 2); x = -1, 2</b><br>
                                x = -1 લેતાં: p(-1) = (-1 + 1)(-1 - 2) = (0)(-3) = 0 (હા)<br>
                                x = 2 લેતાં: p(2) = (2 + 1)(2 - 2) = (3)(0) = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(v) p(x) = x<sup>2</sup>; x = 0</b><br>
                                p(0) = (0)<sup>2</sup> = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(vi) p(x) = lx + m; x = -m/l</b><br>
                                p(-m/l) = l(-m/l) + m = -m + m = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f8fafc; padding:10px; border-left:4px solid #0284c7; border-radius:5px;'>
                                <b>(vii) p(x) = 3x<sup>2</sup> - 1; x = -1/&radic;3, 2/&radic;3</b><br>
                                x = -1/&radic;3 લેતાં: p(-1/&radic;3) = 3(-1/&radic;3)<sup>2</sup> - 1 = 3(1/3) - 1 = 1 - 1 = 0 <span style='color:#16a34a; font-weight:bold;'>(હા)</span><br>
                                x = 2/&radic;3 લેતાં: p(2/&radic;3) = 3(2/&radic;3)<sup>2</sup> - 1 = 3(4/3) - 1 = 4 - 1 = 3 <span style='color:#be123c; font-weight:bold;'>(ના)</span><br>
                                <span style='color:#0284c7; font-weight:bold;'>જવાબ: -1/&radic;3 શૂન્ય છે, પરંતુ 2/&radic;3 શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(viii) p(x) = 2x + 1; x = 1/2</b><br>
                                p(1/2) = 2(1/2) + 1 = 1 + 1 = 2 (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>`
            },
                  { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચે આપેલી દરેક બહુપદીનાં શૂન્યો શોધો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>બહુપદીનું શૂન્ય શોધવા માટે આપણે હંમેશા p(x) = 0 લઈશું.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:12px;'>
                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) p(x) = x + 5</h4>
                            <p style='margin:0; font-size:14px;'>x + 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) p(x) = x - 5</h4>
                            <p style='margin:0; font-size:14px;'>x - 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) p(x) = 2x + 5</h4>
                            <p style='margin:0; font-size:14px;'>2x + 5 = 0<br>
                            &there4; 2x = -5<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5/2</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) p(x) = 3x - 2</h4>
                            <p style='margin:0; font-size:14px;'>3x - 2 = 0<br>
                            &there4; 3x = 2<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) p(x) = 3x</h4>
                            <p style='margin:0; font-size:14px;'>3x = 0<br>
                            &there4; x = 0/3<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vi) p(x) = ax (a &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>ax = 0<br>
                            &there4; x = 0/a<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vii) p(x) = cx + d (c &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>cx + d = 0<br>
                            &there4; cx = -d<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -d/c</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ <b>સુરેખ બહુપદી (ax + b)</b> નું શૂન્ય ગણતરી કર્યા વગર સીધું જ શોધવું હોય, તો બસ આ 2 સ્ટેપ ફોલો કરો:<br>
                    <b>સ્ટેપ 1:</b> અચળ પદ (b) ની નિશાની બદલી નાખો (પ્લસ હોય તો માઇનસ, માઇનસ હોય તો પ્લસ). આ તમારો <b>અંશ</b> બનશે.<br>
                    <b>સ્ટેપ 2:</b> x ની સાથે જે સંખ્યા ગુણાયેલી હોય (a), તેને છેદમાં મૂકી દો.<br>
                    <b>ઉદાહરણ:</b> 3x - 2 નું શૂન્ય &rarr; -2 નું નિશાન બદલતા +2 થાય, અને 3 છેદમાં જાય. સીધો જવાબ: <b>2/3</b> !</p>
                </div>`
                  },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નક્કી કરો કે નીચે આપેલી બહુપદીઓમાંથી કઈ બહુપદીનો અવયવ (x + 1) છે:\n(i) x³ + x² + x + 1\n(ii) x⁴ + x³ + x² + x + 1\n(iii) x⁴ + 3x³ + 3x² + x + 1\n(iv) x³ - x² - (2 + √2)x + √2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>અવયવ પ્રમેય મુજબ:</b> જો (x + 1) એ આપેલ બહુપદી p(x) નો અવયવ હોય, તો <b>x = -1</b> મૂકવાથી p(-1) નો જવાબ <b>શૂન્ય (0)</b> આવવો જોઈએ.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:12px; min-width:350px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) p(x) = x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#166534;'>
                                    p(-1) = (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = -1 + 1 - 1 + 1<br>
                                    p(-1) = 0<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ છે.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) p(x) = x<sup>4</sup> + x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 - 1 + 1 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) p(x) = x<sup>4</sup> + 3x<sup>3</sup> + 3x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + 3(-1)<sup>3</sup> + 3(-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 + 3(-1) + 3(1) - 1 + 1<br>
                                    p(-1) = 1 - 3 + 3 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) p(x) = x<sup>3</sup> - x<sup>2</sup> - (2 + &radic;2)x + &radic;2</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>3</sup> - (-1)<sup>2</sup> - (2 + &radic;2)(-1) + &radic;2<br>
                                    p(-1) = -1 - (1) + (2 + &radic;2) + &radic;2<br>
                                    p(-1) = -2 + 2 + &radic;2 + &radic;2<br>
                                    p(-1) = 2&radic;2 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી વગર સીધું ચેક કરો! <br>જો બહુપદીના <b>એકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> અને <b>બેકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> સરખો થાય, તો જ <b>(x + 1)</b> તેનો અવયવ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 2",
                "marks": 3,
                "question": "બહુપદી g(x) એ આપેલ બહુપદી p(x) નો એક અવયવ છે કે નહિ તે અવયવ પ્રમેય પરથી નક્કી કરો:\n(i) p(x) = 2x³ + x² - 2x - 1, g(x) = x + 1\n(ii) p(x) = x³ + 3x² + 3x + 1, g(x) = x + 2\n(iii) p(x) = x³ - 4x² + x + 6, g(x) = x - 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) g(x) = x + 1 હોવાથી, x = -1 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-1) = 2(-1)<sup>3</sup> + (-1)<sup>2</sup> - 2(-1) - 1<br>
                                = 2(-1) + 1 + 2 - 1<br>
                                = -2 + 1 + 2 - 1<br>
                                = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(ii) g(x) = x + 2 હોવાથી, x = -2 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-2) = (-2)<sup>3</sup> + 3(-2)<sup>2</sup> + 3(-2) + 1<br>
                                = -8 + 3(4) - 6 + 1<br>
                                = -8 + 12 - 6 + 1<br>
                                = 13 - 14 = -1 (&ne; 0)<br>
                                <b style='color:#be123c;'>અહીં શેષ 0 નથી, તેથી g(x) એ p(x) નો અવયવ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) g(x) = x - 3 હોવાથી, x = 3 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(3) = (3)<sup>3</sup> - 4(3)<sup>2</sup> + (3) + 6<br>
                                = 27 - 4(9) + 3 + 6<br>
                                = 27 - 36 + 9<br>
                                = 36 - 36 = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચેના દરેકમાં જો (x - 1) એ p(x) નો એક અવયવ હોય, તો k ની કિંમત શોધો:\n(i) p(x) = x² + x + k\n(ii) p(x) = 2x² + kx + √2\n(iii) p(x) = kx² - √2x + 1\n(iv) p(x) = kx² - 3x + k", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-bottom:15px; border-left:4px solid #ea580c;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નિયમ:</b> જો (x - 1) એ અવયવ હોય, તો અવયવ પ્રમેય મુજબ <b>p(1) = 0</b> થાય જ. આ સમીકરણનો ઉપયોગ કરી આપણે <b>k</b> શોધીશું.</p>
                    </div>

                    <div style='display:flex; flex-wrap:wrap; gap:15px;'>
                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(i) p(x) = x<sup>2</sup> + x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; (1)<sup>2</sup> + (1) + k = 0<br>
                                &there4; 1 + 1 + k = 0<br>
                                &there4; 2 + k = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -2</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(ii) p(x) = 2x<sup>2</sup> + kx + &radic;2</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; 2(1)<sup>2</sup> + k(1) + &radic;2 = 0<br>
                                &there4; 2 + k + &radic;2 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -(2 + &radic;2)</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iii) p(x) = kx<sup>2</sup> - &radic;2x + 1</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - &radic;2(1) + 1 = 0<br>
                                &there4; k - &radic;2 + 1 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = &radic;2 - 1</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iv) p(x) = kx<sup>2</sup> - 3x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - 3(1) + k = 0<br>
                                &there4; k - 3 + k = 0<br>
                                &there4; 2k - 3 = 0<br>
                                &there4; 2k = 3 &nbsp; &there4; <b style='color:#be123c; font-size:16px;'>k = 3/2</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 4",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 12x² - 7x + 1\n(ii) 2x² + 7x + 3\n(iii) 6x² + 5x - 6\n(iv) 3x² - x - 4", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:20px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>મધ્યમ પદનું વિભાજન (Splitting the Middle Term)</p>
                        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="20" y="40" fill="#16a34a" font-size="20" font-weight="bold">12x²</text>
                            <text x="80" y="40" fill="#0f172a" font-size="20">-</text>
                            <text x="110" y="40" fill="#be123c" font-size="20" font-weight="bold">7x</text>
                            <text x="160" y="40" fill="#0f172a" font-size="20">+</text>
                            <text x="190" y="40" fill="#16a34a" font-size="20" font-weight="bold">1</text>
                            
                            <path d="M 40 20 Q 115 -20 195 20" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowGreen)"/>
                            <text x="70" y="10" fill="#16a34a" font-size="12" font-weight="bold">ગુણાકાર (12 × 1 = 12)</text>
                            
                            <line x1="120" y1="50" x2="90" y2="80" stroke="#be123c" stroke-width="2"/>
                            <line x1="120" y1="50" x2="150" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="65" y="95" fill="#be123c" font-size="14" font-weight="bold">- 4x</text>
                            <text x="145" y="95" fill="#be123c" font-size="14" font-weight="bold">- 3x</text>
                            
                            <defs>
                                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(i) 12x<sup>2</sup> - 7x + 1</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 12 અને સરવાળો -7 લાવવાનો છે. (અવયવો: -4 અને -3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 12x<sup>2</sup> - 4x - 3x + 1<br>
                                = 4x(3x - 1) - 1(3x - 1)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 1)(4x - 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(ii) 2x<sup>2</sup> + 7x + 3</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 6 (2&times;3) અને સરવાળો 7 લાવવાનો છે. (અવયવો: 6 અને 1)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 2x<sup>2</sup> + 6x + 1x + 3<br>
                                = 2x(x + 3) + 1(x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(x + 3)(2x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iii) 6x<sup>2</sup> + 5x - 6</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -36 (6&times;-6) અને બાદબાકી 5 લાવવાની છે. (અવયવો: 9 અને -4)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 6x<sup>2</sup> + 9x - 4x - 6<br>
                                = 3x(2x + 3) - 2(2x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3)(3x - 2)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iv) 3x<sup>2</sup> - x - 4</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -12 (3&times;-4) અને બાદબાકી -1 લાવવાની છે. (અવયવો: -4 અને 3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 3x<sup>2</sup> - 4x + 3x - 4<br>
                                = x(3x - 4) + 1(3x - 4)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 4)(x + 1)</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો (ત્રિઘાત બહુપદી):\n(i) x³ - 2x² - x + 2\n(ii) x³ - 3x² - 9x - 5\n(iii) x³ + 13x² + 32x + 20\n(iv) 2y³ + y² - 2y - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:20px;'>
                        
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> - 2x<sup>2</sup> - x + 2</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં પહેલા બે અને છેલ્લા બે પદોની સીધી જોડ બનાવી સામાન્ય કાઢીશું:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>2</sup>(x - 2) - 1(x - 2)<br>
                                = (x - 2)(x<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(a<sup>2</sup>-b<sup>2</sup>) નું નિત્યસમ વાપરતા]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(x - 2)(x - 1)(x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - 3x<sup>2</sup> - 9x - 5</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં p(-1) = 0 થાય છે, તેથી (x + 1) એક અવયવ છે. બહુપદીને (x + 1) વડે ભાગતા અથવા પદોની ગોઠવણી કરતા:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> - 4x<sup>2</sup> - 4x - 5x - 5<br>
                                = x<sup>2</sup>(x + 1) - 4x(x + 1) - 5(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> - 4x - 5)<br>
                                <span style='color:#64748b; font-size:12px;'>[હવે કૌંસના મધ્યમ પદનું વિભાજન કરતા]</span><br>
                                = (x + 1)(x<sup>2</sup> - 5x + 1x - 5)<br>
                                = (x + 1)[x(x - 5) + 1(x - 5)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 1)(x - 5)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iii) x<sup>3</sup> + 13x<sup>2</sup> + 32x + 20</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં બધા પદો ધન છે, p(-1) = 0 થાય છે. તેથી (x + 1) એક અવયવ છે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> + 12x<sup>2</sup> + 12x + 20x + 20<br>
                                = x<sup>2</sup>(x + 1) + 12x(x + 1) + 20(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> + 12x + 20)<br>
                                <span style='color:#64748b; font-size:12px;'>[20 ના અવયવો 10 અને 2]</span><br>
                                = (x + 1)(x<sup>2</sup> + 10x + 2x + 20)<br>
                                = (x + 1)[x(x + 10) + 2(x + 10)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 2)(x + 10)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iv) 2y<sup>3</sup> + y<sup>2</sup> - 2y - 1</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>આ દાખલામાં દાખલા (i) ની જેમ પદોની જોડ બનાવી સીધું જ સામાન્ય કાઢી શકાશે:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = y<sup>2</sup>(2y + 1) - 1(2y + 1)<br>
                                = (2y + 1)(y<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(y<sup>2</sup> - 1) = (y-1)(y+1)]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(2y + 1)(y - 1)(y + 1)</b>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (ત્રિઘાત માટે):</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિઘાત બહુપદીમાં પહેલો અવયવ શોધવો એ જ સૌથી મોટું કામ છે! એના માટે 2 નિયમો મગજમાં ફિટ કરી દો:<br>
                    <b>નિયમ 1:</b> જો બહુપદીના બધા જ સહગુણકોનો સરવાળો <b>0 (શૂન્ય)</b> થાય, તો તેનો પહેલો અવયવ હંમેશા <b>(x - 1)</b> હોય.<br>
                    <b>નિયમ 2:</b> જો એકી પદોના સહગુણકોનો સરવાળો અને બેકી પદોના સહગુણકોનો સરવાળો સરખો થાય, તો પહેલો અવયવ હંમેશા <b>(x + 1)</b> હોય.<br>
                    પછી તો બસ તેને 3 વાર લખીને પદો સેટ જ કરવાના રહે છે!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 1",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને નીચેના ગુણાકાર મેળવો:\n(i) (x + 4)(x + 10)\n(ii) (x + 8)(x - 10)\n(iii) (3x + 4)(3x - 5)\n(iv) (y² + 3/2)(y² - 3/2)\n(v) (3 - 2x)(3 + 2x)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f0fdf4; padding:10px; border-radius:8px; border:2px dashed #16a34a; margin-bottom:15px;'>
                        <p style='margin:0 0 5px 0; color:#14532d; font-weight:bold; font-size:15px;'>ઉપયોગમાં લેવાતા નિત્યસમો (સૂત્રો):</p>
                        <div style='font-size:16px; color:#166534; font-weight:bold; font-family:monospace;'>
                            1) (x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab<br>
                            2) (x + y)(x - y) = x<sup>2</sup> - y<sup>2</sup>
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 4)(x + 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 4 અને b = 10 છે.<br>
                                = (x)<sup>2</sup> + (4 + 10)x + (4)(10)<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> + 14x + 40</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (x + 8)(x - 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 8 અને b = -10 છે.<br>
                                = (x)<sup>2</sup> + (8 - 10)x + (8)(-10)<br>
                                = x<sup>2</sup> + (-2)x - 80<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> - 2x - 80</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (3x + 4)(3x - 5)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી પ્રથમ પદ 3x છે, a = 4 અને b = -5 છે.<br>
                                = (3x)<sup>2</sup> + (4 - 5)(3x) + (4)(-5)<br>
                                = 9x<sup>2</sup> + (-1)(3x) - 20<br>
                                = <b style='color:#0284c7; font-size:16px;'>9x<sup>2</sup> - 3x - 20</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (y<sup>2</sup> + 3/2)(y<sup>2</sup> - 3/2)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2: (a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                                = (y<sup>2</sup>)<sup>2</sup> - (3/2)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>y<sup>4</sup> - 9/4</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (3 - 2x)(3 + 2x)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2 મુજબ]</span><br>
                                = (3)<sup>2</sup> - (2x)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>9 - 4x<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "સીધો ગુણાકાર કર્યા સિવાય નિત્યસમોનો ઉપયોગ કરીને નીચેના ગુણાકારની કિંમતો મેળવો:\n(i) 103 × 107\n(ii) 95 × 96\n(iii) 104 × 96", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 103 &times; 107</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 ની નજીક છે.</p>
                            = (100 + 3)(100 + 7)<br>
                            <span style='color:#64748b; font-size:13px;'>[(x+a)(x+b) = x<sup>2</sup> + (a+b)x + ab મુજબ]</span><br>
                            = (100)<sup>2</sup> + (3 + 7)(100) + (3)(7)<br>
                            = 10000 + (10)(100) + 21<br>
                            = 10000 + 1000 + 21<br>
                            = <b style='color:#047857; font-size:18px;'>11021</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) 95 &times; 96</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 માંથી અમુક બાદ કરવાથી મળે છે.</p>
                            = (100 - 5)(100 - 4)<br>
                            = (100)<sup>2</sup> + (-5 - 4)(100) + (-5)(-4)<br>
                            = 10000 + (-9)(100) + 20<br>
                            = 10000 - 900 + 20<br>
                            = 9100 + 20<br>
                            = <b style='color:#047857; font-size:18px;'>9120</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) 104 &times; 96</h4>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#881337;'>એક 100 કરતા વધુ છે અને એક 100 કરતા ઓછી છે.</p>
                            = (100 + 4)(100 - 4)<br>
                            <span style='color:#be123c; font-size:13px;'>[(a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                            = (100)<sup>2</sup> - (4)<sup>2</sup><br>
                            = 10000 - 16<br>
                            = <b style='color:#be123c; font-size:18px;'>9984</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા <b>100</b> નો જ આધાર લેવો (જેમ કે 100+3 અથવા 100-5). કારણ કે 100 નો વર્ગ 10000 સીધો જ લખી શકાય છે અને ગણતરીમાં ભૂલ પડવાની શક્યતા સાવ નહિવત્ થઈ જાય છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 3",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને અવયવ પાડો:\n(i) 9x² + 6xy + y²\n(ii) 4y² - 4y + 1\n(iii) x² - y²/100", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 9x<sup>2</sup> + 6xy + y<sup>2</sup></h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>આ પૂર્ણવર્ગ ત્રિપદી છે. [a<sup>2</sup> + 2ab + b<sup>2</sup> = (a+b)<sup>2</sup>]</p>
                                = (3x)<sup>2</sup> + 2(3x)(y) + (y)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x + y)<sup>2</sup></b><br>
                                = (3x + y)(3x + y)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) 4y<sup>2</sup> - 4y + 1</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>વચ્ચે માઇનસ છે. [a<sup>2</sup> - 2ab + b<sup>2</sup> = (a-b)<sup>2</sup>]</p>
                                = (2y)<sup>2</sup> - 2(2y)(1) + (1)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2y - 1)<sup>2</sup></b><br>
                                = (2y - 1)(2y - 1)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) x<sup>2</sup> - y<sup>2</sup> / 100</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>બે પૂર્ણવર્ગનો તફાવત. [a<sup>2</sup> - b<sup>2</sup> = (a-b)(a+b)]</p>
                                = (x)<sup>2</sup> - (y/10)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>(x - y/10)(x + y/10)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિપદીના અવયવમાં ફક્ત <b>પહેલા અને છેલ્લા પદનું વર્ગમૂળ</b> કાઢો, અને <b>વચ્ચેના પદની નિશાની</b> મૂકીને આખા કૌંસ પર વર્ગ લગાવી દો!<br>
                    જેમ કે: 9x<sup>2</sup> નું વર્ગમૂળ 3x, 1 નું વર્ગમૂળ 1, અને વચ્ચે - ની નિશાની. સીધો જવાબ (3x - 1)<sup>2</sup>!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને વિસ્તરણ કરો:\n(i) (x + 2y + 4z)²\n(ii) (2x - y + z)²\n(iii) (-2x + 3y + 2z)²\n(iv) (3a - 7b - c)²\n(v) (-2x + 5y - 3z)²\n(vi) [(1/4)a - (1/2)b + 1]²", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:1px solid #bbf7d0; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0; font-size:16px; color:#14532d; font-weight:bold;'>મૂળભૂત સૂત્ર: (a + b + c)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px; font-size:14px; overflow-x:auto;'>
                        
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 2y + 4z)<sup>2</sup></h4>
                            = (x)<sup>2</sup> + (2y)<sup>2</sup> + (4z)<sup>2</sup> + 2(x)(2y) + 2(2y)(4z) + 2(4z)(x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>x<sup>2</sup> + 4y<sup>2</sup> + 16z<sup>2</sup> + 4xy + 16yz + 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (2x - y + z)<sup>2</sup></h4>
                            = (2x)<sup>2</sup> + (-y)<sup>2</sup> + (z)<sup>2</sup> + 2(2x)(-y) + 2(-y)(z) + 2(z)(2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 4xy - 2yz + 4zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (-2x + 3y + 2z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (3y)<sup>2</sup> + (2z)<sup>2</sup> + 2(-2x)(3y) + 2(3y)(2z) + 2(2z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 9y<sup>2</sup> + 4z<sup>2</sup> - 12xy + 12yz - 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (3a - 7b - c)<sup>2</sup></h4>
                            = (3a)<sup>2</sup> + (-7b)<sup>2</sup> + (-c)<sup>2</sup> + 2(3a)(-7b) + 2(-7b)(-c) + 2(-c)(3a)<br>
                            = <b style='color:#0284c7; font-size:15px;'>9a<sup>2</sup> + 49b<sup>2</sup> + c<sup>2</sup> - 42ab + 14bc - 6ca</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (-2x + 5y - 3z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (5y)<sup>2</sup> + (-3z)<sup>2</sup> + 2(-2x)(5y) + 2(5y)(-3z) + 2(-3z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 25y<sup>2</sup> + 9z<sup>2</sup> - 20xy - 30yz + 12zx</b>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(vi) [(1/4)a - (1/2)b + 1]<sup>2</sup></h4>
                            = (a/4)<sup>2</sup> + (-b/2)<sup>2</sup> + (1)<sup>2</sup> + 2(a/4)(-b/2) + 2(-b/2)(1) + 2(1)(a/4)<br>
                            = a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - 2ab/8 - 2b/2 + 2a/4<br>
                            <span style='color:#be123c; font-size:13px;'>[છેદ ઉડાડતાં]</span><br>
                            = <b style='color:#be123c; font-size:15px;'>a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - ab/4 - b + a/2</b>
                        </div>
                    </div>
                </div>`
            },
           { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 4x² + 9y² + 16z² + 12xy - 24yz - 16xz\n(ii) 2x² + y² + 8z² - 2√2xy + 4√2yz - 8xz", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: આ દાખલાઓ ઉપરના પ્રશ્ન 4 થી બિલકુલ ઊંધા છે. વિસ્તરણ આપેલું છે, આપણે કૌંસનો વર્ગ શોધવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:15px; border-left:4px solid #0284c7; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 4x<sup>2</sup> + 9y<sup>2</sup> + 16z<sup>2</sup> + 12xy - 24yz - 16xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#0369a1;'>અહીં yz અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>z</b> સામાન્ય છે, તેથી <b>z વાળું પદ માઇનસ</b> હશે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:14px;'>
                                = (2x)<sup>2</sup> + (3y)<sup>2</sup> + (-4z)<sup>2</sup> + 2(2x)(3y) + 2(3y)(-4z) + 2(-4z)(2x)<br>
                                <span style='color:#64748b; font-size:12px;'>[નિત્યસમ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca = (a+b+c)<sup>2</sup>]</span><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3y - 4z)<sup>2</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:15px; border-left:4px solid #be123c; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 10px 0;'>(ii) 2x<sup>2</sup> + y<sup>2</sup> + 8z<sup>2</sup> - 2&radic;2xy + 4&radic;2yz - 8xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#be123c;'>અહીં xy અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>x</b> સામાન્ય છે, તેથી <b>x વાળું પદ માઇનસ</b> હશે.<br>
                            (નોંધ: 2 નું વર્ગમૂળ &radic;2 અને 8 નું વર્ગમૂળ 2&radic;2 થાય.)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3; font-family:monospace; font-size:14px;'>
                                = (-&radic;2x)<sup>2</sup> + (y)<sup>2</sup> + (2&radic;2z)<sup>2</sup> + 2(-&radic;2x)(y) + 2(y)(2&radic;2z) + 2(2&radic;2z)(-&radic;2x)<br>
                                = <b style='color:#9f1239; font-size:16px;'>(-&radic;2x + y + 2&radic;2z)<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>માઇનસ (-) ની નિશાની કોને આપવી તેમાં કન્ફ્યુઝન થાય છે ને? <br>
                    બસ રકમમાં જે <b>બે પદ માઇનસ વાળા</b> દેખાય તેમાં <b>કયો અક્ષર (ચલ) સમાન (Common)</b> છે તે પકડી લો. એ સમાન અક્ષર વાળા પદને જ માઇનસની નિશાની આપી દેવાની, બાકી બધા પ્લસ!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 6",
                "marks": 3,
                "question": "નીચેના ઘનનું વિસ્તરણ કરો:\n(i) (2x + 1)³\n(ii) (2a - 3b)³\n(iii) [(3/2)x + 1]³\n(iv) [x - (2/3)y]³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border:2px dashed #0284c7; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0 0 5px 0; color:#0c4a6e; font-weight:bold; font-size:15px;'>ઘનના વિસ્તરણના સૂત્રો:</p>
                        <div style='font-size:15px; color:#0369a1; font-weight:bold;'>
                            (x + y)<sup>3</sup> = x<sup>3</sup> + y<sup>3</sup> + 3xy(x + y)<br>
                            (x - y)<sup>3</sup> = x<sup>3</sup> - y<sup>3</sup> - 3xy(x - y)
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) (2x + 1)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2x)<sup>3</sup> + (1)<sup>3</sup> + 3(2x)(1)(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 6x(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 12x<sup>2</sup> + 6x<br>
                                <span style='color:#64748b; font-size:12px;'>[ઘાતના ઉતરતા ક્રમમાં ગોઠવતા]</span><br>
                                = <b style='color:#15803d; font-size:15px;'>8x<sup>3</sup> + 12x<sup>2</sup> + 6x + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) (2a - 3b)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (3b)<sup>3</sup> - 3(2a)(3b)(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 18ab(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>8a<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup> - 27b<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) [(3/2)x + 1]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (3x/2)<sup>3</sup> + (1)<sup>3</sup> + 3(3x/2)(1)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + (9x/2)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + 27x<sup>2</sup>/4 + 9x/2<br>
                                = <b style='color:#15803d; font-size:15px;'>27x<sup>3</sup>/8 + 27x<sup>2</sup>/4 + 9x/2 + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) [x - (2/3)y]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (x)<sup>3</sup> - (2y/3)<sup>3</sup> - 3(x)(2y/3)[x - 2y/3]<br>
                                <span style='color:#64748b; font-size:12px;'>[અહીં 3 અને છેદનો 3 ઉડી જશે]</span><br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2xy[x - 2y/3]<br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3<br>
                                = <b style='color:#be123c; font-size:15px;'>x<sup>3</sup> - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3 - 8y<sup>3</sup>/27</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 7",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને કિંમત મેળવો:\n(i) (99)³\n(ii) (102)³\n(iii) (998)³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) (99)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (100 - 1)<sup>3</sup><br>
                                = (100)<sup>3</sup> - (1)<sup>3</sup> - 3(100)(1)(100 - 1)<br>
                                = 1000000 - 1 - 300(99)<br>
                                = 1000000 - 1 - 29700<br>
                                = 1000000 - 29701<br>
                                = <b style='color:#0f172a; font-size:16px;'>970299</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:300px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) (102)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1;'>
                                = (100 + 2)<sup>3</sup><br>
                                = (100)<sup>3</sup> + (2)<sup>3</sup> + 3(100)(2)(100 + 2)<br>
                                = 1000000 + 8 + 600(102)<br>
                                = 1000000 + 8 + 61200<br>
                                = <b style='color:#0284c7; font-size:16px;'>1061208</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) (998)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (1000 - 2)<sup>3</sup><br>
                                = (1000)<sup>3</sup> - (2)<sup>3</sup> - 3(1000)(2)(1000 - 2)<br>
                                = 1000000000 - 8 - 6000(998)<br>
                                = 1000000000 - 8 - 5988000<br>
                                = 1000000000 - 5988008<br>
                                = <b style='color:#0f172a; font-size:16px;'>994011992</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>મીંડા (0) નો ઘન કરવામાં ક્યારેય ભૂલ ન કરો! <b>જેટલા મીંડા હોય, તેના 3 ગણા મીંડા કરી નાખવા.</b> <br>
                    દા.ત. 100 નો ઘન &rarr; બે મીંડાના 6 મીંડા (1000000). <br>
                    1000 નો ઘન &rarr; ત્રણ મીંડાના 9 મીંડા (1000000000). આ ટ્રીકથી શૂન્ય ગણવામાં ભૂલ નહિ પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 8",
                "marks": 4,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 8a³ + b³ + 12a²b + 6ab²\n(ii) 8a³ - b³ - 12a²b + 6ab²\n(iii) 27 - 125a³ - 135a + 225a²\n(iv) 64a³ - 27b³ - 144a²b + 108ab²\n(v) 27p³ - 1/216 - 9/2p² + 1/4p", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> આ દાખલા પ્રશ્ન 6 ની બિલકુલ ઊલટી પ્રક્રિયા છે. અહીં આપણે (a + b)<sup>3</sup> અથવા (a - b)<sup>3</sup> નિત્યસમ મુજબ પદોને ગોઠવવાના છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px solid #bbf7d0; min-width:380px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 8a<sup>3</sup> + b<sup>3</sup> + 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2a)<sup>3</sup> + (b)<sup>3</sup> + 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#15803d; font-size:15px;'>(2a + b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) 8a<sup>3</sup> - b<sup>3</sup> - 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (b)<sup>3</sup> - 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(2a - b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 27 - 125a<sup>3</sup> - 135a + 225a<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3)<sup>3</sup> - (5a)<sup>3</sup> - 3(3)<sup>2</sup>(5a) + 3(3)(5a)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3 - 5a)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 64a<sup>3</sup> - 27b<sup>3</sup> - 144a<sup>2</sup>b + 108ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (4a)<sup>3</sup> - (3b)<sup>3</sup> - 3(4a)<sup>2</sup>(3b) + 3(4a)(3b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(4a - 3b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 27p<sup>3</sup> - 1/216 - 9/2p<sup>2</sup> + 1/4p</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3p)<sup>3</sup> - (1/6)<sup>3</sup> - 3(3p)<sup>2</sup>(1/6) + 3(3p)(1/6)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3p - 1/6)<sup>3</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા મોટા દાખલા જોઈને ડરવાનું બિલકુલ નહિ! <b>ફક્ત પહેલા બે પદ પકડી લો.</b> <br>
                    પહેલા પદનું ઘનમૂળ કાઢો અને બીજા પદનું ઘનમૂળ કાઢો. જો રકમમાં માઇનસ હોય તો વચ્ચે માઇનસ મૂકી આખા કૌંસનો ઘન (Cube) કરી દો! જવાબ તમારા હાથમાં!<br>
                    દા.ત. (v) માં: 27p<sup>3</sup> નું ઘનમૂળ <b>3p</b> અને 1/216 નું ઘનમૂળ <b>1/6</b>. વચ્ચે માઇનસ. સીધો જવાબ (3p - 1/6)<sup>3</sup> !</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 9",
                "marks": 3,
                "question": "ચકાસો:\n(i) x³ + y³ = (x + y)(x² - xy + y²)\n(ii) x³ - y³ = (x - y)(x² + xy + y²)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ચકાસણી માટે આપણે જમણી બાજુ (RHS) નો ગુણાકાર કરી ડાબી બાજુ (LHS) લાવીશું.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> + y<sup>3</sup> = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.6;'>
                                જ.બા. = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> - xy + y<sup>2</sup>) + y(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> - x<sup>2</sup>y + xy<sup>2</sup> + x<sup>2</sup>y - xy<sup>2</sup> + y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[-x<sup>2</sup>y અને +x<sup>2</sup>y તેમજ +xy<sup>2</sup> અને -xy<sup>2</sup> ઉડી જશે]</span><br>
                                = <b style='color:#0284c7;'>x<sup>3</sup> + y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - y<sup>3</sup> = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                જ.બા. = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> + xy + y<sup>2</sup>) - y(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> + x<sup>2</sup>y + xy<sup>2</sup> - x<sup>2</sup>y - xy<sup>2</sup> - y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સરખા અને વિરુદ્ધ નિશાન વાળા પદો ઉડી જશે]</span><br>
                                = <b style='color:#be123c;'>x<sup>3</sup> - y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 10",
                "marks": 3,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 27y³ + 125z³\n(ii) 64m³ - 343n³\n[સૂચન: પ્રશ્ન 9 જુઓ]", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ઉપરના પ્રશ્ન 9 માં સાબિત કરેલા સૂત્રોનો સીધો ઉપયોગ કરવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) 27y<sup>3</sup> + 125z<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534; line-height:1.6;'>
                                = (3y)<sup>3</sup> + (5z)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> + b<sup>3</sup> = (a+b)(a<sup>2</sup> - ab + b<sup>2</sup>)]</span><br>
                                = (3y + 5z) [ (3y)<sup>2</sup> - (3y)(5z) + (5z)<sup>2</sup> ]<br>
                                = <b style='color:#15803d; font-size:15px;'>(3y + 5z)(9y<sup>2</sup> - 15yz + 25z<sup>2</sup>)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) 64m<sup>3</sup> - 343n<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                = (4m)<sup>3</sup> - (7n)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> - b<sup>3</sup> = (a-b)(a<sup>2</sup> + ab + b<sup>2</sup>)]</span><br>
                                = (4m - 7n) [ (4m)<sup>2</sup> + (4m)(7n) + (7n)<sup>2</sup> ]<br>
                                = <b style='color:#be123c; font-size:15px;'>(4m - 7n)(16m<sup>2</sup> + 28mn + 49n<sup>2</sup>)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં બીજા કૌંસમાં નિશાનીની બહુ ભૂલ પડે છે! તેને યાદ રાખવાનો સિમ્પલ રસ્તો:<br>
                    <b>SOAP નો નિયમ!</b><br>
                    <b>S</b> = Same (પહેલા કૌંસમાં રકમ જેવી જ નિશાની)<br>
                    <b>O</b> = Opposite (બીજા કૌંસના પહેલા પદમાં વિરુદ્ધ નિશાની)<br>
                    <b>AP</b> = Always Positive (બીજા કૌંસનું છેલ્લું પદ હંમેશા પ્લસ જ હોય!)</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 11",
                "marks": 3,
                "question": "અવયવ પાડો:\n27x³ + y³ + z³ - 9xyz", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border:2px dashed #0284c7; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0 0 5px 0; color:#0c4a6e; font-weight:bold; font-size:14px;'>નિત્યસમનો ઉપયોગ:</p>
                        <div style='font-size:15px; color:#0369a1; font-weight:bold;'>
                            a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> - 3abc = (a + b + c)(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> - ab - bc - ca)
                        </div>
                    </div>

                    <div style='overflow-x:auto; font-family:monospace; font-size:15px; color:#334155; line-height:1.8; background-color:#f8fafc; padding:15px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                        = (3x)<sup>3</sup> + (y)<sup>3</sup> + (z)<sup>3</sup> - 3(3x)(y)(z)<br>
                        <span style='color:#64748b; font-size:12px;'>[અહીં a = 3x, b = y, અને c = z લેતાં]</span><br>
                        = (3x + y + z)[ (3x)<sup>2</sup> + (y)<sup>2</sup> + (z)<sup>2</sup> - (3x)(y) - (y)(z) - (z)(3x) ]<br>
                        = <b style='color:#1e3a8a; font-size:16px;'>(3x + y + z)(9x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 3xy - yz - 3zx)</b>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 12",
                "marks": 4,
                "question": "ચકાસો:\nx³ + y³ + z³ - 3xyz = (1/2)(x + y + z)[(x - y)² + (y - z)² + (z - x)²]", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>જમણી બાજુ (RHS) પરથી ગણતરી શરૂ કરીશું:</p>

                    <div style='overflow-x:auto; font-family:monospace; font-size:14px; color:#0f172a; line-height:1.8; background-color:#f0fdf4; padding:15px; border-radius:5px; border-left:4px solid #16a34a;'>
                        જ.બા. = <span style='color:#166534;'>(1/2)(x + y + z) [ (x - y)<sup>2</sup> + (y - z)<sup>2</sup> + (z - x)<sup>2</sup> ]</span><br><br>
                        <span style='color:#64748b; font-size:12px;'>[કૌંસમાં રહેલા વર્ગોનું વિસ્તરણ કરતા: (a-b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup>]</span><br>
                        = (1/2)(x + y + z) [ (x<sup>2</sup> - 2xy + y<sup>2</sup>) + (y<sup>2</sup> - 2yz + z<sup>2</sup>) + (z<sup>2</sup> - 2zx + x<sup>2</sup>) ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[સમાન પદોનો સરવાળો કરતા (દા.ત. x<sup>2</sup> + x<sup>2</sup> = 2x<sup>2</sup>)]</span><br>
                        = (1/2)(x + y + z) [ 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> - 2xy - 2yz - 2zx ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[બીજા કૌંસમાંથી 2 સામાન્ય (Common) કાઢતા]</span><br>
                        = (1/2) &times; 2 &times; (x + y + z) [ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[1/2 અને 2 ઉડી જશે]</span><br>
                        = (x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)<br><br>
                        <span style='color:#64748b; font-size:12px;'>[આ તો પ્રશ્ન 11 વાળું મુખ્ય નિત્યસમ જ બની ગયું!]</span><br>
                        = <b style='color:#15803d; font-size:16px;'>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz</b><br>
                        = ડા.બા. <b>(ચકાસણી પૂર્ણ)</b>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 13",
                "marks": 3,
                "question": "જો x + y + z = 0 હોય, તો સાબિત કરો કે x³ + y³ + z³ = 3xyz.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fff1f2; padding:15px; border-radius:5px; border-left:4px solid #be123c;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'>આપણે જાણીએ છીએ કે,<br>
                        <b>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = (x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)</b></p>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>પરંતુ પ્રશ્નમાં આપેલું છે કે <b>x + y + z = 0</b>. તેથી આ કિંમત સૂત્રમાં મૂકતાં:</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3; font-family:monospace; font-size:15px;'>
                            x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = <b>(0)</b> &times; (x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)<br><br>
                            <span style='color:#64748b; font-size:13px;'>[કોઈપણ સંખ્યાનો શૂન્ય સાથેનો ગુણાકાર શૂન્ય જ થાય]</span><br>
                            &there4; x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = 0<br><br>
                            <span style='color:#64748b; font-size:13px;'>[-3xyz ને બરાબરની જમણી બાજુ લઈ જતા તે પ્લસ (+) થઈ જશે]</span><br>
                            &there4; <b style='color:#be123c; font-size:16px;'>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz</b> <span style='color:#881337;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ નિયમ ગોખી જ લો! જ્યારે પણ 3 સંખ્યાઓનો <b>સરવાળો 0 (શૂન્ય)</b> થતો હોય, ત્યારે તેમના ઘનનો સરવાળો હંમેશા તેમના <b>ગુણાકારથી 3 ગણો (3xyz)</b> જ થાય! આ શોર્ટકટ હવે પછીના પ્રશ્નમાં ડાયરેક્ટ વાપરવાનો છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 14",
                "marks": 3,
                "question": "ઘનનું મૂલ્ય મેળવ્યા સિવાય નીચેના દરેકની કિંમત મેળવો:\n(i) (-12)³ + (7)³ + (5)³\n(ii) (28)³ + (-15)³ + (-13)³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) (-12)<sup>3</sup> + (7)<sup>3</sup> + (5)<sup>3</sup></h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                ધારો કે x = -12, y = 7, z = 5<br>
                                અહીં x + y + z = -12 + 7 + 5 = -12 + 12 = <b>0</b><br>
                                <span style='color:#15803d; font-weight:bold;'>સરવાળો 0 હોવાથી પ્રશ્ન 13 ના નિયમ મુજબ: x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz થાય.</span><br>
                                = 3 &times; (-12) &times; (7) &times; (5)<br>
                                = -36 &times; 35<br>
                                = <b style='color:#16a34a; font-size:18px;'>-1260</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(ii) (28)<sup>3</sup> + (-15)<sup>3</sup> + (-13)<sup>3</sup></h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                ધારો કે x = 28, y = -15, z = -13<br>
                                અહીં x + y + z = 28 + (-15) + (-13) = 28 - 28 = <b>0</b><br>
                                <span style='color:#0284c7; font-weight:bold;'>સરવાળો 0 હોવાથી: x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz થાય.</span><br>
                                = 3 &times; (28) &times; (-15) &times; (-13)<br>
                                <span style='color:#64748b; font-size:12px;'>[બે માઇનસ નો ગુણાકાર પ્લસ થાય: (-15 &times; -13) = 195]</span><br>
                                = 84 &times; 195<br>
                                = <b style='color:#0284c7; font-size:18px;'>16380</b>
                            </div>
                        </div>
                        
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 15",
                "marks": 3,
                "question": "નીચે લંબચોરસનાં ક્ષેત્રફળ આપેલ છે, તેમની સંભવિત લંબાઈ અને પહોળાઈ શોધો:\n(i) ક્ષેત્રફળ: 25a² - 35a + 12\n(ii) ક્ષેત્રફળ: 35y² + 13y - 12", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#ffedd5; padding:15px; border-radius:8px; border:1px dashed #ea580c; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#9a3412; font-weight:bold; font-size:15px;'>લંબચોરસનું ક્ષેત્રફળ = લંબાઈ &times; પહોળાઈ</p>
                        <svg width="240" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="200" height="80" fill="#fefce8" stroke="#ca8a04" stroke-width="3"/>
                            <text x="120" y="65" fill="#a16207" font-size="16" font-weight="bold" text-anchor="middle">ક્ષેત્રફળ</text>
                            <text x="120" y="115" fill="#ca8a04" font-size="14" font-weight="bold" text-anchor="middle">લંબાઈ (l)</text>
                            <text x="10" y="65" fill="#ca8a04" font-size="14" font-weight="bold" transform="rotate(-90 10,65)" text-anchor="middle">પહોળાઈ (b)</text>
                        </svg>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#c2410c;'>આથી આપણે આપેલી દ્વિઘાત બહુપદીના બે અવયવ (લંબાઈ અને પહોળાઈ) પાડવા પડશે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(i) 25a<sup>2</sup> - 35a + 12</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર: 25 &times; 12 = 300, સરવાળો: -35 (અવયવો: -20 અને -15)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7; font-family:monospace; font-size:14px;'>
                                = 25a<sup>2</sup> - 20a - 15a + 12<br>
                                = 5a(5a - 4) - 3(5a - 4)<br>
                                = (5a - 4)(5a - 3)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; લંબાઈ = (5a - 3) અને પહોળાઈ = (5a - 4) </span><br>
                                <span style='color:#64748b; font-size:12px;'>(નોંધ: મોટા પદને લંબાઈ ગણી શકાય).</span>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(ii) 35y<sup>2</sup> + 13y - 12</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર: 35 &times; -12 = -420, બાદબાકી: 13 (અવયવો: 28 અને -15)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7; font-family:monospace; font-size:14px;'>
                                = 35y<sup>2</sup> + 28y - 15y - 12<br>
                                = 7y(5y + 4) - 3(5y + 4)<br>
                                = (5y + 4)(7y - 3)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; લંબાઈ = (5y + 4) અને પહોળાઈ = (7y - 3)</span>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 16",
                "marks": 3,
                "question": "નીચે લંબઘનનાં ઘનફળ આપેલ છે, તેમનાં શક્ય પરિમાણ (લંબાઈ, પહોળાઈ અને ઊંચાઈ) શોધો:\n(i) ઘનફળ: 3x² - 12x\n(ii) ઘનફળ: 12ky² + 8ky - 20k", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#e0f2fe; padding:15px; border-radius:8px; border:1px dashed #0284c7; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#0369a1; font-weight:bold; font-size:15px;'>લંબઘનનું ઘનફળ = લંબાઈ &times; પહોળાઈ &times; ઊંચાઈ</p>
                        <svg width="200" height="140" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="60,30 160,30 160,90 60,90" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="20" y1="60" x2="60" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="20" y1="120" x2="60" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <polygon points="20,60 120,60 120,120 20,120" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="120" y1="60" x2="160" y2="30" stroke="#0284c7" stroke-width="2"/>
                            <line x1="120" y1="120" x2="160" y2="90" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="120,60 160,30 160,90 120,120" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="20,60 60,30 160,30 120,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <text x="70" y="95" fill="#0369a1" font-size="14" font-weight="bold">ઘનફળ</text>
                            <text x="70" y="135" fill="#0284c7" font-size="12" font-weight="bold">લંબાઈ</text>
                            <text x="-5" y="95" fill="#0284c7" font-size="12" font-weight="bold">ઊંચાઈ</text>
                            <text x="145" y="120" fill="#0284c7" font-size="12" font-weight="bold">પહોળાઈ</text>
                        </svg>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#0c4a6e;'>આથી આપણે આપેલી બહુપદીમાંથી 3 અવયવો (l, b અને h) છૂટા પાડવાના છે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 3x<sup>2</sup> - 12x</h4>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-family:monospace; font-size:14px;'>
                                <span style='color:#64748b; font-size:12px;'>[બંને પદોમાંથી 3x સામાન્ય કાઢતાં]</span><br>
                                = 3x (x - 4)<br>
                                = (3) &times; (x) &times; (x - 4)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; શક્ય પરિમાણો: 3, x અને (x - 4) છે.</span>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) 12ky<sup>2</sup> + 8ky - 20k</h4>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-family:monospace; font-size:14px;'>
                                <span style='color:#64748b; font-size:12px;'>[બધા પદોમાંથી 4k સામાન્ય કાઢતાં]</span><br>
                                = 4k [ 3y<sup>2</sup> + 2y - 5 ]<br>
                                <span style='color:#64748b; font-size:12px;'>[હવે કૌંસના અવયવ પાડો: ગુણાકાર -15, બાદબાકી 2]</span><br>
                                = 4k [ 3y<sup>2</sup> + 5y - 3y - 5 ]<br>
                                = 4k [ y(3y + 5) - 1(3y + 5) ]<br>
                                = 4k [ (3y + 5)(y - 1) ]<br>
                                = (4k) &times; (3y + 5) &times; (y - 1)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; શક્ય પરિમાણો: 4k, (3y + 5) અને (y - 1) છે.</span>
                            </div>
                        </div>
                    </div>
                </div>`
                }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 3: યામ ભૂમિતિ (સ્વાધ્યાય)
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "યામ ભૂમિતિ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 3.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "બીજી કોઈ વ્યક્તિને તમારા અભ્યાસ કરવાના ટેબલ પર મૂકેલા ટેબલ લૅમ્પનું સ્થાન કેવી રીતે વર્ણવશો?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> ટેબલને આપણે એક <b>સમતલ (Plane)</b> તરીકે અને ટેબલ લૅમ્પને એક <b>બિંદુ (Point)</b> તરીકે લઈશું.</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>ટેબલ અને લૅમ્પની આકૃતિ</p>
                        <svg viewBox="0 0 400 250" style="width:100%; min-width:320px; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <rect x="40" y="20" width="320" height="180" fill="#fef3c7" stroke="#d97706" stroke-width="4" rx="10"/>
                            <text x="200" y="18" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">લાંબી ધાર (x-અક્ષ)</text>
                            <text x="25" y="110" fill="#b45309" font-size="14" font-weight="bold" transform="rotate(-90 25,110)" text-anchor="middle">ટૂંકી ધાર (y-અક્ષ)</text>
                            
                            <circle cx="40" cy="200" r="5" fill="#1e3a8a"/>
                            <text x="20" y="215" fill="#1e3a8a" font-size="14" font-weight="bold">O</text>
                            
                            <circle cx="160" cy="110" r="12" fill="#ef4444"/>
                            <circle cx="160" cy="110" r="6" fill="#fca5a5"/>
                            <text x="175" y="105" fill="#b91c1c" font-size="14" font-weight="bold">લૅમ્પ P (25, 30)</text>
                            
                            <line x1="40" y1="110" x2="160" y2="110" stroke="#0284c7" stroke-width="2" stroke-dasharray="5,5"/>
                            <line x1="160" y1="200" x2="160" y2="110" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <text x="100" y="100" fill="#0284c7" font-size="14" font-weight="bold" text-anchor="middle">30 cm</text>
                            <text x="170" y="160" fill="#16a34a" font-size="14" font-weight="bold">25 cm</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <ul style='margin:0; padding-left:20px; font-size:15px; color:#14532d; line-height:1.6;'>
                            <li>ટેબલની કોઈપણ બે લંબ (કાટખૂણે રહેલી) ધાર પસંદ કરો. દા.ત. ડાબી બાજુની ટૂંકી ધાર અને નીચેની લાંબી ધાર.</li>
                            <li>ધારો કે લૅમ્પનું ડાબી બાજુની ટૂંકી ધારથી અંતર માપતાં <b>30 cm</b> મળે છે.</li>
                            <li>અને લૅમ્પનું નીચેની લાંબી ધારથી અંતર માપતાં <b>25 cm</b> મળે છે.</li>
                            <li>આથી, જો આપણે નીચેની ધારને x-અક્ષ અને ડાબી ધારને y-અક્ષ માનીએ, તો લૅમ્પનું સ્થાન <b>(25, 30)</b> અથવા (30, 25) કહી શકાય (કઈ ધારને x-અક્ષ માની છે તેના પર આધાર રાખે છે).</li>
                        </ul>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ બીજું કઈ નહિ પણ <b>GPS લોકેશન</b> જ છે! જેમ નકશામાં અક્ષાંશ અને રેખાંશથી ચોક્કસ જગ્યા મળે, તેમ ટેબલ પર બે લાઈનોથી લૅમ્પનું ચોક્કસ લોકેશન (યામ) મળી જાય. (x, y) એટલે (નીચેથી અંતર, ડાબી બાજુથી અંતર).</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 3.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "શેરીનો નકશો (Street Plan): એક શહેરના બે મુખ્ય રસ્તાઓ શહેરના કેન્દ્ર આગળ એકબીજાને છેદે છે. આ બે રસ્તાઓ ઉત્તર-દક્ષિણ દિશાઓ અને પૂર્વ-પશ્ચિમ દિશાઓમાં છે. શહેરની બાકીની બધી શેરીઓ આ રસ્તાઓની સમાંતરે છે અને પરસ્પર 200 મીટર દૂર છે. દરેક દિશામાં 5 શેરીઓ છે. 1 cm = 200 m માપ લઈ તમારી નોટબુકમાં શહેરનું આદર્શ ચિત્ર દોરો.\n(i) કેટલી છેદતી શેરીઓનું નામાભિધાન (4, 3) તરીકે થઈ શકે?\n(ii) કેટલી છેદતી શેરીઓનું નામાભિધાન (3, 4) તરીકે થઈ શકે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>શહેરનો નકશો (Street Plan Model)</p>
                        <svg viewBox="-20 -20 380 380" style="width:100%; min-width:320px; max-width:400px; background-color:#ffffff; border:1px solid #e2e8f0;" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#0f172a" />
                                </marker>
                            </defs>
                            
                            <line x1="0" y1="300" x2="350" y2="300" stroke="#0f172a" stroke-width="3" marker-end="url(#arrow)"/>
                            <line x1="50" y1="350" x2="50" y2="0" stroke="#0f172a" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <text x="320" y="320" fill="#0f172a" font-size="12" font-weight="bold">પૂર્વ (E)</text>
                            <text x="-15" y="305" fill="#0f172a" font-size="12" font-weight="bold">પશ્ચિમ (W)</text>
                            <text x="55" y="10" fill="#0f172a" font-size="12" font-weight="bold">ઉત્તર (N)</text>
                            <text x="55" y="360" fill="#0f172a" font-size="12" font-weight="bold">દક્ષિણ (S)</text>
                            <text x="35" y="315" fill="#0f172a" font-size="12" font-weight="bold">C</text>
                            
                            <line x1="50" y1="250" x2="350" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="200" x2="350" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="150" x2="350" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="100" x2="350" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="50" x2="350" y2="50" stroke="#94a3b8" stroke-width="1.5"/>
                            
                            <text x="15" y="254" fill="#64748b" font-size="10">શેરી 1</text>
                            <text x="15" y="204" fill="#64748b" font-size="10">શેરી 2</text>
                            <text x="15" y="154" fill="#64748b" font-size="10">શેરી 3</text>
                            <text x="15" y="104" fill="#64748b" font-size="10">શેરી 4</text>
                            <text x="15" y="54" fill="#64748b" font-size="10">શેરી 5</text>
                            
                            <line x1="100" y1="300" x2="100" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="150" y1="300" x2="150" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="200" y1="300" x2="200" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="250" y1="300" x2="250" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="300" y1="300" x2="300" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            
                            <text x="85" y="320" fill="#64748b" font-size="10">શેરી 1</text>
                            <text x="135" y="320" fill="#64748b" font-size="10">શેરી 2</text>
                            <text x="185" y="320" fill="#64748b" font-size="10">શેરી 3</text>
                            <text x="235" y="320" fill="#64748b" font-size="10">શેરી 4</text>
                            <text x="285" y="320" fill="#64748b" font-size="10">શેરી 5</text>
                            
                            <circle cx="250" cy="150" r="6" fill="#be123c"/>
                            <text x="260" y="145" fill="#be123c" font-size="12" font-weight="bold">(4, 3)</text>
                            
                            <circle cx="200" cy="100" r="6" fill="#1d4ed8"/>
                            <text x="210" y="95" fill="#1d4ed8" font-size="12" font-weight="bold">(3, 4)</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#334155;'><b>જવાબો:</b></p>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) કેટલી છેદતી શેરીઓનું નામાભિધાન (4, 3) તરીકે થઈ શકે?</h4>
                            <p style='margin:0; font-size:14px; color:#9f1239;'>ઉત્તર-દક્ષિણ દિશાની ચોથી (4) શેરી અને પૂર્વ-પશ્ચિમ દિશાની ત્રીજી (3) શેરી માત્ર એક જ બિંદુમાં છેદે છે. તેથી, <b>માત્ર 1 (એક અને માત્ર એક જ)</b> છેદતી શેરીનું નામાભિધાન (4, 3) તરીકે થઈ શકે.</p>
                        </div>

                        <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px;'>
                            <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(ii) કેટલી છેદતી શેરીઓનું નામાભિધાન (3, 4) તરીકે થઈ શકે?</h4>
                            <p style='margin:0; font-size:14px; color:#1e40af;'>ઉત્તર-દક્ષિણ દિશાની ત્રીજી (3) શેરી અને પૂર્વ-પશ્ચિમ દિશાની ચોથી (4) શેરી પણ માત્ર એક જ બિંદુમાં છેદે છે. તેથી, <b>માત્ર 1 (એક અને માત્ર એક જ)</b> છેદતી શેરીનું નામાભિધાન (3, 4) તરીકે થઈ શકે.</p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખા ગ્રાફમાં કોઈપણ યામ (x, y) હંમેશા <b>અનન્ય (Unique)</b> જ હોય છે! એક નામનું એક જ ઘર હોય! તેથી આવા પ્રશ્નનો જવાબ હંમેશા <b>"માત્ર એક જ"</b> આવે. (4, 3) અને (3, 4) બંને તદ્દન અલગ જગ્યાઓ છે, તે ક્યારેય એક ન હોઈ શકે.</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 3.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેના દરેક પ્રશ્નનો જવાબ આપો:\n(i) યામ સમતલમાં કોઈ પણ બિંદુ દર્શાવવા ઉપયોગમાં લેવાતી સમક્ષિતિજ અને શિરોલંબ રેખાઓનાં નામ શું છે?\n(ii) આ બે રેખાઓથી બનતા સમતલના દરેક ભાગનું નામ શું છે?\n(iii) આ બે રેખાઓ જ્યાં છેદે છે તે બિંદુનું નામ લખો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 5px 0; font-size:15px;'>(i) સમક્ષિતિજ અને શિરોલંબ રેખાઓનાં નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                &bull; <b>સમક્ષિતિજ (આડી) રેખા:</b> તેને <b style='color:#0284c7;'>x-અક્ષ (X-axis)</b> કહે છે.<br>
                                &bull; <b>શિરોલંબ (ઊભી) રેખા:</b> તેને <b style='color:#be123c;'>y-અક્ષ (Y-axis)</b> કહે છે.
                            </p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0; font-size:15px;'>(ii) સમતલના દરેક ભાગનું નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                આ બે રેખાઓ સમતલને 4 સરખા ભાગમાં વહેંચે છે. તે દરેક ભાગને <b style='color:#16a34a;'>ચરણ (Quadrant)</b> અથવા <b>પાદ</b> કહે છે. (પ્રથમ, દ્વિતીય, તૃતીય અને ચતુર્થ ચરણ).
                            </p>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0; font-size:15px;'>(iii) બે રેખાઓના છેદબિંદુનું નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                જ્યાં x-અક્ષ અને y-અક્ષ એકબીજાને છેદે છે (ભેગા થાય છે), તે બિંદુને <b style='color:#be123c;'>ઉગમબિંદુ (Origin)</b> કહે છે. તેને 'O' વડે દર્શાવાય છે અને તેના યામ <b>(0, 0)</b> હોય છે.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>શબ્દોમાં કન્ફ્યુઝન ન થાય તે માટે ટૂંકમાં યાદ રાખો: <br>
                    &bull; <b>આડી લાઈન = x-અક્ષ</b> (જેમ આપણે સૂતા હોઈએ)<br>
                    &bull; <b>ઊભી લાઈન = y-અક્ષ</b> (જેમ આપણે ઊભા હોઈએ)<br>
                    &bull; <b>ચોકડી = ઉગમબિંદુ</b> (બિંદુ ઝીરો ઝીરો!)</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 3.2 - પ્રશ્ન 2",
                "marks": 5,
                "question": "પાઠ્યપુસ્તકની આકૃતિ જુઓ અને નીચેના પ્રશ્નોના જવાબ લખો:\n(i) બિંદુ B ના યામ જણાવો.\n(ii) બિંદુ C ના યામ જણાવો.\n(iii) (-3, -5) દ્વારા દર્શાવાતું બિંદુ લખો.\n(iv) (2, -4) દ્વારા દર્શાવાતું બિંદુ લખો.\n(v) બિંદુ D નો x-યામ (કોટિ) જણાવો.\n(vi) બિંદુ H નો y-યામ (ભુજ) જણાવો.\n(vii) બિંદુ L ના યામ જણાવો.\n(viii) બિંદુ M ના યામ જણાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:20px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>યામ સમતલ (Cartesian Plane)</p>
                        <svg viewBox="-20 -20 340 340" style="width:100%; min-width:320px; max-width:400px; background-color:#ffffff; border:1px solid #e2e8f0;" xmlns="http://www.w3.org/2000/svg">
                            
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                            <rect width="300" height="300" fill="url(#grid)" />
                            
                            <line x1="0" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="2"/>
                            <line x1="150" y1="0" x2="150" y2="300" stroke="#0f172a" stroke-width="2"/>
                            
                            <polygon points="300,146 306,150 300,154" fill="#0f172a"/>
                            <text x="310" y="154" fill="#0f172a" font-size="12" font-weight="bold">X</text>
                            <polygon points="0,146 -6,150 0,154" fill="#0f172a"/>
                            <text x="-15" y="154" fill="#0f172a" font-size="12" font-weight="bold">X'</text>
                            
                            <polygon points="146,0 150,-6 154,0" fill="#0f172a"/>
                            <text x="156" y="-10" fill="#0f172a" font-size="12" font-weight="bold">Y</text>
                            <polygon points="146,300 150,306 154,300" fill="#0f172a"/>
                            <text x="156" y="315" fill="#0f172a" font-size="12" font-weight="bold">Y'</text>
                            
                            <text x="166" y="165" fill="#475569" font-size="10">1</text>
                            <text x="186" y="165" fill="#475569" font-size="10">2</text>
                            <text x="206" y="165" fill="#475569" font-size="10">3</text>
                            <text x="226" y="165" fill="#475569" font-size="10">4</text>
                            <text x="246" y="165" fill="#475569" font-size="10">5</text>
                            <text x="266" y="165" fill="#475569" font-size="10">6</text>
                            
                            <text x="123" y="165" fill="#475569" font-size="10">-1</text>
                            <text x="103" y="165" fill="#475569" font-size="10">-2</text>
                            <text x="83" y="165" fill="#475569" font-size="10">-3</text>
                            <text x="63" y="165" fill="#475569" font-size="10">-4</text>
                            <text x="43" y="165" fill="#475569" font-size="10">-5</text>
                            <text x="23" y="165" fill="#475569" font-size="10">-6</text>
                            
                            <text x="135" y="133" fill="#475569" font-size="10">1</text>
                            <text x="135" y="113" fill="#475569" font-size="10">2</text>
                            <text x="135" y="93" fill="#475569" font-size="10">3</text>
                            <text x="135" y="73" fill="#475569" font-size="10">4</text>
                            <text x="135" y="53" fill="#475569" font-size="10">5</text>
                            <text x="135" y="33" fill="#475569" font-size="10">6</text>
                            
                            <text x="130" y="173" fill="#475569" font-size="10">-1</text>
                            <text x="130" y="193" fill="#475569" font-size="10">-2</text>
                            <text x="130" y="213" fill="#475569" font-size="10">-3</text>
                            <text x="130" y="233" fill="#475569" font-size="10">-4</text>
                            <text x="130" y="253" fill="#475569" font-size="10">-5</text>
                            <text x="130" y="273" fill="#475569" font-size="10">-6</text>
                            
                            <text x="135" y="165" fill="#0f172a" font-size="12" font-weight="bold">O</text>
                            
                            <polyline points="50,150 50,110 150,110" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="150,250 250,250 250,150" fill="none" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="270,150 270,110 150,110" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="90,150 90,250 150,250" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="190,150 190,230 150,230" fill="none" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="50,150 50,210 150,210" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,4"/> <circle cx="50" cy="110" r="4" fill="#0284c7"/>
                            <text x="35" y="105" fill="#0284c7" font-size="14" font-weight="bold">B</text>
                            
                            <circle cx="250" cy="250" r="4" fill="#be123c"/>
                            <text x="260" y="260" fill="#be123c" font-size="14" font-weight="bold">C</text>
                            
                            <circle cx="270" cy="110" r="4" fill="#16a34a"/>
                            <text x="280" y="105" fill="#16a34a" font-size="14" font-weight="bold">D</text>
                            
                            <circle cx="90" cy="250" r="4" fill="#ea580c"/>
                            <text x="75" y="260" fill="#ea580c" font-size="14" font-weight="bold">E</text>
                            
                            <circle cx="190" cy="230" r="4" fill="#9333ea"/>
                            <text x="200" y="240" fill="#9333ea" font-size="14" font-weight="bold">G</text>
                            
                            <circle cx="50" cy="210" r="4" fill="#d97706"/>
                            <text x="35" y="220" fill="#d97706" font-size="14" font-weight="bold">H</text>
                            
                            <circle cx="150" cy="50" r="4" fill="#0f172a"/>
                            <text x="160" y="55" fill="#0f172a" font-size="14" font-weight="bold">L</text>
                            
                            <circle cx="90" cy="150" r="4" fill="#0f172a"/>
                            <text x="85" y="140" fill="#0f172a" font-size="14" font-weight="bold">M</text>
                            
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#334155; font-weight:bold;'>આકૃતિ પરથી જવાબો:</p>
                        
                        <div style='display:flex; flex-wrap:wrap; gap:10px;'>
                            <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:10px; border-radius:5px; border-left:4px solid #0284c7;'>
                                <h4 style='color:#0c4a6e; margin:0 0 5px 0; font-size:14px;'>(i) બિંદુ B ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#0369a1;'>x-અક્ષ પર -5 અને y-અક્ષ પર 2 છે. તેથી યામ <b>(-5, 2)</b> મળે.</p>
                            </div>
                            
                            <div style='flex:1; min-width:250px; background-color:#fff1f2; padding:10px; border-radius:5px; border-left:4px solid #be123c;'>
                                <h4 style='color:#881337; margin:0 0 5px 0; font-size:14px;'>(ii) બિંદુ C ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#9f1239;'>x-અક્ષ પર 5 અને y-અક્ષ પર -5 છે. તેથી યામ <b>(5, -5)</b> મળે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#fff7ed; padding:10px; border-radius:5px; border-left:4px solid #ea580c;'>
                                <h4 style='color:#9a3412; margin:0 0 5px 0; font-size:14px;'>(iii) (-3, -5) વાળું બિંદુ:</h4>
                                <p style='margin:0; font-size:14px; color:#c2410c;'>x-અક્ષ પર -3 અને y-અક્ષ પર -5 વાળું બિંદુ <b>E</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#faf5ff; padding:10px; border-radius:5px; border-left:4px solid #9333ea;'>
                                <h4 style='color:#6b21a8; margin:0 0 5px 0; font-size:14px;'>(iv) (2, -4) વાળું બિંદુ:</h4>
                                <p style='margin:0; font-size:14px; color:#7e22ce;'>x-અક્ષ પર 2 અને y-અક્ષ પર -4 વાળું બિંદુ <b>G</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0; font-size:14px;'>(v) બિંદુ D નો x-યામ (કોટિ):</h4>
                                <p style='margin:0; font-size:14px; color:#15803d;'>બિંદુ D ના યામ (6, 2) છે. તેથી તેનો x-યામ <b>6</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#fef3c7; padding:10px; border-radius:5px; border-left:4px solid #d97706;'>
                                <h4 style='color:#b45309; margin:0 0 5px 0; font-size:14px;'>(vi) બિંદુ H નો y-યામ (ભુજ):</h4>
                                <p style='margin:0; font-size:14px; color:#b45309;'>બિંદુ H ના યામ (-5, -3) છે. તેથી તેનો y-યામ <b>-3</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #475569;'>
                                <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:14px;'>(vii) બિંદુ L ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#334155;'>બિંદુ L માત્ર y-અક્ષ પર છે, તેનો x-યામ શૂન્ય થાય. તેથી યામ <b>(0, 5)</b> મળે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #475569;'>
                                <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:14px;'>(viii) બિંદુ M ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#334155;'>બિંદુ M માત્ર x-અક્ષ પર છે, તેનો y-યામ શૂન્ય થાય. તેથી યામ <b>(-3, 0)</b> મળે.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બે મહત્વની વાતો ગોખી લો:<br>
                    1) <b>x-યામ ને 'કોટિ'</b> કહેવાય અને <b>y-યામ ને 'ભુજ'</b> કહેવાય. આ હેતુલક્ષી પ્રશ્નોમાં અવારનવાર પૂછાય છે.<br>
                    2) જો બિંદુ <b>x-અક્ષ પર બેઠું હોય</b>, તો તેનો y-યામ હંમેશા શૂન્ય <b>(x, 0)</b> જ હોય. અને જો બિંદુ <b>y-અક્ષ પર બેઠું હોય</b>, તો તેનો x-યામ હંમેશા શૂન્ય <b>(0, y)</b> જ હોય!</p>
                </div>`
            }  
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 4: દ્વિચલ સુરેખ સમીકરણો (સ્વાધ્યાય)
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "દ્વિચલ સુરેખ સમીકરણો (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 4.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "નોટબુકની કિંમત પેનની કિંમત કરતાં બમણી છે. આ વિધાનને દ્વિચલ સુરેખ સમીકરણ સ્વરૂપે દર્શાવો. (ધારો કે નોટબુકની કિંમત ₹ x અને પેનની કિંમત ₹ y છે.)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 8px 0; font-size:15px; color:#0c4a6e;'>પ્રશ્નમાં આપ્યા મુજબ:</p>
                        <ul style='margin:0 0 10px 0; padding-left:20px; font-size:14px; color:#334155; line-height:1.6;'>
                            <li>ધારો કે નોટબુકની કિંમત = <b>₹ x</b></li>
                            <li>ધારો કે પેનની કિંમત = <b>₹ y</b></li>
                        </ul>
                    </div>
                    
                    <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>શરત મુજબ: નોટબુકની કિંમત = 2 &times; (પેનની કિંમત)</p>
                        <div style='font-family:monospace; font-size:16px; color:#0f172a; text-align:center; padding:10px; background-color:#ffffff; border-radius:5px; border:1px dashed #94a3b8;'>
                            &there4; x = 2y<br>
                            <span style='color:#64748b; font-size:13px;'>[2y ને બરાબરની ડાબી બાજુ લાવતાં નિશાની માઇનસ થશે]</span><br>
                            &there4; <b style='color:#16a34a; font-size:18px;'>x - 2y = 0</b>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#334155;'>આ માંગેલું દ્વિચલ સુરેખ સમીકરણ છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ગાણિતિક કૂટપ્રશ્નોમાં <b>જેની પાછળ 'કરતાં', 'થી' અથવા 'ના' શબ્દ લાગેલો હોય</b>, ગુણાકાર હંમેશા તેની સાથે જ કરવો! <br>
                    અહીં "પેનની કિંમત <b>કરતાં</b>" લખ્યું છે, એટલે પેનની કિંમત (y) ને જ 2 વડે ગુણવાના. એટલે સમીકરણ સીધું જ <b>x = 2y</b> બની જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે દર્શાવેલા દ્વિચલ સુરેખ સમીકરણોને ax + by + c = 0 સ્વરૂપે દર્શાવો અને દરેકમાં a, b અને c ની કિંમત શોધો:\n(i) 2x + 3y = 9.35̅\n(ii) x - y/5 - 10 = 0\n(iii) -2x + 3y = 6\n(iv) x = 3y\n(v) 2x = -5y\n(vi) 3x + 2 = 0\n(vii) y - 2 = 0\n(viii) 5 = 2x", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>નિયમ: સમીકરણને પ્રમાણિત સ્વરૂપ <span style='color:#be123c;'>ax + by + c = 0</span> માં ફેરવવા માટે, બરાબર (=) ની જમણી બાજુ 0 લાવવો પડે. (બધા જ પદો ડાબી બાજુ લાવી દેવા).</p>
                    
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; min-width:600px; border-collapse:collapse; text-align:center; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>ક્રમ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>આપેલ સમીકરણ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>ax + by + c = 0 સ્વરૂપ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>a (x નો સહગુણક)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>b (y નો સહગુણક)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>c (અચળ પદ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(i)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>2x + 3y = 9.3<span style='text-decoration:overline;'>5</span></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>2x + 3y - 9.3<span style='text-decoration:overline;'>5</span> = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-9.3<span style='text-decoration:overline;'>5</span></td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(ii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>x - <div style='display:inline-block; vertical-align:middle;'><div style='border-bottom:1px solid #000;'>y</div><div>5</div></div> - 10 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>1x - <div style='display:inline-block; vertical-align:middle;'><div style='border-bottom:1px solid #0284c7;'>1</div><div>5</div></div>y - 10 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-1/5</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-10</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>-2x + 3y = 6</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>-2x + 3y - 6 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-6</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iv)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>x = 3y</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>1x - 3y + 0 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(v)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>2x = -5y</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>2x + 5y + 0 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>5</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vi)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>3x + 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>3x + 0y + 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>y - 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>0x + 1y - 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(viii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>5 = 2x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>-2x + 0y + 5 = 0 <br><span style='font-size:12px; font-weight:normal; color:#64748b;'>(અથવા 2x + 0y - 5 = 0)</span></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>$a, b$ અને $c$ શોધવા બહુ જ સરળ છે! <br>
                    &bull; જે <b>x</b> ની સાથે ચોંટેલો હોય તે <b style='color:#be123c;'>a</b><br>
                    &bull; જે <b>y</b> ની સાથે ચોંટેલો હોય તે <b style='color:#be123c;'>b</b><br>
                    &bull; અને જે એકલો (અચળ) હોય તે <b style='color:#be123c;'>c</b><br>
                    <b>ખાસ નોંધ:</b> જો કોઈ પદ સમીકરણમાં ગાયબ હોય (જેમ કે દાખલા vi માં y નથી), તો તેનો સહગુણક સીધો <b>0 (શૂન્ય)</b> લખી દેવો અને જો પદ છે પણ આગળ કોઈ અંક નથી (જેમ કે દાખલા ii માં x છે), તો તેનો સહગુણક <b>1</b> ગણાય!</p>
                </div>`
            },

            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 1",
                "marks": 2,
                "question": "નીચેના પૈકી કયો વિકલ્પ સાચો છે અને શા માટે?\ny = 3x + 5 ને\n(i) અનન્ય ઉકેલ હોય.\n(ii) માત્ર બે ઉકેલ હોય.\n(iii) અનંત ઉકેલ હોય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>સાચો વિકલ્પ: (iii) અનંત ઉકેલ હોય.</h4>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#166534;'><b>કારણ:</b> દ્વિચલ સુરેખ સમીકરણ $y = 3x + 5$ માં, $x$ ની કોઈપણ કિંમત મૂકવાથી આપણને $y$ ની અનુરૂપ નવી કિંમત મળે છે. $x$ ની કિંમતો અનંત હોઈ શકે, તેથી તેના ઉકેલો પણ અનંત મળે છે.</p>
                        
                        <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #22c55e; margin-top:15px;'>
                            <p style='margin:0 0 10px 0; color:#15803d; font-weight:bold; font-size:14px;'>આલેખ પર સમજૂતી (રેખા પર અસંખ્ય બિંદુઓ હોય છે)</p>
                            <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="120" x2="280" y2="120" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="150" y1="10" x2="150" y2="140" stroke="#94a3b8" stroke-width="2"/>
                                
                                <line x1="50" y1="140" x2="250" y2="20" stroke="#0284c7" stroke-width="3"/>
                                
                                <circle cx="83.3" cy="120" r="4" fill="#be123c"/>
                                <circle cx="116.6" cy="100" r="4" fill="#be123c"/>
                                <circle cx="150" cy="80" r="4" fill="#be123c"/>
                                <circle cx="183.3" cy="60" r="4" fill="#be123c"/>
                                <circle cx="216.6" cy="40" r="4" fill="#be123c"/>
                                
                                <text x="170" y="30" fill="#0284c7" font-weight="bold" font-size="14">y = 3x + 5</text>
                                <text x="80" y="80" fill="#be123c" font-size="12">અનંત બિંદુઓ</text>
                                
                                <path d="M 250 20 L 240 15 L 245 25 z" fill="#0284c7"/>
                                <path d="M 50 140 L 60 145 L 55 135 z" fill="#0284c7"/>
                            </svg>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચેનાં પૈકી પ્રત્યેક સમીકરણના ચાર ઉકેલ લખો:\n(i) 2x + y = 7\n(ii) πx + y = 9\n(iii) x = 4y", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: સમીકરણમાંથી કોઈ એક ચલ (x અથવા y) ને કર્તા બનાવીશું અને બીજા ચલની 4 અલગ-અલગ કિંમતો (જેમ કે 0, 1, 2, 3) ધારીશું.</p>

                    <div style='display:flex; flex-direction:column; gap:20px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(i) 2x + y = 7</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં $y$ ને કર્તા બનાવવું સહેલું છે: <b style='color:#0284c7;'>y = 7 - 2x</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો x = 0 લઈએ, તો y = 7 - 2(0) = <b>7</b> &rarr; ઉકેલ (0, 7)</li>
                                <li>જો x = 1 લઈએ, તો y = 7 - 2(1) = 7 - 2 = <b>5</b> &rarr; ઉકેલ (1, 5)</li>
                                <li>જો x = 2 લઈએ, તો y = 7 - 2(2) = 7 - 4 = <b>3</b> &rarr; ઉકેલ (2, 3)</li>
                                <li>જો x = 3 લઈએ, તો y = 7 - 2(3) = 7 - 6 = <b>1</b> &rarr; ઉકેલ (3, 1)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#bae6fd; color:#0369a1; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>x</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>0</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>1</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>2</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>3</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #7dd3fc; font-weight:bold; color:#0369a1;'>y</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>7</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>5</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>3</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>1</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(ii) &pi;x + y = 9</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં પણ $y$ ને કર્તા બનાવીએ: <b style='color:#16a34a;'>y = 9 - &pi;x</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો x = 0 લઈએ, તો y = 9 - &pi;(0) = <b>9</b> &rarr; ઉકેલ (0, 9)</li>
                                <li>જો x = 1 લઈએ, તો y = 9 - &pi;(1) = <b>9 - &pi;</b> &rarr; ઉકેલ (1, 9 - &pi;)</li>
                                <li>જો x = 2 લઈએ, તો y = 9 - &pi;(2) = <b>9 - 2&pi;</b> &rarr; ઉકેલ (2, 9 - 2&pi;)</li>
                                <li>જો x = -1 લઈએ, તો y = 9 - &pi;(-1) = <b>9 + &pi;</b> &rarr; ઉકેલ (-1, 9 + &pi;)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#bbf7d0; color:#14532d; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #86efac;'>x</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>0</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>1</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>2</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>-1</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #86efac; font-weight:bold; color:#14532d;'>y</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 - &pi;</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 - 2&pi;</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 + &pi;</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(iii) x = 4y</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં $x$ પહેલાથી જ કર્તા છે. તેથી આપણે $y$ ની કિંમતો ધારીશું: <b style='color:#be123c;'>x = 4y</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો y = 0 લઈએ, તો x = 4(0) = <b>0</b> &rarr; ઉકેલ (0, 0)</li>
                                <li>જો y = 1 લઈએ, તો x = 4(1) = <b>4</b> &rarr; ઉકેલ (4, 1)</li>
                                <li>જો y = 2 લઈએ, તો x = 4(2) = <b>8</b> &rarr; ઉકેલ (8, 2)</li>
                                <li>જો y = 3 લઈએ, તો x = 4(3) = <b>12</b> &rarr; ઉકેલ (12, 3)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#fecdd3; color:#881337; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #fda4af;'>x</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>0</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>4</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>8</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>12</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #fda4af; font-weight:bold; color:#881337;'>y</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>0</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>1</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>2</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>3</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ઉકેલ શોધતી વખતે કયો ચલ ધરવો તેમાં મુંઝવણ થાય છે? સિમ્પલ છે! જે ચલની સાથે કોઈ સહગુણક ન હોય (એટલે કે જે એકલો હોય), તેને કર્તા બનાવી લો અને બીજા ચલની કિંમત <b>0, 1, 2, 3</b> ધારી લો. ગણતરી સાવ સરળ થઈ જશે અને ભાગાકાર નહિ કરવો પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચેનામાંથી કયાં બિંદુઓ સમીકરણ x - 2y = 4 ના ઉકેલ છે અને કયાં બિંદુઓ ઉકેલ નથી તે ચકાસો:\n(i) (0, 2)\n(ii) (2, 0)\n(iii) (4, 0)\n(iv) (√2, 4√2)\n(v) (1, 1)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>રીત: દરેક બિંદુના યામ (x, y) ને સમીકરણની ડાબી બાજુ (LHS = x - 2y) માં મૂકીશું. જો જવાબ 4 આવે (RHS), તો ઉકેલ છે, નહિ તો નથી.</p>

                    <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto;'>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) (0, 2) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 0 અને y = 2.<br>
                                ડા.બા. = x - 2y = (0) - 2(2) = 0 - 4 = -4<br>
                                અહીં -4 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(0, 2) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) (2, 0) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 2 અને y = 0.<br>
                                ડા.બા. = x - 2y = (2) - 2(0) = 2 - 0 = 2<br>
                                અહીં 2 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(2, 0) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) (4, 0) માટે:</h4>
                            <div style='font-size:14px; color:#064e3b;'>
                                અહીં x = 4 અને y = 0.<br>
                                ડા.બા. = x - 2y = (4) - 2(0) = 4 - 0 = 4<br>
                                અહીં 4 = 4 હોવાથી, <b style='color:#16a34a; font-size:15px;'>(4, 0) એ સમીકરણનો ઉકેલ છે!</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) (&radic;2, 4&radic;2) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = &radic;2 અને y = 4&radic;2.<br>
                                ડા.બા. = x - 2y = (&radic;2) - 2(4&radic;2) = &radic;2 - 8&radic;2 = -7&radic;2<br>
                                અહીં -7&radic;2 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(&radic;2, 4&radic;2) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(v) (1, 1) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 1 અને y = 1.<br>
                                ડા.બા. = x - 2y = (1) - 2(1) = 1 - 2 = -1<br>
                                અહીં -1 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(1, 1) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ છે આપણી <b>"LHS = RHS ગેમ"</b>! ડાબી બાજુ x અને y ની કિંમત મૂકો. જો જવાબ જમણી બાજુ જેટલો જ (અહીં 4) આવે તો જ બિંદુ <b>પાસ</b> (ઉકેલ છે), નહિ તો <b>ફેલ</b> (ઉકેલ નથી)! હેતુલક્ષી પ્રશ્નમાં મનમાં જ ગણતરી કરી શકાય.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 4",
                "marks": 2,
                "question": "જો x = 2, y = 1 એ સમીકરણ 2x + 3y = k નો એક ઉકેલ હોય, તો k ની કિંમત શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:5px; border:1px solid #bae6fd;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1;'><b>આપેલું સમીકરણ:</b> 2x + 3y = k</p>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'>અહીં (x = 2, y = 1) ઉકેલ હોવાથી, આપણે સમીકરણમાં x ની જગ્યાએ 2 અને y ની જગ્યાએ 1 મૂકીશું.</p>
                        
                        <div style='font-family:monospace; font-size:16px; color:#0f172a; text-align:center; padding:15px; background-color:#ffffff; border-radius:5px; border:1px dashed #0284c7;'>
                            2(2) + 3(1) = k<br><br>
                            &there4; 4 + 3 = k<br><br>
                            &there4; 7 = k<br><br>
                            <b style='color:#16a34a; font-size:20px;'>&there4; k = 7</b>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1; text-align:center;'>આમ, માંગેલ k ની કિંમત <b>7</b> છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલા પરીક્ષા માટે <b>Free Marks</b> સમાન છે! k શોધવાનો હોય ત્યારે કોઈ સમીકરણ ઉકેલવાની જરૂર નથી, બસ આપેલી x અને y ની કિંમતો સીધી જ મૂકીને સાદું રૂપ આપી દો. 2 માર્ક્સ સીધા ખિસ્સામાં!</p>
                </div>`
            }
    
        
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 5: યુક્લિડની ભૂમિતિનો પરિચય (સ્વાધ્યાય)
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "યુક્લિડની ભૂમિતિનો પરિચય (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલાં વિધાનોમાંથી કયાં વિધાનો સત્ય છે અને કયાં વિધાનો અસત્ય છે ? તમારા જવાબ માટે કારણ આપો :\n(i) એક બિંદુમાંથી પસાર થતી માત્ર એક રેખા દોરી શકાય છે.\n(ii) બે ભિન્ન બિંદુઓમાંથી પસાર થતી અસંખ્ય રેખાઓ હોય છે.\n(iii) એક શાંત રેખાને બંને તરફ અનિશ્ચિત રીતે લંબાવી શકાય છે.\n(iv) જો બે વર્તુળ સમાન હોય, તો તેમની ત્રિજ્યાઓ સમાન હોય છે.\n(v) આકૃતિમાં, જો AB = PQ અને PQ = XY છે, તો AB = XY થાય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) એક બિંદુમાંથી પસાર થતી માત્ર એક રેખા દોરી શકાય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#be123c; font-weight:bold;'>જવાબ: અસત્ય</p>
                            <p style='margin:0 0 10px 0; font-size:14px; color:#4c0519;'><b>કારણ:</b> કોઈ પણ એક બિંદુમાંથી અસંખ્ય (અનંત) રેખાઓ પસાર થઈ શકે છે.</p>
                            <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #fecdd3;'>
                                <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="140" y2="75" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="75" y1="10" x2="75" y2="140" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="20" y1="20" x2="130" y2="130" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="20" y1="130" x2="130" y2="20" stroke="#0284c7" stroke-width="2"/>
                                    <circle cx="75" cy="75" r="5" fill="#be123c"/>
                                    <text x="85" y="65" fill="#be123c" font-weight="bold">P</text>
                                </svg>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) બે ભિન્ન બિંદુઓમાંથી પસાર થતી અસંખ્ય રેખાઓ હોય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#be123c; font-weight:bold;'>જવાબ: અસત્ય</p>
                            <p style='margin:0 0 10px 0; font-size:14px; color:#4c0519;'><b>કારણ:</b> યુક્લિડની પૂર્વધારણા 5.1 મુજબ, આપેલા બે ભિન્ન બિંદુઓમાંથી પસાર થતી એક અને <b>માત્ર એક જ (અનન્ય)</b> રેખા હોય છે.</p>
                            <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #fecdd3;'>
                                <svg width="250" height="60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="30" x2="240" y2="30" stroke="#16a34a" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
                                    <circle cx="70" cy="30" r="5" fill="#1e3a8a"/>
                                    <text x="65" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                                    <circle cx="180" cy="30" r="5" fill="#1e3a8a"/>
                                    <text x="175" y="20" fill="#1e3a8a" font-weight="bold">B</text>
                                    <defs>
                                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="#16a34a" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) એક શાંત રેખાને બંને તરફ અનિશ્ચિત રીતે લંબાવી શકાય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> યુક્લિડની પૂર્વધારણા 2 મુજબ, શાંત રેખા (જેને આપણે આજે <b>રેખાખંડ</b> કહીએ છીએ) તેને બંને તરફ અનંત સુધી લંબાવીને રેખા બનાવી શકાય છે.</p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iv) જો બે વર્તુળ સમાન હોય, તો તેમની ત્રિજ્યાઓ સમાન હોય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> જો બે વર્તુળો સમાન (એકરૂપ) હોય, તો તે એકબીજા પર સંપૂર્ણપણે બંધબેસતા આવે છે. આથી તેમના કેન્દ્ર અને સીમાઓ એકરૂપ બને છે, પરિણામે તેમની ત્રિજ્યા પણ સમાન જ હોય.</p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(v) જો AB = PQ અને PQ = XY છે, તો AB = XY થાય.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> યુક્લિડના સ્વયંસિદ્ધ સત્ય (1) મુજબ: "જે વસ્તુઓ કોઈ એક સમાન વસ્તુને સમાન હોય, તે વસ્તુઓ એકબીજાને પણ સમાન થાય." અહીં AB અને XY બંને PQ ને સમાન છે, તેથી તેઓ એકબીજાને સમાન થાય.</p>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે આપેલાં પદોની વ્યાખ્યા આપો. શું તેના માટે કોઈ એવા પદ છે જેને વ્યાખ્યાયિત કરવાની જરૂર છે ? એ કયા છે અને તમે તેને કેવી રીતે વ્યાખ્યાયિત કરશો ?\n(i) સમાંતર રેખાઓ\n(ii) લંબ રેખાઓ\n(iii) રેખાખંડ\n(iv) વર્તુળની ત્રિજ્યા\n(v) ચોરસ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fffbeb; padding:12px; border-radius:5px; border-left:4px solid #d97706; margin-bottom:15px;'>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#92400e;'><b>નોંધ:</b> આ વ્યાખ્યાઓ આપવા માટે આપણને બિંદુ, રેખા, કિરણ, ખૂણો, સમતલ વગેરે પદોની જરૂર પડે છે. આ પદોને <b>અવ્યાખ્યાયિત પદો</b> માનવામાં આવે છે, છતાં તેને સામાન્ય સમજણથી સમજી શકાય છે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(i) સમાંતર રેખાઓ (Parallel Lines):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> એક જ સમતલમાં આવેલી બે રેખાઓ એકબીજાને ક્યારેય છેદે નહિ (ગમે તેટલી લંબાવવામાં આવે તો પણ), તો તે બે રેખાઓને સમાંતર રેખાઓ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="10" y1="20" x2="140" y2="20" stroke="#0284c7" stroke-width="2"/>
                                        <line x1="10" y1="40" x2="140" y2="40" stroke="#0284c7" stroke-width="2"/>
                                        <text x="145" y="24" fill="#0284c7" font-size="12">m</text>
                                        <text x="145" y="44" fill="#0284c7" font-size="12">n</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(ii) લંબ રેખાઓ (Perpendicular Lines):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> જો બે છેદતી રેખાઓ વચ્ચે બનતો ખૂણો <b>કાટખૂણો (90&deg;)</b> હોય, તો તે બે રેખાઓને લંબ રેખાઓ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="20" y1="80" x2="130" y2="80" stroke="#16a34a" stroke-width="2"/>
                                        <line x1="75" y1="20" x2="75" y2="100" stroke="#16a34a" stroke-width="2"/>
                                        <polyline points="75,70 85,70 85,80" fill="none" stroke="#16a34a" stroke-width="1.5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(iii) રેખાખંડ (Line Segment):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> રેખાનો એવો ભાગ જેને બે અંત્યબિંદુઓ (End points) હોય છે, તેને રેખાખંડ કહે છે. તેની લંબાઈ ચોક્કસ માપી શકાય છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="20" y1="25" x2="130" y2="25" stroke="#be123c" stroke-width="3"/>
                                        <circle cx="20" cy="25" r="4" fill="#be123c"/>
                                        <circle cx="130" cy="25" r="4" fill="#be123c"/>
                                        <text x="15" y="15" fill="#be123c" font-weight="bold">A</text>
                                        <text x="125" y="15" fill="#be123c" font-weight="bold">B</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(iv) વર્તુળની ત્રિજ્યા (Radius):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> વર્તુળના કેન્દ્ર અને વર્તુળ પરના કોઈ પણ બિંદુને જોડતા રેખાખંડને વર્તુળની ત્રિજ્યા કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#ea580c" stroke-width="2"/>
                                        <circle cx="50" cy="50" r="3" fill="#ea580c"/>
                                        <line x1="50" y1="50" x2="90" y2="50" stroke="#ea580c" stroke-width="2"/>
                                        <text x="65" y="45" fill="#ea580c" font-weight="bold">r</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(v) ચોરસ (Square):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> જે ચતુષ્કોણની ચારેય બાજુઓ સમાન હોય અને ચારેય ખૂણા કાટખૂણા (90&deg;) હોય, તેવા ચતુષ્કોણને ચોરસ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10" y="10" width="60" height="60" fill="none" stroke="#6d28d9" stroke-width="2"/>
                                        <polyline points="10,20 20,20 20,10" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="70,20 60,20 60,10" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="10,60 20,60 20,70" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="70,60 60,60 60,70" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચે આપેલી બે પૂર્વધારણાઓનો વિચાર કરો:\n(i) જો બે ભિન્ન બિંદુઓ A અને B આપ્યા હોય, તો તેમની વચ્ચે હોય તેવું ત્રીજું બિંદુ C મળે.\n(ii) અહીં ઓછામાં ઓછા એવા ત્રણ બિંદુઓ મળે કે જે એક જ રેખા પર ન હોય.\nશું આ પૂર્વધારણાઓમાં કોઈ અવ્યાખ્યાયિત પદ છે ? શું આ પૂર્વધારણાઓ સુસંગત છે ? શું આ પૂર્વધારણાઓ યુક્લિડની પૂર્વધારણાઓમાંથી મળે છે ? સ્પષ્ટ કરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <ul style='margin:0; padding-left:20px; font-size:15px; color:#334155; line-height:1.8;'>
                        <li><b>અવ્યાખ્યાયિત પદો:</b> હા, આ પૂર્વધારણાઓમાં 'બિંદુ' અને 'રેખા' જેવા પદો છે, જે ભૂમિતિમાં અવ્યાખ્યાયિત પદો માનવામાં આવે છે.</li>
                        
                        <li><b>સુસંગતતા:</b> હા, આ બંને પૂર્વધારણાઓ <b>સુસંગત (Consistent)</b> છે. કારણ કે બંને અલગ-અલગ પરિસ્થિતિઓ દર્શાવે છે અને એકબીજાનો વિરોધ કરતી નથી. 
                            <br>&bull; પહેલી પૂર્વધારણા કહે છે કે રેખાખંડ AB ની વચ્ચે બિંદુ C હોઈ શકે. 
                            <br>&bull; બીજી પૂર્વધારણા કહે છે કે સમતલમાં એવા બિંદુઓ પણ હોઈ શકે જે રેખા AB પર ન હોય (એટલે કે ત્રિકોણ બનાવી શકે).
                        </li>
                        
                        <li><b>યુક્લિડની પૂર્વધારણા સાથે સંબંધ:</b> ના, આ પૂર્વધારણાઓ સીધી રીતે યુક્લિડની પાંચ પૂર્વધારણાઓમાંથી મળતી <b>નથી</b>. પરંતુ, તે યુક્લિડના પૂર્વધારણા 5.1 (આપેલા બે ભિન્ન બિંદુઓમાંથી પસાર થતી અનન્ય રેખા હોય છે) સાથે સંબંધિત સ્વયંસિદ્ધ સત્યો પર આધારિત છે.</li>
                    </ul>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 4",
                "marks": 4,
                "question": "જો AC = BC થાય તેવું બિંદુ C, બિંદુઓ A અને B ની વચ્ચે હોય, તો સાબિત કરો કે AC = (1/2) AB છે. આકૃતિ દોરીને તેને સ્પષ્ટ કરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="30" x2="270" y2="30" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <circle cx="30" cy="30" r="5" fill="#be123c"/>
                            <text x="25" y="20" fill="#be123c" font-weight="bold">A</text>
                            
                            <circle cx="150" cy="30" r="5" fill="#16a34a"/>
                            <text x="145" y="20" fill="#16a34a" font-weight="bold">C</text>
                            
                            <circle cx="270" cy="30" r="5" fill="#be123c"/>
                            <text x="265" y="20" fill="#be123c" font-weight="bold">B</text>
                            
                            <path d="M 30 45 Q 90 60 150 45" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <path d="M 150 45 Q 210 60 270 45" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="80" y="55" fill="#16a34a" font-size="12" font-weight="bold">AC</text>
                            <text x="200" y="55" fill="#16a34a" font-size="12" font-weight="bold">BC</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#0f172a; font-size:14px; font-weight:bold;'>અહીં AC અને BC બંને સમાન લંબાઈના છે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:15px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:15px; color:#0c4a6e; line-height:1.8; margin-left:20px;'>
                            આપેલ છે કે: <b>AC = BC</b> ......(સમીકરણ 1)<br><br>
                            આપણે આકૃતિ પરથી સ્પષ્ટ જોઈ શકીએ છીએ કે બિંદુ C એ A અને B ની બરાબર વચ્ચે છે. તેથી, રેખાખંડ AB ના બે ટુકડા AC અને CB ભેગા મળીને આખો રેખાખંડ AB બનાવે છે.<br>
                            &there4; <b>AC + BC = AB</b><br><br>
                            હવે, સમીકરણ (1) મુજબ BC ની જગ્યાએ AC મૂકતાં:<br>
                            &there4; AC + AC = AB<br>
                            &there4; 2AC = AB<br><br>
                            &there4; <b style='color:#be123c; font-size:18px;'>AC = (1/2) AB</b> &nbsp;&nbsp;&nbsp; <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલો એટલું જ કહેવા માંગે છે કે <b>"અડધું + અડધું = આખું"</b>. જો એક લાકડીના બે એકસરખા ટુકડા કરીએ, તો કોઈ એક ટુકડો એ આખી લાકડી કરતાં અડધો (1/2) જ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 5",
                "marks": 3,
                "question": "પ્રશ્ન 4 માં C રેખાખંડ AB નું મધ્યબિંદુ કહેવાય છે. સાબિત કરો કે દરેક રેખાખંડને એક અને માત્ર એક જ મધ્યબિંદુ હોય છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સાબિતી: વિરોધાભાસની રીત (Method of Contradiction) દ્વારા</b></p>
                    
                    <div style='background-color:#f8fafc; padding:15px; border-left:4px solid #475569; border-radius:5px;'>
                        <ul style='margin:0; padding-left:20px; font-size:15px; color:#3f3f46; line-height:1.8;'>
                            <li>ધારો કે રેખાખંડ AB ને એક કરતાં વધુ, એટલે કે <b>બે અલગ-અલગ મધ્યબિંદુઓ C અને D</b> છે.</li>
                            <li>જો C મધ્યબિંદુ હોય, તો (પ્રશ્ન 4 મુજબ):<br>
                            <b>AC = (1/2) AB</b> ......(સમીકરણ 1)</li>
                            <li>તે જ રીતે, જો D પણ મધ્યબિંદુ હોય, તો:<br>
                            <b>AD = (1/2) AB</b> ......(સમીકરણ 2)</li>
                            <li>સમીકરણ 1 અને 2 ને સરખાવતાં (બંનેની જમણી બાજુ સમાન છે):<br>
                            <b style='color:#be123c;'>AC = AD</b></li>
                            <li>હવે, C અને D બિંદુઓ A અને B ની વચ્ચે જ છે. અને A થી C નું અંતર એ A થી D ના અંતર જેટલું જ છે. આ ત્યારે જ શક્ય બને જ્યારે <b>બિંદુ C અને બિંદુ D બંને એક જ જગ્યાએ હોય (એકબીજા પર સંપાતી હોય).</b></li>
                            <li>આમ, આપણી ધારણા (કે બે અલગ મધ્યબિંદુઓ છે) ખોટી પડે છે.</li>
                            <li><b>નિષ્કર્ષ:</b> તેથી સાબિત થાય છે કે કોઈપણ રેખાખંડને એક અને <b>માત્ર એક જ (અનન્ય)</b> મધ્યબિંદુ હોય છે.</li>
                        </ul>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 6",
                "marks": 3,
                "question": "આકૃતિમાં જો AC = BD હોય, તો સાબિત કરો કે AB = CD.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f0fdf4; padding:15px; border-radius:8px; border:1px dashed #16a34a; margin-bottom:15px;'>
                        <svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="40" x2="370" y2="40" stroke="#16a34a" stroke-width="3"/>
                            
                            <circle cx="30" cy="40" r="5" fill="#be123c"/>
                            <text x="25" y="30" fill="#be123c" font-weight="bold">A</text>
                            
                            <circle cx="140" cy="40" r="5" fill="#1e3a8a"/>
                            <text x="135" y="30" fill="#1e3a8a" font-weight="bold">B</text>
                            
                            <circle cx="260" cy="40" r="5" fill="#1e3a8a"/>
                            <text x="255" y="30" fill="#1e3a8a" font-weight="bold">C</text>
                            
                            <circle cx="370" cy="40" r="5" fill="#be123c"/>
                            <text x="365" y="30" fill="#be123c" font-weight="bold">D</text>
                            
                            <path d="M 30 55 L 30 65 L 260 65 L 260 55" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="135" y="80" fill="#ea580c" font-size="14" font-weight="bold">AC</text>
                            
                            <path d="M 140 10 L 140 20 L 370 20 L 370 10" fill="none" stroke="#ea580c" stroke-width="2" transform="translate(0, -15)"/>
                            <text x="245" y="0" fill="#ea580c" font-size="14" font-weight="bold">BD</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:15px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:15px; color:#4c0519; line-height:1.8; margin-left:20px;'>
                            આપેલું છે કે: <br>
                            <b>AC = BD</b> ......(સમીકરણ 1)<br><br>
                            હવે આકૃતિ પરથી આપણે જોઈ શકીએ છીએ કે:<br>
                            AC એ બે ભાગનો બનેલો છે: <b>AC = AB + BC</b> ......(સમીકરણ 2)<br>
                            BD પણ બે ભાગનો બનેલો છે: <b>BD = BC + CD</b> ......(સમીકરણ 3)<br><br>
                            સમીકરણ (2) અને (3) ની કિંમતો સમીકરણ (1) માં મૂકતાં:<br>
                            &there4; <b>AB + BC = BC + CD</b><br><br>
                            યુક્લિડના સ્વયંસિદ્ધ સત્ય (3) મુજબ: "સરખામાંથી સરખું બાદ કરીએ તો શેષફળ સરખું રહે".<br>
                            અહીં બંને બાજુથી સામાન્ય ભાગ <b>BC</b> બાદ કરતાં:<br>
                            &there4; AB + BC - BC = BC + CD - BC<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>AB = CD</b> &nbsp;&nbsp;&nbsp; <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે બે મોટા ટુકડા સમાન હોય, અને બંનેમાં કોઈ એક ભાગ <b>Common (સામાન્ય)</b> આવતો હોય, તો તે Common ભાગને હટાવી દેવાથી વધેલા બાકીના ટુકડા હંમેશા સમાન જ થાય. અહીં <b>BC</b> એ common ભાગ છે, જેને કાઢી નાખવાથી AB અને CD સમાન થઈ ગયા!</p>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 7",
                "marks": 2,
                "question": "યુક્લિડના સ્વયંસિદ્ધ સત્યોની યાદીમાં આપેલ સ્વયંસિદ્ધ સત્ય 5 એક સનાતન સત્ય (Universal Truth) કેમ મનાય છે ? (યાદ રાખો કે આ પ્રશ્ન પાંચમી પૂર્વધારણા સાથે સંકળાયેલ નથી).", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>યુક્લિડનું સ્વયંસિદ્ધ સત્ય 5: "આખું તેના ભાગ કરતાં મોટું હોય છે." (The whole is greater than the part).</b></p>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>કારણ:</b></p>
                        <ul style='margin:0; padding-left:20px; font-size:14px; color:#475569; line-height:1.6;'>
                            <li>આ વિધાન માત્ર ભૂમિતિ પૂરતું સીમિત નથી, પરંતુ દુનિયાની કોઈપણ વસ્તુ, જથ્થા કે પરિસ્થિતિ માટે સાચું છે.</li>
                            <li>ઉદાહરણ તરીકે: ભારત (આખું) એ ગુજરાત (ભાગ) કરતાં મોટું છે. એક આખું સફરજન તેના એક ટુકડા કરતાં મોટું જ હોય છે.</li>
                            <li>આથી, જે સત્ય દુનિયાના કોઈપણ ક્ષેત્રમાં, કોઈપણ સ્થળે અને સમયે સાચું ઠરતું હોય, તેને <b>સનાતન સત્ય (Universal Truth)</b> કહેવામાં આવે છે.</li>
                        </ul>
                    </div>
                </div>`
            }
        ]
    },

    
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 6: રેખાઓ અને ખૂણાઓ (સ્વાધ્યાય)
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "રેખાઓ અને ખૂણાઓ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "આકૃતિમાં, રેખાઓ AB અને CD બિંદુ O માં છેદે છે. જો &ang;AOC + &ang;BOE = 70&deg; અને &ang;BOD = 40&deg; હોય, તો &ang;BOE અને વિપરીત &ang;COE શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>પ્રશ્નની આકૃતિ</p>
                        <svg viewBox="0 0 300 150" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="100" x2="280" y2="100" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack)" marker-end="url(#arrowBlack)"/>
                            <line x1="90" y1="140" x2="210" y2="20" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack)" marker-end="url(#arrowBlack)"/>
                            <line x1="150" y1="100" x2="240" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack)"/>
                            
                            <text x="25" y="90" fill="#be123c" font-weight="bold">A</text>
                            <text x="265" y="90" fill="#be123c" font-weight="bold">B</text>
                            <text x="215" y="25" fill="#1d4ed8" font-weight="bold">C</text>
                            <text x="95" y="135" fill="#1d4ed8" font-weight="bold">D</text>
                            <text x="245" y="55" fill="#16a34a" font-weight="bold">E</text>
                            <text x="145" y="120" fill="#0f172a" font-weight="bold">O</text>
                            
                            <path d="M 130 100 A 20 20 0 0 0 137 108" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="110" y="115" fill="#ea580c" font-size="12" font-weight="bold">40&deg;</text>
                            
                            <defs>
                                <marker id="arrowBlack" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            રેખાઓ AB અને CD બિંદુ O માં છેદે છે.<br>
                            તેથી, <b>&ang;AOC = &ang;BOD</b> <span style='color:#64748b;'>(અભિકોણોની જોડ સમાન હોય)</span><br>
                            પરંતુ, &ang;BOD = 40&deg; આપેલ છે.<br>
                            &there4; <b>&ang;AOC = 40&deg;</b><br><br>
                            
                            હવે, રકમ મુજબ: &ang;AOC + &ang;BOE = 70&deg;<br>
                            &there4; 40&deg; + &ang;BOE = 70&deg;<br>
                            &there4; &ang;BOE = 70&deg; - 40&deg;<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;BOE = 30&deg;</b> (આપણો પહેલો જવાબ)<br><br>
                            
                            હવે, રેખા AB પર આવેલા તમામ ખૂણાઓનો સરવાળો 180&deg; થાય (સરળકોણ / રૈખિક જોડ).<br>
                            &there4; &ang;AOC + &ang;COE + &ang;BOE = 180&deg;<br>
                            &there4; (&ang;AOC + &ang;BOE) + &ang;COE = 180&deg;<br>
                            &there4; 70&deg; + &ang;COE = 180&deg;<br>
                            &there4; &ang;COE = 180&deg; - 70&deg; = <b>110&deg;</b><br><br>
                            
                            આપણે <b>વિપરીત &ang;COE</b> શોધવાનો છે. (વિપરીત ખૂણો = 360&deg; - ખૂણો)<br>
                            &there4; વિપરીત &ang;COE = 360&deg; - 110&deg;<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>વિપરીત &ang;COE = 250&deg;</b> (આપણો બીજો જવાબ)
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં સૌથી પહેલા <b>X (ચોકડી)</b> ગોતો! જ્યાં ચોકડી પડે ત્યાં સામસામેના ખૂણા (અભિકોણો) સરખા જ હોય. અહીં AB અને CD ચોકડી બનાવે છે, તેથી નીચે 40 તો ઉપર પણ 40. પછી સીધી લીટી (180&deg;) નો નિયમ વાપરો એટલે દાખલો તરત સોલ્વ!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "આકૃતિમાં, રેખાઓ XY અને MN બિંદુ O માં છેદે છે. જો &ang;POY = 90&deg; અને a : b = 2 : 3 હોય, તો c શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 160" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack2)" marker-end="url(#arrowBlack2)"/>
                            <line x1="80" y1="20" x2="220" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack2)" marker-end="url(#arrowBlack2)"/>
                            <line x1="150" y1="120" x2="150" y2="20" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack2)"/>
                            <polyline points="150,110 160,110 160,120" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <text x="15" y="115" fill="#0f172a" font-weight="bold">X</text>
                            <text x="275" y="115" fill="#0f172a" font-weight="bold">Y</text>
                            <text x="140" y="135" fill="#0f172a" font-weight="bold">O</text>
                            <text x="155" y="20" fill="#0f172a" font-weight="bold">P</text>
                            <text x="70" y="20" fill="#0f172a" font-weight="bold">M</text>
                            <text x="225" y="155" fill="#0f172a" font-weight="bold">N</text>
                            
                            <text x="125" y="80" fill="#1d4ed8" font-weight="bold" font-size="14">a</text>
                            <text x="95" y="110" fill="#16a34a" font-weight="bold" font-size="14">b</text>
                            <text x="135" y="145" fill="#ea580c" font-weight="bold" font-size="14">c</text>
                            
                            <defs>
                                <marker id="arrowBlack2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            અહીં રેખા XY પર કિરણ OP આવેલું છે અને &ang;POY = 90&deg; છે.<br>
                            રૈખિક જોડના નિયમ મુજબ: &ang;POX + &ang;POY = 180&deg;<br>
                            &there4; &ang;POX + 90&deg; = 180&deg; &rArr; <b>&ang;POX = 90&deg;</b><br><br>
                            
                            હવે, આકૃતિ પરથી &ang;POX બે ખૂણાઓનો બનેલો છે: $a$ અને $b$.<br>
                            &there4; <b>a + b = 90&deg;</b><br>
                            આપણને ગુણોત્તર આપેલ છે: $a : b = 2 : 3$.<br>
                            ધારો કે $a = 2x$ અને $b = 3x$.<br>
                            &there4; $2x + 3x = 90&deg;$<br>
                            &there4; $5x = 90&deg;$ &rArr; $x = 18&deg;$<br><br>
                            
                            તેથી ખૂણાઓ મેળવીએ:<br>
                            $a = 2(18&deg;) = 36&deg;$<br>
                            <b style='color:#0f172a;'>$b = 3(18&deg;) = 54&deg;$</b><br><br>
                            
                            હવે આકૃતિમાં રેખા MN ને જુઓ. કિરણ OX તેના પર આવેલું છે.<br>
                            તેથી, $b$ અને $c$ રૈખિક જોડના ખૂણા બનાવે છે.<br>
                            &there4; $b + c = 180&deg;$<br>
                            &there4; $54&deg; + c = 180&deg;$<br>
                            &there4; $c = 180&deg; - 54&deg;$<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>c = 126&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "આકૃતિમાં, જો &ang;PQR = &ang;PRQ હોય, તો સાબિત કરો કે &ang;PQS = &ang;PRT.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 150" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack3)" marker-end="url(#arrowBlack3)"/>
                            <polygon points="100,120 200,120 150,30" fill="none" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#be123c" font-weight="bold">P</text>
                            <text x="95" y="140" fill="#be123c" font-weight="bold">Q</text>
                            <text x="195" y="140" fill="#be123c" font-weight="bold">R</text>
                            <text x="30" y="140" fill="#0f172a" font-weight="bold">S</text>
                            <text x="260" y="140" fill="#0f172a" font-weight="bold">T</text>
                            
                            <path d="M 115 120 A 15 15 0 0 0 110 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <path d="M 185 120 A 15 15 0 0 1 190 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <defs>
                                <marker id="arrowBlack3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            આકૃતિ પરથી સ્પષ્ટ છે કે ST એક સીધી રેખા છે.<br>
                            તેથી, &ang;PQS અને &ang;PQR રૈખિક જોડના ખૂણા બનાવે છે.<br>
                            &there4; <b>&ang;PQS + &ang;PQR = 180&deg;</b> ......(સમીકરણ 1)<br><br>
                            
                            તે જ રીતે, &ang;PRT અને &ang;PRQ પણ રૈખિક જોડના ખૂણા બનાવે છે.<br>
                            &there4; <b>&ang;PRT + &ang;PRQ = 180&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            સમીકરણ (1) અને (2) ની જમણી બાજુ (180&deg;) સમાન હોવાથી, ડાબી બાજુઓને સરખાવતાં:<br>
                            &there4; &ang;PQS + &ang;PQR = &ang;PRT + &ang;PRQ<br><br>
                            
                            પરંતુ, રકમમાં આપેલું છે કે <b>&ang;PQR = &ang;PRQ</b>.<br>
                            તેથી સમીકરણની બંને બાજુથી સમાન ખૂણાઓ ઉડી જશે.<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;PQS = &ang;PRT</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "આકૃતિમાં, જો x + y = w + z હોય, તો સાબિત કરો કે AOB એક રેખા છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="100" x2="270" y2="100" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack4)" marker-end="url(#arrowBlack4)"/>
                            <line x1="150" y1="100" x2="220" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack4)"/>
                            <line x1="150" y1="100" x2="200" y2="170" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack4)"/>
                            
                            <text x="25" y="90" fill="#0f172a" font-weight="bold">B</text>
                            <text x="265" y="90" fill="#0f172a" font-weight="bold">A</text>
                            <text x="135" y="105" fill="#0f172a" font-weight="bold">O</text>
                            <text x="225" y="25" fill="#0f172a" font-weight="bold">C</text>
                            <text x="205" y="185" fill="#0f172a" font-weight="bold">D</text>
                            
                            <text x="180" y="80" fill="#ea580c" font-weight="bold">y</text>
                            <text x="100" y="80" fill="#16a34a" font-weight="bold">x</text>
                            <text x="120" y="130" fill="#1d4ed8" font-weight="bold">w</text>
                            <text x="180" y="130" fill="#be123c" font-weight="bold">z</text>
                            
                            <defs>
                                <marker id="arrowBlack4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપણે જાણીએ છીએ કે બિંદુ O ની આસપાસ આવેલા તમામ ખૂણાઓનો સરવાળો 360&deg; થાય છે.<br>
                            &there4; <b>x + y + w + z = 360&deg;</b><br><br>
                            
                            રકમમાં આપેલું છે કે: <b>x + y = w + z</b><br>
                            તેથી, સમીકરણમાં (w + z) ની જગ્યાએ (x + y) મૂકી શકાય.<br>
                            &there4; (x + y) + (x + y) = 360&deg;<br>
                            &there4; 2(x + y) = 360&deg;<br>
                            &there4; x + y = 360&deg; / 2<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>x + y = 180&deg;</b><br><br>
                            
                            અહીં, x અને y એ આસન્નકોણ (Adjacent angles) છે અને તેમનો સરવાળો 180&deg; થાય છે. જ્યારે બે આસન્નકોણનો સરવાળો 180&deg; થાય, ત્યારે તેમની સામાન્ય ન હોય તેવી બાજુઓ એક સીધી રેખા બનાવે છે (રૈખિક જોડની પૂર્વધારણાનો પ્રતીપ).<br>
                            તેથી સાબિત થાય છે કે <b style='color:#16a34a;'>AOB એક સીધી રેખા છે.</b>
                        </div>
                    </div>
                </div>`
            },
  { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "આકૃતિમાં, POQ એક રેખા છે. કિરણ OR એ રેખા PQ ને લંબ છે. કિરણો OP અને OR ની વચ્ચે અન્ય એક કિરણ OS આવેલું છે. સાબિત કરો કે, &ang;ROS = 1/2 (&ang;QOS - &ang;POS).", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 180" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="150" x2="280" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack5)" marker-end="url(#arrowBlack5)"/>
                            <line x1="150" y1="150" x2="150" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack5)"/>
                            <line x1="150" y1="150" x2="70" y2="60" stroke="#be123c" stroke-width="2" marker-end="url(#arrowBlack5)"/>
                            
                            <polyline points="150,140 160,140 160,150" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="25" y="140" fill="#0f172a" font-weight="bold">P</text>
                            <text x="265" y="140" fill="#0f172a" font-weight="bold">Q</text>
                            <text x="145" y="165" fill="#0f172a" font-weight="bold">O</text>
                            <text x="155" y="25" fill="#0f172a" font-weight="bold">R</text>
                            <text x="60" y="55" fill="#be123c" font-weight="bold">S</text>
                            
                            <defs>
                                <marker id="arrowBlack5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            OR એ રેખા PQ ને લંબ છે, તેથી:<br>
                            &ang;ROQ = 90&deg; અને &ang;ROP = 90&deg;<br><br>
                            
                            આકૃતિ પરથી <b>&ang;ROS</b> ની કિંમત બે અલગ-અલગ રીતે લખી શકાય:<br>
                            <b>રીત 1 (ડાબી બાજુથી):</b><br>
                            &ang;ROS = &ang;ROP - &ang;POS<br>
                            &there4; <b>&ang;ROS = 90&deg; - &ang;POS</b> ......(સમીકરણ 1)<br><br>
                            
                            <b>રીત 2 (જમણી બાજુથી):</b><br>
                            &ang;ROS = &ang;QOS - &ang;ROQ<br>
                            &there4; <b>&ang;ROS = &ang;QOS - 90&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            સમીકરણ (1) અને (2) નો સરવાળો કરતાં:<br>
                            &ang;ROS + &ang;ROS = (90&deg; - &ang;POS) + (&ang;QOS - 90&deg;)<br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં +90&deg; અને -90&deg; ઉડી જશે]</span><br>
                            &there4; 2(&ang;ROS) = &ang;QOS - &ang;POS<br><br>
                            
                            બે (2) ને જમણી બાજુ ભાગાકારમાં લઈ જતાં:<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;ROS = &frac12; (&ang;QOS - &ang;POS)</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ <b>V.V.I.M.P.</b> સાબિતી યાદ રાખવાની સૌથી સહેલી રીત: જે ખૂણો ડાબી બાજુ માંગ્યો છે (ROS), તેને એકવાર <b>મોટા ખૂણામાંથી બાદ કરીને</b> લખો અને બીજી વાર <b>નાના ખૂણામાંથી બાદ કરીને</b> લખો. પછી બંનેનો સરવાળો કરશો એટલે સીધો 90&deg; ઉડી જશે અને જવાબ આવી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 6",
                "marks": 4,
                "question": "આપેલ છે કે &ang;XYZ = 64&deg; અને XY ને બિંદુ P સુધી લંબાવેલ છે. આપેલ માહિતી પરથી આકૃતિ દોરો. જો કિરણ YQ એ &ang;ZYP નો દ્વિભાજક હોય, તો &ang;XYQ અને વિપરીત &ang;QYP શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>માહિતી પરથી દોરેલી આકૃતિ</p>
                        <svg viewBox="0 0 300 160" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="40" y1="130" x2="260" y2="130" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack6)" marker-end="url(#arrowBlack6)"/>
                            <line x1="150" y1="130" x2="80" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack6)"/>
                            <line x1="150" y1="130" x2="210" y2="30" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arrowBlack6)"/>
                            
                            <text x="35" y="120" fill="#0f172a" font-weight="bold">P</text>
                            <text x="145" y="145" fill="#0f172a" font-weight="bold">Y</text>
                            <text x="255" y="120" fill="#0f172a" font-weight="bold">X</text>
                            <text x="70" y="25" fill="#0f172a" font-weight="bold">Z</text>
                            <text x="220" y="25" fill="#1d4ed8" font-weight="bold">Q</text>
                            
                            <path d="M 180 130 A 30 30 0 0 0 130 100" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="120" y="115" fill="#ea580c" font-size="12" font-weight="bold">64&deg;</text>
                            
                            <path d="M 110 130 A 40 40 0 0 1 120 80" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <path d="M 120 80 A 40 40 0 0 1 165 105" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <defs>
                                <marker id="arrowBlack6" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>નોંધ: કિરણ YQ એ &ang;ZYP ના સમાન બે ભાગ કરે છે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            XY ને P સુધી લંબાવેલ હોવાથી, PYX એક સીધી રેખા બને છે.<br>
                            તેથી, રૈખિક જોડના નિયમ મુજબ:<br>
                            &ang;XYZ + &ang;ZYP = 180&deg;<br>
                            &there4; 64&deg; + &ang;ZYP = 180&deg;<br>
                            &there4; &ang;ZYP = 180&deg; - 64&deg; = <b>116&deg;</b><br><br>
                            
                            હવે, રકમમાં આપેલ છે કે કિરણ YQ એ &ang;ZYP નો દ્વિભાજક (Bisector) છે.<br>
                            તેથી તે &ang;ZYP ના બે સમાન ભાગ કરશે.<br>
                            &there4; &ang;ZYQ = &ang;QYP = 116&deg; / 2 = <b>58&deg;</b><br><br>
                            
                            <b>(1) &ang;XYQ શોધવા માટે:</b><br>
                            આકૃતિ મુજબ, &ang;XYQ એ બે ખૂણાઓનો સરવાળો છે.<br>
                            &ang;XYQ = &ang;XYZ + &ang;ZYQ<br>
                            &there4; &ang;XYQ = 64&deg; + 58&deg;<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;XYQ = 122&deg;</b><br><br>
                            
                            <b>(2) વિપરીત &ang;QYP શોધવા માટે:</b><br>
                            આપણે જાણીએ છીએ કે &ang;QYP = 58&deg; છે.<br>
                            વિપરીત ખૂણો શોધવા માટે તેને 360&deg; માંથી બાદ કરવો પડે.<br>
                            વિપરીત &ang;QYP = 360&deg; - &ang;QYP<br>
                            &there4; વિપરીત &ang;QYP = 360&deg; - 58&deg;<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>વિપરીત &ang;QYP = 302&deg;</b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "આકૃતિમાં, x અને y નાં મૂલ્યો શોધો અને પછી બતાવો કે AB || CD.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>પ્રશ્નની આકૃતિ</p>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="40" y1="80" x2="260" y2="80" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="40" y1="180" x2="260" y2="180" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <line x1="120" y1="20" x2="180" y2="230" stroke="#be123c" stroke-width="2" marker-start="url(#arrowRed)" marker-end="url(#arrowRed)"/>
                            
                            <text x="25" y="75" fill="#0f172a" font-weight="bold">A</text>
                            <text x="265" y="75" fill="#0f172a" font-weight="bold">B</text>
                            <text x="25" y="175" fill="#0f172a" font-weight="bold">C</text>
                            <text x="265" y="175" fill="#0f172a" font-weight="bold">D</text>
                            
                            <path d="M 134 70 A 20 20 0 0 0 125 50" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="100" y="55" fill="#1d4ed8" font-size="14" font-weight="bold">50&deg;</text>
                            
                            <path d="M 145 80 A 20 20 0 0 1 138 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="150" y="105" fill="#16a34a" font-size="16" font-weight="bold">x</text>
                            
                            <path d="M 154 180 A 20 20 0 0 0 162 160" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="135" y="165" fill="#ea580c" font-size="16" font-weight="bold">y</text>
                            
                            <path d="M 166 180 A 20 20 0 0 1 173 200" fill="none" stroke="#9333ea" stroke-width="2"/>
                            <text x="175" y="210" fill="#9333ea" font-size="14" font-weight="bold">130&deg;</text>
                            
                            <defs>
                                <marker id="arrow62" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                                <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#be123c" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>1) x શોધવા માટે:</b><br>
                            આકૃતિમાં 50&deg; અને x એ એક જ સીધી રેખા (છેદિકા) પર આવેલા રૈખિક જોડના ખૂણા છે.<br>
                            &there4; x + 50&deg; = 180&deg;<br>
                            &there4; x = 180&deg; - 50&deg;<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 130&deg;</b><br><br>
                            
                            <b>2) y શોધવા માટે:</b><br>
                            આકૃતિમાં y અને 130&deg; એ સામસામેના ખૂણા (અભિકોણો) છે. અભિકોણો હંમેશા સમાન હોય છે.<br>
                            &there4; <b style='color:#ea580c; font-size:16px;'>y = 130&deg;</b><br><br>
                            
                            <b>3) AB || CD સાબિત કરવા માટે:</b><br>
                            અહીં, x = 130&deg; અને y = 130&deg; છે. એટલે કે, <b>x = y</b>.<br>
                            પરંતુ આકૃતિ મુજબ, x અને y એ રેખાઓ AB અને CD ની છેદિકા દ્વારા બનતા <b>અંતઃયુગ્મકોણો (Alternate interior angles)</b> છે.<br>
                            જ્યારે અંતઃયુગ્મકોણો સમાન હોય, ત્યારે તે બે રેખાઓ હંમેશા સમાંતર હોય છે (યુગ્મકોણ પ્રતીપ પ્રમેય).<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>AB || CD</b> (સાબિત થાય છે).
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આકૃતિમાં <b>Z</b> આકાર શોધો! જ્યાં પણ Z આકાર બને, ત્યાં Z ના અંદરના બંને ખૂણા (યુગ્મકોણ) સરખા જ હોય. અહીં x અને y મળીને ઊંધો <b>Z</b> બનાવે છે. બંને 130&deg; આવ્યા એટલે સાબિત થઈ ગયું કે લાઈનો સમાંતર છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "આકૃતિમાં, જો AB || CD, CD || EF અને y : z = 3 : 7 છે, તો x નું મૂલ્ય શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 280" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="40" y1="60" x2="260" y2="60" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="40" y1="140" x2="260" y2="140" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="40" y1="220" x2="260" y2="220" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <line x1="120" y1="20" x2="200" y2="260" stroke="#be123c" stroke-width="2" marker-start="url(#arrowRed)" marker-end="url(#arrowRed)"/>
                            
                            <text x="25" y="55" fill="#0f172a" font-weight="bold">A</text>
                            <text x="265" y="55" fill="#0f172a" font-weight="bold">B</text>
                            <text x="25" y="135" fill="#0f172a" font-weight="bold">C</text>
                            <text x="265" y="135" fill="#0f172a" font-weight="bold">D</text>
                            <text x="25" y="215" fill="#0f172a" font-weight="bold">E</text>
                            <text x="265" y="215" fill="#0f172a" font-weight="bold">F</text>
                            
                            <path d="M 140 60 A 20 20 0 0 1 135 80" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="145" y="85" fill="#1d4ed8" font-size="16" font-weight="bold">x</text>
                            
                            <path d="M 160 140 A 20 20 0 0 0 155 120" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="135" y="125" fill="#16a34a" font-size="16" font-weight="bold">y</text>
                            
                            <path d="M 194 220 A 20 20 0 0 1 187 240" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="195" y="250" fill="#ea580c" font-size="16" font-weight="bold">z</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલ છે કે: AB || CD અને CD || EF.<br>
                            જો બે રેખાઓ કોઈ ત્રીજી રેખાને સમાંતર હોય, તો તેઓ એકબીજાને પણ સમાંતર હોય છે.<br>
                            &there4; <b>AB || EF</b><br><br>
                            
                            હવે AB || EF હોવાથી, x અને z એ <b>અંતઃયુગ્મકોણો (Alternate interior angles)</b> બને છે.<br>
                            &there4; <b>x = z</b> ......(સમીકરણ 1)<br><br>
                            
                            ફરીથી, AB || CD હોવાથી, x અને y એ છેદિકાની <b>એક જ તરફના અંતઃકોણો</b> છે. તેમનો સરવાળો 180&deg; થાય.<br>
                            &there4; x + y = 180&deg;<br>
                            સમીકરણ 1 પરથી x ની જગ્યાએ z મૂકતાં:<br>
                            &there4; <b>z + y = 180&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            આપણને ગુણોત્તર y : z = 3 : 7 આપેલ છે.<br>
                            ધારો કે y = 3k અને z = 7k.<br>
                            સમીકરણ 2 માં કિંમત મૂકતાં:<br>
                            &there4; 7k + 3k = 180&deg;<br>
                            &there4; 10k = 180&deg; &rArr; <b>k = 18&deg;</b><br><br>
                            
                            હવે, x = z હોવાથી, આપણે સીધું z શોધીએ:<br>
                            z = 7k = 7 &times; 18&deg; = 126&deg;<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>x = 126&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "આકૃતિમાં, જો AB || CD, EF ⊥ CD અને &ang;GED = 126&deg; હોય, તો &ang;AGE, &ang;GEF અને &ang;FGE શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="30" y1="150" x2="320" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <text x="20" y="45" fill="#0f172a" font-weight="bold">A</text>
                            <text x="325" y="45" fill="#0f172a" font-weight="bold">B</text>
                            <text x="20" y="145" fill="#0f172a" font-weight="bold">C</text>
                            <text x="325" y="145" fill="#0f172a" font-weight="bold">D</text>
                            
                            <line x1="120" y1="50" x2="220" y2="150" stroke="#be123c" stroke-width="2"/>
                            <line x1="220" y1="50" x2="220" y2="150" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <text x="110" y="40" fill="#0f172a" font-weight="bold">G</text>
                            <text x="215" y="40" fill="#0f172a" font-weight="bold">F</text>
                            <text x="215" y="170" fill="#0f172a" font-weight="bold">E</text>
                            
                            <polyline points="220,140 210,140 210,150" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
                            
                            <path d="M 220 150 A 40 40 0 0 0 180 110" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="180" y="140" fill="#ea580c" font-size="12" font-weight="bold">126&deg;</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલ છે: &ang;GED = 126&deg; અને EF &perp; CD (એટલે કે &ang;FED = 90&deg;).<br><br>
                            
                            <b>1) &ang;AGE શોધવા માટે:</b><br>
                            AB || CD છે અને છેદિકા GE છે. આથી &ang;AGE અને &ang;GED <b>અંતઃયુગ્મકોણો (Z આકાર)</b> બનાવે છે.<br>
                            &there4; &ang;AGE = &ang;GED<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;AGE = 126&deg;</b><br><br>
                            
                            <b>2) &ang;GEF શોધવા માટે:</b><br>
                            આકૃતિમાં, &ang;GED એ બે ખૂણાનો બનેલો છે: &ang;GEF અને &ang;FED.<br>
                            &there4; &ang;GEF + &ang;FED = &ang;GED<br>
                            &there4; &ang;GEF + 90&deg; = 126&deg;<br>
                            &there4; &ang;GEF = 126&deg; - 90&deg;<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;GEF = 36&deg;</b><br><br>
                            
                            <b>3) &ang;FGE શોધવા માટે:</b><br>
                            રેખા AB પર G બિંદુ આવેલું છે. તેથી &ang;AGE અને &ang;FGE રૈખિક જોડ બનાવે છે.<br>
                            &there4; &ang;AGE + &ang;FGE = 180&deg;<br>
                            &there4; 126&deg; + &ang;FGE = 180&deg;<br>
                            &there4; &ang;FGE = 180&deg; - 126&deg;<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;FGE = 54&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 4",
                "marks": 4,
                "question": "આકૃતિમાં, જો PQ || ST, &ang;PQR = 110&deg; અને &ang;RST = 130&deg; હોય, તો &ang;QRS શોધો. (સૂચન : બિંદુ R માંથી પસાર થતી ST ને સમાંતર રેખા દોરો.)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="50" x2="120" y2="50" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)"/>
                            <line x1="120" y1="50" x2="180" y2="150" stroke="#0f172a" stroke-width="2"/>
                            <line x1="180" y1="150" x2="240" y2="70" stroke="#0f172a" stroke-width="2"/>
                            <line x1="240" y1="70" x2="320" y2="70" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow62)"/>
                            
                            <line x1="130" y1="150" x2="280" y2="150" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            <text x="110" y="155" fill="#be123c" font-weight="bold">U</text>
                            <text x="290" y="155" fill="#be123c" font-weight="bold">V</text>
                            
                            <text x="30" y="40" fill="#0f172a" font-weight="bold">P</text>
                            <text x="120" y="40" fill="#0f172a" font-weight="bold">Q</text>
                            <text x="180" y="170" fill="#0f172a" font-weight="bold">R</text>
                            <text x="235" y="60" fill="#0f172a" font-weight="bold">S</text>
                            <text x="320" y="60" fill="#0f172a" font-weight="bold">T</text>
                            
                            <path d="M 100 50 A 20 20 0 0 0 110 68" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="80" y="80" fill="#1d4ed8" font-size="12" font-weight="bold">110&deg;</text>
                            
                            <path d="M 260 70 A 20 20 0 0 1 250 83" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="260" y="95" fill="#ea580c" font-size="12" font-weight="bold">130&deg;</text>
                            
                            <path d="M 172 135 A 15 15 0 0 0 188 139" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="175" y="125" fill="#16a34a" font-size="14" font-weight="bold">?</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            સૂચન મુજબ, R માંથી પસાર થતી અને ST ને સમાંતર હોય તેવી એક રેખા UV દોરો (આકૃતિમાં લાલ તૂટક રેખા).<br>
                            આથી, <b>ST || UV</b> થશે. વળી રકમ મુજબ PQ || ST હોવાથી, <b>PQ || UV</b> પણ થશે.<br><br>
                            
                            હવે, ST || UV અને SR તેની છેદિકા છે.<br>
                            તેથી, &ang;RST અને &ang;SRV એ છેદિકાની એક જ તરફના અંતઃકોણો (C આકાર) છે, જેનો સરવાળો 180&deg; થાય.<br>
                            &there4; &ang;RST + &ang;SRV = 180&deg;<br>
                            &there4; 130&deg; + &ang;SRV = 180&deg;<br>
                            &there4; <b>&ang;SRV = 50&deg;</b><br><br>
                            
                            હવે, PQ || UV અને QR તેની છેદિકા છે.<br>
                            તેથી, &ang;PQR અને &ang;QRV એ અંતઃયુગ્મકોણો (Z આકાર) બને છે.<br>
                            &there4; &ang;QRV = &ang;PQR<br>
                            &there4; <b>&ang;QRV = 110&deg;</b><br><br>
                            
                            આકૃતિમાં, &ang;QRV એ બે ખૂણાનો સરવાળો છે: &ang;QRS અને &ang;SRV.<br>
                            &there4; &ang;QRS + &ang;SRV = &ang;QRV<br>
                            &there4; &ang;QRS + 50&deg; = 110&deg;<br>
                            &there4; &ang;QRS = 110&deg; - 50&deg;<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>&ang;QRS = 60&deg;</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ <b>"તૂટેલા પુલ (Broken Bridge)"</b> વાળો દાખલો છે! જ્યારે પણ લાઈન વચ્ચેથી તૂટેલી દેખાય, ત્યાં નીચે એક સીધી <b>Support Line (આધાર રેખા)</b> દોરી દેવી. પછી બસ ડાબી બાજુથી <b>Z આકાર</b> અને જમણી બાજુથી <b>C આકાર</b> નો નિયમ વાપરો એટલે જવાબ દોડતો આવશે!</p>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 5",
                "marks": 3,
                "question": "આકૃતિમાં, જો AB || CD, &ang;APQ = 50&deg; અને &ang;PRD = 127&deg; હોય, તો x અને y શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:380px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="30" y1="160" x2="320" y2="160" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <polygon points="120,50 90,160 220,160" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <text x="20" y="40" fill="#0f172a" font-weight="bold">A</text>
                            <text x="320" y="40" fill="#0f172a" font-weight="bold">B</text>
                            <text x="20" y="180" fill="#0f172a" font-weight="bold">C</text>
                            <text x="320" y="180" fill="#0f172a" font-weight="bold">D</text>
                            <text x="120" y="35" fill="#be123c" font-weight="bold">P</text>
                            <text x="75" y="175" fill="#be123c" font-weight="bold">Q</text>
                            <text x="230" y="175" fill="#be123c" font-weight="bold">R</text>
                            
                            <path d="M 80 50 A 20 20 0 0 0 110 85" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="65" y="70" fill="#16a34a" font-size="12" font-weight="bold">50&deg;</text>
                            
                            <path d="M 105 160 A 20 20 0 0 1 113 130" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="115" y="150" fill="#ea580c" font-size="16" font-weight="bold">x</text>
                            
                            <path d="M 125 70 A 20 20 0 0 1 143 75" fill="none" stroke="#9333ea" stroke-width="2"/>
                            <text x="135" y="95" fill="#9333ea" font-size="16" font-weight="bold">y</text>
                            
                            <path d="M 245 160 A 20 20 0 0 0 205 140" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="235" y="145" fill="#1d4ed8" font-size="12" font-weight="bold">127&deg;</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલું છે કે AB || CD.<br><br>
                            
                            <b>1) x શોધવા માટે:</b><br>
                            AB || CD અને PQ તેની છેદિકા છે.<br>
                            આથી, &ang;APQ અને &ang;PQR એ <b>અંતઃયુગ્મકોણો (Z આકાર)</b> બને છે.<br>
                            &there4; &ang;PQR = &ang;APQ<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 50&deg;</b><br><br>
                            
                            <b>2) y શોધવા માટે:</b><br>
                            ફરીથી, AB || CD અને આ વખતે PR તેની છેદિકા છે.<br>
                            આથી, આખો ખૂણો &ang;APR અને &ang;PRD પણ <b>અંતઃયુગ્મકોણો</b> બને છે.<br>
                            &there4; &ang;APR = &ang;PRD<br>
                            હવે, &ang;APR એ બે ખૂણાઓ 50&deg; અને y નો બનેલો છે.<br>
                            &there4; 50&deg; + y = 127&deg;<br>
                            &there4; y = 127&deg; - 50&deg;<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>y = 77&deg;</b>
                        </div>
                    </div>
                </div>`
               }
            
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 7: ત્રિકોણ (સ્વાધ્યાય)
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "ત્રિકોણ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "ચતુષ્કોણ ACBD માં, AC = AD છે અને AB એ &ang;A નો દ્વિભાજક છે. સાબિત કરો કે &Delta;ABC &cong; &Delta;ABD. BC અને BD વિશે તમે શું કહી શકશો?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,100 150,30 250,100 150,170" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="50" y1="100" x2="250" y2="100" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="95" y1="60" x2="105" y2="70" stroke="#16a34a" stroke-width="2"/>
                            <line x1="95" y1="140" x2="105" y2="130" stroke="#16a34a" stroke-width="2"/>
                            
                            <path d="M 80 100 A 30 30 0 0 0 75 83" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 80 100 A 30 30 0 0 1 75 117" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="30" y="105" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="105" fill="#0f172a" font-weight="bold">B</text>
                            <text x="145" y="20" fill="#0f172a" font-weight="bold">C</text>
                            <text x="145" y="190" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            &Delta;ABC અને &Delta;ABD માં:<br>
                            1) <b>AC = AD</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            2) <b>&ang;CAB = &ang;DAB</b> <span style='color:#64748b;'>(કારણ કે AB એ &ang;A નો દ્વિભાજક છે)</span><br>
                            3) <b>AB = AB</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br><br>
                            
                            અહીં બે બાજુઓ અને તેમની વચ્ચેનો ખૂણો સમાન છે. તેથી, <b>બાખૂબા (SAS - Side-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;ABC &cong; &Delta;ABD</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span><br><br>
                            
                            જ્યારે બે ત્રિકોણ એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:15px;'>&there4; BC = BD</b> 
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>એકરૂપતા સાબિત કરવા માટે હંમેશા <b>3 વસ્તુઓ</b> શોધવાની હોય છે! આ દાખલામાં 2 વસ્તુ તો રકમમાં જ આપી દીધી હતી (બાજુ અને ખૂણો), અને ત્રીજી વસ્તુ ત્રિકોણની વચ્ચેની સામાન્ય બાજુ (દીવાલ) AB હતી. બસ આ 3 વસ્તુ મળી એટલે <b>SAS (બાખૂબા)</b> નિયમથી ત્રિકોણ એકરૂપ!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "ABCD એવો ચતુષ્કોણ છે જેમાં AD = BC અને &ang;DAB = &ang;CBA છે. સાબિત કરો કે:<br>(i) &Delta;ABD &cong; &Delta;BAC<br>(ii) BD = AC<br>(iii) &ang;ABD = &ang;BAC", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 250,150 200,50 100,50" fill="none" stroke="#0f172a" stroke-width="2"/>
                            <line x1="50" y1="150" x2="200" y2="50" stroke="#be123c" stroke-width="2"/>
                            <line x1="250" y1="150" x2="100" y2="50" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <line x1="65" y1="100" x2="75" y2="95" stroke="#16a34a" stroke-width="2"/>
                            <line x1="235" y1="100" x2="225" y2="95" stroke="#16a34a" stroke-width="2"/>
                            
                            <path d="M 80 150 A 30 30 0 0 0 65 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 220 150 A 30 30 0 0 1 235 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="30" y="165" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="165" fill="#0f172a" font-weight="bold">B</text>
                            <text x="210" y="40" fill="#0f172a" font-weight="bold">C</text>
                            <text x="80" y="40" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;ABD &cong; &Delta;BAC સાબિત કરવા માટે:</b><br>
                            &Delta;ABD અને &Delta;BAC માં:<br>
                            1) <b>AD = BC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            2) <b>&ang;DAB = &ang;CBA</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            3) <b>AB = BA</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ એટલે કે પાયો)</span><br><br>
                            
                            તેથી, <b>બાખૂબા (SAS)</b> એકરૂપતાની શરત મુજબ:<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; &Delta;ABD &cong; &Delta;BAC</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) BD = AC માટે:</b><br>
                            ઉપર સાબિત કર્યા મુજબ બંને ત્રિકોણ એકરૂપ છે. તેથી તેમના એકરૂપ અંગો (CPCT) સમાન થાય.<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; BD = AC (CPCT)</b><br><br>
                            
                            <b>(iii) &ang;ABD = &ang;BAC માટે:</b><br>
                            ફરીથી, સમાન કારણથી એકરૂપ ત્રિકોણના અનુરૂપ ખૂણાઓ સમાન હોય છે.<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; &ang;ABD = &ang;BAC (CPCT)</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "રેખાખંડ AB પર સમાન લંબ રેખાખંડો AD અને BC આવેલા છે. સાબિત કરો કે CD એ AB ને દુભાગે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="100" x2="250" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="50" y1="100" x2="50" y2="170" stroke="#be123c" stroke-width="2"/>
                            <line x1="250" y1="100" x2="250" y2="30" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="50" y1="170" x2="250" y2="30" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="40" y1="135" x2="60" y2="135" stroke="#0f172a" stroke-width="2"/>
                            <line x1="240" y1="65" x2="260" y2="65" stroke="#0f172a" stroke-width="2"/>
                            
                            <polyline points="60,100 60,110 50,110" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <polyline points="240,100 240,90 250,90" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="30" y="95" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="115" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="30" fill="#1d4ed8" font-weight="bold">C</text>
                            <text x="30" y="175" fill="#be123c" font-weight="bold">D</text>
                            <text x="145" y="125" fill="#16a34a" font-weight="bold">O</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે રેખાખંડ AB અને CD એકબીજાને <b>O</b> બિંદુમાં છેદે છે.<br>
                            આપણે સાબિત કરવાનું છે કે OA = OB (એટલે કે CD એ AB ના બે સરખા ભાગ કરે છે).<br><br>
                            
                            &Delta;OBC અને &Delta;OAD માં:<br>
                            1) <b>&ang;BOC = &ang;AOD</b> <span style='color:#64748b;'>(સામસામેના અભિકોણો)</span><br>
                            2) <b>&ang;OBC = &ang;OAD = 90&deg;</b> <span style='color:#64748b;'>(પક્ષ: બંને લંબ છે)</span><br>
                            3) <b>BC = AD</b> <span style='color:#64748b;'>(પક્ષ: સમાન લંબ છે)</span><br><br>
                            
                            અહીં બે ખૂણા અને એક બાજુ સમાન છે. તેથી <b>ખૂખૂબા (AAS - Angle-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;OBC &cong; &Delta;OAD<br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોવાથી:<br>
                            &there4; <b>OB = OA</b><br><br>
                            
                            આનો અર્થ એ થયો કે બિંદુ O એ AB નું મધ્યબિંદુ છે.<br>
                            <b style='color:#be123c; font-size:15px;'>&there4; રેખાખંડ CD એ AB ને દુભાગે છે.</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "l અને m બે સમાંતર રેખાઓ છે. બીજી બે સમાંતર રેખાઓની જોડ p અને q તેમને છેદે છે. સાબિત કરો કે &Delta;ABC &cong; &Delta;CDA.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="60" x2="280" y2="60" stroke="#0f172a" stroke-width="2"/>
                            <line x1="20" y1="140" x2="280" y2="140" stroke="#0f172a" stroke-width="2"/>
                            <text x="10" y="55" fill="#0f172a" font-weight="bold">l</text>
                            <text x="10" y="135" fill="#0f172a" font-weight="bold">m</text>
                            
                            <line x1="100" y1="20" x2="40" y2="180" stroke="#0f172a" stroke-width="2"/>
                            <line x1="260" y1="20" x2="200" y2="180" stroke="#0f172a" stroke-width="2"/>
                            <text x="105" y="15" fill="#0f172a" font-weight="bold">p</text>
                            <text x="265" y="15" fill="#0f172a" font-weight="bold">q</text>
                            
                            <text x="95" y="50" fill="#be123c" font-weight="bold">A</text>
                            <text x="245" y="50" fill="#be123c" font-weight="bold">D</text>
                            <text x="60" y="160" fill="#1d4ed8" font-weight="bold">B</text>
                            <text x="210" y="160" fill="#1d4ed8" font-weight="bold">C</text>
                            
                            <line x1="85" y1="60" x2="215" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            અહીં, રેખાઓ l || m અને p || q આપેલ છે.<br>
                            આથી બનતો ચતુષ્કોણ ABCD સમાંતરબાજુ ચતુષ્કોણ બને છે.<br>
                            વિકર્ણ AC એ &Delta;ABC અને &Delta;CDA ને વિભાજિત કરે છે.<br><br>
                            
                            &Delta;ABC અને &Delta;CDA માં:<br>
                            1) <b>&ang;BCA = &ang;DAC</b> <span style='color:#64748b;'>(કારણ: l || m છે અને AC છેદિકા છે &rarr; અંતઃયુગ્મકોણો)</span><br>
                            2) <b>AC = CA</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br>
                            3) <b>&ang;BAC = &ang;DCA</b> <span style='color:#64748b;'>(કારણ: p || q છે અને AC છેદિકા છે &rarr; અંતઃયુગ્મકોણો)</span><br><br>
                            
                            અહીં બે ખૂણાઓ અને તેમની વચ્ચેની અંતર્ગત બાજુ સમાન છે. તેથી <b>ખૂબાખૂ (ASA - Angle-Side-Angle)</b> એકરૂપતાની શરત મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;ABC &cong; &Delta;CDA</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
              { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "કિરણ l એ &ang;A નો દ્વિભાજક છે અને B એ રેખા l પરનું કોઈ પણ બિંદુ છે. BP અને BQ એ બિંદુ B માંથી &ang;A ની બાજુઓ પર દોરેલા લંબ છે. સાબિત કરો કે:<br>(i) &Delta;APB &cong; &Delta;AQB<br>(ii) BP = BQ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="100" x2="220" y2="30" stroke="#0f172a" stroke-width="2"/>
                            <line x1="30" y1="100" x2="220" y2="170" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="30" y1="100" x2="280" y2="100" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="285" y="105" fill="#1d4ed8" font-weight="bold">l</text>
                            
                            <circle cx="180" cy="100" r="5" fill="#be123c"/>
                            <text x="185" y="95" fill="#be123c" font-weight="bold">B</text>
                            
                            <line x1="180" y1="100" x2="152" y2="55" stroke="#16a34a" stroke-width="2"/>
                            <line x1="180" y1="100" x2="152" y2="145" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="140" y="45" fill="#16a34a" font-weight="bold">Q</text>
                            <text x="140" y="165" fill="#16a34a" font-weight="bold">P</text>
                            <text x="15" y="105" fill="#0f172a" font-weight="bold">A</text>
                            
                            <polyline points="159,65 167,59 158,51" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <polyline points="159,135 167,141 158,149" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <path d="M 60 100 A 30 30 0 0 0 57 89" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 60 100 A 30 30 0 0 1 57 111" fill="none" stroke="#ea580c" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;APB &cong; &Delta;AQB સાબિત કરવા માટે:</b><br>
                            &Delta;APB અને &Delta;AQB માં:<br>
                            1) <b>&ang;APB = &ang;AQB = 90&deg;</b> <span style='color:#64748b;'>(પક્ષ: BP અને BQ લંબ છે)</span><br>
                            2) <b>&ang;PAB = &ang;QAB</b> <span style='color:#64748b;'>(પક્ષ: રેખા l એ &ang;A નો દ્વિભાજક છે)</span><br>
                            3) <b>AB = AB</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ એટલે કે કર્ણ)</span><br><br>
                            
                            અહીં બે ખૂણા અને એક બાજુ (ખૂખૂબા) સમાન છે. તેથી <b>ખૂખૂબા (AAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;APB &cong; &Delta;AQB</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) BP = BQ સાબિત કરવા માટે:</b><br>
                            ઉપર સાબિત કર્યા મુજબ બંને ત્રિકોણ એકરૂપ છે, તેથી તેના અનુરૂપ અંગો સમાન થાય.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; BP = BQ (CPCT)</b> <span style='color:#16a34a;'>(અર્થાત્ બિંદુ B એ ખૂણાની બંને બાજુઓથી સમાન અંતરે છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાની ફિગર જાણે <b>બાણ (Arrow)</b> જેવી દેખાય છે! જ્યારે પણ દ્વિભાજક (વચ્ચેની લીટી) અને લંબ (90&deg;) ભેગા થાય, ત્યારે <b>ખૂખૂબા (AAS)</b> નિયમ જ આવે. કારણ કે એક 90&deg; નો ખૂણો મળ્યો, બીજો ખૂણો દ્વિભાજકથી મળ્યો અને વચ્ચેની લીટી Common થઈ ગઈ!</p>
                </div>`
            }
        ]
    }
    
};

