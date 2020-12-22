# them thu vien
from imutils.perspective import four_point_transform
from skimage.filters import threshold_local
from imutils import contours
import numpy as np
import argparse
import imutils
import cv2



ANSWER_KEY = {0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1}


img = cv2.imread("testt.JPG")

gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray,(5,5),0)
edged = cv2.Canny(blurred,75,200)

# tim duong vien
cnts = cv2.findContours(edged.copy(),cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)

docCnt = None
# co it nhat 1 duong vien duoc tim thay
if len(cnts) >0:
    # sap thu tu duong vien giam dan
    cnts = sorted(cnts, key=cv2.contourArea, reverse= True)

    # lap cac duong vien da sap xep
    for c in cnts:
        # gan dung duong vien
        peri = cv2.arcLength(c,True)
        approx = cv2.approxPolyDP(c,0.02 * peri, True)

        # neu duong vien co 4 diem, chung ta gia su da tim thay bai thi
        if len(approx) == 4:
            docCnt = approx
            break
paper = four_point_transform(img, docCnt.reshape(4, 2))

cv2.imshow("ddd",imutils.resize(paper, height = 650))
gray1 = cv2.cvtColor(paper,cv2.COLOR_BGR2GRAY)
blurred1 = cv2.GaussianBlur(gray1,(5,5),0)
edged1 = cv2.Canny(blurred1,75,200)

cnts1 = cv2.findContours(edged1.copy(),cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
cnts1 = imutils.grab_contours(cnts1)

docCnt1 = None
if len(cnts1) >0:
    # sap thu tu duong vien giam dan
    cnts1 = sorted(cnts1, key=cv2.contourArea, reverse= True)
    # lap cac duong vien da sap xep
    for c in cnts1[4:10]:
        # gan dung duong vien
        peri = cv2.arcLength(c,True)
        approx = cv2.approxPolyDP(c,0.02 * peri, True)

        # neu duong vien co 4 diem, chung ta gia su da tim thay bai thi
        if len(approx) == 4:
            docCnt1 = approx
            break


mau1 = four_point_transform(paper, docCnt1.reshape(4, 2))
phumau1 = cv2.cvtColor(mau1,cv2.COLOR_BGR2GRAY)
# cv2.imshow("mau1",phumau1)

thresh = cv2.threshold(phumau1, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]


# tim duong vien trong thresh, tao ds cac duong vien cac cau tra loi
cnts2 = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cnts2 = imutils.grab_contours(cnts2)
questionCnts = []
# vong lap cac duong vien
for c in cnts2:
    # tinh gioi han hop cua duong vien, sau do tinh ti le
    (x, y, w,h) = cv2.boundingRect(c)
    ar = w / float(h)

    #vung cau tra loi co ti le xap xi = 1
    if w >= 20 and h>= 20 and ar >= 0.9 and ar<= 1.1:
        questionCnts.append(c)
# sap xep cau hoi tu tren xuong duoi, khoi tao so cau hoi dung
#----------------------------------------------------------------------------------------

docCnt2 = None
if len(cnts1) >0:
    # sap thu tu duong vien giam dan
    cnts1 = sorted(cnts1, key=cv2.contourArea, reverse= True)
    # lap cac duong vien da sap xep
    for c in cnts1[6:15]:
        # gan dung duong vien
        peri = cv2.arcLength(c,True)
        approx = cv2.approxPolyDP(c,0.02 * peri, True)

        # neu duong vien co 4 diem, chung ta gia su da tim thay bai thi
        if len(approx) == 4:
            docCnt2 = approx
            break

mau2 = four_point_transform(paper, docCnt2.reshape(4, 2))
phumau2 = cv2.cvtColor(mau2,cv2.COLOR_BGR2GRAY)
cv2.imshow("mau2",phumau2)

#----------------------------------------------------------------------------------------

questionCnts = contours.sort_contours(questionCnts, method="top-to-bottom")[0]
correct = 0

# moi cau hoi co 4 cau tra loi
for (q, i) in enumerate(np.arange(0, len(questionCnts), 4)):
    #sap xep cau tra loi tu trai sang phai, khoi tao chi muc cau tl sui bot
    cnts2 = contours.sort_contours(questionCnts[i:i + 4])[0]
    bubbled = None
    # lap tren cac duong vien da sap xep
    for (j, c) in enumerate(cnts2):
        # xay dung mat na
        mask = np.zeros(thresh.shape, dtype= "uint8")
        cv2.drawContours(mask, [c], -1, 255, -1)

        # ap dung mat na, sau do dem so pixel !0 trong duong vien bong bong
        mask = cv2.bitwise_and(thresh, thresh, mask=mask)
        total = cv2.countNonZero(mask)

        if bubbled is None or total > bubbled[0]:
            bubbled = (total, j)
    # tao mau duong vien cho cau tra loi dung
    color = (0, 0, 255)
    k = ANSWER_KEY[q]

    # kiem tra cau tra loi co dung khong?
    if k ==bubbled[1]:
        color = (0, 255, 0)
        correct +=1

    # ve ben ngoai cau tra loi dung
    cv2.drawContours(mau1, [cnts2[k]], -1, color, 3)



# tinh diem
score = (correct / 10.0) * 100
print("[INFO] score: {:.2f}%".format(score))
cv2.putText(mau1, "{:.2f}%".format(score), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)

cv2.imshow("Exam", mau1)

cv2.waitKey(0)
cv2.destroyAllWindows();

