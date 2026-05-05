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
            }
            
        ]
    }
};

