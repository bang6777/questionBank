
from tk import *
import tkinter.filedialog
import PIL.Image
import PIL.ImageTk
import datetime
from imutils.perspective import four_point_transform
from imutils import contours
import numpy as np
import cv2
import imutils
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

def luudiem(tenn, diemm):
    f = open("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Ketqua/result.txt", "w")
    f.write(str(tenn)+"         "+str(diemm)+"          " +
            str(date.strftime("%Y%m%d %H:%M:%S")+"\n"))
    f.close()


def luubangdiem():
        duongdan = "D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem" + \
            str(date.strftime("%Y%m%d %H:%M:%S"))
        with open("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Ketqua/result.txt", "r") as rf:
            with open(duongdan, "w+") as wf:
                wf.write("MSSV            Score        Graded at\n")
                for line in rf:
                    wf.write(line)
        f = open(
            "D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/result.txt", "w")
        f.write("")
        f.close()
        exportedpint = Label(
            root, text="Export point sheet success!").place(x=30, y=585)


def timkhung(khungbt):
        khung = None
        if len(khungbt) > 0:
            khungbt = sorted(khungbt, key=cv2.contourArea, reverse=True)
            # tim khu vuc sap xep knhung lomn nho .contourArea
            for a in khungbt:
                peri = cv2.arcLength(a, True)
                approx = cv2.approxPolyDP(a, 0.02 * peri, True)

                if len(approx) == 4:
                    khung = approx
                    break
        return khung

def timkhungcham(baithi):
        btxam = cv2.cvtColor(baithi, cv2.COLOR_BGR2GRAY)
        btmo = cv2.GaussianBlur(btxam, (5, 5), 0)
        btcanh = cv2.Canny(btmo, 75, 200)

        khungtl = cv2.findContours(btcanh.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        khungtl = imutils.grab_contours(khungtl)
        return khungtl

def timo1(khungtl,x):
        khung1 = None
        if len(khungtl) > 0:
            khungtl = sorted(khungtl, key=cv2.contourArea, reverse=True)
            for b in khungtl[x:30]:
                peri = cv2.arcLength(b, True)
                approx = cv2.approxPolyDP(b, 0.02 * peri, True)
                if len(approx) == 4:
                    khung1 = approx
                    break
        return khung1


def chuyendoi(nhandang):
        nhandangxam = cv2.cvtColor(nhandang, cv2.COLOR_BGR2GRAY)
        nhandangmo = cv2.GaussianBlur(nhandangxam, (5, 5), 0)
        nhandangcanh = cv2.Canny(nhandangmo, 75, 200)
        khungdang = cv2.findContours(nhandangcanh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        khungdang = imutils.grab_contours(khungdang)
        return khungdang



def tam(tlkhung0, thresh0):
        made = []
        n=0
        for f in tlkhung0:
            (x, y, w, h) = cv2.boundingRect(f)
            ar = w / float(h)
            if w >= 10 and h >= 10 and ar >= 0.9 and ar <= 1.1:
                made.append(f)
        made = contours.sort_contours(made, method="top-to-bottom")[0]
        for (q, i) in enumerate(np.arange(0, len(made), 10)):
            cautraloisx0 = contours.sort_contours(made[i:i + 10])[0]
            bubbled0 = None
            for (j, c) in enumerate(cautraloisx0):
                matna0 = np.zeros(thresh0.shape, dtype="uint8")
                cv2.drawContours(matna0, [c], -1, 255, -1)

                matna0 = cv2.bitwise_and(thresh0, thresh0, mask=matna0)
                tong0 = cv2.countNonZero(matna0)

                if bubbled0 is None or tong0 > bubbled0[0]:
                    bubbled0 = (tong0, j)
            n = bubbled0[1] + 1
        return n
def luubaikt(fileluuu, tenluuu):
        baiin = cv2.cvtColor(fileluuu, cv2.COLOR_BGR2RGB)
        tenbailuu = str(tenluuu)+"-"+str(date.strftime("%Y%m%d-%H:%M:%S"))
        cv2.imwrite("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/{0}.jpg".format(tenbailuu), baiin)
def guimaildi():
  
        f = open("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/result.txt", "r")
        for i in f:
            dsmail.append(i)
        for i in range(len(dsmail)):
            dsmail[i] = dsmail[i].split()
        print(dsmail)
        for i in range(len(dsmail)):
            for j in range(len(list)):
                if(dsmail[i][0] == list[j][0]):
                    tomail = list[j][1]
                    duongdan = "D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/"+list[j][0]+"-"+dsmail[j][2] +"-"+dsmail[j][3] + ".jpg"
                    sendmail(tomail, dsmail[i][1], duongdan)
                    print("Result was sent to "+tomail)
                    break
        f = open("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/result.txt", "w")
        f.write("")
        f.close()
        sentmail = Label(root, text="Mails Were Sent.").place(x=30, y=675)

def sendmail(tomail, diem,duongdan):
        email_user = 'bang98.2016@gmail.com'
        email_send = tomail
        subject = 'Score of your test!'

        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_send
        msg['Subject'] = subject

        body = 'Your score is '+diem+'. And your test was graded in below!'
        msg.attach(MIMEText(body, 'plain'))

        filename = duongdan
        attachement = open(filename, 'rb')
        namefile = os.path.basename(filename)

        part = MIMEBase('application', 'octet-stream')
        part.set_payload((attachement).read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', "attachment; filename= " + namefile)

        msg.attach(part)
        text = msg.as_string()
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, 'bang98.2016')

        server.sendmail(email_user, email_send, text)
        server.quit()



def chambai():
        file1 = "D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Bubble-sheet-grading-using-OMR/bubble-sheet-grading/img/02.jpg"
        img1= cv2.imread(file1[len(file1)-1])
        for i in range(len(img1)):
            anh = file1[i]
            # hx = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
            # hm = cv2.GaussianBlur(hx, (5,5),0)
            # hc = cv2.Canny(hm, 75, 200)

            can1 = Canvas(root, width=2000, height=2000)
            can1.place(x=870, y=80)
            mn = cv2.imread(anh)

            hx = cv2.cvtColor(mn, cv2.COLOR_BGR2GRAY)
            hm = cv2.GaussianBlur(hx, (5,5),0)
            hc = cv2.Canny(hm, 75, 200)

            khungbt = cv2.findContours(hc.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            khungbt = imutils.grab_contours(khungbt)
            khung = None
            khung = timkhung(khungbt)
# xoay anh. ngang doc 
            baithi = four_point_transform(mn, khung.reshape(4, 2))
            # ------
            khungtln = timkhungcham(baithi)
            khung1n = timo1(khungtln, 0)
            baithi = four_point_transform(baithi, khung1n.reshape(4, 2))
            # ---
            baithi = baithi[20:baithi.shape[0] - 20, 20:baithi.shape[1] - 20]

            # XOAY BAI THI
            phantren = baithi[0:baithi.shape[0]/34, 0:baithi.shape[1]]
            row, col, cha = baithi.shape
# show hinh cat
            # cv2.imshow('img',phantren)
            cv2.waitKey(0)
            dem1 = 0
            for i in range(phantren.shape[0]):
                for j in range(phantren.shape[1]):
                    if phantren[i,j,0] <100:
                        dem1 = dem1 +1
            # print dem1
            if dem1 < 1000:
                dem2 = 0
                benphai = baithi[0: baithi.shape[0], 0: baithi.shape[1]/34]
                for i in range(benphai.shape[0]):
                    for j in range(benphai.shape[1]):
                        if benphai[i, j, 0] < 150:
                            dem2 = dem2 + 1
                # print dem2
                if dem2 < 1000:
                    dem3 = 0
                    bentrai = baithi[0:baithi.shape[0], baithi.shape[1]-baithi.shape[1]/34: baithi.shape[1]]
                    for i in range(bentrai.shape[0]):
                        for j in range(bentrai.shape[1]):
                            if bentrai[i, j, 0] < 50:
                                dem3 = dem3 + 1
                    # print dem3
                    if dem3 <1000:
                        r = cv2.getRotationMatrix2D((col/2, row/2),180,1)
                        baithi = cv2.warpAffine(baithi, r, (col,row))
                    else:
                        r = cv2.getRotationMatrix2D((col / 2, row / 1.488), 90, 1)
                        baithi = cv2.warpAffine(baithi, r, (row, col))
                else:
                    r = cv2.getRotationMatrix2D((col / 2.525, row / 2), -90, 1)
                    baithi = cv2.warpAffine(baithi, r, (row, col))

            # NHAN DANG SO CAU HOI

            nhandang = baithi[1:row/20, 0:col]
            khungdang = chuyendoi(nhandang)
            khungnhandang = timkhung(khungdang)
            nhandang = four_point_transform(nhandang, khungnhandang.reshape(4,2))
            nhandang = nhandang[6:nhandang.shape[0]-6,6:nhandang.shape[1]-6]

            phunhandang = cv2.cvtColor(nhandang, cv2.COLOR_BGR2GRAY)
            thresh0 = cv2.threshold(phunhandang,0,255,cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
            tlkhung0 = cv2.findContours(thresh0.copy(),cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            tlkhung0 = imutils.grab_contours(tlkhung0)
            n = tam(tlkhung0,thresh0)

            p=0
            if n == 1:
                p = 10
            else:
                if n==2:
                    p = 15
                else:
                    p = 20

            dung = 0
            socauhoi = 0
            # ANSWER_KEY = {0:0,1:1,2:2,3:2,4:1,5:1,6:1,7:0,8:0,9:2,10: 0, 11: 0, 12: 1, 13: 2, 14: 2, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1}

            khungtl = timkhungcham(baithi)
            khung1 = timo1(khungtl,0)
            khung2 = timo1(khungtl, 2)

            # o1 = four_point_transform(baithi, khung1.reshape(4, 2))
            toado1 = khung1[0][0]
            d1 = (toado1[0] + toado1[1]) / 2

            for o in range(4):
                if ((khung1[o][0][0] + khung1[o][0][1]) / 2 < d1):
                    toado1 = khung1[o][0]
                    d1 = (toado1[0] + toado1[1]) / 2
            toado2 = khung2[0][0]
            d2 = (toado2[0] + toado2[1]) / 2
            for o in range(4):
                if ((khung2[o][0][0] + khung2[o][0][1]) / 2 < d2):
                    toado2 = khung2[o][0]
                    d2 = (toado2[0] + toado2[1]) / 2
            if (d1 > d2 ):
                tamp1 = khung1
                tamp2 = khung2
                toado = toado1
                toado1 = toado2
                toado2 = toado
            else:
                tamp1 = khung2
                tamp2 = khung1

            o1 = four_point_transform(baithi, tamp2.reshape(4,2))
            o1 = o1[5:o1.shape[0] - 5, 5:o1.shape[1] - 5]
            phukhung1 = cv2.cvtColor(o1, cv2.COLOR_BGR2GRAY)
            thresh1 = cv2.threshold(phukhung1, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
            tlkhung1 = cv2.findContours(thresh1.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            tlkhung1 = imutils.grab_contours(tlkhung1)

            cautraloi1 = []
            for f in tlkhung1:
                (x, y, w, h) = cv2.boundingRect(f)
                ar = w / float(h)
                if w >= 20 and h >= 20 and ar >= 0.9 and ar <= 1.1:
                    cautraloi1.append(f)

            cautraloi1 = contours.sort_contours(cautraloi1, method="top-to-bottom")[0]


            for (q, i) in enumerate(np.arange(0, len(cautraloi1), 4)):
                cautraloisx1 = contours.sort_contours(cautraloi1[i:i + 4])[0]
                bubbled1 = None

                for (j, c) in enumerate(cautraloisx1):
                    matna1 = np.zeros(thresh1.shape, dtype="uint8")
                    cv2.drawContours(matna1, [c], -1, 255, -1)

                    matna1 = cv2.bitwise_and(thresh1, thresh1, mask=matna1)
                    tong1 = cv2.countNonZero(matna1)

                    if bubbled1 is None or tong1 > bubbled1[0]:
                        bubbled1 = (tong1, j)
                color = (255, 0, 0)
                k = ANSWER_KEY[q]

                if k == bubbled1[1]:
                    color = (0, 255, 0)
                    dung += 1

                cv2.drawContours(o1, [cautraloisx1[k]], -1, color, 3)

            baithi[toado1[1]+5:toado1[1]+o1.shape[0]+5, toado1[0]+5:toado1[0]+o1.shape[1]+5] = o1


            o2 = four_point_transform(baithi, tamp1.reshape(4,2))
            o2 = o2[5:o2.shape[0] - 5, 5:o2.shape[1] - 5]
            phukhung2 = cv2.cvtColor(o2, cv2.COLOR_BGR2GRAY)
            thresh2 = cv2.threshold(phukhung2, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
            tlkhung2 = cv2.findContours(thresh2.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            tlkhung2 = imutils.grab_contours(tlkhung2)

            cautraloi2 = []
            for f in tlkhung2:
                (x, y, w, h) = cv2.boundingRect(f)
                ar = w / float(h)
                if w >= 20 and h >= 20 and ar >= 0.9 and ar <= 1.1:
                    cautraloi2.append(f)

            cautraloi2 = contours.sort_contours(cautraloi2, method="top-to-bottom")[0]

            for (q, i) in enumerate(np.arange(0, len(cautraloi2), 4)):
                cautraloisx2 = contours.sort_contours(cautraloi2[i:i + 4])[0]
                bubbled2 = None

                for (j, c) in enumerate(cautraloisx2):
                    matna2 = np.zeros(thresh2.shape, dtype="uint8")
                    cv2.drawContours(matna2, [c], -1, 255, -1)

                    matna2 = cv2.bitwise_and(thresh2, thresh2, mask=matna2)
                    tong2 = cv2.countNonZero(matna2)

                    if bubbled2 is None or tong2 > bubbled2[0]:
                        bubbled2 = (tong2, j)
                color = (255, 0, 0)
                k = ANSWER_KEY[p+q]

                if k == bubbled2[1]:
                    color = (0, 255, 0)
                    dung += 1

                cv2.drawContours(o2, [cautraloisx2[k]], -1, color, 3)

            baithi[toado2[1]+5:toado2[1]+o2.shape[0]+5, toado2[0]+5:toado2[0]+o2.shape[1]+5] = o2

            # print dung

            # NHAN DANG MSSV
            khung3 = timo1(khungtl,8)
            o3 = four_point_transform(baithi, khung3.reshape(4, 2))
            p = cv2.getRotationMatrix2D((o3.shape[0] / 2, o3.shape[1] / 1.52), -90, 1)
            o3 = cv2.warpAffine(o3, p, (o3.shape[0], o3.shape[1]))
            o3 = o3[5:o3.shape[0] - 5, 5:o3.shape[1] - 5]
            phukhung3 = cv2.cvtColor(o3, cv2.COLOR_BGR2GRAY)
            thresh3 = cv2.threshold(phukhung3, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
            tlkhung3 = cv2.findContours(thresh3.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            tlkhung3 = imutils.grab_contours(tlkhung3)
            cautraloi3 = []
            for f in tlkhung3:
                (x, y, w, h) = cv2.boundingRect(f)
                ar = w / float(h)
                if w >= 20 and h >= 20 and ar >= 0.9 and ar <= 1.1:
                    cautraloi3.append(f)

            cautraloi3 = contours.sort_contours(cautraloi3, method="top-to-bottom")[0]
            mssv = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
            for (q, i) in enumerate(np.arange(0, len(cautraloi3), 10)):
                cautraloisx3 = contours.sort_contours(cautraloi3[i:i + 10])[0]
                bubbled3 = None

                for (j, c) in enumerate(cautraloisx3):
                    matna3 = np.zeros(thresh3.shape, dtype="uint8")
                    cv2.drawContours(matna3, [c], -1, 255, -1)

                    matna3 = cv2.bitwise_and(thresh3, thresh3, mask=matna3)
                    tong3 = cv2.countNonZero(matna3)

                    if bubbled3 is None or tong3 > bubbled3[0]:
                        bubbled3 = (tong3, j)
                mssv[q] = 9 - bubbled3[1]
            msv = mssv[0]
            for i in range(1, 7):
                msv = (msv * 10) + mssv[i]
            # print msv

            if n == 1:
                socauhoi = 20
            else:
                if n==2:
                    socauhoi = 30
                else:
                    socauhoi = 40
            diem = float(dung*10)/socauhoi
            # print diem
            cv2.putText(baithi, "{:.2f}".format(diem),(int(baithi.shape[0]/2.5),int(baithi.shape[1]/2.5)), cv2.FONT_HERSHEY_SIMPLEX,4,(255,0,0),6)
            cv2.putText(baithi, "{:}".format(msv), (int(baithi.shape[0] / 4.5), int(baithi.shape[1] / 5.2)),cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 3)

            # nhandang = imutils.resize(nhandang, height=50)
            baithi = imutils.resize(baithi, height=800)
            # o2 = imutils.resize(o2, height=800)
            im = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(baithi))
            can1.create_image(5, 5, anchor=NW, image=im)


            luubaikt(baithi, msv)
            f = open("D:/questionBank/CODE_CHAM_BAI/CODE_CHAM_BAI/Luubangdiem/result.txt", "a")
            f.write(
                str(msv) + "         " + str(diem) + "          " + str(date.strftime("%Y%m%d %H:%M:%S") + "\n"))
            f.close()
            done = Label(root, text="Done!").place(x=20, y=405)
