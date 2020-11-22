let root = document.getElementById('root');


//Header Section

let header = document.createElement("div");
header.className = 'header'
let img = document.createElement('img');
img.className = 'image'
img.setAttribute('src', 'user.jpeg')
let empty_line = document.createElement('div');
empty_line.className = 'empty-line'
let name = document.createElement('div')
name.innerHTML = 'BRAIN DUDELY';
name.className = 'name';

header.append(img, empty_line, name);

root.appendChild(header);

// Personal Detail section
let personalDetail = document.createElement('div');
personalDetail.className = 'personal-detail';
personalDetail.innerHTML = 'N, Damen Avenue, Chicago 99999 | 999-999-999 | hello@kickresume.com | www.kickresume.com';
let hr = document.createElement('hr');
root.append(personalDetail, hr);



//content section
let content = document.createElement('div');
content.className = 'content';
root.appendChild(content);
        //left-content section
        let leftContent = document.createElement('div');
        leftContent.className = 'left-content right-border'
        content.appendChild(leftContent);
            //subcontents
            let subcontent1 = document.createElement('div');
            subcontent1.className = 'subcontent';
            leftContent.appendChild(subcontent1);
                //content inside subcontent
                let i1 = document.createElement('i');
                i1.className = 'fa fa-user fa-lg icon';
                let contentHeading1 = document.createElement('span');
                contentHeading1.className = 'content-heading';
                contentHeading1.innerHTML = 'Profile';
                let p1 = document.createElement('p');
                p1.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat error, assumenda dolores at debitis perferendis quis officiis ut sint, ea placeat laborum illum accusantium voluptatem necessitatibus dicta a beatae deleniti.';
            subcontent1.append(i1, contentHeading1, p1);
            //subcontents
            let subcontent2 = document.createElement('div');
            subcontent2.className = 'subcontent';
            leftContent.appendChild(subcontent2);
                //content inside subcontent
                let i2 = document.createElement('i');
                i2.className = 'fa fa-flask fa-lg icon';
                let contentHeading2 = document.createElement('span');
                contentHeading2.className = 'content-heading';
                contentHeading2.innerHTML = 'Skills';
                let p2 = document.createElement('p');
                    let span1 = document.createElement('span');
                    span1.setAttribute('style', 'font-weight: bold; display: block; margin: 5px auto; width: fit-content;');
                    span1.innerHTML = 'Technical Skills';
                p2.appendChild(span1);
                    //skill
                    let skill1 = document.createElement('div');
                    skill1.className = 'skill';
                        let label1 = document.createElement('label');
                        label1.innerHTML = 'Javascript';
                        let input1 = document.createElement('input');
                        input1.type = 'range';
                        input1.style = 'width: 50%;';
                        input1.setAttribute('min', '0');
                        input1.setAttribute('max', '10');
                        input1.value = '9';
                        input1.setAttribute('disabled', '');
                    skill1.append(label1, input1);

                    let skill2 = document.createElement('div');
                    skill2.className = 'skill';
                        let label2 = document.createElement('label');
                        label2.innerHTML = 'CSS';
                        let input2 = document.createElement('input');
                        input2.type = 'range';
                        input2.style = 'width: 50%;';
                        input2.setAttribute('min', '0');
                        input2.setAttribute('max', '10');
                        input2.value = '8';
                        input2.setAttribute('disabled', '');
                    skill2.append(label2, input2);


                    let skill3 = document.createElement('div');
                    skill3.className = 'skill';
                        let label3 = document.createElement('label');
                        label3.innerHTML = 'React';
                        let input3 = document.createElement('input');
                        input3.type = 'range';
                        input3.style = 'width: 50%;';
                        input3.setAttribute('min', '0');
                        input3.setAttribute('max', '10');
                        input3.value = '2';
                        input3.setAttribute('disabled', '');
                    skill3.append(label3, input3);
                
                    
                    let skill4 = document.createElement('div');
                    skill4.className = 'skill';
                        let label4 = document.createElement('label');
                        label4.innerHTML = 'Redux';
                        let input4 = document.createElement('input');
                        input4.type = 'range';
                        input4.style = 'width: 50%;';
                        input4.setAttribute('min', '0');
                        input4.setAttribute('max', '10');
                        input4.value = '6';
                        input4.setAttribute('disabled', '');
                    skill4.append(label4, input4);
                    

                    let skill5 = document.createElement('div');
                    skill5.className = 'skill';
                        let label5 = document.createElement('label');
                        label5.innerHTML = 'Javascript';
                        let input5 = document.createElement('input');
                        input5.type = 'range';
                        input5.style = 'width: 50%;';
                        input5.setAttribute('min', '0');
                        input5.setAttribute('max', '10');
                        input5.value = '5';
                        input5.setAttribute('disabled', '');
                    skill5.append(label5, input5);

                    let skill6 = document.createElement('div');
                    skill6.className = 'skill';
                        let label6 = document.createElement('label');
                        label6.innerHTML = 'HTML';
                        let input6 = document.createElement('input');
                        input6.type = 'range';
                        input6.style = 'width: 50%;';
                        input6.setAttribute('min', '0');
                        input6.setAttribute('max', '10');
                        input6.value = '8';
                        input6.setAttribute('disabled', '');
                    skill6.append(label6, input6);


                p2.append(skill1, skill2, skill3, skill4, skill5, skill6);

                let p3 = document.createElement('p');
                    let span2 = document.createElement('span');
                    span2.setAttribute('style', 'font-weight: bold; display: block; margin: 5px auto; width: fit-content;');
                    span2.innerHTML = 'Additional Skills';
                p3.appendChild(span2);  

                    let skill7 = document.createElement('div');
                    skill7.className = 'skill';
                        let label7 = document.createElement('label');
                        label7.innerHTML = 'Project Management';
                        let input7 = document.createElement('input');
                        input7.type = 'range';
                        input7.style = 'width: 50%;';
                        input7.setAttribute('min', '0');
                        input7.setAttribute('max', '10');
                        input7.value = '9';
                        input7.setAttribute('disabled', '');
                    skill7.append(label7, input7);

                    let skill8 = document.createElement('div');
                    skill8.className = 'skill';
                        let label8 = document.createElement('label');
                        label8.innerHTML = 'Recruitment';
                        let input8 = document.createElement('input');
                        input8.type = 'range';
                        input8.style = 'width: 50%;';
                        input8.setAttribute('min', '0');
                        input8.setAttribute('max', '10');
                        input8.value = '7';
                        input8.setAttribute('disabled', '');
                    skill8.append(label8, input8);

                    let skill9 = document.createElement('div');
                    skill9.className = 'skill';
                        let label9 = document.createElement('label');
                        label9.innerHTML = 'Business Development';
                        let input9 = document.createElement('input');
                        input9.type = 'range';
                        input9.style = 'width: 50%;';
                        input9.setAttribute('min', '0');
                        input9.setAttribute('max', '10');
                        input9.value = '3';
                        input9.setAttribute('disabled', '');
                    skill9.append(label9, input9);

                    let skill10 = document.createElement('div');
                    skill10.className = 'skill';
                        let label10 = document.createElement('label');
                        label10.innerHTML = 'Editing';
                        let input10 = document.createElement('input');
                        input10.type = 'range';
                        input10.style = 'width: 50%;';
                        input10.setAttribute('min', '0');
                        input10.setAttribute('max', '10');
                        input10.value = '8';
                        input10.setAttribute('disabled', '');
                    skill10.append(label10, input10);


                    let skill11 = document.createElement('div');
                    skill11.className = 'skill';
                        let label11 = document.createElement('label');
                        label11.innerHTML = 'Fundraising';
                        let input11 = document.createElement('input');
                        input11.type = 'range';
                        input11.style = 'width: 50%;';
                        input11.setAttribute('min', '0');
                        input11.setAttribute('max', '10');
                        input11.value = '5';
                        input11.setAttribute('disabled', '');
                    skill11.append(label11, input11);
                p3.append(skill7, skill8, skill9, skill10, skill11);

            subcontent2.append(i2, contentHeading2, p2, p3);

            let subcontent3 = document.createElement('div');
            subcontent3.className = 'subcontent';
            leftContent.appendChild(subcontent3);
                //content inside subcontent
                let i3 = document.createElement('i');
                i3.className = 'fa fa-briefcase fa-lg icon';
                let contentHeading3 = document.createElement('span');
                contentHeading3.className = 'content-heading';
                contentHeading3.innerHTML = 'Work Experience';
                let p4 = document.createElement('p');
                    let skill12 = document.createElement('div');
                    skill12.className = 'skill'
                        let label12 = document.createElement('label');
                        label12.innerHTML = 'Event Manager';
                        label12.style = 'font-weight: bold;';
                        let span3 = document.createElement('span');
                        span3.innerHTML = "03/2014 - 02/2017";
                    skill12.append(label12, span3);
                    let span4 = document.createElement('span');
                    span4.innerHTML = "C3 Presents, Washington DC"
                    let ul1 = document.createElement('ul');
                        let li1 = document.createElement('li');
                        li1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius. Lorem ipsum dolor.";
                        let li2 = document.createElement('li');
                        li2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam eum rerum hic temporibus fugiat est, perferendis itaque asperiores, ab enim debitis dolor possimus! Nesciunt recusandae nemo nihil quasi autem!";
                        let li3 = document.createElement('li');
                        li3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus hic adipisci labore quaerat ipsa eaque blanditiis, aliquam aspernatur nam rem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ex minus commodi consectetur accusantium.";
                    ul1.append(li1, li2, li3)

                p4.append(skill12, span4, ul1);
            subcontent3.append(i3, contentHeading3, p4);

        //right-content section
        let rightContent = document.createElement('div');
        rightContent.className = 'left-content'
        content.appendChild(rightContent);
            //subcontent
            let subcontent4 = document.createElement('div');
            subcontent4.className = 'subcontent';
            rightContent.appendChild(subcontent4);
                //content inside subcontent
                let i4 = document.createElement('i');
                i4.className = 'fa fa-briefcase fa-lg icon';
                let contentHeading4 = document.createElement('span');
                contentHeading4.className = 'content-heading';
                contentHeading4.innerHTML = 'Work Experience';
                let p5 = document.createElement('p');
                    let skill13 = document.createElement('div');
                        skill13.className = 'skill'
                            let label13 = document.createElement('label');
                            label13.innerHTML = 'Community Relatiions Manager';
                            label13.style = 'font-weight: bold;';
                            let span5 = document.createElement('span');
                            span5.innerHTML = "06/2011 - 02/2014";
                        skill13.append(label13, span5);
                        let span6 = document.createElement('span');
                        span6.innerHTML = "Gay & Lesbian Elder Housing, Los Angeles";
                        let ul2 = document.createElement('ul');
                            let li4 = document.createElement('li');
                            li4.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius. Lorem ipsum dolor.";
                            let li5 = document.createElement('li');
                            li5.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae impedit alias dolorum doloribus maiores possimus.";
                            let li6 = document.createElement('li');
                            li6.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facere consequatur incidunt praesentium non.";
                            let li7 = document.createElement('li');
                            li7.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';
                        ul2.append(li4, li5, li6, li7)
                    p5.append(skill13, span6, ul2);
            subcontent4.append(i4, contentHeading4, p5);


            let subcontent5 = document.createElement('div');
            subcontent5.className = 'subcontent';
            rightContent.appendChild(subcontent5);
                let i5 = document.createElement('i');
                i5.className = 'fa fa-graduation-cap fa-lg icon';
                let contentHeading5 = document.createElement('span');
                contentHeading5.className = 'content-heading';
                contentHeading5.innerHTML = 'Education';
                let p6 = document.createElement('p');
                let skill14 = document.createElement('div');
                skill14.className = 'skill'
                    let label14 = document.createElement('label');
                    label14.innerHTML = 'Engineering & immeersion program';
                    label14.style = 'font-weight: bold;';
                    let span7 = document.createElement('span');
                    span7.innerHTML = "11/2018 - 06/2018";
                skill14.append(label14, span7);
                let span8 = document.createElement('span');
                span8.innerHTML = "Thinkful Chicago, IL";
                let span9 = document.createElement('span');
                span9.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dicta itaque quasi quidem tenetur neque veritatis dolorum in earum esse.';
                let ul3 = document.createElement('ul');
                    let li8 = document.createElement('li');
                    li8.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius. Lorem ipsum dolor.Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum error! Quidem vero in sint voluptas veniam ex. Expedita, aperiam.";
                    let li9 = document.createElement('li');
                    li9.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque obcaecati autem sequi asperiores saepe officia ab blanditiis quis nisi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae impedit alias dolorum doloribus maiores possimus.";
                    let li10 = document.createElement('li');
                    li10.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ipsum quasi consequatur repellat dolores, ad tenetur fugiat dolore iusto provident.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facere consequatur incidunt praesentium non.";
                    let li11 = document.createElement('li');
                    li11.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum qui dolor commodi sit dolore!';
                ul3.append(li8, li9, li10, li11)

                let skill15 = document.createElement('div');
                skill15.className = 'skill'
                    let label15 = document.createElement('label');
                    label15.innerHTML = 'BA, English';
                    label15.style = 'font-weight: bold;';
                    let span10 = document.createElement('span');
                    span10.innerHTML = "11/2001 - 06/2005";
                    let span11 = document.createElement('span');
                    span11.innerHTML = "University of California, Los Angeles";
                skill15.append(label15, span10, span11);
                
            p6.append(skill14, span8, span9, ul3, skill15);
            subcontent5.append(i5, contentHeading5, p6)