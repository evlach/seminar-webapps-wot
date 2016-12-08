<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <xsl:apply-templates/>
        </html>
    </xsl:template>

    <xsl:template match="PERIODIC_TABLE">
        <body>
            <xsl:apply-templates/>
        </body>
    </xsl:template>

    <xsl:template match="ATOM">
        <xsl:element name="p">
            <xsl:value-of select="NAME" /> <br />-
             Boiling Point: <xsl:value-of select="BOILING_POINT" />
             <xsl:text> </xsl:text>
             <xsl:value-of select="BOILING_POINT/@UNITS" />
        </xsl:element>
    </xsl:template>

</xsl:stylesheet>
